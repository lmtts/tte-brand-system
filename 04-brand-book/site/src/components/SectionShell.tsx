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

// SectionNav's and SectionFooter's own real rendered heights at desktop widths (measured
// live, not derived from --u: both bars are built entirely from fixed px — py-6/px-9 and
// fixed text/image sizes in SectionNav, py-3 and fixed sizes in SectionFooter/PoweredByHope
// — so unlike in-section content they don't scale with the fluid unit, and bleedClearance
// needs to clear their true height, not the larger 150u/100u breathing room tuned for
// vertically centering text). If either bar's own padding or content size changes, these
// need to move with it.
const NAV_BAR_HEIGHT = "80px";
const FOOTER_BAR_HEIGHT = "51px";

// Declared at module scope (not inside SectionShell's render) so they keep a
// stable component identity across renders instead of remounting each time.
//
// Three-tier spacing, deliberately unbalanced: the kicker (H4 — literal
// section name, typewriter-revealed) sits far from everything under it, with
// its own rule to close out the "title" beat. The tagline (Label Large, when
// present) and body sit close together right after — they're one thought,
// the kicker is a different one.
/** The desktop TextBlock's own type sizes/gaps — exported so a page that needs to
 * render this exact block outside its normal SectionShell slot (Design System's
 * pinned column, see SystemSection) matches it exactly instead of guessing the
 * numbers again. */
export const DESKTOP_TEXT_BLOCK_STYLE = {
  kickerStyle: { fontSize: "calc(28*var(--u))" },
  taglineStyle: { fontSize: "calc(16*var(--u))" },
  bodyStyle: { fontSize: "calc(14*var(--u))" },
  groupGap: "calc(32*var(--u))",
  kickerGap: "calc(12*var(--u))",
  innerGap: "calc(8*var(--u))",
} as const;

export function TextBlock({
  kicker,
  heading,
  body,
  kickerStyle,
  taglineStyle,
  bodyStyle,
  groupGap,
  kickerGap,
  innerGap,
}: {
  kicker: string;
  /** Omitted entirely when the designer dropped the Label Large line for this page — kicker (H4) stands alone. */
  heading?: string;
  body: React.ReactNode;
  kickerStyle?: React.CSSProperties;
  taglineStyle?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
  /** Kicker block ↔ tagline/body block — wide, so the kicker reads as a section title, not just another line. */
  groupGap: string;
  /** Kicker ↔ its rule. */
  kickerGap: string;
  /** Tagline ↔ body — tight, they read as one thought. */
  innerGap: string;
}) {
  return (
    <div className="sec-textblock flex flex-col" style={{ gap: groupGap }}>
      <div className="flex flex-col" style={{ gap: kickerGap }}>
        <h2
          className="b-kicker font-display font-extrabold uppercase leading-none tracking-[0.01em] text-fire"
          style={kickerStyle}
        >
          <Typewriter text={kicker} speed={55} />
        </h2>
        <div aria-hidden className="bg-paper/15" style={{ height: "1px", width: "100%" }} />
      </div>
      <div className="flex flex-col" style={{ gap: innerGap }}>
        {heading && (
          <p
            className="b-tagline font-display font-extrabold uppercase leading-none tracking-[0.04em] text-paper"
            style={taglineStyle}
          >
            <Typewriter text={heading} speed={18} delay={500} />
          </p>
        )}
        <div className="b-body font-mono leading-[1.4] tracking-[0.01em] text-paper" style={bodyStyle}>
          {body}
        </div>
      </div>
    </div>
  );
}

