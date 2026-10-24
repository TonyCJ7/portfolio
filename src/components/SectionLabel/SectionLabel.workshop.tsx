import { defineEntry, jsx, text } from "@/app/workshop/controls";
import SectionLabel from "./SectionLabel";

const PLACEHOLDER_PARAGRAPHS = [
  "This paragraph stands in for section content. It only shows how the heading sits above the text that follows it.",
  "On a phone the heading becomes a bar that sticks to the top of the scrolling area while this text moves beneath it.",
  "The bar is translucent and blurred, so the lines passing under it stay faintly visible without hurting legibility.",
  "Scroll further to see the bar stay in place. Its edges reach the page gutter on both sides.",
  "Content keeps flowing under the bar for as long as the section is tall, and the heading stays readable the whole time.",
  "The heading text turns from muted to full strength on a phone, so it reads clearly over the blurred background.",
  "A last paragraph gives the scene enough height to scroll well past the bar.",
];

export const entry = defineEntry({
  id: "section-label",
  name: "Section label",
  stage: 1,
  center: false,
  lede: "The uppercase heading that opens a section, and on a phone a sticky translucent bar that stays at the top while the section scrolls.",
  controls: {
    text: text("Text", "Experience", 11),
  },
  spec: {
    folder: "src/components/SectionLabel/",
    props: [
      "id: the heading id; the section points at it with aria-labelledby",
      "children: the label text",
    ],
    tokens: [
      "Ground at 60% opacity with an 8 px backdrop blur on phone",
      "Line: 1 px bottom border on phone",
      "Label: Text Muted on desktop, Text on phone",
    ],
    motion: ["none"],
    a11y: [
      "h2 with id; the section carries aria-labelledby and scroll-mt-24 phone:scroll-mt-14",
    ],
  },
  render: (args, ctx) => {
    const label = (
      <SectionLabel id="experience">{String(args.text)}</SectionLabel>
    );

    if (ctx.device === "phone") {
      return (
        <div className="-mx-(--gutter) h-[480px] overflow-y-auto px-(--gutter)">
          {label}
          {PLACEHOLDER_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph} className="py-4 text-body text-fg-2">
              {paragraph}
            </p>
          ))}
        </div>
      );
    }

    return (
      <div>
        {label}
        <p className="pt-4 text-body text-fg-2">{PLACEHOLDER_PARAGRAPHS[0]}</p>
      </div>
    );
  },
  usage: (args) => jsx("SectionLabel", { id: "experience" }, String(args.text)),
});
