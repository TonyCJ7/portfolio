import type { SkillGroup as SkillGroupData } from "@/types/content";
import SkillGroup from "./SkillGroup";

type SkillTableProps = {
  groups: SkillGroupData[];
};

export default function SkillTable({ groups }: SkillTableProps) {
  return (
    <dl className="border-b border-line">
      {groups.map((group) => (
        <SkillGroup key={group.name} group={group} />
      ))}
    </dl>
  );
}
