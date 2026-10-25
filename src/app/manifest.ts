import type { MetadataRoute } from "next";
import { profile } from "@/content/profile";
import { THEME_COLOR } from "@/types/theme";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tony Cherian Jacob",
    short_name: "TCJ",
    description: profile.metaDescription,
    start_url: "/",
    display: "standalone",
    background_color: THEME_COLOR.dark,
    theme_color: THEME_COLOR.dark,
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/icons/maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
