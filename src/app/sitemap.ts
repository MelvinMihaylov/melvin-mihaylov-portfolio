import { baseURL, getLocalizedPath, locales } from "@/resources";
import type { MetadataRoute } from "next";

/** One entry per locale — the site is a single page per language. */
export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${baseURL}${getLocalizedPath(locale, "/")}`,
    changeFrequency: "weekly" as const,
    priority: 1,
    lastModified: new Date(),
  }));
}
