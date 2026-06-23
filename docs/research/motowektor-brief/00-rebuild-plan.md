# MotoWektor Website Rebuild — Planning Document (Tesla Homepage Pattern)

> Synthesis of the research in this folder. See the sibling files for the detailed source material.

## 1. Executive Summary

MotoWektor Sp. z o.o. is a Bielsko-Biała (Poland) manufacturer of custom bodies (*zabudowy*) for commercial delivery vehicles up to 3.5 t GVW, operating since 2008 and spun out of parent company Wektor Sp. z o.o. (automotive since 1992). The company employs roughly 120 production staff across three production halls and builds a wide catalog of body types — box/dropside bodies, curtain-siders, containers, refrigerated/insulated units, tippers, open boxes, sleeping cabins (TwinCab), platform bodies, and bespoke special builds (food trucks, mobile workshops, showrooms) — fitted to chassis from Renault/Renault Trucks, Iveco, Toyota, Mercedes, Fiat, Peugeot, Citroën, Opel and other Stellantis/PSA vehicles. It holds manufacturer authorizations and homologation documentation from Renault Polska, Fiat Auto Poland, Citroën, Peugeot and Iveco, runs an ISO 9001:2015 quality system with ATP certification for cold-chain bodies, and carries a DEKRA badge plus three business awards (Jakość Roku, Gazele Biznesu, Forbes Diamenty). It exports to Germany, the Czech Republic, Slovakia and the Baltic states, positioning it in the mid-to-upper tier of Polish bodybuilders — larger and longer-established than most small shops, below pan-European players like Gruau or Paneltex. Its key differentiators are range breadth, OEM homologations, in-house engineering (patented 2010 pneumatic lifting system, proprietary PSM mounting system), and a proprietary online configurator, **TechnikPRO**, which is rare among Polish peers. Its closest direct rivals are Widar (aluminum/scale) and Gruau Polska (international group, broader OEM approvals). The core brand promise is *„Sprawdzone zabudowy samochodów dostawczych"* (proven commercial-vehicle bodies), with every project tailored to client needs.

## 2. Brand Snapshot

**Colors**
- **Yellow (primary/accent):** PANTONE 137 C — the only officially stated yellow spec. *(HEX/RGB/CMYK not published; ~`#FFA400` is a reference conversion only, not from the site.)*
- **Grey (secondary):** PANTONE 446 C — dark warm charcoal. *(HEX/RGB/CMYK not published; ~`#3F4444` is a reference conversion only.)*
- **Neutrals:** white/light backgrounds dominate; dark grey/near-black body text. On-site palette reads as yellow accent + grey + white/black.
- ⚠️ **Unknown:** which element (lettering vs. background) takes which Pantone; no HEX/RGB/CMYK values anywhere.

**Fonts**
- ⚠️ **Unknown / unspecified.** No font names or typographic rules published. Rendered site uses a clean sans-serif hierarchically (larger for nav/headings, regular weight for body). No named typeface for headings vs. body.

**Imagery style**
- Vehicle-centric, documentary/product style — not lifestyle.
- Real commercial vehicles (Iveco Daily, Renault, Toyota, etc.) with MotoWektor bodies fitted, shown in operational/on-location context (not seamless white studio).
- Practical and technical; the product (the body) is the subject, not people.
- Professional exterior photography shot from angles that reveal the bodywork build.

**Tone of voice**
- Professional, straightforward, technical-but-accessible, service/solution-oriented.
- Emphasizes proven quality and client-specific customisation.
- Notably controlled/compliance-minded around brand usage.

**Slogans / key messaging**
- Primary tagline: *„Sprawdzone zabudowy samochodów dostawczych"* (Proven commercial/delivery vehicle bodies).
- Customisation: *„Każdy projekt dopasowujemy do potrzeb klienta"* (We tailor every project to the client's needs).
- Build process: *„Każda zabudowa zaczyna się od rozmowy a kończy na dostarczeniu pojazdu"* (Every build starts with a conversation and ends with vehicle delivery).
- Recurring product vocabulary: *zabudowy, skrzynie, kontenery, izotermy/chłodnie, furgony, kabiny sypialne / TwinCab*.

