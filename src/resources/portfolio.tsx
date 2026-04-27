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

export const homeShowcase: MarketingShowcase = {
  title: "What I build for clients",
  description:
    "From portfolios and business websites to landing pages and cleaner brand presentations, this is the kind of modern visual direction I build for clients who need a strong first impression.",
  image: "/images/landingMarketingImage4.png",
  alt: "Homepage design concept using Melvin Mihaylov branding and colors",
};

export const homeShowcaseSlides: MarketingShowcaseSlide[] = [
  {
    image: "/images/landingMarketingImage4.png",
    darkImage: "/images/landingMarketingImage4ForDarkTheme.png",
    alt: "Homepage design concept using Melvin Mihaylov branding and colors",
    variant: "landscape",
    objectPosition: "center center",
    backgroundPosition: "center center",
  },
  {
    image: "/images/landingMarketingImage3.png",
    darkImage: "/images/landingMarketingImage3ForDarkTheme.png",
    alt: "Branded website concept using Melvin Mihaylov logo and cyan color palette",
    variant: "portrait",
    objectPosition: "center top",
    backgroundPosition: "center center",
  },
];

export const workShowcase: MarketingShowcase = {
  title: "Simple overview of what I do",
  description:
    "This page is here to explain the kinds of websites I build and the extra help I can provide around SEO, Google visibility, hosting, launch, and marketing-focused pages.",
  image: "/images/landingMarketingImage2.png",
  alt: "Examples of marketplace, shop, and custom website design work",
};

export const workWebsiteTypes: ServiceInfoBlock[] = [
  {
    title: "Business websites and catalogues",
    description:
      "For local businesses, studios, products, restaurants, menus, and company presentation sites that need to look clear, modern, and trustworthy.",
    bullets: [
      "Service websites and business presentation pages",
      "Catalogues, menus, and landing pages",
      "Clear structure that makes the offer easy to understand",
    ],
  },
  {
    title: "Portfolio and visual websites",
    description:
      "For creators, photographers, architects, beauty brands, car projects, and businesses that need a stronger visual presentation.",
    bullets: [
      "Portfolio websites and personal brands",
      "Gallery-style layouts and visual sections",
      "Custom pages shaped around the style of the brand",
    ],
  },
  {
    title: "Online shops and sales pages",
    description:
      "For smaller stores, product launches, and pages that need cleaner product presentation and a more confident buying flow.",
    bullets: [
      "Smaller online shops and product pages",
      "Sales pages and launch pages",
      "Cleaner product structure and more trust-focused presentation",
    ],
  },
  {
    title: "AI-started projects and rebuilds",
    description:
      "If a website already started with ChatGPT, Claude, or another AI tool, I can clean it up, rebuild weak parts, and get it ready for real use.",
    bullets: [
      "Cleanup of AI-generated drafts",
      "Fix unfinished sections and weak layout decisions",
      "Prepare the project for hosting, launch, and later updates",
    ],
  },
];

export const workSupportAreas: ServiceInfoBlock[] = [
  {
    title: "SEO optimization",
    description:
      "I can help structure the site so it is easier for Google to understand, index, and present properly.",
    bullets: [
      "Clear headings, page structure, and metadata",
      "Better internal page flow and content direction",
      "Practical improvements for Google indexing readiness",
    ],
  },
  {
    title: "Google marketing pages and campaigns",
    description:
      "If you need campaign support, I can build landing pages and website sections that fit ads, offers, and lead generation better.",
    bullets: [
      "Landing pages for ads or campaigns",
      "Clear offer sections and stronger calls to action",
      "Website structure shaped around services and search intent",
    ],
  },
  {
    title: "Hosting, domains, and launch help",
    description:
      "The project does not have to stop at the design. I can help with the practical technical side too.",
    bullets: [
      "Hosting and domain setup help",
      "Launch fixes, cleanup, and go-live support",
      "Ongoing updates if the site needs changes after launch",
    ],
  },
];

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

export const howItWorksIntro = {
  label: "From first message to launch",
  title: "I can help with the whole website flow, not just the final pages.",
  description:
    "That can include logo direction, website theme and design, a free demo, SEO and marketing-oriented structure, plus hosting and launch help when the site is ready.",
  tags: [
    "Logo direction",
    "Website theme",
    "Free demo",
    "SEO setup",
    "Marketing support",
    "Hosting",
  ],
} as const;

