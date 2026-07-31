"use client";

import { useEffect, useRef, useState } from "react";
import { SCRAMBLE_CHARS, prefersReducedMotion } from "@/lib/motion";

/**
 * Terminal-style decode reveal: characters scramble, then resolve
 * left-to-right to the final string. "Intelligence/programming" motion.
 */
export default function DecodeText({
  text,
  className = "",
  duration = 900,
  delay = 0,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
}) {
  const [display, setDisplay] = useState(text);
  const frame = useRef<number>(0);
  const started = useRef(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setDisplay(text);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const runDecode = () => {
      if (started.current) return;
      started.current = true;
      let start = 0;
      const run = (t: number) => {
        if (!start) start = t;
        const elapsed = t - start;
        if (elapsed < delay) {
          frame.current = requestAnimationFrame(run);
          return;
        }
        const p = Math.min(1, (elapsed - delay) / duration);
        const revealed = Math.floor(p * text.length);
        let out = "";
        for (let i = 0; i < text.length; i++) {
          if (i < revealed || text[i] === " ") out += text[i];
          else out += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        }
        setDisplay(out);
        if (p < 1) frame.current = requestAnimationFrame(run);
        else setDisplay(text);
      };
      frame.current = requestAnimationFrame(run);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        runDecode();
        observer.disconnect();
      },
      { threshold: 0.4 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame.current);
    };
  }, [text, duration, delay]);

  return (
    <Tag ref={ref} className={className}>
      {display}
    </Tag>
  );
}
