import SectionShell from "@/components/SectionShell";

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
      {label}
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

/** The layer chain, rendered like a resolving code trace — raw value to applied meaning. */
function TokenChainPanel() {
  return (
    <div className="border border-paper/15 bg-ink">
      <div
        className="flex items-center border-b border-paper/15"
        style={{ gap: "calc(8*var(--u))", padding: "calc(10*var(--u)) calc(14*var(--u))" }}
      >
        <span aria-hidden className="shrink-0 bg-fire" style={{ width: "6px", height: "6px" }} />
        <span
          className="font-mono uppercase leading-none tracking-[0.06em] text-paper"
          style={{ fontSize: "calc(11*var(--u))" }}
        >
          Token chain · Fire Orange
        </span>
        <span aria-hidden className="ml-auto shrink-0 bg-fire" style={{ width: "calc(16*var(--u))", height: "calc(16*var(--u))" }} />
      </div>
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
              {step.key}: <span className="text-muted">{step.value}</span>
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

/** Section 10 — Tokens. */
export default function TokensSection() {
  return (
    <SectionShell
      id="tokens"
      heading={<>Primitives become brand. Brand becomes semantic. Nothing floats free.</>}
      body={
        <>
          <p>
            Every value lives in three layers. A raw primitive means nothing on its own; brand
            assigns it meaning; semantic decides where and how it&rsquo;s applied. Components only
            ever consume semantic tokens, never the raw values beneath them.
          </p>
          <p className="mt-[1em]">
            Three faces, one system: canonical tokens, the dev project, and Figma stay in sync. A
            change to any one propagates to all three in the same action.
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
        <TokenChainPanel />
      </div>
    </SectionShell>
  );
}
