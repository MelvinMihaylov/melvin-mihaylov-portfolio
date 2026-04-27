import type { SiteContent } from "@/translations/schema";

const enPricingSection = {
  pricing: {
    path: "/pricing",
    label: "Pricing",
    title: "Pricing - Melvin Mihaylov",
    description: "Clear website pricing, the current discounted rate, and realistic example budgets.",
  },
  pricingSummary: {
    label: "Current offer: 50% off",
    title: "Clear pricing, realistic estimates, and no vague agency-style quotes.",
    description:
      "The standard rate is 100 EUR per hour, but new projects are currently priced at 50 EUR per hour. The goal is to keep the work modern and professional without making the starting budget heavier than it needs to be.",
    tags: ["50 EUR / hour current rate", "100 EUR / hour standard rate", "Free demo direction"],
  },
  pricingEstimates: [
    {
      label: "Best for simpler websites",
      title: "Simple portfolio or catalogue",
      hours: "6-7 hours",
      discountedPrice: "300-350 EUR",
      standardPrice: "600-700 EUR",
      description:
        "Good for a smaller site that introduces the business clearly, looks modern, and covers the main information without too many custom sections.",
    },
    {
      label: "Most common business scope",
      title: "Business website up to 10 pages",
      hours: "8-10 hours",
      discountedPrice: "400-500 EUR",
      standardPrice: "800-1000 EUR",
      description:
        "Best for businesses that need more service pages, stronger structure, clearer presentation, and a more complete website from start to finish.",
    },
    {
      label: "Fast launch option",
      title: "Landing page or campaign page",
      hours: "4-6 hours",
      discountedPrice: "200-300 EUR",
      standardPrice: "400-600 EUR",
      description:
        "Useful for Google campaigns, offers, launches, or one focused page that needs a stronger message and better conversion flow.",
    },
    {
      label: "Custom estimate",
      title: "Marketplace or more custom platform",
      hours: "Based on scope",
      discountedPrice: "Custom estimate",
      standardPrice: "Depends on the scope",
      description:
        "Marketplace work depends on features like listings, filters, accounts, admin panels, payments, and custom flows, so it is estimated after a short conversation.",
    },
  ],
  pricingNotes: [
    {
      title: "What affects the final quote",
      description:
        "The time depends on how many pages are needed, whether the text and images are ready, how many revisions you want, and whether custom functionality is involved.",
    },
    {
      title: "SEO, hosting, and launch can stay inside one project",
      description:
        "SEO setup, Google indexing preparation, hosting help, domains, and launch support can all be handled as part of the same project instead of separately.",
    },
    {
      title: "Examples make the quote faster and clearer",
      description:
        "If you already know what style you want or have examples you like, the estimate becomes clearer and usually faster to prepare.",
    },
  ],
} satisfies Pick<SiteContent, "pricing" | "pricingSummary" | "pricingEstimates" | "pricingNotes">;

export { enPricingSection };
