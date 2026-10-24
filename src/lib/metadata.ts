import type { Metadata } from "next";
import { profile } from "@/content/profile";

export const titleTemplate = `%s · ${profile.name}`;

export const workshopDescription = "Every component of the site, with live controls.";

export const openGraphBase = { siteName: profile.name, locale: "en_US" };

export const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  type: "image/png",
  alt: `${profile.name}, ${profile.role}`,
};

export function workshopOpenGraph(url: string): Metadata["openGraph"] {
  return {
    ...openGraphBase,
    type: "website",
    title: titleTemplate.replace("%s", "Workshop"),
    description: workshopDescription,
    url,
    // A segment that sets openGraph drops the root's file-based image, so it is named here.
    images: ogImage,
  };
}
