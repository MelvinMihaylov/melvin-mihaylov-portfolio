import type { SiteContent } from "@/translations/schema";

const enPricingSection = {
  pricing: {
    path: "/pricing",
    label: "Pricing",
    title: "Website pricing and affordable web design | Melvin Mihaylov",
    description:
      "Clear pricing for business websites, landing pages, portfolios, and smaller online shops if you are comparing website cost or affordable web design.",
  },
  pricingSummary: {
    label: "Current offer: 50% off",
    title: "Clear website pricing, realistic estimates, and no vague agency-style quotes.",
    description:
      "The standard rate is 100 EUR per hour, but new projects are currently priced at 50 EUR per hour. The goal is to keep the work modern and professional without making the starting budget heavier than it needs to be for people comparing website prices, affordable web design, or micro business website cost.",
    tags: ["Website prices", "How much does a website cost", "Affordable web design", "Small business website cost", "50 EUR / hour current rate"],
  },
  pricingEstimates: [
    {
      label: "Best for simpler websites",
      title: "Simple portfolio or catalogue",
      hours: "6-7 hours",
      discountedPrice: "300-350 EUR",
      standardPrice: "600-700 EUR",
      description:
        "Good for a smaller website that introduces the business clearly, looks modern, and covers the main information without too many custom sections.",
    },
    {
      label: "Most common business scope",
      title: "Business website up to 10 pages",
      hours: "8-10 hours",
      discountedPrice: "400-500 EUR",
      standardPrice: "800-1000 EUR",
      description:
        "Best for businesses that need more service pages, stronger structure, clearer presentation, and a more complete business website from start to finish.",
    },
    {
      label: "Fast launch option",
      title: "Landing page or campaign page",
      hours: "4-6 hours",
      discountedPrice: "200-300 EUR",
      standardPrice: "400-600 EUR",
      description:
        "Useful for Google campaigns, offers, launches, or one focused page that needs a stronger message, better conversion flow, and a more affordable starting point than a full website.",
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
    {
      title: "An affordable website is easier when the scope stays focused",
      description:
        "When the goal is clear, the page count is smaller, and the content is more prepared, the website can stay in a more affordable range without looking cheap or low-quality.",
    },
  ],
  pricingFaq: [
    {
      question: "How much does a website cost?",
      answer:
        "Smaller websites often start around 300 EUR, while fuller business websites, landing pages, and online shops depend on page count, functionality, and how much content still needs shaping.",
    },
    {
      question: "How much does a small business website cost?",
      answer:
        "A lighter small business website often sits around the 300-500 EUR range when the structure is clear and the project does not include too many custom features.",
    },
    {
      question: "Is this suitable for a micro business with a smaller budget?",
      answer:
        "Yes. A micro business can often start with a lighter website or landing page scope first, then expand once the offer, the traction, and the budget grow.",
    },
    {
      question: "How much does a landing page cost?",
      answer:
        "A landing page is usually one of the more affordable website options and often fits inside the 200-300 EUR range when the offer and the structure are already clear.",
    },
    {
      question: "Can you build a cheaper or more affordable website?",
      answer:
        "Yes. If the goal is focused, the number of pages is smaller, and the content is more prepared, the website can stay more affordable without looking cheap or unfinished.",
    },
    {
      question: "What pushes website pricing up the most?",
      answer:
        "Usually it is the number of pages, custom sections, ecommerce features, memberships, integrations, automation, and how much structure or wording still needs to be worked out from scratch.",
    },
    {
      question: "Can you handle larger website projects too?",
      answer:
        "Yes. If the website is larger than a standard small business build or needs broader functionality, I prepare a custom quote based on the scope, integrations, and timeline.",
    },
  ],
} satisfies Pick<SiteContent, "pricing" | "pricingSummary" | "pricingEstimates" | "pricingNotes" | "pricingFaq">;

export { enPricingSection };
