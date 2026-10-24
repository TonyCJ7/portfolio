import { defineEntry, toggle } from "@/app/workshop/controls";
import { education } from "@/content/education";
import EducationRow from "./EducationRow";

export const entry = defineEntry({
  id: "education-row",
  name: "Education row",
  stage: 2,
  center: false,
  lede: "One degree between hairlines, its dates beside the degree and school, with an optional languages line below.",
  controls: {
    languages: toggle("Languages line", true),
  },
  spec: {
    folder: "src/components/EducationRow/",
    props: [
      "EducationRow: education (the Education from src/content/education.ts), showLanguages (default true)",
    ],
    tokens: [
      "Row: dates column 2fr, degree column 6fr, 24 px column gap; Border hairline above and below, 16 px vertical padding",
      "Dates: muted Label as a block, 4 px top padding to sit level with the degree's first line",
      "Degree: text-title Text; school: text-small Text 2, 4 px below; both wrap anywhere so an unbroken name stays in its column",
      "Languages: text-small Text 2, 16 px below the lower hairline",
      "Phone: one column, dates above the degree with an 8 px gap",
    ],
    motion: ["None"],
    a11y: [
      "A dl with one dt and one dd; the dates in a time element with datetime",
      "The languages line is a paragraph outside the list",
    ],
  },
  render: (args) => <EducationRow education={education} showLanguages={args.languages} />,
  usage: (args) => {
    if (args.languages) {
      return "<EducationRow education={education} />";
    }

    return "<EducationRow education={education} showLanguages={false} />";
  },
});
