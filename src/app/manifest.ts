import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tony Cherian Jacob",
    short_name: "TCJ",
    description: "Frontend developer portfolio of Tony Cherian Jacob",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F5F4",
    theme_color: "#FF5C1A",
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
