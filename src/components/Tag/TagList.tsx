import Tag from "./Tag";

type TagListProps = {
  items: string[];
  label?: string;
};

export default function TagList({ items, label = "Tools" }: TagListProps) {
  return (
    <ul aria-label={label} className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Tag key={item}>{item}</Tag>
      ))}
    </ul>
  );
}
