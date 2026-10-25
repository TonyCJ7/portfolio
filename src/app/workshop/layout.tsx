import type { Metadata } from "next";
import { Suspense } from "react";
import Label from "@/components/Label/Label";
import LogoLink from "@/components/Logo/LogoLink";
import SkipLink from "@/components/SkipLink/SkipLink";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import Sidebar from "./_components/Sidebar/Sidebar";
import SidebarFromUrl from "./_components/SidebarFromUrl/SidebarFromUrl";
import { titleTemplate, workshopDescription, workshopOpenGraph } from "@/lib/metadata";

export const metadata: Metadata = {
  title: { default: "Workshop", template: titleTemplate },
  description: workshopDescription,
  alternates: { canonical: "/workshop" },
  openGraph: workshopOpenGraph("/workshop"),
};

export default function WorkshopLayout({ children }: LayoutProps<"/workshop">) {
  return (
    <div className="min-h-dvh">
      <SkipLink href="#workshop-main" />
      <header className="flex items-center gap-3 border-b border-line px-6 py-3">
        <LogoLink size={28} />
        <Label>Workshop</Label>
        <div className="ms-auto">
          <ThemeToggle size="text" />
        </div>
      </header>
      <main id="workshop-main" tabIndex={-1}>
        <div className="grid grid-cols-[236px_minmax(0,1fr)] gap-6 p-6 phone:grid-cols-1">
          <Suspense fallback={<Sidebar />}>
            <SidebarFromUrl />
          </Suspense>
          {children}
        </div>
      </main>
    </div>
  );
}
