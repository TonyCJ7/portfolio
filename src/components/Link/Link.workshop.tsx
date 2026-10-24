import {
  defineEntry,
  jsx,
  select,
  STATES,
  text,
} from "@/app/workshop/controls";
import Link from "./Link";

const DEFAULT_TEXT = {
  prose: "Almosafer",
  arrow: "Download the full résumé",
  large: "tonycj1996@gmail.com",
  social: "GitHub",
};

const HREF = {
  prose: "https://almosafer.com",
  arrow: "/Tony-CJ-Resume.pdf",
  large: "mailto:tonycj1996@gmail.com",
  social: "https://github.com/TonyCJ7",
};

export const entry = defineEntry({
  id: "link",
  name: "Link",
  stage: 1,
  center: true,
  lede: "The text link in four kinds: inline prose, an arrow link, a large link and a mono social link.",
  controls: {
    kind: select("Kind", ["prose", "arrow", "large", "social"], "prose"),
    state: select("State", STATES, "rest"),
    text: text("Text", "", 40),
  },
  spec: {
    folder: "src/components/Link/",
    props: [
      "kind: prose | arrow | large | social (default prose)",
      "href: next/link for site pages, a plain anchor for files such as /Tony_CJ_Resume.pdf, #, mailto: and external",
      "external: opens in a new tab",
    ],
    tokens: [
      "Prose: text-fg, medium weight, Tangerine underline on hover and focus",
      "Arrow: text-title, Accent Text on hover and focus",
      "Large: text-headline, text-headline-phone on phone, Tangerine underline, Accent Text on hover and focus",
      "Social: mono label, uppercase, Text Muted, Text on hover and focus",
    ],
    motion: [
      "Color 150 ms standard; arrow 75 ms translate; none under reduced motion",
    ],
    a11y: [
      "External links open in a new tab with rel noopener noreferrer",
      "Pressed equals hover",
      "Underline on hover and focus for prose",
      "Arrow is hidden from screen readers",
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
