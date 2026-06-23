import Image from "next/image";
import type { OfferTile } from "@/types";
import { CtaButton } from "./CtaButton";

export function OffersGrid({ tiles }: { tiles: OfferTile[] }) {
  return (
    <section className="w-full px-2 py-2 sm:px-3">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
        {tiles.map((tile) => (
          <article
            key={tile.id}
            className="relative flex min-h-[220px] items-stretch overflow-hidden rounded-[6px]"
            style={{ background: "var(--mw-panel)" }}
          >
            <div className="flex flex-1 flex-col p-7 sm:p-9">
              <h3
                className="font-bold text-[var(--mw-ink)]"
                style={{ fontSize: "clamp(22px,2.2vw,28px)" }}
              >
                {tile.title}
              </h3>
              <p className="mt-1 max-w-[30ch] text-sm text-[var(--mw-text)]">
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
            {tile.image ? (
              <div className="relative hidden w-[44%] shrink-0 sm:block">
                <Image
                  src={tile.image}
                  alt={tile.title}
                  fill
                  sizes="320px"
                  className="object-contain object-center p-3"
                />
              </div>
            ) : (
              <div
                className="hidden w-[44%] shrink-0 sm:block"
                style={{ background: tile.thumb }}
                aria-hidden
              />
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
