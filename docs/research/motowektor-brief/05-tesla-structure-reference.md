# Tesla.com Homepage — Structure & Design-System Template

> **Purpose:** Tesla.com is the structural/visual reference for the MotoWektor rebuild. This document captures *layout patterns and design-system conventions only* — no Tesla marketing copy or brand content is reproduced or reused.
>
> **Source note:** `https://www.tesla.com/` returns **HTTP 403** to automated fetches, so this analysis is reconstructed from multiple published Tesla-homepage design reviews (Plerdy, Kijo, Black Raven, Medium/Qixin Wang) plus the documented current homepage layout.

## 1. Section-by-Section Breakdown (top → bottom)

Tesla's homepage behaves less like a long scrolling document and more like a **vertical slideshow of full-viewport panels**, one product per panel, each a full-bleed photo or video with a thin text/CTA overlay. The repeating panel "grammar" is:

> full-bleed media → product/model name near the top-center → tiny financing/spec sub-line under it → two stacked-or-side-by-side CTA buttons near the bottom-center → everything center-aligned over the image.

| # | Panel | Media | Name placement | Sub-line | CTAs (primary / secondary) | Alignment / overlay |
|---|-------|-------|----------------|----------|-----------------------------|---------------------|
| 1 | **Hero — flagship/newest model** | Full-screen hero **photo or autoplay video**, full-bleed edge-to-edge | Model name top-center, large | Small financing/feature microcopy | Primary (filled) + secondary (lighter) | Centered; nav bar sits transparent *over* this panel |
| 2 | **Second product panel** | Full-viewport product photo | Top-center | Small spec/offer line | Primary + secondary | Centered overlay |
| 3 | **Dual product tiles** | Two side-by-side cards, large imagery each | Name per card | Minimal | One CTA pair per card | Card grid, consistent with hero |
| 4 | **Additional product panels** | One full-screen panel per remaining product | Top-center each | Small line | Primary + secondary | Centered overlay, repeated grammar |
| 5 | **Feature / capability panel** | **Autoplay video** (in-context footage) | Brief headline | None or one stat line | Single secondary CTA | Motion-driven, minimal text |
| 6 | **Proof-at-scale panel** | Full-screen **map graphic** (network/point visualization) | Headline + a live count figure | — | Find/Learn CTA | Centered, data-as-imagery |
| 7 | **Cross-sell panels** | Same card grammar reused for adjacent product lines | Product name | Minimal | Primary / secondary | Consistent card pattern |
| 8 | **Utility strips** | Smaller cards — current offers, events/announcements | Short label | — | Small CTA | Compact, secondary path |

**Pattern takeaways for reuse:**
- Every primary panel = **one product, one full-viewport canvas**.
- Text is **minimal**: name + one tiny sub-line + two buttons. No paragraphs over the hero.
- Product name sits **high (top-center)**; CTAs sit **low (bottom-center)** — media occupies the visual middle.
- **Two CTAs per panel**, always: a high-commitment primary and a low-commitment secondary.

## 2. Global Chrome

### Top navigation bar
- **Logo:** wordmark on the **left** (production header is left-aligned; some redesign mockups center it).
- **Primary links (left/center cluster):** a small set of top-level product/section links.
- **Utility icons (right):** account / region / hamburger-menu icons.
- **Transparent-over-hero behavior:** the bar is **transparent and overlaid on the hero panel**, with light (white) text over the media; it gains a solid/contrasting treatment as you scroll past the hero.
- **Minimalism:** very few choices, reducing cognitive load and keeping focus on the hero.

### Footer
- Minimal, link-only footer (no full-bleed media): grouped utility links plus region selector and legal/copyright line. A quiet bookend that contrasts with the immersive panels above.

## 3. Design System

