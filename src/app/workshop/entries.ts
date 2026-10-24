import type { WorkshopEntry } from "@/types/workshop";
import { entry as tokens } from "./tokens.workshop";

export const entries: WorkshopEntry[] = [tokens];

export function findEntry(id: string): WorkshopEntry | undefined {
  return entries.find((entry) => entry.id === id);
}
