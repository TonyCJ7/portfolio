import { Suspense } from "react";
import { notFound } from "next/navigation";
import { findEntry } from "../../entries";
import Sidebar from "../Sidebar/Sidebar";
import SidebarFromUrl from "../SidebarFromUrl/SidebarFromUrl";
import EntryStage from "../EntryStage/EntryStage";
import EntryTabs from "../EntryTabs/EntryTabs";
import ControlsPanel from "../ControlsPanel/ControlsPanel";
import SpecPanel from "../SpecPanel/SpecPanel";

type WorkshopViewProps = {
  entryId: string;
};

export default function WorkshopView({ entryId }: WorkshopViewProps) {
  const entry = findEntry(entryId);

  if (entry === undefined) {
    notFound();
  }

  return (
    <div className="grid grid-cols-[236px_minmax(0,1fr)_340px] gap-6 p-6 phone:grid-cols-1">
      <Suspense fallback={<Sidebar currentId={entry.id} />}>
        <SidebarFromUrl currentId={entry.id} />
      </Suspense>
      <div className="flex min-w-0 flex-col gap-4">
        <div>
          <h1 className="text-headline">{entry.name}</h1>
          <p className="max-w-measure text-small text-fg-2">{entry.lede}</p>
        </div>
        <Suspense fallback={null}>
          <EntryStage entryId={entry.id} />
        </Suspense>
      </div>
      <aside className="flex min-w-0 flex-col gap-4">
        <EntryTabs
          controls={(
            <Suspense fallback={null}>
              <ControlsPanel entryId={entry.id} />
            </Suspense>
          )}
          spec={<SpecPanel spec={entry.spec} />}
        />
      </aside>
    </div>
  );
}
