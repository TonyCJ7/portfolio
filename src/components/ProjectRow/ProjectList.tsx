import type { Project } from "@/types/content";
import ProjectRow from "./ProjectRow";

type ProjectListProps = {
  items: Project[];
  targetId?: string;
};

export default function ProjectList({ items, targetId }: ProjectListProps) {
  return (
    <ol className="row-list space-y-12">
      {items.map((project) => (
        <ProjectRow
          key={project.id}
          project={project}
          target={project.id === targetId}
        />
      ))}
    </ol>
  );
}
