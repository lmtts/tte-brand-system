"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import SectionShell from "@/components/SectionShell";
import ScrambleHover from "@/components/ScrambleHover";
import ImageLightbox from "@/components/ImageLightbox";

type Example = {
  id: string;
  index: string;
  name: string;
  type: string;
  src: string;
  /** width / height, from the real exported asset — drives the masonry pack below. */
  ratio: number;
};

const RAW_EXAMPLES: Omit<Example, "index">[] = [
  { id: "billboard-1", name: "The Spirit Knows No Borders", type: "Out-of-home · Billboard", src: "/assets/examples/billboard-spirit-1.webp", ratio: 2.925 },
  { id: "billboard-2", name: "The Spirit Knows No Borders", type: "Out-of-home · Billboard", src: "/assets/examples/billboard-spirit-2.webp", ratio: 2.388 },
  { id: "bus-stop", name: "The Final Frontier Is a Human Heart", type: "Out-of-home · Bus shelter", src: "/assets/examples/bus-stop-human-heart.webp", ratio: 1.778 },
  { id: "magazine-ad-1", name: "To the Ends of the Earth", type: "Print · Magazine ad", src: "/assets/examples/magazine-ad-1.webp", ratio: 0.786 },
  { id: "magazine-ad-2", name: "No Border Stops the Spirit", type: "Print · Magazine ad", src: "/assets/examples/magazine-ad-2.webp", ratio: 0.786 },
  { id: "magazine-cover", name: "Faith in the Deadest Soil", type: "Print · Magazine cover", src: "/assets/examples/magazine-faith-deadest-soil.webp", ratio: 0.708 },
  { id: "post-1", name: "No Border Stops the Spirit", type: "Social · Instagram post", src: "/assets/examples/post-1.webp", ratio: 0.8 },
  { id: "post-2", name: "Destination: Alaska", type: "Print · Pocket boarding pass", src: "/assets/examples/post-2-boarding-pass.webp", ratio: 0.8 },
  { id: "post-feed", name: "Now That You Know, What Will You Do?", type: "Social · Instagram post", src: "/assets/examples/post-feed.webp", ratio: 0.8 },
  { id: "post-question", name: "3.6 Billion Have Never Heard", type: "Social · Instagram post", src: "/assets/examples/post-introduce-the-question.webp", ratio: 0.8 },
  { id: "reels-cover", name: "Reels Cover", type: "Social · Reels cover", src: "/assets/examples/reels-cover-2.webp", ratio: 0.563 },
  { id: "showcase", name: "Brand Showcase", type: "Presentation · Title card", src: "/assets/examples/showcase-1.webp", ratio: 1.778 },
  { id: "jacket", name: "Branded Jacket", type: "Merchandise · Apparel", src: "/assets/examples/jacket.webp", ratio: 1.778 },
  { id: "embroidered-patch", name: "Embroidered Icon Patch", type: "Merchandise", src: "/assets/examples/embroidered-icon-patch.webp", ratio: 1.778 },
  { id: "macbook-sticker", name: "Laptop Sticker", type: "Merchandise", src: "/assets/examples/macbook-sticker.webp", ratio: 1.778 },
  { id: "wallpaper-1", name: "iPhone Wallpaper", type: "Digital · Wallpaper", src: "/assets/examples/wallpaper-iphone-1.webp", ratio: 0.563 },
  { id: "wallpaper-2", name: "iPhone Wallpaper", type: "Digital · Wallpaper", src: "/assets/examples/wallpaper-iphone.webp", ratio: 0.563 },
  { id: "wallpaper-3", name: "Desktop Wallpaper", type: "Digital · Wallpaper", src: "/assets/examples/wallpaper.webp", ratio: 1.778 },
];

const EXAMPLES: Example[] = RAW_EXAMPLES.map((ex, i) => ({ ...ex, index: String(i + 1).padStart(2, "0") }));

