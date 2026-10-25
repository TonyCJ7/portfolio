"use client";

import {
  useCallback,
  useSyncExternalStore,
  type MouseEvent,
  type RefObject,
} from "react";
import { THEME_COLOR, THEME_KEY, type Theme } from "@/types/theme";
import { useReducedMotion } from "./useReducedMotion";

type UseThemeResult = {
  theme: Theme;
  toggle: (event: MouseEvent<HTMLElement>) => void;
};

const FADE_MS = 300;

let fadeTimer: ReturnType<typeof setTimeout> | undefined;

function themeScope(element: HTMLElement | null): HTMLElement {
  return element?.closest<HTMLElement>("[data-scheme]")
    ?? document.documentElement;
}

function readTheme(scope: HTMLElement): Theme {
  const value = scope.dataset.scheme ?? document.documentElement.dataset.theme;

  return value === "light" ? "light" : "dark";
}

function writeTheme(scope: HTMLElement, next: Theme): void {
  if (scope !== document.documentElement) {
    scope.dataset.scheme = next;

    return;
  }

  scope.dataset.theme = next;
  document
    .querySelector("meta[name=theme-color]")
    ?.setAttribute("content", THEME_COLOR[next]);

  try {
    localStorage.setItem(THEME_KEY, next);
  } catch {
    // Blocked storage: the theme still applies until the next visit.
  }
}

function clickOrigin(event: MouseEvent<HTMLElement>): { x: number; y: number } {
  if (event.detail !== 0) {
    return { x: event.clientX, y: event.clientY };
  }

  const rect = event.currentTarget.getBoundingClientRect();

  return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
}

function setRevealOrigin(event: MouseEvent<HTMLElement>): void {
  const { x, y } = clickOrigin(event);
  const radius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y),
  );
  const style = document.documentElement.style;

  style.setProperty("--vt-x", `${x}px`);
  style.setProperty("--vt-y", `${y}px`);
  style.setProperty("--vt-r", `${radius}px`);
}

function fade(apply: () => void): void {
  const html = document.documentElement;

  clearTimeout(fadeTimer);
  html.classList.add("theme-fade");
  apply();
  fadeTimer = setTimeout(() => html.classList.remove("theme-fade"), FADE_MS);
}

function swapInstantly(apply: () => void): void {
  const html = document.documentElement;

  html.classList.add("theme-instant");
  apply();
  // Reading a style flushes the new colours while transitions are off.
  void getComputedStyle(html).color;
  html.classList.remove("theme-instant");
}

function getServerSnapshot(): Theme {
  return "dark";
}

export function useTheme(
  scopeRef: RefObject<HTMLElement | null>,
): UseThemeResult {
  const reducedMotion = useReducedMotion();

  const subscribe = useCallback(
    (onChange: () => void) => {
      const html = document.documentElement;
      const scope = themeScope(scopeRef.current);
      const observer = new MutationObserver(onChange);

      observer.observe(html, { attributes: true, attributeFilter: ["data-theme"] });

      if (scope !== html) {
        observer.observe(scope, {
          attributes: true,
          attributeFilter: ["data-scheme"],
        });
      }

      return () => observer.disconnect();
    },
    [scopeRef],
  );

  const getSnapshot = useCallback(
    () => readTheme(themeScope(scopeRef.current)),
    [scopeRef],
  );

  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      const scope = themeScope(scopeRef.current);
      const next: Theme = readTheme(scope) === "light" ? "dark" : "light";
      const apply = () => writeTheme(scope, next);

      if (scope !== document.documentElement || reducedMotion) {
        swapInstantly(apply);

        return;
      }

      if (typeof document.startViewTransition !== "function") {
        fade(apply);

        return;
      }

      setRevealOrigin(event);
      document.startViewTransition(apply);
    },
    [scopeRef, reducedMotion],
  );

  return { theme, toggle };
}
