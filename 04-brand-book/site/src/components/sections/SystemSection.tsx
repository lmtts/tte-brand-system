import SectionShell from "@/components/SectionShell";
import DecodeText from "@/components/DecodeText";
import CountUp from "@/components/CountUp";

const CONTROL_SIZES = [
  { height: "36px", use: "Dense · HUD · operate" },
  { height: "44px", use: "System default" },
  { height: "56px", use: "Hero CTAs" },
];

type Variant = "default" | "outline" | "secondary" | "ghost" | "link" | "inverted";

// Every treatment lives here verbatim from 03-dev-system/tte-ui's button.tsx
// (translated to this site's fire/paper/ink tokens) — hover states included,
// so hovering these in the browser is the real interaction, not a mockup.
const VARIANT_CLASS: Record<Variant, string> = {
  default: "bg-fire text-paper hover:bg-fire/90",
  outline: "border border-paper/30 text-paper hover:border-fire hover:text-fire",
  secondary: "bg-paper/10 text-paper hover:bg-paper/8",
  ghost: "bg-transparent text-paper hover:bg-paper/12",
  link: "bg-transparent text-fire underline-offset-4 hover:underline",
  inverted: "bg-paper text-ink hover:bg-paper/90",
};

type ButtonDef = { variant: Variant; label: string };

const MOBILIZE_BUTTONS: ButtonDef[] = [
  { variant: "default", label: "Pray" },
  { variant: "outline", label: "Give" },
  { variant: "secondary", label: "Join" },
  { variant: "ghost", label: "Partner" },
  { variant: "link", label: "Learn more" },
  { variant: "inverted", label: "Pray now" },
];

const OPERATE_BUTTONS: ButtonDef[] = [
  { variant: "default", label: "Filter" },
  { variant: "outline", label: "Export" },
  { variant: "secondary", label: "Sort" },
  { variant: "ghost", label: "Adjust" },
  { variant: "link", label: "View log" },
  { variant: "inverted", label: "View data" },
];

function ButtonSwatch({ variant, label, fontClass }: ButtonDef & { fontClass: string }) {
  return (
    <div className="flex flex-col items-center" style={{ gap: "calc(8*var(--u))" }}>
      <span
        className={`inline-flex items-center justify-center whitespace-nowrap uppercase transition-all ${fontClass} ${VARIANT_CLASS[variant]}`}
        style={{ height: "calc(38*var(--u))", padding: "0 calc(16*var(--u))", fontSize: "calc(11*var(--u))" }}
      >
        {label}
      </span>
      <span className="font-mono uppercase tracking-[0.06em] text-muted" style={{ fontSize: "calc(9*var(--u))" }}>
        {variant}
      </span>
    </div>
  );
}

function ButtonGroupPanel({
  intent,
  typeface,
  fontClass,
  buttons,
}: {
  intent: string;
  typeface: string;
  fontClass: string;
  buttons: ButtonDef[];
}) {
  return (
    <div className="border border-paper/15">
      <div
        className="flex items-baseline justify-between border-b border-paper/15"
        style={{ padding: "calc(8*var(--u)) calc(12*var(--u))" }}
      >
        <span className="font-mono uppercase tracking-[0.08em] text-fire" style={{ fontSize: "calc(10*var(--u))" }}>
          {intent}
        </span>
        <span className="font-mono uppercase tracking-[0.08em] text-muted" style={{ fontSize: "calc(10*var(--u))" }}>
          {typeface}
        </span>
      </div>
      <div
        className="grid grid-cols-3"
        style={{ padding: "calc(14*var(--u))", gap: "calc(12*var(--u)) calc(8*var(--u))" }}
      >
        {buttons.map((b) => (
          <ButtonSwatch key={b.variant} {...b} fontClass={fontClass} />
        ))}
      </div>
    </div>
  );
}

