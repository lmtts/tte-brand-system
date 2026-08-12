"use client";

import { useState } from "react";
import { Compass, Target, MapPin, Radar, Mountain, Satellite } from "lucide-react";
import SectionShell, { TextBlock, DESKTOP_TEXT_BLOCK_STYLE, DESKTOP_TEXT_COL_STYLE } from "@/components/SectionShell";
import DecodeText from "@/components/DecodeText";
import CountUp from "@/components/CountUp";
import ScrambleHover from "@/components/ScrambleHover";
import { NumberedList } from "@/components/BrandList";

// "system" and "system-controls" share this write-up — see PinnedTextOverlay below.
const SYSTEM_KICKER = "Design System";
const SYSTEM_HEADING = "Design Kit and Buttons";
const SYSTEM_BODY = (
  <>
    <p>
      A design system is the shared library of interface pieces (buttons, cards, panels) from
      which every screen is built.
    </p>
    <p className="mt-[1em]">
      The TTE design system runs on shadcn/ui, a popular open-source kit for React, which is left
      visually plain so that the brand identity sits on top of it, not fighting against it. Every
      color, radius, and font flows from the token layer.
    </p>
    <p className="mt-[1em]">
      The design system has motion, too. Text scramble and typewriter effects are presented as
      part of the interaction to provide mission intel visuals, a HUD aesthetic, and an authentic
      experience to users.
    </p>
  </>
);

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
      <button
        type="button"
        className={`inline-flex items-center justify-center whitespace-nowrap uppercase transition-all ${fontClass} ${VARIANT_CLASS[variant]}`}
        style={{ height: "calc(38*var(--u))", padding: "0 calc(16*var(--u))", fontSize: "calc(11*var(--u))" }}
      >
        <ScrambleHover text={label} />
      </button>
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
    <SectionShell id="system" kicker={SYSTEM_KICKER} heading={SYSTEM_HEADING} body={SYSTEM_BODY}>
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

/** A bordered field card — HUD label above, the live control below. Same shell language as the other organisms on this page. */
function ControlCard({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col border border-paper/15" style={{ padding: "calc(16*var(--u))", gap: "calc(10*var(--u))" }}>
      <span className="font-mono uppercase tracking-[0.08em] text-muted" style={{ fontSize: "calc(10*var(--u))" }}>
        {label}
      </span>
      {children}
    </div>
  );
}

/** Input, live — real focus state, 0 radius, matches the Button/Select control height. */
function InputDemo() {
  return (
    <input
      type="text"
      placeholder="Search unreached people groups"
      className="w-full border border-paper/30 bg-transparent font-mono text-paper outline-none transition-colors placeholder:text-muted focus:border-fire"
      style={{ height: "calc(38*var(--u))", padding: "0 calc(12*var(--u))", fontSize: "calc(11*var(--u))" }}
    />
  );
}

/** Select, live — native <select> so it's a real, keyboard-usable control, styled to match Input. */
function SelectDemo() {
  return (
    <select
      defaultValue={BIOMES[0].key}
      className="w-full border border-paper/30 bg-ink font-mono uppercase text-paper outline-none transition-colors focus:border-fire"
      style={{ height: "calc(38*var(--u))", padding: "0 calc(12*var(--u))", fontSize: "calc(11*var(--u))" }}
    >
      {BIOMES.map((b) => (
        <option key={b.key} value={b.key}>
          {b.name}
        </option>
      ))}
    </select>
  );
}

/** Checkbox, live — 0 radius square with a fire fill when checked (the one shadcn/ui default TTE keeps unrounded). */
function CheckboxItem({ label, checked }: { label: string; checked?: boolean }) {
  return (
    <span className="inline-flex items-center" style={{ gap: "calc(8*var(--u))" }}>
      <span
        aria-hidden
        className={`flex shrink-0 items-center justify-center border ${checked ? "border-fire bg-fire" : "border-paper/40"}`}
        style={{ width: "calc(16*var(--u))", height: "calc(16*var(--u))" }}
      >
        {checked && (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: "calc(11*var(--u))", height: "calc(11*var(--u))" }}
          >
            <path d="M5 12l5 5L19 8" />
          </svg>
        )}
      </span>
      <span className="font-mono uppercase tracking-[0.06em] text-paper" style={{ fontSize: "calc(11*var(--u))" }}>
        {label}
      </span>
    </span>
  );
}

