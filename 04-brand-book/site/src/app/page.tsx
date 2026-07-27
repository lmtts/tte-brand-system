import DecodeText from "@/components/DecodeText";
import CountUp from "@/components/CountUp";
import { SECTIONS } from "@/lib/sections.config";

const MONA_SCALE = [
  { cls: "text-display-xl", label: "Display / XL · 72" },
  { cls: "text-h1", label: "Heading / H1 · 48" },
  { cls: "text-h2", label: "Heading / H2 · 36" },
  { cls: "text-h4", label: "Heading / H4 · 22" },
];

const MONO_SCALE = [
  { cls: "text-hud-xl", label: "HUD / XL · 20" },
  { cls: "text-hud", label: "HUD / Default · 14" },
  { cls: "text-hud-sm", label: "HUD / Small · 12" },
];

const SWATCHES = [
  { name: "Fire Orange", hex: "#FE5442", bg: "bg-fire", fg: "text-paper" },
  { name: "Black", hex: "#28272A", bg: "bg-ink", fg: "text-paper" },
  { name: "White", hex: "#FFFFFF", bg: "bg-paper", fg: "text-ink" },
  { name: "Muted", hex: "#949494", bg: "bg-muted", fg: "text-ink" },
  { name: "Desert", hex: "#B86C55", bg: "bg-biome-desert", fg: "text-paper" },
  { name: "Arctic", hex: "#7BA7BC", bg: "bg-biome-arctic", fg: "text-ink" },
  { name: "City", hex: "#4A4A52", bg: "bg-biome-city", fg: "text-paper" },
  { name: "Forest", hex: "#2D5A3D", bg: "bg-biome-forest", fg: "text-paper" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-10 py-32">
      {/* HERO — proves fonts + motion */}
      <section className="min-h-[70vh]">
        <p className="text-hud text-fire mb-8">
          BRAND GUIDELINES · <DecodeText text="FOUNDATION BUILD" duration={1100} />
        </p>
        <h1 className="font-display font-black uppercase text-display-xl leading-[0.95] tracking-[0.02em] text-paper max-w-[16ch]">
          To the Ends<br />of the Earth
        </h1>
        <p className="font-mono text-body text-muted mt-8 max-w-[52ch]">
          <DecodeText
            text="System foundation online. Fonts, tokens, and motion wired."
            duration={1400}
            delay={300}
          />
        </p>

        <div className="mt-16 flex items-end gap-6">
          <span className="font-display font-black text-display-2xl leading-none text-paper tabular-nums">
            <CountUp to={3.6} decimals={1} suffix="B" />
          </span>
          <span className="font-mono text-hud-sm text-muted mb-3 max-w-[24ch]">
            souls in unreached people groups — the mission the system serves.
          </span>
        </div>
      </section>

      {/* TYPE — proves both typefaces + the scale */}
      <section className="mt-40 border-t border-paper/10 pt-16">
        <p className="text-hud-sm text-fire mb-10">01 · TYPOGRAPHY</p>
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <p className="text-hud-micro text-muted mb-6">MONA SANS — DISPLAY / HEADINGS</p>
            <div className="flex flex-col gap-5">
              {MONA_SCALE.map((s) => (
                <div key={s.label}>
                  <span className={`font-display font-extrabold uppercase ${s.cls} text-paper`}>
                    Faith thrives where the map ends
                  </span>
                  <span className="block text-hud-micro text-muted mt-2">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-hud-micro text-muted mb-6">SPACE MONO — HUD / DATA</p>
            <div className="flex flex-col gap-5">
              {MONO_SCALE.map((s) => (
                <div key={s.label}>
                  <span className={`font-mono uppercase ${s.cls} text-paper`}>
                    TARGET : TAJIK · 0.1% ACCESS
                  </span>
                  <span className="block text-hud-micro text-muted mt-2">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COLOR — proves tokens */}
      <section className="mt-40 border-t border-paper/10 pt-16">
        <p className="text-hud-sm text-fire mb-10">02 · COLOR TOKENS</p>
        <div className="grid grid-cols-2 gap-px bg-paper/10 sm:grid-cols-4">
          {SWATCHES.map((s) => (
            <div key={s.name} className={`${s.bg} ${s.fg} aspect-square p-4 flex flex-col justify-between`}>
              <span className="font-display font-bold uppercase text-label-md">{s.name}</span>
              <span className="font-mono text-hud-micro opacity-80">{s.hex}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION INDEX — proves config wiring */}
      <section className="mt-40 border-t border-paper/10 pt-16 pb-40">
        <p className="text-hud-sm text-fire mb-10">03 · SECTION INDEX</p>
        <ul className="flex flex-col gap-4">
          {SECTIONS.map((s) => (
            <li key={s.id} className="flex items-baseline gap-6 text-muted">
              <span className="font-mono text-hud text-fire">{s.index}</span>
              <span className="font-mono text-hud uppercase">{s.name}</span>
            </li>
          ))}
        </ul>
        <p className="mt-20 text-hud-micro text-muted">
          PHASE 0 · FOUNDATION — Next.js + Tailwind(tokens) + GSAP + Lenis · dark-first · radius 0
        </p>
      </section>
    </main>
  );
}
