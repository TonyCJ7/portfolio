import type { Experience } from "@/types/content";
import ExperienceRow from "./ExperienceRow";

type ExperienceListProps = {
  items: Experience[];
  targetId?: string;
};

export default function ExperienceList({ items, targetId }: ExperienceListProps) {
  return (
    <ol className="row-list space-y-12">
      {items.map((entry) => (
        <ExperienceRow
          key={entry.id}
          entry={entry}
          target={entry.id === targetId}
        />
      ))}
    </ol>
  );
}
