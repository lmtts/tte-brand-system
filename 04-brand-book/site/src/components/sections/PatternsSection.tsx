import SectionShell from "@/components/SectionShell";

type Pattern = {
  name: string;
  src: string;
  file: string;
};

const PATTERNS: Pattern[] = [
  { name: "Pattern / Simple", src: "/assets/patterns/pattern-simple.svg", file: "pattern-simple.svg" },
  { name: "Pattern / Tile", src: "/assets/patterns/pattern-tile.svg", file: "pattern-tile.svg" },
];

const TOKEN = "semantic.opacity.topographic-overlay";

/** One official pattern asset, shown at full strength (native color, 100% opacity) so the linework
 * itself reads clearly — the applied token opacity is documented in the body copy, not demonstrated here. */
function PatternCard({ name, src, file }: Pattern) {
  return (
    <div className="flex h-full w-full flex-col border border-paper/15">
      <div
        className="flex items-center border-b border-paper/15"
        style={{ gap: "calc(8*var(--u))", padding: "calc(12*var(--u)) calc(14*var(--u))" }}
      >
        <span className="shrink-0 bg-fire" style={{ width: "6px", height: "6px" }} />
        <span
          className="font-mono uppercase leading-none tracking-[0.08em] text-muted"
          style={{ fontSize: "calc(11*var(--u))" }}
        >
          {name}
        </span>
      </div>
      <div className="relative flex-1 overflow-hidden bg-ink" style={{ minHeight: "calc(220*var(--u))" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
        <div
          className="relative inline-block bg-ink font-mono text-paper"
          style={{ margin: "calc(14*var(--u))", padding: "calc(10*var(--u)) calc(12*var(--u))" }}
        >
          <div className="font-bold" style={{ fontSize: "calc(16*var(--u))" }}>
            Fire Orange
          </div>
          <div className="opacity-70" style={{ fontSize: "calc(10*var(--u))", marginTop: "calc(4*var(--u))" }}>
            {file} · shown at 100% for clarity
          </div>
        </div>
      </div>
    </div>
  );
}

function PatternsGrid() {
  return (
    <div className="grid h-full w-full grid-cols-1 sm:grid-cols-2" style={{ gap: "calc(24*var(--u))" }}>
      {PATTERNS.map((p) => (
        <PatternCard key={p.name} {...p} />
      ))}
    </div>
  );
}

/** Section 06 — Patterns. */
export default function PatternsSection() {
  return (
    <SectionShell
      id="patterns"
      heading="The contour is the field. Fire Orange, always present."
      body={
        <>
          <p>
            Two official assets carry the topographic overlay: a simple contour and a denser tile,
            both native Fire Orange. Shown here at full strength so the linework itself reads
            clearly.
          </p>
          <p className="mt-[1em]">
            In application, the token sits at 12% opacity: <span className="text-fire">{TOKEN}</span>.
            It stays behind content, never in front of it, retinted or softened as each context
            needs.
          </p>
        </>
      }
    >
      <PatternsGrid />
    </SectionShell>
  );
}
