/**
 * Content model for the single-page landing site.
 * Every string the page renders comes from here, so BG and EN stay in lockstep —
 * the `satisfies LandingContent` on each locale file makes a missing key a build error.
 */

export type NavKey = "services" | "integrations" | "process" | "about" | "pricing";

export type CapabilityKey = "accounting" | "payments" | "dropshipping" | "crm";

export type ProviderKey =
  | "econt"
  | "speedy"
  | "shopify"
  | "woocommerce"
  | "stripe"
  | "mypos"
  | "borica"
  | "epay"
  | "paysera"
  | "revolut"
  | "custom";

export type ServiceKey = "business" | "landing" | "commerce" | "blog" | "crm" | "redesign";

export type ExampleKey =
  | "blog"
  | "menu"
  | "booking"
  | "shop"
  | "dropshipping"
  | "catalogue"
  | "detailing"
  | "print3d"
  | "portfolio";

export type PledgeKey = "idea" | "fast" | "price" | "open";

export type ConceptKey = "renovation" | "wine" | "coffee" | "honey";

export type DemoTabKey = "integrations" | "crm" | "analytics";

export type Concept = {
  key: ConceptKey;
  /** Fictional brand shown inside the preview — labelled as a concept, not a client. */
  brand: string;
  brandAccent?: string;
  navItems: string[];
  kicker: string;
  headlineTop: string;
  headlineBottom: string;
  link: string;
  footLeft: string;
  footRight: string;
  /** Labels for a draggable before/after split; without it the preview is a single photo. */
  compare?: { before: string; after: string; label: string };
  /** Caption below the preview. */
  conceptLabel: string;
  title: string;
  meta: string;
};

export type Service = {
  key: ServiceKey;
  name: string;
  subtitle: string;
  body: string;
  tags: string[];
  cta: string;
};

export type Capability = {
  key: CapabilityKey;
  flagship?: boolean;
  badge?: string;
  title: string;
  body: string;
  points: string[];
};

/** A short promise in the "why it matters" section. */
export type Pledge = {
  key: PledgeKey;
  title: string;
  body: string;
};

/**
 * Strings rendered inside a demo-site mock. The shape is deliberately generic —
 * each demo renderer picks the fields it needs — so adding a demo doesn't mean
 * adding a type.
 */
export type ExamplePreview = {
  /** Invented brand shown in the mock's own nav. */
  brand: string;
  nav: string[];
  heading: string;
  /** Second, accented line of the heading. */
  emphasis?: string;
  meta: string;
  /** A short extra line: a kicker, a breadcrumb or a newsletter prompt. */
  note?: string;
  items: { label: string; detail?: string; value?: string }[];
  cta?: string;
};

/** One switchable entry in the "what else I can build" showcase. */
export type Example = {
  key: ExampleKey;
  name: string;
  body: string;
  preview: ExamplePreview;
};

export type Provider = {
  key: ProviderKey;
  name: string;
  category: string;
};

/** One collapsible row in the integrations panel. */
export type IntegrationGroup = {
  key: "commerce" | "payments" | "delivery" | "accounting" | "custom";
  name: string;
  /** Shown on the closed row, so the panel reads at a glance. */
  summary: string;
  /** Revealed on open — what actually gets automated. */
  detail: string;
  providers: string[];
};

export type FlowStage = {
  title: string;
  source: string;
};

export type CrmRow = {
  company: string;
  value: string;
  stage: string;
  status: "won" | "active" | "new";
};

export type Stat = {
  label: string;
  value: string;
  delta: string;
};

export type ProcessStep = {
  label: string;
  title: string;
  body: string;
};

export type PricePlan = {
  hours: string;
  name: string;
  body: string;
  price: string;
  priceSuffix: string;
  /** Smaller line under the price, e.g. the monthly hosting on a free build. */
  priceNote?: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

export type FaqEntry = {
  question: string;
  answer: string;
};

export type LandingContent = {
  meta: {
    title: string;
    description: string;
    ogAlt: string;
  };
  nav: Record<NavKey, string>;
  header: {
    skipLink: string;
    navLabel: string;
    homeLabel: string;
    cta: string;
    languageLabel: string;
    themeLabel: string;
    menuLabel: string;
    closeLabel: string;
  };
  hero: {
    eyebrow: string;
    titleLead: string;
    titleEmphasis: string;
    intro: string;
    primaryCta: string;
    secondaryCta: string;
    promise: string;
    scrollCue: string;
    index: string;
    browserUrl: string;
    orbitTop: string;
    orbitBottom: string;
  };
  marquee: string[];
  why: {
    eyebrow: string;
    titleLead: string;
    titleEmphasis: string;
    intro: string;
    pledges: Pledge[];
  };
  directions: {
    eyebrow: string;
    titleLead: string;
    titleEmphasis: string;
    intro: string;
    concepts: Concept[];
  };
  services: {
    eyebrow: string;
    titleLead: string;
    titleEmphasis: string;
    intro: string;
    items: Service[];
    examplesTitle: string;
    examplesNote: string;
    examples: Example[];
  };
  integrations: {
    eyebrow: string;
    titleLead: string;
    titleEmphasis: string;
    intro: string;
    capabilities: Capability[];
    panel: {
      kicker: string;
      title: string;
      groups: IntegrationGroup[];
      note: string;
      cta: string;
    };
    demo: {
      appName: string;
      label: string;
      tabs: Record<DemoTabKey, string>;
      integrations: {
        kicker: string;
        title: string;
        count: string;
        stages: FlowStage[];
        orderLabel: string;
        orderValue: string;
        orderNote: string;
        caption: string;
      };
      crm: {
        kicker: string;
        title: string;
        count: string;
        columns: [string, string, string, string];
        rows: CrmRow[];
        statusLabels: Record<CrmRow["status"], string>;
        caption: string;
      };
      analytics: {
        kicker: string;
        title: string;
        count: string;
        stats: Stat[];
        months: string[];
        caption: string;
      };
    };
  };
  process: {
    eyebrow: string;
    titleLead: string;
    titleEmphasis: string;
    intro: string;
    cta: string;
    steps: ProcessStep[];
  };
  about: {
    eyebrow: string;
    name: string;
    body: string;
    note: string;
  };
  pricing: {
    eyebrow: string;
    titleLead: string;
    titleEmphasis: string;
    intro: string;
    rateLabel: string;
    rate: string;
    rateUnit: string;
    plans: PricePlan[];
    customPrompt: string;
    customLink: string;
    faqEyebrow: string;
    faq: FaqEntry[];
  };
  freeBanner: {
    title: string;
    body: string;
    cta: string;
    closeLabel: string;
  };
  contact: {
    eyebrow: string;
    titleLead: string;
    titleEmphasis: string;
    intro: string;
    email: string;
    phone: string;
    phoneHref: string;
    form: {
      emailLabel: string;
      emailPlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      projectLabel: string;
      projectOptions: string[];
      messageLabel: string;
      messagePlaceholder: string;
      submit: string;
      note: string;
      sending: string;
      success: string;
      error: string;
    };
  };
  footer: {
    name: string;
    tagline: string;
    backToTop: string;
    copyright: string;
    motto: string;
    reduceMotion: string;
    restoreMotion: string;
  };
};
