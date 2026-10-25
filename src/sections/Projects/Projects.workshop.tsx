import { defineEntry } from "@/app/workshop/controls";
import PhoneScrollScene from "@/app/workshop/_components/PhoneScrollScene/PhoneScrollScene";
import ProjectsSection from "./Projects";

export const entry = defineEntry({
  id: "projects",
  name: "Projects",
  stage: 3,
  center: false,
  lede: "The Projects section of the home page's right column: the label and the project rows, personal work first. Hovering a row dims the others. On a phone the label sticks as a bar while the rows scroll under it.",
  controls: {},
  spec: {
    folder: "src/sections/Projects/",
    props: [
      "none: the label comes from sectionLabel(\"projects\") in src/content/nav.ts and the rows from src/content/projects.ts",
    ],
    tokens: [
      "Rows: ProjectList, 48 px apart; hovering or focusing one dims its siblings to 50% opacity",
      "32 px between the label and the first row (24 px on phone)",
      "Label: SectionLabel, a sticky frosted bar on phone",
    ],
    motion: [
      "Sibling dim: rows fade to 50% opacity over 150 ms with the standard curve; under reduced motion the opacity changes at once",
    ],
    a11y: [
      "section with id projects and aria-labelledby projects-label, so its accessible name is the h2's text, Projects",
      "scroll-mt-24 phone:scroll-mt-14 set the landing offset of a hash jump: 96 px on desktop, 56 px on phone",
    ],
  },
  render: (_args, ctx) => {
    if (ctx.device === "phone") {
      return (
        <PhoneScrollScene>
          <ProjectsSection />
        </PhoneScrollScene>
      );
    }

    return <ProjectsSection />;
  },
  usage: () => "<ProjectsSection />",
});
