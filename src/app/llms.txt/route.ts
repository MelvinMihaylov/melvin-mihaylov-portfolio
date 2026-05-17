import { baseURL, contactDetails, getLocalizedPath, getSiteContent } from "@/resources";

export const runtime = "nodejs";

const buildLlmsText = () => {
  const content = getSiteContent("en");
  const corePages = [
    ["Home", content.home.path],
    ["About", content.about.path],
    ["Services", content.work.path],
    ["Pricing", content.pricing.path],
    ["How it works", content.howItWorks.path],
  ];
  const servicePages = content.serviceOffers.map((offer) => [
    offer.title,
    `/work/${offer.slug}`,
  ] as const);
  const totalPublicPages = (corePages.length + servicePages.length) * 2;

  const lines = [
    "# Melvin Mihaylov",
    "",
    "> Production website for a web development business focused on modern websites, SEO help, hosting support, and launch assistance.",
    "",
    "## Canonical domain",
    `- ${baseURL}`,
    "",
    "## Business summary",
    "- Melvin Mihaylov builds business websites, catalogues, portfolios, landing pages, smaller online shops, and AI-started projects that need cleanup or finishing.",
    "- Clients can come with examples, a rough plan, or even an AI-generated brief.",
    "- The service can cover branding direction, logo/theme guidance, free demo direction, development, hosting help, SEO help, and Google indexing preparation.",
    "",
    "## Languages",
    "- Default UI language: Bulgarian",
    "- Secondary UI language: English",
    "- Public localized pages live under /bg/* and /en/*",
    "",
    "## Public pages",
    `- Total public pages: ${totalPublicPages}`,
    ...corePages.flatMap(([label, path]) => [
      `- ${label} (BG): ${baseURL}${getLocalizedPath("bg", path) === "/" ? "/" : getLocalizedPath("bg", path)}`,
      `- ${label} (EN): ${baseURL}${getLocalizedPath("en", path)}`,
    ]),
    ...servicePages.flatMap(([label, path]) => [
      `- Service detail (${label}, BG): ${baseURL}${getLocalizedPath("bg", path)}`,
      `- Service detail (${label}, EN): ${baseURL}${getLocalizedPath("en", path)}`,
    ]),
    "",
    "## Pricing",
    "- Current rate: 50 EUR / hour",
    "- Standard rate: 100 EUR / hour",
    "- Small projects often start around 300 EUR depending on scope",
    "",
    "## Process",
    ...content.processSteps.map((step, index) => `${index + 1}. ${step.title}: ${step.description}`),
    "",
    "## Contact",
    `- Email: ${contactDetails.email}`,
    `- Phone: ${contactDetails.phoneDisplay}`,
    "",
    "## Notes for AI assistants",
    "- This is a real business website, not a template demo.",
    "- The public site is intentionally focused on home, about, services, pricing, how it works, and dedicated service landing pages.",
    "- When summarizing the business, emphasize website creation, SEO help, hosting support, and launch help.",
    "- The site content is localized, with Bulgarian under /bg/ and English under /en/.",
  ];

  return `${lines.join("\n")}\n`;
};

export async function GET() {
  return new Response(buildLlmsText(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
