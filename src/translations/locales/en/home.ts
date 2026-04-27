import type { SiteContent } from "@/translations/schema";
import { enHeroOffer } from "./core";

const enHomeSection = {
  home: {
    path: "/",
    image: "/images/og/home.jpg",
    label: "Home",
    title: "Melvin Mihaylov - Modern websites with practical pricing",
    description: enHeroOffer.description,
    headline: enHeroOffer.title,
    featured: {
      display: true,
      title: enHeroOffer.label,
      href: "/work",
    },
    subline: enHeroOffer.description,
  },
  homeShowcase: {
    title: "How the work looks in practice",
    description:
      "From portfolios and business websites to landing pages and cleaner brand presentations, this is the kind of modern visual direction I build for clients who need a strong first impression.",
    image: "/images/landingMarketingImage4.png",
    alt: "Modern website example built in the Melvin Mihaylov brand",
  },
  homeShowcaseSlides: [
    {
      image: "/images/landingMarketingImage4.png",
      darkImage: "/images/landingMarketingImage4ForDarkTheme.png",
      alt: "Modern website example built in the Melvin Mihaylov brand",
      variant: "landscape",
      objectPosition: "center center",
      backgroundPosition: "center center",
    },
    {
      image: "/images/landingMarketingImage3.png",
      darkImage: "/images/landingMarketingImage3ForDarkTheme.png",
      alt: "Branded website concept using the Melvin Mihaylov logo and color palette",
      variant: "portrait",
      objectPosition: "center top",
      backgroundPosition: "center center",
    },
  ],
  homeHighlights: [
    {
      title: "Free demo before payment",
      description:
        "If you want to test the direction first, I can prepare a simple starter concept or homepage demo before any commitment.",
    },
    {
      title: "Free calls and meetings",
      description:
        "You can explain what you want clearly, and I will help shape the strongest practical solution around it.",
    },
    {
      title: "Modern look with a practical budget",
      description:
        "The goal is a website that feels current and professional without becoming unnecessarily expensive.",
    },
    {
      title: "Help after an AI start",
      description:
        "If you already started with ChatGPT or Claude, I can finish the build, clean it up, host it, and improve it for Google or AI SEO.",
    },
  ],
  processSteps: [
    {
      title: "Free call or meeting",
      description: "You explain what you want, what kind of style you like, and what the website needs to achieve.",
    },
    {
      title: "Free first direction or demo",
      description:
        "Before payment, I can prepare a first visual direction or demo so you can see if the approach feels right.",
    },
    {
      title: "Build and refine around your feedback",
      description:
        "The website is shaped around what you actually want instead of forcing everything into a rigid template.",
    },
    {
      title: "Launch with support",
      description: "I can help with hosting, domain setup, Google SEO, AI SEO, and the practical launch tasks.",
    },
  ],
} satisfies Pick<SiteContent, "home" | "homeShowcase" | "homeShowcaseSlides" | "homeHighlights" | "processSteps">;

export { enHomeSection };
