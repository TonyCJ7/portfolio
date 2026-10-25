import Label from "@/components/Label/Label";
import Link from "@/components/Link/Link";
import TagList from "@/components/Tag/TagList";
import type { Experience } from "@/types/content";

type ExperienceRowProps = {
  entry: Experience;
  target?: boolean;
};

export default function ExperienceRow({ entry, target = false }: ExperienceRowProps) {
  const heading = `${entry.title} · ${entry.company}`;

  return (
    <li
      data-row={target ? "target" : undefined}
      className="group relative isolate grid grid-cols-[2fr_6fr] gap-x-6 phone:grid-cols-1 phone:gap-y-2"
    >
      <span
        aria-hidden
        className="absolute -inset-y-4 -inset-x-6 -z-10 rounded-sm transition-[background-color,box-shadow] duration-150 ease-standard group-hover:bg-surface-lift group-hover:shadow-lift group-focus-visible-within:bg-surface-lift group-focus-visible-within:shadow-lift phone:-inset-x-4"
      />
      <Label as="time" dateTime={entry.from} className="block pt-1 phone:pt-0">
        {entry.dates}
      </Label>
      <div>
        <h3 className="text-title wrap-anywhere">
          <Link
            kind="arrow"
            href={entry.url}
            external
            className="after:absolute after:inset-0"
          >
            {heading}
          </Link>
        </h3>
        <Label size={11}>{entry.place}</Label>
        <p className="mt-2 text-small text-fg-2">{entry.body}</p>
        <TagList items={entry.tags} className="mt-3" />
      </div>
    </li>
  );
}
