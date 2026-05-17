import type { PortfolioFact, ServiceOffer, SiteContent } from "@/translations/schema";
import { contactDetails } from "@/translations/shared";

const enServiceOffers: ServiceOffer[] = [
  {
    slug: "business-websites-and-catalogues",
    title: "Business websites and catalogues",
    headline: "Business website development for clear service pages, enquiries, and trust.",
    seoTitle: "Business website development and company websites | Melvin Mihaylov",
    seoDescription:
      "Affordable business website development for company websites, service pages, and catalogues with clear structure, enquiries, and SEO-ready foundations.",
    description:
      "For micro businesses, small businesses, local companies, studios, restaurants, products, menus, and broader company presentations that need a clean, modern, and trustworthy business website with a clearer path to enquiries.",
    bullets: [
      "Custom homepage and inner pages shaped around the offer and the service flow",
      "Clear contact, enquiry, call, or booking path",
      "SEO-friendly page structure and headings for better indexing readiness",
      "Strong presentation on phones and laptops",
    ],
    tags: ["Business websites", "Company website", "Catalogues", "Small business website"],
    idealFor: [
      "Micro businesses and solo founders who need a stronger first website",
      "Service businesses that need a clearer online presence",
      "Small businesses looking for a first professional website",
      "Company websites and catalogues that do not need a full ecommerce build",
    ],
    pricingHint:
      "Smaller business websites often fit inside the lighter pricing ranges, while larger company websites depend on page count, structure, and how much content needs shaping.",
    ctaLabel: "Request a free demo",
    faq: [
      {
        question: "How much does a small business website cost?",
        answer:
          "A lighter small business website often starts around the entry pricing range, while a fuller company website with more pages and stronger structure depends on scope, content, and revisions.",
      },
      {
        question: "Can you build an affordable business website without making it look cheap?",
        answer:
          "Yes. The goal is to keep the scope practical and the structure clear so the website stays affordable while still looking professional and trustworthy.",
      },
      {
        question: "Is this suitable if I need my first company website?",
        answer:
          "Yes. This is a good fit if you need a first real website for a service business, studio, or local company and want help with the structure, wording, and launch direction too.",
      },
      {
        question: "Is this suitable for a micro business or solo founder too?",
        answer:
          "Yes. A micro business or solo founder can start with a lighter, more affordable scope first, then expand the website once the offer, traction, and budget grow.",
      },
    ],
  },
  {
    slug: "portfolio-and-gallery-websites",
    title: "Portfolio and visual websites",
    headline: "Portfolio websites and visual brand websites that feel more custom and memorable.",
    seoTitle: "Portfolio website design and visual websites | Melvin Mihaylov",
    seoDescription:
      "Portfolio website design for photographers, architects, creators, studios, and visual brands that need a stronger first impression.",
    description:
      "For creators, photographers, architects, beauty brands, car projects, and businesses that need a stronger visual presentation and a more memorable portfolio website.",
    bullets: [
      "Portfolio websites, gallery pages, and image-led layouts",
      "Custom sections shaped around the visual style of the brand",
      "Service, about, and contact pages that still feel polished and intentional",
      "A stronger first impression for people who buy with their eyes first",
    ],
    tags: ["Portfolio website", "Visual website", "Galleries", "Personal brand"],
    idealFor: [
      "Photographers, architects, designers, and visual studios",
      "Beauty, lifestyle, and premium-feel brands",
      "Personal brands that need stronger presentation than a basic brochure site",
    ],
    pricingHint:
      "Portfolio website pricing depends mostly on how many sections, galleries, animations, and image-heavy layouts are involved, plus how ready the content is.",
    ctaLabel: "Tell me about your idea",
    faq: [
      {
        question: "How much does a portfolio website cost?",
        answer:
          "A simpler portfolio website can stay near the lighter pricing range, while more visual and custom projects with extra sections, galleries, and refinement depend on the final scope.",
      },
      {
        question: "Can it feel custom instead of template-like?",
        answer:
          "Yes. The point of a visual website is to match the brand mood, the work style, and the type of client you want to impress rather than forcing everything into a rigid template.",
      },
      {
        question: "Is this only for photographers and artists?",
        answer:
          "No. Portfolio-style websites also work well for studios, consultants, service brands, car projects, and businesses where visual trust matters a lot.",
      },
    ],
  },
  {
    slug: "landing-pages-and-campaign-pages",
    title: "Landing pages and campaign pages",
    headline: "Landing page design for offers, ads, and clearer enquiries.",
    seoTitle: "Landing page design and campaign pages | Melvin Mihaylov",
    seoDescription:
      "Landing page design for offers, ads, campaign pages, and lead generation with clearer messaging, stronger structure, and practical pricing.",
    description:
      "For offers, campaigns, ads, and services that need a landing page or campaign page with clearer messaging, stronger CTA sections, and a cleaner conversion path.",
    bullets: [
      "Landing pages for Google Ads, Meta campaigns, launches, and direct enquiries",
      "Clear core message, offer framing, contact form, and CTA flow",
      "Structure shaped around search intent, service intent, or one focused campaign goal",
      "A practical option when you need something more affordable than a full website",
    ],
    tags: ["Landing page", "Campaign page", "Sales page", "Affordable website option"],
    idealFor: [
      "One focused service, offer, or seasonal campaign",
      "Lead generation pages for paid traffic or faster launch needs",
      "Businesses that want an affordable first step before expanding into a full website",
    ],
    pricingHint:
      "Landing pages are often the fastest and most affordable website option when you do not need a full company website yet.",
    ctaLabel: "Request a free call",
    faq: [
      {
        question: "How much does a landing page cost?",
        answer:
          "Landing pages are usually among the more affordable website options and often sit inside the lighter pricing range when the goal, content, and offer are already clear.",
      },
      {
        question: "Can a landing page replace a full website for now?",
        answer:
          "Yes. If the focus is one service, one offer, or one campaign, a strong landing page is often the fastest and smartest starting point.",
      },
      {
        question: "Is this a good option if I need a cheaper website start?",
        answer:
          "Yes. A landing page is often the most practical low-friction way to launch something professional without committing to a larger website immediately.",
      },
    ],
  },
  {
    slug: "online-shops-and-product-pages",
    title: "Online shops and product pages",
    headline: "Smaller online shops and product pages with clearer buying flow.",
    seoTitle: "Online shop development and product pages | Melvin Mihaylov",
    seoDescription:
      "Online shop development for smaller stores, product pages, and sales sections with cleaner structure, stronger trust, and practical launch help.",
    description:
      "For smaller online shops, product pages, and sales-led projects that need cleaner product presentation, better trust, and a more confident buying path.",
    bullets: [
      "Smaller online shops with clearer structure and stronger product presentation",
      "Product pages, offer sections, and trust-building content blocks",
      "Help with launch setup, payments, and practical go-live details",
      "A more conversion-aware layout without unnecessary ecommerce bloat",
    ],
    tags: ["Online shop", "Product pages", "Ecommerce website", "Sales pages"],
    idealFor: [
      "Smaller stores and niche product brands",
      "Businesses that need clearer product presentation before scaling",
      "Projects where trust, structure, and launch support matter as much as design",
    ],
    pricingHint:
      "Online shop pricing depends on how many products, categories, payment needs, and custom flows are involved, so it is usually scoped more carefully than a simple brochure website.",
    ctaLabel: "Ask about your shop",
    faq: [
      {
        question: "How much does an online shop cost?",
        answer:
          "A smaller online shop usually starts above a standard brochure-style website because it includes product structure, payment flow, and more sales-focused logic.",
      },
      {
        question: "Do you only handle small shops?",
        answer:
          "I can also take on broader ecommerce work, but larger shops are quoted based on the exact scope, integrations, and product complexity involved.",
      },
      {
        question: "Can we start smaller and expand later?",
        answer:
          "Yes. Starting with a cleaner smaller version is often the smarter move, then expanding once the offer and the early results are clearer.",
      },
    ],
  },
  {
    slug: "ai-project-rescue-and-website-redesigns",
    title: "Website redesigns and AI project rescue",
    headline: "Website redesigns, AI cleanup, and finishing half-built projects properly.",
    seoTitle: "Website redesign, AI website cleanup, and finishing unfinished websites | Melvin Mihaylov",
    seoDescription:
      "Website redesign help, AI website cleanup, and finishing unfinished websites started with ChatGPT, Claude, old templates, or messy drafts.",
    description:
      "If a website already started with ChatGPT, Claude, an old template, or a half-built draft, I can clean it up, redesign the weak parts, and prepare it for a real launch. That applies both to smaller businesses and to larger custom projects that need stronger structure.",
    bullets: [
      "Cleanup for AI-generated drafts and unfinished websites",
      "Website redesign and structural improvements for older websites",
      "Fix weak sections, unclear messaging, and layout issues",
      "Prepare the project for hosting, launch, and future updates",
    ],
    tags: ["Website redesign", "AI website cleanup", "ChatGPT website help", "Affordable upgrade"],
    idealFor: [
      "Older websites that feel outdated or unclear",
      "Half-built AI projects that need real finishing",
      "Businesses looking for a more affordable improvement path than a full restart",
    ],
    pricingHint:
      "Website redesign pricing depends on whether the existing website is worth keeping as a base or whether rebuilding cleanly will save more time and money overall.",
    ctaLabel: "Ask for help",
    faq: [
      {
        question: "Can you finish a website started with ChatGPT or Claude?",
        answer:
          "Yes. That is one of the common cases I help with: cleaning weak sections, fixing structure, improving the design direction, and preparing the website for a real launch.",
      },
      {
        question: "Is a redesign cheaper than building a new website?",
        answer:
          "Sometimes yes, sometimes no. If the base is still usable, redesigning can be the more affordable route. If the old setup is too limiting, a cleaner rebuild can be the smarter option.",
      },
      {
        question: "Is this useful if I need a cheaper way to improve my website first?",
        answer:
          "Yes. When parts of the current website can be reused, a structured cleanup or redesign can be a more budget-friendly step than starting from zero immediately.",
      },
    ],
  },
];

