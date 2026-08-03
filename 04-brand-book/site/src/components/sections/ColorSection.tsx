"use client";

import { useState } from "react";
import SectionShell from "@/components/SectionShell";
import { contrastTextClass } from "@/lib/color";
import ScrambleHover from "@/components/ScrambleHover";

type Swatch = {
  name: string;
  hex: string;
  token: string;
  /** Explicit override — skips the auto-contrast calc for a documented brand rule (e.g. Fire Orange always takes a white label, per the button system). */
  tone?: "text-paper" | "text-ink";
};

const PRIMARY: Swatch[] = [
  {
    name: "Fire Orange",
    hex: "#FE5442",
    token: "brand.primary · primitives.color.fire-orange",
    tone: "text-paper",
  },
  { name: "Black", hex: "#28272A", token: "brand.dark · primitives.color.black" },
  { name: "White", hex: "#FFFFFF", token: "brand.light · primitives.color.white" },
];

const BIOME: Swatch[] = [
  { name: "Desert", hex: "#B86C55", token: "biome.desert" },
  { name: "Arctic", hex: "#7BA7BC", token: "biome.arctic" },
  { name: "City", hex: "#4A4A52", token: "biome.city" },
  { name: "Forest", hex: "#2D5A3D", token: "biome.forest" },
];

/** Click any swatch to copy its hex to the clipboard; briefly confirms with "COPIED". */
function useCopyHex() {
  const [copied, setCopied] = useState<string | null>(null);
  const copy = (hex: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(hex).catch(() => {});
    }
    setCopied(hex);
    window.setTimeout(() => setCopied((c) => (c === hex ? null : c)), 1400);
  };
  return { copied, copy };
}

/** A primary color — HUD label header, then the fill itself as the card body, hex + token overlaid. Click to copy. */
function PrimarySwatch({ name, hex, token, tone: toneOverride, copied, onCopy }: Swatch & { copied: boolean; onCopy: () => void }) {
  const tone = toneOverride ?? contrastTextClass(hex);
  return (
    <button
      type="button"
      onClick={onCopy}
      className="group flex h-full w-full flex-col border border-paper/15 text-left transition-colors hover:border-fire/50"
    >
      <div
        className="flex items-center border-b border-paper/15"
        style={{ gap: "calc(8*var(--u))", padding: "calc(12*var(--u)) calc(14*var(--u))" }}
      >
        <span className="shrink-0 bg-fire" style={{ width: "6px", height: "6px" }} />
        <span
          className="font-mono uppercase leading-none tracking-[0.08em] text-muted"
          style={{ fontSize: "calc(11*var(--u))" }}
        >
          <span className="sr-only">Copy hex code: </span>
          {name}
        </span>
      </div>
      <div className="relative flex-1" style={{ background: hex, minHeight: "calc(150*var(--u))" }}>
        <div className={`absolute left-0 bottom-0 ${tone}`} style={{ padding: "calc(14*var(--u))" }}>
          <div className="font-mono font-bold leading-none" style={{ fontSize: "calc(18*var(--u))" }}>
            {copied ? "Copied" : <ScrambleHover text={hex} />}
          </div>
          <div
            className="font-mono opacity-70"
            style={{ fontSize: "calc(10*var(--u))", marginTop: "calc(4*var(--u))" }}
          >
            {token}
          </div>
        </div>
      </div>
    </button>
  );
}

/** A biome accent — smaller, no header row, name + hex overlaid directly on the fill. Click to copy. */
function BiomeSwatch({ name, hex, token, copied, onCopy }: Swatch & { copied: boolean; onCopy: () => void }) {
  const tone = contrastTextClass(hex);
  return (
    <button
      type="button"
      onClick={onCopy}
      title={token}
      className="relative h-full w-full border border-paper/15 text-left transition-colors hover:border-fire/50"
      style={{ minHeight: "calc(88*var(--u))", background: hex }}
    >
      <div className={`absolute left-0 bottom-0 ${tone}`} style={{ padding: "calc(10*var(--u))" }}>
        <div
          className="font-mono font-bold uppercase leading-none tracking-[0.06em]"
          style={{ fontSize: "calc(11*var(--u))" }}
        >
          <span className="sr-only">Copy hex code: </span>
          <ScrambleHover text={name} />
        </div>
        <div className="font-mono opacity-70" style={{ fontSize: "calc(9*var(--u))", marginTop: "calc(3*var(--u))" }}>
          {copied ? "Copied" : hex}
        </div>
      </div>
    </button>
  );
}

function ColorGrid() {
  const { copied, copy } = useCopyHex();
  return (
    <div className="flex h-full w-full flex-col justify-center" style={{ gap: "calc(28*var(--u))" }}>
      <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: "calc(24*var(--u))" }}>
        {PRIMARY.map((s) => (
          <PrimarySwatch key={s.name} {...s} copied={copied === s.hex} onCopy={() => copy(s.hex)} />
        ))}
      </div>
      <div>
        <p
          className="font-mono uppercase text-muted tracking-[0.08em]"
          style={{ fontSize: "calc(11*var(--u))", marginBottom: "calc(12*var(--u))" }}
        >
          Biome accents · secondary, context-specific
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4" style={{ gap: "calc(16*var(--u))" }}>
          {BIOME.map((s) => (
            <BiomeSwatch key={s.name} {...s} copied={copied === s.hex} onCopy={() => copy(s.hex)} />
          ))}
        </div>
      </div>
    </div>
  );
}

/** Section 04 — Color. */
export default function ColorSection() {
  return (
    <SectionShell
      id="color"
      heading="Three colors. Maximum impact. Every pixel intentional."
      body={
        <>
          <p>
            Fire Orange is reserved for emphasis: calls to action, key words, the one accent that
            matters. It never becomes a background.
          </p>
          <p className="mt-[1em]">
            Black is the default ground, the color of soil and unreached places. White carries the
            gospel light, for editorial and text on dark. Never a rival to Fire Orange, biome
            colors stay secondary, used only when context calls for them.
          </p>
        </>
      }
    >
      <ColorGrid />
    </SectionShell>
  );
}
