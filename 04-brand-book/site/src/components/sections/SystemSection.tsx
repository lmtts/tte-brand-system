import SectionShell from "@/components/SectionShell";

const CONTROL_SIZES = [
  { token: "control-sm", height: "36px", use: "Dense · HUD · operate" },
  { token: "control-default", height: "44px", use: "System default" },
  { token: "control-lg", height: "56px", use: "Hero CTAs" },
];

type ButtonSpec = {
  intent: "Mobilize" | "Operate";
  typeface: string;
  label: string;
  variant: "primary" | "secondary";
};

const BUTTONS: ButtonSpec[] = [
  { intent: "Mobilize", typeface: "Mona Sans", label: "Pray", variant: "primary" },
  { intent: "Mobilize", typeface: "Mona Sans", label: "Give", variant: "secondary" },
  { intent: "Operate", typeface: "Space Mono", label: "Filter", variant: "primary" },
  { intent: "Operate", typeface: "Space Mono", label: "Export", variant: "secondary" },
];

/** One demonstrated button — the real height/type/radius rules, not a mockup. */
function ButtonDemo({ intent, typeface, label, variant }: ButtonSpec) {
  const fontClass = typeface === "Mona Sans" ? "font-display font-bold" : "font-mono font-bold";
  return (
    <div className="flex flex-col border border-paper/15">
      <div
        className="flex items-baseline justify-between border-b border-paper/15 font-mono uppercase tracking-[0.08em] text-muted"
        style={{ padding: "calc(9*var(--u)) calc(12*var(--u))", fontSize: "calc(10*var(--u))" }}
      >
        <span>{intent}</span>
        <span className="text-fire">{typeface}</span>
      </div>
      <div className="flex items-center justify-center" style={{ padding: "calc(20*var(--u))" }}>
        <span
          className={`inline-flex items-center justify-center ${fontClass} uppercase tracking-[0.06em] ${
            variant === "primary" ? "bg-fire text-paper" : "border border-paper/40 text-paper"
          }`}
          style={{
            height: "calc(44*var(--u))",
            padding: "0 calc(24*var(--u))",
            fontSize: "calc(13*var(--u))",
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

function ButtonGrid() {
  return (
    <div className="flex h-full w-full flex-col justify-center" style={{ gap: "calc(16*var(--u))" }}>
      <div className="grid grid-cols-2" style={{ gap: "calc(16*var(--u))" }}>
        {BUTTONS.map((b) => (
          <ButtonDemo key={`${b.intent}-${b.variant}`} {...b} />
        ))}
      </div>
    </div>
  );
}

/** Section 09, page 1 — the flagship button rule + control size scale. */
function SystemButtonsPage() {
  return (
    <SectionShell
      id="system"
      heading={<>One rule decides every button: who it&rsquo;s for.</>}
      body={
        <>
          <p>
            The interface runs on shadcn/ui, kept neutral by design so the brand disappears into it
            rather than fighting it. Radius, color, and type flow from the token layer, so every
            component is on-brand by construction.
          </p>
          <p className="mt-[1em]">
            <span className="text-fire">Intent</span> fixes the typeface by role.{" "}
            <span className="text-fire">Variant</span> fixes the visual treatment. Mona Sans
            mobilizes: Pray, Give, Join. Space Mono operates: Filter, Export, View data. The two
            never cross.
          </p>
          <dl className="flex flex-col" style={{ gap: "0.5em", marginTop: "1.4em" }}>
            {CONTROL_SIZES.map((s) => (
              <div key={s.token} className="flex" style={{ gap: "1em" }}>
                <dt className="shrink-0 text-fire" style={{ width: "9em" }}>
                  {s.height}
                </dt>
                <dd className="opacity-80">{s.use}</dd>
              </div>
            ))}
          </dl>
        </>
      }
    >
      <ButtonGrid />
    </SectionShell>
  );
}

type Organism = { name: string; description: string };

const ORGANISMS: Organism[] = [
  {
    name: "HUD Panel",
    description: "Tactical mission-intel readout. Fire live-tick, Space Mono LABEL : VALUE rows.",
  },
  {
    name: "People Group Card",
    description:
      "The unreached-people dossier. Media falls back to the topographic texture, never a grey box.",
  },
  {
    name: "Mission Stat",
    description: "The impossible number, set in Mona Sans, fronted by a Fire Orange tick.",
  },
  {
    name: "Biome Badge",
    description: "Biome as a HUD tag. Biome color stays a secondary accent, never rivals Fire Orange.",
  },
  {
    name: "Topographic Background",
    description: "The contour texture at 12% opacity, sitting behind any content.",
  },
];

function OrganismCard({ name, description }: Organism) {
  return (
    <div className="flex flex-col border border-paper/15">
      <div
        className="flex items-baseline border-b border-paper/15"
        style={{ gap: "calc(6*var(--u))", padding: "calc(9*var(--u)) calc(12*var(--u))" }}
      >
        <span className="shrink-0 bg-fire" style={{ width: "6px", height: "6px" }} />
        <span
          className="font-mono uppercase leading-none tracking-[0.06em] text-paper"
          style={{ fontSize: "calc(11*var(--u))" }}
        >
          {name}
        </span>
      </div>
      <p
        className="font-mono leading-snug text-muted"
        style={{ padding: "calc(12*var(--u))", fontSize: "calc(11*var(--u))" }}
      >
        {description}
      </p>
    </div>
  );
}

/** Section 09, page 2 — the five TTE-only organisms. */
function SystemOrganismsPage() {
  return (
    <SectionShell
      id="system-organisms"
      heading={<>Five components no kit ships.</>}
      body={
        <p>
          Base components come from the kit: Button, Input, Select, Card, Dialog, Tabs, and the
          rest, all bound to tokens. These five are the signature layer, built for TTE alone.
        </p>
      }
    >
      <div className="flex h-full w-full flex-col justify-center" style={{ gap: "calc(14*var(--u))" }}>
        {ORGANISMS.map((o) => (
          <OrganismCard key={o.name} {...o} />
        ))}
      </div>
    </SectionShell>
  );
}

/** Section 09 — System. Two pages: the button flagship rule, then the TTE organisms. */
export default function SystemSection() {
  return (
    <>
      <SystemButtonsPage />
      <SystemOrganismsPage />
    </>
  );
}
