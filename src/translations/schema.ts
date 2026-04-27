import type { About, Blog, Home, HowItWorks, Newsletter, Person, Pricing, Social, Work } from "@/types";
export type PortfolioHighlight = {
  title: string;
  description: string;
};

export type ServiceOffer = {
  slug: string;
  title: string;
  description: string;
  bullets: string[];
  tags: string[];
  ctaLabel: string;
};

export type PortfolioFact = {
  label: string;
  value: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type HowItWorksCoverage = {
  title: string;
  description: string;
  bullets: string[];
};

export type ImagePromptIdea = {
  title: string;
  description: string;
  prompt: string;
};

export type MarketingShowcase = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

export type MarketingShowcaseSlide = {
  image: string;
  darkImage?: string;
  alt: string;
  variant: "landscape" | "portrait";
  objectPosition?: string;
  backgroundPosition?: string;
};

export type ServiceInfoBlock = {
  title: string;
  description: string;
  bullets: string[];
};

export type PricingEstimate = {
  label: string;
  title: string;
  hours: string;
  discountedPrice: string;
  standardPrice: string;
  description: string;
};

export type ServiceDetailSection = {
  title: string;
  description?: string;
  bullets?: string[];
};

export type ServiceDetail = {
  slug: string;
  publishedAt: string;
  title: string;
  subtitle: string;
  summary: string;
  sections: ServiceDetailSection[];
};

type SiteUI = {
  brandLogoAlt: string;
  themeToggle: {
    switchToLight: string;
    switchToDark: string;
  };
  languageToggle: {
    switchToBg: string;
    switchToEn: string;
  };
  footer: {
    tagline: string;
  };
  home: {
    primaryCta: string;
    secondaryCta: string;
    tertiaryCta: string;
    processTitle: string;
    stepLabel: string;
  };
  about: {
    processTitle: string;
    stepLabel: string;
    ctaTitle: string;
    ctaDescription: string;
    emailCta: string;
    servicesCta: string;
  };
  work: {
    introTitle: string;
    websiteTypesTitle: string;
    supportTitle: string;
    ctaTitle: string;
    ctaDescription: string;
    emailCta: string;
  };
  pricing: {
    currentRateLabel: string;
    popularBadge: string;
    currentRateDescription: string;
    standardRateLabel: string;
    savingsDescription: string;
    projectStartsFrom: string;
    estimatesTitle: string;
    estimatesDescription: string;
    standardPriceLabel: string;
    finalPriceTitle: string;
    ctaTitle: string;
    ctaDescription: string;
    emailCta: string;
  };
  howItWorks: {
    primaryCta: string;
    secondaryCta: string;
    coverageTitle: string;
    stepsTitle: string;
    stepLabel: string;
    preparationTitle: string;
    promptsTitle: string;
    promptsDescription: string;
    promptLabel: string;
    ctaTitle: string;
    ctaDescription: string;
    emailCta: string;
  };
  projectCard: {
    readDetails: string;
    viewProject: string;
  };
  serviceDetails: {
    moreServices: string;
  };
  notFound: {
    title: string;
    description: string;
  };
  routeGuard: {
    protectedTitle: string;
    passwordLabel: string;
    submit: string;
    incorrectPassword: string;
  };
};

export type SiteContent = {
  person: Person;
  social: Social;
  newsletter: Newsletter;
  home: Home;
  about: About;
  blog: Blog;
  work: Work;
  pricing: Pricing;
  howItWorks: HowItWorks;
  heroOffer: {
    label: string;
    title: string;
    description: string;
    tags: string[];
  };
  homeShowcase: MarketingShowcase;
  homeShowcaseSlides: MarketingShowcaseSlide[];
  workShowcase: MarketingShowcase;
  workWebsiteTypes: ServiceInfoBlock[];
  workSupportAreas: ServiceInfoBlock[];
  pricingSummary: {
    label: string;
    title: string;
    description: string;
    tags: string[];
  };
  pricingEstimates: PricingEstimate[];
  pricingNotes: PortfolioHighlight[];
  homeHighlights: PortfolioHighlight[];
  serviceOffers: ServiceOffer[];
  processSteps: ProcessStep[];
  aboutHighlights: PortfolioHighlight[];
  aboutFacts: PortfolioFact[];
  howItWorksIntro: {
    label: string;
    title: string;
    description: string;
    tags: string[];
  };
  howItWorksCoverage: HowItWorksCoverage[];
  howItWorksSteps: ProcessStep[];
  howItWorksPreparationNotes: PortfolioHighlight[];
  howItWorksImagePrompts: ImagePromptIdea[];
  supportOptions: string[];
  serviceDetails: ServiceDetail[];
  ui: SiteUI;
};
