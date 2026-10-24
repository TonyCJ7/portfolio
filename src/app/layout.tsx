import type { Metadata, Viewport } from "next";
import { DM_Sans, Geist_Mono } from "next/font/google";
import { profile } from "@/content/profile";
import { titleTemplate } from "@/lib/metadata";
import { siteUrl } from "@/lib/siteUrl";
import { THEME_SCRIPT } from "./themeScript";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: { default: profile.pageTitle, template: titleTemplate },
  description: profile.metaDescription,
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#FF5C1A",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