/** Radio, live — the one control in the kit that keeps its native circular shape by design. */
function RadioItem({ label, checked }: { label: string; checked?: boolean }) {
  return (
    <span className="inline-flex items-center" style={{ gap: "calc(8*var(--u))" }}>
      <span
        aria-hidden
        className={`flex shrink-0 items-center justify-center rounded-full border ${checked ? "border-fire" : "border-paper/40"}`}
        style={{ width: "calc(16*var(--u))", height: "calc(16*var(--u))" }}
      >
        {checked && (
          <span className="shrink-0 rounded-full bg-fire" style={{ width: "calc(8*var(--u))", height: "calc(8*var(--u))" }} />
        )}
      </span>
      <span className="font-mono uppercase tracking-[0.06em] text-paper" style={{ fontSize: "calc(11*var(--u))" }}>
        {label}
      </span>
    </span>
  );
}

type BadgeTone = "default" | "outline" | "secondary";

const BADGE_CLASS: Record<BadgeTone, string> = {
  default: "bg-fire text-paper",
  outline: "border border-paper/30 text-paper",
  secondary: "bg-paper/10 text-muted",
};

/** Badge, live — the three tones the real component ships: fire fill, outline, quiet fill. */
function BadgeDemo({ tone, children }: { tone: BadgeTone; children: React.ReactNode }) {
  return (
    <span
      className={`inline-flex items-center font-mono font-bold uppercase ${BADGE_CLASS[tone]}`}
      style={{ padding: "calc(4*var(--u)) calc(9*var(--u))", fontSize: "calc(9*var(--u))" }}
    >
      {children}
    </span>
  );
}

