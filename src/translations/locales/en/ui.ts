import type { SiteContent } from "@/translations/schema";

const enUiSection = {
  ui: {
    brandLogoAlt: "Melvin Mihaylov logo",
    themeToggle: {
      switchToLight: "Switch to light mode",
      switchToDark: "Switch to dark mode",
    },
    languageToggle: {
      switchToBg: "Switch to Bulgarian",
      switchToEn: "Switch to English",
    },
    footer: {
      tagline: "Modern websites, SEO help, and hosting",
    },
    home: {
      primaryCta: "See what I do",
      secondaryCta: "About me",
      tertiaryCta: "Send inquiry",
      processTitle: "How it usually goes",
      stepLabel: "Step",
      faqTitle: "Frequently asked questions before starting a website",
      faqDescription:
        "Short answers about pricing, process, larger projects, automations, and support after launch.",
    },
    about: {
      processTitle: "How we can work together",
      stepLabel: "Step",
      ctaTitle: "Start with a free call, meeting, or first visual direction.",
      ctaDescription:
        "If you already have references, sketches, or even a partially built AI version of the website, I can help turn that into a cleaner real project.",
      emailCta: "Send email",
      servicesCta: "See services",
    },
    work: {
      introTitle: "What I do - explained simply and clearly.",
      websiteTypesTitle: "Types of websites I build",
      serviceDetailsTitle: "More specific pages for each service type",
      serviceDetailsDescription:
        "If you already know you need a business website, landing page, portfolio website, online shop, or help with an unfinished project, open the dedicated service page.",
      serviceDetailsCta: "Open the detailed page",
      supportTitle: "Support around the website",
      supportDescription:
        "The website can also include search visibility work, campaign landing pages, technical launch help, and a broader custom scope when the project grows beyond the standard setup.",
      supportCta: "Ask about this",
      ctaTitle: "Want the simple process too?",
      ctaDescription:
        'The "How it works" page shows the full flow - from the first contact and references to the free demo, build, SEO, hosting, and launch support.',
      emailCta: "Email me",
    },
    pricing: {
      currentRateLabel: "Current rate for new projects",
      popularBadge: "Where most clients begin",
      currentRateDescription:
        "This is the current working rate for new projects. You still get the same modern execution, clear communication, and launch support - just with a lighter starting budget.",
      standardRateLabel: "Standard rate",
      savingsDescription: "New projects save 50 EUR per hour compared with the standard rate.",
      projectStartsFrom: "Smaller projects usually start from",
      estimatesTitle: "Example budgets",
      estimatesDescription:
        "These are ballpark examples so it is easier to get a realistic sense of budget before we even talk.",
      standardPriceLabel: "Standard price",
      finalPriceTitle: "What affects the final price",
      faqTitle: "Frequently asked questions about website pricing",
      faqDescription:
        "Short answers for people comparing website prices, looking for an affordable website, or trying to understand what affects the budget most.",
      ctaTitle: "Want a more exact quote?",
      ctaDescription:
        "Send a short description, a few examples you like, or even an AI-made outline and I can give you a more realistic budget direction.",
      emailCta: "Email me",
    },
    servicePage: {
      idealForTitle: "Best for",
      deliverablesTitle: "What is included",
      pricingHintTitle: "How pricing usually works",
      faqTitle: "Frequently asked questions",
      faqDescription:
        "These are the most common questions that come up when someone is comparing this kind of service and trying to understand the likely budget and scope.",
      ctaTitle: "Want to talk about this exact kind of website?",
      ctaDescription:
        "Send a short brief, examples, or a rough budget direction and I can quickly tell you whether this service is the right fit for the project.",
      emailCta: "Email me",
      pricingCta: "See pricing",
      servicesCta: "Back to services",
    },
    howItWorks: {
      primaryCta: "Request a free demo",
      secondaryCta: "See services",
      coverageTitle: "What I can handle for you",
      stepsTitle: "How the process usually works",
      stepLabel: "Step",
      preparationTitle: "What helps the project move faster",
      ctaTitle: "Start with a short message, a few examples, and I can build the first direction from there.",
      ctaDescription:
        "If you already have a rough idea, references, or an AI-made plan, send it over and I can shape it into a real website.",
      emailCta: "Email me",
    },
    notFound: {
      title: "Page not found",
      description: "The page you are looking for does not exist.",
    },
  },
} satisfies Pick<SiteContent, "ui">;

export { enUiSection };
