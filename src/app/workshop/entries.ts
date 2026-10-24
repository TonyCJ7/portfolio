import type { WorkshopEntry } from "@/types/workshop";
import { entry as tokens } from "./tokens.workshop";
import { entry as focusRing } from "./focus-ring.workshop";
import { entry as label } from "@/components/Label/Label.workshop";
import { entry as tag } from "@/components/Tag/Tag.workshop";
import { entry as logo } from "@/components/Logo/Logo.workshop";
import { entry as button } from "@/components/Button/Button.workshop";
import { entry as link } from "@/components/Link/Link.workshop";
import { entry as themeToggle } from "@/components/ThemeToggle/ThemeToggle.workshop";
import { entry as navLink } from "@/components/NavLink/NavLink.workshop";
import { entry as sectionLabel } from "@/components/SectionLabel/SectionLabel.workshop";
import { entry as spotlight } from "@/components/Spotlight/Spotlight.workshop";
import { entry as skipLink } from "@/components/SkipLink/SkipLink.workshop";
import { entry as experienceRow } from "@/components/ExperienceRow/ExperienceRow.workshop";
import { entry as highlightTile } from "@/components/HighlightTile/HighlightTile.workshop";
import { entry as skillGroup } from "@/components/SkillGroup/SkillGroup.workshop";
import { entry as educationRow } from "@/components/EducationRow/EducationRow.workshop";

export const entries: WorkshopEntry[] = [
  tokens,
  focusRing,
  label,
  tag,
  logo,
  button,
  link,
  themeToggle,
  navLink,
  sectionLabel,
  spotlight,
  skipLink,
  experienceRow,
  highlightTile,
  skillGroup,
  educationRow,
];

export function findEntry(id: string): WorkshopEntry | undefined {
  return entries.find((entry) => entry.id === id);
}
