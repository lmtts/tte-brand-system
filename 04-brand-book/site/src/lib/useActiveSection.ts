"use client";

import { useEffect, useState } from "react";
import { SECTIONS, pageIdsOf, sectionIndexForPageId } from "@/lib/sections.config";

/**
 * Tracks which numbered section is currently in view, across every page id
 * a section owns (see Section.pageIds). Shared by the desktop and mobile nav
 * so "active" behaves identically — and so a future multi-page section (e.g.
 * Logos showcase + Logos misuse) keeps the same index highlighted throughout.
 */
export function useActiveSection(defaultIndex = "02") {
  const [active, setActive] = useState(defaultIndex);

  useEffect(() => {
    const allIds = SECTIONS.flatMap(pageIdsOf);
    const els = allIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const idx = sectionIndexForPageId(e.target.id);
          if (idx) setActive(idx);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return active;
}