type Props = {
  id: string;
  /** Literal, short section name (e.g. "Patterns") — Heading 3, typewriter-revealed. */
  kicker: string;
  /** The punchy brand line — now Label Large, under the kicker. Omit when the page has no Label Large line. */
  heading?: string;
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
  /**
   * When true (with `children`, no `image`), the right region renders
   * edge-to-edge with no padding and no vertical divider — the same
   * treatment as `image` mode, for content that composes its own full-bleed
   * layout (e.g. Imagery's hover grid).
   */
  bleed?: boolean;
  /**
   * Force the text/content divider line to draw even in `bleed` mode. Bleed normally
   * omits it (a full-bleed photo needs no seam cut into it), but content that bleeds only
   * to the outer edges while still wanting the standard left seam (e.g. Examples' pannable
   * canvas) can opt back in.
   */
  showDivider?: boolean;
  /**
   * With `bleed`, clear the fixed top nav and bottom footer bars vertically — their
   * own real height (NAV_BAR_HEIGHT/FOOTER_BAR_HEIGHT), not the larger 150u/100u
   * breathing room tuned for vertically centering text — instead of spanning the
   * full viewport edge to edge. Plain `bleed` deliberately runs full-bleed vertically
   * too (a full-bleed photo reads fine with the nav/footer bars floating over it),
   * but content with its own hard edges — a grid of image tiles, say — visibly loses
   * its top/bottom row under those fixed bars without this.
   */
  bleedClearance?: boolean;
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
export default function SectionShell({
  id,
  kicker,
  heading,
  body,
  image,
  children,
  dividerAbove = "section",
  bleed = false,
  showDivider = false,
  bleedClearance = false,
}: Props) {
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
      // Neither heading line fades via GSAP anymore — Typewriter's own
      // scroll-triggered character reveal is the entrance moment for both.
      if (hasImg) tl.from(".b-img", { clipPath: "inset(0 0 0 100%)", duration: 0.9 });
      tl.from(".b-body", { opacity: 0, y: 16, duration: 0.6 }, hasImg ? "-=0.3" : 0.3);

      // Depth parallax: the topo texture drifts slower than the content
      // riding over it — scaled up first so the drift never reveals an edge.
      const topo = el.querySelector(".b-topo");
      if (topo) {
        gsap.set(topo, { scale: 1.15 });
        gsap.to(topo, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 0.6 },
        });
      }
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
        className="b-topo pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.0675]"
      />

      {/* ===== DESKTOP (≥1024) ===== */}
      <div className="hidden lg:block">
        {/* vertical rule between text and content — only in "children" mode
            (a full-bleed photo needs no seam cut into it) */}
        {!image && (!bleed || showDivider) && (
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
        ) : bleed ? (
          // With showDivider, the bleed region starts AT the divider (540u) instead of
          // .sec-imgleft's 42.78% — those are two different rulers (42.78% is Figma col 6,
          // where a full-bleed photo starts; 540u is the text/content seam), and using the
          // photo ruler here left a ~100px gap between the line and the content.
          <div
            className={`absolute right-0 overflow-hidden ${showDivider ? "" : "sec-imgleft"}`}
            style={{
              ...(showDivider ? { left: "calc(540*var(--u))" } : {}),
              ...(bleedClearance
                ? { top: NAV_BAR_HEIGHT, bottom: FOOTER_BAR_HEIGHT }
                : { top: 0, bottom: 0 }),
            }}
          >
            {children}
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
          className="sec-textcol absolute z-10 flex flex-col justify-center"
          style={{
            left: "calc(36*var(--u))",
            top: "calc(150*var(--u))",
            bottom: "calc(100*var(--u))",
            width: "calc(440*var(--u))",
          }}
        >
          <TextBlock
            kicker={kicker}
            heading={heading}
            body={body}
            kickerStyle={{ fontSize: "calc(28*var(--u))" }}
            taglineStyle={{ fontSize: "calc(16*var(--u))" }}
            bodyStyle={{ fontSize: "calc(14*var(--u))" }}
            groupGap="calc(32*var(--u))"
            kickerGap="calc(12*var(--u))"
            innerGap="calc(8*var(--u))"
          />
        </div>
      </div>

      {/* ===== MOBILE / TABLET (<1024) ===== */}
      {/* Text first, then image/content — reads top-down like the rest of the
          page instead of leading with a visual before its context. Natural
          document flow, no per-section height clamp or nested scroll: Lenis
          and its mandatory snap are desktop-only (see LenisProvider), so
          mobile is just the page scrolling, one scrollbar, full stop. */}
      <div className="relative z-10 flex min-h-dvh flex-col lg:hidden">
        <div className="px-6 pb-6 pt-[68px]">
          <TextBlock
            kicker={kicker}
            heading={heading}
            body={body}
            kickerStyle={{ fontSize: "22px" }}
            taglineStyle={{ fontSize: "14px" }}
            bodyStyle={{ fontSize: "14px" }}
            groupGap="28px"
            kickerGap="10px"
            innerGap="8px"
          />
        </div>

        {image ? (
          <div className="relative w-full overflow-hidden" style={{ height: "50vh" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image.src} alt={image.alt} className="h-full w-full object-cover object-center" />
          </div>
        ) : bleed ? (
          <div className="relative w-full overflow-hidden">{children}</div>
        ) : (
          <div className="px-6 pb-24">{children}</div>
        )}
      </div>
    </section>
  );
}
