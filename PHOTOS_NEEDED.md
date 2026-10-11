# Photos needed

Every photo on the site is currently an Unsplash stand-in. None of them show The Man Cave. Swap each one for the shop's own photo before the site goes live.

To swap a photo: put the new file in `src/assets/`, change the import at the top of `src/data/shop.ts`, and update the `alt` text (and `position`, which sets the crop) next to it in the same file.

## Photo slots

| Slot | Where it shows | Shape | Current stand-in | What to ask the shop for |
| --- | --- | --- | --- | --- |
| `photos.hero` | Top of the page, hanging off the bottom of the sign | Portrait, 4:5 on phones and 3:4 on desktop. At least 1500px wide. | `fade-1.jpg` | A cut in progress or a finished fade, shot in the shop. |
| `photos.about` | Bottom right of the plum band, overlapping the price board | Portrait, 4:5. At least 800px wide. | `scissors-1.jpg` | The shop interior: the plum bench, the clocks or the chairs. |
| `barbers[0].photo` | The chairs, chair 01 | Portrait, 4:5. At least 1100px wide. | `fade-2.jpg` | A portrait of the first barber, or of them at work. |
| `barbers[1].photo` | The chairs, chair 02 | Portrait, 3:4. At least 1100px wide. | `beard-1.jpg` | A portrait of the second barber, or of them at work. |
| `gallery[0]` | Off the chair, largest photo, top left | Portrait, about 2:3 | `gallery-1.jpg` (fade, clippers close up) | Their best fade. |
| `gallery[1]` | Off the chair | Portrait, about 3:4 | `gallery-2.jpg` (beard line-up) | A beard line-up or shape-up. |
| `gallery[2]` | Off the chair | Portrait, about 4:5 | `gallery-3.jpg` (high fade) | A finished short cut. |
| `gallery[3]` | Off the chair | Portrait, about 3:4 | `gallery-4.jpg` (beard, scissors, black and white) | Beard work. |
| `gallery[4]` | Off the chair | Portrait, about 3:4 | `gallery-5.jpg` (beard, scissors, profile) | A finished beard, in profile. |
| `gallery[5]` | Off the chair | Portrait, about 3:4 | `gallery-6.jpg` (scissors over comb) | Scissor work. |
| `gallery[6]` | Off the chair | Portrait, about 3:4 | `gallery-7.jpg` (comb and scissors) | Scissor work or a longer style. |
| `gallery[7]` | Off the chair | Portrait, about 4:5 | `gallery-8.jpg` (scissors over red comb) | Any finished cut. |

All stand-in files are in `src/assets/placeholder/`, with photographer credits in `credits.md` there. Gallery photos open full size in the lightbox, so supply them at 1600px wide or more.

## Other images

| Item | Where | Current state | What is needed |
| --- | --- | --- | --- |
| Favicon | Browser tab and phone home screen (`public/favicon.png`, `public/favicon.ico`, `public/apple-touch-icon.png`) | A logo supplied by ChairFill on 11 October 2026 (kept at `src/assets/logo.png`, white background removed). It is a different drawing from the logo on the shop's Instagram. | The shop's approval of this logo, or their own logo file to replace it. |
| Social share image | Link previews on WhatsApp, Facebook and so on | None set | A 1200 x 630 image, usually the shopfront or the logo on slate. |

## Prices to confirm

The four services are the ones the shop lists. The prices and times are examples, not the shop's, and the page says so under the price board. Replace them in `services` in `src/data/shop.ts`, then set `pricesConfirmed: true` to remove the "Example prices" line.

| Service | Example price | Example time |
| --- | --- | --- |
| Men's haircut | £20 | 30 min |
| Beard trim | £10 | 15 min |
| Head shave | £14 | 20 min |
| Hot towel shave | £22 | 30 min |

## Barbers to confirm

"Barber one" and "Barber two" are stand-ins, labelled "Stand-in" on the page. For each real barber, set the name, speciality and photo in `barbers` in `src/data/shop.ts` and set `placeholder: false`.

## Booking calendar to replace

The booking section uses ChairFill's demo Cal.com calendar (`chairfill/booknow`), and the page labels it as a demo. Bookings made there do not reach the shop. Before launch, set `calLink` in `src/data/shop.ts` to the shop's own booking page.

## Before launch

- Delete `src/assets/placeholder/` once the real photos are in, and set `photoNote` to `""` in `src/data/shop.ts` to remove the footer line about stand-in photos.
- Set `draft: false` to remove the noindex tag, the draft footer line and the demo calendar label.
- Photos on the shop's Instagram belong to the shop and may show customers. Get the shop's permission, and ask for the original files rather than saving them from Instagram.
