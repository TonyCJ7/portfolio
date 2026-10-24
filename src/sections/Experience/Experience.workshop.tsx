import { defineEntry, toggle } from "@/app/workshop/controls";
import { profile } from "@/content/profile";
import ExperienceSection from "./Experience";

const CV_HREF = `/${profile.cvFile}`;

export const entry = defineEntry({
  id: "experience",
  name: "Experience",
  stage: 3,
  center: false,
  lede: "The Experience section of the home page's right column: the label, the experience rows and, when the CV file exists, a link to it. Hovering a row dims the others. On a phone the label sticks as a bar while the rows scroll under it.",
  controls: {
    cv: toggle("CV file present", true),
  },
  spec: {
    folder: "src/sections/Experience/",
    props: [
      "cvHref: the CV file's URL; omitted, the résumé link is not rendered",
      "the label comes from sectionLabel(\"experience\") in src/content/nav.ts, the rows from src/content/experience.ts and the link text from profile.cvLinkText",
    ],
    tokens: [
      "Rows: ExperienceList, 48 px apart; hovering or focusing one dims its siblings to 50% opacity",
      "32 px between the label and the first row, and between the last row and the résumé link",
      "Résumé link: Link kind arrow, text-title Text, Accent Text on hover and focus; opens the PDF in a new tab",
      "Label: SectionLabel, a sticky frosted bar on phone",
    ],
    motion: [
      "Sibling dim: rows fade to 50% opacity over 150 ms with the standard curve; under reduced motion the opacity changes at once",
      "Arrow: a 75 ms nudge up and right on hover and focus; under reduced motion it jumps to its hover position at once",
    ],
    a11y: [
      "section with id experience and aria-labelledby experience-label, so its accessible name is the h2's text, Experience",
      "scroll-mt-24 phone:scroll-mt-14 set the landing offset of a hash jump: 96 px on desktop, 56 px on phone",
      "The résumé link is left out, not disabled, when there is no file; it opens in a new tab with rel noopener noreferrer",
    ],
  },
  render: (args, ctx) => {
    const section = <ExperienceSection cvHref={args.cv ? CV_HREF : undefined} />;

    if (ctx.device === "phone") {
      return (
        <div className="-mx-(--gutter) h-[480px] overflow-y-auto px-(--gutter)">
          {section}
        </div>
      );
    }

    return section;
  },
  usage: (args) => {
    if (args.cv) {
      return `<ExperienceSection cvHref="${CV_HREF}" />`;
    }

    return "<ExperienceSection />";
  },
});