export const howItWorksCoverage: HowItWorksCoverage[] = [
  {
    title: "Visual direction and brand basics",
    description:
      "If the brand is still rough, I can help shape the logo direction, color palette, typography, and overall theme so the website feels consistent.",
    bullets: [
      "Logo refresh or first design direction",
      "Color, typography, and section style choices",
      "Reference-based visual mood and layout direction",
    ],
  },
  {
    title: "Website design and build",
    description:
      "Once the direction is clear, I can build the homepage and inner pages around your business, your content, and the actions you want people to take.",
    bullets: [
      "Custom homepage and supporting pages",
      "Responsive layout for phone and desktop",
      "Contact, inquiry, or presentation sections built around your goal",
    ],
  },
  {
    title: "SEO and marketing support",
    description:
      "The structure can be prepared so Google can understand the site more easily, with on-page SEO basics and marketing-minded sections that support visibility.",
    bullets: [
      "Clear headings, metadata, and page structure",
      "Service and landing sections shaped for search intent",
      "Support for Google indexing readiness and visibility basics",
    ],
  },
  {
    title: "Hosting and launch help",
    description:
      "I can stay involved after the build too, so going live does not become your problem alone.",
    bullets: [
      "Hosting and domain setup help",
      "Launch cleanup and final checks",
      "Ongoing updates or support after the site goes live",
    ],
  },
];

export const howItWorksSteps: ProcessStep[] = [
  {
    title: "Contact and goals",
    description:
      "You tell me what the business does, what kind of website you need, and what result you want from it.",
  },
  {
    title: "Examples and references",
    description:
      "If you already know styles, layouts, competitors, or websites you like, send them. Even an AI-made outline or plan is useful.",
  },
  {
    title: "Free demo direction",
    description:
      "Before a full commitment, I can prepare a free first demo or visual direction so you can see whether the approach feels right.",
  },
  {
    title: "Build and refine",
    description:
      "After the direction is approved, I build the pages, adjust the details, and shape the site around your feedback.",
  },
  {
    title: "Launch and support",
    description:
      "I can handle hosting, SEO improvements, Google indexing support, and the practical launch tasks after the design work is done.",
  },
];

export const howItWorksPreparationNotes: PortfolioHighlight[] = [
  {
    title: "Knowing the goal helps a lot",
    description:
      "Even a simple note about whether you want leads, bookings, product sales, or a cleaner brand presence makes the project easier to shape.",
  },
  {
    title: "Examples save time",
    description:
      "If you can show sites, colors, layouts, or sections you like, it becomes much easier to match the style you have in mind.",
  },
  {
    title: "AI plans are welcome",
    description:
      "If you used ChatGPT, Claude, or another AI tool to outline your pages or ideas, send it. That can speed up the whole process.",
  },
  {
    title: "Basic content is a big help",
    description:
      "Services, short texts, contact details, and any existing logo or images make the first version much stronger.",
  },
];

export const howItWorksImagePrompts: ImagePromptIdea[] = [
  {
    title: "Homepage hero image",
    description:
      "Use this for the home page hero or a main banner that should feel premium, modern, and clean.",
    prompt:
      "Modern premium business website hero image, elegant workspace with laptop showing a stylish website mockup, soft natural light, clean desk, subtle cyan and neutral tones, realistic photography, minimal composition, rounded visual framing, no text, lots of negative space, polished and trustworthy.",
  },
  {
    title: "Branding and design section image",
    description:
      "Useful for sections about logo work, theme direction, colors, and overall design identity.",
    prompt:
      "Creative branding moodboard scene with logo sketches, typography samples, color swatches, wireframes, modern studio desk, premium minimal aesthetic, soft shadows, realistic photography, rounded objects and corners, neutral background, no text overlays.",
  },
  {
    title: "SEO and launch support image",
    description:
      "Good for pages that talk about SEO, Google visibility, marketing support, hosting, or launch help.",
    prompt:
      "Modern SEO and website launch concept, laptop and phone showing clean analytics and search-style interface elements, professional business atmosphere, soft blue and gray palette, realistic photo illustration, rounded UI shapes, no text, modern and credible.",
  },
  {
    title: "Process or contact section image",
    description:
      "Useful for process, contact, or support sections when you want the page to feel approachable instead of corporate.",
    prompt:
      "Warm modern collaboration scene between web designer and client, laptop with website wireframes, clean office interior, soft daylight, minimal premium styling, rounded furniture and shapes, realistic photography, approachable but professional, no text.",
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
