import SectionShell from "@/components/SectionShell";
import ScrambleHover from "@/components/ScrambleHover";
import DecodeText from "@/components/DecodeText";

const FORMATS = [
  { file: "tokens.json", label: "JSON" },
  { file: "tokens.css", label: "CSS" },
  { file: "tokens.scss", label: "SCSS" },
  { file: "tokens.tailwind.js", label: "Tailwind" },
];

function DownloadArrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: "calc(12*var(--u))", height: "calc(12*var(--u))" }}
    >
      <path d="M12 4v12m0 0 4.5-4.5M12 16l-4.5-4.5" />
      <path d="M4 19h16" />
    </svg>
  );
}

function FormatDownload({ file, label }: { file: string; label: string }) {
  return (
    <a
      href={`/downloads/${file}`}
      download
      className="flex items-center justify-between border border-paper/30 font-mono font-bold uppercase tracking-[0.06em] text-paper transition-colors hover:border-fire hover:text-fire"
      style={{ padding: "calc(10*var(--u)) calc(14*var(--u))", fontSize: "calc(11*var(--u))" }}
    >
      <ScrambleHover text={label} />
      <DownloadArrow />
    </a>
  );
}

type ChainStep = { layer: string; key: string; value: string; note?: string };

const CHAIN: ChainStep[] = [
  { layer: "primitives", key: "color.fire-orange", value: "#FE5442" },
  { layer: "brand", key: "color.primary", value: "{primitives.color.fire-orange}" },
  {
    layer: "semantic",
    key: "color.surface.accent",
    value: "{brand.color.primary}",
    note: "CTA backgrounds, highlighted elements",
  },
];

function TokenPanelHeader({ title, swatch }: { title: string; swatch: React.ReactNode }) {
  return (
    <div
      className="flex items-center border-b border-paper/15"
      style={{ gap: "calc(8*var(--u))", padding: "calc(10*var(--u)) calc(14*var(--u))" }}
    >
      <span aria-hidden className="shrink-0 bg-fire" style={{ width: "6px", height: "6px" }} />
      <span className="font-mono uppercase leading-none tracking-[0.06em] text-paper" style={{ fontSize: "calc(11*var(--u))" }}>
        {title}
      </span>
      <span aria-hidden className="ml-auto shrink-0" style={{ width: "calc(16*var(--u))", height: "calc(16*var(--u))" }}>
        {swatch}
      </span>
    </div>
  );
}

/** The layer chain, rendered like a resolving code trace — raw value to applied meaning. */
function TokenChainPanel() {
  return (
    <div className="border border-paper/15 bg-ink">
      <TokenPanelHeader title="Token chain · Fire Orange" swatch={<span className="block h-full w-full bg-fire" />} />
      <div className="flex flex-col font-mono" style={{ padding: "calc(20*var(--u)) calc(16*var(--u))", gap: "calc(4*var(--u))" }}>
        {CHAIN.map((step, i) => (
          <div key={step.layer} style={{ paddingLeft: `calc(${i * 24}*var(--u))` }}>
            {i > 0 && (
              <div
                className="text-muted"
                style={{ fontSize: "calc(12*var(--u))", marginBottom: "calc(2*var(--u))" }}
              >
                ↳
              </div>
            )}
            <div className="uppercase tracking-[0.08em] text-fire" style={{ fontSize: "calc(9*var(--u))" }}>
              {step.layer}
            </div>
            <div className="text-paper" style={{ fontSize: "calc(13*var(--u))", marginTop: "calc(3*var(--u))" }}>
              {step.key}:{" "}
              <span className="text-muted">
                <DecodeText text={step.value} duration={500} delay={i * 150} />
              </span>
            </div>
            {step.note && (
              <div
                className="text-muted"
                style={{ fontSize: "calc(10*var(--u))", marginTop: "calc(3*var(--u))" }}
              >
                {step.note}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

type RadiusStep = { key: string; value: string; note: string };

const RADIUS: RadiusStep[] = [
  { key: "borderRadius.default", value: "0px", note: "Every component: buttons, inputs, cards, badges" },
  { key: "borderRadius.full", value: "9999px", note: "Exception only: avatars and other circular elements" },
];

/** Radius's token — no primitives/brand layer to cascade through in tokens.json (it's set once,
 * directly, at semantic), so this panel shows the rule and its one flagged exception instead of a chain. */
function RadiusTokenPanel() {
  return (
    <div className="border border-paper/15 bg-ink">
      <TokenPanelHeader title="Token · Radius" swatch={<span className="block h-full w-full border border-fire" />} />
      <div className="flex flex-col font-mono" style={{ padding: "calc(20*var(--u)) calc(16*var(--u))", gap: "calc(14*var(--u))" }}>
        {RADIUS.map((r, i) => (
          <div key={r.key}>
            <div className="uppercase tracking-[0.08em] text-fire" style={{ fontSize: "calc(9*var(--u))" }}>
              semantic
            </div>
            <div className="text-paper" style={{ fontSize: "calc(13*var(--u))", marginTop: "calc(3*var(--u))" }}>
              {r.key}:{" "}
              <span className="text-muted">
                <DecodeText text={r.value} duration={500} delay={i * 150} />
              </span>
            </div>
            <div className="text-muted" style={{ fontSize: "calc(10*var(--u))", marginTop: "calc(3*var(--u))" }}>
              {r.note}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Section 10 — Tokens. */
export default function TokensSection() {
  return (
    <SectionShell
      id="tokens"
      kicker="Tokens"
      heading="One value, defined once, reused everywhere it&rsquo;s needed."
      body={
        <>
          <p>
            A token is a brand value stored as data: a color, a spacing amount, a font size.
            Change it once here and it updates everywhere, instead of drifting out of sync across
            a dozen files.
          </p>
          <p className="mt-[1em]">
            Values move through three layers. Primitives hold the raw value, brand gives it
            meaning, semantic decides where it applies. Not every token needs all three: Fire
            Orange resolves through the full chain, radius is set once at 0, with one flagged
            exception.
          </p>
          <p className="mt-[1em]">
            Developers import the formats below; designers read the same values as Figma
            variables. Always the same number, in three places.
          </p>
          <div
            className="grid grid-cols-2"
            style={{ gap: "calc(10*var(--u))", marginTop: "1.6em", maxWidth: "26em" }}
          >
            {FORMATS.map((f) => (
              <FormatDownload key={f.file} {...f} />
            ))}
          </div>
        </>
      }
    >
      <div className="flex h-full w-full flex-col justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "calc(14*var(--u))" }}>
          <TokenChainPanel />
          <RadiusTokenPanel />
        </div>
      </div>
    </SectionShell>
  );
}
