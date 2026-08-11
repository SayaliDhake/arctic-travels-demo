export const reviews = [
  {
    quote: "An unparalleled awakening of the senses. Arctic Travels doesn't just book trips; they curate memories that linger long after the ice has melted.",
    name: "James R.",
    role: "Polar Enthusiast",
    rating: 5,
  },
  {
    quote: "Every detail was handled before I even thought to ask. The kind of quiet, competent luxury that's rare to find.",
    name: "Priya N.",
    role: "Repeat Traveler",
    rating: 5,
  },
  {
    quote: "I've booked a dozen ski trips myself. This was the first time I let someone else do it — and it was better for it.",
    name: "Marcus T.",
    role: "Verified Guest, Zermatt",
    rating: 5,
  },
];

export const regions = [
  { name: "Svalbard", country: "Norway", tone1: "#0f2a3f", tone2: "#1f6f6a", tone3: "#bfe9c9" },
  { name: "Lapland", country: "Finland", tone1: "#101b3d", tone2: "#3c4f8a", tone3: "#e7ecff" },
];

export const resorts = [
  {
    slug: "northern-solstice",
    name: "The Northern Solstice",
    location: "Lofoten Archipelago, Norway",
    price: "€1,850",
    rating: "Exceptional · 94 reviews",
    blurb:
      "Perched on the jagged cliffs of Norway's northern coast, The Northern Solstice is a masterclass in architectural restraint. Designed to vanish into the landscape, each glass-walled suite offers an unhindered view of the Aurora Borealis and the dark, churning waters of the Norwegian Sea.",
    philosophy:
      "Our philosophy is rooted in the concept of “Deep Stillness.” Here, the modern world recedes, replaced by the rhythmic sound of crashing waves and the crisp, scentless air of the Arctic circle.",
    amenities: [
      { label: "Heated Glass Domes", tag: "Signature" },
      { label: "Arctic Thermal Spa", tag: "Wellness" },
      { label: "Michelin Nordic Kitchen", tag: "Dining" },
      { label: "Fjord Expeditions", tag: "Excursion" },
      { label: "Aurora Concierge", tag: "Service" },
      { label: "Private Heli-Pad", tag: "Private" },
    ],
    tone1: "#1a2f52",
    tone2: "#3f6f8a",
    tone3: "#9fd3e8",
  },
];

export const experiencePreviews = [
  { name: "Wilderness Sledding", meta: "5 Days / 4 Nights", tone1: "#132038", tone2: "#42607d", tone3: "#dfeaf2" },
  { name: "Ocean Expedition Pass", meta: "Seasonal Unlimited", tone1: "#0c1b2e", tone2: "#2b4f66", tone3: "#a9c9d6" },
  { name: "Northern Lights Chase", meta: "Guided Night Tours", tone1: "#0b1730", tone2: "#215a4d", tone3: "#8fe3b0" },
];

export const travelWindows = [
  { id: "w1", range: "Dec 14 — Dec 21", label: "Winter Solstice & Aurora Peak" },
  { id: "w2", range: "Jan 05 — Jan 12", label: "Deep Freeze Experience" },
];

// Short-form quotes for the Landing page review strip (matches the
// wireframe export's single-line format).
export const landingReviews = [
  { quote: "Best ski holiday of my life — Zermatt was incredible.", name: "James R.", rating: 5 },
  { quote: "Every detail handled before I thought to ask.", name: "Priya N.", rating: 5 },
  { quote: "The kind of trip you plan a year for and it still surprises you.", name: "Marcus T.", rating: 5 },
];
