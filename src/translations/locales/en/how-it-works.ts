import type { SiteContent } from "@/translations/schema";

const enHowItWorksSection = {
  howItWorks: {
    path: "/how-it-works",
    label: "How it works",
    title: "How it works - Melvin Mihaylov",
    description:
      "See the full website process: contact, references, free demo, build, hosting, SEO, and launch support.",
  },
  howItWorksIntro: {
    label: "From the first message to launch",
    title: "I can help with the full website flow, not just the final design.",
    description:
      "That can include logo direction, website theme and design, a free demo direction, SEO and marketing-minded structure, plus hosting and launch help when the site is ready.",
    tags: ["Logo direction", "Website theme", "Free demo", "SEO setup", "Marketing support", "Hosting"],
  },
  howItWorksCoverage: [
    {
      title: "Visual direction and brand basics",
      description:
        "If the brand still feels rough, I can help shape the logo direction, colors, typography, and overall theme so the website feels polished and consistent.",
      bullets: [
        "Logo refresh or first design direction",
        "Color, typography, and section style choices",
        "Reference-based visual direction and layout mood",
      ],
    },
    {
      title: "Website design and build",
      description:
        "Once the direction is clear, I build the homepage and inner pages around the business, the content, and the actions you want visitors to take.",
      bullets: [
        "Custom homepage and supporting pages",
        "Responsive layout for phone and desktop",
        "Contact, inquiry, and presentation sections shaped around your goal",
      ],
    },
    {
      title: "SEO and marketing support",
      description:
        "The structure can be prepared so Google understands the site more easily, with on-page SEO basics and sections that support visibility.",
      bullets: [
        "Clear headings, metadata, and page structure",
        "Service and landing sections shaped for search intent",
        "Support for indexing readiness and basic Google visibility",
      ],
    },
    {
      title: "Hosting and launch support",
      description:
        "I can stay involved after the build too, so going live does not become your problem alone.",
      bullets: [
        "Hosting and domain setup help",
        "Launch cleanup and final checks",
        "Ongoing support and updates after the site goes live",
      ],
    },
  ],
  howItWorksSteps: [
    {
      title: "Contact and goals",
      description: "You explain what the business does, what kind of website you need, and what result you want from it.",
    },
    {
      title: "Examples and references",
      description:
        "If you already know styles, layouts, competitors, or websites you like, send them over. Even an AI-made outline is useful.",
    },
    {
      title: "Free demo direction",
      description:
        "Before a full commitment, I can prepare a free first demo direction so you can see whether the approach feels right.",
    },
    {
      title: "Build and refine",
      description:
        "Once the direction is approved, I build the pages, adjust the details, and shape the site around your feedback.",
    },
    {
      title: "Launch and follow-up support",
      description:
        "I can handle hosting, SEO improvements, Google indexing support, and the practical launch tasks once the design work is finished.",
    },
  ],
  howItWorksPreparationNotes: [
    {
      title: "Knowing the goal helps a lot",
      description:
        "Even a simple note about whether you want leads, bookings, product sales, or a cleaner brand presence makes the project much easier to shape.",
    },
    {
      title: "Examples save time",
      description:
        "If you can show websites, colors, layouts, or sections you like, it becomes much easier to match the style you have in mind.",
    },
    {
      title: "AI plans are welcome",
      description:
        "If you used ChatGPT, Claude, or another AI tool to outline ideas and page structure, send it over - that often speeds up the whole process.",
    },
    {
      title: "Basic content is a big help",
      description:
        "Services, short texts, contact details, and any existing logo or images make the first version much stronger.",
    },
  ],
} satisfies Pick<SiteContent, "howItWorks" | "howItWorksIntro" | "howItWorksCoverage" | "howItWorksSteps" | "howItWorksPreparationNotes">;

export { enHowItWorksSection };
