"""Build the small display font files used by the Hartwell & Vane theme.

Fraunces ships with four variable axes (weight, optical size, SOFT, WONK). Loading all
four costs about 265 KB and drags the mobile Lighthouse score under 95. This script bakes
SOFT to 100 and WONK to 0, keeps weight 400 to 600 and the full optical size range, and
keeps only the characters an English-language shop site needs.

Run from the project root, after `npm install`:

    pip install fonttools brotli
    python scripts/subset-display-font.py

Output goes to src/assets/fonts/. The @font-face rules are in src/styles/starwind.css.
Fraunces is licensed under the SIL Open Font License 1.1, which permits modified copies.
"""

from pathlib import Path

from fontTools import subset
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "node_modules" / "@fontsource-variable" / "fraunces" / "files"
OUT = ROOT / "src" / "assets" / "fonts"

# Basic Latin, Latin-1 (accents, pound sign), dashes, curly quotes, ellipsis
UNICODES = (
    list(range(0x20, 0x7F))
    + list(range(0xA0, 0x100))
    + [0x2013, 0x2014, 0x2018, 0x2019, 0x201C, 0x201D, 0x2026]
)



def plain_forms(font):
    """Glyph swaps the font makes when WONK is 0 (plain ampersand and so on).

    The source file defaults to WONK 1 and swaps to the plain forms through a feature
    variation. Pinning the axis does not carry that swap over, so it is applied to the
    character map by hand after instancing.
    """
    gsub = font["GSUB"].table
    axes = [axis.axisTag for axis in font["fvar"].axes]
    swaps = {}
    if not gsub.FeatureVariations:
        return swaps
    for record in gsub.FeatureVariations.FeatureVariationRecord:
        if {axes[c.AxisIndex] for c in record.ConditionSet.ConditionTable} != {"WONK"}:
            continue
        for substitution in record.FeatureTableSubstitution.SubstitutionRecord:
            for index in substitution.Feature.LookupListIndex:
                for subtable in gsub.LookupList.Lookup[index].SubTable:
                    subtable = getattr(subtable, "ExtSubTable", subtable)
                    swaps.update(getattr(subtable, "mapping", {}))
    return swaps


OUT.mkdir(parents=True, exist_ok=True)

for style in ("normal", "italic"):
    font = TTFont(SOURCE / f"fraunces-latin-full-{style}.woff2")
    swaps = plain_forms(font)
    font = instancer.instantiateVariableFont(font, {"SOFT": 100, "WONK": 0, "wght": (400, 600)})
    for table in font["cmap"].tables:
        for codepoint, glyph in list(table.cmap.items()):
            if glyph in swaps:
                table.cmap[codepoint] = swaps[glyph]

    options = subset.Options()
    options.flavor = "woff2"
    options.layout_features = ["*"]
    subsetter = subset.Subsetter(options)
    subsetter.populate(unicodes=UNICODES)
    subsetter.subset(font)

    target = OUT / f"fraunces-soft-{style}.woff2"
    font.flavor = "woff2"
    font.save(target)
    print(f"{target.relative_to(ROOT)}  {target.stat().st_size / 1024:.0f} KB")
