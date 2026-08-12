import SectionShell from "@/components/SectionShell";

/** A Label Large line embedded mid-flow in body copy (Section 02 only — every other section
 * keeps its Label Large in the fixed heading slot right under the kicker). Sized off the same
 * calc(*var(--u)) scale as SectionShell's own tagline, so it tracks desktop/mobile automatically. */
function InlineLabelLarge({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-display font-extrabold uppercase leading-none tracking-[0.04em] text-paper"
      style={{ fontSize: "calc(16*var(--u))", marginTop: "1em" }}
    >
      {children}
    </p>
  );
}

/** Section 02 — The Brand. No heading slot: the Label Large line sits mid-copy (the Acts 1:8
 * quote), not at the top, so the whole flow lives in `body`. */
export default function BrandSection() {
  return (
    <SectionShell
      id="the-brand"
      kicker="The Brand"
      image={{
        src: "/assets/brand/portrait.webp",
        alt: "A man on the frontier, wrapped against the cold: a face of the unreached world.",
      }}
      body={
        <>
          <p>
            To the Ends of the Earth is a Hope Channel brand that mobilizes prayer and investment
            for the planet&rsquo;s most unreached peoples.
          </p>
          <InlineLabelLarge>
            &ldquo;You will be my witnesses to the ends of the earth.&rdquo; Acts 1:8.
          </InlineLabelLarge>
          <p className="mt-[1em]">
            Two thousand years on, that sentence is still unfinished: 3.6 billion people have
            never heard the gospel of Jesus.
          </p>
          <p className="mt-[1em]">
            The number feels impossible. The theology says the outcome is inevitable (Matthew
            24:14). This is the movement built to close that gap: prayer partners and mission
            partners, sent to the peoples waiting.
          </p>
          <p className="mt-[1em]">
            To the Ends of the Earth (TTE) is bold, authentic, and unconventional. It is an
            explorer archetype brand with its core in the Holy Spirit: the Holy Spirit drives
            everything in the brand, the visuals, the tech data, the mission, the movement, the
            people.
          </p>
        </>
      }
    />
  );
}
