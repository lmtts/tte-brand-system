import SectionShell from "@/components/SectionShell";
import { contrastTextClass } from "@/lib/color";

type Swatch = { name: string; hex: string; token: string };

const PRIMARY: Swatch[] = [
  { name: "Fire Orange", hex: "#FE5442", token: "brand.primary · primitives.color.fire-orange" },
  { name: "Black", hex: "#28272A", token: "brand.dark · primitives.color.black" },
  { name: "White", hex: "#FFFFFF", token: "brand.light · primitives.color.white" },
];

const BIOME: Swatch[] = [
  { name: "Desert", hex: "#B86C55", token: "biome.desert" },
  { name: "Arctic", hex: "#7BA7BC", token: "biome.arctic" },
  { name: "City", hex: "#4A4A52", token: "biome.city" },
  { name: "Forest", hex: "#2D5A3D", token: "biome.forest" },
];

/** A primary color — HUD label header, then the fill itself as the card body, hex + token overlaid. */
function PrimarySwatch({ name, hex, token }: Swatch) {
  const tone = contrastTextClass(hex);
  return (
    <div className="flex flex-col border border-paper/15">
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
      <div className="relative flex-1" style={{ background: hex, minHeight: "calc(150*var(--u))" }}>
        <div className={`absolute left-0 bottom-0 ${tone}`} style={{ padding: "calc(14*var(--u))" }}>
          <div className="font-mono font-bold leading-none" style={{ fontSize: "calc(18*var(--u))" }}>
            {hex}
          </div>
          <div
            className="font-mono opacity-70"
            style={{ fontSize: "calc(10*var(--u))", marginTop: "calc(4*var(--u))" }}
          >
            {token}
          </div>
        </div>
      </div>
    </div>
  );
}

/** A biome accent — smaller, no header row, name + hex overlaid directly on the fill. */
function BiomeSwatch({ name, hex, token }: Swatch) {
  const tone = contrastTextClass(hex);
  return (
    <div
      className="relative border border-paper/15"
      style={{ minHeight: "calc(88*var(--u))", background: hex }}
      title={token}
    >
      <div className={`absolute left-0 bottom-0 ${tone}`} style={{ padding: "calc(10*var(--u))" }}>
        <div
          className="font-mono font-bold uppercase leading-none tracking-[0.06em]"
          style={{ fontSize: "calc(11*var(--u))" }}
        >
          {name}
        </div>
        <div className="font-mono opacity-70" style={{ fontSize: "calc(9*var(--u))", marginTop: "calc(3*var(--u))" }}>
          {hex}
        </div>
      </div>
    </div>
  );
}

function ColorGrid() {
  return (
    <div className="flex h-full w-full flex-col justify-center" style={{ gap: "calc(28*var(--u))" }}>
      <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: "calc(24*var(--u))" }}>
        {PRIMARY.map((s) => (
          <PrimarySwatch key={s.name} {...s} />
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
            <BiomeSwatch key={s.name} {...s} />
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
      index="04"
      name="Color"
      poweredTone="light"
      heading={<>Three colors. Maximum impact. Every pixel intentional.</>}
      body={
        <>
          <p>
            Fire Orange is reserved for emphasis: calls to action, key words, the one accent that
            matters. It never becomes a background.
          </p>
          <p className="mt-[1em]">
            Black is the default ground, the color of soil and unreached places. White carries the
            gospel light, for editorial and text on dark. Biome colors are a secondary accent only,
            never a rival to Fire Orange.
          </p>
        </>
      }
    >
      <ColorGrid />
    </SectionShell>
  );
}
