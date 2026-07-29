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
 * Enables Lenis smooth scroll site-wide, with mandatory section snapping —
 * every section (and every page within a multi-page section) behaves like a
 * slide: scroll settles on the nearest one, and it takes a deliberately
 * stronger scroll to cross into the next. Renders nothing.
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

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
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
      duration: 0.9,
    });
    snap.addElements(slideEls);

    return () => {
      snap.destroy();
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return null;
}
