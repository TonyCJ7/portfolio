"use client";

import { useSyncExternalStore } from "react";

const COARSE_POINTER_QUERY = "(pointer: coarse)";

let coarsePointerMedia: MediaQueryList | undefined;

function coarsePointerQuery(): MediaQueryList {
  coarsePointerMedia ??= matchMedia(COARSE_POINTER_QUERY);

  return coarsePointerMedia;
}

function subscribe(onChange: () => void): () => void {
  const media = coarsePointerQuery();

  media.addEventListener("change", onChange);

  return () => media.removeEventListener("change", onChange);
}

function getSnapshot(): boolean {
  return coarsePointerQuery().matches;
}

function getServerSnapshot(): boolean {
  return false;
}

export function useCoarsePointer(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
