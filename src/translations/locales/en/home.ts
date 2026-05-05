import type { SiteContent } from "@/translations/schema";
import { enHeroOffer } from "./core";

const enHomeSection = {
  home: {
    path: "/",
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
  homeInquiry: {
    tag: "Send inquiry",
    title: "Tell me what kind of website or idea you want and I can reply with a clear direction.",
    description:
      "Leave your email, phone, and project type. When you send the form, I receive the inquiry directly by email so I can reply with the next step.",
    benefits: ["Free first direction", "Works for custom ideas too", "Fine even with a short brief"],
    emailLabel: "Email",
    emailPlaceholder: "ivan@example.com",
    phoneLabel: "Phone",
    phonePlaceholder: "+359 88 123 4567",
    phoneDescription: "Optional - useful if you would prefer a quick call back.",
    projectTypeLabel: "What kind of project do you need",
    projectTypePlaceholder: "Choose a project type",
    otherOptionLabel: "Other",
    otherProjectLabel: "If other, describe it shortly",
    otherProjectPlaceholder: "For example booking flow, redesign, or a more custom idea...",
    messageLabel: "Short description",
    messagePlaceholder: "You can add what you want, examples you like, timing, or the style you prefer.",
    submitLabel: "Send inquiry",
    submitHint: "The inquiry is sent directly to my email.",
    directContactTitle: "Prefer direct contact?",
    directContactDescription: "You can also email me directly or call if that feels easier.",
    submission: {
      sendingLabel: "Sending...",
      successMessage: "Your inquiry was sent successfully. I will get back to you as soon as I can.",
      errorMessage: "I could not send the inquiry right now. Please try again shortly or email me directly.",
    },
    validation: {
      emailRequired: "Add an email so I know where to reply.",
      emailInvalid: "Add a valid email address.",
      projectTypeRequired: "Choose a project type.",
      otherProjectRequired: "Add a short note about the custom request.",
    },
  },
} satisfies Pick<SiteContent, "home" | "homeShowcase" | "homeShowcaseSlides" | "homeHighlights" | "processSteps" | "homeInquiry">;

export { enHomeSection };
