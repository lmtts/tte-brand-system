/** Bullet list — small fire-orange square marker, the same HUD dot used across the
 * site's panel headers (Panel, MustUsePanel, HudPanelDemo). For body copy marked
 * "use bullet points" in the source doc that has no inherent order. */
export function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="flex flex-col" style={{ gap: "0.6em", marginTop: "0.6em" }}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start" style={{ gap: "0.8em" }}>
          <span
            aria-hidden
            className="shrink-0 bg-fire"
            style={{ width: "6px", height: "6px", marginTop: "0.55em" }}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Numbered list — zero-padded Fire Orange index (01, 02…), the same HUD numbering
 * used for imagery layers and the section index. For body copy marked "use bullet
 * points" in the source doc where the items were themselves written 1./2./3. */
export function NumberedList({ items }: { items: React.ReactNode[] }) {
  return (
    <ol className="flex flex-col" style={{ gap: "0.6em", marginTop: "0.6em" }}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start" style={{ gap: "0.8em" }}>
          <span aria-hidden className="shrink-0 font-mono font-bold text-fire">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}
