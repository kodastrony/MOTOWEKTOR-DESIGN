"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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
            className="relative flex shrink-0 snap-start flex-col overflow-hidden rounded-[6px]"
            style={{
              background: card.background,
              height: "min(74vh, 560px)",
              width: "85%",
              flexBasis: "85%",
            }}
          >
            {/* product photo */}
            {card.image && (
              <div className="relative w-full flex-1">
                <Image
                  src={card.image}
                  alt={card.name}
                  fill
                  sizes="(max-width: 768px) 85vw, 640px"
                  className="object-contain object-center p-4"
                />
              </div>
            )}
            {/* info */}
            <div className="px-7 pb-8 pt-2 text-[var(--mw-ink)] sm:px-9">
              <p
                className="tcl-eyebrow uppercase"
                style={{ color: "var(--mw-yellow)", letterSpacing: "0.06em" }}
              >
                {card.eyebrow}
              </p>
              <h3 className="mt-1 font-bold" style={{ fontSize: "clamp(24px,2.6vw,32px)" }}>
                {card.name}
              </h3>
              <a href={card.subLink.href} className="tcl-sublink mt-1 inline-block text-[var(--mw-text)]">
                {card.subLink.label}
              </a>
              <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
                {card.ctas.map((cta) => (
                  <div key={cta.label} className="sm:w-[170px]">
                    <CtaButton cta={cta} />
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Arrows (desktop) */}
      <button
        type="button"
        aria-label="Poprzedni"
        onClick={() => scrollToCard(active - 1)}
        disabled={active === 0}
        className="absolute left-5 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded bg-white/90 p-2 text-[var(--mw-ink)] shadow ring-1 ring-black/5 backdrop-blur transition hover:bg-white disabled:opacity-0 lg:flex"
      >
        <ChevronLeftIcon width={22} height={22} />
      </button>
      <button
        type="button"
        aria-label="Następny"
        onClick={() => scrollToCard(active + 1)}
        disabled={active >= cards.length - 1}
        className="absolute right-5 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded bg-white/90 p-2 text-[var(--mw-ink)] shadow ring-1 ring-black/5 backdrop-blur transition hover:bg-white disabled:opacity-0 lg:flex"
      >
        <ChevronRightIcon width={22} height={22} />
      </button>

      {/* Dots */}
      <div className="mt-3 flex justify-center gap-2.5">
        {cards.map((c, i) => (
          <button
            key={c.id}
            type="button"
            aria-label={`Karta ${i + 1}`}
            onClick={() => scrollToCard(i)}
            className="h-2 w-2 rounded-full transition"
            style={{ background: i === active ? "var(--mw-yellow)" : "rgba(31,34,37,0.25)" }}
          />
        ))}
      </div>
    </section>
  );
}
