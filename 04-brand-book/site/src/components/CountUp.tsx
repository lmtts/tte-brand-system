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

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const tween = gsap.to(obj.current, {
      v: to,
      duration: DUR.cinematic,
      ease: "power2.out",
      onUpdate: () => setVal(obj.current.v),
    });
    return () => {
      tween.kill();
    };
  }, [to]);

  return (
    <span className={className}>
      {prefix}
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}
