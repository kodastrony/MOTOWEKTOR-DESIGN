import Image from "next/image";
import type { HeroSlide } from "@/types";
import { CtaButton } from "./CtaButton";

/** A single full-width product panel (non-carousel) with a real photo. */
export function ProductPanel({ data }: { data: HeroSlide }) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: data.background, height: "min(84vh, 620px)" }}
    >
      <div className="mx-auto flex h-full w-full max-w-6xl flex-col items-center px-5 pt-[6vh] text-center">
        {data.eyebrow && (
          <p
            className="tcl-eyebrow mb-2 uppercase"
            style={{ color: "var(--mw-yellow)", letterSpacing: "0.06em" }}
          >
            {data.eyebrow}
          </p>
        )}
        <h2 className="tcl-heading max-w-[18ch] text-[var(--mw-ink)]">{data.name}</h2>
        {data.subLink && (
          <a href={data.subLink.href} className="tcl-sublink mt-2 text-[var(--mw-text)]">
            {data.subLink.label}
          </a>
        )}
        <div className="mt-6 flex w-full max-w-[340px] flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
          {data.ctas.map((cta) => (
            <div key={cta.label} className="sm:w-[210px]">
              <CtaButton cta={cta} />
            </div>
          ))}
        </div>
        {data.image && (
          <div className="relative mt-3 w-full flex-1">
            <Image
              src={data.image}
              alt={data.name}
              fill
              sizes="(max-width: 768px) 100vw, 1100px"
              className="object-contain object-bottom"
            />
          </div>
        )}
      </div>
    </section>
  );
}
