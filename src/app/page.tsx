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
import {
  heroSlides,
  featureCard,
  productCards,
  offerTiles,
  dealerPanel,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Hero — flagship zabudowy (kontener, chłodnie) */}
        <HeroCarousel slides={heroSlides} />
        {/* Feature — TechnikPRO configurator */}
        <FeatureCard data={featureCard} />
        {/* Body-type lineup */}
        <ProductCarousel cards={productCards} />
        {/* Realizacje / Serwis tiles */}
        <OffersGrid tiles={offerTiles} />
        {/* Service network map */}
        <ChargingMapSection />
        {/* Skrzynie otwarte panel */}
        <ProductPanel data={dealerPanel} />
        {/* Quick links */}
        <CtaStrip />
      </main>
      <SiteFooter />
      {/* clearance so the fixed bottom bar floats over empty space, not footer content */}
      <div aria-hidden className="h-[84px]" />
      <StickyBottomBars />
    </>
  );
}
