// Downloads MotoWektor's own brand assets from motowektor.pl into public/images/motowektor/.
// First-party content (the client's own site), used to rebuild their own website.
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const OUT = "public/images/motowektor";

const assets = [
  ["https://www.motowektor.pl/images/logo.png", "logo.png"],
  // product cutouts (transparent PNG, truck-on-white) — used in offer grid + mega-menu
  ["https://motowektor.pl/web/main_page/skrzynie_z_plandeka.png", "products/skrzynie-z-plandeka.png"],
  ["https://motowektor.pl/web/main_page/skrzynie_otwarte%20.png", "products/skrzynie-otwarte.png"],
  ["https://motowektor.pl/web/main_page/twincab.png", "products/twincab.png"],
  ["https://motowektor.pl/web/main_page/kontenery.png", "products/kontenery.png"],
  ["https://motowektor.pl/web/main_page/chlodnie.png", "products/chlodnie.png"],
  ["https://motowektor.pl/web/main_page/furgony.png", "products/furgony.png"],
  ["https://motowektor.pl/web/main_page/kabiny.png", "products/kabiny.png"],
  ["https://motowektor.pl/web/main_page/akcesoria.png", "products/akcesoria.png"],
  // hero slider banners (real trucks)
  ...["1", "2", "3", "4", "5", "6", "7", "8", "8a"].map((n) => [
    `https://motowektor.pl/web/slider/${n}.jpg`,
    `slider/${n}.jpg`,
  ]),
];

async function dl([url, dest]) {
  try {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!res.ok) return { dest, ok: false, status: res.status };
    const buf = Buffer.from(await res.arrayBuffer());
    const path = join(OUT, dest);
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, buf);
    return { dest, ok: true, bytes: buf.length };
  } catch (e) {
    return { dest, ok: false, error: String(e).slice(0, 80) };
  }
}

const results = [];
for (let i = 0; i < assets.length; i += 4) {
  const batch = assets.slice(i, i + 4);
  results.push(...(await Promise.all(batch.map(dl))));
}

let ok = 0;
for (const r of results) {
  if (r.ok) {
    ok++;
    console.log(`OK   ${r.dest}  (${(r.bytes / 1024).toFixed(1)} KB)`);
  } else {
    console.log(`FAIL ${r.dest}  ${r.status || r.error || ""}`);
  }
}
console.log(`\n${ok}/${results.length} downloaded into ${OUT}`);
