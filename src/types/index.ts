export type CtaVariant = "primary" | "light" | "dark" | "text";

export interface Cta {
  label: string;
  href: string;
  variant: CtaVariant;
}

export interface HeroSlide {
  id: string;
  eyebrow?: string;
  name: string;
  subLink?: { label: string; href: string };
  ctas: Cta[];
  /** CSS background (gradient placeholder standing in for full-bleed media) */
  background: string;
  /** Whether overlaid text/controls read better as dark or light */
  textTone: "dark" | "light";
}

export interface ProductCard {
  id: string;
  eyebrow: string;
  name: string;
  subLink: { label: string; href: string };
  ctas: Cta[];
  background: string;
  textTone: "dark" | "light";
}

export interface FeatureCard {
  id: string;
  heading: string;
  subheading?: string;
  ctas: Cta[];
  background: string;
}

export interface OfferTile {
  id: string;
  title: string;
  description: string;
  ctas: Cta[];
  /** small thumbnail gradient on the right */
  thumb: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  /** mega-menu groups; empty for a plain link */
  panel?: { heading?: string; links: NavLink[] }[];
}

export interface FooterLink {
  label: string;
  href: string;
}
