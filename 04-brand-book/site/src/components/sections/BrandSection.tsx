import SectionShell from "@/components/SectionShell";

/** Section 02 — The Brand. */
export default function BrandSection() {
  return (
    <SectionShell
      id="the-brand"
      index="02"
      name="The Brand"
      poweredTone="light"
      image={{
        src: "/assets/brand/portrait.webp",
        alt: "A man on the frontier, wrapped against the cold — a face of the unreached world.",
      }}
      heading={
        <>
          To the Ends of the Earth mobilizes prayer and investment for the planet&rsquo;s most
          unreached peoples.
        </>
      }
      body={
        <>
          <p>
            &ldquo;You will be my witnesses to the ends of the earth.&rdquo; Acts 1:8. Two thousand
            years on, that sentence is still unfinished: 3.6 billion people have never heard the
            gospel of Jesus.
          </p>
          <p className="mt-[1em]">
            The number feels impossible. The theology says the outcome is inevitable (Matthew
            24:14). This is the movement built to close that gap, sending prayer partners and
            mission partners to the peoples still waiting.
          </p>
        </>
      }
    />
  );
}
