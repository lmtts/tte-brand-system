import CoverSection from "@/components/sections/CoverSection";
import BrandSection from "@/components/sections/BrandSection";
import LogosSection from "@/components/sections/LogosSection";
import MobileNav from "@/components/MobileNav";

export default function Home() {
  return (
    <main>
      <MobileNav />
      <CoverSection />
      <BrandSection />
      <LogosSection />
    </main>
  );
}
