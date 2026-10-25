import type { CSSProperties } from "react";
import { defineEntry, jsx, select, toggle } from "@/app/workshop/controls";
import Spotlight from "./Spotlight";

const SPOT_RGB = {
  dark: "255, 92, 26",
  light: "184, 53, 10",
};

const PLACEHOLDER_LINES = [
  "This text stands in for page content. The glow sits beneath it and follows the pointer.",
  "Move across the lines to see the light pass under the words without covering them.",
  "The layer ignores the pointer, so text stays selectable and links stay clickable.",
];

export const entry = defineEntry({
  id: "spotlight",
  name: "Spotlight",
  stage: 1,
  center: false,
  lede: "The lamp under the content. Move the pointer over the stage.",
  controls: {
    on: toggle("Fine pointer", true),
    alpha: select("Alpha", ["spec", "0.05", "0.10", "0.14", "0.18", "0.24"], "spec"),
  },
  spec: {
    folder: "src/components/Spotlight/",
    props: ["none"],
    tokens: [
      "Dark Tangerine 0.08; light Tangerine Text 0.06, the darker tone so the spot reads on paper",
    ],
    motion: [
      "opacity 300 ms standard on first move; position follows the pointer per frame; absent under reduced motion and on coarse pointers",
    ],
    a11y: ["aria-hidden, pointer-events none, decorative"],
  },
  render: (args, ctx) => {
    const style = args.alpha === "spec"
      ? undefined
      : ({ "--spot": `rgba(${SPOT_RGB[ctx.scheme]}, ${args.alpha})` } as CSSProperties);
    const shown = args.on && ctx.motion !== "reduced";

    return (
      <div className="relative flex min-h-80 flex-col gap-4" style={style}>
        {shown
          ? <Spotlight />
          : <p className="text-small text-fg-muted">Hidden: coarse pointer or reduced motion</p>}
        {PLACEHOLDER_LINES.map((line) => (
          <p key={line} className="text-body text-fg-2">
            {line}
          </p>
        ))}
      </div>
    );
  },
  usage: () => jsx("Spotlight", {}),
});
