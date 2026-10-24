import type { Highlight } from "@/types/content";
import HighlightTile from "./HighlightTile";

type HighlightGridProps = {
  items: Highlight[];
  liftedIndex?: number;
};

export default function HighlightGrid({ items, liftedIndex }: HighlightGridProps) {
  return (
    <ul className="isolate grid grid-cols-2 gap-px bg-line phone:grid-cols-1 [&>li]:bg-ground">
      {items.map((item, index) => (
        <HighlightTile key={item.figure} {...item} lifted={index === liftedIndex} />
      ))}
    </ul>
  );
}
