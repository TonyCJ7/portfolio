"use client";

import type { FrameContext } from "@/types/workshop";
import Label from "@/components/Label/Label";

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
          <Label className="pe-1">{group.label}</Label>
          {group.options.map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={ctx[group.key] === option}
              onClick={() => onChange({ [group.key]: option })}
              className="group rounded-sm border border-line px-2 py-1 hover:bg-surface aria-pressed:bg-surface-hover"
            >
              <Label
                tone={ctx[group.key] === option ? "active" : "muted"}
                className="block group-hover:text-fg"
              >
                {option}
              </Label>
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
