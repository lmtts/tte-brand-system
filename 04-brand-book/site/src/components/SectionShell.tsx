"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";
import Typewriter from "@/components/Typewriter";

gsap.registerPlugin(ScrollTrigger);

// Vector, not the old raster copy — infinite resolution at any viewport size,
// and it's already native Fire Orange so no recolor filter is needed here.
const TOPO = "/assets/patterns/pattern-tile.svg";

// Declared at module scope (not inside SectionShell's render) so they keep a
// stable component identity across renders instead of remounting each time.
function Heading({ heading, style }: { heading: string; style?: React.CSSProperties }) {
  return (
    <h2
      className="b-heading font-display font-extrabold uppercase leading-none tracking-[0.02em] text-paper"
      style={style}
    >
      <Typewriter text={heading} speed={20} />
    </h2>
  );
}
function Body({ body, style }: { body: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div className="b-body font-mono leading-[1.4] tracking-[0.01em] text-paper" style={style}>
      {body}
    </div>
  );
}

type Props = {
  id: string;
  heading: string;
  body: React.ReactNode;
  /** Right side: a full-bleed image, OR content kept within the right margins. */
  image?: { src: string; alt: string };
  children?: React.ReactNode;
  /**
   * The divider drawn at the top of this page. "section" (default) is a
   * full-bleed line marking the start of a new numbered section. "page" is a
   * lighter, inset line for a continuation page within the same numbered
   * section (e.g. Typography's second page). "none" omits it — only the
   * very first page on the site (Cover, which doesn't use SectionShell) has
   * no divider above it, so every SectionShell page gets one by default.
   */
  dividerAbove?: "section" | "page" | "none";
};

/**
 * Reusable content-section layout (Figma 02/03 pattern):
 * left = descriptive text (4 cols); right = image (bleeds) or brand content
 * (within margins, with top/bottom breathing room clearing the fixed index
 * nav and the fixed footer bar — image mode intentionally bleeds edge to
 * edge instead, since the footer bar carries its own opaque backing).
 * Everything scales with --u. The persistent SectionNav, MobileNav and
 * SectionFooter live outside this component (mounted once at page level).
 * Type sizes: heading 22 (Mona H4), body 14 (Space Mono Body/Small).
 */
export default function SectionShell({ id, heading, body, image, children, dividerAbove = "section" }: Props) {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const hasImg = !!el.querySelector(".b-img");
      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: "top 62%" },
        defaults: { ease: "power3.out" },
      });
      // The heading no longer fades via GSAP — Typewriter's own scroll-
      // triggered character reveal is the entrance moment for it now.
      if (hasImg) tl.from(".b-img", { clipPath: "inset(0 0 0 100%)", duration: 0.9 });
      tl.from(".b-body", { opacity: 0, y: 16, duration: 0.6 }, hasImg ? "-=0.3" : 0.3);
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id={id} ref={root} className="secd relative min-h-dvh w-full overflow-hidden bg-ink">
      {/* section boundary — full-bleed for a new numbered section, a lighter
          inset rule between pages of the same section */}
      {dividerAbove !== "none" &&
        (dividerAbove === "page" ? (
          <div
            aria-hidden
            className="absolute top-0 z-20 bg-paper/8"
            style={{ left: "calc(36*var(--u))", right: "calc(36*var(--u))", height: "1px" }}
          />
        ) : (
          <div aria-hidden className="absolute inset-x-0 top-0 z-20 bg-paper/20" style={{ height: "1px" }} />
        ))}

      {/* orange topographic texture */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={TOPO}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.0675]"
      />

      {/* ===== DESKTOP (≥1024) ===== */}
      <div className="hidden lg:block">
        {/* vertical rule between text and content — only in "children" mode
            (a full-bleed photo needs no seam cut into it) */}
        {!image && (
          <div
            aria-hidden
            className="absolute bg-paper/15"
            style={{
              left: "calc(540*var(--u))",
              top: "0",
              bottom: "0",
              width: "1px",
            }}
          />
        )}

        {/* right region */}
        {image ? (
          <div className="sec-imgleft absolute inset-y-0 right-0 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image.src} alt={image.alt} className="b-img h-full w-full object-cover object-center" />
          </div>
        ) : (
          <div
            className="sec-imgleft absolute inset-y-0 right-0"
            style={{
              paddingRight: "calc(36*var(--u))",
              paddingTop: "calc(150*var(--u))",
              paddingBottom: "calc(100*var(--u))",
            }}
          >
            {children}
          </div>
        )}

        {/* left column — text, vertically centered within the same clearance
            as the right region (clears the fixed nav above, fixed footer below) */}
        <div
          className="absolute z-10 flex flex-col justify-center"
          style={{
            left: "calc(36*var(--u))",
            top: "calc(150*var(--u))",
            bottom: "calc(100*var(--u))",
            width: "calc(440*var(--u))",
            gap: "calc(24*var(--u))",
          }}
        >
          <Heading heading={heading} style={{ fontSize: "calc(22*var(--u))" }} />
          <Body body={body} style={{ fontSize: "calc(14*var(--u))" }} />
        </div>
      </div>

      {/* ===== MOBILE / TABLET (<1024) ===== */}
      {/* Text first, then image/content — reads top-down like the rest of the
          page instead of leading with a visual before its context. */}
      <div className="relative z-10 flex min-h-dvh flex-col lg:hidden">
        <div className="flex flex-col gap-5 px-6 pb-6 pt-[68px]">
          <Heading heading={heading} style={{ fontSize: "20px" }} />
          <Body body={body} style={{ fontSize: "14px" }} />
        </div>

        {image ? (
          <div className="relative w-full flex-1 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image.src} alt={image.alt} className="h-full w-full object-cover object-center" />
          </div>
        ) : (
          <div className="flex-1 px-6 pb-24">{children}</div>
        )}
      </div>
    </section>
  );
}
