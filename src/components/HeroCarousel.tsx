"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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
    timer.current = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, slides.length]);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "calc(100svh - var(--tsla-header-h))", minHeight: 560 }}
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
            className="flex h-full w-full flex-col items-center px-5 text-center"
            style={{
              paddingTop: "7vh",
              color: slide.textTone === "light" ? "#fff" : "var(--tsla-ink)",
            }}
          >
            {slide.eyebrow && (
              <p className="tcl-eyebrow mb-1">{slide.eyebrow}</p>
            )}
            <h2
              className="font-medium"
              style={{ fontSize: "clamp(34px,5vw,48px)", lineHeight: 1.15 }}
            >
              {slide.name}
            </h2>
            {slide.subLink && (
              <a href={slide.subLink.href} className="tcl-sublink mt-1">
                {slide.subLink.label}
              </a>
            )}
            <div className="mt-6 flex w-full max-w-[340px] flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
              {slide.ctas.map((cta) => (
                <div key={cta.label} className="sm:w-[200px]">
                  <CtaButton cta={cta} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      {slides.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => go(index - 1)}
            className="absolute left-2 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded bg-white/70 p-2 text-[#171a20] shadow-sm backdrop-blur transition hover:bg-white sm:flex"
          >
            <ChevronLeftIcon width={22} height={22} />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => go(index + 1)}
            className="absolute right-2 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded bg-white/70 p-2 text-[#171a20] shadow-sm backdrop-blur transition hover:bg-white sm:flex"
          >
            <ChevronRightIcon width={22} height={22} />
          </button>
        </>
      )}

      {/* Dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2.5">
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className="h-2 w-2 rounded-full transition"
              style={{
                background:
                  i === index ? "var(--tsla-ink)" : "rgba(23,26,32,0.35)",
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
}
