import { defineEntry } from "@/app/workshop/controls";
import PhoneScrollScene from "@/app/workshop/_components/PhoneScrollScene/PhoneScrollScene";
import Skills from "./Skills";

export const entry = defineEntry({
  id: "skills",
  name: "Skills",
  stage: 3,
  center: false,
  lede: "The Skills section of the home page's right column: the label and the skill table. On a phone the label sticks as a bar while the table scrolls under it.",
  controls: {},
  spec: {
    folder: "src/sections/Skills/",
    props: [
      "none; the label comes from sectionLabel(\"skills\") in src/content/nav.ts and the groups from src/content/skills.ts",
    ],
    tokens: [
      "Table: SkillTable, one row per group between Border hairlines; tags wrap inside their column",
      "32 px between the label and the table",
      "Label: SectionLabel, a sticky frosted bar on phone",
    ],
    motion: ["none"],
    a11y: [
      "section with id skills and aria-labelledby skills-label, so its accessible name is the h2's text, Skills",
      "scroll-mt-24 phone:scroll-mt-14 set the landing offset of a hash jump: 96 px on desktop, 56 px on phone",
    ],
  },
  render: (_args, ctx) => {
    if (ctx.device === "phone") {
      return (
        <PhoneScrollScene>
          <Skills />
        </PhoneScrollScene>
      );
    }

    return <Skills />;
  },
  usage: () => "<Skills />",
});
