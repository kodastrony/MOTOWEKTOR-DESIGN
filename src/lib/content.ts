import type {
  HeroSlide,
  ProductCard,
  FeatureCard,
  OfferTile,
  OfferProduct,
  NavItem,
  FooterColumn,
  ContactInfo,
} from "@/types";

/* MotoWektor — real first-party brand content. Product photos are the
   company's own cutouts downloaded from motowektor.pl. */

const P = "/images/motowektor/products";

export const contact: ContactInfo = {
  company: "Moto Wektor Sp. z o.o.",
  address: "ul. Poligonowa 35, 43-300 Bielsko-Biała",
  phoneMain: "+48 33 483 20 81",
  phoneSales: "+48 602 409 830",
  email: "biuro@motowektor.pl",
  hoursSales: "Dział handlowy: pon.–pt. 8:00–16:00",
  hoursService: "Serwis i części: pon.–pt. 7:00–15:00",
};

/** The 8 body types — used by the homepage grid AND the "Zabudowy" mega-menu */
export const offerProducts: OfferProduct[] = [
  { id: "plandeka", name: "Skrzynie z plandeką", desc: "Burtofirany, firanki i dach przesuwny", image: `${P}/skrzynie-z-plandeka.png`, href: "#" },
  { id: "otwarte", name: "Skrzynie otwarte", desc: "Trwałe, kabina pojedyncza lub podwójna", image: `${P}/skrzynie-otwarte.png`, href: "#" },
  { id: "kontenery", name: "Kontenery", desc: "Aluminiowe i z płyty warstwowej", image: `${P}/kontenery.png`, href: "#" },
  { id: "chlodnie", name: "Chłodnie i izotermy", desc: "Zabudowy z certyfikatem ATP", image: `${P}/chlodnie.png`, href: "#" },
  { id: "twincab", name: "TwinCab", desc: "Powiększone kabiny sypialne", image: `${P}/twincab.png`, href: "#" },
  { id: "furgony", name: "Furgony serwisowe", desc: "Warsztaty mobilne i brygadówki", image: `${P}/furgony.png`, href: "#" },
  { id: "kabiny", name: "Kabiny sypialne", desc: "Komfort dla kierowcy, rozmiary S/M/L", image: `${P}/kabiny.png`, href: "#" },
  { id: "akcesoria", name: "Doposażenia i akcesoria", desc: "Windy, oświetlenie, mocowania PSM", image: `${P}/akcesoria.png`, href: "#" },
];

/** Secondary links shown on the right side of the "Zabudowy" mega-menu */
export const offerMenuLinks: { label: string; href: string }[] = [
  { label: "Zobacz pełną ofertę", href: "#" },
  { label: "Realizacje", href: "#" },
  { label: "Konfigurator TechnikPRO", href: "#" },
  { label: "Sieć serwisowa", href: "#" },
  { label: "Instrukcje i filmy", href: "#" },
  { label: "Doposażenia", href: "#" },
  { label: "Polityka jakości", href: "#" },
  { label: "O firmie", href: "#" },
  { label: "Kariera", href: "#" },
  { label: "Kontakt", href: "#" },
];

export const navItems: NavItem[] = [
  { label: "Zabudowy" }, // rendered as the rich mega-menu in SiteHeader
  { label: "Realizacje" },
  { label: "Serwis" },
  { label: "Instrukcje" },
  { label: "Blog" },
  {
    label: "Dla dealerów",
    panel: [
      {
        heading: "Dla dealerów",
        links: [
          { label: "Konfigurator TechnikPRO", href: "#" },
          { label: "Wsparcie marketingowe", href: "#" },
          { label: "Identyfikacja wizualna", href: "#" },
        ],
      },
    ],
  },
];

const lightBg = "linear-gradient(180deg,#ffffff 0%,#eef0f2 100%)";

export const heroSlides: HeroSlide[] = [
  {
    id: "hero-brand",
    eyebrow: "Producent zabudów od 2008 roku",
    name: "Sprawdzone zabudowy dostawcze",
    subLink: { label: "Każdy projekt dopasowujemy do potrzeb klienta", href: "#" },
    ctas: [
      { label: "Zapytaj o wycenę", href: "#", variant: "primary" },
      { label: "Zobacz ofertę", href: "#", variant: "light" },
    ],
    background: lightBg,
    image: `${P}/kontenery.png`,
    textTone: "dark",
  },
  {
    id: "hero-chlodnie",
    eyebrow: "Cold chain · certyfikat ATP",
    name: "Chłodnie i izotermy",
    subLink: { label: "Kontrolowana temperatura od −20 °C", href: "#" },
    ctas: [
      { label: "Zapytaj o wycenę", href: "#", variant: "primary" },
      { label: "Poznaj szczegóły", href: "#", variant: "light" },
    ],
    background: lightBg,
    image: `${P}/chlodnie.png`,
    textTone: "dark",
  },
];

