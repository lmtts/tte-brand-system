"use client";

import { useEffect, useState } from "react";
import { SECTIONS } from "@/lib/sections.config";
import { useActiveSection } from "@/lib/useActiveSection";
import PoweredByHope from "@/components/PoweredByHope";

/**
 * The footer — a single fixed horizontal bar pinned to the bottom of the
 * viewport, same treatment across desktop, tablet and mobile. Mirrors the
 * index nav: never scrolls, never repeats per section. Shows the current
 * section's index/name (left) and the Powered By Hope mark (right), both
 * driven by the shared active-section hook. The mark's tone follows each
 * section's own poweredTone, so it stays legible if a light-background
 * section is ever added. Hidden while on the cover.
 */
export default function SectionFooter() {
  const active = useActiveSection();
  const [past, setPast] = useState(false);

  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > window.innerHeight * 0.72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const section = SECTIONS.find((s) => s.index === active);
  if (!section) return null;
  const light = section.poweredTone === "light";

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 flex items-center justify-between border-t border-fire/40 bg-ink/95 px-6 py-3 backdrop-blur-sm transition-opacity duration-300 lg:px-9 ${
        past ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <p className="font-mono text-[12px] uppercase tracking-[0.06em] lg:text-[13px]">
        <span className="text-fire">{section.index}</span>
        <span className={light ? "text-paper" : "text-ink"}> / {section.name}</span>
      </p>
      <PoweredByHope tone={section.poweredTone} />
    </div>
  );
}
