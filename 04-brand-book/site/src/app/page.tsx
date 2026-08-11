import CoverSection from "@/components/sections/CoverSection";
import BrandSection from "@/components/sections/BrandSection";
import BrandSystemSection from "@/components/sections/BrandSystemSection";
import LogosSection from "@/components/sections/LogosSection";
import ColorSection from "@/components/sections/ColorSection";
import TypographySection from "@/components/sections/TypographySection";
import PatternsSection from "@/components/sections/PatternsSection";
import ImagerySection from "@/components/sections/ImagerySection";
import ExamplesSection from "@/components/sections/ExamplesSection";
import VoiceSection from "@/components/sections/VoiceSection";
import SystemSection from "@/components/sections/SystemSection";
import TokensSection from "@/components/sections/TokensSection";
import OutroSection from "@/components/sections/OutroSection";
import MobileNav from "@/components/MobileNav";
import SectionNav from "@/components/SectionNav";
import SectionFooter from "@/components/SectionFooter";
import ArrowNav from "@/components/ArrowNav";

export default function Home() {
  return (
    <main>
      <MobileNav />
      <SectionNav />
      <ArrowNav />
      <CoverSection />
      <BrandSection />
      <BrandSystemSection />
      <LogosSection />
      <ColorSection />
      <TypographySection />
      <PatternsSection />
      <ImagerySection />
      <ExamplesSection />
      <VoiceSection />
      <SystemSection />
      <TokensSection />
      <OutroSection />
      <SectionFooter />
    </main>
  );
}
