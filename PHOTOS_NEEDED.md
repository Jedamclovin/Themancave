# Photos needed

Every photo on the site is currently an Unsplash stand-in. None of them show The Man Cave. Swap each one for the shop's own photo before the site goes live.

To swap a photo: put the new file in `src/assets/`, change the import at the top of `src/data/shop.ts`, and update the `alt` text (and `position`, which sets the crop) in the `photos` block of the same file.

## Photo slots

| Slot | Where it shows | Shape | Current stand-in | What to ask the shop for |
| --- | --- | --- | --- | --- |
| `photos.hero` | Top of the page, hanging off the bottom of the sign | Portrait, 4:5 on phones and 3:4 on desktop. At least 1500px wide. | `src/assets/placeholder/fade-1.jpg` | A cut in progress or a finished fade, shot in the shop. Portrait. |
| `photos.about` | Bottom right of the plum band, overlapping the services board | Portrait, 4:5. At least 800px wide. | `src/assets/placeholder/scissors-1.jpg` | The shop interior: the plum bench, the clocks or the chairs. Portrait. |

## Other images

| Item | Where | Current state | What is needed |
| --- | --- | --- | --- |
| Favicon | Browser tab (`public/favicon.svg`, `public/favicon.ico`) | Astro's default icon | The shop's logo, with their permission, as a square SVG or PNG. |
| Social share image | Link previews on WhatsApp, Facebook and so on | None set | A 1200 x 630 image, usually the shopfront or the logo on slate. |

## Unused stand-ins

`fade-2.jpg` and `beard-1.jpg` are in `src/assets/placeholder/` but not used on the page. Delete the whole folder once the real photos are in, and set `photoNote` to `""` in `src/data/shop.ts` to remove the footer line about stand-in photos.

## Before using the shop's photos

Photos on their Instagram belong to the shop and may show customers. Get the shop's permission, and ask for the original files rather than saving them from Instagram.
