import type { WorkshopEntry } from "@/types/workshop";
import { entry as tokens } from "./tokens.workshop";
import { entry as focusRing } from "./focus-ring.workshop";
import { entry as label } from "@/components/Label/Label.workshop";
import { entry as tag } from "@/components/Tag/Tag.workshop";
import { entry as logo } from "@/components/Logo/Logo.workshop";
import { entry as button } from "@/components/Button/Button.workshop";

export const entries: WorkshopEntry[] = [
  tokens,
  focusRing,
  label,
  tag,
  logo,
  button,
];

export function findEntry(id: string): WorkshopEntry | undefined {
  return entries.find((entry) => entry.id === id);
}
