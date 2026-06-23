import type { HeroSlide } from "@/types";
import { CtaButton } from "./CtaButton";

/** A single full-bleed product panel (non-carousel), e.g. the energy section. */
export function ProductPanel({ data }: { data: HeroSlide }) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: data.background, height: "min(84vh, 620px)" }}
    >
      <div
        className="flex h-full w-full flex-col items-center px-5 text-center"
        style={{
          paddingTop: "8vh",
          color: data.textTone === "light" ? "#fff" : "var(--tsla-ink)",
        }}
      >
        {data.eyebrow && <p className="tcl-eyebrow mb-1">{data.eyebrow}</p>}
        <h2
          className="font-medium"
          style={{ fontSize: "clamp(30px,4vw,44px)", lineHeight: 1.12 }}
        >
          {data.name}
        </h2>
        {data.subLink && (
          <a href={data.subLink.href} className="tcl-sublink mt-1">
            {data.subLink.label}
          </a>
        )}
        <div className="mt-6 flex w-full max-w-[340px] flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
          {data.ctas.map((cta) => (
            <div key={cta.label} className="sm:w-[200px]">
              <CtaButton cta={cta} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
