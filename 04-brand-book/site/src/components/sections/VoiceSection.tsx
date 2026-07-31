import SectionShell from "@/components/SectionShell";

type Trait = { are: string; areNot: string };

const TRAITS: Trait[] = [
  { are: "Urgent", areNot: "Panicked or manipulative" },
  { are: "Theologically grounded", areNot: "Preachy or academic" },
  { are: "Gritty and authentic", areNot: "Low-budget or careless" },
  { are: "Dignifying", areNot: "Pitying or patronizing" },
  { are: "Mobilizing", areNot: "Passive or merely informational" },
  { are: "Spirit-centered", areNot: "Human-centered or personality-driven" },
  { are: "Courageous", areNot: "Reckless or flippant" },
];

type Term = { term: string; insteadOf: string };

const MUST_USE: Term[] = [
  { term: "Prayer Partner", insteadOf: "prayer warrior (formal use), supporter" },
  { term: "Mission Partner", insteadOf: "donor, giver, contributor" },
  { term: "Unreached people groups", insteadOf: "lost people, the unsaved" },
  { term: "Spiritual biomes", insteadOf: "mission fields, target areas" },
  { term: "Delegated authority", insteadOf: "prayer power, generic “spiritual warfare”" },
  { term: "The midnight cry", insteadOf: "end-times message, warning" },
];

const NEVER_USE = ["Lost souls", "Third world", "Crusade", "Charity", "Emdashes"];

function DownloadArrow() {
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
      <path d="M12 4v12m0 0 4.5-4.5M12 16l-4.5-4.5" />
      <path d="M4 19h16" />
    </svg>
  );
}

/** The core voice anchor — 7 rows, WE ARE against WE ARE NOT, split by a center rule. */
function TraitsTable() {
  return (
    <div className="flex w-full flex-col border border-paper/15">
      <div className="grid grid-cols-2 border-b border-paper/15">
        <div
          className="border-r border-paper/15 font-mono uppercase tracking-[0.08em] text-fire"
          style={{ padding: "calc(10*var(--u)) calc(14*var(--u))", fontSize: "calc(11*var(--u))" }}
        >
          We Are
        </div>
        <div
          className="font-mono uppercase tracking-[0.08em] text-muted"
          style={{ padding: "calc(10*var(--u)) calc(14*var(--u))", fontSize: "calc(11*var(--u))" }}
        >
          We Are Not
        </div>
      </div>
      <div className="flex flex-col">
        {TRAITS.map((t, i) => (
          <div
            key={t.are}
            className="grid grid-cols-2"
            style={{ borderTop: i === 0 ? undefined : "1px solid color-mix(in srgb, var(--color-paper) 8%, transparent)" }}
          >
            <div
              className="border-r border-paper/15 font-display font-extrabold uppercase leading-tight text-paper"
              style={{ padding: "calc(9*var(--u)) calc(14*var(--u))", fontSize: "calc(14*var(--u))" }}
            >
              {t.are}
            </div>
            <div
              className="font-mono leading-snug text-muted"
              style={{ padding: "calc(9*var(--u)) calc(14*var(--u))", fontSize: "calc(11*var(--u))" }}
            >
              {t.areNot}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Section 08, page 1 — the voice anchor + download. */
function VoiceTraitsPage() {
  return (
    <SectionShell
      id="voice"
      heading={<>The statistic feels impossible. The theology says it&rsquo;s inevitable.</>}
      body={
        <>
          <p>
            TTE channels the Explorer archetype: authentic, free, earthy, unconventional. Voice is
            constant across every channel and every audience. Only tone flexes by context.
          </p>
          <p className="mt-[1em]">
            Seven traits anchor everything we write and film, each one paired with the failure mode
            it guards against.
          </p>
          <a
            href="/downloads/tte-voice-guidelines.md"
            download
            className="mt-[1.6em] inline-flex w-fit items-center border border-paper/30 font-mono font-bold uppercase tracking-[0.08em] text-paper transition-colors hover:border-fire hover:text-fire"
            style={{
              gap: "calc(10*var(--u))",
              padding: "calc(12*var(--u)) calc(18*var(--u))",
              fontSize: "calc(12*var(--u))",
            }}
          >
            <DownloadArrow />
            Download voice guide
          </a>
        </>
      }
    >
      <div className="flex h-full w-full flex-col justify-center">
        <TraitsTable />
      </div>
    </SectionShell>
  );
}

/** Section 08, page 2 — terminology: must-use vs. never-use. */
function VoiceTerminologyPage() {
  return (
    <SectionShell
      id="voice-terminology"
      heading={<>Words carry theology. Choose them with precision.</>}
      body={
        <p>
          Terminology isn&rsquo;t style, it&rsquo;s doctrine made visible. These are the terms every
          piece of TTE content is built on, and the ones that never make it to print.
        </p>
      }
    >
      <div className="flex h-full w-full flex-col justify-center" style={{ gap: "calc(16*var(--u))" }}>
        <div className="border border-paper/15">
          <div
            className="flex items-baseline border-b border-paper/15"
            style={{ gap: "calc(6*var(--u))", padding: "calc(10*var(--u)) calc(14*var(--u))" }}
          >
            <span className="shrink-0 text-fire" style={{ fontSize: "calc(11*var(--u))" }}>
              &#9679;
            </span>
            <span
              className="font-mono uppercase leading-none tracking-[0.06em] text-paper"
              style={{ fontSize: "calc(11*var(--u))" }}
            >
              Must-Use Terms
            </span>
          </div>
          {MUST_USE.map((t, i) => (
            <div
              key={t.term}
              className="grid grid-cols-[1fr_1.4fr]"
              style={{ borderTop: i === 0 ? undefined : "1px solid color-mix(in srgb, var(--color-paper) 8%, transparent)" }}
            >
              <div
                className="font-display font-extrabold uppercase leading-tight text-paper"
                style={{ padding: "calc(7*var(--u)) calc(14*var(--u))", fontSize: "calc(13*var(--u))" }}
              >
                {t.term}
              </div>
              <div
                className="font-mono leading-snug text-muted"
                style={{ padding: "calc(7*var(--u)) calc(14*var(--u))", fontSize: "calc(10*var(--u))" }}
              >
                Not: {t.insteadOf}
              </div>
            </div>
          ))}
        </div>

        <div className="border border-paper/15">
          <div
            className="flex items-baseline border-b border-paper/15"
            style={{ gap: "calc(6*var(--u))", padding: "calc(10*var(--u)) calc(14*var(--u))" }}
          >
            <span className="shrink-0 text-fire" style={{ fontSize: "calc(11*var(--u))" }}>
              &#9679;
            </span>
            <span
              className="font-mono uppercase leading-none tracking-[0.06em] text-paper"
              style={{ fontSize: "calc(11*var(--u))" }}
            >
              Never Use
            </span>
          </div>
          <div
            className="flex flex-wrap font-mono uppercase text-muted"
            style={{ padding: "calc(12*var(--u)) calc(14*var(--u))", gap: "calc(10*var(--u)) calc(20*var(--u))", fontSize: "calc(11*var(--u))" }}
          >
            {NEVER_USE.map((term) => (
              <span key={term} className="line-through decoration-fire/70">
                {term}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

/** Section 08 — Voice. Two pages: the trait anchor, then terminology. */
export default function VoiceSection() {
  return (
    <>
      <VoiceTraitsPage />
      <VoiceTerminologyPage />
    </>
  );
}
