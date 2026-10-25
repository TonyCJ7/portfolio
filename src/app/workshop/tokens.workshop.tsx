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
      "Colors: ground, surface, surface-lift, surface-hover, line, fg, fg-2, fg-muted, accent, accent-text, accent-soft, focus-ring, spot, ink, accent-hover",
      "Type: display, stat, headline, headline-phone, tagline, title, body, small, label-xl (16 px, 700), label-lg (14 px, 700), label (12 px, 600), label-sm (11 px, 600); the label steps are mono and uppercase through Label",
      "Radii: xs 2, sm 6, lg 8, md 12, full",
      "Widths: page 1200, measure 36rem, lede 26rem",
      "Layout: grid-cols-label (a 156 px label column and the rest, for experience, project and skill rows); --gutter clamp(24px, 6vw, 48px)",
      "Shadow: shadow-lift (a 1 px inner top line and a soft drop, from --lift-line and --lift-shadow)",
      "Variants: phone (under 1024 px, or a phone frame), short (desktop windows under 896 px tall), hover, focus-visible, focus-visible-within, active, motion-reduce, motion-safe",
    ],
    tokens: [
      "Colors as listed, both schemes",
      "Radii xs 2, sm 6, lg 8, md 12, full",
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