| Aspect | Pattern |
|--------|---------|
| **Typography** | Clean, modern **sans-serif**; large light-weight headings, generous whitespace; headings often stand alone with **no supporting paragraph** |
| **Color approach** | **Near-black text on white**, or **white text over full-bleed media**; a simple black-and-white foundation where the media supplies all the color. Some sections invert to dark mode for contrast |
| **Media** | **Full-bleed photography and autoplay video**; imagery dominates over text overlay — minimalism by subtraction |
| **Spacing** | Each panel is its own breathing space (full viewport); roomy spacing inside overlays |
| **Scroll feel** | **Slideshow / scroll-snap feel** — content segmented into full-viewport blocks that come to life as you scroll |
| **Motion** | **Subtle entry animations** on copy, buttons, and labels as each panel enters the viewport; performance-prioritized, never decorative |
| **Buttons** | **Two-tier CTA pairing** per panel; primary is a **filled/bold** button, secondary is lighter/semi-transparent (outline or translucent fill). Plain-language labels. Consistent styling site-wide |

## 4. Mapping to MotoWektor

The "product lineup" = different **zabudowy** (body/upfit types) instead of car models. Each Tesla product panel becomes one zabudowa type. (Full section-by-section plan with content + CTAs is in [00-rebuild-plan.md](00-rebuild-plan.md#4-homepage-rebuild-plan-tesla-pattern).)

| Tesla panel | MOTOWEKTOR equivalent |
|-------------|------------------------|
| **Hero (flagship model)** | Flagship zabudowa — full-bleed photo or build video. Name top-center (e.g. „Zabudowa kontenerowa"). Sub-line = one spec hook (payload/volume). CTAs: **„Zapytaj o wycenę"** + **„Zobacz realizacje"** |
| **Second product panel** | **„Izoterma / chłodnia"** (refrigerated/insulated) — full-viewport build photo |
| **Dual tiles** | **„Zabudowa skrzyniowa"** + **„Skrzynia z firaną/plandeką"** side by side |
| **Additional panels** | **„Kabiny sypialne / TwinCab"**, **„Wywrotka"**, **„Zabudowa specjalna"** |
| **Feature / capability video** | **Production-process / build-quality video** (welding, paint, fitting); secondary CTA **„Umów wizytę"** |
| **Proof-at-scale map** | **Map of service points / completed deliveries** across Poland/CEE, with a count (e.g. builds delivered) |
| **Cross-sell tiles** | **TechnikPRO configurator** + **accessories/services** (tail-lifts, refurbishment, certification) |
| **Utility strips** | **Aktualności / targi / promocje** (news / trade fairs / offers) |

**Global chrome mapping**
- **Nav (left logo, transparent over hero):** MotoWektor wordmark left; links e.g. **Zabudowy · Realizacje · Proces · Serwis · Kontakt**; utility icons for **language (PL/EN/DE?)** and **phone/contact**. Transparent white-text bar over the hero, solidifies on scroll.
- **Footer:** quiet link footer — product index, company/contact, language switcher, legal/copyright.

**Design-system mapping**
- **Two-CTA rule per panel:** primary **„Zapytaj o wycenę"** (the conversion goal, replacing "Order") + secondary **„Zobacz realizacje"** / **„Demo"**.
- **Black/white + full-bleed media:** let high-quality build photography carry the color; near-black text on white, white text over imagery. MotoWektor's yellow (PANTONE 137 C) becomes the accent for primary CTAs/highlights.
- **Scroll-snap slideshow:** one zabudowa type per full viewport, subtle entry animations on name and buttons.
- **Naming high, CTAs low, media in the middle**, center-aligned overlays throughout — the same rhythm as Tesla.

---

**Sources:** [Plerdy – Tesla Homepage Web Design Review](https://www.plerdy.com/blog/tesla-homepage-web-design-review/) · [Kijo – Luxury Website Design: Tesla](https://kijo.london/blog/luxury-website-design-tesla/) · [Black Raven – Learning from Tesla Website Design](https://blackraven.digital/learning-from-tesla-website-design/) · [Qixin Wang – Tesla's Website UX (Medium)](https://medium.com/@qw2377/teslas-website-ux-a-deep-dive-into-digital-excellence-95310bbf372b)
