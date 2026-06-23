import type {
  HeroSlide,
  ProductCard,
  FeatureCard,
  OfferTile,
  NavItem,
  FooterLink,
} from "@/types";

/* All content below is GENERIC PLACEHOLDER data — invented names and neutral
   filler copy, gradients standing in for full-bleed media. Swap for real
   brand content later. */

export const navItems: NavItem[] = [
  {
    label: "Vehicles",
    panel: [
      {
        heading: "Models",
        links: [
          { label: "Model One", href: "#" },
          { label: "Model Two", href: "#" },
          { label: "Model Three", href: "#" },
          { label: "Model Four", href: "#" },
        ],
      },
      {
        heading: "Shop",
        links: [
          { label: "Inventory", href: "#" },
          { label: "Trade-in", href: "#" },
          { label: "Compare", href: "#" },
          { label: "Test Drive", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Energy",
    panel: [
      {
        heading: "Products",
        links: [
          { label: "Solar Panels", href: "#" },
          { label: "Home Battery", href: "#" },
          { label: "For Business", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Charging",
    panel: [
      {
        heading: "Charging",
        links: [
          { label: "Charging Network", href: "#" },
          { label: "Home Charging", href: "#" },
          { label: "Find a Charger", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Discover",
    panel: [
      {
        heading: "Discover",
        links: [
          { label: "Updates", href: "#" },
          { label: "Stories", href: "#" },
          { label: "Demo Drive", href: "#" },
          { label: "Support", href: "#" },
        ],
      },
    ],
  },
  { label: "Shop" },
];

export const heroSlides: HeroSlide[] = [
  {
    id: "hero-1",
    name: "Model One",
    subLink: { label: "0.99% APR Available", href: "#" },
    ctas: [
      { label: "Order Now", href: "#", variant: "primary" },
      { label: "Learn More", href: "#", variant: "light" },
    ],
    background:
      "linear-gradient(175deg,#9fb6c9 0%,#b9bdba 42%,#8b8a86 64%,#33322f 100%)",
    textTone: "dark",
  },
  {
    id: "hero-2",
    name: "Model Two",
    subLink: { label: "0% APR Available", href: "#" },
    ctas: [
      { label: "Order Now", href: "#", variant: "primary" },
      { label: "Learn More", href: "#", variant: "light" },
    ],
    background:
      "linear-gradient(175deg,#8aa7b6 0%,#b4c0bd 38%,#71807a 66%,#26302b 100%)",
    textTone: "dark",
  },
];

export const featureCard: FeatureCard = {
  id: "feature-assist",
  heading: "Advanced Driver Assist",
  subheading: "Smarter assistance on every drive. Subscribe from $99/mo.",
  ctas: [
    { label: "Schedule Demo", href: "#", variant: "light" },
    { label: "Learn More", href: "#", variant: "text" },
  ],
  background: "linear-gradient(180deg,#2c3138 0%,#1a1d22 100%)",
};

export const productCards: ProductCard[] = [
  {
    id: "prod-1",
    eyebrow: "Sport Sedan",
    name: "Model One",
    subLink: { label: "Lease From $329/mo", href: "#" },
    ctas: [
      { label: "Order Now", href: "#", variant: "primary" },
      { label: "Learn More", href: "#", variant: "light" },
    ],
    background:
      "linear-gradient(160deg,#bcae93 0%,#9d9074 52%,#5a5240 78%,#332f22 100%)",
    textTone: "light",
  },
  {
    id: "prod-2",
    eyebrow: "Midsize SUV",
    name: "Model Two",
    subLink: { label: "Lease From $459/mo", href: "#" },
    ctas: [
      { label: "Order Now", href: "#", variant: "primary" },
      { label: "Learn More", href: "#", variant: "light" },
    ],
    background:
      "linear-gradient(160deg,#a3b4ba 0%,#80938f 50%,#4a5854 78%,#222e2a 100%)",
    textTone: "light",
  },
  {
    id: "prod-3",
    eyebrow: "Full-Size Sedan",
    name: "Model Three",
    subLink: { label: "Lease From $699/mo", href: "#" },
    ctas: [
      { label: "Order Now", href: "#", variant: "primary" },
      { label: "Learn More", href: "#", variant: "light" },
    ],
    background:
      "linear-gradient(160deg,#c2bdb4 0%,#8d877c 52%,#56514a 78%,#2c2a26 100%)",
    textTone: "light",
  },
];

export const offerTiles: OfferTile[] = [
  {
    id: "offer-1",
    title: "Current Offers",
    description: "Explore limited-time offers on new vehicles.",
    ctas: [{ label: "Learn More", href: "#", variant: "light" }],
    thumb: "linear-gradient(135deg,#cfd4d8 0%,#9aa1a8 100%)",
  },
  {
    id: "offer-2",
    title: "Inventory",
    description: "Find nearby vehicles available for immediate delivery.",
    ctas: [
      { label: "New", href: "#", variant: "light" },
      { label: "Pre-Owned", href: "#", variant: "light" },
    ],
    thumb: "linear-gradient(135deg,#c4ccd2 0%,#8b939b 100%)",
  },
];

export const chargingSection = {
  heading: "Charging Network",
  subheading: "Charge across the country with ease.",
  cta: { label: "Find a Charger", href: "#", variant: "dark" as const },
  background: "linear-gradient(180deg,#e4eaef 0%,#c5d0d8 100%)",
};

export const solarPanel: HeroSlide = {
  id: "solar",
  name: "Solar Panels",
  subLink: { label: "Power your home with sunlight", href: "#" },
  ctas: [
    { label: "Order Now", href: "#", variant: "primary" },
    { label: "Learn More", href: "#", variant: "light" },
  ],
  background:
    "linear-gradient(175deg,#cdd6dd 0%,#a9b5bd 44%,#74808a 70%,#3c454d 100%)",
  textTone: "dark",
};

export const ctaStripLinks: FooterLink[] = [
  { label: "Demo Drive", href: "#" },
  { label: "Find Us", href: "#" },
  { label: "Help Me Choose", href: "#" },
  { label: "Support", href: "#" },
];

export const footerLinks: FooterLink[] = [
  { label: "Privacy & Legal", href: "#" },
  { label: "Vehicle Recalls", href: "#" },
  { label: "Contact", href: "#" },
  { label: "News", href: "#" },
  { label: "Get Updates", href: "#" },
  { label: "Locations", href: "#" },
  { label: "Learn", href: "#" },
];
