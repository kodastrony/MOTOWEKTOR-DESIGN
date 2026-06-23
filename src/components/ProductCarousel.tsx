"use client";

import { useEffect, useRef, useState } from "react";
import type { ProductCard } from "@/types";
import { CtaButton } from "./CtaButton";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons";

export function ProductCarousel({ cards }: { cards: ProductCard[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollToCard = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(cards.length - 1, i));
    const card = track.children[clamped] as HTMLElement | undefined;
    if (card) track.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const cardW = (track.firstElementChild as HTMLElement)?.offsetWidth || 1;
      setActive(Math.round(track.scrollLeft / cardW));
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative w-full px-2 py-2 sm:px-3">
      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-2 overflow-x-auto sm:gap-3"
      >
        {cards.map((card) => (
          <article
            key={card.id}
            className="relative shrink-0 snap-start overflow-hidden"
            style={{
              background: card.background,
              height: "min(72vh, 560px)",
              width: "85%",
              flexBasis: "85%",
            }}
          >
            <div
              className="flex h-full w-full flex-col justify-between p-6 sm:p-9"
              style={{ color: card.textTone === "light" ? "#fff" : "var(--tsla-ink)" }}
            >
              <p className="tcl-eyebrow">{card.eyebrow}</p>
              <div>
                <h3
                  className="font-medium"
                  style={{ fontSize: "clamp(30px,3.4vw,44px)", lineHeight: 1.12 }}
                >
                  {card.name}
                </h3>
                <a href={card.subLink.href} className="tcl-sublink mt-1 inline-block">
                  {card.subLink.label}
                </a>
                <div className="mt-5 flex w-full max-w-[320px] flex-col gap-3 sm:max-w-none sm:flex-row">
                  {card.ctas.map((cta) => (
                    <div key={cta.label} className="sm:w-[180px]">
                      <CtaButton cta={cta} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Arrows (desktop) */}
      <button
        type="button"
        aria-label="Previous"
        onClick={() => scrollToCard(active - 1)}
        disabled={active === 0}
        className="absolute left-5 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded bg-white/80 p-2 text-[#171a20] shadow backdrop-blur transition hover:bg-white disabled:opacity-0 lg:flex"
      >
        <ChevronLeftIcon width={22} height={22} />
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={() => scrollToCard(active + 1)}
        disabled={active >= cards.length - 1}
        className="absolute right-5 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded bg-white/80 p-2 text-[#171a20] shadow backdrop-blur transition hover:bg-white disabled:opacity-0 lg:flex"
      >
        <ChevronRightIcon width={22} height={22} />
      </button>

      {/* Dots */}
      <div className="mt-3 flex justify-center gap-2.5">
        {cards.map((c, i) => (
          <button
            key={c.id}
            type="button"
            aria-label={`Go to card ${i + 1}`}
            onClick={() => scrollToCard(i)}
            className="h-2 w-2 rounded-full transition"
            style={{ background: i === active ? "var(--tsla-ink)" : "rgba(23,26,32,0.3)" }}
          />
        ))}
      </div>
    </section>
  );
}
