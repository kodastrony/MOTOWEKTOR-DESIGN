# Tesla.com Homepage — Reconnaissance (Topology · Tokens · Behaviors)

> Structural/functional reconnaissance for the clone. Captures layout, computed design tokens, and
> interaction behaviors. Per the agreed scope, the clone replicates **structure, design system,
> interactions, and responsiveness 1:1**, using **placeholders** for Tesla's proprietary photos/videos,
> marketing copy, and logo. No copyrighted media/prose/trademark is reproduced.

## Page shell

```
<html> (font: "Universal Sans Text", text rgb(57,60,65)=#393C41, bg #fff)
  <header>            sticky, height 56px, z-index 500, flex row space-between, font 14/20
  <main>
    #block-tesla-frontend-content
      .tcl-homepage-no-scroll-snapping   ← vertical stack of 7 .tcl-section panels
  <footer>            link row + © line
  + sticky bottom bars + region modal (overlay)
```

- Document scrollHeight ≈ 4031px @ desktop. Background white; panels are full-bleed media with overlaid text.

## Design tokens (computed values from the live site)

| Token | Value |
|-------|-------|
| Font family (body) | `"Universal Sans Text"` → **substitute: Inter** (proprietary font not reproduced) |
| Font family (display/headings) | `"Universal Sans Display"` → substitute: Inter (tight) |
| Body text color | `rgb(57,60,65)` = `#393C41` |
| Near-black (nav/headings) | `rgb(23,26,32)` = `#171A20` |
| Primary blue (CTA) | `rgb(62,106,225)` = `#3E6AE1` |
| Page background | `#FFFFFF` |
| Light panel bg (offer cards) | `~#F4F4F4` |
| Header height | `56px` (sticky, z-index 500) |
| Heading (panel `<h2>`) | `font-size 48px / line-height 56px / weight 500`, white over media |
| Nav item (button) | height 32px, padding `4px 16px`, color `#171A20`, `14px/500`, radius `4px` |
| Primary button (Order Now) | bg `#3E6AE1`, color `#fff`, `14px/500`, radius `4px`, ~`200×40`, padding 4px |
| Secondary button over media (Learn More) | translucent white `rgba(255,255,255,.65)` + backdrop-blur, color `#171A20`, radius `4px` |
| Secondary text-link (FSD "Learn More") | text style, color `#393C41`, `14px/400` |

## Page topology — 7 body panels (`.tcl-section`)

| # | id | Name (working) | Height | Content | Interaction model |
|---|----|----|--------|---------|-------------------|
| 0 | `tdsonecolumn--…` | **Hero crossfade carousel** | 728 | 2 full-bleed slides (lead vehicles). Each: eyebrow?, big name (top-center), APR sub-link, `Order Now` + `Learn More`. Dots (2) + prev/next arrows. | time-driven (auto-advance) + click (dots/arrows). Crossfade. |
| 1 | `FSD-Card` | **Feature video card** | 587 | Full-bleed autoplay **video**, heading bottom-left, `Schedule Demo` + `Learn More` (text-link). | static + autoplay video. |
| 2 | `tdsonecolumn--…` | **Product card carousel** | 664 | 2 cards side-by-side (peek of next + right arrow). Each card: eyebrow ("Sport Sedan"), name, lease sub-link, `Order Now` + `Learn More` over full-bleed photo. | click-driven horizontal scroll (arrow) + 3 dots. |
| 3 | `tdsgrid--…` | **Offers / Inventory grid** | 240 | 2 light-gray tiles. Tile: heading, description, button(s), product image right. ("Current Offers" / "Inventory: New / Pre-Owned"). | static; hover on buttons. |
| 4 | `Charging Map` | **Supercharger map** | 866 | Full-bleed interactive map graphic, heading, CTA. (61 imgs = map tiles/pins.) | static graphic (placeholder map in clone). |
| 5 | `tdsonecolumn--…` | **Solar product panel** | 664 | Full-bleed energy panel: name ("Solar Panels"), sub-link, CTAs. Same hero grammar. | static (or mini-carousel). |
| 6 | `tdsgrid--…` | **CTA strip** | 96 | Short bottom grid (utility links/CTAs). | static. |

## Global chrome

- **Header nav (desktop):** left wordmark · center links **Vehicles · Energy · Charging · Discover · Shop** (dropdown triggers, `href=null`) · right utility icons (help `?`, globe/language, account). Transparent over hero, text adapts; solid on scroll/hover.
- **Footer:** single centered row — `© 2026` · Privacy & Legal · Vehicle Recalls · Contact · News · Get Updates · Locations · Learn.
- **Sticky bottom bars:** "Ask a Question" (chat input pill) + "Schedule a Drive Today" (right), fixed at viewport bottom.
- **Region modal:** top-right popover "Confirm your location" with region options; dismissible (X).

## Behaviors (BEHAVIORS bible)

- **Sticky header:** fixed at top, z-index 500, 56px. Over the hero the text/logo are dark (Tesla uses dark on light hero); gains nothing dramatic on scroll here (stays solid white-ish). Dropdown menus open on click/hover for each nav item (full-width mega-panel).
- **Hero carousel:** auto-advances between slides with a crossfade; manual control via 2 dots + left/right arrows. Each slide is full-viewport-height media with centered name/CTAs near top, dots near bottom.
- **Product card carousel (panel 2):** horizontal; shows ~2 cards with a peek of the next; right arrow advances; 3 dot indicators. Text/CTAs bottom-left over each card.
- **Hover states:** primary button darkens slightly; secondary translucent button increases opacity; nav items get a light rounded hover bg (radius 4px); text-links underline.
- **Responsive (Tesla patterns to replicate):**
  - **Desktop ≥1024px:** as captured. Center nav links visible. Panels full-bleed, text overlaid. Dual-tile grids = 2 columns. Product carousel shows 2 cards.
  - **Tablet ~768px:** nav links collapse toward hamburger; dual-tile grids may stay 2-col or stack; panel text scales down.
  - **Mobile ≤480px (390):** header shows wordmark + hamburger (center links hidden). Hero/panels become full-height, name+CTAs stacked & centered, **buttons full-width** (stacked). Dual-tile grids **stack to 1 column**. Product carousel = 1 card per view. Sticky bottom bars compress.

## Clone substitutions (agreed scope)

- **Media:** Tesla's car/solar photography & hero video → tasteful CSS gradient/placeholder backgrounds at matching dimensions (swapped for MotoWektor media later).
- **Copy:** product names ("Model 3/Y/S/X") & marketing prose → generic placeholder names ("Model One", etc.) + neutral filler. Functional UI labels (Order Now, Learn More, nav labels) kept as they are functional, not creative expression.
- **Logo:** Tesla wordmark → generic placeholder wordmark in `icons.tsx`.
