"use client";

import type { FrameContext } from "@/types/workshop";

type ToolbarProps = {
  ctx: FrameContext;
  onChange: (patch: Partial<FrameContext>) => void;
};

const GROUPS = [
  { key: "scheme", label: "Scheme", options: ["dark", "light"] },
  { key: "device", label: "Device", options: ["desktop", "phone"] },
  { key: "motion", label: "Motion", options: ["full", "reduced"] },
] as const;

export default function Toolbar({ ctx, onChange }: ToolbarProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {GROUPS.map((group) => (
        <div key={group.key} role="group" aria-label={group.label} className="flex items-center gap-1">
          <span className="pe-1 text-label uppercase text-fg-muted">{group.label}</span>
          {group.options.map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={ctx[group.key] === option}
              onClick={() => onChange({ [group.key]: option })}
              className="rounded-sm border border-line px-2 py-1 text-label uppercase text-fg-2 hover:bg-surface hover:text-fg aria-pressed:bg-surface-hover aria-pressed:text-fg"
            >
              {option}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
