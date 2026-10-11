// Everything specific to the shop lives in this file: facts, copy and photos.
// The Man Cave is a real shop. Every fact here is sourced in shop-brief.md; do not add anything unverified.

import fade1 from "@/assets/placeholder/fade-1.jpg";
import scissors1 from "@/assets/placeholder/scissors-1.jpg";

export const shop = {
  name: "The Man Cave",
  // The fascia sets "The" on its side next to the first word
  signPrefix: "The",
  signLines: ["Man", "Cave"],
  strapline: "Barbers. Chelmsford. Since 2020.",
  tagline: "Providing Essex with the finest barbers, since 2020.",
  established: "2020",
  street: "1 High Street",
  streetName: "High Street",
  streetNumber: "1",
  town: "Chelmsford",
  postcode: "CM1 1BE",
  landmark: "Opposite HSBC",
  phone: "01245 611523",
  phoneHref: "tel:+441245611523",
  phoneIntl: "+441245611523",
  parking: "Parking at Waterloo Lane.",
  instagram: { handle: "@mancavechelmsford", url: "https://www.instagram.com/mancavechelmsford/" },
  // Opens the shop's Google listing, where its reviews are
  googleListing: "https://www.google.com/maps/search/?api=1&query=The+Man+Cave%2C+1+High+St%2C+Chelmsford+CM1+1BE",
  // As shown on the shop's Google Maps listing on 11 October 2026. Set to null to hide it.
  googleRating: { score: 4.8, count: 324 } as { score: number; count: number } | null,
  mapQuery: "The Man Cave, 1 High St, Chelmsford CM1 1BE",
  directions: "https://www.google.com/maps/dir/?api=1&destination=The+Man+Cave%2C+1+High+St%2C+Chelmsford+CM1+1BE",
  timeZone: "Europe/London",
  map: { lat: 51.73465, lon: 0.47366 },
  // While true the site asks search engines not to index it and the footer says it is a draft.
  // Set to false once the shop has approved the site.
  draft: true,
  draftNote: "Draft site by ChairFill. Not yet approved by the shop.",
  liveNote: "Site by ChairFill.",
  // Shown while the stand-in photos are in use. Set to "" once the shop's own photos are in.
  photoNote: "Photos are stand-ins from Unsplash.",
};

// Headings, labels and button text. The shop's voice.
export const copy = {
  nav: { board: "The board", clocks: "The clocks", visit: "Find the cave" },
  ring: "Ring",
  callShort: "Call",
  directionsShort: "Directions",
  seeHours: "See the clocks",
  board: {
    title: "The board",
    aside: "Cuts, beards and shaves.",
    noticeLabel: "Prices",
    notice: "Ring the shop for today's prices.",
  },
  clocks: {
    title: "The clocks",
    intro: "Open seven days. Each clock is set to the time the doors open.",
    nowLabel: "Chelmsford, now",
    today: "Today",
    openNow: "Open now, until",
    closedNow: "Closed now.",
    opensAt: "Doors open at",
  },
  reviews: {
    title: "Word on the High Street",
    line: "Don't take our word for it.",
    cta: "Read our reviews on Google",
    ratingLabel: "Google reviews",
  },
  follow: { label: "The cuts are on Instagram", cta: "Follow the shop" },
  visit: {
    title: "Find the cave",
    bookTitle: "Ring ahead",
    bookText: "Booking is by phone. Give the shop a call.",
    openMap: "Get directions",
  },
  signOff: "Stay sharp.",
};

export const about = {
  heading: "Number one, High Street.",
  body: "That's the address. Opposite HSBC, in the middle of Chelmsford city centre, and open seven days a week. The shop was refitted in October 2025.",
};

export const photos = {
  hero: { src: fade1, alt: "Clippers blending a fade behind the ear", position: "50% 45%" },
  about: { src: scissors1, alt: "A barber cutting hair with scissors over a comb", position: "50% 30%" },
};

// Prices are not published. Add `price` (in pounds) to a service and the board shows it.
export type Service = { name: string; price?: number };

export const services: Service[] = [
  { name: "Men's haircut" },
  { name: "Beard trim" },
  { name: "Head shave" },
  { name: "Hot towel shave" },
];

export const hours = [
  { day: "Monday", open: "9:00", close: "17:45" },
  { day: "Tuesday", open: "9:00", close: "17:45" },
  { day: "Wednesday", open: "9:00", close: "17:45" },
  { day: "Thursday", open: "9:00", close: "18:45" },
  { day: "Friday", open: "9:00", close: "18:45" },
  { day: "Saturday", open: "8:30", close: "17:15" },
  { day: "Sunday", open: "10:00", close: "15:45" },
] as { day: string; open: string | null; close: string | null }[];
