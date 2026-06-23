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
  /** CSS background for the panel (light gradient / solid) */
  background: string;
  /** Real product photo (transparent cutout) shown over the background */
  image?: string;
  /** Whether overlaid text/controls read better as dark or light */
  textTone: "dark" | "light";
}

/** A body-type / product used in the offer grid and the "Zabudowy" mega-menu */
export interface OfferProduct {
  id: string;
  name: string;
  desc: string;
  image: string;
  href: string;
}

export interface ProductCard {
  id: string;
  eyebrow: string;
  name: string;
  subLink: { label: string; href: string };
  ctas: Cta[];
  background: string;
  image?: string;
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
  /** optional product photo shown on the right instead of the gradient */
  image?: string;
}

export interface FooterColumn {
  heading: string;
  links: { label: string; href: string }[];
}

export interface ContactInfo {
  company: string;
  address: string;
  phoneMain: string;
  phoneSales: string;
  email: string;
  hoursSales: string;
  hoursService: string;
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
