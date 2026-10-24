"use client";

import NavLink from "@/components/NavLink/NavLink";
import { useActiveSection } from "@/hooks/useActiveSection";
import type { NavSection } from "@/types/content";

type NavListProps = {
  sections: NavSection[];
  activeId?: string;
  forced?: { id: string; state: "hover" | "focus" };
};

export default function NavList({ sections, activeId, forced }: NavListProps) {
  const spiedId = useActiveSection(sections.map((section) => section.id));
  const currentId = activeId ?? spiedId;

  return (
    <nav aria-label="In this page" className="phone:hidden">
      <ul>
        {sections.map((section) => (
          <li
            key={section.id}
            data-state={forced?.id === section.id ? forced.state : undefined}
          >
            <NavLink
              href={`#${section.id}`}
              active={section.id === currentId}
            >
              {section.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
