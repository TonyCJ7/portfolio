import type { ComponentProps } from "react";
import { defineEntry, jsx, select, toggle } from "@/app/workshop/controls";
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
  lede: "GitHub, LinkedIn and email as a wrapping row of muted mono labels, short names by default or full handles where there is room. With handles, the location follows the links as plain text.",
  controls: {
    handles: toggle("Handles", false),
    itemState: select("State", ["rest", "hover", "focus"], "rest"),
    item: select("On item", ["1", "2", "3"], "2"),
  },
  spec: {
    folder: "src/components/SocialLinks/",
    props: [
      "handles (default false): GitHub · TonyCJ7, LinkedIn · tonycj and the email address instead of the short names, then the location from profile.location as a fourth item that is not a link",
      "forced (Workshop only): { index, state } sets data-state hover or focus on one of the three links; the location has no state",
    ],
    tokens: [
      "Links: Link kind social, text-label mono uppercase in Muted; hover and focus turn it Text",
      "Row: wraps, 20 px between items, 8 px between wrapped lines; each item is flex so its line box is the label's 16.2 px, not the body's 24",
      "Location: a muted Label, the same mono type as the links, with no hover or focus change",
    ],
    motion: ["Color 150 ms from Link; no transform, so reduced motion keeps it"],
    a11y: [
      "A ul named Social links; each link reads its name or handle, and the location is plain text, not in the Tab order",
      "GitHub and LinkedIn open in a new tab with rel noopener noreferrer; Email is a mailto link in place",
    ],
  },
  render: (args) => (
    <SocialLinks
      handles={args.handles}
      forced={forcedItem(args.itemState, args.item)}
    />
  ),
  usage: (args) => jsx("SocialLinks", { handles: args.handles }),
});
