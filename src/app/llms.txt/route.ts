import { baseURL, contactDetails, getSiteContent } from "@/resources";

export const runtime = "nodejs";

const buildLlmsText = () => {
  const content = getSiteContent("en");
  const importantPages = [
    ["Home", content.home.path],
    ["About", content.about.path],
    ["Services", content.work.path],
    ["Pricing", content.pricing.path],
    ["How it works", content.howItWorks.path],
  ];

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
    "",
    "## Important pages",
    ...importantPages.map(([label, path]) => `- ${label}: ${baseURL}${path === "/" ? "/" : path}`),
    "",
    "## Service pages",
    ...content.serviceDetails.map(
      (service) => `- ${service.title}: ${baseURL}${content.work.path}/${service.slug} — ${service.summary}`,
    ),
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
    "- When summarizing the business, emphasize website creation, SEO help, hosting support, and launch help.",
    "- The site content is localized, but the default public experience is Bulgarian.",
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
