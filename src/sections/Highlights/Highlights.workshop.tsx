import { defineEntry } from "@/app/workshop/controls";
import PhoneScrollScene from "@/app/workshop/_components/PhoneScrollScene/PhoneScrollScene";
import Highlights from "./Highlights";

export const entry = defineEntry({
  id: "highlights",
  name: "Highlights",
  stage: 3,
  center: false,
  lede: "The Highlights section of the home page's right column: the label and the grid of highlight tiles. Hovering a tile lifts it above its neighbours. On a phone the label sticks as a bar while the tiles scroll under it.",
  controls: {},
  spec: {
    folder: "src/sections/Highlights/",
    props: [
      "none; the label comes from sectionLabel(\"highlights\") in src/content/nav.ts and the tiles from src/content/highlights.ts",
    ],
    tokens: [
      "Tiles: HighlightGrid, two columns on desktop and one on phone, split by 1 px Border hairlines",
      "32 px between the label and the grid",
      "Label: SectionLabel, a sticky frosted bar on phone",
    ],
    motion: [
      "Tile lift: Surface Lift fill and shadow-lift over 150 ms with the standard curve on hover; no transform, so reduced motion keeps it",
    ],
    a11y: [
      "section with id highlights and aria-labelledby highlights-label, so its accessible name is the h2's text, Highlights",
      "scroll-mt-24 phone:scroll-mt-14 set the landing offset of a hash jump: 96 px on desktop, 56 px on phone",
      "The grid is isolate, so a lifted tile stacks only among the tiles and never paints over the sticky label bar",
    ],
  },
  render: (_args, ctx) => {
    if (ctx.device === "phone") {
      return (
        <PhoneScrollScene>
          <Highlights />
        </PhoneScrollScene>
      );
    }

    return <Highlights />;
  },
  usage: () => "<Highlights />",
});
