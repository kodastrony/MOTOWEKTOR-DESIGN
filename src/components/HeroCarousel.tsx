"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { HeroSlide } from "@/types";
import { CtaButton } from "./CtaButton";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons";

export function HeroCarousel({ slides }: { slides: HeroSlide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback(
    (n: number) => setIndex(() => (n + slides.length) % slides.length),
    [slides.length],
  );

  useEffect(() => {
    if (paused || slides.length < 2) return;
    timer.current = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6500);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, slides.length]);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "calc(100svh - var(--mw-header-h))", minHeight: 560 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{
            background: slide.background,
            opacity: i === index ? 1 : 0,
            pointerEvents: i === index ? "auto" : "none",
          }}
          aria-hidden={i !== index}
        >
          <div
            className="mx-auto flex h-full w-full max-w-6xl flex-col items-center px-5 pt-[5vh] text-center"
            style={{ color: "var(--mw-ink)" }}
          >
            {slide.eyebrow && (
              <p
                className="tcl-eyebrow mb-2 uppercase"
                style={{ color: "var(--mw-yellow)", letterSpacing: "0.06em" }}
              >
                {slide.eyebrow}
              </p>
            )}
            <h1 className="tcl-heading max-w-[18ch]">{slide.name}</h1>
            {slide.subLink && (
              <a href={slide.subLink.href} className="tcl-sublink mt-2 text-[var(--mw-text)]">
                {slide.subLink.label}
              </a>
            )}
            <div className="mt-6 flex w-full max-w-[340px] flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
              {slide.ctas.map((cta) => (
                <div key={cta.label} className="sm:w-[210px]">
                  <CtaButton cta={cta} />
                </div>
              ))}
            </div>
            {slide.image && (
              <div className="relative mt-3 w-full flex-1">
                <Image
                  src={slide.image}
                  alt={slide.name}
                  fill
                  priority={i === 0}
                  sizes="(max-width: 768px) 100vw, 1100px"
                  className="object-contain object-bottom"
                />
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Arrows */}
      {slides.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Poprzedni"
            onClick={() => go(index - 1)}
            className="absolute left-2 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded bg-white/80 p-2 text-[var(--mw-ink)] shadow-sm ring-1 ring-black/5 backdrop-blur transition hover:bg-white sm:flex"
          >
            <ChevronLeftIcon width={22} height={22} />
          </button>
          <button
            type="button"
            aria-label="Następny"
            onClick={() => go(index + 1)}
            className="absolute right-2 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded bg-white/80 p-2 text-[var(--mw-ink)] shadow-sm ring-1 ring-black/5 backdrop-blur transition hover:bg-white sm:flex"
          >
            <ChevronRightIcon width={22} height={22} />
          </button>
        </>
      )}

      {/* Dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2.5">
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              aria-label={`Slajd ${i + 1}`}
              onClick={() => setIndex(i)}
              className="h-2 w-2 rounded-full transition"
              style={{ background: i === index ? "var(--mw-yellow)" : "rgba(31,34,37,0.28)" }}
            />
          ))}
        </div>
      )}
    </section>
  );
}
