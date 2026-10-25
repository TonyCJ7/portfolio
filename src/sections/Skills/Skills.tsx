import SectionLabel from "@/components/SectionLabel/SectionLabel";
import SkillTable from "@/components/SkillGroup/SkillTable";
import { sectionLabel } from "@/content/nav";
import { skills } from "@/content/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-label"
      className="scroll-mt-24 phone:scroll-mt-14"
    >
      <SectionLabel id="skills-label">{sectionLabel("skills")}</SectionLabel>
      <div className="mt-8">
        <SkillTable groups={skills} />
      </div>
    </section>
  );
}
