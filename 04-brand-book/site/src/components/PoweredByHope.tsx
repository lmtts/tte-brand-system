/**
 * "Powered by" Hope Channel endorsement mark, background-aware.
 * tone="light" → for dark backgrounds (white). tone="dark" → for light backgrounds (ink).
 * Sizes scale with the section unit (--u) when present, else frame size.
 */
export default function PoweredByHope({
  tone = "light",
  className = "",
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const light = tone === "light";
  return (
    <div className={`flex items-center ${className}`} style={{ gap: "calc(9*var(--u,1px))" }}>
      <span
        className={`font-mono uppercase leading-none tracking-[0.05em] ${
          light ? "text-paper" : "text-ink"
        }`}
        style={{ fontSize: "calc(14*var(--u,1px))" }}
      >
        Powered by
      </span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/hc-mark.svg"
        alt="Hope Channel"
        className={`w-auto -scale-y-100 ${light ? "" : "[filter:brightness(0)]"}`}
        style={{ height: "calc(26*var(--u,1px))" }}
      />
    </div>
  );
}
