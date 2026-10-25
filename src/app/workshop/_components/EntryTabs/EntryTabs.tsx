"use client";

import { useState, type KeyboardEvent, type ReactNode } from "react";

type EntryTabsProps = {
  controls: ReactNode;
  spec: ReactNode;
};

const TABS = ["controls", "spec"] as const;

const TAB_LABELS = { controls: "Controls", spec: "Spec" };

export default function EntryTabs({ controls, spec }: EntryTabsProps) {
  const [tab, setTab] = useState<(typeof TABS)[number]>("controls");
  const panels = { controls, spec };

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
    <>
      <div role="tablist" aria-label="Entry details" className="flex gap-1 border-b border-line">
        {TABS.map((name) => (
          <button
            key={name}
            type="button"
            role="tab"
            id={`tab-${name}`}
            aria-selected={tab === name}
            aria-controls={`panel-${name}`}
            tabIndex={tab === name ? 0 : -1}
            onClick={() => setTab(name)}
            onKeyDown={onTabKeyDown}
            className="-mb-px border-b-2 border-transparent px-3 py-2 text-label uppercase text-fg-muted aria-selected:border-accent aria-selected:text-fg hover:text-fg"
          >
            {TAB_LABELS[name]}
          </button>
        ))}
      </div>
      {TABS.map((name) => (
        <div
          key={name}
          role="tabpanel"
          id={`panel-${name}`}
          aria-labelledby={`tab-${name}`}
          hidden={tab !== name}
        >
          {panels[name]}
        </div>
      ))}
    </>
  );
}
