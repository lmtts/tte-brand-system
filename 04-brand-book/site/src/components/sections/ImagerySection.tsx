import SectionShell from "@/components/SectionShell";

type Layer = {
  index: string;
  name: string;
  descriptor: string;
  src: string;
  alt: string;
  spec: string;
};

const LAYERS: Layer[] = [
  {
    index: "01",
    name: "The Scale",
    descriptor: "Where the mission takes place",
    src: "/assets/imagery/layer-1-scale.webp",
    alt: "A hiker in an orange jacket stands on a cliff edge before a vast fog-wrapped mountain range: No border stops the Spirit.",
    spec: "16–24mm · figure 5–15% of frame",
  },
  {
    index: "02",
    name: "The Stillness",
    descriptor: "Focus on the protagonist",
    src: "/assets/imagery/layer-2-stillness.webp",
    alt: "A woman in a blue headscarf stands with eyes closed in prayer amid a blurred, crowded market.",
    spec: "50–85mm · f/1.4–2.8, eyes closed",
  },
  {
    index: "03",
    name: "The POV",
    descriptor: "The raw moment",
    src: "/assets/imagery/layer-3-pov.webp",
    alt: "First-person view from inside a vehicle, looking out over open farmland through the window.",
    spec: "24–35mm · handheld, first person",
  },
  {
    index: "04",
    name: "The HUD",
    descriptor: "Mission intel",
    src: "/assets/imagery/layer-4-hud.webp",
    alt: "Tight portrait of a man's eye wrapped in a wool scarf, overlaid with HUD mission data for the Tajik people.",
    spec: "85–135mm · tight portrait, data",
  },
];

const SPECS = [
  { label: "Reference", value: "Kodak Portra 400 · VSCO Film 01" },
  { label: "Saturation", value: "Desaturated 15–25%, warm channels protected" },
  { label: "Shadows", value: "Amber or deep teal, never pure black" },
  { label: "Highlights", value: "Warm white #F4F3F1, never blown out" },
  { label: "Grain", value: "ISO 800–1600 · amount 20–35 / size 25–40" },
];

/** One narrative layer — HUD label, the finished reference image (letterboxed, never cropped), a technical caption. */
function LayerCard({ index, name, descriptor, src, alt, spec }: Layer) {
  return (
    <div className="flex h-full w-full flex-col border border-paper/15">
      <div
        className="flex items-baseline border-b border-paper/15"
        style={{ gap: "calc(6*var(--u))", padding: "calc(10*var(--u)) calc(12*var(--u))" }}
      >
        <span className="shrink-0 text-fire" style={{ fontSize: "calc(11*var(--u))" }}>
          {index}
        </span>
        <span
          className="font-mono uppercase leading-none tracking-[0.06em] text-paper"
          style={{ fontSize: "calc(11*var(--u))" }}
        >
          {name}
        </span>
      </div>
      <div className="relative flex-1 overflow-hidden bg-ink" style={{ aspectRatio: "4/5" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-contain" />
      </div>
      <div
        className="border-t border-paper/15 font-mono text-muted"
        style={{ padding: "calc(9*var(--u)) calc(12*var(--u))", fontSize: "calc(9*var(--u))" }}
      >
        <div className="uppercase" style={{ opacity: 0.85 }}>
          {descriptor}
        </div>
        <div style={{ marginTop: "calc(4*var(--u))" }}>{spec}</div>
      </div>
    </div>
  );
}

function LayersGrid() {
  return (
    <div className="flex h-full w-full flex-col justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-4" style={{ gap: "calc(16*var(--u))" }}>
        {LAYERS.map((l) => (
          <LayerCard key={l.index} {...l} />
        ))}
      </div>
    </div>
  );
}

/** Section 07 — Imagery. */
export default function ImagerySection() {
  return (
    <SectionShell
      id="imagery"
      heading={<>Light that&rsquo;s been earned, not given.</>}
      body={
        <>
          <p>
            Every TTE photograph passes two tests: does it raise your pulse, and could it live on a
            National Geographic spread instead of a donation button.
          </p>
          <dl className="flex flex-col" style={{ gap: "0.6em", marginTop: "1.4em" }}>
            {SPECS.map((s) => (
              <div key={s.label} className="flex" style={{ gap: "1em" }}>
                <dt className="shrink-0 text-fire" style={{ width: "7em" }}>
                  {s.label}
                </dt>
                <dd className="opacity-80">{s.value}</dd>
              </div>
            ))}
          </dl>
        </>
      }
    >
      <LayersGrid />
    </SectionShell>
  );
}
