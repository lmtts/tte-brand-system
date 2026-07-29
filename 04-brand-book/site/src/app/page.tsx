import CoverSection from "@/components/sections/CoverSection";
import BrandSection from "@/components/sections/BrandSection";
import LogosSection from "@/components/sections/LogosSection";
import ColorSection from "@/components/sections/ColorSection";
import TypographySection from "@/components/sections/TypographySection";
import MobileNav from "@/components/MobileNav";
import SectionNav from "@/components/SectionNav";
import SectionFooter from "@/components/SectionFooter";

export default function Home() {
  return (
    <main>
      <MobileNav />
      <SectionNav />
      <CoverSection />
      <BrandSection />
      <LogosSection />
      <ColorSection />
      <TypographySection />
      <SectionFooter />
    </main>
  );
}
