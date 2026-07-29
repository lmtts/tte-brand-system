import CoverSection from "@/components/sections/CoverSection";
import BrandSection from "@/components/sections/BrandSection";
import LogosSection from "@/components/sections/LogosSection";
import ColorSection from "@/components/sections/ColorSection";
import MobileNav from "@/components/MobileNav";
import SectionNav from "@/components/SectionNav";

export default function Home() {
  return (
    <main>
      <MobileNav />
      <SectionNav />
      <CoverSection />
      <BrandSection />
      <LogosSection />
      <ColorSection />
    </main>
  );
}
