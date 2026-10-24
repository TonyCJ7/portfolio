import { defineEntry, jsx, select } from "@/app/workshop/controls";
import Label from "@/components/Label/Label";
import Logo from "@/components/Logo/Logo";
import SkipLink from "./SkipLink";

const FRAME_STATE = {
  hidden: undefined,
  focused: "focus",
};

const HEADER_WORDS = ["About", "Experience", "Contact"];

export const entry = defineEntry({
  id: "skip-link",
  name: "Skip link",
  stage: 1,
  center: false,
  lede: "The first link on the page, kept above the viewport until a keyboard user tabs to it, then a pill that jumps past the header to the content.",
  controls: {
    state: select("State", ["hidden", "focused"], "focused"),
  },
  spec: {
    folder: "src/components/SkipLink/",
    props: ["href: the hash of the main landmark (default #main)"],
    tokens: [
      "Surface fill, Text, Lift shadow, Title type",
      "16 px from the top left, full radius",
    ],
    motion: ["none: appears instantly on focus"],
    a11y: [
      "first focusable element on the page; visible only on keyboard focus; target carries tabIndex -1 so focus lands",
    ],
  },
  render: (args) => (
    <div data-state={FRAME_STATE[args.state]} className="relative h-60">
      <div className="flex items-center gap-4 text-fg-muted">
        <Logo size={28} />
        {HEADER_WORDS.map((word) => (
          <Label key={word}>{word}</Label>
        ))}
      </div>
      <SkipLink href="#main" />
    </div>
  ),
  usage: () => jsx("SkipLink", { href: "#main" }),
});
