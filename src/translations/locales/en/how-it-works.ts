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
  howItWorksImagePrompts: [
    {
      title: "Homepage hero image",
      description:
        "Useful for the homepage hero or a main banner that should feel premium, modern, and clean.",
      prompt:
        "Modern premium business website hero image, elegant workspace with laptop showing a stylish website mockup, soft natural light, clean desk, subtle cyan and neutral tones, realistic photography, minimal composition, rounded visual framing, no text, lots of negative space, polished and trustworthy.",
    },
    {
      title: "Branding and design section image",
      description:
        "Useful for sections about logo work, visual direction, colors, and overall design identity.",
      prompt:
        "Creative branding moodboard scene with logo sketches, typography samples, color swatches, wireframes, modern studio desk, premium minimal aesthetic, soft shadows, realistic photography, rounded objects and corners, neutral background, no text overlays.",
    },
    {
      title: "SEO and launch support image",
      description:
        "Useful for pages that talk about SEO, Google visibility, marketing support, hosting, or launch help.",
      prompt:
        "Modern SEO and website launch concept, laptop and phone showing clean analytics and search-style interface elements, professional business atmosphere, soft blue and gray palette, realistic photo illustration, rounded UI shapes, no text, modern and credible.",
    },
    {
      title: "Process or contact section image",
      description:
        "Useful for process, contact, or support sections when you want the page to feel approachable instead of overly corporate.",
      prompt:
        "Warm modern collaboration scene between web designer and client, laptop with website wireframes, clean office interior, soft daylight, minimal premium styling, rounded furniture and shapes, realistic photography, approachable but professional, no text.",
    },
  ],
} satisfies Pick<SiteContent, "howItWorks" | "howItWorksIntro" | "howItWorksCoverage" | "howItWorksSteps" | "howItWorksPreparationNotes" | "howItWorksImagePrompts">;

export { enHowItWorksSection };
