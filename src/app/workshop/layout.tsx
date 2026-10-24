import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo/Logo";

export const metadata: Metadata = {
  title: "Workshop · Tony Cherian Jacob",
  description: "Every component of the site, with live controls.",
};

export default function WorkshopLayout({ children }: LayoutProps<"/workshop">) {
  return (
    <div className="min-h-dvh">
      <header className="flex items-center gap-3 border-b border-line px-6 py-3">
        <Link href="/" className="rounded-lg text-fg">
          <Logo size={28} />
        </Link>
        <span className="font-mono text-label uppercase text-fg-muted">
          Workshop
        </span>
      </header>
      {children}
    </div>
  );
}
