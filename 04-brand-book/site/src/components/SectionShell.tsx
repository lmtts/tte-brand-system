"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PoweredByHope from "@/components/PoweredByHope";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const TOPO = "/assets/brand/topo-orange.webp";

type Props = {
  id: string;
  index: string; // "02"
  name: string; // "The Brand"
  heading: React.ReactNode;
  body: React.ReactNode;
  /** Right side: a full-bleed image, OR content kept within the right margins. */
  image?: { src: string; alt: string };
  children?: React.ReactNode;
  poweredTone?: "light" | "dark";
};

/**
 * Reusable content-section layout (Figma 02/03 pattern):
 * left = descriptive text (4 cols) + section label; right = image (bleeds) or
 * brand content (within margins, with top/bottom breathing room clearing the
 * fixed index and the footer row — image mode intentionally bleeds edge to
 * edge instead). Everything scales with --u. The persistent SectionNav panel
 * and MobileNav live outside this component (mounted once at page level).
 * Type sizes: heading 22 (Mona H4), body 14 (Space Mono Body/Small), label 14.
 */
export default function SectionShell({
  id,
  index,
  name,
  heading,
  body,
  image,
  children,
  poweredTone = "light",
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
      if (hasImg) tl.from(".b-img", { clipPath: "inset(0 0 0 100%)", duration: 0.9 });
      tl.from(".b-heading", { opacity: 0, y: 24, duration: 0.7 }, hasImg ? "-=0.55" : undefined)
        .from(".b-body", { opacity: 0, y: 16, duration: 0.6 }, "-=0.4")
        .from(".b-label", { opacity: 0, duration: 0.5 }, "-=0.35");
    }, root);
    return () => ctx.revert();
  }, []);

  const Heading = ({ style }: { style?: React.CSSProperties }) => (
    <h2
      className="b-heading font-display font-extrabold uppercase leading-none tracking-[0.02em] text-paper"
      style={style}
    >
      {heading}
    </h2>
  );
  const Body = ({ style }: { style?: React.CSSProperties }) => (
    <div className="b-body font-mono leading-[1.4] tracking-[0.01em] text-paper" style={style}>
      {body}
    </div>
  );
  const Label = ({ style }: { style?: React.CSSProperties }) => (
    <p className="b-label font-mono uppercase tracking-[0.06em]" style={style}>
      <span className="text-fire">{index}</span>
      <span className="text-paper"> / {name}</span>
    </p>
  );

  return (
    <section id={id} ref={root} className="secd relative min-h-dvh w-full overflow-hidden bg-ink">
      {/* orange topographic texture */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={TOPO}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.09]"
      />

      {/* ===== DESKTOP (≥1024) ===== */}
      <div className="hidden lg:block">
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

        {/* left column — text centered, label pinned bottom (flex, never overlaps) */}
        <div
          className="absolute z-10 flex flex-col"
          style={{
            left: "calc(36*var(--u))",
            top: "calc(150*var(--u))",
            bottom: "calc(36*var(--u))",
            width: "calc(440*var(--u))",
          }}
        >
          <div className="flex min-h-0 flex-1 flex-col justify-center" style={{ gap: "calc(24*var(--u))" }}>
            <Heading style={{ fontSize: "calc(22*var(--u))" }} />
            <Body style={{ fontSize: "calc(14*var(--u))" }} />
          </div>
          <Label style={{ fontSize: "calc(14*var(--u))", marginTop: "calc(28*var(--u))" }} />
        </div>

        {/* powered by */}
        <div className="absolute z-10" style={{ right: "calc(36*var(--u))", bottom: "calc(30*var(--u))" }}>
          <PoweredByHope tone={poweredTone} />
        </div>
      </div>

      {/* ===== MOBILE / TABLET (<1024) ===== */}
      <div className="relative z-10 flex min-h-dvh flex-col lg:hidden">
        {image ? (
          <div className="h-[42vh] w-full overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image.src} alt={image.alt} className="h-full w-full object-cover object-center" />
          </div>
        ) : (
          <div className="px-6 pt-[68px]">{children}</div>
        )}

        <div className="flex flex-1 flex-col justify-center gap-5 px-6 py-9">
          <Heading style={{ fontSize: "20px" }} />
          <Body style={{ fontSize: "14px" }} />
        </div>

        <div className="flex items-center justify-between border-t border-paper/10 px-6 py-5">
          <Label style={{ fontSize: "13px" }} />
          <PoweredByHope tone={poweredTone} />
        </div>
      </div>
    </section>
  );
}
