import type { MetadataRoute } from "next";
import { defaultLocale, getSiteContent } from "@/resources";

const appName = "Melvin Mihaylov";
const themeColor = "#151515";

export default function manifest(): MetadataRoute.Manifest {
  const { home } = getSiteContent(defaultLocale);

  return {
    name: appName,
    short_name: "Melvin",
    description: home.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: themeColor,
    theme_color: themeColor,
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