// Masonry pack — greedy shortest-column placement, cycling back through the 18 pieces as
// many times as it takes to fill every column to the same target height. Units are abstract
// "u" (the site's fluid design-px), multiplied out via calc() at render time. Filling every
// column to one exact height (rather than stopping after one pass, which leaves columns of
// uneven length) is what makes this a clean rectangular canvas with no gap at the bottom of
// a short column.
//
// Column count and target height are computed from the real window size (see the component)
// rather than a fixed constant: this section bleeds to the section's true edges, and on a
// wide monitor a fixed-size canvas can end up smaller than the viewport it's supposed to
// fill, leaving a gap instead of covering it with room to spare.
const COL_W = 220;
const GAP = 56;

function packMasonry(items: Example[], cols: number, targetH: number) {
  const colHeights = new Array(cols).fill(0);
  const placed: (Example & { uid: string; x: number; y: number; w: number; h: number })[] = [];
  let i = 0;
  while (colHeights.some((h) => h < targetH)) {
    const item = items[i % items.length];
    const col = colHeights.indexOf(Math.min(...colHeights));
    const h = COL_W / item.ratio;
    placed.push({ ...item, uid: `${item.id}-${placed.length}`, x: col * (COL_W + GAP), y: colHeights[col], w: COL_W, h });
    colHeights[col] += h + GAP;
    i++;
  }
  const blockW = cols * COL_W + (cols - 1) * GAP;
  const blockH = Math.min(...colHeights) - GAP; // shortest finished column: the true gap-free rectangle
  return { placed, blockW, blockH };
}

/** Corner registration marks — the same instrument-frame motif as HudFrame, scaled to one
 * tile and shown only on hover/focus, as if the instrument just locked onto this piece. */
function RegistrationMarks() {
  const corner = "absolute border-fire opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100";
  const size = { width: "calc(10*var(--u))", height: "calc(10*var(--u))" };
  const inset = "calc(6*var(--u))";
  return (
    <>
      <span className={`${corner} border-l border-t`} style={{ ...size, left: inset, top: inset }} />
      <span className={`${corner} border-r border-t`} style={{ ...size, right: inset, top: inset }} />
      <span className={`${corner} border-l border-b`} style={{ ...size, left: inset, bottom: inset }} />
      <span className={`${corner} border-r border-b`} style={{ ...size, right: inset, bottom: inset }} />
    </>
  );
}

/** The piece itself, no border, no card chrome — shared by the desktop canvas tiles and
 * the mobile flow tiles, just wrapped in a differently-positioned <button>. */
function TileContent({ example }: { example: Example }) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={example.src}
        alt=""
        aria-hidden
        draggable={false}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover select-none"
      />
      <RegistrationMarks />
      <div
        className="absolute inset-x-0 bottom-0 flex flex-col opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
        style={{ padding: "calc(8*var(--u))", background: "linear-gradient(to top, rgba(40,39,42,0.92), transparent)" }}
      >
        <span className="font-mono font-bold uppercase leading-tight tracking-[0.06em] text-paper" style={{ fontSize: "calc(9*var(--u))" }}>
          <ScrambleHover text={example.name} />
        </span>
        <span className="font-mono uppercase leading-tight tracking-[0.06em] text-muted" style={{ fontSize: "calc(8*var(--u))" }}>
          {example.type}
        </span>
      </div>
    </>
  );
}

const CLAMP_MARGIN = 24; // u — how close to the canvas edge the drag is allowed to get

/** Section 09 — Examples. Desktop: a large masonry "canvas" (the real mosaic tiled 3×3)
 * the visitor drags in any direction inside a fixed, edge-faded viewport — Lucas's
 * "Option B": generous room to pan, softly clamped at the edges, not a literal infinity.
 * Mobile: the same 18 pieces in normal document flow, no canvas, no drag. */
