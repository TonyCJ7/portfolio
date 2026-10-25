"use client";

import { useEffect } from "react";
import { notFound } from "next/navigation";
import { findEntry } from "../../entries";
import { useWorkshopState } from "../../useWorkshopState";
import Toolbar from "../Toolbar/Toolbar";
import Stage from "../Stage/Stage";
import UsageLine from "../UsageLine/UsageLine";

type EntryStageProps = {
  entryId: string;
};

export default function EntryStage({ entryId }: EntryStageProps) {
  const entry = findEntry(entryId);

  if (entry === undefined) {
    notFound();
  }

  const { ctx, args, setCtx } = useWorkshopState(entry);

  useEffect(() => {
    if (ctx.motion === "reduced") {
      document.documentElement.dataset.motion = "reduced";
    } else {
      delete document.documentElement.dataset.motion;
    }

    return () => {
      delete document.documentElement.dataset.motion;
    };
  }, [ctx.motion]);

  return (
    <>
      <Toolbar ctx={ctx} onChange={setCtx} />
      <Stage entry={entry} args={args} ctx={ctx} onCtxChange={setCtx} />
      <UsageLine code={entry.usage(args, ctx)} />
    </>
  );
}
