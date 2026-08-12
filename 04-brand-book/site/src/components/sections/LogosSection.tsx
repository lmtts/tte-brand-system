import SectionShell from "@/components/SectionShell";
import ScrambleHover from "@/components/ScrambleHover";
import { BulletList } from "@/components/BrandList";

type LogoCardProps = {
  src: string;
  alt: string;
  label: string;
};

/** A single logo lockup — thin border, HUD label header, logo centered and never oversized. */
function LogoCard({ src, alt, label }: LogoCardProps) {
  return (
    // Plain block on mobile, flex-col only from lg — a flex-col ancestor
    // plus a flex-1 (flex-basis:0%) descendant is a known WebKit bug that
    // silently collapses the descendant to zero height on iOS Safari,
    // even though Chrome renders it correctly.
    <div className="block border border-paper/15 lg:flex lg:flex-col">
      <div
        className="flex items-center border-b border-paper/15"
        style={{ gap: "calc(8*var(--u))", padding: "calc(12*var(--u)) calc(14*var(--u))" }}
      >
        <span className="shrink-0 bg-fire" style={{ width: "6px", height: "6px" }} />
        <span
          className="font-mono uppercase leading-none tracking-[0.08em] text-muted"
          style={{ fontSize: "calc(11*var(--u))" }}
        >
          {label}
        </span>
      </div>
      <div
        className="flex items-center justify-center lg:flex-1"
        style={{ padding: "calc(22*var(--u))", minHeight: "calc(140*var(--u))" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="w-auto object-contain"
          style={{ maxWidth: "72%", maxHeight: "calc(64*var(--u))" }}
        />
      </div>
    </div>
  );
}

function DownloadArrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: "calc(14*var(--u))", height: "calc(14*var(--u))" }}>
      <path d="M12 4v12m0 0 4.5-4.5M12 16l-4.5-4.5" />
      <path d="M4 19h16" />
    </svg>
  );
}

/** The four lockups, as a 2×2 grid — clean, spaced, tactical. Sizes scale with --u. */
function LogosGrid() {
  return (
    <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:h-full" style={{ gap: "calc(24*var(--u))" }}>
      <LogoCard src="/assets/logos/complete.svg" alt="To the Ends of the Earth: complete lockup" label="Complete Logo" />
      <LogoCard src="/assets/logos/icon.svg" alt="To the Ends of the Earth: icon mark" label="Icon" />
      <LogoCard src="/assets/logos/wordmark.svg" alt="To the Ends of the Earth: wordmark" label="Wordmark" />
      <LogoCard src="/assets/logos/hope-channel.svg" alt="To the Ends of the Earth, powered by Hope Channel" label="Hope Channel Connection" />
    </div>
  );
}

/** A single misuse example — the violation shown live on the real mark, red ✗ flag, rule below. */
function MisuseCard({ children, caption }: { children: React.ReactNode; caption: string }) {
  return (
    <div className="flex flex-col border border-paper/15">
      <div
        className="relative flex items-center justify-center overflow-hidden bg-ink"
        style={{ minHeight: "calc(76*var(--u))", padding: "calc(14*var(--u))" }}
      >
        {children}
        <span
          aria-hidden
          className="absolute font-display font-black text-fire"
          style={{ top: "calc(6*var(--u))", right: "calc(8*var(--u))", fontSize: "calc(16*var(--u))" }}
        >
          ✗
        </span>
      </div>
      <p
        className="border-t border-paper/15 font-mono uppercase leading-[1.3] tracking-[0.06em] text-muted"
        style={{ padding: "calc(10*var(--u)) calc(12*var(--u))", fontSize: "calc(10*var(--u))" }}
      >
        {caption}
      </p>
    </div>
  );
}

