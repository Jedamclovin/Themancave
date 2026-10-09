// All shop content lives here. To build a new shop, replace this file's values.

export const shop = {
  name: "Hartwell & Vane",
  strapline: "Gentlemen's Barbers. Est. 1962.",
  tagline: "Sharp cuts, hot towels, no rush.",
  town: "Chelmsford, Essex",
  phone: "01245 000000",
  phoneHref: "tel:01245000000",
  parking: "Pay and display car parks within a five minute walk.",
  footerNote: "Demo site by ChairFill. Fictional shop.",
  timeZone: "Europe/London",
  // Chelmsford city centre, no street number
  map: { lat: 51.7343, lon: 0.4731 },
};

export const about = {
  heading: "Three chairs, one rule: take the time to get it right.",
  body: "We've kept the leather chairs, the hot towels and the straight razors, and lost the waiting around. Book online in two taps, or walk in and grab a coffee.",
};

export type Service = { name: string; price: number; minutes: number; note?: string };

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
    photo: "scissors",
  },
  {
    name: "Ellis Vane",
    firstName: "Ellis",
    role: "Barber",
    speciality: "Skin fades and textured crops.",
    detail: "",
    photo: "fade",
  },
  {
    name: "Marco Diaz",
    firstName: "Marco",
    role: "Barber",
    speciality: "Beards and hot towel shaves.",
    detail: "",
    photo: "towel",
  },
] as const;

export const hours = [
  { day: "Monday", open: null, close: null },
  { day: "Tuesday", open: "9:00", close: "18:00" },
  { day: "Wednesday", open: "9:00", close: "18:00" },
  { day: "Thursday", open: "9:00", close: "20:00", note: "Late night" },
  { day: "Friday", open: "9:00", close: "18:00" },
  { day: "Saturday", open: "8:00", close: "16:00" },
  { day: "Sunday", open: null, close: null },
] as { day: string; open: string | null; close: string | null; note?: string }[];

export const reviews = [
  { quote: "Booked at 11pm on my phone, in the chair at 9am. Proper old school shave.", name: "Dan M." },
  { quote: "Best fade I've had in Essex. Ellis takes his time and it shows.", name: "James R." },
  { quote: "Took my son for his first proper haircut. Tom was brilliant with him.", name: "Sarah K." },
  { quote: "Hot towel shave is worth every penny. Walked out a new man.", name: "Priya S." },
  { quote: "Great chat, great coffee, even better cut.", name: "Luke T." },
];
