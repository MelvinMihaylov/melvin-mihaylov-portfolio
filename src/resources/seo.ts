import { Meta } from "@once-ui-system/core";
import type { Metadata } from "next";
import { baseURL } from "./once-ui.config";
import {
  defaultLocale,
  getAlternateOpenGraphLocales,
  getLocalizedPath,
  getOpenGraphLocale,
  locales,
  type Locale,
} from "./i18n";

const searchRobotsDirectives = "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1";

const getCanonicalUrl = (path: string) => `${baseURL}${path === "/" ? "/" : path}`;

const getOgImagePath = (title: string, role: string, name: string) =>
  `/api/og/generate?title=${encodeURIComponent(title)}&role=${encodeURIComponent(role)}&name=${encodeURIComponent(name)}`;

type BuildPageMetadataInput = {
  locale: Locale;
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  author?: {
    name: string;
    url?: string;
  };
  noindex?: boolean;
  nofollow?: boolean;
};

const buildPageMetadata = ({
  locale,
  path,
  image,
  ...metadata
}: BuildPageMetadataInput): Metadata =>
  {
    const localizedPath = getLocalizedPath(locale, path);
    const languageAlternates = Object.fromEntries(
      locales.map((entry) => [entry, getCanonicalUrl(getLocalizedPath(entry, path))]),
    );
    const generatedMetadata = Meta.generate({
      ...metadata,
      baseURL,
      path: localizedPath,
      image,
      robots: searchRobotsDirectives,
    });

    return {
      metadataBase: new URL(baseURL),
      ...generatedMetadata,
      alternates: {
        canonical: localizedPath,
        languages: {
          ...languageAlternates,
          "x-default": getCanonicalUrl(getLocalizedPath(defaultLocale, path)),
        },
      },
      openGraph: {
        ...generatedMetadata.openGraph,
        url: getCanonicalUrl(localizedPath),
        locale: getOpenGraphLocale(locale),
        alternateLocale: getAlternateOpenGraphLocales(locale),
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
  };

export { buildPageMetadata, getCanonicalUrl, getOgImagePath, searchRobotsDirectives };
