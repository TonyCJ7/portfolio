import type { ReactNode } from "react";
import { defineEntry, jsx, select, text, toggle } from "@/app/workshop/controls";
import Label from "./Label";

const SIZE = { heading: "heading", "12": 12, "11": 11 } as const;

export const entry = defineEntry({
  id: "label",
  name: "Label",
  stage: 1,
  center: true,
  lede: "The small mono caption used for section names, dates, places and the nav. Uppercase comes from CSS, so the text stays readable to screen readers.",
  controls: {
    tone: select("Tone", ["muted", "active", "accent"], "muted"),
    size: select("Size", ["heading", "12", "11"], "12"),
    as: select("Element", ["span", "time", "a"], "span"),
    interactive: toggle("Interactive", false),
    state: select("State", ["rest", "hover"], "rest"),
    text: text("Text", "Experience", 24),
  },
  spec: {
    folder: "src/components/Label/",
    props: [
      "tone: muted | active | accent (default muted)",
      "size: heading | 12 | 11 (default 12; heading is the section label, 14 px on desktop and 16 px on phone; 11 is the place line)",
      "as: span | time | a (time needs dateTime, a needs href)",
      "interactive: Text on its group's hover, focus, press and aria-current (the nav link and the theme toggle word); the State select previews hover",
      "className, children",
    ],
    tokens: [
      "Geist Mono 600, 0.06em tracking, uppercase via CSS",
      "heading: text-label-lg 14 px at 700, text-label-xl 16 px at 700 on phone / text-label 12 px / text-label-sm 11 px",
      "Muted, Text or Tangerine Text",
    ],
    motion: ["Colour 150 ms when used in NavLink"],
    a11y: [
      "Uppercase by text-transform, never typed",
      "Dates in a time element with datetime",
    ],
  },
  render: (args) => {
    const shared = {
      tone: args.tone,
      size: SIZE[args.size],
      interactive: args.interactive,
    };
    const frame = (label: ReactNode) => (
      <span data-state={args.state === "hover" ? "hover" : undefined}>
        <span className="group">{label}</span>
      </span>
    );

    if (args.as === "time") {
      return frame(
        <Label as="time" dateTime="2026-01" {...shared}>
          {args.text}
        </Label>,
      );
    }

    if (args.as === "a") {
      return frame(
        <Label as="a" href="#" {...shared}>
          {args.text}
        </Label>,
      );
    }

    return frame(<Label {...shared}>{args.text}</Label>);
  },
  usage: (args) =>
    jsx(
      "Label",
      {
        tone: args.tone === "muted" ? undefined : args.tone,
        size: args.size === "12" ? undefined : args.size,
        interactive: args.interactive || undefined,
        as: args.as === "span" ? undefined : args.as,
        dateTime: args.as === "time" ? "2026-01" : undefined,
        href: args.as === "a" ? "#experience" : undefined,
      },
      args.text,
    ),
});
