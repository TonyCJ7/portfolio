import { defineEntry } from "@/app/workshop/controls";
import Colophon from "./Colophon";

export const entry = defineEntry({
  id: "colophon",
  name: "Colophon",
  stage: 2,
  center: false,
  lede: "The small footer under the home page's right column: how the site is built and a link to this workshop. Phones get a shorter sentence.",
  controls: {},
  spec: {
    folder: "src/components/Colophon/",
    props: ["none; the long and short sentences and the link text come from src/content/colophon.ts"],
    tokens: [
      "Footer: 48 px above, capped at the measure (36rem), text-small in Muted",
      "Long sentence on desktop, short sentence on phones; the other one is display none",
      "Link: Link kind arrow-small to /workshop, 8 px below the sentence; text-small at medium weight in Text, Tangerine Text on hover and focus",
    ],
    motion: [
      "Arrow moves 4 px up and right over 75 ms on hover and focus; the colour changes at once",
      "Reduced motion: the arrow jumps to its hover position with no transition",
    ],
    a11y: [
      "On the page it is the contentinfo landmark because it sits outside main; inside the Workshop frame it is a plain footer",
      "Only one sentence is in the accessibility tree at a time",
      "The arrow is aria-hidden, so the link reads its words only",
      "/workshop redirects to the Tokens entry",
    ],
  },
  render: () => <Colophon />,
  usage: () => "<Colophon />",
});
