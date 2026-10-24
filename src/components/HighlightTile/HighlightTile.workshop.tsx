import { defineEntry, select } from "@/app/workshop/controls";
import { highlights } from "@/content/highlights";
import HighlightGrid from "./HighlightGrid";

function liftedIndex(hovered: string): number | undefined {
  if (hovered === "none") {
    return undefined;
  }

  return Number(hovered) - 1;
}

export const entry = defineEntry({
  id: "highlight-tile",
  name: "Highlight tile",
  stage: 2,
  center: false,
  lede: "One résumé metric per tile, a figure with what it measures and how it was reached, set in a grid of hairlines that lifts the tile under the pointer.",
  controls: {
    hovered: select("Lifted tile", ["none", "1", "2", "3", "4"], "1"),
    count: select("Tiles", ["4", "2"], "4"),
  },
  spec: {
    folder: "src/components/HighlightTile/",
    props: [
      "HighlightTile: figure, what, how (a Highlight from src/content/highlights.ts), lifted (Workshop lifted tile only)",
      "HighlightGrid: items, liftedIndex (marks one tile as the lifted state)",
    ],
    tokens: [
      "Figure: text-stat Text; what: text-title Text; how: text-small Text 2",
      "Tile: 24 px padding, 6 px radius, Ground fill; hover Surface with shadow-lift, raised above its neighbors",
      "Grid: two columns, one on phone; 1 px gap over Border makes the hairlines",
    ],
    motion: [
      "Background and shadow 150 ms standard; no transform, so reduced motion keeps it",
    ],
    a11y: [
      "A ul of li tiles, each labelled by its figure and what it measures",
      "Not a link and not focusable; the lift is pointer feedback only",
    ],
  },
  render: (args) => (
    <HighlightGrid
      items={highlights.slice(0, Number(args.count))}
      liftedIndex={liftedIndex(args.hovered)}
    />
  ),
  usage: (args) => {
    if (args.count === "4") {
      return "<HighlightGrid items={highlights} />";
    }

    return `<HighlightGrid items={highlights.slice(0, ${args.count})} />`;
  },
});
