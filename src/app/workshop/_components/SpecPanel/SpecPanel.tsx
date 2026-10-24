import type { Spec } from "@/types/workshop";

type SpecPanelProps = {
  spec: Spec;
};

const LISTS = [
  { key: "props", heading: "Props" },
  { key: "tokens", heading: "Tokens" },
  { key: "motion", heading: "Motion" },
  { key: "a11y", heading: "Accessibility" },
] as const;

export default function SpecPanel({ spec }: SpecPanelProps) {
  return (
    <dl className="flex flex-col gap-4 text-small text-fg-2">
      <div>
        <dt className="text-label uppercase text-fg-muted">Folder</dt>
        <dd className="mt-1 font-mono text-fg">{spec.folder}</dd>
      </div>
      {LISTS.map(({ key, heading }) => (
        <div key={key}>
          <dt className="text-label uppercase text-fg-muted">{heading}</dt>
          <dd className="mt-1">
            <ul className="flex flex-col gap-1">
              {spec[key].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
      {spec.note
        ? (
            <div>
              <dt className="text-label uppercase text-fg-muted">Note</dt>
              <dd className="mt-1">{spec.note}</dd>
            </div>
          )
        : null}
    </dl>
  );
}
