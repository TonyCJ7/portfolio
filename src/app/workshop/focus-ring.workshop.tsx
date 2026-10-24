import { defineEntry, select } from "./controls";

const TARGET_CLASS = "rounded-sm border border-line bg-surface px-4 py-2 text-title text-fg";

export const entry = defineEntry({
  id: "focus-ring",
  name: "Focus ring",
  stage: 1,
  center: true,
  lede: "One rule for every keyboard user: a two-pixel tangerine outline, offset by two, on focus-visible only. Pointer clicks show nothing.",
  controls: {
    target: select("Target", ["button", "link", "input"], "button"),
    state: select("State", ["rest", "focus"], "focus"),
  },
  spec: {
    folder: "src/app/globals.css",
    props: ["No component; one global rule on :focus-visible"],
    tokens: [
      "outline-color Tangerine; offset 2px",
      "3.9:1 on ink, 3.3:1 on paper",
      "Radius inherited from the control",
    ],
    motion: ["None"],
    a11y: [
      "focus-visible only, never :focus",
      "Mirrors hover: every hover state is also a focus state",
    ],
  },
  render: (args) => {
    if (args.target === "link") {
      return (
        <a href="#" className={`${TARGET_CLASS} underline-offset-4`}>
          A link
        </a>
      );
    }

    if (args.target === "input") {
      return (
        <input
          type="text"
          name="focus-ring-sample"
          defaultValue="An input"
          aria-label="Sample input"
          className={TARGET_CLASS}
        />
      );
    }

    return (
      <button type="button" className={TARGET_CLASS}>
        A button
      </button>
    );
  },
  usage: () => ':focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }',
});
