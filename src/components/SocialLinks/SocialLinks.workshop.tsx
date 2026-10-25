import type { ComponentProps } from "react";
import { defineEntry, select } from "@/app/workshop/controls";
import SocialLinks from "./SocialLinks";

function forcedItem(
  itemState: string,
  item: string,
): ComponentProps<typeof SocialLinks>["forced"] {
  if (itemState === "hover" || itemState === "focus") {
    return { index: Number(item) - 1, state: itemState };
  }

  return undefined;
}

export const entry = defineEntry({
  id: "social-links",
  name: "Social links",
  stage: 2,
  center: true,
  lede: "GitHub, LinkedIn and email as a wrapping row of muted mono labels, the one place the site lists them: the bottom of the intro column on desktop, under the buttons on a phone.",
  controls: {
    itemState: select("State", ["rest", "hover", "focus"], "rest"),
    item: select("On item", ["1", "2", "3"], "2"),
  },
  spec: {
    folder: "src/components/SocialLinks/",
    props: [
      "forced (Workshop only): { index, state } sets data-state hover or focus on one of the three links",
    ],
    tokens: [
      "Links: Link kind social, text-label mono uppercase in Muted; hover and focus turn it Text",
      "Row: wraps, 20 px between items, 8 px between wrapped lines; each item is flex so its line box is the label's 16.2 px, not the body's 24",
    ],
    motion: ["Color 150 ms from Link; no transform, so reduced motion keeps it"],
    a11y: [
      "A ul named Social links; each link reads its short name: GitHub, LinkedIn, Email",
      "GitHub and LinkedIn open in a new tab with rel noopener noreferrer; Email is a mailto link in place",
    ],
  },
  render: (args) => <SocialLinks forced={forcedItem(args.itemState, args.item)} />,
  usage: () => "<SocialLinks />",
});
