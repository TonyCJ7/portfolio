"use client";

import { useEffect, useRef } from "react";
import type { FrameContext } from "@/types/workshop";

type TokensSceneProps = {
  show: string;
  sample: string;
  ctx: FrameContext;
};

const COLOR_TOKENS = [
  "ground",
  "surface",
  "surface-lift",
  "surface-hover",
  "line",
  "fg",
  "fg-2",
  "fg-muted",
  "accent",
  "accent-text",
  "accent-soft",
  "ink",
  "accent-hover",
] as const;

const TYPE_STEPS = [
  { name: "display", className: "text-display" },
  { name: "stat", className: "text-stat" },
  { name: "headline", className: "text-headline" },
  { name: "tagline", className: "text-tagline" },
  { name: "title", className: "text-title" },
  { name: "body", className: "text-body" },
  { name: "small", className: "text-small" },
  { name: "label", className: "text-label uppercase" },
] as const;

export default function TokensScene({ show, sample, ctx }: TokensSceneProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;

    if (root === null) {
      return;
    }

    for (const output of root.querySelectorAll<HTMLElement>("[data-token]")) {
      const value = getComputedStyle(output).getPropertyValue(`--${output.dataset.token}`);

      output.textContent = value.trim();
    }
  }, [show, ctx.scheme]);

  return (
    <div ref={rootRef} className="flex flex-col gap-10">
      {show !== "type"
        ? (
            <ul className="grid grid-cols-2 gap-3 phone:grid-cols-1">
              {COLOR_TOKENS.map((name) => (
                <li key={name} className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="size-10 shrink-0 rounded-sm border border-line"
                    style={{ background: `var(--${name})` }}
                  />
                  <span className="flex min-w-0 flex-col">
                    <span className="text-small text-fg">{name}</span>
                    <code data-token={name} className="font-mono text-label-sm text-fg-muted" />
                  </span>
                </li>
              ))}
            </ul>
          )
        : null}
      {show !== "color"
        ? (
            <ul className="flex flex-col gap-4">
              {TYPE_STEPS.map((step) => (
                <li key={step.name} className="flex flex-col gap-1">
                  <span className="font-mono text-label-sm text-fg-muted">{step.name}</span>
                  <p className={`${step.className} wrap-anywhere text-fg`}>{sample}</p>
                </li>
              ))}
            </ul>
          )
        : null}
    </div>
  );
}
