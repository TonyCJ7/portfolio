import { defineEntry, jsx, select, STATES } from "@/app/workshop/controls";
import ThemeToggle from "./ThemeToggle";

export const entry = defineEntry({
  id: "theme-toggle",
  name: "Theme toggle",
  stage: 1,
  center: true,
  lede: "Text pill on desktop, icon-only on phone. Click it here and the frame switches scheme, the same way the site will.",
  controls: {
    state: select("State", STATES, "rest"),
    size: select("Size", ["auto", "text", "icon"], "auto"),
  },
  spec: {
    folder: "src/components/ThemeToggle/",
    props: [
      "size: auto | text | icon (default auto; auto drops the word on phone)",
      "Switches the nearest [data-scheme] ancestor, otherwise html[data-theme] and tj-theme",
    ],
    tokens: [
      "Dot 10 px: Tangerine fill in dark, 2 px Text ring in light",
      "Word: mono label, Text Muted at rest, Text on hover, focus and pressed",
      "Surface fill and Line border on hover, Surface when pressed, full radius",
    ],
    motion: [
      "Color 150 ms standard; dot scales to 0.6 over 75 ms while pressed",
      "Site switch: View Transitions circle from the toggle, 500 ms out curve",
      "300 ms crossfade without View Transitions; instant under reduced motion",
    ],
    a11y: [
      "aria-pressed is true in light; aria-label names the scheme it switches to",
      "Min 44 x 44 px hit area, icon form included",
      "Dot is hidden from screen readers",
    ],
  },
  render: (args) => <ThemeToggle size={args.size} />,
  usage: (args) =>
    jsx("ThemeToggle", { size: args.size === "auto" ? undefined : args.size }),
});
