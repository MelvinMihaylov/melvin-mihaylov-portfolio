import { getContent } from "@/content";
import { defaultLocale, getLocalizedPath } from "@/resources";
import type { MetadataRoute } from "next";

const appName = "Melvin Mihaylov";
const themeColor = "#0c111b";

export default function manifest(): MetadataRoute.Manifest {
  const { meta } = getContent(defaultLocale);

  return {
    name: appName,
    short_name: "Melvin",
    description: meta.description,
    start_url: getLocalizedPath(defaultLocale, "/"),
    scope: "/",
    display: "standalone",
    background_color: themeColor,
    theme_color: themeColor,
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      { src: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    ],
  };
}
