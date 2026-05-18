import type { SiteContent } from "@/translations/schema";

const enWorkSection = {
  work: {
    path: "/work",
    label: "Services",
    title: "Business website and landing page services | Melvin Mihaylov",
    description:
      "Overview of the business websites, landing pages, portfolios, online shops, redesign help, and launch support I offer.",
  },
  workShowcase: {
    title: "A simple overview of what I can do for you",
    description:
      "This page is the short version of the website types I build, the extra support I can handle, and where SEO, hosting, launch help, and campaign pages fit in.",
    image: "/images/services/services-overview.avif",
    alt: "Premium overview of modern business websites, landing pages, stores, and custom digital experiences",
  },
  workWebsiteTypes: [
    {
      title: "Business websites and catalogues",
      description:
        "For micro businesses, small businesses, studios, products, restaurants, menus, and company presentations that need a clear, trustworthy business website.",
      bullets: [
        "Business websites and service pages",
        "Catalogues, menus, and company overview pages",
        "Clear structure that makes the offer easy to understand",
      ],
      serviceSlug: "business-websites-and-catalogues",
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
      serviceSlug: "portfolio-and-gallery-websites",
    },
    {
      title: "Landing pages and campaign pages",
      description:
        "For services, offers, and campaigns where one focused landing page is the smarter and more affordable place to start.",
      bullets: [
        "Landing pages for ads, campaigns, and direct enquiries",
        "Stronger CTA sections and clearer message hierarchy",
        "A faster and more affordable launch option than a full website",
      ],
      serviceSlug: "landing-pages-and-campaign-pages",
    },
    {
      title: "Online shops and product pages",
      description:
        "For smaller stores and product-led projects that need cleaner structure, stronger trust, and a more confident buying path.",
      bullets: [
        "Smaller online shops and focused product pages",
        "Sales sections and trust-building content",
        "Cleaner presentation before scaling further",
      ],
      serviceSlug: "online-shops-and-product-pages",
    },
    {
      title: "Website redesigns and unfinished projects",
      description:
        "If a website already started with AI, an old template, or a half-built draft, I can clean up the weak parts and prepare it for a real launch.",
      bullets: [
        "Cleanup for AI-generated drafts",
        "Website redesign and structure fixes",
        "Prepare the project for hosting, launch, and future updates",
      ],
      serviceSlug: "ai-project-rescue-and-website-redesigns",
    },
  ],
  workSupportAreas: [
    {
      title: "SEO optimization",
      subtitle: "Search-ready structure, indexing signals, and cleaner visibility foundations.",
      description:
        "I can help structure the website so Google can understand, index, and present it more easily.",
      badges: ["SEO", "Indexing", "Metadata"],
      image: "/images/services/seo-optimization.avif",
      imageAlt: "Premium website SEO interface with refined structure, visibility cues, and search-ready presentation",
      bullets: [
        "Clear headings, page structure, and metadata",
        "Better internal flow between pages and content",
        "Practical improvements for Google indexing readiness",
      ],
    },
    {
      title: "Marketing pages and Google campaigns",
      subtitle: "Campaign-focused pages with clearer offers, cleaner ad flow, and better enquiry paths.",
      description:
        "If you need campaign support, I can build landing pages and sections that fit ads, offers, and lead generation better.",
      badges: ["Campaigns", "Landing pages", "Lead generation"],
      image: "/images/services/landing-pages-and-campaign-pages.avif",
      imageAlt: "Premium landing page system with focused campaign layouts and polished conversion sections",
      bullets: [
        "Landing pages for ads and campaigns",
        "Clear offers and stronger call-to-action sections",
        "Website structure shaped around services and search intent",
      ],
    },
    {
      title: "Hosting, domain, and launch support",
      subtitle: "Technical help so the project actually goes live cleanly and stays easier to manage.",
      description:
        "The project does not need to stop at the design. I can help with the practical technical side too.",
      badges: ["Hosting", "Domain", "Launch"],
      image: "/images/services/hosting-domain-and-launch-support.avif",
      imageAlt: "Premium hosting and launch support interface with domain setup, infrastructure cues, and go-live readiness",
      bullets: [
        "Hosting and domain setup help",
        "Launch fixes, cleanup, and go-live support",
        "Ongoing updates and changes after launch",
      ],
    },
    {
      title: "Larger projects and broader custom scope",
      subtitle: "When the scope grows beyond a simple brochure site, I can shape the structure around it.",
      description:
        "If the project is larger than a standard brochure-style website, I can shape a more custom structure, staged scope, and quote around the real requirements.",
      badges: ["Custom scope", "Client areas", "Integrations"],
      image: "/images/services/larger-custom-projects-and-broader-scope.avif",
      imageAlt: "Premium overview of a larger custom website system with multiple polished digital surfaces",
      bullets: [
        "Larger business websites and multi-page builds",
        "More complex structure, customer areas, and custom functionality",
        "Custom quotes based on goals, integrations, and timeline",
      ],
    },
  ],
} satisfies Pick<SiteContent, "work" | "workShowcase" | "workWebsiteTypes" | "workSupportAreas">;

export { enWorkSection };
