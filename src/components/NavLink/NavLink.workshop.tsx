import { defineEntry, jsx, select, text } from "@/app/workshop/controls";
import NavLink from "./NavLink";

export const entry = defineEntry({
  id: "nav-link",
  name: "Nav link",
  stage: 1,
  center: true,
  lede: "A section link for the sticky navigation: a short line that grows and a mono label that brightens on hover, focus and when active.",
  controls: {
    state: select("State", ["rest", "hover", "active", "focus"], "rest"),
    text: text("Text", "Experience", 11),
  },
  spec: {
    folder: "src/components/NavLink/",
    props: [
      "href: the section hash, for example #experience",
      "active: marks the current section (default false)",
      "children: the label text",
    ],
    tokens: [
      "Label: mono uppercase label, Text Muted at rest, Text on hover, focus and when active",
      "Line: 1 px tall, current color, 32 px at rest and 64 px on hover, focus and when active",
    ],
    motion: [
      "Line: a 64 px line scaled 0.5 → 1 from its left edge (32 → 64 px) over 150 ms standard, and the label slides 32 px right with it; colour 150 ms",
      "Under reduced motion the line and the label jump at once, the colour fades stay",
    ],
    a11y: [
      "aria-current on the active link",
      "Label text stays visible at rest in fg-muted, 4.6:1 in light",
    ],
  },
  render: (args) => (
    <NavLink href="#experience" active={args.state === "active"}>
      {String(args.text)}
    </NavLink>
  ),
  usage: (args) =>
    jsx(
      "NavLink",
      {
        href: "#experience",
        active: args.state === "active" ? true : undefined,
      },
      String(args.text),
    ),
});
