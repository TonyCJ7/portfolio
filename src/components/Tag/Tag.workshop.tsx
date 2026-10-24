import { defineEntry, text, toggle } from "@/app/workshop/controls";
import TagList from "./TagList";

const FRONTEND_GROUP = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Sass",
  "styled-components",
  "Emotion",
  "Material UI",
  "REST APIs",
];

export const entry = defineEntry({
  id: "tag",
  name: "Tag",
  stage: 1,
  center: true,
  lede: "The small pill that names a tool or technology, grouped in a labeled list that wraps to the next row.",
  controls: {
    text: text("Text", "Next.js", 18),
    many: toggle("Whole Frontend group", false),
  },
  spec: {
    folder: "src/components/Tag/",
    props: [
      "Tag: children",
      "TagList: items, label (default Tools, read out as the list name)",
    ],
    tokens: [
      "Tangerine Soft fill with Tangerine Text",
      "text-small 14 px, weight 500, full radius",
      "12 px by 4 px padding, 8 px gap in the list",
    ],
    motion: ["None"],
    a11y: [
      "A ul with an aria-label, each tag an li",
      "Long names wrap inside the pill, never clip",
    ],
  },
  render: (args) => (
    <TagList items={args.many ? FRONTEND_GROUP : [args.text]} />
  ),
  usage: (args) => {
    if (args.many) {
      return "<TagList items={skills[0].items} />";
    }

    return `<TagList items={[${JSON.stringify(args.text)}]} />`;
  },
});