**Logo**
- 2016 wordmark/symbol, two-colour (yellow + grey), in square and horizontal lockups, plus light/white, engraving, embroidery, white-background, and banner variants.
- Hard rule: *„Każde użycie musi zostać zatwierdzone przez firmę"* (every use must be approved by the company).
- Format rule: PNG for A4-and-smaller; vector (.cdr) for large-format. ⚠️ Vector logos exist **only as CorelDraw .cdr** — no .ai/.eps/.svg/.pdf published (a constraint for web/SVG use).

## 3. Product Lineup (the "models")

Ranked by likely prominence, based on homepage offer-grid placement, breadth of brand support, frequency cited, and "growing share of production" signals in the research.

| Rank | Body type (PL / EN) | Why this prominence | Headline spec hook (from research) |
|---|---|---|---|
| 1 | **Kontener** (container body) | "Exceptionally versatile"; broadest distribution/courier/FMCG use; featured as the homepage's first "latest realization" (aluminium container on Toyota) | Honeycomb/aluminium closed bodies; optional self-loading lift; lightweight aluminium intermediate frame |
| 2 | **Chłodnia / izoterma** (refrigerated / insulated) | Described as a **growing share of production**; ATP-certified; cold-chain demand trend | Active fridge −20 °C…−2 °C; three-layer ATP walls; insulated container / izoterma / chłodnia tiers |
| 3 | **Zabudowa skrzyniowa** (box / dropside body) | Widest brand support (Renault, Opel, Fiat, Peugeot, Citroën, Toyota, Iveco, Mercedes); foundational product | Standard / lightweight (no sides) / hydraulic tail-lift variants |
| 4 | **Skrzynia z firaną / plandeką** (curtain-sider / tarp box) | Top item in homepage offer grid ("Skrzynie z plandeką"); core haulage product | Burtofirana, sliding roof, curtain-only PSM quick-mount; sliding roof + curtains independently |
| 5 | **Kabiny sypialne / TwinCab** (sleeping cabins) | Own-IP product line (since 2014); featured in homepage offer grid and realizations | Modular sizes S/M/L; single & double cab; for Renault, Iveco, Stellantis, Toyota |
| 6 | **Wywrotka** (tipper) | Distinct jobsite segment; multiple videos incl. Master IV | Three-way tipper; raising side extensions; tarp; aluminium floor |
| 7 | **Skrzynia podnoszona / o zmiennej wysokości** (variable-height box) | Showcases patented pneumatic lift IP (2010) | Pneumatic single-stage (~230 mm to ~2500 mm) & two-stage (1980/2210/2500 mm) |
| 8 | **Skrzynia otwarta** (open box / dropside) | Everyday utility; in homepage offer grid | Single/double cab; demountable centre post; self-loading tail-lift |
| 9 | **Zabudowa na furgonach / samochody serwisowe** (van fit-outs / service vehicles) | Covers brygadówka + mobile-workshop demand (whose dedicated pages 404'd) | Workshop with generator/compressor; tool storage + ramp; robotic pipe-inspection; mainly Renault Master |
| 10 | **Zabudowa specjalna / showroom** (special / bespoke) | Differentiator / brand-halo (food trucks, showrooms, exhibition folding bodies; Bosch example) | One/two-sided folding display bodies; food trucks; mobile shops/offices |
| 11 | **Zabudowa na platformie** (platform body) | Niche; no specific chassis named on page | Lightweight isothermal or container bodies on van platforms |
| 12 | **Dodatkowe doposażenie** (accessories / add-ons) | Cross-sell, not a headline "model"; dedicated page 404'd | Tail-lifts, ladders, lashing/PSM points, LED, dividers, power connections |

*Note: "Brygadówka," "Izoterma/chłodnia na furgonie," and "Warsztat mobilny" appeared as offer-page labels but their dedicated pages returned 404; their subject matter is folded into rows 2 and 9 above.*

## 4. Homepage Rebuild Plan (Tesla pattern)

The Tesla model: a vertical slideshow of full-viewport panels, one product per panel — full-bleed media, product name top-center, one tiny spec sub-line, two CTAs bottom-center, transparent nav over the hero that solidifies on scroll. Below, each panel is mapped to MotoWektor content. The conversion goal replaces Tesla's "Order Now" — since the site has **no lead/contact form** and conversion runs on phone/email, the primary CTA is a quote request and the persistent phone number (**+48 602 409 830**) is foregrounded.

### Global Chrome — Top Navigation
- **Tesla analog:** Transparent-over-hero bar, left-aligned wordmark, few links, utility icons right; solidifies on scroll.
- **Content:** MotoWektor wordmark (left). Links: **Zabudowy** (`/oferta.html`) · **Realizacje** (`/galeria.html`) · **Proces** (new, or → instructions/about) · **Serwis** (`/siec_serwisowa.html`) · **Dla dealerów** (`/dla-partnerow.html`) · **Kontakt**. Utility: phone CTA *„Zadzwoń +48 602 409 830"*, plus language switcher.
- **Primary / secondary CTA:** *„Zapytaj o wycenę"* / *„Zadzwoń +48 602 409 830"*.
- **Imagery/video:** None (overlays hero). White text over media; solid grey/white background after scroll.
- ⚠️ **Open question:** language switcher — site is currently Polish-only despite a CZ/SK sales team; decide PL/EN/DE scope.

### Section 1 — Hero (flagship zabudowa)
- **Working name:** Hero — Kontener (flagship).
- **Tesla analog:** Full-screen hero photo/autoplay video of the lead vehicle.
- **Content:** Flagship body = **Kontener** (container body). Name top-center *„Zabudowa kontenerowa"*; sub-line = one spec hook (e.g. honeycomb/aluminium, optional self-loading lift). *(Could alternately lead with the brand tagline „Sprawdzone zabudowy samochodów dostawczych".)*
- **Primary / secondary CTA:** *„Zapytaj o wycenę"* / *„Zobacz realizacje"* (`/galeria.html`).
- **Imagery/video:** Full-bleed hero photo or short driving/build video of a finished container build (Toyota aluminium container exists in portfolio).

