"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { FrameContext } from "@/types/workshop";
import { entries } from "../../entries";

type SidebarProps = {
  currentId: string;
  ctx?: FrameContext;
};

const STAGES = [
  { stage: 1, heading: "Primitives" },
  { stage: 2, heading: "Composites" },
  { stage: 3, heading: "Sections" },
] as const;

function ctxQuery(ctx: FrameContext | undefined): string {
  if (ctx === undefined) {
    return "";
  }

  const params = new URLSearchParams();

  if (ctx.scheme !== "dark") {
    params.set("scheme", ctx.scheme);
  }

  if (ctx.device !== "desktop") {
    params.set("device", ctx.device);
  }

  if (ctx.motion !== "full") {
    params.set("motion", ctx.motion);
  }

  const query = params.toString();

  return query ? `?${query}` : "";
}

export default function Sidebar({ currentId, ctx }: SidebarProps) {
  const [filter, setFilter] = useState("");
  const router = useRouter();
  const query = ctxQuery(ctx);
  const visible = entries.filter((entry) =>
    entry.name.toLowerCase().includes(filter.trim().toLowerCase()),
  );

  return (
    <nav aria-label="Entries" className="flex min-w-0 flex-col gap-4">
      <label className="hidden phone:block">
        <span className="text-label uppercase text-fg-muted">Entry</span>
        <select
          name="entry"
          value={currentId}
          onChange={(event) => router.push(`/workshop/${event.target.value}${query}`)}
          className="mt-1 w-full rounded-sm border border-line bg-surface px-2 py-2 text-small text-fg"
        >
          {entries.map((entry) => (
            <option key={entry.id} value={entry.id}>
              {entry.name}
            </option>
          ))}
        </select>
      </label>
      <div className="phone:hidden">
        <input
          type="search"
          name="filter"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
          placeholder="Filter"
          aria-label="Filter entries"
          className="w-full rounded-sm border border-line bg-surface px-2 py-1.5 text-small text-fg placeholder:text-fg-muted"
        />
        {STAGES.map(({ stage, heading }) => {
          const group = visible.filter((entry) => entry.stage === stage);

          if (group.length === 0) {
            return null;
          }

          return (
            <div key={stage} className="mt-4">
              <h2 className="text-label uppercase text-fg-muted">{heading}</h2>
              <ul className="mt-1 flex flex-col">
                {group.map((entry) => (
                  <li key={entry.id}>
                    <Link
                      href={`/workshop/${entry.id}${query}`}
                      aria-current={entry.id === currentId ? "page" : undefined}
                      className="block rounded-sm px-2 py-1 text-small text-fg-2 hover:bg-surface hover:text-fg aria-[current=page]:bg-accent-soft aria-[current=page]:text-fg"
                    >
                      {entry.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