export default function ExamplesSection() {
  const [open, setOpen] = useState<Example | null>(null);
  const [dragging, setDragging] = useState(false);
  const pan = useRef({ x: 0, y: 0 });

  // How big the canvas is packed (see packMasonry's comment above) is driven by the real,
  // measured size of the visible `.examples-viewport` element — not a guess from the window
  // width. A guess based on "content region is roughly N% of the window" was the actual bug
  // behind an earlier version of this gap: the left column is a FIXED width, not a
  // percentage, so the content region's share of the window grows with a wider window and
  // a fixed percentage under-estimates it, especially on a wide monitor — the canvas came
  // out smaller than the real viewport and never reached its edges. Measuring the element
  // directly is exact regardless of window size. (SectionShell mounts this section's
  // children twice, desktop + mobile, one hidden by CSS — querying all `.examples-viewport`
  // matches and keeping whichever reports a real, nonzero size sidesteps that safely,
  // instead of a ref that would bind to whichever copy happened to mount last.)
  const [viewportSize, setViewportSize] = useState({ w: 900, h: 700 });
  useEffect(() => {
    function measure() {
      const els = document.querySelectorAll<HTMLDivElement>("#examples .examples-viewport");
      for (const el of els) {
        const { clientWidth: w, clientHeight: h } = el;
        if (w > 0 && h > 0) {
          setViewportSize({ w, h });
          return;
        }
      }
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { placed: PLACED, blockW: BLOCK_W, blockH: BLOCK_H } = useMemo(() => {
    // Canvas at ~2.2× the real viewport in both directions — comfortably covers it at
    // rest from every edge, with real margin left over to drag through.
    const cols = Math.max(4, Math.round((viewportSize.w * 2.2) / (COL_W + GAP)));
    const targetH = viewportSize.h * 2.2;
    return packMasonry(EXAMPLES, cols, targetH);
  }, [viewportSize]);
  // `moved` (combined distance) lets a tile's click handler tell a real click from the
  // end of a drag. Everything DOM-related — the viewport, the canvas it pans, the size
  // to clamp against — is read off the event (`e.currentTarget` / a query relative to
  // it), never a stored ref: SectionShell mounts this section's children twice (desktop
  // + mobile, one hidden by CSS), so a single ref object would silently bind to whichever
  // copy rendered last instead of the one the user is actually dragging.
  //
  // Pointer capture is deliberately NOT taken on pointerdown — only once movement crosses
  // the threshold, inside onPointerMove. Capturing immediately redirects the eventual
  // pointerup/click to the viewport for every press, including a plain click that never
  // moved: the button under the cursor never sees mouseup, so its click never fires and
  // nothing opens. Deferring capture to "this is actually a drag now" lets an un-moved
  // press behave like an ordinary click.
  const drag = useRef({
    pending: false,
    active: false,
    startX: 0,
    startY: 0,
    panStartX: 0,
    panStartY: 0,
    moved: 0,
    maxX: 0,
    maxY: 0,
    pointerId: 0,
    viewportEl: null as HTMLDivElement | null,
    canvasEl: null as HTMLDivElement | null,
  });

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse") return;
    const viewport = e.currentTarget;
    const canvasEl = viewport.firstElementChild as HTMLDivElement | null;
    if (!canvasEl) return;
    const maxX = BLOCK_W / 2 - CLAMP_MARGIN - viewport.clientWidth / 2;
    const maxY = BLOCK_H / 2 - CLAMP_MARGIN - viewport.clientHeight / 2;
    drag.current = {
      pending: true,
      active: false,
      startX: e.clientX,
      startY: e.clientY,
      panStartX: pan.current.x,
      panStartY: pan.current.y,
      moved: 0,
      maxX: Math.max(0, maxX),
      maxY: Math.max(0, maxY),
      pointerId: e.pointerId,
      viewportEl: viewport,
      canvasEl,
    };
  }
  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!drag.current.pending) return;
    const dx = e.clientX - drag.current.startX;
    const dy = e.clientY - drag.current.startY;
    drag.current.moved = Math.max(drag.current.moved, Math.hypot(dx, dy));

    if (!drag.current.active) {
      if (drag.current.moved <= 6) return; // still could be a plain click — wait
      drag.current.active = true;
      setDragging(true);
      try {
        drag.current.viewportEl?.setPointerCapture(drag.current.pointerId);
      } catch {
        // Capture can fail to attach for a pointer id the browser isn't tracking as
        // active (real hardware input doesn't hit this) — safe to ignore either way.
      }
    }
    e.preventDefault(); // now that it's a confirmed drag, stop native text/image selection

    const { maxX, maxY, canvasEl } = drag.current;
    pan.current.x = Math.min(maxX, Math.max(-maxX, drag.current.panStartX + dx));
    pan.current.y = Math.min(maxY, Math.max(-maxY, drag.current.panStartY + dy));
    if (canvasEl) canvasEl.style.transform = `translate3d(${pan.current.x}px, ${pan.current.y}px, 0)`;
  }
  function onPointerUp() {
    drag.current.pending = false;
    drag.current.active = false;
    setDragging(false);
  }
  function handleOpen(example: Example) {
    if (drag.current.moved > 6) return; // was a drag to pan, not a click
    setOpen(example);
  }

  return (
    <SectionShell
      id="examples"
      kicker="Examples"
      bleed
      showDivider
      heading="Real pieces, built from every part of the system."
      body={
        <p>
          Every example here is a finished asset, not an isolated swatch: it combines color,
          typography, and pattern the way a real piece of TTE content actually would. Drag to
          look around, hover any thumbnail for what it is, click to see it full size.
        </p>
      }
    >
      {/* ===== Desktop — the pannable canvas ===== */}
      <div className="hidden h-full w-full lg:block">
        <div
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          className="examples-viewport relative h-full w-full overflow-hidden"
          style={{ cursor: dragging ? "grabbing" : "grab" }}
        >
          <div
            className="absolute"
            style={{
              left: `calc(50% - ${BLOCK_W / 2}*var(--u))`,
              top: `calc(50% - ${BLOCK_H / 2}*var(--u))`,
              width: `calc(${BLOCK_W}*var(--u))`,
              height: `calc(${BLOCK_H}*var(--u))`,
            }}
          >
            {PLACED.map((tile) => (
              <button
                key={tile.uid}
                type="button"
                onClick={() => handleOpen(tile)}
                aria-label={`View ${tile.name} full size`}
                className="group absolute overflow-hidden bg-ink text-left"
                style={{
                  left: `calc(${tile.x}*var(--u))`,
                  top: `calc(${tile.y}*var(--u))`,
                  width: `calc(${tile.w}*var(--u))`,
                  height: `calc(${tile.h}*var(--u))`,
                }}
              >
                <TileContent example={tile} />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Mobile / tablet — plain flow, no canvas, no drag =====
          `bleed` (needed so the desktop canvas reaches the section's true edges) also
          strips SectionShell's own mobile padding, so this branch supplies its own.
          `examples-mobile-feed` is a CSS-column masonry (Pinterest-style), not a grid: a
          grid's rows lock to the tallest item in that row across BOTH columns, so a short
          tile next to a tall one left a gap underneath before the next row could start.
          Columns pack each side independently, so a short tile is just followed closely by
          the next one in its own column. */}
      <div className="px-6 pb-24 lg:hidden">
        <div className="examples-mobile-feed">
          {EXAMPLES.map((example) => (
            <button
              key={example.id}
              type="button"
              onClick={() => setOpen(example)}
              aria-label={`View ${example.name} full size`}
              className="group relative mb-[calc(14*var(--u))] block w-full overflow-hidden bg-ink text-left"
              style={{ aspectRatio: example.ratio, breakInside: "avoid" }}
            >
              <TileContent example={example} />
            </button>
          ))}
        </div>
      </div>

      {open && (
        <ImageLightbox
          src={open.src}
          alt={open.name}
          caption={
            <>
              <span className="text-fire">{open.index}</span> {open.name} &middot; {open.type}
            </>
          }
          onClose={() => setOpen(null)}
        />
      )}
    </SectionShell>
  );
}