### Section 2 — Chłodnia / Izoterma panel
- **Working name:** Refrigerated/insulated panel.
- **Tesla analog:** Second full-viewport vehicle panel.
- **Content:** *„Izoterma / chłodnia"* — emphasize ATP certification and growing cold-chain demand. Sub-line: active fridge −20 °C…−2 °C / three-layer ATP walls.
- **Primary / secondary CTA:** *„Zapytaj o wycenę"* / *„Dowiedz się więcej"* (`/chlodnie_izotermy.html`).
- **Imagery/video:** Full-viewport photo of a refrigerated build (Fiat Ducato / Peugeot / Citroën examples exist).

### Section 3 — Box & curtain-sider dual tiles
- **Working name:** Skrzynie (box family) dual tiles.
- **Tesla analog:** Dual product tiles (two side-by-side cards).
- **Content:** Card A = **Zabudowa skrzyniowa** (box/dropside); Card B = **Skrzynia z firaną/plandeką** (curtain-sider). One spec line per card.
- **Primary / secondary CTA (per card):** *„Zapytaj o wycenę"* / *„Zobacz"* (`/zabudowy_skrziowe`, `/skrzynie_firany.html`).
- **Imagery/video:** Two strong exterior build photos, one per card.

### Section 4 — TwinCab / sleeping cabins panel
- **Working name:** Kabiny sypialne / TwinCab panel.
- **Tesla analog:** Additional model panel (repeated grammar).
- **Content:** *„Kabiny sypialne / TwinCab"* — own-IP line since 2014; sub-line: modular sizes S/M/L, single & double cab.
- **Primary / secondary CTA:** *„Zapytaj o wycenę"* / *„Zobacz"* (`/kabiny_sypialne_podwojne_twincab.html`).
- **Imagery/video:** Full-screen photo of a Twin Cab build (Iveco Daily + Twin Cab L exists in portfolio).

### Section 5 — Tipper / variable-height / open box panel
- **Working name:** Wywrotki & skrzynie specjalne panel.
- **Tesla analog:** Additional model panel.
- **Content:** Lead with **Wywrotka** (tipper), with variable-height and open-box as secondary; sub-line: three-way tipper / pneumatic variable height (patented lift).
- **Primary / secondary CTA:** *„Zapytaj o wycenę"* / *„Zobacz pełną ofertę"* (`/oferta.html`).
- **Imagery/video:** Jobsite tipper photo (Renault Master IV).

