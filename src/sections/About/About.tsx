import SectionLabel from "@/components/SectionLabel/SectionLabel";
import { about } from "@/content/about";
import { sectionLabel } from "@/content/nav";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-label"
      className="scroll-mt-24 phone:scroll-mt-14"
    >
      <SectionLabel id="about-label">{sectionLabel("about")}</SectionLabel>
      <div className="mt-6 max-w-measure space-y-4 text-body text-fg-2 phone:mt-4">
        {about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
