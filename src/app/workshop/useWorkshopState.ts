"use client";

import { useCallback, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import type {
  ArgValue,
  FrameContext,
  WorkshopEntry,
  WorkshopState,
} from "@/types/workshop";
import { coerceArgs, serializeArg } from "./controls";

const DEFAULT_CTX: FrameContext = {
  scheme: "dark",
  device: "desktop",
  motion: "full",
};

function readCtx(params: URLSearchParams): FrameContext {
  return {
    scheme: params.get("scheme") === "light" ? "light" : "dark",
    device: params.get("device") === "phone" ? "phone" : "desktop",
    motion: params.get("motion") === "reduced" ? "reduced" : "full",
  };
}

export function useFrameContext(): FrameContext {
  const params = useSearchParams();

  return useMemo(() => readCtx(params), [params]);
}

export function useWorkshopState(entry: WorkshopEntry): WorkshopState {
  const params = useSearchParams();
  const ctx = useFrameContext();
  const args = useMemo(() => coerceArgs(entry.controls, params), [entry, params]);

  const write = useCallback(
    (mutate: (next: URLSearchParams) => void) => {
      const next = new URLSearchParams(params.toString());

      mutate(next);

      const query = next.toString();

      window.history.replaceState(
        null,
        "",
        query ? `?${query}` : window.location.pathname,
      );
    },
    [params],
  );

  const setArg = useCallback(
    (key: string, value: ArgValue) => {
      write((next) => {
        if (value === entry.controls[key]?.default) {
          next.delete(key);
        } else {
          next.set(key, serializeArg(value));
        }
      });
    },
    [entry, write],
  );

  const setCtx = useCallback(
    (patch: Partial<FrameContext>) => {
      write((next) => {
        for (const [key, value] of Object.entries(patch)) {
          if (value === DEFAULT_CTX[key as keyof FrameContext]) {
            next.delete(key);
          } else {
            next.set(key, value);
          }
        }
      });
    },
    [write],
  );

  const reset = useCallback(() => {
    write((next) => {
      for (const key of Object.keys(entry.controls)) {
        next.delete(key);
      }
    });
  }, [entry, write]);

  return { ctx, args, setArg, setCtx, reset };
}
