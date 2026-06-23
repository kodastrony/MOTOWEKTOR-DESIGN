# MotoWektor — Research Brief

Research compiled on **2026-06-23** to prepare the rebuild of [motowektor.pl](https://www.motowektor.pl/)
into a modern Next.js codebase, using the **Tesla.com homepage pattern** as the structural/visual template.

> Status: **research & planning only.** No website/clone code has been written yet.
> The next step (a separate task) is to run the `/clone-website` skill — see "Next steps" below.

## Documents in this brief

| File | What's inside |
|------|---------------|
| [00-rebuild-plan.md](00-rebuild-plan.md) | **Start here.** Executive summary, brand snapshot, product lineup, full **Tesla-pattern homepage rebuild plan** (section-by-section), and the asset/open-questions checklist. |
| [01-company-and-market.md](01-company-and-market.md) | Company history, scale, awards, certifications, OEM partnerships + industry context and competitor landscape. |
| [02-product-catalog.md](02-product-catalog.md) | Full catalog of every body type (*zabudowa*) — the "model lineup" — with vehicles and variants. |
| [03-brand-identity.md](03-brand-identity.md) | Logo, colors (Pantone), typography, imagery style, slogans, tone, brand-usage rules + downloadable asset URLs. |
| [04-site-structure-and-content.md](04-site-structure-and-content.md) | Full site map, navigation/footer, homepage section order, CTAs, contact details, portfolio & service-network pages. |
| [05-tesla-structure-reference.md](05-tesla-structure-reference.md) | Structural & design-system analysis of the Tesla.com homepage (layout patterns only) + mapping to MotoWektor. |

## Company at a glance

- **Who:** MotoWektor Sp. z o.o. — Polish manufacturer of custom bodies (*zabudowy*) for commercial delivery vehicles up to **3.5 t GVW**.
- **Where:** ul. Poligonowa 35, 43-300 Bielsko-Biała, Poland. NIP 553-242-04-03 · REGON 240936974.
- **Since:** 2008 (spun out of parent **Wektor Sp. z o.o.**, automotive since 1992). ~**120** production staff, **3** production halls.
- **Tagline:** *„Sprawdzone zabudowy samochodów dostawczych"* (Proven commercial-vehicle bodies).
- **Brand colors (only official spec):** Yellow **PANTONE 137 C** + Grey **PANTONE 446 C** (no HEX/RGB published — must be obtained).
- **Builds on:** Renault / Renault Trucks, Iveco, Toyota, Mercedes, Fiat, Peugeot, Citroën, Opel & other Stellantis/PSA chassis.
- **Quality/approvals:** ISO 9001:2015, ATP (cold-chain), DEKRA badge; homologations from Renault Polska, Fiat Auto Poland, Citroën, Peugeot, Iveco.
- **Differentiators:** range breadth, OEM homologations, in-house engineering (patented 2010 pneumatic lift, proprietary PSM system), and the **TechnikPRO** online configurator (rare among Polish peers).
- **Exports:** Germany, Czech Republic, Slovakia, the Baltic states.
- **Conversion model:** phone/email only — **no lead/contact form** on the current site. Persistent CTA: **+48 602 409 830**.

## Contact (for the footer / contact section)

- **Address:** Moto Wektor Sp. z o.o., ul. Poligonowa 35, 43-300 Bielsko-Biała (HQ map: 49.849872, 19.025592)
- **Main:** +48 33 483 20 81 · biuro@motowektor.pl
- **Sales:** +48 602 409 830 (Mon–Fri 8:00–16:00) · **Service & parts:** Mon–Fri 7:00–15:00
- **Social:** [Facebook](https://www.facebook.com/motowektor) · [YouTube](https://www.youtube.com/channel/UCu2KgRPRIAiNygQAHpE2opg) · [Instagram](https://www.instagram.com/motowektor/)

## How this brief was produced

8 research agents fetched the live motowektor.pl pages (brand/visual-identity, full product catalog, company/awards/certifications,
site structure, portfolio & service network), scanned the Polish/EU bodybuilding industry and competitors, and analyzed the
Tesla.com homepage structure — followed by a synthesis pass. Facts are drawn from MotoWektor's own pages where possible; every
unverified figure or gap is flagged in the documents.

## Next steps (do NOT start yet — awaiting your instruction)

1. **Connect a browser MCP.** The `/clone-website` skill requires it — launch Claude Code with `claude --chrome` (or connect the Chrome extension). It cannot run without browser automation.
2. **Gather the flagged assets** in [00-rebuild-plan.md](00-rebuild-plan.md#5-asset--info-checklist) — most importantly: official HEX/RGB for the two Pantone colors, a **web-usable SVG logo** (only CorelDraw `.cdr` vectors exist today), the chosen typeface, and high-res hero photography.
3. **Run the clone.** Per your plan, first clone the Tesla.com homepage structure (`/clone-website https://www.tesla.com/`), then tweak content/branding toward MotoWektor using this brief.
