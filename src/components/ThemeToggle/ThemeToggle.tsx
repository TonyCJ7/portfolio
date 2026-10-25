"use client";

import { useRef } from "react";
import Label from "@/components/Label/Label";
import { useTheme } from "@/hooks/useTheme";

type ThemeToggleProps = {
  size?: "auto" | "text" | "icon";
};

const BUTTON_CLASSES =
  "group inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-full border border-line px-3 text-fg-muted hover:bg-surface-lift hover:text-fg focus-visible:text-fg active:bg-surface-lift active:text-fg transition-colors duration-150 ease-standard";

const DOT_CLASSES =
  "theme-dot size-2.5 rounded-full transition-transform duration-75 group-active:scale-60 motion-reduce:transition-none";

const WORD_VISIBILITY = {
  auto: "phone:hidden",
  text: "",
  icon: "hidden",
};

export default function ThemeToggle({ size = "auto" }: ThemeToggleProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { theme, toggle } = useTheme(buttonRef);
  const next = theme === "light" ? "dark" : "light";

  return (
    <button
      ref={buttonRef}
      type="button"
      aria-label={`${theme} theme, switch to ${next}`}
      onClick={toggle}
      className={BUTTON_CLASSES}
    >
      <span aria-hidden className={DOT_CLASSES} />
      <span className={WORD_VISIBILITY[size]}>
        <Label interactive className="theme-word-dark">dark</Label>
        <Label interactive className="theme-word-light">light</Label>
      </span>
    </button>
  );
}
