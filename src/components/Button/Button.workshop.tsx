import {
  defineEntry,
  jsx,
  select,
  STATES,
  text,
  toggle,
} from "@/app/workshop/controls";
import Button from "./Button";

export const entry = defineEntry({
  id: "button",
  name: "Button",
  stage: 1,
  center: true,
  lede: "The pill button in two variants, a filled primary with an arrow and a quiet ghost, used as a button or a link.",
  controls: {
    variant: select("Variant", ["primary", "ghost"], "primary"),
    state: select("State", STATES, "rest"),
    label: text("Label", "Get in touch", 18),
    arrow: toggle("Arrow (primary)", true),
    pair: toggle("Show the pair", false),
  },
  spec: {
    folder: "src/components/Button/",
    props: [
      "variant: primary | ghost (default primary)",
      "href: renders a link; next/link for paths, a plain anchor for # and external",
      "onClick: used when there is no href, renders a button",
      "arrow (default true for primary, false for ghost)",
    ],
    tokens: [
      "Primary: Tangerine fill, Ink text, Tangerine Text on hover",
      "Ghost: Line border, Text color, Surface on hover, Surface Hover when pressed",
      "text-title, full radius, 20 px side padding",
    ],
    motion: [
      "Background, color and scale 150 ms standard; arrow 75 ms translate; none under reduced motion",
    ],
    a11y: [
      "Ink on tangerine 5.8:1 at rest, 7.8:1 on dark hover, 3.5:1 on light hover",
      "Pressed shown on :active",
      "Min height 44 px",
      "Arrow is hidden from screen readers",
    ],
  },
  render: (args) => {
    if (args.pair) {
      return (
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">{args.label}</Button>
          <Button variant="ghost">{args.label}</Button>
        </div>
      );
    }

    if (args.variant === "ghost") {
      return <Button variant="ghost">{args.label}</Button>;
    }

    return <Button arrow={args.arrow}>{args.label}</Button>;
  },
  usage: (args) => {
    if (args.pair) {
      return `${jsx("Button", {}, args.label)}\n${jsx("Button", { variant: "ghost" }, args.label)}`;
    }

    if (args.variant === "ghost") {
      return jsx("Button", { variant: "ghost" }, args.label);
    }

    if (args.arrow) {
      return jsx("Button", {}, args.label);
    }

    return `<Button arrow={false}>${args.label}</Button>`;
  },
});