/** Dialog, live — clicking it opens a real modal, same overlay treatment as the imagery lightbox. */
function DialogDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex w-fit items-center justify-center border border-paper/30 font-mono font-bold uppercase tracking-[0.08em] text-paper transition-colors hover:border-fire hover:text-fire"
        style={{ height: "calc(38*var(--u))", padding: "0 calc(16*var(--u))", fontSize: "calc(11*var(--u))" }}
      >
        <ScrambleHover text="View briefing" />
      </button>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mission briefing"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 backdrop-blur-sm"
          style={{ padding: "calc(24*var(--u))" }}
        >
          <div onClick={(e) => e.stopPropagation()} className="w-full border border-paper/20 bg-ink" style={{ maxWidth: "calc(340*var(--u))" }}>
            <div aria-hidden className="w-full bg-fire" style={{ height: "2px" }} />
            <div style={{ padding: "calc(20*var(--u))" }}>
              <h3
                className="font-display font-extrabold uppercase leading-none text-paper"
                style={{ fontSize: "calc(16*var(--u))" }}
              >
                Mission Briefing
              </h3>
              <p
                className="font-mono text-muted"
                style={{ fontSize: "calc(11*var(--u))", marginTop: "calc(10*var(--u))", lineHeight: 1.4 }}
              >
                A dialog interrupts the flow to surface one focused decision — mission intel, a
                confirmation, a single next step.
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center border border-paper/30 font-mono font-bold uppercase tracking-[0.08em] text-paper transition-colors hover:border-fire hover:text-fire"
                style={{
                  marginTop: "calc(16*var(--u))",
                  height: "calc(32*var(--u))",
                  padding: "0 calc(14*var(--u))",
                  fontSize: "calc(10*var(--u))",
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Pulled straight from 03-dev-system/tte-ui's own icon set (App.tsx) — the icons
// the real system actually ships, not invented placeholders.
const ICONS = [
  { Icon: Compass, label: "Compass" },
  { Icon: Target, label: "Target" },
  { Icon: MapPin, label: "Map Pin" },
  { Icon: Radar, label: "Radar" },
  { Icon: Mountain, label: "Mountain" },
  { Icon: Satellite, label: "Satellite" },
] as const;

/** Icons, live — a sample of the lucide-react set the design system ships with. */
function IconsGrid() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-6" style={{ gap: "calc(10*var(--u))" }}>
      {ICONS.map(({ Icon, label }) => (
        <div key={label} className="flex flex-col items-center justify-center" style={{ gap: "calc(6*var(--u))" }}>
          <Icon className="text-fire" style={{ width: "calc(18*var(--u))", height: "calc(18*var(--u))" }} strokeWidth={1.6} />
          <span className="font-mono uppercase tracking-[0.04em] text-muted" style={{ fontSize: "calc(8*var(--u))" }}>
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

/**
 * Section 09, page 1b — the rest of the kit: input, select, form controls, badge,
 * dialog, icons. Shares "system"'s write-up (PinnedTextOverlay, rendered once by
 * SystemSection) so it carries no heading/body of its own — its own text column is
 * hidden outright on desktop (globals.css).
 */
function SystemControlsPage() {
  return (
    <SectionShell id="system-controls" kicker={SYSTEM_KICKER} dividerAbove="page" body={null}>
      <div className="flex h-full w-full flex-col justify-center" style={{ gap: "calc(14*var(--u))" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "calc(14*var(--u))" }}>
          <ControlCard label="Search">
            <InputDemo />
          </ControlCard>
          <ControlCard label="Filter by biome">
            <SelectDemo />
          </ControlCard>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: "calc(14*var(--u))" }}>
          <ControlCard label="Form controls">
            <div className="flex flex-col" style={{ gap: "calc(8*var(--u))" }}>
              <CheckboxItem label="Prayer partner" checked />
              <RadioItem label="Mission partner" checked />
              <RadioItem label="Prayer partner" />
            </div>
          </ControlCard>
          <ControlCard label="Badge">
            <div className="flex flex-wrap" style={{ gap: "calc(8*var(--u))" }}>
              <BadgeDemo tone="default">Unreached</BadgeDemo>
              <BadgeDemo tone="outline">Restricted</BadgeDemo>
              <BadgeDemo tone="secondary">Active</BadgeDemo>
            </div>
          </ControlCard>
          <ControlCard label="Dialog">
            <DialogDemo />
          </ControlCard>
        </div>
        <ControlCard label="Icons">
          <IconsGrid />
        </ControlCard>
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
      kicker="Design System"
      dividerAbove="page"
      heading="TTE exclusive components"
      body={
        <>
          <p>
            Shadcn/ui&rsquo;s design kit covers most of the design system components, but it has
            no idea what an unreached people group or a spiritual biome is, so these four pieces
            exist specifically to complement To the Ends of the Earth&rsquo;s brand data.
          </p>
          <NumberedList
            items={["Live HUD readout", "Rolling mission statistic", "Biome tags", "Topographic background texture"]}
          />
          <p className="mt-[1em]">
            These are components built once but reusable in different parts of the TTE digital
            experience. More exclusive brand components can be added to the system in the future.
          </p>
        </>
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

/** Section 09, page 3 — the People Group Card, two examples side by side. */
function SystemPeopleGroupPage() {
  return (
    <SectionShell
      id="system-people-group"
      kicker="Design System"
      dividerAbove="page"
      heading="Examples of TTE exclusive components together"
      body={
        <p>
          The four pieces on the previous page compose into the People Group Card. One of
          TTE&rsquo;s richest pieces, and the reason they exist: a photo (or the topographic
          fallback), the biome tag, a live data strip, and the mobilize/operate actions, all in
          one card.
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

function DemoButton({
  intent,
  variant,
  label,
}: {
  intent: "mobilize" | "operate";
  variant: "default" | "outline";
  label: string;
}) {
  const fontClass =
    intent === "mobilize" ? "font-display font-extrabold tracking-[0.04em]" : "font-mono font-bold tracking-[0.08em]";
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center whitespace-nowrap uppercase transition-all ${fontClass} ${VARIANT_CLASS[variant]}`}
      style={{ gap: "calc(6*var(--u))", height: "calc(36*var(--u))", padding: "0 calc(16*var(--u))", fontSize: "calc(11*var(--u))" }}
    >
      <ScrambleHover text={label} />
    </button>
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
          <DemoButton intent="mobilize" variant="default" label="Pray now" />
          <DemoButton intent="operate" variant="outline" label="View data" />
        </div>
      </div>
    </div>
  );
}

/**
 * The write-up "system" and "system-controls" share, rendered exactly once and held
 * in place across both — plain CSS `position: sticky`, no JS at all.
 *
 * Two earlier attempts failed for two different reasons, both worth recording:
 *
 * 1. GSAP ScrollTrigger pin on the section's own text column. Every `.secd` section
 *    sets `overflow: hidden`, so a pinned child gets *clipped* the moment it has to
 *    extend past its own section's box — which is exactly what "hold this while the
 *    NEXT section scrolls in" requires. That clipping was the disappearing act.
 * 2. `position: fixed` toggled by the active-page-id observer. Nothing to clip it,
 *    but it snaps on and off at the observer's threshold with no in-between, so it
 *    popped in/out mid-scroll and overlapped the next section's own column.
 *
 * Sticky avoids both: it's laid out in normal flow (so no ancestor clips it, and it
 * transitions by scrolling, not by toggling), the browser's compositor owns it (so
 * there's no per-frame JS to fight Lenis's snap), and its containing block bounds it
 * automatically. `.sec-pingroup` wraps exactly the two pages it should span; the
 * sticky box is one viewport tall and the section right after it is pulled back up by
 * the same amount (globals.css), so the pair nets out to zero added height — "#system"
 * still starts at the wrapper's very top and every offset Lenis snaps to is unchanged.
 * The offset lives on the SECTION, not as a negative bottom margin on the sticky box
 * itself: sticky releases when its own margin box reaches the bottom of its containing
 * block, so shrinking that margin box (what a negative bottom margin does) pushes the
 * release point far past the wrapper and the text keeps hanging on over the next page.
 * Kept as-is, it releases exactly at the wrapper's end and scrolls away on its own as
 * "system-organisms" (which has its own copy) arrives.
 *
 * Desktop-only: below lg it's display:none, the offset is off too, and each page
 * renders its own text in normal flow, exactly as before.
 */
function SharedTextSticky() {
  return (
    <div className="sec-pinsticky pointer-events-none sticky top-0 z-[5] hidden h-dvh lg:block">
      {/* .secd carries the --u scale the geometry below is expressed in. The insets come
          straight from SectionShell's own exported constant rather than being retyped —
          they drifted apart once already, and a hardcoded copy here silently keeps the
          old column width whenever the shared one changes. */}
      <div
        className="secd pointer-events-auto absolute flex flex-col justify-center"
        style={DESKTOP_TEXT_COL_STYLE}
      >
        <TextBlock kicker={SYSTEM_KICKER} heading={SYSTEM_HEADING} body={SYSTEM_BODY} {...DESKTOP_TEXT_BLOCK_STYLE} />
      </div>
    </div>
  );
}

/**
 * Section 09 — Design System. Four pages: buttons, the rest of the kit (controls),
 * the four TTE-exclusive components, then the People Group Card.
 *
 * "system" and "system-controls" share one write-up — the designer didn't want a
 * second full page's worth of new copy just to fit more components. See
 * SharedTextSticky above; both pages' own desktop text columns are hidden in CSS
 * (globals.css) so the sticky copy is the only one on screen.
 */
export default function SystemSection() {
  return (
    <>
      <div className="sec-pingroup relative">
        <SharedTextSticky />
        <SystemButtonsPage />
        <SystemControlsPage />
      </div>
      <SystemOrganismsPage />
      <SystemPeopleGroupPage />
    </>
  );
}
