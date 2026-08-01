"use client";

import { useEffect, useState } from "react";
import { SECTIONS, pageIdsOf } from "@/lib/sections.config";
import { useActivePageId } from "@/lib/useActivePageId";

// Only ready sections are reachable — same guard SectionNav uses.
const NAVIGABLE_IDS = SECTIONS.filter((s) => s.status === "ready").flatMap(pageIdsOf);

function goTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function ChevronIcon({ up }: { up?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: "calc(14*var(--u))", height: "calc(14*var(--u))" }}
    >
      <path d={up ? "M6 15l6-6 6 6" : "M6 9l6 6 6-6"} />
    </svg>
  );
}

/**
 * Step through sections/pages one at a time — ArrowUp/ArrowDown on the
 * keyboard, or the fixed prev/next buttons docked above the footer. Both
 * drive the same scrollIntoView the index nav already uses, so it stays in
 * lockstep with Lenis's snap. Hidden on the cover, same fade-in as the
 * index/footer.
 */
export default function ArrowNav() {
  const activeId = useActivePageId();
  const [past, setPast] = useState(false);

  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > window.innerHeight * 0.72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      // A lightbox or other modal is open — let it own arrow/tab focus
      // instead of also paging the whole site behind it.
      if (document.querySelector('[role="dialog"]')) return;

      const idx = NAVIGABLE_IDS.indexOf(activeId);
      if (idx === -1) return;
      const nextIdx = e.key === "ArrowDown" ? idx + 1 : idx - 1;
      if (nextIdx < 0 || nextIdx >= NAVIGABLE_IDS.length) return;
      e.preventDefault();
      goTo(NAVIGABLE_IDS[nextIdx]);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeId]);

  const idx = NAVIGABLE_IDS.indexOf(activeId);
  const canPrev = idx > 0;
  const canNext = idx !== -1 && idx < NAVIGABLE_IDS.length - 1;

  return (
    <div
      className={`secd fixed z-30 flex flex-col transition-opacity duration-300 ${
        past ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      style={{
        right: "calc(36*var(--u))",
        bottom: "calc(90*var(--u))",
        gap: "1px",
      }}
    >
      <button
        type="button"
        onClick={() => canPrev && goTo(NAVIGABLE_IDS[idx - 1])}
        disabled={!canPrev}
        aria-label="Previous page"
        className="flex items-center justify-center border border-paper/30 bg-ink/95 text-paper backdrop-blur-sm transition-colors hover:border-fire hover:text-fire disabled:pointer-events-none disabled:opacity-30"
        style={{ width: "calc(36*var(--u))", height: "calc(36*var(--u))" }}
      >
        <ChevronIcon up />
      </button>
      <button
        type="button"
        onClick={() => canNext && goTo(NAVIGABLE_IDS[idx + 1])}
        disabled={!canNext}
        aria-label="Next page"
        className="flex items-center justify-center border border-paper/30 bg-ink/95 text-paper backdrop-blur-sm transition-colors hover:border-fire hover:text-fire disabled:pointer-events-none disabled:opacity-30"
        style={{ width: "calc(36*var(--u))", height: "calc(36*var(--u))" }}
      >
        <ChevronIcon />
      </button>
    </div>
  );
}
