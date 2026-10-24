import ExperienceList from "@/components/ExperienceRow/ExperienceList";
import Link from "@/components/Link/Link";
import SectionLabel from "@/components/SectionLabel/SectionLabel";
import { experience } from "@/content/experience";
import { sectionLabel } from "@/content/nav";
import { profile } from "@/content/profile";

type ExperienceSectionProps = {
  cvHref?: string;
};

export default function ExperienceSection({ cvHref }: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      aria-labelledby="experience-label"
      className="scroll-mt-24 phone:scroll-mt-14"
    >
      <SectionLabel id="experience-label">
        {sectionLabel("experience")}
      </SectionLabel>
      <div className="mt-8">
        <ExperienceList items={experience} />
      </div>
      {cvHref && (
        <p className="mt-8">
          <Link kind="arrow" href={cvHref} external>
            {profile.cvLinkText}
          </Link>
        </p>
      )}
    </section>
  );
}
