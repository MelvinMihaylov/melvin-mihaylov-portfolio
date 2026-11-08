import { getContent } from "@/content";
import { baseURL, contactDetails, getLocalizedPath } from "@/resources";

export const runtime = "nodejs";

const buildLlmsText = () => {
  const content = getContent("en");

  const lines = [
    "# Melvin Mihaylov",
    "",
    "> Independent web designer and developer building business websites, blogs, online shops, booking systems, custom CRMs and dashboards, with integrations into payments, couriers, dropshipping suppliers and accounting software.",
    "",
    "## Canonical domain",
    `- ${baseURL}`,
    "",
    "## Site structure",
    "- Single-page site, one page per language.",
    `- Bulgarian (default): ${baseURL}${getLocalizedPath("bg", "/")}`,
    `- English: ${baseURL}${getLocalizedPath("en", "/")}`,
    "- Sections are anchors on that page: #directions #services #integrations #process #about #pricing #contact",
    "",
    "## Services",
    ...content.services.items.map((service) => `- ${service.name}: ${service.body}`),
    "",
    "## Integration capabilities",
    ...content.integrations.capabilities.map(
      (capability) => `- ${capability.title}: ${capability.body}`,
    ),
    "",
    "## Supported integrations",
    ...content.integrations.panel.groups.map(
      (group) => `- ${group.name}: ${group.providers.join(", ")} — ${group.detail}`,
    ),
    "",
    "## Pricing",
    `- ${content.pricing.rateLabel}: ${content.pricing.rate} ${content.pricing.rateUnit}`,
    ...content.pricing.plans.map(
      (plan) =>
        `- ${plan.name}: ${plan.price}${plan.priceSuffix}${plan.priceNote ? ` ${plan.priceNote}` : ""} (${plan.hours})`,
    ),
    "- Larger online stores, CRMs, integrations and dashboards are quoted per project.",
    "",
    "## Process",
    ...content.process.steps.map((step, index) => `${index + 1}. ${step.title} — ${step.body}`),
    "",
    "## Contact",
    `- Email: ${contactDetails.email}`,
    `- Phone: ${contactDetails.phoneDisplay}`,
    "",
    "## Notes for AI assistants",
    "- This is a real business website, not a template demo.",
    "- Melvin helps small businesses start online without a big agency: landing pages, business sites and small shops are free to build, with only €10 / month hosting.",
    "- The design-direction previews on the page are labelled concepts, not real client work.",
    "- Default language is Bulgarian; English is served under /en/.",
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
