/** Old multi-page routes → the matching anchor on the single landing page. */
const SECTION_REDIRECTS = {
  "/about": "about",
  "/work": "services",
  "/pricing": "pricing",
  "/how-it-works": "process",
  "/contact": "contact",
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  // Several lockfiles exist above this directory; pin the root so Next stops guessing.
  turbopack: {
    root: import.meta.dirname,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    const localized = ["bg", "en"].flatMap((locale) =>
      Object.entries(SECTION_REDIRECTS).flatMap(([path, anchor]) => [
        {
          source: `/${locale}${path}`,
          destination: `/${locale}#${anchor}`,
          permanent: true,
        },
        // Old service detail pages collapse into the services section.
        {
          source: `/${locale}${path}/:slug`,
          destination: `/${locale}#${anchor}`,
          permanent: true,
        },
      ]),
    );

    // Unprefixed legacy paths land on the default locale.
    const unprefixed = Object.entries(SECTION_REDIRECTS).map(([path, anchor]) => ({
      source: path,
      destination: `/bg#${anchor}`,
      permanent: true,
    }));

    return [...localized, ...unprefixed];
  },
};

export default nextConfig;
