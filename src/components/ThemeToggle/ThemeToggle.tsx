"use client";

import { useRef } from "react";
import Label from "@/components/Label/Label";
import { useTheme } from "@/hooks/useTheme";

type ThemeToggleProps = {
  size?: "auto" | "text" | "icon";
};

const BUTTON_CLASSES =
  "group inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-full border border-transparent px-3 text-fg-muted hover:bg-surface hover:border-line hover:text-fg focus-visible:text-fg active:bg-surface active:text-fg transition-colors duration-150 ease-standard";

const DOT_CLASSES =
  "theme-dot size-2.5 rounded-full transition-transform duration-75 group-active:scale-60 motion-reduce:transition-none";

const WORD_COLOR_CLASSES =
  "transition-colors duration-150 ease-standard group-hover:text-fg group-focus-visible:text-fg group-active:text-fg";

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
      aria-pressed={theme === "light"}
      aria-label={`Switch to ${next} theme`}
      onClick={toggle}
      className={BUTTON_CLASSES}
    >
      <span aria-hidden className={DOT_CLASSES} />
      <Label className={`${WORD_COLOR_CLASSES} ${WORD_VISIBILITY[size]}`}>
        {theme}
      </Label>
    </button>
  );
}
