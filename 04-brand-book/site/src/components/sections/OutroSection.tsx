"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";
import ScrambleHover from "@/components/ScrambleHover";

gsap.registerPlugin(ScrollTrigger);

const TOPO = "/assets/patterns/pattern-tile.svg";
const ICON = "/assets/logos/icon.svg";

const LINKS = [
  { label: "GitHub · Brand System", href: "https://github.com/lmtts/tte-brand-system" },
  { label: "Instagram · @ttee_go", href: "https://www.instagram.com/ttee_go/" },
  { label: "Hope Channel International", href: "https://hopechannelinternational.org/" },
];

function ExternalArrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: "calc(14*var(--u))", height: "calc(14*var(--u))" }}
    >
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

/** Section 11 — Close. Custom full-screen layout like the Cover, not the two-column SectionShell pattern. */
export default function OutroSection() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from(".ot-reveal", {
        opacity: 0,
        y: 16,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 70%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="outro"
      ref={root}
      className="secd relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-ink px-6 text-center text-paper"
    >
      {/* section boundary — same full-bleed rule every numbered section opens with */}
      <div aria-hidden className="absolute inset-x-0 top-0 z-20 bg-paper/20" style={{ height: "1px" }} />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={TOPO}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.0675]"
      />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={ICON}
        alt=""
        aria-hidden
        className="ot-reveal relative"
        style={{ width: "calc(40*var(--u))", marginBottom: "calc(28*var(--u))" }}
      />

      <p
        className="ot-reveal relative font-display font-extrabold uppercase leading-[1.15] text-paper"
        style={{ fontSize: "calc(34*var(--u))", maxWidth: "calc(640*var(--u))" }}
      >
        “You will be my witnesses to the ends of the earth.”
      </p>
      <p
        className="ot-reveal relative font-mono uppercase tracking-[0.08em] text-muted"
        style={{ marginTop: "calc(10*var(--u))", fontSize: "calc(12*var(--u))" }}
      >
        Acts 1:8
      </p>

      <div
        className="ot-reveal relative flex w-full max-w-xs flex-col items-stretch sm:w-auto sm:max-w-none sm:flex-row sm:items-center"
        style={{ marginTop: "calc(48*var(--u))", gap: "calc(12*var(--u))" }}
      >
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-paper/30 font-mono font-bold uppercase tracking-[0.08em] text-paper transition-colors hover:border-fire hover:text-fire sm:justify-start"
            style={{ gap: "calc(10*var(--u))", padding: "calc(12*var(--u)) calc(18*var(--u))", fontSize: "calc(11*var(--u))" }}
          >
            <ScrambleHover text={l.label} />
            <ExternalArrow />
          </a>
        ))}
      </div>
    </section>
  );
}
