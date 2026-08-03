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
      duration: 1.3, // heavier catch-up — reinforces the "locked" slide feel
      smoothWheel: true,
      wheelMultiplier: 0.8, // each wheel tick covers less distance — needs a stronger push
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

    // A brief readout flicker exactly as a section/page locks into place —
    // a panel "recalculating" beat, not a continuous effect.
    let flickerTimeout = 0;
    const onSnapComplete = () => {
      document.body.classList.remove("hud-snap-flicker");
      // Force reflow so re-adding the class restarts the animation even if
      // a snap completes again before the previous flicker finished.
      void document.body.offsetWidth;
      document.body.classList.add("hud-snap-flicker");
      window.clearTimeout(flickerTimeout);
      flickerTimeout = window.setTimeout(() => document.body.classList.remove("hud-snap-flicker"), 200);
    };

    const snap = new Snap(lenis, {
      type: "mandatory",
      duration: 0.95,
      onSnapComplete,
    });
    snap.addElements(slideEls);

    return () => {
      window.clearTimeout(flickerTimeout);
      document.body.classList.remove("hud-snap-flicker");
      snap.destroy();
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return null;
}
