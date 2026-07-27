// =============================================================
// Motion tokens — "intelligence & programming" system.
// Ref feel: contentarchitecture.dev (odometer roll, CSS-var driven,
// Lenis smooth scroll, ~520ms cubic-bezier).
// No cursor customization. No crosshair / reticle / weapon iconography.
// =============================================================

export const DUR = {
  fast: 0.12,
  base: 0.3,
  slow: 0.52,
  cinematic: 1.2,
} as const;

export const EASE = {
  // Smooth reveals.
  outExpo: [0.16, 1, 0.3, 1] as const,
  // Mechanical roll for odometer / rolling text.
  odometer: [0.7, 0, 0.2, 1] as const,
  // Standard UI transition.
  ui: [0.4, 0, 0.2, 1] as const,
};

export const STAGGER = {
  tight: 0.03,
  base: 0.06,
  loose: 0.12,
} as const;

// Character set for decode / scramble reveals (terminal feel).
export const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/#*<>[]";

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
