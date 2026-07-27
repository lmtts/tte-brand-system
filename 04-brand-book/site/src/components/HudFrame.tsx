import { COORDS } from "@/lib/sections.config";

/**
 * Fixed instrument frame — registration marks + live index + coordinates.
 * Print/tech registration marks, never a targeting reticle. Pointer-events none.
 */
export default function HudFrame({
  index = "00",
  label = "FOUNDATION",
}: {
  index?: string;
  label?: string;
}) {
  const corner = "absolute w-4 h-4 border-fire/70";
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-50"
    >
      {/* corner registration marks */}
      <span className={`${corner} left-5 top-5 border-l border-t`} />
      <span className={`${corner} right-5 top-5 border-r border-t`} />
      <span className={`${corner} left-5 bottom-5 border-l border-b`} />
      <span className={`${corner} right-5 bottom-5 border-r border-b`} />

      {/* top readout */}
      <div className="absolute left-10 top-6 flex items-center gap-3 text-hud-micro text-muted">
        <span className="text-fire">{index}</span>
        <span className="tracking-[0.06em]">{label}</span>
      </div>
      <div className="absolute right-10 top-6 text-hud-micro text-muted tracking-[0.06em]">
        {COORDS}
      </div>
    </div>
  );
}
