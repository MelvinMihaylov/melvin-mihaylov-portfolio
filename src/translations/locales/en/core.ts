import type { PortfolioFact, ServiceOffer, SiteContent } from "@/translations/schema";
import { contactDetails } from "@/translations/shared";

const enServiceOffers: ServiceOffer[] = [
  {
    slug: "business-websites-and-catalogues",
    title: "Business websites and catalogues",
    description:
      "For local businesses, studios, restaurants, products, menus, and company presentations that need a clean and modern first impression.",
    bullets: [
      "Custom homepage and inner pages",
      "Clear contact, inquiry, or booking flow",
      "Strong presentation on phones and laptops",
    ],
    tags: ["Catalogues", "Business websites", "Landing pages"],
    ctaLabel: "Request a free demo",
  },
  {
    slug: "portfolio-and-gallery-websites",
    title: "Portfolio and visual websites",
    description:
      "For creators, photographers, architects, beauty brands, car projects, and businesses that need a stronger visual presentation.",
    bullets: [
      "Portfolio websites and personal brands",
      "Gallery layouts and image-first sections",
      "Custom pages shaped around the brand style",
    ],
    tags: ["Portfolios", "Galleries", "Visual brands"],
    ctaLabel: "Tell me about your idea",
  },
  {
    slug: "online-shops-and-sales-pages",
    title: "Online shops and sales pages",
    description:
      "For smaller stores, product launches, and pages that need to present products more clearly and sell with more confidence.",
    bullets: [
      "Smaller online shops and product pages",
      "Landing pages for offers and campaigns",
      "Cleaner structure and stronger product trust",
    ],
    tags: ["Online shops", "Product pages", "Modern UI"],
    ctaLabel: "Request a free call",
  },
  {
    slug: "ai-project-rescue-and-launch-help",
    title: "AI project rescue and launch help",
    description:
      "If a website already started with ChatGPT, Claude, or another AI tool, I can clean it up, finish it, and prepare it for real launch.",
    bullets: [
      "Cleanup for AI-generated drafts",
      "Fix unfinished sections and weak layout choices",
      "Prepare the project for hosting, launch, and future updates",
    ],
    tags: ["ChatGPT / Claude help", "Hosting", "SEO"],
    ctaLabel: "Ask for help",
  },
];

const enAboutFacts: PortfolioFact[] = [
  {
    label: "Free intro call",
    value: "Talk through the idea before you commit",
  },
  {
    label: "Free first demo direction",
    value: "See the visual direction before payment",
  },
  {
    label: "Flexible scope",
    value: "Catalogues, portfolios, galleries, shops, and more",
  },
  {
    label: "Launch support",
    value: "Hosting, domain, Google SEO, and AI SEO help",
  },
];

const enHeroOffer = {
  label: "Professional websites without agency-sized pricing",
  title: "Modern websites for businesses, catalogues, portfolios, online shops, and more.",
  description:
    "I build clean, modern websites that look professional on every screen and stay practical in budget. Free intro calls, free first demo direction, and flexible collaboration shaped around what the client actually wants.",
  tags: ["Catalogues", "Portfolios", "Galleries", "Online shops", "Landing pages", "Custom requests"],
};

const enCoreSection = {
  person: {
    firstName: "Melvin",
    lastName: "Mihaylov",
    name: "Melvin Mihaylov",
    role: "Web developer",
    avatar: "/images/me.png",
    email: contactDetails.email,
    location: "Europe/Sofia",
    languages: ["English", "Bulgarian"],
  },
  social: [
    {
      name: "Email",
      icon: "email",
      link: `mailto:${contactDetails.email}`,
      essential: true,
    },
  ],
  newsletter: {
    display: false,
    title: `Contact ${"Melvin"}`,
    description: "Free calls, free demo directions, and practical help getting the website live.",
  },
  blog: {
    path: "/blog",
    label: "Blog",
    title: "Blog - Melvin Mihaylov",
    description: "The blog section is currently disabled.",
  },
  heroOffer: enHeroOffer,
  aboutFacts: enAboutFacts,
  serviceOffers: enServiceOffers,
} satisfies Pick<SiteContent, "person" | "social" | "newsletter" | "blog" | "heroOffer" | "aboutFacts" | "serviceOffers">;

export { enAboutFacts, enCoreSection, enHeroOffer, enServiceOffers };
