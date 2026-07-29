/**
 * WCAG relative luminance → pick white or ink text for legible contrast
 * against a given hex fill. Used by color swatches so caption text always
 * reads, whichever brand or biome color it sits on.
 */
export function contrastTextClass(hex: string): "text-paper" | "text-ink" {
  const c = hex.replace("#", "");
  const r = parseInt(c.slice(0, 2), 16) / 255;
  const g = parseInt(c.slice(2, 4), 16) / 255;
  const b = parseInt(c.slice(4, 6), 16) / 255;
  const lin = (v: number) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
  const L = 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
  const contrastWithWhite = 1.05 / (L + 0.05);
  const contrastWithInk = (L + 0.05) / 0.071; // ink (#28272A) luminance ≈ 0.021
  return contrastWithWhite >= contrastWithInk ? "text-paper" : "text-ink";
}
