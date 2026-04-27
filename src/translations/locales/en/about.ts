import type { SiteContent } from "@/translations/schema";
import { enAboutFacts, enServiceOffers } from "./core";

const enAboutSection = {
  about: {
    path: "/about",
    label: "About",
    title: "About - Melvin Mihaylov",
    description: "Modern professional websites with a practical and flexible way of working.",
    tableOfContent: {
      display: false,
      subItems: false,
    },
    avatar: {
      display: true,
      image: "/images/me.png",
    },
    calendar: {
      display: false,
      link: "",
    },
    intro: {
      display: true,
      title: "About",
      description:
        "The goal is simple: build something that looks modern, feels custom, stays understandable for the client, and does not become more expensive than it needs to be.",
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
        "The project can go as far as it needs to go - from a simple catalogue to a more custom visual website.",
    },
    {
      title: "Modern and easy to understand",
      description:
        "The aim is always a professional, modern result that still feels clear and easy to use.",
    },
    {
      title: "Budget-aware, not cheap-looking",
      description:
        "The focus stays on strong presentation and practical scope so the website feels premium without agency-sized pricing.",
    },
    {
      title: "Useful after the build too",
      description:
        "If needed, I can stay involved for hosting, domains, SEO, and finishing projects that started with AI tools.",
    },
  ],
  supportOptions: [
    "Catalogues",
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
  ],
} satisfies Pick<SiteContent, "about" | "aboutHighlights" | "supportOptions">;

export { enAboutSection };
