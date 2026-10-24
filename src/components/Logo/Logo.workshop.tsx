import { defineEntry, jsx, select } from "@/app/workshop/controls";
import LogoLink from "./LogoLink";

export const entry = defineEntry({
  id: "logo",
  name: "Logo",
  stage: 1,
  center: true,
  lede: "The tj mark as a link home, with a small wiggle on hover and the shared focus ring on the keyboard.",
  controls: {
    state: select("State", ["rest", "hover", "focus"], "rest"),
    size: select("Size", ["44", "36"], "44"),
  },
  spec: {
    folder: "src/components/Logo/",
    props: [
      "size: 44 | 36 | 28 (default 44; 28 is the Workshop header)",
      "href (default /)",
    ],
    tokens: [
      "Letters in Text, dot in Tangerine",
      "rounded-lg link so the focus ring follows the corner",
    ],
    motion: [
      "Rotate 0 → -6 → 0 over 833 ms spring, origin 50% 60%; none under reduced motion",
    ],
    a11y: [
      "The link is named Home; the mark inside is named tj mark",
      "2 px Tangerine focus ring on keyboard focus",
    ],
  },
  render: (args) => <LogoLink size={Number(args.size) as 44 | 36} />,
  usage: (args) =>
    jsx("LogoLink", { size: args.size === "44" ? undefined : args.size }),
});
