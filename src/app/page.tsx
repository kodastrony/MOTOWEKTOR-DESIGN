import { SiteHeader } from "@/components/SiteHeader";
import { HeroCarousel } from "@/components/HeroCarousel";
import { FeatureCard } from "@/components/FeatureCard";
import { ProductCarousel } from "@/components/ProductCarousel";
import { OffersGrid } from "@/components/OffersGrid";
import { ChargingMapSection } from "@/components/ChargingMapSection";
import { ProductPanel } from "@/components/ProductPanel";
import { CtaStrip } from "@/components/CtaStrip";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyBottomBars } from "@/components/StickyBottomBars";
import { RegionModal } from "@/components/RegionModal";
import {
  heroSlides,
  featureCard,
  productCards,
  offerTiles,
  solarPanel,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* 0 — Hero crossfade carousel */}
        <HeroCarousel slides={heroSlides} />
        {/* 1 — Feature / video card */}
        <FeatureCard data={featureCard} />
        {/* 2 — Product card carousel */}
        <ProductCarousel cards={productCards} />
        {/* 3 — Offers / Inventory grid */}
        <OffersGrid tiles={offerTiles} />
        {/* 4 — Charging network map */}
        <ChargingMapSection />
        {/* 5 — Energy / solar product panel */}
        <ProductPanel data={solarPanel} />
        {/* 6 — CTA strip */}
        <CtaStrip />
      </main>
      <SiteFooter />
      <StickyBottomBars />
      <RegionModal />
    </>
  );
}
