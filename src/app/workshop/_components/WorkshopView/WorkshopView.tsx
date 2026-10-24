"use client";

import { useState, type KeyboardEvent } from "react";
import { notFound } from "next/navigation";
import { entries, findEntry } from "../../entries";
import { useWorkshopState } from "../../useWorkshopState";
import Toolbar from "../Toolbar/Toolbar";
import Sidebar from "../Sidebar/Sidebar";
import Stage from "../Stage/Stage";
import ControlsPanel from "../ControlsPanel/ControlsPanel";
import SpecPanel from "../SpecPanel/SpecPanel";
import UsageLine from "../UsageLine/UsageLine";

type WorkshopViewProps = {
  entryId: string;
};

const TABS = ["controls", "spec"] as const;

const TAB_LABELS = { controls: "Controls", spec: "Spec" };

const PANEL_ID = "entry-panel";

export default function WorkshopView({ entryId }: WorkshopViewProps) {
  const entry = findEntry(entryId);
  const [tab, setTab] = useState<(typeof TABS)[number]>("controls");

  if (entry === undefined) {
    notFound();
  }

  const { ctx, args, setArg, setCtx, reset } = useWorkshopState(entry);

  function onTabKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
      return;
    }

    const index = TABS.indexOf(tab);
    const step = event.key === "ArrowRight" ? 1 : -1;
    const next = TABS[(index + step + TABS.length) % TABS.length];

    event.preventDefault();
    setTab(next);
    document.getElementById(`tab-${next}`)?.focus();
  }

  return (
    <div className="grid grid-cols-[236px_minmax(0,1fr)_340px] gap-6 p-6 phone:grid-cols-1">
      <Sidebar entries={entries} currentId={entry.id} ctx={ctx} />
      <div className="flex min-w-0 flex-col gap-4">
        <div>
          <h1 className="text-headline">{entry.name}</h1>
          <p className="max-w-measure text-small text-fg-2">{entry.lede}</p>
        </div>
        <Toolbar ctx={ctx} onChange={setCtx} />
        <Stage entry={entry} args={args} ctx={ctx} onCtxChange={setCtx} />
        <UsageLine code={entry.usage(args, ctx)} />
      </div>
      <aside className="flex min-w-0 flex-col gap-4">
        <div role="tablist" aria-label="Entry details" className="flex gap-1 border-b border-line">
          {TABS.map((name) => (
            <button
              key={name}
              type="button"
              role="tab"
              id={`tab-${name}`}
              aria-selected={tab === name}
              aria-controls={PANEL_ID}
              tabIndex={tab === name ? 0 : -1}
              onClick={() => setTab(name)}
              onKeyDown={onTabKeyDown}
              className="-mb-px border-b-2 border-transparent px-3 py-2 text-label uppercase text-fg-muted aria-selected:border-accent aria-selected:text-fg hover:text-fg"
            >
              {TAB_LABELS[name]}
            </button>
          ))}
        </div>
        <div role="tabpanel" id={PANEL_ID} aria-labelledby={`tab-${tab}`}>
          {tab === "controls"
            ? (
                <ControlsPanel
                  controls={entry.controls}
                  args={args}
                  onChange={setArg}
                  onReset={reset}
                />
              )
            : <SpecPanel spec={entry.spec} />}
        </div>
      </aside>
    </div>
  );
}
