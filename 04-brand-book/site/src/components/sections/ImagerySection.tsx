"use client";

import { useEffect, useRef, useState } from "react";
import SectionShell from "@/components/SectionShell";
import DecodeText from "@/components/DecodeText";

type Layer = {
  index: string;
  name: string;
  descriptor: string;
  src: string;
  alt: string;
  spec: string;
  /** contain = show the full finished composition (text/logo baked in, can't crop); cover = crop to fill, safe when the frame is a plain photograph. */
  fit: "contain" | "cover";
  position?: string;
};

const LAYERS: Layer[] = [
  {
    index: "01",
    name: "The Scale",
    descriptor: "Where the mission takes place",
    src: "/assets/imagery/layer-1-scale.webp",
    alt: "A hiker in an orange jacket stands on a rock overlooking a vast snow-capped mountain range and glacial valley: no border stops the Spirit.",
    spec: "16–24mm · figure 5–15% of frame",
    fit: "cover",
  },
  {
    index: "02",
    name: "The Stillness",
    descriptor: "Focus on the protagonist",
    src: "/assets/imagery/layer-2-stillness.webp",
    alt: "A woman in a blue headscarf stands with eyes closed in prayer amid a blurred, crowded market.",
    spec: "50–85mm · f/1.4–2.8, eyes closed",
    fit: "cover",
  },
  {
    index: "03",
    name: "The POV",
    descriptor: "The raw moment",
    src: "/assets/imagery/layer-3-pov.webp",
    alt: "View from a riverboat window over a flooded jungle tributary, a passenger in a canvas cap watching the tree line.",
    spec: "24–35mm · handheld, first person",
    fit: "cover",
  },
  {
    index: "04",
    name: "The HUD",
    descriptor: "Mission intel",
    src: "/assets/imagery/layer-4-hud.webp",
    alt: "Tight portrait of a man's eye wrapped in a wool scarf, overlaid with HUD mission data for the Tajik people.",
    spec: "85–135mm · tight portrait, data",
    fit: "cover",
  },
];

const SPECS = [
  { label: "Reference", value: "Kodak Portra 400 · VSCO Film 01" },
  { label: "Saturation", value: "Desaturated 15–25%, warm channels protected" },
  { label: "Shadows", value: "Amber or deep teal, never pure black" },
  { label: "Highlights", value: "Warm white #F4F3F1, never blown out" },
  { label: "Grain", value: "ISO 800–1600 · amount 20–35 / size 25–40" },
];

/** One narrative layer — HUD label, the reference image, a technical caption. Click the image to inspect it full size. */
function LayerCard({ layer, onOpen }: { layer: Layer; onOpen: (layer: Layer) => void }) {
  const { index, name, descriptor, src, alt, spec, fit, position } = layer;
  return (
    <div className="flex h-full w-full flex-col border border-paper/15">
      <div
        className="flex items-baseline border-b border-paper/15"
        style={{ gap: "calc(6*var(--u))", padding: "calc(7*var(--u)) calc(12*var(--u))" }}
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
      <button
        type="button"
        onClick={() => onOpen(layer)}
        aria-label={`View ${name} full size`}
        className="group relative block flex-1 cursor-zoom-in overflow-hidden bg-ink"
        style={{ aspectRatio: "1/1" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-[1.04]"
          style={{ objectFit: fit, objectPosition: position ?? "center" }}
        />
      </button>
      <div
        className="border-t border-paper/15 font-mono text-muted"
        style={{ padding: "calc(6*var(--u)) calc(12*var(--u))", fontSize: "calc(9*var(--u))" }}
      >
        <div className="uppercase" style={{ opacity: 0.85 }}>
          {descriptor}
        </div>
        <div style={{ marginTop: "calc(3*var(--u))" }}>{spec}</div>
      </div>
    </div>
  );
}

function LayersGrid({ onOpen }: { onOpen: (layer: Layer) => void }) {
  return (
    <div className="flex h-full w-full flex-col justify-center">
      <div className="mx-auto grid grid-cols-2" style={{ gap: "calc(14*var(--u))", maxWidth: "calc(300*var(--u))" }}>
        {LAYERS.map((l) => (
          <LayerCard key={l.index} layer={l} onOpen={onOpen} />
        ))}
      </div>
    </div>
  );
}

/** Full-screen lightbox — the uncropped source, for a closer look than the grid crop allows. */
function ImageLightbox({ layer, onClose }: { layer: Layer; onClose: () => void }) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const trigger = document.activeElement as HTMLElement | null;
    closeBtnRef.current?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      // The close button is the only focusable element in the dialog —
      // keep Tab/Shift+Tab from leaking focus out to the page behind it.
      if (e.key === "Tab") {
        e.preventDefault();
        closeBtnRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      trigger?.focus();
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${layer.name} full size`}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 backdrop-blur-sm"
      style={{ padding: "calc(48*var(--u))" }}
    >
      <button
        ref={closeBtnRef}
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="fixed flex items-center justify-center border border-paper/20 text-paper transition-colors hover:border-fire hover:text-fire"
        style={{
          top: "calc(24*var(--u))",
          right: "calc(24*var(--u))",
          width: "calc(36*var(--u))",
          height: "calc(36*var(--u))",
          fontSize: "calc(18*var(--u))",
        }}
      >
        &times;
      </button>
      <figure
        className="flex max-h-full max-w-full flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={layer.src} alt={layer.alt} className="block max-h-[78vh] max-w-full object-contain" />
        <figcaption
          className="font-mono uppercase tracking-[0.08em] text-muted"
          style={{ marginTop: "calc(18*var(--u))", fontSize: "calc(11*var(--u))" }}
        >
          <span className="text-fire">{layer.index}</span> {layer.name}
        </figcaption>
      </figure>
    </div>
  );
}

/** Section 07 — Imagery. */
export default function ImagerySection() {
  const [openLayer, setOpenLayer] = useState<Layer | null>(null);

  return (
    <SectionShell
      id="imagery"
      heading="Light that’s been earned, not given."
      body={
        <>
          <p>
            Four narrative layers cover the range: the scale of the mission, the stillness of the
            person, the raw point of view, and the mission data itself. Every photograph fits one
            of the four.
          </p>
          <p style={{ marginTop: "1em" }}>
            Each carries its own shot language, but every frame still has to pass two tests: does
            it raise your pulse, and could it live on a National Geographic spread instead of a
            donation button.
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
      {openLayer && <ImageLightbox layer={openLayer} onClose={() => setOpenLayer(null)} />}
    </SectionShell>
  );
}
