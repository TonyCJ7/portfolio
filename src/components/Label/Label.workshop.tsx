import { defineEntry, jsx, select, text } from "@/app/workshop/controls";
import Label from "./Label";

export const entry = defineEntry({
  id: "label",
  name: "Label",
  stage: 1,
  center: true,
  lede: "The small mono caption used for section names, dates, places and the nav. Uppercase comes from CSS, so the text stays readable to screen readers.",
  controls: {
    tone: select("Tone", ["muted", "active", "accent"], "muted"),
    size: select("Size", ["12", "11"], "12"),
    as: select("Element", ["span", "time", "a"], "span"),
    text: text("Text", "Experience", 24),
  },
  spec: {
    folder: "src/components/Label/",
    props: [
      "tone: muted | active | accent (default muted)",
      "size: 12 | 11 (default 12; 11 is the place line)",
      "as: span | time | a (time needs dateTime, a needs href)",
      "className, children",
    ],
    tokens: [
      "Geist Mono 600, 0.06em tracking, uppercase via CSS",
      "text-label 12 px / text-label-sm 11 px",
      "Muted, Text or Tangerine Text",
    ],
    motion: ["Colour 150 ms when used in NavLink"],
    a11y: [
      "Uppercase by text-transform, never typed",
      "Dates in a time element with datetime",
    ],
  },
  render: (args) => {
    const size = args.size === "11" ? 11 : 12;
    const tone = args.tone;

    if (args.as === "time") {
      return (
        <Label as="time" dateTime="2026-01" tone={tone} size={size}>
          {args.text}
        </Label>
      );
    }

    if (args.as === "a") {
      return (
        <Label as="a" href="#" tone={tone} size={size}>
          {args.text}
        </Label>
      );
    }

    return (
      <Label tone={tone} size={size}>
        {args.text}
      </Label>
    );
  },
  usage: (args) =>
    jsx(
      "Label",
      {
        tone: args.tone === "muted" ? undefined : args.tone,
        size: args.size === "12" ? undefined : args.size,
        as: args.as === "span" ? undefined : args.as,
        dateTime: args.as === "time" ? "2026-01" : undefined,
        href: args.as === "a" ? "#experience" : undefined,
      },
      args.text,
    ),
});
