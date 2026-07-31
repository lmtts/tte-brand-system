"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { DUR, prefersReducedMotion } from "@/lib/motion";

/**
 * Odometer-style count-up (GSAP). Rolls from 0 to `to` on mount.
 */
export default function CountUp({
  to,
  decimals = 0,
  suffix = "",
  prefix = "",
  className = "",
}: {
  to: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}) {
  const [val, setVal] = useState(prefersReducedMotion() ? to : 0);
  const obj = useRef({ v: 0 });
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const el = ref.current;
    if (!el) return;

    let tween: gsap.core.Tween | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        tween = gsap.to(obj.current, {
          v: to,
          duration: DUR.cinematic,
          ease: "power2.out",
          onUpdate: () => setVal(obj.current.v),
        });
        observer.disconnect();
      },
      { threshold: 0.4 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      tween?.kill();
    };
  }, [to]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {val.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
}
