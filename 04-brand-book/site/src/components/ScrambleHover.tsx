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
  lockWidth = true,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  scrambleSpeed?: number;
  /** Also runs the scramble once, on scroll into view — the "decrypting in" beat for hero text. */
  revealOnMount?: boolean;
  /**
   * Freezes the trigger's width for the scramble's duration, so a proportional face
   * doesn't visibly resize it frame to frame — on by default (existing behavior).
   * Set false when the trigger isn't a text-sized button/link (e.g. a full image
   * tile several ScrambleHovers share as their closest("a, button")): multiple
   * instances there each capture and clear the SAME trigger's inline width at
   * different, unsynchronized moments — a shorter label finishes and clears it
   * while a longer one is still mid-scramble, unpredictable when caught during a
   * layout-affecting moment (e.g. a scrollbar toggling elsewhere on the page), which
   * is how a whole grid tile ends up collapsed to zero width.
   */
  lockWidth?: boolean;
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
      if (lockWidth) trigger.style.width = `${trigger.getBoundingClientRect().width}px`;
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
          if (lockWidth) trigger.style.width = "";
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
  }, [text, scrambleSpeed, revealOnMount, lockWidth]);

  return (
    <Tag ref={ref} className={className}>
      {display}
    </Tag>
  );
}
