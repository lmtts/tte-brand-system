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
 * content section (hidden on the cover). Tapping it opens a full-page menu to
 * jump to any section. Desktop uses the persistent SectionNav panel instead.
 */
export default function MobileNav() {
  const [past, setPast] = useState(false); // scrolled past the cover
  const [openMenu, setOpenMenu] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > window.innerHeight * 0.72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
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

  const current = SECTIONS.find((s) => s.index === active);

  const go = (id: string, ready: boolean) => {
    if (!ready) return;
    setOpenMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="lg:hidden">
      {/* top bar */}
      <div
        className={`fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-fire/40 bg-ink/95 px-6 py-3 backdrop-blur-sm transition-transform duration-300 ${
          past && !openMenu ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={BIRD} alt="" className="h-[26px] w-auto" aria-hidden />
          <span className="font-mono text-[12px] uppercase tracking-[0.06em]">
            <span className="text-fire">{current?.index}</span>
            <span className="text-paper"> / {current?.name}</span>
          </span>
        </div>
        <button
          onClick={() => setOpenMenu(true)}
          className="grid size-6 place-items-center text-paper"
          aria-label="Open index"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-full w-full">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>

      {/* full-page menu */}
      <div
        role="dialog"
        aria-modal={openMenu}
        aria-label="Brand book index"
        className={`fixed inset-0 z-50 flex flex-col bg-ink transition-opacity duration-300 ${
          openMenu ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!openMenu}
      >
        <div className="flex items-center justify-between border-b border-fire/40 px-6 py-3">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={BIRD} alt="" className="h-[26px] w-auto" aria-hidden />
            <span className="font-mono text-[12px] uppercase leading-[1.3] tracking-[0.06em] text-muted">
              To the Ends of the Earth
              <br />
              Brand Guidelines v1.0
            </span>
          </div>
          <button
            onClick={() => setOpenMenu(false)}
            className="grid size-6 place-items-center text-paper"
            aria-label="Close index"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-full w-full">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-1 flex-col justify-center gap-5 px-6">
          {SECTIONS.map((s) => (
            <MenuItem key={s.id} section={s} active={active} onGo={go} />
          ))}
        </nav>
      </div>
    </div>
  );
}
