import type { OfferTile } from "@/types";
import { CtaButton } from "./CtaButton";

export function OffersGrid({ tiles }: { tiles: OfferTile[] }) {
  return (
    <section className="w-full px-2 py-2 sm:px-3">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
        {tiles.map((tile) => (
          <article
            key={tile.id}
            className="relative flex min-h-[200px] items-stretch overflow-hidden rounded-[4px]"
            style={{ background: "var(--tsla-panel)" }}
          >
            <div className="flex flex-1 flex-col p-7 sm:p-9">
              <h3
                className="font-medium text-[#171a20]"
                style={{ fontSize: "clamp(22px,2.2vw,28px)" }}
              >
                {tile.title}
              </h3>
              <p className="mt-1 max-w-[26ch] text-sm text-[#393c41]">
                {tile.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-2 pt-5">
                {tile.ctas.map((cta) => (
                  <div key={cta.label} className="min-w-[140px]">
                    <CtaButton cta={cta} fullWidthMobile={false} />
                  </div>
                ))}
              </div>
            </div>
            <div
              className="hidden w-[42%] shrink-0 sm:block"
              style={{ background: tile.thumb }}
              aria-hidden
            />
          </article>
        ))}
      </div>
    </section>
  );
}
