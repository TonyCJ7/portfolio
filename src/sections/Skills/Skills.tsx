import EducationRow from "@/components/EducationRow/EducationRow";
import Label from "@/components/Label/Label";
import SectionLabel from "@/components/SectionLabel/SectionLabel";
import SkillTable from "@/components/SkillGroup/SkillTable";
import { education } from "@/content/education";
import { sectionLabel } from "@/content/nav";
import { skills } from "@/content/skills";

type SkillsProps = {
  showEducation?: boolean;
};

export default function Skills({ showEducation = true }: SkillsProps) {
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
      {showEducation && (
        <>
          <h3 className="mt-12">
            <Label>{education.label}</Label>
          </h3>
          <div className="mt-4">
            <EducationRow education={education} />
          </div>
        </>
      )}
    </section>
  );
}
