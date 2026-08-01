"use client";

import { useEffect, useState } from "react";
import { SECTIONS, pageIdsOf } from "@/lib/sections.config";

/**
 * Tracks which exact page id is currently in view (finer-grained than
 * useActiveSection, which only tracks the numbered section) — needed so
 * arrow-key/button navigation steps one page at a time through a multi-page
 * section instead of jumping straight to its first page.
 */
export function useActivePageId(defaultId = "cover") {
  const [active, setActive] = useState(defaultId);

  useEffect(() => {
    const allIds = SECTIONS.flatMap(pageIdsOf);
    const els = allIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return active;
}
