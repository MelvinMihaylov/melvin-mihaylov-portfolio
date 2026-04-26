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

export type GalleryDirection = {
  title: string;
  subtitle: string;
};

export const contactDetails = {
  email: "melvinmihaylov@gmail.com",
  phone: "+359898361347",
  phoneDisplay: "+359 898 361 347",
  github: "https://github.com/MelvinMihaylov",
} as const;

export const heroOffer = {
  label: "Professional websites without agency-sized pricing",
  title: "Modern, good-looking websites for catalogues, portfolios, galleries, online shops, and more.",
  description:
    "I build clear websites that feel custom, look professional on every screen, and stay practical in price. Free intro calls, free first demos, and flexible changes based on what the client actually wants.",
  tags: [
    "Catalogues",
    "Portfolios",
    "Galleries",
    "Online shops",
    "Landing pages",
    "Custom requests",
  ],
} as const;

export const homeHighlights: PortfolioHighlight[] = [
  {
    title: "Free demo before you pay",
    description:
      "If you want to test the direction first, I can prepare a simple starter concept or homepage demo before any commitment.",
  },
  {
    title: "Free calls and meetings",
    description:
      "You can explain what you want in a free call or meeting, and I will help shape the simplest strong-looking solution.",
  },
  {
    title: "Modern look, practical pricing",
    description:
      "The goal is a site that looks professional and current without becoming unnecessarily expensive.",
  },
  {
    title: "Help after AI-generated starts",
    description:
      "Already started with ChatGPT or Claude? I can help finish the build, clean it up, host it, and improve Google or AI SEO.",
  },
];

export const serviceOffers: ServiceOffer[] = [
  {
    slug: "business-websites-and-catalogues",
    title: "Business websites and catalogues",
    description:
      "For local businesses, studios, restaurants, products, menus, and company presentations that need a modern first impression.",
    bullets: [
      "Custom homepage and inner pages",
      "Clear contact or inquiry flow",
      "Responsive design for phones and laptops",
    ],
    tags: ["Catalogues", "Business sites", "Landing pages"],
    ctaLabel: "Request free demo",
  },
  {
    slug: "portfolio-and-gallery-websites",
    title: "Portfolio and gallery websites",
    description:
      "For creators, photographers, car projects, beauty brands, architects, and anyone who needs a more visual website.",
    bullets: [
      "Image-first layouts and gallery sections",
      "Custom sections shaped around your style",
      "Good-looking presentation on mobile",
    ],
    tags: ["Portfolios", "Galleries", "Visual brands"],
    ctaLabel: "Talk about your idea",
  },
  {
    slug: "online-shops-and-sales-pages",
    title: "Online shops and sales pages",
    description:
      "For smaller modern stores, product launches, and pages that need to present items clearly and make them easier to trust.",
    bullets: [
      "Clean product structure",
      "Modern visuals without clutter",
      "Budget-aware setup and guidance",
    ],
    tags: ["Online shops", "Product pages", "Modern UI"],
    ctaLabel: "Ask for a free call",
  },
  {
    slug: "ai-project-rescue-and-launch-help",
    title: "AI project rescue and launch help",
    description:
      "If you already have a project started with AI, I can help turn it into something real, usable, and ready to launch.",
    bullets: [
      "Finish unfinished AI-generated pages",
      "Hosting, domains, and deployment help",
      "Google and AI SEO improvements",
    ],
    tags: ["ChatGPT / Claude help", "Hosting", "SEO"],
    ctaLabel: "Ask for help",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Free call or meeting",
    description: "You explain what you want, what style you like, and what the site needs to do.",
  },
  {
    title: "Free first direction or demo",
    description:
      "Before payment, I can prepare a simple visual direction or demo so you can decide if the fit feels right.",
  },
  {
    title: "Build and revise around your requests",
    description:
      "The site is shaped around what you actually want instead of forcing you into a one-size-fits-all template.",
  },
  {
    title: "Launch with support",
    description:
      "I can help with hosting, domains, Google SEO, AI SEO, and general launch cleanup.",
  },
];

export const aboutHighlights: PortfolioHighlight[] = [
  {
    title: "Custom requests are welcome",
    description:
      "The build can move as far as the customer needs, from a simple catalogue to a more custom visual site.",
  },
  {
    title: "Modern and understandable",
    description:
      "The aim is always a professional, modern result that still feels clear and easy to use.",
  },
  {
    title: "Budget-aware, not cheap-looking",
    description:
      "I focus on strong presentation and practical scope so the site feels premium without agency-sized pricing.",
  },
  {
    title: "Useful after the build too",
    description:
      "If needed, I can stay involved for hosting, domains, SEO, and finishing projects that started with AI tools.",
  },
];

export const aboutFacts: PortfolioFact[] = [
  {
    label: "Free intro call",
    value: "Talk through the idea before committing",
  },
  {
    label: "Free first demo",
    value: "Test the visual direction before payment",
  },
  {
    label: "Flexible scope",
    value: "Catalogues, portfolios, galleries, shops, and more",
  },
  {
    label: "Launch support",
    value: "Hosting, domains, Google SEO, and AI SEO help",
  },
];

export const galleryDirections: GalleryDirection[] = [
  {
    title: "Premium business website",
    subtitle: "For services, catalogues, and strong first impressions",
  },
  {
    title: "Visual portfolio",
    subtitle: "For creators, personal brands, and studio pages",
  },
  {
    title: "Clean online shop",
    subtitle: "For smaller stores and product launches",
  },
  {
    title: "Gallery-first layout",
    subtitle: "For cars, interiors, beauty, travel, or photography",
  },
  {
    title: "Landing page demo",
    subtitle: "A fast first concept to test an idea before paying",
  },
];

export const galleryNotes: PortfolioHighlight[] = [
  {
    title: "Free demo direction available",
    description:
      "If you are not ready to commit yet, a simple first concept can help you decide if the style feels right.",
  },
  {
    title: "Good on phones from the start",
    description:
      "The layouts are planned to feel modern and polished on mobile, not just stretched down from desktop.",
  },
  {
    title: "Useful even after AI drafts",
    description:
      "These directions also work if you already have a project started with AI and need help making it real.",
  },
];

export const supportOptions = [
  "Catalogues",
  "Portfolio websites",
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
] as const;
