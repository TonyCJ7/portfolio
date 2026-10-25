export type Theme = "dark" | "light";

export const THEME_KEY = "tj-theme";

// Mirrors --ground in globals.css: the manifest and the head script cannot read CSS variables.
export const THEME_COLOR: Record<Theme, string> = {
  dark: "#16161A",
  light: "#F5F5F4",
};
