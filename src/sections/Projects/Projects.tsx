import ProjectList from "@/components/ProjectRow/ProjectList";
import SectionLabel from "@/components/SectionLabel/SectionLabel";
import { sectionLabel } from "@/content/nav";
import { projects } from "@/content/projects";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-label"
      className="scroll-mt-24 phone:scroll-mt-14"
    >
      <SectionLabel id="projects-label">
        {sectionLabel("projects")}
      </SectionLabel>
      <div className="mt-8 phone:mt-6">
        <ProjectList items={projects} />
      </div>
    </section>
  );
}
