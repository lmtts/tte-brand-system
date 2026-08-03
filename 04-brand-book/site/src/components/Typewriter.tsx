"use client";

import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/lib/motion";

/**
 * Character-by-character reveal with a blinking cursor — the "someone is
 * typing this live" beat for section headings. Starts once the element
 * scrolls into view (not on mount), same trigger pattern as DecodeText.
 *
 * Accessibility: the animated text is aria-hidden; a static sr-only span
 * carries the real string throughout, so screen readers get it once,
 * cleanly, instead of a stream of partial states.
 */
export default function Typewriter({
  text,
  className = "",
  speed = 22,
  delay = 0,
  cursor = true,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  cursor?: boolean;
  as?: React.ElementType;
}) {
  const reduced = prefersReducedMotion();
  const [shown, setShown] = useState(reduced ? text.length : 0);
  const [done, setDone] = useState(reduced);
  const ref = useRef<HTMLElement>(null);
  const started = useRef(false);
  const timeoutId = useRef<number>(0);

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;

    function type() {
      if (started.current) return;
      started.current = true;
      let i = 0;
      const tick = () => {
        i++;
        setShown(i);
        if (i < text.length) {
          timeoutId.current = window.setTimeout(tick, speed);
        } else {
          setDone(true);
        }
      };
      timeoutId.current = window.setTimeout(tick, delay);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        type();
        observer.disconnect();
      },
      { threshold: 0.4 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId.current);
    };
  }, [reduced, text, speed, delay]);

  return (
    <Tag ref={ref} className={className}>
      <span aria-hidden="true">
        {text.slice(0, shown)}
        {cursor && !done && <span className="typewriter-cursor">_</span>}
      </span>
      <span className="sr-only">{text}</span>
    </Tag>
  );
}
