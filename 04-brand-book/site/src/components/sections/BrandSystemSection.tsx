import SectionShell from "@/components/SectionShell";
import ScrambleHover from "@/components/ScrambleHover";

const REPO_URL = "https://github.com/lmtts/tte-brand-system";

const LAYERS = [
  { name: "Brand", role: "Identity: colors, fonts, logo, voice." },
  { name: "Design", role: "Interface: buttons, cards, panels." },
  { name: "Dev", role: "Code: the same pieces, ready to run." },
  { name: "Agent", role: "Generation: an AI that writes on-brand." },
];

const ROLES = [
  { who: "Designer", what: "Work in Figma; DESIGN.md has the rules." },
  { who: "Developer", what: "Import the component library and tokens." },
  { who: "Generating content", what: "Ask the Brand Agent: type /tte." },
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

/** A bordered HUD panel — small fire-dot header, rows stacked below. Same shell used by System/Tokens. */
function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border border-paper/15 bg-ink">
      <div
        className="flex items-center border-b border-paper/15"
        style={{ gap: "calc(8*var(--u))", padding: "calc(9*var(--u)) calc(14*var(--u))" }}
      >
        <span aria-hidden className="shrink-0 bg-fire" style={{ width: "6px", height: "6px" }} />
        <span
          className="font-mono font-bold uppercase tracking-[0.06em] text-paper"
          style={{ fontSize: "calc(11*var(--u))" }}
        >
          {title}
        </span>
      </div>
      <div className="flex flex-col">{children}</div>
    </div>
  );
}

function PanelRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="flex items-baseline justify-between gap-[1em] border-b border-paper/10 last:border-b-0"
      style={{ padding: "calc(9*var(--u)) calc(14*var(--u))" }}
    >
      <span
        className="shrink-0 font-mono font-bold uppercase tracking-[0.06em] text-fire"
        style={{ fontSize: "calc(11*var(--u))" }}
      >
        {label}
      </span>
      <span className="text-right font-mono text-muted" style={{ fontSize: "calc(10*var(--u))" }}>
        {value}
      </span>
    </div>
  );
}

/** Section 03 — Brand System. Orients a first-time visitor: what this is, and where to go next. */
export default function BrandSystemSection() {
  return (
    <SectionShell
      id="brand-system"
      kicker="Brand System"
      heading="How this brand system works, and where everything lives."
      body={
        <>
          <p>
            You&rsquo;re looking at a live map of TTE&rsquo;s brand system: identity, interface,
            code, and an AI that generates content, all kept in sync so nothing drifts out of
            date.
          </p>
          <p className="mt-[1em]">
            The actual files live in a repository: a project folder stored on GitHub, a site
            that keeps a full history of every change. That&rsquo;s where you&rsquo;d go to open
            the Figma files, run the code, or read the complete rules.
          </p>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-[1.6em] inline-flex w-fit items-center border border-paper/30 font-mono font-bold uppercase tracking-[0.08em] text-paper transition-colors hover:border-fire hover:text-fire"
            style={{
              gap: "calc(10*var(--u))",
              padding: "calc(12*var(--u)) calc(18*var(--u))",
              fontSize: "calc(12*var(--u))",
            }}
          >
            <ScrambleHover text="Open the repository" />
            <ExternalArrow />
          </a>
        </>
      }
    >
      <div className="flex h-full w-full flex-col justify-center" style={{ gap: "calc(14*var(--u))" }}>
        <Panel title="The four layers">
          {LAYERS.map((l) => (
            <PanelRow key={l.name} label={l.name} value={l.role} />
          ))}
        </Panel>
        <Panel title="Find your role">
          {ROLES.map((r) => (
            <PanelRow key={r.who} label={r.who} value={r.what} />
          ))}
        </Panel>
      </div>
    </SectionShell>
  );
}
