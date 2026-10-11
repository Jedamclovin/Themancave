// Everything specific to the shop lives in this file: facts, copy and photos.
// The Man Cave is a real shop. Facts are sourced in shop-brief.md. Anything that is a stand-in
// (prices, barbers, photos, the booking calendar) is marked as one here and listed in PHOTOS_NEEDED.md.

import fade1 from "@/assets/placeholder/fade-1.jpg";
import fade2 from "@/assets/placeholder/fade-2.jpg";
import scissors1 from "@/assets/placeholder/scissors-1.jpg";
import beard1 from "@/assets/placeholder/beard-1.jpg";
import gallery1 from "@/assets/placeholder/gallery-1.jpg";
import gallery2 from "@/assets/placeholder/gallery-2.jpg";
import gallery3 from "@/assets/placeholder/gallery-3.jpg";
import gallery4 from "@/assets/placeholder/gallery-4.jpg";
import gallery5 from "@/assets/placeholder/gallery-5.jpg";
import gallery6 from "@/assets/placeholder/gallery-6.jpg";
import gallery7 from "@/assets/placeholder/gallery-7.jpg";
import gallery8 from "@/assets/placeholder/gallery-8.jpg";

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
  // Cal.com booking page, as "user/event". This is ChairFill's demo calendar, not the shop's.
  calLink: "chairfill/booknow",
  // While true the site asks search engines not to index it, the footer says it is a draft,
  // and the booking calendar is labelled as a demo. Set to false once the shop has approved the site.
  draft: true,
  draftNote: "Draft site by ChairFill. Not yet approved by the shop.",
  liveNote: "Site by ChairFill.",
  // Shown while the stand-in photos are in use. Set to "" once the shop's own photos are in.
  photoNote: "Photos are stand-ins from Unsplash.",
  // The prices below are examples, not the shop's. Set to true once the shop has confirmed its prices.
  pricesConfirmed: false,
};

// Headings, labels and button text. The shop's voice.
export const copy = {
  nav: { board: "The board", chairs: "The chairs", clocks: "The clocks", visit: "Find the cave" },
  book: "Book a chair",
  bookShort: "Book",
  ring: "Ring",
  callShort: "Call",
  seeHours: "See the clocks",
  board: {
    title: "The board",
    aside: "Cuts, beards and shaves.",
    examplePrices: "Example prices, to be confirmed by the shop.",
    noticeLabel: "Seen what you want?",
  },
  chairs: {
    title: "The chairs",
    intro: "Pick your barber, or take whichever chair comes up first.",
    chairLabel: "Chair",
    bookWith: "Book with",
    placeholder: "Stand-in",
  },
  gallery: { title: "Off the chair", aside: "Fades, beards and scissor work.", open: "View photo" },
  clocks: {
    title: "The clocks",
    intro: "Open seven days. Each clock is set to the time the doors open.",
    nowLabel: "Chelmsford, now",
    today: "Today",
    open: "Open now",
    closed: "Closed",
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
  booking: {
    title: "Book a chair",
    intro: "Pick a day and a time. It takes a minute.",
    orRing: "or ring",
    demoNote: "Demo calendar. Bookings made here do not reach the shop.",
    loading: "Loading the calendar",
  },
  follow: { label: "The cuts are on Instagram", cta: "Follow the shop" },
  visit: { title: "Find the cave", openMap: "Get directions" },
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

// The four services are the shop's own. The prices and times are examples until `shop.pricesConfirmed` is true.
export type Service = { name: string; price?: number; minutes?: number };

export const services: Service[] = [
  { name: "Men's haircut", price: 20, minutes: 30 },
  { name: "Beard trim", price: 10, minutes: 15 },
  { name: "Head shave", price: 14, minutes: 20 },
  { name: "Hot towel shave", price: 22, minutes: 30 },
];

// Stand-ins. The shop has not named its barbers. Replace each entry and set `placeholder` to false.
export const barbers = [
  {
    name: "Barber one",
    speciality: "Speciality to come.",
    placeholder: true,
    photo: { src: fade2, alt: "A barber cutting a customer's hair with clippers", position: "50% 30%" },
  },
  {
    name: "Barber two",
    speciality: "Speciality to come.",
    placeholder: true,
    photo: { src: beard1, alt: "A barber trimming a reclined customer's beard with clippers", position: "50% 40%" },
  },
];

// In display order. The gallery layout has eight places; extra photos are ignored.
export const gallery = [
  { src: gallery1, alt: "Clippers cutting in a fade above the ear, seen close up", position: "40% 50%" },
  { src: gallery2, alt: "A barber lining up a beard with clippers below a skin fade", position: "50% 35%" },
  { src: gallery3, alt: "Clippers over a comb on a short crop with a high fade", position: "50% 35%" },
  { src: gallery4, alt: "A barber trimming a full beard with scissors, in black and white", position: "50% 45%" },
  { src: gallery5, alt: "Scissors shaping the edge of a full beard, seen in profile", position: "50% 40%" },
  { src: gallery6, alt: "Scissors cutting over a comb at a side parting", position: "50% 40%" },
  { src: gallery7, alt: "A comb and scissors working behind the ear", position: "50% 45%" },
  { src: gallery8, alt: "Scissors cutting over a red comb at the back of the head", position: "50% 35%" },
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
