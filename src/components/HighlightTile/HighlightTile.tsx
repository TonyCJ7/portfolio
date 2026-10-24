import type { Highlight } from "@/types/content";

type HighlightTileProps = Highlight & {
  lifted?: boolean;
};

export default function HighlightTile({ figure, what, how, lifted = false }: HighlightTileProps) {
  return (
    <li
      data-state={lifted ? "hover" : undefined}
      className="p-6 transition-[background-color,box-shadow] duration-150 ease-standard hover:z-10 hover:bg-surface hover:shadow-lift"
    >
      <p className="text-stat text-fg">{figure}</p>
      <p className="mt-1 text-title text-fg">{what}</p>
      <p className="mt-2 text-small text-fg-2">{how}</p>
    </li>
  );
}
