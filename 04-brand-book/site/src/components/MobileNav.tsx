"use client";

import { useEffect, useState } from "react";
import { SECTIONS, type Section } from "@/lib/sections.config";
import { useActiveSection } from "@/lib/useActiveSection";
import ScrambleHover from "@/components/ScrambleHover";

const BIRD = "/assets/brand/bird-index.svg";

/** One full-page-menu row — ScrambleHover finds the <button> itself as its
 * trigger (matters for resized desktop windows and keyboard users, even
 * though most visitors at this breakpoint are touch-only). */
function MenuItem({ section, active, onGo }: { section: Section; active: string; onGo: (id: string, ready: boolean) => void }) {
  const isActive = section.index === active;
  const ready = section.status === "ready";
  return (
    <button
      onClick={() => onGo(section.id, ready)}
      disabled={!ready}
      className={`flex items-baseline gap-6 font-mono text-[20px] uppercase tracking-[0.05em] ${
        isActive ? "" : "text-muted"
      } ${ready ? "" : "opacity-50"}`}
    >
      <span className={`text-[13px] ${isActive ? "text-fire" : ""}`}>{section.index}</span>
      <ScrambleHover text={section.name} className={isActive ? "text-paper" : ""} />
    </button>
  );
}

/**
 * Mobile / tablet navigation — a full-width bar pinned to the top of every
 * content section (hidden on the cover). The bar itself never moves:
 * tapping it only swaps its icon (hamburger → close) and fades in the
 * section list behind it — no second header re-materializing, no slide.
 * Desktop uses the persistent SectionNav bar instead.
 */
export default function MobileNav() {
  const [past, setPast] = useState(false); // scrolled past the cover
  const [openMenu, setOpenMenu] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () =>
      setPast((prev) => (prev ? window.scrollY > window.innerHeight * 0.55 : window.scrollY > window.innerHeight * 0.72));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // scrollbar-gutter:stable (globals.css) keeps the page width constant
    // here — without it, hiding the scrollbar on open shifts the whole
    // layout a few pixels and reads as a jump, not a clean lock.
    document.body.style.overflow = openMenu ? "hidden" : "";
  }, [openMenu]);

  useEffect(() => {
    if (!openMenu) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenMenu(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openMenu]);

  const go = (id: string, ready: boolean) => {
    if (!ready) return;
    setOpenMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="lg:hidden">
      {/* menu panel — sits behind the bar (lower z-index, same opaque ink),
          so the bar reads as staying in place instead of a second header
          re-materializing when this fades in. */}
      <div
        role="dialog"
        aria-modal={openMenu}
        aria-label="Brand system index"
        className={`fixed inset-0 z-40 flex flex-col bg-ink transition-opacity duration-300 ${
          openMenu ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!openMenu}
      >
        <nav className="flex flex-1 flex-col justify-center gap-5 px-6" style={{ paddingTop: "68px" }}>
          {SECTIONS.map((s) => (
            <MenuItem key={s.id} section={s} active={active} onGo={go} />
          ))}
        </nav>
      </div>

      {/* bar — always in this exact spot; never slides or gets replaced */}
      <div
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-fire/40 bg-ink/95 px-6 py-4 backdrop-blur-sm transition-opacity duration-300 ${
          past ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={BIRD} alt="" className="h-[26px] w-auto" aria-hidden />
          <span className="font-mono text-[11px] uppercase leading-[1.3] tracking-[0.06em] text-muted">
            To the Ends of the Earth
            <br />
            Brand System v1.0
          </span>
        </div>
        <button
          onClick={() => setOpenMenu((o) => !o)}
          className="grid size-6 place-items-center text-paper"
          aria-expanded={openMenu}
          aria-label={openMenu ? "Close index" : "Open index"}
        >
          {openMenu ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-full w-full">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-full w-full">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
