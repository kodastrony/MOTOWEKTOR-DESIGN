# MotoWektor — Site Plan

Rebuild of [motowektor.pl](https://www.motowektor.pl/) on the Tesla.com layout pattern, branded for MotoWektor.

## Brand system

- **Colors:** yellow `#F7A30F` (PANTONE 137C — primary accent / CTA), ink `#1F2225` (headings), grey `#3D4044` (body, PANTONE 446C), `#6A6D71` (secondary), white, panel `#F4F4F4`.
- **Primary CTA:** yellow background + dark bold text ("Zapytaj o wycenę"). Secondary: white + border ("Szczegóły").
- **Type:** Inter (clean professional sans), bold headings.
- **Logo:** real MotoWektor wordmark (`/images/motowektor/logo.png`).
- **Imagery:** real product cutouts (trucks on white) from motowektor.pl — `/images/motowektor/products/*`.
- **Persistent CTA:** "Zadzwoń +48 602 409 830" (phone-first conversion, like the live site).

## Homepage (built) — top to bottom

| # | Section | Component | Content |
|---|---------|-----------|---------|
| 0 | Hero carousel | `HeroCarousel` | 2 slides: brand ("Sprawdzone zabudowy dostawcze" + kontener) and "Chłodnie i izotermy". Eyebrow (yellow) + bold heading + sublink + `Zapytaj o wycenę`/`Zobacz ofertę` + real truck photo. |
| 1 | Feature | `FeatureCard` | "Konfigurator TechnikPRO" — dark panel, the digital differentiator. CTAs: Dla dealerów / Dowiedz się więcej. |
| 2 | Lineup carousel | `ProductCarousel` | Body-type cards with real photos: Skrzynie z plandeką, Kontenery, TwinCab, Furgony. Eyebrow + name + spec + CTAs. |
| 3 | Tiles | `OffersGrid` | Realizacje + Serwis i części (real photos, CTAs). |
| 4 | Service map | `ChargingMapSection` | "Sieć serwisowa MotoWektor" — dotted map placeholder + Znajdź serwis. |
| 5 | Product panel | `ProductPanel` | "Wytrzymałe skrzynie otwarte" + real photo + CTAs. |
| 6 | Quick links | `CtaStrip` | Zapytaj o wycenę · Pobierz katalogi · Instrukcje i filmy · Kontakt. |
| — | Footer | `SiteFooter` | Logo + contact (address, phone, email, hours) + 3 columns (Firma / Dla klienta / Dla dealerów) + NIP/REGON + social. |
| — | Sticky bar | `StickyBottomBars` | Zadzwoń + Zapytaj o wycenę (fixed). |

## Navigation tabs (each page, mapped to the Tesla pattern)

| Tab | Status | Plan |
|-----|--------|------|
| **Zabudowy** (Oferta) | mega-menu = **step 2** | Hover opens a Tesla-"Vehicles"-style mega-menu: grid of the 8 body-type cards (real photos) + a right-side list of secondary links (pełna oferta, realizacje, konfigurator, serwis, instrukcje, doposażenia, polityka jakości, o firmie, kariera, kontakt). Page = full offer grid + per-type detail panels. |
| **Realizacje** | planned | Gallery grid of completed builds (Tesla full-bleed panels / masonry), filter by body type. |
| **Serwis** | planned | Service-network map + periodic-inspection info + partner logos (Dhollandia, Thermo King, Zanotti, Carrier, Webasto, …). |
| **Instrukcje** | planned | Downloads (PDF manuals) + YouTube how-to library. |
| **Blog** | planned | Reverse-chronological article list with thumbnails. |
| **Dla dealerów** | nav dropdown built | TechnikPRO configurator (login), wsparcie marketingowe, identyfikacja wizualna. |
| **O firmie** | planned | Company story (od 2008), milestones, scale (120 pracowników, 3 hale), awards (Gazele, Forbes, Jakość Roku), certs (ISO 9001, ATP, DEKRA), OEM approvals. |
| **Kontakt** | planned | Dane firmy, map (Bielsko-Biała), department contacts, hours. |

## The 8 body types (offer grid + mega-menu)

Skrzynie z plandeką · Skrzynie otwarte · Kontenery · Chłodnie i izotermy · TwinCab · Furgony serwisowe · Kabiny sypialne · Doposażenia i akcesoria — each with its real photo (`/images/motowektor/products/`).

## Scope for this iteration

1. **Step 1 (done):** whole homepage rebranded to MotoWektor — real logo, colors, photos, copy, footer; responsive; 0 broken images; build green.
2. **Step 2 (next):** the **Zabudowy** hover mega-menu with the 8 product cards + side links (the key deliverable).
3. **Final:** file reorg, image/loading optimization (next/image, lazy, reserved dimensions), full audit.
