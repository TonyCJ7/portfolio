import type { SkillGroup as SkillGroupData } from "@/types/content";
import Label from "@/components/Label/Label";
import TagList from "@/components/Tag/TagList";

type SkillGroupProps = {
  group: SkillGroupData;
};

export default function SkillGroup({ group }: SkillGroupProps) {
  return (
    <div className="grid grid-cols-[2fr_6fr] gap-x-6 border-t border-line py-4 phone:grid-cols-1 phone:gap-y-2">
      <dt>
        <Label>{group.name}</Label>
      </dt>
      <dd>
        <TagList items={group.items} label={group.name} />
      </dd>
    </div>
  );
}
