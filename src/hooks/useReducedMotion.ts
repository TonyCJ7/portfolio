"use client";

import { useSyncExternalStore } from "react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

let reducedMotionMedia: MediaQueryList | undefined;

function reducedMotionQuery(): MediaQueryList {
  reducedMotionMedia ??= matchMedia(REDUCED_MOTION_QUERY);

  return reducedMotionMedia;
}

function subscribe(onChange: () => void): () => void {
  const media = reducedMotionQuery();
  const observer = new MutationObserver(onChange);

  media.addEventListener("change", onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-motion"],
  });

  return () => {
    media.removeEventListener("change", onChange);
    observer.disconnect();
  };
}

function getSnapshot(): boolean {
  return (
    reducedMotionQuery().matches
    || document.documentElement.dataset.motion === "reduced"
  );
}

function getServerSnapshot(): boolean {
  return false;
}

export function useReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
