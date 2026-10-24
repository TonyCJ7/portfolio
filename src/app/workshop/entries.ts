import type { WorkshopEntry } from "@/types/workshop";
import { entry as tokens } from "./tokens.workshop";
import { entry as focusRing } from "./focus-ring.workshop";

export const entries: WorkshopEntry[] = [tokens, focusRing];

export function findEntry(id: string): WorkshopEntry | undefined {
  return entries.find((entry) => entry.id === id);
}
