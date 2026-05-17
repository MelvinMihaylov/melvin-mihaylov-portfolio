import type { SiteContent } from "@/translations/schema";
import { enAboutFacts, enServiceOffers } from "./core";

const enAboutSection = {
  about: {
    path: "/about",
    label: "About",
    title: "About | Business website developer, landing pages, portfolios, and online shops",
    description:
      "Business website developer focused on affordable, modern websites, landing pages, portfolios, online shops, and practical launch support.",
    tableOfContent: {
      display: false,
      subItems: false,
    },
    avatar: {
      display: true,
      image: "/images/me.avif",
    },
    calendar: {
      display: false,
      link: "",
    },
    intro: {
      display: true,
      title: "About",
      description:
        "The goal is simple: build something that looks modern, feels custom, stays understandable for the client, and does not become more expensive than it needs to be, whether the project is for a micro business or a larger custom build.",
    },
    work: {
      display: false,
      title: "How I work",
      experiences: [],
    },
    studies: {
      display: true,
      title: "What you can expect",
      institutions: enAboutFacts.map((fact) => ({
        name: fact.label,
        description: fact.value,
      })),
    },
    technical: {
      display: true,
      title: "Services and support",
      skills: enServiceOffers.map((offer) => ({
        title: offer.title,
        description: offer.description,
        tags: offer.tags.map((tag) => ({
          name: tag,
        })),
        images: [],
      })),
    },
  },
  aboutHighlights: [
    {
      title: "Custom requests are welcome",
      description:
        "The project can go as far as it needs to go - from a simple micro-business website or catalogue to a broader custom website.",
    },
    {
      title: "Modern and easy to understand",
      description:
        "The aim is always a professional, modern result that still feels clear and easy to use.",
    },
    {
      title: "Budget-aware, not cheap-looking",
      description:
        "The focus stays on strong presentation and practical scope so the website feels premium without agency-sized pricing or cheap-looking shortcuts.",
    },
    {
      title: "Useful after the build too",
      description:
        "If needed, I can stay involved for hosting, domains, SEO, and finishing projects that started with AI tools.",
    },
  ],
  supportOptions: [
    "Catalogues",
    "Micro business websites",
    "Small business websites",
    "Portfolios",
    "Galleries",
    "Online shops",
    "Landing pages",
    "Custom requests",
    "Free demos",
    "Free calls",
    "Hosting",
    "Domains",
    "Google SEO",
    "AI SEO",
    "ChatGPT / Claude project help",
    "Larger custom projects",
  ],
} satisfies Pick<SiteContent, "about" | "aboutHighlights" | "supportOptions">;

export { enAboutSection };
