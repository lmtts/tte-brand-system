import SectionShell from "@/components/SectionShell";
import ScrambleHover from "@/components/ScrambleHover";

type Weight = { name: string; weight: number };

const OVERVIEW_LETTERS =
  "Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz";
const OVERVIEW_NUMBERS = "0123456789";
const OVERVIEW_SYMBOLS = "!@#$%^&*()-+{}?";

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

function DownloadFontButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-[1.6em] inline-flex w-fit items-center border border-paper/30 font-mono font-bold uppercase tracking-[0.08em] text-paper transition-colors hover:border-fire hover:text-fire"
      style={{
        gap: "calc(10*var(--u))",
        padding: "calc(12*var(--u)) calc(18*var(--u))",
        fontSize: "calc(12*var(--u))",
      }}
    >
      <ScrambleHover text={label} />
      <ExternalArrow />
    </a>
  );
}

/**
 * The specimen block — a single bordered HUD frame, three columns: a giant
 * glyph pair, the weight ramp (each name set in its own weight), and a full
 * alphabet/numeral overview. Approximates the reference layout's structure
 * within our own card language (thin border, no extra chrome).
 */
function TypeSpecimen({ fontClass, weights }: { fontClass: "font-display" | "font-mono"; weights: Weight[] }) {
  return (
    <div
      className="grid h-full w-full grid-cols-1 border border-paper/15 sm:grid-cols-[1.1fr_0.8fr_1.5fr]"
      style={{ minHeight: "calc(320*var(--u))" }}
    >
      {/* giant Aa */}
      <div
        className="flex items-center justify-center border-b border-paper/15 sm:border-b-0 sm:border-r"
        style={{ padding: "calc(20*var(--u))", minHeight: "calc(140*var(--u))" }}
      >
        <span className={`${fontClass} leading-none text-paper`} style={{ fontSize: "calc(150*var(--u))" }}>
          Aa
        </span>
      </div>

      {/* weight ramp */}
      <div
        className="flex flex-col justify-center gap-3 border-b border-paper/15 sm:border-b-0 sm:border-r"
        style={{ padding: "calc(20*var(--u))" }}
      >
        <p
          className="font-mono uppercase text-muted tracking-[0.08em]"
          style={{ fontSize: "calc(11*var(--u))", marginBottom: "calc(6*var(--u))" }}
        >
          Weights
        </p>
        {weights.map((w) => (
          <span
            key={w.name}
            className={`${fontClass} text-paper`}
            style={{ fontWeight: w.weight, fontSize: "calc(20*var(--u))" }}
          >
            {w.name}
          </span>
        ))}
      </div>

      {/* overview */}
      <div className="flex flex-col justify-center gap-3" style={{ padding: "calc(20*var(--u))" }}>
        <p
          className="font-mono uppercase text-muted tracking-[0.08em]"
          style={{ fontSize: "calc(11*var(--u))", marginBottom: "calc(6*var(--u))" }}
        >
          Overview
        </p>
        <p className={`${fontClass} leading-[1.3] text-paper`} style={{ fontSize: "calc(19*var(--u))" }}>
          {OVERVIEW_LETTERS}
        </p>
        <p className={`${fontClass} leading-[1.3] text-paper`} style={{ fontSize: "calc(19*var(--u))" }}>
          {OVERVIEW_NUMBERS} {OVERVIEW_SYMBOLS}
        </p>
      </div>
    </div>
  );
}

/** Section 05, page 1 — Mona Sans. */
function MonaSansPage() {
  return (
    <SectionShell
      id="typography-mona"
      kicker="Typography"
      heading="Mona Sans: the display and heading typeface."
      body={
        <>
          <p>
            Used for the wordmark, headings, and the hero display. A strong, versatile grotesque
            that reads clearly at both small and very large sizes.
          </p>
          <p className="mt-[1em]">
            Display and headings are always uppercase, no exceptions, set in Bold, ExtraBold, or
            Black. The one exception is body copy, set in Medium and sentence case for long-form
            reading.
          </p>
          <DownloadFontButton
            href="https://fonts.google.com/specimen/Mona+Sans?preview.script=Latn"
            label="Download Mona Sans"
          />
        </>
      }
    >
      <TypeSpecimen
        fontClass="font-display"
        weights={[
          { name: "Medium", weight: 500 },
          { name: "Bold", weight: 700 },
          { name: "ExtraBold", weight: 800 },
          { name: "Black", weight: 900 },
        ]}
      />
    </SectionShell>
  );
}

/** Section 05, page 2 — Space Mono. */
function SpaceMonoPage() {
  return (
    <SectionShell
      id="typography-space"
      kicker="Typography"
      dividerAbove="page"
      heading="Space Mono: the data and HUD typeface."
      body={
        <>
          <p>
            Used for HUD overlays, data, and coordinates. A fixed-width face that makes information
            read as data, not decoration.
          </p>
          <p className="mt-[1em]">
            HUD and labels run uppercase, wide-tracked, for a data-readout look. Body text drops to
            sentence case for articles and captions, set in Regular or Bold weight.
          </p>
          <DownloadFontButton
            href="https://fonts.google.com/specimen/Space+Mono?preview.script=Latn"
            label="Download Space Mono"
          />
        </>
      }
    >
      <TypeSpecimen
        fontClass="font-mono"
        weights={[
          { name: "Regular", weight: 400 },
          { name: "Bold", weight: 700 },
        ]}
      />
    </SectionShell>
  );
}

/** Section 05 — Typography. Two pages: Mona Sans, then Space Mono. */
export default function TypographySection() {
  return (
    <>
      <MonaSansPage />
      <SpaceMonoPage />
    </>
  );
}
