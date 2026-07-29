"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { SECTIONS } from "@/lib/sections.config";
import { prefersReducedMotion } from "@/lib/motion";

const BIRD = "/assets/brand/bird-index.svg";

/**
 * The Index — desktop-only collapsible section navigation, top-left of a
 * content section. Closed: logo + label + menu. Open: adds the 01–10 index.
 * Sizes scale with the section unit (--u). Mobile uses MobileNav instead.
 */
export default function SectionNav({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    gsap.set(el, { height: 0, opacity: 0, overflow: "hidden" });
    if (prefersReducedMotion()) {
      tl.current = null;
      return;
    }
    tl.current = gsap
      .timeline({ paused: true })
      .to(el, { height: "auto", opacity: 1, duration: 0.42, ease: "power3.out" })
      .from(
        el.querySelectorAll(".nav-item"),
        { opacity: 0, x: -8, stagger: 0.035, duration: 0.3, ease: "power2.out" },
        "-=0.22"
      );
    return () => {
      tl.current?.kill();
    };
  }, []);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    if (!tl.current) {
      gsap.set(el, { height: open ? "auto" : 0, opacity: open ? 1 : 0 });
      return;
    }
    if (open) tl.current.play();
    else tl.current.reverse();
  }, [open]);

  const go = (id: string, ready: boolean) => {
    if (!ready) return;
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className="hidden w-fit border border-solid border-fire bg-ink/95 backdrop-blur-sm lg:block"
      style={{ padding: "calc(35*var(--u)) calc(30*var(--u))" }}
      aria-label="Brand book index"
    >
      {/* header row */}
      <div className="flex items-center" style={{ gap: "calc(40*var(--u))" }}>
        <div className="flex items-center" style={{ gap: "calc(22*var(--u))" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={BIRD} alt="" style={{ height: "calc(36*var(--u))" }} className="w-auto" aria-hidden />
          <div
            className="font-mono uppercase leading-[1.3] tracking-[0.06em] text-paper"
            style={{ fontSize: "calc(12*var(--u))" }}
          >
            <div>To the Ends of the Earth</div>
            <div>Brand Guidelines v1.0</div>
          </div>
        </div>
        <button
          onClick={() => setOpen((o) => !o)}
          className="grid shrink-0 place-items-center text-paper transition-colors hover:text-fire"
          style={{ width: "calc(24*var(--u))", height: "calc(24*var(--u))" }}
          aria-expanded={open}
          aria-label={open ? "Close index" : "Open index"}
        >
          {open ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-full w-full">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-full w-full">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* index list (animated) */}
      <div ref={listRef}>
        <div
          className="w-full bg-paper/15"
          style={{ height: "1px", marginTop: "calc(35*var(--u))", marginBottom: "calc(32*var(--u))" }}
        />
        <ul className="flex flex-col" style={{ gap: "calc(26*var(--u))" }}>
          {SECTIONS.map((s) => {
            const isActive = s.index === active;
            const ready = s.status === "ready";
            return (
              <li key={s.id} className="nav-item">
                <button
                  onClick={() => go(s.id, ready)}
                  disabled={!ready}
                  className={`flex items-center font-mono uppercase tracking-[0.06em] transition-colors ${
                    ready ? "cursor-pointer" : "cursor-default"
                  } ${isActive ? "" : "text-muted"} ${ready && !isActive ? "hover:text-paper" : ""}`}
                  style={{ gap: "calc(28*var(--u))", fontSize: "calc(14*var(--u))" }}
                >
                  <span className={isActive ? "text-fire" : ""}>{s.index}</span>
                  <span className={isActive ? "text-paper" : ""}>{s.name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
