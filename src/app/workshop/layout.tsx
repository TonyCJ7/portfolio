import type { Metadata } from "next";
import LogoLink from "@/components/Logo/LogoLink";

export const metadata: Metadata = {
  title: "Workshop · Tony Cherian Jacob",
  description: "Every component of the site, with live controls.",
};

export default function WorkshopLayout({ children }: LayoutProps<"/workshop">) {
  return (
    <div className="min-h-dvh">
      <header className="flex items-center gap-3 border-b border-line px-6 py-3">
        <LogoLink size={28} />
        <span className="font-mono text-label uppercase text-fg-muted">
          Workshop
        </span>
      </header>
      {children}
    </div>
  );
}
