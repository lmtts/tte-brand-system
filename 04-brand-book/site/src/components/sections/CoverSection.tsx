"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { prefersReducedMotion } from "@/lib/motion";

const PHOTO = "/assets/cover/cover-photo.webp";
const TOPO = "/assets/cover/pattern-tile.webp";
const LOGO = "/assets/cover/logo-full-white.svg";
const HC = "/assets/cover/hc-mark.svg";

/**
 * Section 01 — Cover. Faithful to Figma frame 411:3.
 * Desktop + tablet: full-width composition; element sizes scale with the
 * viewport (via --u, the size of one design px) while the layout spans edge
 * to edge and the rule between logo and "Brand Guidelines" flexes to fill.
 * Mobile: centered stack. Topo (pattern-tile, white @0.06) covers the area.
 */
export default function CoverSection() {
  const root = useRef<HTMLElement>(null);
  const photo = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".cv-photo", { opacity: 0, scale: 1.08, duration: 1.3, ease: "power2.out" })
        .from(".cv-topo", { opacity: 0, duration: 1.1 }, "<")
        .from(".cv-logo", { opacity: 0, clipPath: "inset(0 100% 0 0)", duration: 0.9 }, "-=0.7")
        .from(".cv-reveal", { opacity: 0, y: 14, duration: 0.6, stagger: 0.08 }, "-=0.5")
        .from(".cv-cue", { opacity: 0, y: 10, duration: 0.5 }, "-=0.1");
    }, root);

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const p = Math.min(1, window.scrollY / Math.max(1, window.innerHeight));
        if (photo.current) {
          photo.current.style.transform = `scale(${1 + p * 0.06}) translateY(${p * 32}px)`;
        }
        raf = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={root} className="cover relative h-dvh min-h-[560px] w-full overflow-hidden bg-ink">
      {/* photo */}
      <div ref={photo} className="cv-photo absolute inset-0 will-change-transform">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={PHOTO}
          alt="Snow peak above the high steppe — the field the mission is sent to."
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[rgba(40,39,42,0.40)]" />
      </div>

      {/* topographic tile — white @0.06, covers the whole area */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={TOPO}
        alt=""
        aria-hidden
        className="cv-topo pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.06]"
      />

      {/* ===== DESKTOP + TABLET (≥768) — full-width, flexible rule ===== */}
      <div className="cv-d absolute inset-0 hidden text-paper md:block">
        {/* top row */}
        <div className="cv-pad absolute inset-x-0 top-[7.6%] flex items-start justify-between">
          <div className="cv-reveal cv-hud">
            <div>v1.0</div>
            <div>2026</div>
          </div>
          <div className="cv-reveal cv-pwrgap flex items-center">
            <span className="cv-hud cv-hud-reg">Powered by</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={HC} alt="Hope Channel" className="cv-mark-d -scale-y-100" />
          </div>
        </div>

        {/* center lockup row — logo / flexible rule / label */}
        <div className="cv-pad absolute inset-x-0 top-[46.1%] flex -translate-y-1/2 items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO} alt="To the Ends of the Earth" className="cv-logo cv-logo-d shrink-0" />
          <div className="cv-reveal cv-line h-px flex-1 bg-paper/70" />
          <div className="cv-reveal cv-hud shrink-0 text-right">Brand Guidelines</div>
        </div>

        {/* scroll cue */}
        <a
          href="#the-brand"
          className="cv-cue cv-cuegap absolute bottom-[6.6%] left-1/2 flex -translate-x-1/2 flex-col items-center"
          aria-label="Scroll to next section"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="cv-chevron cv-chev-d">
            <path d="m7 6 5 5 5-5" />
            <path d="m7 13 5 5 5-5" />
          </svg>
          <span className="cv-hud">Scroll</span>
        </a>
      </div>

      {/* ===== MOBILE (<768) — centered stack ===== */}
      <div className="absolute inset-0 flex flex-col justify-between px-6 py-9 text-paper md:hidden">
        <div className="flex items-start justify-between">
          <div className="cv-reveal font-mono text-[11px] font-bold uppercase leading-[1.3] tracking-[0.06em]">
            <div>v1.0</div>
            <div>2026</div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={HC} alt="Hope Channel" className="cv-reveal h-[22px] w-auto -scale-y-100" />
        </div>

        <div className="flex flex-col items-center gap-4 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO} alt="To the Ends of the Earth" className="cv-logo h-[44px] w-auto" />
          <div className="cv-reveal font-mono text-[11px] font-bold uppercase leading-[1.4] tracking-[0.06em]">
            Brand Guidelines
          </div>
        </div>

        <a href="#the-brand" className="cv-cue flex flex-col items-center gap-2 self-center" aria-label="Scroll to next section">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="cv-chevron">
            <path d="m7 6 5 5 5-5" />
            <path d="m7 13 5 5 5-5" />
          </svg>
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.06em]">Scroll</span>
        </a>
      </div>
    </section>
  );
}
