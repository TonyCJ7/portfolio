"use client";

import { notFound } from "next/navigation";
import { findEntry } from "../../entries";
import { useWorkshopState } from "../../useWorkshopState";

type ControlsPanelProps = {
  entryId: string;
};

const FIELD_CLASS = "mt-1 w-full rounded-sm border border-line bg-surface px-2 py-1.5 text-small text-fg";

export default function ControlsPanel({ entryId }: ControlsPanelProps) {
  const entry = findEntry(entryId);

  if (entry === undefined) {
    notFound();
  }

  const { args, setArg, reset } = useWorkshopState(entry);
  const { controls } = entry;
  const names = Object.keys(controls);

  if (names.length === 0) {
    return <p className="text-small text-fg-muted">This entry has no controls.</p>;
  }

  return (
    <div className="flex flex-col gap-4">
      {names.map((key) => {
        const control = controls[key];
        const value = args[key];

        if (control.kind === "toggle") {
          return (
            <label key={key} className="flex items-center gap-2 text-small text-fg">
              <input
                type="checkbox"
                name={key}
                checked={value === true}
                onChange={(event) => setArg(key, event.target.checked)}
                className="accent-accent"
              />
              {control.label}
            </label>
          );
        }

        if (control.kind === "select") {
          return (
            <label key={key} className="block">
              <span className="text-label uppercase text-fg-muted">{control.label}</span>
              <select
                name={key}
                value={String(value)}
                onChange={(event) => setArg(key, event.target.value)}
                className={FIELD_CLASS}
              >
                {control.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          );
        }

        const length = String(value).length;

        return (
          <label key={key} className="block">
            <span className="flex justify-between text-label uppercase text-fg-muted">
              {control.label}
              <span className="font-mono normal-case">{`${length}/${control.max}`}</span>
            </span>
            <input
              type="text"
              name={key}
              value={String(value)}
              maxLength={control.max}
              onChange={(event) => setArg(key, event.target.value)}
              className={FIELD_CLASS}
            />
          </label>
        );
      })}
      <button
        type="button"
        onClick={reset}
        className="self-start rounded-sm border border-line px-3 py-1.5 text-label uppercase text-fg-2 hover:bg-surface hover:text-fg"
      >
        Reset
      </button>
    </div>
  );
}