/** The 6 official misuse rules (TTE-BrandBook-Figma-Spec.md, Page 18), each demonstrated on the real mark where a live example is meaningful. */
function MisuseGrid() {
  return (
    <div className="flex h-full w-full items-center">
    <div className="grid w-full grid-cols-2 sm:grid-cols-3" style={{ gap: "calc(16*var(--u))" }}>
      <MisuseCard caption="Don’t distort or stretch">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/logos/icon.svg" alt="" aria-hidden className="h-auto" style={{ maxHeight: "calc(40*var(--u))", transform: "scaleX(2.1)" }} />
      </MisuseCard>
      <MisuseCard caption="Don’t rotate">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/logos/icon.svg" alt="" aria-hidden className="h-auto" style={{ maxHeight: "calc(40*var(--u))", transform: "rotate(24deg)" }} />
      </MisuseCard>
      <MisuseCard caption="Don’t recolor outside approved variants">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/logos/icon.svg"
          alt=""
          aria-hidden
          className="h-auto"
          style={{ maxHeight: "calc(40*var(--u))", filter: "hue-rotate(160deg) saturate(4)" }}
        />
      </MisuseCard>
      <MisuseCard caption="Don’t separate icon from wordmark in lockups">
        <div className="flex w-full items-center justify-between">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logos/icon.svg" alt="" aria-hidden style={{ height: "calc(28*var(--u))" }} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logos/wordmark.svg" alt="" aria-hidden style={{ height: "calc(14*var(--u))" }} />
        </div>
      </MisuseCard>
      <MisuseCard caption="Don’t place on busy backgrounds without overlay">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/patterns/pattern-tile.svg" alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" style={{ opacity: 0.6 }} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/logos/icon.svg" alt="" aria-hidden className="relative" style={{ maxHeight: "calc(36*var(--u))" }} />
      </MisuseCard>
      <MisuseCard caption="Don’t use without Hope Channel in official materials">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/logos/complete.svg" alt="" aria-hidden className="h-auto" style={{ maxHeight: "calc(40*var(--u))" }} />
      </MisuseCard>
    </div>
    </div>
  );
}

/** Section 03, page 1 — the four lockups. */
function LogosShowcasePage() {
  return (
    <SectionShell
      id="logos"
      kicker="Logos"
      body={
        <>
          <p>The official logo system has variations for every use:</p>
          <BulletList
            items={[
              <>
                <strong className="font-bold">The complete logo</strong> (Icon + Wordmark)
              </>,
              <>
                <strong className="font-bold">The icon</strong> (Fire Dove)
              </>,
              <strong key="wordmark" className="font-bold">The wordmark</strong>,
              <>
                {/* Explicit {" "}: JSX drops the leading space of a text node that starts on
                    the element's line and then wraps onto further lines. */}
                <strong className="font-bold">The Hope Channel brand connection:</strong>{" "}
                it is essential to represent TTE&rsquo;s connection with Hope Channel. The
                relationship with its parent brand must be visible and clear across all
                applications.
              </>,
            ]}
          />
          <p className="mt-[1em]">
            Always keep contrast: white on dark or photographic backgrounds, black on light.
          </p>
          <p className="mt-[1em]">
            Every complete file lives in the logo kit below, and in the repository on GitHub.
            Consult it for all the official logo variations.
          </p>
          <a
            href="/downloads/tte-logo-kit.zip"
            download
            className="mt-[1.6em] inline-flex w-fit items-center border border-paper/30 font-mono font-bold uppercase tracking-[0.08em] text-paper transition-colors hover:border-fire hover:text-fire"
            style={{ gap: "calc(10*var(--u))", padding: "calc(12*var(--u)) calc(18*var(--u))", fontSize: "calc(12*var(--u))" }}
          >
            <DownloadArrow />
            <ScrambleHover text="Download logo kit" />
          </a>
        </>
      }
    >
      <LogosGrid />
    </SectionShell>
  );
}

/** Section 03, page 2 — the 6 official misuse rules. */
function LogosMisusePage() {
  return (
    <SectionShell
      id="logos-misuse"
      kicker="Logo Wrong Usage"
      dividerAbove="page"
      body={
        <>
          <p>Every example here showcases how you shouldn&rsquo;t use the logo system.</p>
          <p className="mt-[1em]">
            The TTE mark only works when it&rsquo;s reproduced exactly as issued: same
            proportions, same color, every time.
          </p>
        </>
      }
    >
      <MisuseGrid />
    </SectionShell>
  );
}

/** Section 03 — Logos. Two pages: the lockups, then misuse rules. */
export default function LogosSection() {
  return (
    <>
      <LogosShowcasePage />
      <LogosMisusePage />
    </>
  );
}
