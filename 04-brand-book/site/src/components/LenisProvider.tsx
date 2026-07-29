"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

/**
 * Enables Lenis smooth scroll site-wide. Renders nothing.
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

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return null;
}
