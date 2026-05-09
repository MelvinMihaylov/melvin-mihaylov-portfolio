import type { SiteContent } from "@/translations/schema";

const enWorkSection = {
  work: {
    path: "/work",
    label: "Services",
    title: "Services - Melvin Mihaylov",
    description:
      "A clear overview of the website types, SEO help, Google visibility support, hosting, launch support, and marketing pages I offer.",
  },
  workShowcase: {
    title: "A simple overview of what I can do for you",
    description:
      "This page is the short version - what kinds of websites I build, what extra support I can handle, and where SEO, Google visibility, hosting, and marketing pages fit in.",
    image: "/images/landingMarketingImage2.png",
    alt: "Examples of marketplace, shop, and custom website design work",
  },
  workWebsiteTypes: [
    {
      title: "Business websites and catalogues",
      description:
        "For local businesses, studios, products, restaurants, menus, and company presentations that need to look clean, modern, and trustworthy.",
      bullets: [
        "Business websites and service pages",
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
        "Gallery layouts and image-first sections",
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
        "Cleaner structure and stronger trust around the product",
      ],
    },
    {
      title: "AI-started projects and rebuilds",
      description:
        "If a website already started with ChatGPT, Claude, or another AI tool, I can clean up the weak parts and prepare it for a real launch.",
      bullets: [
        "Cleanup for AI-generated drafts",
        "Fix unfinished sections and weak layout choices",
        "Prepare the project for hosting, launch, and future updates",
      ],
    },
  ],
  workSupportAreas: [
    {
      title: "SEO optimization",
      description:
        "I can help structure the website so Google can understand, index, and present it more easily.",
      bullets: [
        "Clear headings, page structure, and metadata",
        "Better internal flow between pages and content",
        "Practical improvements for Google indexing readiness",
      ],
    },
    {
      title: "Marketing pages and Google campaigns",
      description:
        "If you need campaign support, I can build landing pages and sections that fit ads, offers, and lead generation better.",
      bullets: [
        "Landing pages for ads and campaigns",
        "Clear offers and stronger call-to-action sections",
        "Website structure shaped around services and search intent",
      ],
    },
    {
      title: "Hosting, domain, and launch support",
      description:
        "The project does not need to stop at the design. I can help with the practical technical side too.",
      bullets: [
        "Hosting and domain setup help",
        "Launch fixes, cleanup, and go-live support",
        "Ongoing updates and changes after launch",
      ],
    },
  ],
} satisfies Pick<SiteContent, "work" | "workShowcase" | "workWebsiteTypes" | "workSupportAreas">;

export { enWorkSection };
