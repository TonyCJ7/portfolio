import { defineEntry, select } from "@/app/workshop/controls";
import { skills } from "@/content/skills";
import SkillTable from "./SkillTable";

function groupsFor(name: string) {
  if (name === "all") {
    return skills;
  }

  return skills.filter((group) => group.name === name);
}

export const entry = defineEntry({
  id: "skill-group",
  name: "Skill group",
  stage: 2,
  center: false,
  lede: "One row per skill group, a label beside the tags it names, stacked between hairlines into a definition list.",
  controls: {
    group: select("Group", ["all", ...skills.map((group) => group.name)], "all"),
  },
  spec: {
    folder: "src/components/SkillGroup/",
    props: [
      "SkillGroup: group (a SkillGroup from src/content/skills.ts)",
      "SkillTable: groups, one SkillGroup row per group",
    ],
    tokens: [
      "Row: label column 2fr, tags column 6fr, 24 px column gap, 16 px vertical padding",
      "Label: muted Label; tags: TagList",
      "Border hairline above every row and below the table",
      "Phone: one column, label above the tags with an 8 px gap",
    ],
    motion: ["None"],
    a11y: [
      "A dl; each row is a div holding one dt and one dd",
      "Each tag list is named after its group",
    ],
  },
  render: (args) => <SkillTable groups={groupsFor(args.group)} />,
  usage: (args) => {
    if (args.group === "all") {
      return "<SkillTable groups={skills} />";
    }

    return `<SkillTable groups={skills.filter((group) => group.name === ${JSON.stringify(args.group)})} />`;
  },
});
