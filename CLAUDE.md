# The Man Cave, Chelmsford

Spec site for a real barber shop, built from barber-base. The verified facts, open questions and art direction are in `shop-brief.md`; photo slots are in `PHOTOS_NEEDED.md`. Use real data only: nothing about the shop may be invented, and the site stays `noindex` (`draft: true` in `src/data/shop.ts`) until the shop signs.

## Design rules

### Theming

- Every shop gets its own theme, so all colours and fonts must come from CSS variables / Tailwind theme tokens in one place (`src/styles/starwind.css`). Never hardcode colours or fonts in components.
- Default palette: near black background, off white text, one accent colour (brass, gold or oxblood).
- Two fonts max: a condensed display font for headings (Oswald or Bebas Neue) and a clean body font (Manrope).

### Banned

- Purple gradients
- Generic glassmorphism
- Stock SaaS layouts
- Emoji
- Generic AI looking design

### Layout and verification

- Mobile first.
- Before saying any task is done, use Playwright to screenshot at 390px and 1440px, critique the screenshots against these rules, then fix the issues.

### Performance

- Lighthouse target 95+ on every page.
- Use Astro's `Image` component for all photos.

### Motion

- Respect `prefers-reduced-motion`.
- Motion is calm. One wow effect per page max.
- Smooth scrolling (Lenis) and scroll reveals (GSAP) live in `src/scripts/motion.ts`. It picks elements by where they sit on the page, so new sections need a line added there to ease in. It loads only after the page is idle and never hides anything in the HTML or CSS.
- Reference copies of GSAP, Lenis, Motion, AOS, Magic UI, shadcn/ui, Preline and daisyUI are in `C:\Users\nners\chairfill\libraries\`. Read them for current APIs before using one. The React-based ones (Magic UI, shadcn/ui, Motion) do not drop straight into this Astro site.

### Tooling

- Use the frontend-design skill and Starwind components.
- Use Context7 for current Astro, Tailwind and GSAP docs.

## Avoiding the template look

These apply to every shop. A site should look designed by a person with taste, for that one shop.

### Before coding

- Start from a concept taken from the shop's own world (its signage, printed matter, tools, street), not from a generic "premium barber" look.
- Screenshot what exists, list what reads as generic, then write an art direction brief of ten lines or fewer. Build from the brief.

### Typography

- Do not use the default display faces (Playfair Display, generic geometric sans). Pick a display face with character and use its variable axes and italic.
- Two font families at most: one display, one body.
- Make the scale dramatic. The shop name should be huge with tight leading and may collide with a photo or the edge of the screen. Pair it with small, precise labels in body-face capitals with wide tracking.
- Use the italic for personality in a few places only.

### Layout

- Break the grid. Use asymmetric compositions, let type and images overlap, and let some images bleed off the edge of the screen.
- Vary section widths, padding and background so the page has rhythm. No stack of identical blocks.
- No full-screen hero photo with a dark overlay and text on top.
- No equal card grids, no carousel of cards, no uniform photo grid. Stagger, offset and crop each item differently.
- Give each section the form of a real object from the shop (a price board, a door sign, a ticket). One section, usually the price list, should be the most memorable thing on the page.
- Number sections like a printed menu when the page reads as one.

### Colour and detail

- Use the accent colour as a full band or object at least once, and invert one section (light on a dark page, or the reverse).
- Sharp corners or a very small radius. No soft rounded cards, no drop shadows, no glass.
- One ornamental divider style, used consistently. No icon spam.
- A very subtle grain over the page is fine, done in CSS or a tiny inline SVG.

### Copy

- No generic headings ("Our services", "The barbers", "What customers say"). Write headings and button labels in the shop's own voice, short and specific.
- Do not invent facts about the shop. Asides must be true of the brief.

### Mobile

- Phones get their own composition, not a stacked desktop page: type sized to the screen, photos bleeding off one edge, items alternating sides.
- Keep the fixed Book and Call bar on phones.

### Structure

- Everything specific to a shop (facts, copy, photos) lives in `src/data/shop.ts`. Components in `src/components/shop/` must not contain shop content.
- Display fonts with several variable axes are heavy. Re-run Lighthouse on mobile after any font change.

### Process

- Work section by section. After each, screenshot at 390px and 1440px, critique against the brief and these rules, and push further if it still looks like a template.

## Astro reference

- Start the dev server in background mode with `astro dev --background`. Manage it with `astro dev stop`, `astro dev status` and `astro dev logs`.
- Full documentation: https://docs.astro.build
- Guides to consult before related work:
  - [Routing, dynamic routes and middleware](https://docs.astro.build/en/guides/routing/)
  - [Astro components](https://docs.astro.build/en/basics/astro-components/)
  - [Framework components (React, Vue, Svelte)](https://docs.astro.build/en/guides/framework-components/)
  - [Content collections](https://docs.astro.build/en/guides/content-collections/)
  - [Styling and Tailwind](https://docs.astro.build/en/guides/styling/)
  - [Internationalization](https://docs.astro.build/en/guides/internationalization/)