/** Section 09, page 1 — every button variant, both intents, real hover. */
function SystemButtonsPage() {
  return (
    <SectionShell
      id="system"
      kicker="System"
      heading="One rule decides every button: exactly who it's for."
      body={
        <>
          <p>
            The interface runs on shadcn/ui, kept neutral by design so the brand disappears into it
            rather than fighting it. Radius, color, and type flow from the token layer, so every
            component is on-brand from the start.
          </p>
          <p className="mt-[1em]">
            <span className="text-fire">Intent</span> fixes the typeface by role.{" "}
            <span className="text-fire">Variant</span> fixes the visual treatment. Mona Sans
            mobilizes: Pray, Give, Join. Space Mono operates: Filter, Export, View data. Hover to
            try the motion.
          </p>
          <dl className="flex flex-col" style={{ gap: "0.5em", marginTop: "1.4em" }}>
            {CONTROL_SIZES.map((s) => (
              <div key={s.height} className="flex" style={{ gap: "1em" }}>
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
      <div className="flex h-full w-full flex-col justify-center" style={{ gap: "calc(16*var(--u))" }}>
        <ButtonGroupPanel
          intent="Mobilize"
          typeface="Mona Sans"
          fontClass="font-display font-extrabold tracking-[0.04em]"
          buttons={MOBILIZE_BUTTONS}
        />
        <ButtonGroupPanel
          intent="Operate"
          typeface="Space Mono"
          fontClass="font-mono font-bold tracking-[0.08em]"
          buttons={OPERATE_BUTTONS}
        />
      </div>
    </SectionShell>
  );
}

function HudDemoRow({ label, value, accent }: { label: string; value: React.ReactNode; accent?: boolean }) {
  return (
    <div
      className="flex items-center justify-between border-b border-paper/10 font-mono uppercase tracking-[0.06em] last:border-b-0"
      style={{ padding: "calc(8*var(--u)) calc(14*var(--u))", fontSize: "calc(11*var(--u))" }}
    >
      <span className="text-muted">{label}</span>
      <span className={accent ? "text-fire" : "text-paper"}>{value}</span>
    </div>
  );
}

/** HUD Panel, live — a real tactical readout, values decode in on scroll. */
function HudPanelDemo() {
  return (
    <div className="border border-paper/15 bg-ink">
      <div aria-hidden className="w-full bg-fire" style={{ height: "2px" }} />
      <div
        className="flex items-center border-b border-paper/15"
        style={{ gap: "calc(8*var(--u))", padding: "calc(9*var(--u)) calc(14*var(--u))" }}
      >
        <span aria-hidden className="shrink-0 bg-fire" style={{ width: "6px", height: "6px" }} />
        <span
          className="font-mono font-bold uppercase tracking-[0.06em] text-paper"
          style={{ fontSize: "calc(11*var(--u))" }}
        >
          Target: Tajik
        </span>
      </div>
      <div className="flex flex-col">
        <HudDemoRow label="Status" value={<DecodeText text="Unreached" />} />
        <HudDemoRow label="Gospel access" value={<DecodeText text="0.1%" />} accent />
        <HudDemoRow label="Coords" value={<DecodeText text="33°N, 65°E" />} />
      </div>
    </div>
  );
}

/** Mission Stat, live — the impossible number, rolling up as it enters view. */
function MissionStatDemo() {
  return (
    <div className="flex flex-col border border-paper/15" style={{ padding: "calc(18*var(--u))" }}>
      <div className="flex items-stretch" style={{ gap: "calc(10*var(--u))" }}>
        <span aria-hidden className="shrink-0 self-stretch bg-fire" style={{ width: "3px" }} />
        <span
          className="font-display font-black uppercase leading-[0.9] text-paper"
          style={{ fontSize: "calc(52*var(--u))" }}
        >
          <CountUp to={3.6} decimals={1} suffix="B" />
        </span>
      </div>
      <span
        className="font-mono uppercase tracking-[0.06em] text-muted"
        style={{ fontSize: "calc(11*var(--u))", marginTop: "calc(10*var(--u))" }}
      >
        People still unreached
      </span>
    </div>
  );
}

// Hex literals, not `bg-biome-${key}` — Tailwind v4 only keeps a @theme
// custom property in the compiled :root when a utility using it appears as
// a literal class somewhere in scanned source; a template-built class name
// never does, so 3 of these 4 vars were silently dropped from the CSS.
const BIOMES = [
  { key: "desert", name: "Desert", hex: "#B86C55" },
  { key: "arctic", name: "Arctic", hex: "#7BA7BC" },
  { key: "city", name: "City", hex: "#4A4A52" },
  { key: "forest", name: "Forest", hex: "#2D5A3D" },
] as const;

/** Biome Badge, live — the full set of four tags, biome color as a small swatch only. */
function BiomeBadgeDemo() {
  return (
    <div className="flex flex-col border border-paper/15" style={{ padding: "calc(18*var(--u))" }}>
      <div className="flex flex-wrap" style={{ gap: "calc(10*var(--u))" }}>
        {BIOMES.map((b) => (
          <span
            key={b.key}
            className="inline-flex items-center border border-paper/15 font-mono font-bold uppercase text-paper"
            style={{ gap: "calc(6*var(--u))", padding: "calc(6*var(--u)) calc(10*var(--u))", fontSize: "calc(10*var(--u))" }}
          >
            <span aria-hidden className="shrink-0" style={{ width: "8px", height: "8px", background: b.hex }} />
            {b.name}
          </span>
        ))}
      </div>
      <span
        className="font-mono uppercase tracking-[0.06em] text-muted"
        style={{ fontSize: "calc(10*var(--u))", marginTop: "calc(14*var(--u))" }}
      >
        Secondary accent only, never rivals Fire Orange
      </span>
    </div>
  );
}

/** Topographic Background, live — the contour texture at the token's real 12% opacity. */
function TopographicBackgroundDemo() {
  return (
    <div className="relative overflow-hidden border border-paper/15 bg-ink" style={{ height: "calc(96*var(--u))" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/patterns/pattern-tile.svg"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
        style={{ opacity: 0.12 }}
      />
      <div className="relative flex h-full items-center" style={{ padding: "calc(16*var(--u))" }}>
        <span
          className="font-mono uppercase tracking-[0.06em] text-paper"
          style={{ fontSize: "calc(10*var(--u))" }}
        >
          12% opacity, sits behind any content
        </span>
      </div>
    </div>
  );
}

/** Section 09, page 2 — HUD Panel, Mission Stat, Biome Badge, Topographic Background, all live. */
function SystemOrganismsPage() {
  return (
    <SectionShell
      id="system-organisms"
      kicker="System"
      dividerAbove="page"
      heading="Four components no kit ships."
      body={
        <p>
          Base components come from the kit: Button, Input, Select, Card, Dialog, Tabs, and the
          rest, all bound to tokens. These are the signature layer, built for TTE alone, shown
          live below.
        </p>
      }
    >
      <div className="flex h-full w-full flex-col justify-center" style={{ gap: "calc(14*var(--u))" }}>
        <HudPanelDemo />
        <div className="grid grid-cols-2" style={{ gap: "calc(14*var(--u))" }}>
          <MissionStatDemo />
          <BiomeBadgeDemo />
        </div>
        <TopographicBackgroundDemo />
      </div>
    </SectionShell>
  );
}

function DemoButton({
  intent,
  variant,
  children,
}: {
  intent: "mobilize" | "operate";
  variant: "default" | "outline";
  children: React.ReactNode;
}) {
  const fontClass =
    intent === "mobilize" ? "font-display font-extrabold tracking-[0.04em]" : "font-mono font-bold tracking-[0.08em]";
  return (
    <span
      className={`inline-flex items-center justify-center whitespace-nowrap uppercase transition-all ${fontClass} ${VARIANT_CLASS[variant]}`}
      style={{ gap: "calc(6*var(--u))", height: "calc(36*var(--u))", padding: "0 calc(16*var(--u))", fontSize: "calc(11*var(--u))" }}
    >
      {children}
    </span>
  );
}

type PeopleGroup = {
  name: string;
  region: string;
  photo: string;
  biome: (typeof BIOMES)[number];
  coords: string;
  pop: number;
  gospelAccess: number;
};

const PEOPLE_GROUPS: PeopleGroup[] = [
  {
    name: "Turkish",
    region: "Anatolia",
    photo: "/assets/system/people-turkish.webp",
    biome: BIOMES[2], // City
    coords: "41°N, 29°E",
    pop: 53900000,
    gospelAccess: 0.2,
  },
  {
    name: "Brahmin",
    region: "South Asia",
    photo: "/assets/system/people-brahmin.webp",
    biome: BIOMES[2], // City
    coords: "25°N, 83°E",
    pop: 92000000,
    gospelAccess: 0.4,
  },
];

/** People Group Card, live — the unreached-people dossier, the richest organism, on its own page. */
function PeopleGroupCardDemo({ group }: { group: PeopleGroup }) {
  return (
    <div className="flex w-full flex-col border border-paper/15">
      <div className="relative overflow-hidden bg-ink" style={{ aspectRatio: "4/3" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={group.photo} alt={`${group.name} people group, ${group.region}`} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[rgba(40,39,42,0.15)]" />
        <div className="absolute inset-0 flex flex-col justify-between" style={{ padding: "calc(16*var(--u))" }}>
          <div className="flex items-start justify-between">
            <span
              className="border border-paper/30 font-mono font-bold uppercase text-paper"
              style={{ padding: "calc(4*var(--u)) calc(8*var(--u))", fontSize: "calc(9*var(--u))" }}
            >
              Unreached
            </span>
            <span
              className="inline-flex items-center border border-paper/30 font-mono font-bold uppercase text-paper"
              style={{ gap: "calc(5*var(--u))", padding: "calc(4*var(--u)) calc(8*var(--u))", fontSize: "calc(9*var(--u))" }}
            >
              <span aria-hidden className="shrink-0" style={{ width: "7px", height: "7px", background: group.biome.hex }} />
              {group.biome.name}
            </span>
          </div>
          <span className="font-mono uppercase tracking-[0.06em] text-paper/80" style={{ fontSize: "calc(9*var(--u))" }}>
            {group.coords}
          </span>
        </div>
      </div>

      <div className="flex flex-col" style={{ gap: "calc(16*var(--u))", padding: "calc(18*var(--u))" }}>
        <div className="flex flex-col" style={{ gap: "calc(4*var(--u))" }}>
          <h3
            className="font-display font-extrabold uppercase leading-none tracking-[0.01em] text-paper"
            style={{ fontSize: "calc(24*var(--u))" }}
          >
            {group.name}
          </h3>
          <span className="font-mono uppercase tracking-[0.06em] text-muted" style={{ fontSize: "calc(10*var(--u))" }}>
            {group.region}
          </span>
        </div>

        <div
          className="flex flex-col border-t border-paper/10"
          style={{ marginLeft: "calc(-14*var(--u))", marginRight: "calc(-14*var(--u))" }}
        >
          <HudDemoRow label="Est. pop" value={<CountUp to={group.pop} />} />
          <HudDemoRow label="Gospel access" value={<CountUp to={group.gospelAccess} decimals={1} suffix="%" />} accent />
        </div>

        <div className="flex flex-wrap" style={{ gap: "calc(10*var(--u))" }}>
          <DemoButton intent="mobilize" variant="default">
            Pray now
          </DemoButton>
          <DemoButton intent="operate" variant="outline">
            View data
          </DemoButton>
        </div>
      </div>
    </div>
  );
}

/** Section 09, page 3 — the People Group Card, two examples side by side. */
function SystemPeopleGroupPage() {
  return (
    <SectionShell
      id="system-people-group"
      kicker="System"
      dividerAbove="page"
      heading="The dossier that turns a cold statistic into a people."
      body={
        <p>
          The People Group Card composes every other primitive: photography or the topographic
          fallback, the biome badge, a live HUD data strip, and the mobilize / operate action
          pair. Dignity over pity, never a grey box.
        </p>
      }
    >
      <div className="flex h-full w-full items-center justify-center">
        <div className="grid w-full grid-cols-1 sm:grid-cols-2" style={{ gap: "calc(20*var(--u))", maxWidth: "calc(640*var(--u))" }}>
          {PEOPLE_GROUPS.map((g) => (
            <PeopleGroupCardDemo key={g.name} group={g} />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

/** Section 09 — System. Three pages: the button rule, the compact organisms, then the People Group Card. */
export default function SystemSection() {
  return (
    <>
      <SystemButtonsPage />
      <SystemOrganismsPage />
      <SystemPeopleGroupPage />
    </>
  );
}
