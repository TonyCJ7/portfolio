import type { ComponentProps } from "react";
import { defineEntry, select } from "@/app/workshop/controls";
import { nav } from "@/content/nav";
import NavList from "./NavList";

const LABELS = nav.map((section) => section.label);

function sectionId(label: string): string | undefined {
  return nav.find((section) => section.label === label)?.id;
}

function forcedItem(
  hover: string,
  focus: string,
): ComponentProps<typeof NavList>["forced"] {
  const focusId = sectionId(focus);

  if (focusId) {
    return { id: focusId, state: "focus" };
  }

  const hoverId = sectionId(hover);

  if (hoverId) {
    return { id: hoverId, state: "hover" };
  }

  return undefined;
}

export const entry = defineEntry({
  id: "nav-list",
  name: "Nav list",
  stage: 2,
  center: true,
  lede: "The in-page navigation of the sticky left column: one nav link per section, the one in view marked active; when pointer and keyboard both name an item, the keyboard one shows.",
  controls: {
    active: select("Active (in view)", LABELS, "About"),
    hover: select("Pointer on", ["none", ...LABELS], "none"),
    focus: select("Keyboard on", ["none", ...LABELS], "none"),
  },
  spec: {
    folder: "src/components/NavList/",
    props: [
      "sections: the nav sections in page order, each an id and a label",
      "activeId: the section to mark active; omitted on the site, where useActiveSection follows the section in view",
      "forced (Workshop only): { id, state } sets data-state hover or focus on that section's item",
    ],
    tokens: [
      "Items: NavLink, mono label in Muted with a 1 px line, 32 px at rest; hover, focus and active turn it Text and grow the line to 64 px",
      "List: items stack with no gap; each link's 12 px block padding spaces them",
    ],
    motion: [
      "Line scale, label slide and colour 150 ms from NavLink; under reduced motion the line and label jump, the colour fades stay",
      "Scroll-spy: the active item is the latest section crossing a band from 40 to 45 percent of the viewport height; the last section at the bottom of the page",
    ],
    a11y: [
      "A nav named In this page holding a ul of links to the section hashes",
      "aria-current on the active link",
      "Hidden on phones, where each section label is a sticky bar instead",
    ],
  },
  render: (args) => (
    <NavList
      sections={nav}
      activeId={sectionId(args.active)}
      forced={forcedItem(args.hover, args.focus)}
    />
  ),
  usage: () => "<NavList sections={nav} />",
});
