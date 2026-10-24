import Tag from "./Tag";

type TagListProps = {
  items: string[];
  label?: string;
  className?: string;
};

export default function TagList({
  items,
  label = "Tools",
  className = "",
}: TagListProps) {
  return (
    <ul aria-label={label} className={`flex flex-wrap gap-2 ${className}`.trim()}>
      {items.map((item) => (
        <Tag key={item}>{item}</Tag>
      ))}
    </ul>
  );
}
