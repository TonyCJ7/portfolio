import { defineEntry, toggle } from "@/app/workshop/controls";
import PhoneScrollScene from "@/app/workshop/_components/PhoneScrollScene/PhoneScrollScene";
import Skills from "./Skills";

export const entry = defineEntry({
  id: "skills",
  name: "Skills",
  stage: 3,
  center: false,
  lede: "The Skills section of the home page's right column: the label, the skill table and, under it, the Education subheading with the degree row. On a phone the label sticks as a bar while the table scrolls under it.",
  controls: {
    education: toggle("With education", true),
  },
  spec: {
    folder: "src/sections/Skills/",
    props: [
      "showEducation (default true); false leaves out the Education subheading and row together",
      "the label comes from sectionLabel(\"skills\") in src/content/nav.ts, the groups from src/content/skills.ts, and the subheading text and degree from src/content/education.ts",
    ],
    tokens: [
      "Table: SkillTable, one row per group between Border hairlines; tags wrap inside their column",
      "32 px between the label and the table",
      "Education subheading: an h3 holding a muted Label, 48 px below the table",
      "Degree: EducationRow with its languages line, 16 px below the subheading",
      "Label: SectionLabel, a sticky frosted bar on phone",
    ],
    motion: ["none"],
    a11y: [
      "section with id skills and aria-labelledby skills-label, so its accessible name is the h2's text, Skills",
      "Education is an h3, one level under the section's h2; it is not a nav section",
      "scroll-mt-24 phone:scroll-mt-14 set the landing offset of a hash jump: 96 px on desktop, 56 px on phone",
    ],
  },
  render: (args, ctx) => {
    const section = <Skills showEducation={args.education} />;

    if (ctx.device === "phone") {
      return (
        <PhoneScrollScene>
          {section}
        </PhoneScrollScene>
      );
    }

    return section;
  },
  usage: (args) => {
    if (args.education) {
      return "<Skills />";
    }

    return "<Skills showEducation={false} />";
  },
});