export const featureCard: FeatureCard = {
  id: "technikpro",
  heading: "Konfigurator TechnikPRO",
  subheading:
    "Autorski program do projektowania zabudowy online — bez odpowiednika na polskim rynku.",
  ctas: [
    { label: "Dla dealerów", href: "#", variant: "light" },
    { label: "Dowiedz się więcej", href: "#", variant: "text" },
  ],
  background: "linear-gradient(180deg,#2a2d31 0%,#1b1d20 100%)",
};

export const productCards: ProductCard[] = [
  {
    id: "c-plandeka",
    eyebrow: "Transport paletowy",
    name: "Skrzynie z plandeką",
    subLink: { label: "Burtofirany i firanki", href: "#" },
    ctas: [
      { label: "Zapytaj o wycenę", href: "#", variant: "primary" },
      { label: "Szczegóły", href: "#", variant: "light" },
    ],
    background: lightBg,
    image: `${P}/skrzynie-z-plandeka.png`,
    textTone: "dark",
  },
  {
    id: "c-kontenery",
    eyebrow: "Uniwersalne",
    name: "Kontenery",
    subLink: { label: "Aluminium / płyta warstwowa", href: "#" },
    ctas: [
      { label: "Zapytaj o wycenę", href: "#", variant: "primary" },
      { label: "Szczegóły", href: "#", variant: "light" },
    ],
    background: lightBg,
    image: `${P}/kontenery.png`,
    textTone: "dark",
  },
  {
    id: "c-twincab",
    eyebrow: "Komfort kierowcy",
    name: "TwinCab",
    subLink: { label: "Powiększone kabiny sypialne", href: "#" },
    ctas: [
      { label: "Zapytaj o wycenę", href: "#", variant: "primary" },
      { label: "Szczegóły", href: "#", variant: "light" },
    ],
    background: lightBg,
    image: `${P}/twincab.png`,
    textTone: "dark",
  },
  {
    id: "c-furgony",
    eyebrow: "Serwis w terenie",
    name: "Furgony serwisowe",
    subLink: { label: "Warsztat mobilny i brygadówki", href: "#" },
    ctas: [
      { label: "Zapytaj o wycenę", href: "#", variant: "primary" },
      { label: "Szczegóły", href: "#", variant: "light" },
    ],
    background: lightBg,
    image: `${P}/furgony.png`,
    textTone: "dark",
  },
];

export const offerTiles: OfferTile[] = [
  {
    id: "realizacje",
    title: "Realizacje",
    description: "Ponad 80 zrealizowanych projektów zabudów na różnych pojazdach.",
    ctas: [{ label: "Zobacz galerię", href: "#", variant: "light" }],
    thumb: "linear-gradient(135deg,#f7d27a 0%,#f7a30f 100%)",
    image: `${P}/skrzynie-otwarte.png`,
  },
  {
    id: "serwis",
    title: "Serwis i części",
    description: "Przeglądy okresowe zabudów oraz oryginalne części zamienne.",
    ctas: [
      { label: "Znajdź serwis", href: "#", variant: "light" },
      { label: "Kontakt", href: "#", variant: "light" },
    ],
    thumb: "linear-gradient(135deg,#cdd3d8 0%,#9aa1a8 100%)",
    image: `${P}/furgony.png`,
  },
];

export const serviceSection = {
  heading: "Sieć serwisowa MotoWektor",
  subheading: "Przeglądy okresowe zabudów w autoryzowanych punktach w całej Polsce.",
  cta: { label: "Znajdź serwis", href: "#", variant: "primary" as const },
  background: "linear-gradient(180deg,#f6f7f8 0%,#e7eaec 100%)",
};

export const dealerPanel: HeroSlide = {
  id: "dealer",
  eyebrow: "Skrzynie otwarte",
  name: "Wytrzymałe skrzynie otwarte",
  subLink: { label: "Z windą, plandeką lub burtami", href: "#" },
  ctas: [
    { label: "Zapytaj o wycenę", href: "#", variant: "primary" },
    { label: "Szczegóły", href: "#", variant: "light" },
  ],
  background: lightBg,
  image: `${P}/skrzynie-otwarte.png`,
  textTone: "dark",
};

export const ctaStripLinks: { label: string; href: string }[] = [
  { label: "Zapytaj o wycenę", href: "#" },
  { label: "Pobierz katalogi", href: "#" },
  { label: "Instrukcje i filmy", href: "#" },
  { label: "Kontakt", href: "#" },
];

export const footerColumns: FooterColumn[] = [
  {
    heading: "Firma",
    links: [
      { label: "O firmie", href: "#" },
      { label: "Polityka jakości", href: "#" },
      { label: "Kariera", href: "#" },
      { label: "RMI", href: "#" },
    ],
  },
  {
    heading: "Dla klienta",
    links: [
      { label: "Zabudowy", href: "#" },
      { label: "Realizacje", href: "#" },
      { label: "Serwis", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Instrukcje", href: "#" },
    ],
  },
  {
    heading: "Dla dealerów",
    links: [
      { label: "Konfigurator", href: "#" },
      { label: "Wsparcie marketingowe", href: "#" },
      { label: "Identyfikacja wizualna", href: "#" },
    ],
  },
];
