"use client";

import { useState } from "react";
import SectionShell from "@/components/SectionShell";
import DecodeText from "@/components/DecodeText";
import ScrambleHover from "@/components/ScrambleHover";
import ImageLightbox from "@/components/ImageLightbox";

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
    alt: "A hiker in an orange jacket stands on a rock overlooking a vast snow-capped mountain range and glacial valley: no border stops the Spirit.",
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
    alt: "View from a riverboat window over a flooded jungle tributary, a passenger in a canvas cap watching the tree line.",
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

/**
 * One narrative layer, full-bleed — the image alone until hover/focus, when
 * a scrim + its HUD info (scrambling in) surface over it. Click still opens
 * the uncropped lightbox.
 */
function LayerTile({ layer, onOpen }: { layer: Layer; onOpen: (layer: Layer) => void }) {
  const { index, name, descriptor, src, alt, spec } = layer;
  return (
    <button
      type="button"
      onClick={() => onOpen(layer)}
      aria-label={`View ${name} full size`}
      className="group relative block aspect-square w-full cursor-zoom-in overflow-hidden bg-ink text-left lg:aspect-auto lg:h-full"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />
      {/* scrim — contrast for the info above, only on hover/focus. Sits at
          the top (not bottom) so it never collides with the fixed footer. */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
      <div
        className="absolute inset-x-0 top-0 flex flex-col opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
        style={{ gap: "calc(6*var(--u))", padding: "calc(16*var(--u))" }}
      >
        <span className="font-mono uppercase leading-none tracking-[0.06em]" style={{ fontSize: "calc(11*var(--u))" }}>
          <span className="text-fire">
            <ScrambleHover text={index} />
          </span>{" "}
          <span className="text-paper">
            <ScrambleHover text={name} />
          </span>
        </span>
        <div className="font-mono text-muted" style={{ fontSize: "calc(11*var(--u))" }}>
          <div className="uppercase" style={{ opacity: 0.85 }}>
            <ScrambleHover text={descriptor} />
          </div>
          <div style={{ marginTop: "calc(3*var(--u))" }}>
            <ScrambleHover text={spec} />
          </div>
        </div>
      </div>
    </button>
  );
}

/** 2×2, no gap — same edge-to-edge sizing as the single portrait in "The Brand" (Section 02). */
function LayersGrid({ onOpen }: { onOpen: (layer: Layer) => void }) {
  return (
    <div className="grid w-full grid-cols-2 lg:h-full lg:grid-rows-2">
      {LAYERS.map((l) => (
        <LayerTile key={l.index} layer={l} onOpen={onOpen} />
      ))}
    </div>
  );
}

/** Section 07 — Imagery. */
export default function ImagerySection() {
  const [openLayer, setOpenLayer] = useState<Layer | null>(null);

  return (
    <SectionShell
      id="imagery"
      kicker="Imagery"
      bleed
      heading="Every photo has to feel earned, not staged."
      body={
        <>
          <p>
            Four narrative layers cover the range: the scale of the mission, the stillness of the
            person, the raw point of view, and the mission data itself. Every photograph fits one
            of the four.
          </p>
          <p style={{ marginTop: "1em" }}>
            Each layer has its own shot language, but every photo has to pass the same test: would
            it belong next to a National Geographic feature, or a church bulletin.
          </p>
          <dl className="flex flex-col" style={{ gap: "0.6em", marginTop: "1.4em" }}>
            {SPECS.map((s, i) => (
              <div key={s.label} className="flex" style={{ gap: "1em" }}>
                <dt className="shrink-0 text-fire" style={{ width: "7em" }}>
                  {s.label}
                </dt>
                <dd className="opacity-80">
                  <DecodeText text={s.value} duration={500} delay={i * 80} />
                </dd>
              </div>
            ))}
          </dl>
        </>
      }
    >
      <LayersGrid onOpen={setOpenLayer} />
      {openLayer && (
        <ImageLightbox
          src={openLayer.src}
          alt={openLayer.alt}
          caption={
            <>
              <span className="text-fire">{openLayer.index}</span> {openLayer.name}
            </>
          }
          onClose={() => setOpenLayer(null)}
        />
      )}
    </SectionShell>
  );
}
