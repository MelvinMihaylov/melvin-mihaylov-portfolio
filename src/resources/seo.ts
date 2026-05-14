import { Meta } from "@once-ui-system/core";
import type { Metadata } from "next";
import { baseURL } from "./once-ui.config";

const searchRobotsDirectives = "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1";

const getCanonicalUrl = (path: string) => `${baseURL}${path === "/" ? "/" : path}`;

const getOgImagePath = (title: string, role: string) =>
  `/api/og/generate?title=${encodeURIComponent(title)}&role=${encodeURIComponent(role)}`;

type BuildPageMetadataInput = {
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
  path,
  image,
  ...metadata
}: BuildPageMetadataInput): Metadata =>
  ({
    ...Meta.generate({
      ...metadata,
      baseURL,
      path,
      image,
      canonical: getCanonicalUrl(path),
      robots: searchRobotsDirectives,
    }),
    manifest: "/manifest.webmanifest",
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
        { url: "/icon.png", sizes: "512x512", type: "image/png" },
      ],
      shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    },
  });

export { buildPageMetadata, getCanonicalUrl, getOgImagePath, searchRobotsDirectives };