### Section 6 — Special / bespoke builds panel
- **Working name:** Zabudowy specjalne (brand halo).
- **Tesla analog:** Additional model panel.
- **Content:** *„Zabudowa specjalna"* — food trucks, showrooms, mobile shops/offices, folding exhibition bodies (Bosch example).
- **Primary / secondary CTA:** *„Porozmawiajmy o projekcie"* / *„Zobacz realizacje"* (`/zabudowy-specjalne.html`).
- **Imagery/video:** Showroom / food-truck / folding-display build photo.

### Section 7 — Process / build-quality video
- **Working name:** Jak budujemy (process video).
- **Tesla analog:** Feature/capability autoplay video.
- **Content:** Production-process / build-quality story — welding, paint, fitting — plus trust signals (ISO 9001:2015, 24-month structural warranty, in-house manufacturing, patented pneumatic lift & PSM system). Short headline; one stat line.
- **Primary / secondary CTA:** *„Umów wizytę"* / *„O firmie"* (`/o-firmie.html`).
- **Imagery/video:** Production-hall / build process video. ⚠️ **Open question:** does such footage exist? (YouTube channel has ~24 how-to videos, not confirmed as process b-roll.)

### Section 8 — Proof-at-scale (service network map)
- **Working name:** Sieć serwisowa / proof-at-scale.
- **Tesla analog:** Full-screen map graphic with a live count.
- **Content:** Map of the service-network points (periodic-inspection network) across Poland/CEE; counters drawn from verifiable facts (since 2008, ~120 production employees, exports to DE/CZ/SK/Baltics, 18+ years). Show service-partner logos (Dhollandia, Thermo King, Zanotti, Carrier, Webasto, Autoterm, Hwasung, Eberspächer).
- **Primary / secondary CTA:** *„Znajdź serwis"* (`/siec_serwisowa.html`) / *„Kontakt"*.
- **Imagery/video:** Map graphic (service points; coords for HQ: 49.849872, 19.025592). ⚠️ **Open question:** exact number of service points / builds delivered not in research — needed for a real "live count."

### Section 9 — Dealer / configurator cross-sell
- **Working name:** TechnikPRO + accessories cross-sell.
- **Tesla analog:** Energy cross-sell tiles (reused card grammar).
- **Content:** Tile A = **TechnikPRO** configurator (key digital differentiator; dealer login by Moto Wektor account; brand portals Renault/Fiat/Citroën/Peugeot/Opel). Tile B = **Doposażenie i akcesoria** (tail-lifts, ladders, LED, PSM points). Tile C = OEM-approval trust band (Renault Polska, Fiat Auto Poland, Citroën, Peugeot, Iveco + homologation).
- **Primary / secondary CTA:** *„Dla dealerów"* (`/dla-partnerow.html`) / *„Zobacz akcesoria"* (`/info/doposazenie.html`).
- **Imagery/video:** Configurator screenshot/UI; accessory product shots; OEM logos.

### Section 10 — Utility strips (news / awards)
- **Working name:** Aktualności & wyróżnienia.
- **Tesla analog:** Utility strips (small secondary cards).
- **Content:** Latest blog posts (`/czytelnia`) and awards/certification band (Jakość Roku, Gazele Biznesu, Forbes Diamenty, DEKRA, ISO 9001:2015, ATP).
- **Primary / secondary CTA:** *„Zobacz pozostałe wpisy"* (`/czytelnia`) / *„Polityka jakości"* (`/polityka-jakosci.html`).
- **Imagery/video:** Blog thumbnails; award/cert logos.

### Footer
- **Tesla analog:** Quiet, link-only footer with region selector + legal line.
- **Content:** Three columns mirroring current footer — **FIRMA** (O firmie, Polityka jakości, Kariera, RMI), **DLA KLIENTA** (Zabudowy, Realizacje, Serwis, Blog, Instrukcje), **DLA DEALERÓW** (Konfigurator, Wsparcie marketingowe, Identyfikacja wizualna). Contact block: ul. Poligonowa 35, 43-300 Bielsko-Biała; +48 33 483 20 81; biuro@motowektor.pl; sales/service hours. Social: Facebook, YouTube, Instagram. Company reg: NIP 553-242-04-03, REGON 240936974.
- **Primary / secondary CTA:** *„Zadzwoń +48 602 409 830"* / *„Napisz: biuro@motowektor.pl"*.
- **Imagery/video:** None (link-only); optional light/white logo variant on grey.

