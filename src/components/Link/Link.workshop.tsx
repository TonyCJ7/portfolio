import {
  defineEntry,
  jsx,
  select,
  text,
} from "@/app/workshop/controls";
import Link from "./Link";

const DEFAULT_TEXT = {
  prose: "Almosafer",
  arrow: "Full résumé",
  "arrow-small": "See every component in the workshop",
  github: "WhatDoesThisDo",
  large: "tonycj1996@gmail.com",
  social: "GitHub",
};

const HREF = {
  prose: "https://almosafer.com",
  arrow: "/Tony-CJ-Resume.pdf",
  "arrow-small": "/workshop",
  github: "https://github.com/TonyCJ7/WhatDoesThisDo",
  large: "mailto:tonycj1996@gmail.com",
  social: "https://github.com/TonyCJ7",
};

export const entry = defineEntry({
  id: "link",
  name: "Link",
  stage: 1,
  center: true,
  lede: "The text link in six kinds: inline prose, an arrow link, a small arrow link, a GitHub link, a large link and a mono social link.",
  controls: {
    kind: select("Kind", ["prose", "arrow", "arrow-small", "github", "large", "social"], "prose"),
    state: select("State", ["rest", "hover", "focus"], "rest"),
    text: text("Text", "", 40),
  },
  spec: {
    folder: "src/components/Link/",
    props: [
      "kind: prose | arrow | arrow-small | github | large | social (default prose)",
      "href: next/link for site pages, a plain anchor for files such as /Tony_CJ_Resume.pdf, #, mailto: and external",
      "external: opens in a new tab",
      "className: extra classes appended last (the experience row adds its whole-row hit area)",
    ],
    tokens: [
      "Prose: text-fg, medium weight, Tangerine underline on hover and focus",
      "Arrow: text-title, Accent Text on hover and focus; 4 px padding above and after, so the focus ring holds the moved arrow",
      "Arrow small: text-small at medium weight, Text, Accent Text on hover and focus; the same arrow and padding as arrow (the colophon's workshop link)",
      "GitHub: the arrow kind's type, colour and padding with the 16 px GitHub mark in place of the arrow, 8 px after the text (the personal project rows)",
      "Large: text-headline, text-headline-phone on phone, Tangerine underline, Accent Text on hover and focus",
      "Social: mono label, uppercase, Text Muted, Text on hover and focus",
    ],
    motion: [
      "Prose and social fade their colour over 150 ms; arrow, arrow small, GitHub and large change colour at once; both arrow kinds 75 ms translate and the GitHub mark stays still; under reduced motion the arrow jumps to its hover position at once, and the prose and social fades stay",
    ],
    a11y: [
      "External links open in a new tab with rel noopener noreferrer",
      "Pressed equals hover",
      "Underline on hover and focus for prose",
      "Arrow is hidden from screen readers",
      "GitHub: the mark is hidden and a visually hidden \" on GitHub\" completes the name (\"WhatDoesThisDo on GitHub\")",
    ],
  },
  render: (args) => {
    const kind = args.kind as keyof typeof HREF;
    const label = args.text || DEFAULT_TEXT[kind];
    const link = (
      <Link
        kind={kind}
        href={HREF[kind]}
        external={HREF[kind].startsWith("http")}
      >
        {label}
      </Link>
    );

    if (kind === "prose") {
      return (
        <p className="max-w-measure text-body text-fg-2">
          A prose link such as {link} sits inside running text.
        </p>
      );
    }

    return link;
  },
  usage: (args) => {
    const kind = args.kind as keyof typeof HREF;
    const label = args.text || DEFAULT_TEXT[kind];
    const external = HREF[kind].startsWith("http");

    return jsx(
      "Link",
      {
        kind: kind === "prose" ? undefined : kind,
        href: HREF[kind],
        external: external || undefined,
      },
      label,
    );
  },
});
