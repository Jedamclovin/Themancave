// Everything specific to one shop lives in this file: facts, copy and photos.
// To build a new shop, replace these values and the theme in src/styles/starwind.css.

import heroPhoto from "@/assets/demo-1/hero.jpg";
import chair1 from "@/assets/demo-1/chair-1.jpg";
import chair2 from "@/assets/demo-1/chair-2.jpg";
import interior1 from "@/assets/demo-1/interior-1.jpg";
import interior2 from "@/assets/demo-1/interior-2.jpg";
import shave1 from "@/assets/demo-1/shave-1.jpg";
import shave2 from "@/assets/demo-1/shave-2.jpg";
import beard1 from "@/assets/demo-1/beard-1.jpg";
import towel1 from "@/assets/demo-1/towel-1.jpg";
import towel2 from "@/assets/demo-1/towel-2.jpg";
import fade1 from "@/assets/demo-1/fade-1.jpg";
import scissors1 from "@/assets/demo-1/scissors-1.jpg";
import pole1 from "@/assets/demo-1/pole-1.jpg";

export const shop = {
  name: "Hartwell & Vane",
  // The name as it breaks across lines when set large
  nameLines: ["Hartwell", "& Vane"],
  strapline: "Gentlemen's Barbers. Est. 1962.",
  tagline: "Sharp cuts, hot towels, no rush.",
  established: "1962",
  trade: "Gentlemen's Barbers",
  town: "Chelmsford, Essex",
  townShort: "Chelmsford",
  phone: "01245 000000",
  phoneHref: "tel:01245000000",
  parking: "Pay and display car parks within a five minute walk.",
  footerNote: "Demo site by ChairFill. Fictional shop.",
  photoCredit: "Photos from Unsplash.",
  timeZone: "Europe/London",
  // Chelmsford city centre, no street number
  map: { lat: 51.7343, lon: 0.4731 },
};

// Headings, labels and button text. The shop's voice.
export const copy = {
  nav: { prices: "Prices", chairs: "The chairs", visit: "Find the shop" },
  book: "Book a chair",
  bookShort: "Book",
  callShort: "Call",
  seePrices: "See the price board",
  prices: { title: "The price board", aside: "Times are a guide. We don't rush.", special: "The house special" },
  chairs: {
    title: "The chairs",
    intro: "Pick your barber, or take whichever chair comes up first.",
    chairLabel: "Chair No.",
  },
  gallery: { title: "The shop floor", aside: "Coffee's on." },
  reviews: { title: "Word of mouth", ticketLabel: "Appointment", signed: "Signed" },
  visit: {
    title: "Find the shop",
    signTitle: "Hours of business",
    today: "Today",
    closed: "Closed",
    telephone: "Telephone",
    bookText: "Ring the shop and we'll find you a slot, or walk in and take the first free chair.",
    ring: "Ring",
    openMap: "Open the map",
  },
  signOff: "Mind how you go.",
};

export const about = {
  heading: "Three chairs, one rule: take the time to get it right.",
  body: "We've kept the leather chairs, the hot towels and the straight razors, and lost the waiting around. Book online in two taps, or walk in and grab a coffee.",
};

export const photos = {
  hero: {
    src: heroPhoto,
    alt: "Three leather barber chairs facing mirrors on a brick wall, lit by warm pendant lamps",
  },
  about: { src: chair2, alt: "An antique leather barber chair beside a glass-fronted wooden cabinet" },
};

export type Service = {
  name: string;
  price: number;
  minutes: number;
  note?: string;
  // Shown as the pasted-on special instead of an ordinary row
  special?: boolean;
};

export const serviceGroups: { title: string; items: Service[] }[] = [
  {
    title: "Cuts",
    items: [
      { name: "Classic Scissor Cut", price: 20, minutes: 30 },
      { name: "Skin Fade", price: 22, minutes: 40 },
      { name: "Clipper Cut", price: 16, minutes: 20 },
      { name: "Long Hair Restyle", price: 28, minutes: 45 },
      { name: "Kids Cut", price: 14, minutes: 25, note: "Under 12" },
      { name: "Over 65s", price: 14, minutes: 25 },
    ],
  },
  {
    title: "Beard and shave",
    items: [
      { name: "Beard Trim and Shape", price: 12, minutes: 20 },
      { name: "Hot Towel Shave", price: 24, minutes: 40 },
      { name: "Hot Towel Beard Sculpt", price: 18, minutes: 30 },
    ],
  },
  {
    title: "Combos",
    items: [
      { name: "Cut and Beard", price: 30, minutes: 50 },
      {
        name: "The Full Hartwell",
        price: 45,
        minutes: 75,
        note: "Cut, hot towel shave and face treatment",
        special: true,
      },
    ],
  },
];

export const barbers = [
  {
    name: "Tom Hartwell",
    firstName: "Tom",
    role: "Owner",
    speciality: "Scissor work and classic gents' cuts.",
    detail: "20 years behind the chair.",
    photo: { src: scissors1, alt: "A barber cutting hair with scissors over a comb", position: "50% 30%" },
  },
  {
    name: "Ellis Vane",
    firstName: "Ellis",
    role: "Barber",
    speciality: "Skin fades and textured crops.",
    detail: "",
    photo: { src: fade1, alt: "Clippers blending a fade behind the ear", position: "50% 45%" },
  },
  {
    name: "Marco Diaz",
    firstName: "Marco",
    role: "Barber",
    speciality: "Beards and hot towel shaves.",
    detail: "",
    photo: {
      src: towel1,
      alt: "A hot towel held over a customer's eyes during a straight razor shave",
      position: "50% 60%",
    },
  },
];

// In display order. The gallery layout has seven places; extra photos are ignored.
export const gallery = [
  { src: interior1, alt: "A red leather barber chair in a dark wood-panelled room hung with framed pictures" },
  { src: pole1, alt: "A lit Gents Barbers sign and striped pole at night" },
  { src: towel2, alt: "A barber's hands wrapping a hot towel around a customer's face" },
  { src: shave1, alt: "A barber shaving a lathered customer with a straight razor" },
  { src: chair1, alt: "A brown buttoned leather barber chair seen from the front" },
  { src: beard1, alt: "A barber trimming a reclined customer's beard with clippers" },
  { src: interior2, alt: "A long, dimly lit barbershop with mirrors and a beamed ceiling" },
  { src: shave2, alt: "A customer leaning back for a razor shave in low light" },
];

export const hours = [
  { day: "Monday", open: null, close: null },
  { day: "Tuesday", open: "9:00", close: "18:00" },
  { day: "Wednesday", open: "9:00", close: "18:00" },
  { day: "Thursday", open: "9:00", close: "20:00", note: "Late night" },
  { day: "Friday", open: "9:00", close: "18:00" },
  { day: "Saturday", open: "8:00", close: "16:00" },
  { day: "Sunday", open: null, close: null },
] as { day: string; open: string | null; close: string | null; note?: string }[];

// The first review is set large; the rest become tickets.
export const reviews = [
  { quote: "Booked at 11pm on my phone, in the chair at 9am. Proper old school shave.", name: "Dan M." },
  { quote: "Best fade I've had in Essex. Ellis takes his time and it shows.", name: "James R." },
  { quote: "Took my son for his first proper haircut. Tom was brilliant with him.", name: "Sarah K." },
  { quote: "Hot towel shave is worth every penny. Walked out a new man.", name: "Priya S." },
  { quote: "Great chat, great coffee, even better cut.", name: "Luke T." },
];
