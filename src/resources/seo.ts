import type { Metadata } from "next";
import {
  type Locale,
  defaultLocale,
  getAlternateOpenGraphLocales,
  getLocalizedPath,
  getOpenGraphLocale,
  locales,
} from "./i18n";
import { baseURL, person } from "./site";

export const searchRobotsDirectives =
  "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1";

export const getCanonicalUrl = (path: string) => `${baseURL}${path === "/" ? "/" : path}`;

export const getOgImagePath = (title: string, role: string, name: string) =>
  `/api/og/generate?title=${encodeURIComponent(title)}&role=${encodeURIComponent(role)}&name=${encodeURIComponent(name)}`;

type BuildPageMetadataInput = {
  locale: Locale;
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  noindex?: boolean;
};

/**
 * Builds page metadata with the full set of hreflang alternates, so BG and EN
 * never compete with each other in search results.
 */
export function buildPageMetadata({
  locale,
  path,
  title,
  description,
  image,
  imageAlt,
  type = "website",
  noindex = false,
}: BuildPageMetadataInput): Metadata {
  const localizedPath = getLocalizedPath(locale, path);
  const canonical = getCanonicalUrl(localizedPath);
  const ogImage = image ?? getOgImagePath(title, person.role, person.name);

  const languageAlternates = Object.fromEntries(
    locales.map((entry) => [entry, getCanonicalUrl(getLocalizedPath(entry, path))]),
  );

  return {
    metadataBase: new URL(baseURL),
    title,
    description,
    robots: noindex ? "noindex,nofollow" : searchRobotsDirectives,
    alternates: {
      canonical: localizedPath,
      languages: {
        ...languageAlternates,
        "x-default": getCanonicalUrl(getLocalizedPath(defaultLocale, path)),
      },
    },
    openGraph: {
      type,
      title,
      description,
      url: canonical,
      siteName: person.name,
      locale: getOpenGraphLocale(locale),
      alternateLocale: getAlternateOpenGraphLocales(locale),
      images: [{ url: ogImage, width: 1200, height: 630, alt: imageAlt ?? title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    manifest: "/manifest.webmanifest",
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
        { url: "/icon.png", sizes: "512x512", type: "image/png" },
      ],
      shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    },
  };
}
