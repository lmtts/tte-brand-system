// Single source of truth for the brand book section order (Lucas-defined).
export type Section = {
  id: string; // primary page id — where nav clicks jump to
  index: string; // "01".."13"
  name: string;
  status: "ready" | "pending";
  /**
   * The tone of the SECTION'S OWN background — drives PoweredByHope and the
   * fixed footer label's text color. "light" = for dark backgrounds (white
   * text/mark, the current default everywhere). "dark" = for light/editorial
   * backgrounds, once one exists.
   */
  poweredTone: "light" | "dark";
  /**
   * A numbered section can span more than one scrollable page (e.g. "03
   * Logos" → showcase page + a misuse-rules page). List every page id here,
   * in scroll order; the nav keeps this section's index highlighted while
   * any of its pages is in view. Defaults to [id] when omitted.
   */
  pageIds?: string[];
};

export const SECTIONS: Section[] = [
  { id: "cover", index: "01", name: "Cover", status: "ready", poweredTone: "light" },
  { id: "the-brand", index: "02", name: "The Brand", status: "ready", poweredTone: "light" },
  { id: "brand-system", index: "03", name: "Brand System", status: "ready", poweredTone: "light" },
  {
    id: "logos",
    index: "04",
    name: "Logos",
    status: "ready",
    poweredTone: "light",
    pageIds: ["logos", "logos-misuse"],
  },
  { id: "color", index: "05", name: "Color", status: "ready", poweredTone: "light" },
  {
    id: "typography-mona",
    index: "06",
    name: "Typography",
    status: "ready",
    poweredTone: "light",
    pageIds: ["typography-mona", "typography-space"],
  },
  { id: "patterns", index: "07", name: "Patterns", status: "ready", poweredTone: "light" },
  { id: "imagery", index: "08", name: "Imagery", status: "ready", poweredTone: "light" },
  { id: "examples", index: "09", name: "Examples", status: "ready", poweredTone: "light" },
  { id: "voice", index: "10", name: "Voice", status: "ready", poweredTone: "light" },
  {
    id: "system",
    index: "11",
    name: "Design System",
    status: "ready",
    poweredTone: "light",
    pageIds: ["system", "system-controls", "system-organisms", "system-people-group"],
  },
  { id: "tokens", index: "12", name: "Tokens", status: "ready", poweredTone: "light" },
  { id: "outro", index: "13", name: "Close", status: "ready", poweredTone: "light" },
];

// All page ids belonging to a section, in scroll order (defaults to [id]).
export function pageIdsOf(section: Section): string[] {
  return section.pageIds ?? [section.id];
}

// Resolve a DOM page id back to its parent section index, e.g. for a future
// "logos-misuse" second page, this still resolves to "03".
export function sectionIndexForPageId(pageId: string): string | undefined {
  return SECTIONS.find((s) => pageIdsOf(s).includes(pageId))?.index;
}

// Field-dispatch coordinate stamp (Hope Channel International HQ).
export const COORDS = "39.0560° N  76.9634° W";
