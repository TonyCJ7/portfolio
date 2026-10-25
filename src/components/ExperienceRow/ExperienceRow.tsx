import Label from "@/components/Label/Label";
import Link from "@/components/Link/Link";
import TagList from "@/components/Tag/TagList";
import type { Experience } from "@/types/content";

type ExperienceRowProps = {
  entry: Experience;
  target?: boolean;
};

const MONTH_FORMAT = new Intl.DateTimeFormat("en", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

function formatMonth(isoMonth: string): string {
  return MONTH_FORMAT.format(new Date(`${isoMonth}-01`));
}

export default function ExperienceRow({ entry, target = false }: ExperienceRowProps) {
  const heading = `${entry.title} · ${entry.company}`;
  const place = entry.partTime ? `${entry.place} · Part time` : entry.place;

  return (
    <li
      data-row={target ? "target" : undefined}
      className="group relative isolate grid grid-cols-label gap-x-6 phone:grid-cols-1 phone:gap-y-2"
    >
      <span
        aria-hidden
        className="absolute -inset-y-4 -inset-x-6 -z-10 rounded-sm transition-[background-color,box-shadow] duration-150 ease-standard group-hover:bg-surface-lift group-hover:shadow-lift group-focus-visible-within:bg-surface-lift group-focus-visible-within:shadow-lift phone:-inset-x-4"
      />
      <Label className="block pt-1 phone:pt-0">
        <time dateTime={entry.from} className="whitespace-nowrap">
          {formatMonth(entry.from)}
        </time>
        {"\u00a0— "}
        {entry.to
          ? <time dateTime={entry.to} className="whitespace-nowrap">{formatMonth(entry.to)}</time>
          : "Present"}
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
        <Label size={11}>{place}</Label>
        <p className="mt-2 text-small text-fg-2">{entry.body}</p>
        <TagList items={entry.tags} className="mt-3" />
      </div>
    </li>
  );
}
