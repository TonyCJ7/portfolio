import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/siteUrl";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl.href },
    { url: new URL("/workshop/tokens", siteUrl).href },
  ];
}
