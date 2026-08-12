"use client";

import { useState } from "react";
import SectionShell from "@/components/SectionShell";
import ScrambleHover from "@/components/ScrambleHover";
import ImageLightbox from "@/components/ImageLightbox";
import { NumberedList } from "@/components/BrandList";

const IMAGERY_FOLDER_URL = "https://github.com/lmtts/tte-brand-system/tree/main/01-brand-system/imagery";

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

/**
 * One narrative layer, full-bleed — the image alone until hover/focus, when a
 * solid dark scrim covers it and its HUD info (scrambling in) centers over that.
 * Click still opens the uncropped lightbox.
 *
 * `lockWidth={false}` on every ScrambleHover here: all four share this tile's own
 * `<button>` as their closest("a, button") trigger, and ScrambleHover's default
 * width-lock (meant for text-sized buttons/links elsewhere) was the cause of a real
 * bug — four instances freezing/clearing the SAME giant trigger's inline width at
 * different, unsynchronized moments could catch it mid-layout-shift and leave the
 * whole tile collapsed. A grid tile's width is never meant to track its label text
 * anyway, so the lock served no purpose here even before it started misbehaving.
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
      {/* scrim — a solid dark ground across the whole tile, only on hover/focus,
          so the centered info below reads clearly wherever it falls. */}
      <div className="absolute inset-0 bg-ink/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
        style={{ gap: "calc(8*var(--u))", padding: "calc(16*var(--u))" }}
      >
        <span className="font-mono uppercase leading-none tracking-[0.06em]" style={{ fontSize: "calc(11*var(--u))" }}>
          <span className="text-fire">
            <ScrambleHover text={index} lockWidth={false} />
          </span>{" "}
          <span className="text-paper">
            <ScrambleHover text={name} lockWidth={false} />
          </span>
        </span>
        <div className="font-mono text-muted" style={{ fontSize: "calc(11*var(--u))" }}>
          <div className="uppercase" style={{ opacity: 0.85 }}>
            <ScrambleHover text={descriptor} lockWidth={false} />
          </div>
          <div style={{ marginTop: "calc(3*var(--u))" }}>
            <ScrambleHover text={spec} lockWidth={false} />
          </div>
        </div>
      </div>
    </button>
  );
}

/** 2×2, no gap — bleeds horizontally edge to edge, but clears the fixed nav/footer bars
 * vertically (`bleedClearance` on SectionShell), so tiles land as landscape rectangles
 * here rather than the near-squares a full 0–100dvh bleed produced. */
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
      bleedClearance
      showDivider
      heading="Every photo has to feel earned, not staged."
      body={
        <>
          <p>Four visual narrative layers cover the range:</p>
          <NumberedList
            items={[
              "The scale of the mission",
              "The stillness of the person",
              "The raw point of view",
              "The mission data itself",
            ]}
          />
          <p style={{ marginTop: "1em" }}>
            Each layer has its own shot language, but every photo has to pass the authenticity,
            grit, and boldness test. It must fit an explorer magazine, rather than a church
            bulletin.
          </p>
          <p style={{ marginTop: "1em" }}>
            The TTE imagery must focus on representing real people, although generating AI content
            is acceptable in some cases. Consult the brand&rsquo;s repository and brand agent to
            learn more about photography references, aesthetic, search keywords, and more.
          </p>
          <a
            href={IMAGERY_FOLDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-[1.2em] inline-flex w-fit items-center border border-paper/30 font-mono font-bold uppercase tracking-[0.08em] text-paper transition-colors hover:border-fire hover:text-fire"
            style={{
              gap: "calc(10*var(--u))",
              padding: "calc(12*var(--u)) calc(18*var(--u))",
              fontSize: "calc(12*var(--u))",
            }}
          >
            <ScrambleHover text="View imagery folder" />
            <ExternalArrow />
          </a>
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
