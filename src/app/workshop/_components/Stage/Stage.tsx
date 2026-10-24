"use client";

import { useEffect, useRef, useState } from "react";
import type { ArgValue, FrameContext, WorkshopEntry } from "@/types/workshop";

type StageProps = {
  entry: WorkshopEntry;
  args: Record<string, ArgValue>;
  ctx: FrameContext;
};

const FRAME_WIDTH = { desktop: 656, phone: 390 };

const STAGE_INSET = 32;

export default function Stage({ entry, args, ctx }: StageProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const [stageWidth, setStageWidth] = useState(0);
  const [frameHeight, setFrameHeight] = useState(0);
  const frameWidth = FRAME_WIDTH[ctx.device];
  const fit = stageWidth === 0
    ? 1
    : Math.min(1, (stageWidth - STAGE_INSET) / frameWidth);
  const state = args.state === "rest" || typeof args.state !== "string"
    ? undefined
    : args.state;

  useEffect(() => {
    const stage = stageRef.current;
    const frame = frameRef.current;

    if (stage === null || frame === null) {
      return;
    }

    const observer = new ResizeObserver(() => {
      setStageWidth(stage.clientWidth);
      setFrameHeight(frame.offsetHeight);
    });

    observer.observe(stage);
    observer.observe(frame);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={stageRef}
      className="overflow-hidden rounded-md border border-line bg-[radial-gradient(var(--line)_1px,transparent_1px)] bg-[size:16px_16px] p-4"
    >
      <div data-device={ctx.device} style={{ height: frameHeight * fit || undefined }}>
        <div
          ref={frameRef}
          data-frame
          data-scheme={ctx.scheme}
          data-state={state}
          className={`origin-top-left rounded-md border border-line bg-ground p-12 text-fg [--gutter:24px] phone:p-(--gutter) ${entry.center ? "flex min-h-48 items-center justify-center" : ""}`}
          style={{ width: frameWidth, transform: `scale(${fit})`, maxWidth: "none" }}
        >
          {entry.render(args, ctx)}
        </div>
      </div>
    </div>
  );
}
