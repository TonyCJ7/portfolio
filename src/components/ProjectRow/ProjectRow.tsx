import Label from "@/components/Label/Label";
import Link from "@/components/Link/Link";
import RowLift from "@/components/RowLift/RowLift";
import TagList from "@/components/Tag/TagList";
import type { Project } from "@/types/content";

type ProjectRowProps = {
  project: Project;
  target?: boolean;
};

export default function ProjectRow({ project, target = false }: ProjectRowProps) {
  return (
    <li
      data-row={target ? "target" : undefined}
      className="group relative isolate grid grid-cols-label gap-x-6 phone:grid-cols-1 phone:gap-y-2"
    >
      <RowLift />
      <Label className="block pt-1 phone:pt-0">{project.owner}</Label>
      <div>
        <h3 className="text-title wrap-anywhere">
          <Link
            kind={project.github ? "github" : "arrow"}
            href={project.url}
            external
            className="after:absolute after:inset-0"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 text-small text-fg-2">{project.body}</p>
        <TagList items={project.tags} className="mt-3" />
      </div>
    </li>
  );
}
