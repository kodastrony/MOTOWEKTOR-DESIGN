import { CtaButton } from "./CtaButton";
import { chargingSection } from "@/lib/content";

export function ChargingMapSection() {
  const { heading, subheading, cta, background } = chargingSection;
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background, height: "min(86vh, 720px)" }}
    >
      {/* placeholder "map" — dotted network pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(rgba(23,26,32,0.18) 1.4px, transparent 1.6px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(120% 90% at 50% 45%, #000 40%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(120% 90% at 50% 45%, #000 40%, transparent 80%)",
        }}
      />
      <div className="relative flex h-full w-full flex-col items-center px-5 pt-[8vh] text-center text-[#171a20]">
        <h2
          className="font-medium"
          style={{ fontSize: "clamp(30px,4vw,44px)", lineHeight: 1.12 }}
        >
          {heading}
        </h2>
        <p className="mt-2 text-sm text-[#393c41] sm:text-[15px]">{subheading}</p>
        <div className="mt-6 w-full max-w-[260px] sm:w-[200px]">
          <CtaButton cta={cta} />
        </div>
      </div>
    </section>
  );
}
