"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Snap from "lenis/snap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SECTIONS, pageIdsOf } from "@/lib/sections.config";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

/**
 * Enables Lenis smooth scroll with mandatory section snapping — but desktop
 * (≥1024px) only. Mobile/tablet gets plain native scroll: the "slide" feel
 * depends on every section being exactly one viewport tall, which is a
 * two-column desktop layout decision, not something the single-column
 * mobile flow (naturally taller than the viewport on longer sections) can
 * honor — forcing it there produced fighting-the-snap scroll jumps and a
 * nested scroll-within-scroll. Renders nothing.
 *
 * Driven by GSAP's own ticker (not a separate rAF loop) and wired to
 * ScrollTrigger.update on every Lenis tick — the documented Lenis+GSAP
 * pairing. Without this, Lenis's virtual scroll position and ScrollTrigger's
 * (and any scroll-linked motion's) reading of window.scrollY drift apart,
 * which reads as sluggish/inconsistent settling between sections.
 *
 * Respects prefers-reduced-motion (skips entirely — native scroll instead).
 */
export default function LenisProvider() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const mq = window.matchMedia("(min-width: 1024px)");
    let cleanup: (() => void) | null = null;

    function start() {
      const lenis = new Lenis({
        duration: 1.05, // lighter catch-up — still eased, not heavy/sluggish
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1,
      });

      lenis.on("scroll", ScrollTrigger.update);

      const tick = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);

      // Every section/page id is a slide — mandatory snap always resolves to
      // the nearest one, never lets scroll rest between two.
      const pageIds = SECTIONS.flatMap(pageIdsOf);
      const slideEls = pageIds
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null);

      const snap = new Snap(lenis, {
        type: "mandatory",
        duration: 0.95,
      });
      snap.addElements(slideEls);

      cleanup = () => {
        snap.destroy();
        gsap.ticker.remove(tick);
        lenis.destroy();
      };
    }

    if (mq.matches) start();

    const onChange = () => {
      cleanup?.();
      cleanup = null;
      if (mq.matches) start();
    };
    mq.addEventListener("change", onChange);

    return () => {
      mq.removeEventListener("change", onChange);
      cleanup?.();
    };
  }, []);

  return null;
}
