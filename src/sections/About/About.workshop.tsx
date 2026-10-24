import { defineEntry } from "@/app/workshop/controls";
import PhoneScrollScene from "@/app/workshop/_components/PhoneScrollScene/PhoneScrollScene";
import About from "./About";

export const entry = defineEntry({
  id: "about",
  name: "About",
  stage: 3,
  center: false,
  lede: "The first section of the home page's right column: the About label and its paragraphs. On a phone the label sticks as a bar while the text scrolls under it.",
  controls: {},
  spec: {
    folder: "src/sections/About/",
    props: [
      "none; the label comes from sectionLabel(\"about\") in src/content/nav.ts and the paragraphs from src/content/about.ts",
    ],
    tokens: [
      "Paragraphs: text-body in Text 2, capped at the measure (36rem), 16 px apart",
      "24 px between the label and the first paragraph, 16 px on phone",
      "Label: SectionLabel, a sticky frosted bar on phone",
    ],
    motion: ["none"],
    a11y: [
      "section with id about and aria-labelledby about-label, so its accessible name is the h2's text, About",
      "scroll-mt-24 phone:scroll-mt-14 set the landing offset of a hash jump: 96 px on desktop, 56 px on phone",
    ],
  },
  render: (_args, ctx) => {
    if (ctx.device === "phone") {
      return (
        <PhoneScrollScene>
          <About />
        </PhoneScrollScene>
      );
    }

    return <About />;
  },
  usage: () => "<About />",
});
