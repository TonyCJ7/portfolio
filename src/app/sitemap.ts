import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/siteUrl";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: siteUrl.href, lastModified },
    { url: new URL("/workshop", siteUrl).href, lastModified },
  ];
}