## 5. Asset & Info Checklist

**Logo / brand files to gather**
- [ ] Header logo: `https://www.motowektor.pl/images/logo.png`; square `…/logo2016/moto-wektor-kwadrat-2016-2k.png`; horizontal `…/moto-wektor-poziome-2016-5k.png`.
- [ ] Light/white-on-dark variant for hero overlay: `…/moto-wektor-kwadrat-2016-98-bialy-na-ciemne-tlo-c13.png` (+ banner-with-transparency variant).
- [ ] ⚠️ **Commission a proper web vector (SVG) of the logo** — only CorelDraw .cdr vectors exist today; .cdr is unusable on the web. Needs conversion/redraw (and brand-approval per the "must be approved" rule).

**Colors**
- [ ] ⚠️ **Obtain official HEX/RGB/CMYK** for PANTONE 137 C (yellow) and PANTONE 446 C (grey) from the company. Reference conversions (~`#FFA400`, ~`#3F4444`) are placeholders only — confirm before build.
- [ ] ⚠️ Confirm which Pantone applies to lettering vs. background, and define a full web palette (states, dark sections, on-media text).

**Fonts**
- [ ] ⚠️ **No typeface is specified.** Choose/confirm a clean sans-serif for headings + body (Tesla rhythm = large light-weight headings). Decide whether to license a brand font or use a system/Google sans-serif; get sign-off.

**Photography / video**
- [ ] High-res, full-bleed hero-quality photos for each headline body type: Kontener, Chłodnia/Izoterma, Skrzyniowa, Firana/Plandeka, TwinCab, Wywrotka, Otwarta, Specjalna/showroom. (~80+ portfolio entries exist on `/galeria.html` but resolution/licensing for full-viewport use is unconfirmed.)
- [ ] Process/build-quality video (production halls, welding, paint, fitting) — ⚠️ confirm whether footage exists or must be shot.
- [ ] In-context/operational shots (the brand's documentary style) rather than studio-white.
- [ ] OEM chassis-brand logos (Renault, Renault Trucks, Iveco, Toyota, Mercedes, Fiat, Peugeot, Citroën, Opel) and service-partner logos (Dhollandia, Thermo King, Zanotti, Carrier, Webasto, Autoterm, Hwasung, Eberspächer) — confirm usage rights.
- [ ] Award/cert badges: Jakość Roku, Gazele Biznesu, Forbes Diamenty, DEKRA, ISO 9001:2015, ATP.

**Configurator / dealer**
- [ ] TechnikPRO screenshots / UI assets and brand-portal links (Renault, Fiat, Citroën, Peugeot, Opel); program contact gacek@motowektor.pl.

**Open questions to resolve before building**
- [ ] **Brand approval workflow:** every logo use must be company-approved — confirm sign-off path early.
- [ ] **Confirm the flagship** body type to headline the hero (research suggests Kontener or Chłodnia/Izoterma; company should validate).
- [ ] **Conversion mechanism:** current site has **no lead/contact form** — decide whether to add a quote form or keep phone/email-only (affects every primary CTA).
- [ ] **Language scope:** PL-only today, but CZ/SK sales team exists — decide PL/EN/DE switcher.
- [ ] **"Live count" data:** real figures for builds delivered / service points / years are not all in the research — gather for the proof-at-scale panel.
- [ ] **Award years** (Jakość Roku, Gazele Biznesu, Forbes Diamenty) are not printed on the site — verify editions before publishing (external snippet suggests Quality of the Year 2013, unconfirmed).
- [ ] **DEKRA scope:** only a logo is shown, no standard/scope text — confirm what it certifies before making claims.
- [ ] **Four 404 categories** (Brygadówka, Izoterma/chłodnia na furgonie, Warsztat mobilny, Dodatkowe doposażenie) — decide whether to rebuild dedicated pages or fold into siblings.
- [ ] **OEM-approval gap:** Mercedes/VW/Ford are not listed among MotoWektor's approvals though it builds on Mercedes chassis — clarify before featuring Mercedes prominently.
- [ ] **EV-ready messaging:** EV upfitting is an industry trend, but MotoWektor's current EV-conversion capability is not stated — confirm before claiming.
