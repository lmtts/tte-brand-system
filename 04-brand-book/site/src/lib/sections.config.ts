// Single source of truth for the brand book section order (Lucas-defined).
export type Section = {
  id: string;
  index: string; // "01".."10"
  name: string;
  status: "ready" | "pending";
};

export const SECTIONS: Section[] = [
  { id: "cover", index: "01", name: "Cover", status: "ready" },
  { id: "the-brand", index: "02", name: "The Brand", status: "ready" },
  { id: "logos", index: "03", name: "Logos", status: "pending" },
  { id: "color", index: "04", name: "Color", status: "pending" },
  { id: "typography", index: "05", name: "Typography", status: "pending" },
  { id: "patterns", index: "06", name: "Patterns", status: "pending" },
  { id: "imagery", index: "07", name: "Imagery", status: "pending" },
  { id: "voice", index: "08", name: "Voice", status: "pending" },
  { id: "system", index: "09", name: "System", status: "pending" },
  { id: "tokens", index: "10", name: "Tokens", status: "pending" },
];

// Field-dispatch coordinate stamp (Hope Channel International HQ).
export const COORDS = "39.0560° N  76.9634° W";
