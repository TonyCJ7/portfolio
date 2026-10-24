import type { Metadata } from "next";
import LogoLink from "@/components/Logo/LogoLink";
import SkipLink from "@/components/SkipLink/SkipLink";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
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
        <span className="font-mono text-label uppercase text-fg-muted">
          Workshop
        </span>
        <div className="ms-auto">
          <ThemeToggle size="text" />
        </div>
      </header>
      <main id="workshop-main" tabIndex={-1}>
        {children}
      </main>
    </div>
  );
}
