import HighlightGrid from "@/components/HighlightTile/HighlightGrid";
import SectionLabel from "@/components/SectionLabel/SectionLabel";
import { highlights } from "@/content/highlights";
import { sectionLabel } from "@/content/nav";

export default function Highlights() {
  return (
    <section
      id="highlights"
      aria-labelledby="highlights-label"
      className="scroll-mt-24 phone:scroll-mt-14"
    >
      <SectionLabel id="highlights-label">
        {sectionLabel("highlights")}
      </SectionLabel>
      <div className="mt-8">
        <HighlightGrid items={highlights} />
      </div>
    </section>
  );
}
