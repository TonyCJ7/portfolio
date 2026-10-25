import type { NavSection } from "@/types/content";

export const nav: NavSection[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "highlights", label: "Highlights" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export function sectionLabel(id: string): string {
  const section = nav.find((item) => item.id === id);

  if (!section) {
    throw new Error(`No nav section with id "${id}"`);
  }

  return section.label;
}