const enAboutFacts: PortfolioFact[] = [
  {
    label: "Free intro call",
    value: "Talk through the idea before you commit",
  },
  {
    label: "Free first demo direction",
    value: "See the visual direction before payment",
  },
  {
    label: "Flexible scope",
    value: "Catalogues, portfolios, galleries, shops, and more",
  },
  {
    label: "Launch support",
    value: "Hosting, domain, Google SEO, and AI SEO help",
  },
];

const enHeroOffer = {
  label: "Professional websites without agency-sized pricing",
  title: "Business websites, landing pages, portfolios, online shops, and practical website help.",
  description:
    "I build clean, modern websites that look professional on every screen and stay practical in budget. If you need an affordable business website, landing page, portfolio website, online shop, or help finishing an unfinished website, I can shape the right scope around it for a micro business, a small business, or a broader custom project.",
  tags: ["Business websites", "Modern websites", "Landing pages", "Portfolio websites", "Online shops", "Website pricing", "AI website help"],
};

const enCoreSection = {
  person: {
    firstName: "Melvin",
    lastName: "Mihaylov",
    name: "Melvin Mihaylov",
    role: "Business website developer",
    avatar: "/images/me.avif",
    email: contactDetails.email,
    location: "Europe/Sofia",
    languages: ["English", "Bulgarian"],
  },
  social: [
    {
      name: "Email",
      icon: "email",
      link: `mailto:${contactDetails.email}`,
      essential: true,
    },
  ],
  newsletter: {
    display: false,
    title: `Contact ${"Melvin"}`,
    description: "Free calls, free demo directions, and practical help getting the website live.",
  },
  blog: {
    path: "/blog",
    label: "Blog",
    title: "Blog - Melvin Mihaylov",
    description: "The blog section is currently disabled.",
  },
  heroOffer: enHeroOffer,
  aboutFacts: enAboutFacts,
  serviceOffers: enServiceOffers,
} satisfies Pick<SiteContent, "person" | "social" | "newsletter" | "blog" | "heroOffer" | "aboutFacts" | "serviceOffers">;

export { enAboutFacts, enCoreSection, enHeroOffer, enServiceOffers };
