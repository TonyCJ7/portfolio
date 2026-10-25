"use client";

import { useFrameContext } from "../../useWorkshopState";
import Sidebar from "../Sidebar/Sidebar";

export default function SidebarFromUrl() {
  const ctx = useFrameContext();

  return <Sidebar ctx={ctx} />;
}
