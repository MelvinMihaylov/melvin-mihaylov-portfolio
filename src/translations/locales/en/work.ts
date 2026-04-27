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
  serviceDetails: [
    {
      slug: "business-websites-and-catalogues",
      publishedAt: "2026-04-26",
      title: "Business websites and catalogues",
      subtitle: "Service",
      summary:
        "Modern business websites, catalogues, and landing pages with a clear first impression and a practical contact flow.",
      sections: [
        {
          title: "Overview",
          description:
            "This service is for local businesses, studios, restaurants, products, menus, and company presentations that need a modern presence without turning the project into something unnecessarily complicated.",
        },
        {
          title: "What is included",
          bullets: [
            "Homepage and inner pages shaped around the business",
            "Clear contact, inquiry, or booking flow",
            "Responsive design that works well on phones and laptops",
          ],
        },
        {
          title: "Good fit for",
          bullets: ["Business catalogues", "Service websites", "Landing pages", "Company presentation sites"],
        },
        {
          title: "Why this works",
          description:
            "The goal is a clean, professional website that is easy for visitors to understand and practical for the business to use day to day.",
        },
      ],
    },
    {
      slug: "portfolio-and-gallery-websites",
      publishedAt: "2026-04-25",
      title: "Portfolio and visual websites",
      subtitle: "Service",
      summary:
        "Image-first websites for creators, personal brands, studios, and visual businesses that need a more custom presentation.",
      sections: [
        {
          title: "Overview",
          description:
            "This direction works well for creators, photographers, car projects, beauty brands, architects, and anyone who needs a more visual website shaped around their own style.",
        },
        {
          title: "What is included",
          bullets: [
            "Image-first layouts and gallery sections",
            "Custom sections built around the brand or project style",
            "A polished presentation on mobile as well",
          ],
        },
        {
          title: "Good fit for",
          bullets: ["Portfolios", "Galleries", "Studio pages", "Visual brands"],
        },
        {
          title: "Why this works",
          description:
            "Visual work needs room to breathe. The structure stays clear, but the final feel is more premium and more personal than a basic template.",
        },
      ],
    },
    {
      slug: "online-shops-and-sales-pages",
      publishedAt: "2026-04-24",
      title: "Online shops and sales pages",
      subtitle: "Service",
      summary:
        "Clean product pages and smaller online shops that make products easier to trust and easier to buy.",
      sections: [
        {
          title: "Overview",
          description:
            "This service is for smaller shops, product launches, and pages that need to present products clearly without making the shopping experience heavy or cluttered.",
        },
        {
          title: "What is included",
          bullets: [
            "Clean product structure and page hierarchy",
            "Modern visuals without unnecessary clutter",
            "Practical setup and guidance that respects the budget",
          ],
        },
        {
          title: "Good fit for",
          bullets: ["Smaller online shops", "Product launches", "Sales pages", "Product-focused landing pages"],
        },
        {
          title: "Why this works",
          description:
            "When products are presented clearly, the website feels more trustworthy. The focus stays on clarity, confidence, and a better buying flow.",
        },
      ],
    },
    {
      slug: "ai-project-rescue-and-launch-help",
      publishedAt: "2026-04-23",
      title: "AI project rescue and launch help",
      subtitle: "Service",
      summary:
        "Help finishing AI-started websites, cleaning them up, and preparing them for hosting, launch, and SEO.",
      sections: [
        {
          title: "Overview",
          description:
            "If you already started a project with ChatGPT, Claude, or another AI tool, I can help turn that rough beginning into something real, usable, and ready to launch.",
        },
        {
          title: "What is included",
          bullets: [
            "Finishing unfinished AI-generated pages",
            "Help with hosting, domains, deployment, and launch",
            "Google SEO and AI SEO improvements",
          ],
        },
        {
          title: "Good fit for",
          bullets: [
            "Half-finished AI-generated websites",
            "Projects that need cleanup before launch",
            "Clients who need practical deployment help",
          ],
        },
        {
          title: "Why this works",
          description:
            "AI can speed up the start, but projects still need structure, polish, and real implementation decisions before they are ready for production.",
        },
      ],
    },
  ],
} satisfies Pick<SiteContent, "work" | "workShowcase" | "workWebsiteTypes" | "workSupportAreas" | "serviceDetails">;

export { enWorkSection };
