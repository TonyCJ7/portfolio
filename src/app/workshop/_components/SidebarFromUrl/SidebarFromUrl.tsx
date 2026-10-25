"use client";

import { useFrameContext } from "../../useWorkshopState";
import Sidebar from "../Sidebar/Sidebar";

type SidebarFromUrlProps = {
  currentId: string;
};

export default function SidebarFromUrl({ currentId }: SidebarFromUrlProps) {
  const ctx = useFrameContext();

  return <Sidebar currentId={currentId} ctx={ctx} />;
}
