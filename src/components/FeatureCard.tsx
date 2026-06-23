import type { FeatureCard as FeatureCardType } from "@/types";
import { CtaButton } from "./CtaButton";

export function FeatureCard({ data }: { data: FeatureCardType }) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: data.background, height: "min(82vh, 600px)" }}
    >
      {/* placeholder "video" sheen */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(120% 80% at 70% 30%, rgba(255,255,255,0.10), transparent 60%)",
        }}
      />
      <div className="relative flex h-full w-full flex-col items-center justify-end pb-12 text-center text-white sm:items-start sm:pb-14 sm:pl-12 sm:text-left">
        <div className="px-5 sm:px-0">
          <h2
            className="font-medium"
            style={{ fontSize: "clamp(30px,4vw,44px)", lineHeight: 1.12 }}
          >
            {data.heading}
          </h2>
          {data.subheading && (
            <p className="mt-2 text-sm text-white/85 sm:text-[15px]">
              {data.subheading}
            </p>
          )}
          <div className="mt-6 flex w-full max-w-[340px] flex-col items-center gap-3 sm:max-w-none sm:flex-row sm:items-center">
            <div className="w-full sm:w-[200px]">
              <CtaButton cta={data.ctas[0]} />
            </div>
            {data.ctas[1] && (
              <div className="pt-1 sm:pt-0">
                <CtaButton cta={data.ctas[1]} fullWidthMobile={false} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
