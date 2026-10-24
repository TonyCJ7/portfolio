import { defineEntry, select, text } from "./controls";
import TokensScene from "./_components/TokensScene/TokensScene";

export const entry = defineEntry({
  id: "tokens",
  name: "Tokens",
  stage: 1,
  lede: "The colors and type steps every component is built from, in both schemes.",
  controls: {
    show: select("Show", ["both", "color", "type"], "both"),
    sample: text("Sample", "Tony Cherian Jacob", 32),
  },
  spec: {
    folder: "src/app/globals.css",
    props: [
      "Colors: ground, surface, surface-hover, line, fg, fg-2, fg-muted, accent, accent-text, accent-soft, ink",
      "Type: display, stat, headline, tagline, title, body, small, label, label-sm, headline-phone",
      "Radii: xs 2, sm 6, lg 8, md 12, full",
      "Widths: page 1200, measure 36rem, lede 26rem",
    ],
    tokens: [
      "Colors as listed, both schemes",
      "Radii 6, 12, pill",
      "Space 4 base",
    ],
    motion: [
      "75 150 300 500 ms; spring 833 ms",
      "standard and out curves",
    ],
    a11y: [
      "Contrast AA in both schemes",
      "Every animation behind reduced motion",
    ],
  },
  render: (args, ctx) => <TokensScene show={args.show} sample={args.sample} ctx={ctx} />,
  usage: (args) => `<p className="text-display text-fg">${args.sample}</p>`,
});
