"use client";

import { useEffect, useRef, useState } from "react";
import { SCRAMBLE_CHARS, prefersReducedMotion } from "@/lib/motion";

/**
 * Text that scrambles to random characters, then resolves left-to-right
 * back to the real string — a terminal-decrypt beat for interactive labels
 * (nav links, download buttons).
 *
 * Fully self-contained: it finds its own closest interactive ancestor
 * (<a> or <button>) and listens on THAT, so hovering anywhere in the
 * clickable area triggers it, not just the exact text pixels. This is
 * deliberately not an imperative-ref-from-parent design — SectionShell
 * renders `body` twice (desktop/mobile breakpoints), which would give two
 * mounted instances a single shared ref fighting over `ref.current`, and
 * only one of them the visible one. Each instance managing its own
 * ancestor listener sidesteps that entirely.
 */
export default function ScrambleHover({
  text,
  className = "",
  scrambleSpeed = 35,
  revealOnMount = false,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  scrambleSpeed?: number;
  /** Also runs the scramble once, on scroll into view — the "decrypting in" beat for hero text. */
  revealOnMount?: boolean;
  as?: React.ElementType;
}) {
  const [display, setDisplay] = useState(text);
  const ref = useRef<HTMLElement>(null);
  const timeoutId = useRef<number>(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const trigger = (el.closest("a, button") ?? el) as HTMLElement;

    function scramble() {
      if (prefersReducedMotion()) return;
      clearTimeout(timeoutId.current);
      // Lock the trigger to its resting width for the duration of the scramble — on a
      // proportional face (Mona Sans), random characters vary in width frame to frame,
      // which otherwise makes the button visibly resize while it scrambles. A monospace
      // face (Space Mono) never had this problem, but locking width is harmless there too.
      trigger.style.width = `${trigger.getBoundingClientRect().width}px`;
      let progress = 0;
      const tick = () => {
        progress++;
        let out = "";
        for (let i = 0; i < text.length; i++) {
          if (i < progress || text[i] === " ") out += text[i];
          else out += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        }
        setDisplay(out);
        if (progress < text.length) {
          timeoutId.current = window.setTimeout(tick, scrambleSpeed);
        } else {
          setDisplay(text);
          trigger.style.width = "";
        }
      };
      tick();
    }

    trigger.addEventListener("mouseenter", scramble);
    // focus doesn't bubble, so this needs the capture phase to reach the
    // trigger from an inner focus target.
    trigger.addEventListener("focus", scramble, true);

    let observer: IntersectionObserver | undefined;
    if (revealOnMount) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          scramble();
          observer?.disconnect();
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
    }

    return () => {
      trigger.removeEventListener("mouseenter", scramble);
      trigger.removeEventListener("focus", scramble, true);
      clearTimeout(timeoutId.current);
      observer?.disconnect();
    };
  }, [text, scrambleSpeed, revealOnMount]);

  return (
    <Tag ref={ref} className={className}>
      {display}
    </Tag>
  );
}
