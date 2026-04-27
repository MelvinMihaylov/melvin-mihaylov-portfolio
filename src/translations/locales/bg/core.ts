import type { PortfolioFact, ServiceOffer, SiteContent } from "@/translations/schema";
import { contactDetails } from "@/translations/shared";

const bgServiceOffers: ServiceOffer[] = [
  {
    slug: "business-websites-and-catalogues",
    title: "Бизнес сайтове и каталози",
    description:
      "За местни бизнеси, студиа, ресторанти, продукти, менюта и фирмени представяния, които трябва да изглеждат модерно и ясно.",
    bullets: [
      "Начална страница и вътрешни страници по мярка",
      "Ясен контакт, запитване или записване",
      "Добра визия и на телефон, и на лаптоп",
    ],
    tags: ["Каталози", "Бизнес сайтове", "Лендинг страници"],
    ctaLabel: "Поискай безплатно демо",
  },
  {
    slug: "portfolio-and-gallery-websites",
    title: "Портфолиа и визуални сайтове",
    description:
      "За създатели, фотографи, архитекти, beauty брандове, автомобилни проекти и всеки, който има нужда от по-силно визуално представяне.",
    bullets: [
      "Портфолиа и сайтове за личен бранд",
      "Галерии и визуални секции",
      "Персонални страници според стила на бранда",
    ],
    tags: ["Портфолиа", "Галерии", "Визуални брандове"],
    ctaLabel: "Разкажи ми идеята си",
  },
  {
    slug: "online-shops-and-sales-pages",
    title: "Онлайн магазини и продажбени страници",
    description:
      "За по-малки магазини, продуктови представяния и страници, които трябва да продават по-ясно и по-уверено.",
    bullets: [
      "По-малки онлайн магазини и продуктови страници",
      "Лендинг страници за оферти и кампании",
      "По-чисто представяне и повече доверие към продукта",
    ],
    tags: ["Онлайн магазини", "Продуктови страници", "Модерен UI"],
    ctaLabel: "Поискай безплатен разговор",
  },
  {
    slug: "ai-project-rescue-and-launch-help",
    title: "AI проекти, довършване и launch помощ",
    description:
      "Ако сайтът е започнат с ChatGPT, Claude или друг AI инструмент, мога да го изчистя, довърша и подготвя за реална употреба.",
    bullets: [
      "Подреждане на AI-generated чернови",
      "Поправка на недовършени секции и слаби решения",
      "Подготовка за хостинг, launch и бъдещи промени",
    ],
    tags: ["ChatGPT / Claude помощ", "Хостинг", "SEO"],
    ctaLabel: "Поискай помощ",
  },
];

const bgAboutFacts: PortfolioFact[] = [
  {
    label: "Безплатен първи разговор",
    value: "Обсъждаме идеята преди да започнеш",
  },
  {
    label: "Безплатна първа демо посока",
    value: "Виждаш визията преди плащане",
  },
  {
    label: "Гъвкав обхват",
    value: "Каталози, портфолиа, галерии, магазини и още",
  },
  {
    label: "Съдействие при launch",
    value: "Хостинг, домейн, Google SEO и AI SEO",
  },
];

const bgHeroOffer = {
  label: "Професионални сайтове без цените на голяма агенция",
  title: "Модерни уебсайтове за бизнеси, каталози, портфолиа, онлайн магазини и още.",
  description:
    "Изграждам ясни и модерни сайтове, които изглеждат професионално на всеки екран и остават практични като бюджет. Безплатен първи разговор, безплатна демо посока и гъвкава работа според това, което наистина иска клиентът.",
  tags: [
    "Каталози",
    "Портфолиа",
    "Галерии",
    "Онлайн магазини",
    "Лендинг страници",
    "Индивидуални проекти",
  ],
};

const bgCoreSection = {
  person: {
    firstName: "Melvin",
    lastName: "Mihaylov",
    name: "Melvin Mihaylov",
    role: "Уеб разработчик",
    avatar: "/images/mmlogo.png",
    email: contactDetails.email,
    location: "Europe/Sofia",
    languages: ["Български", "English"],
  },
  social: [
    {
      name: "Имейл",
      icon: "email",
      link: `mailto:${contactDetails.email}`,
      essential: true,
    },
  ],
  newsletter: {
    display: false,
    title: `Свържи се с Melvin`,
    description: "Безплатни разговори, безплатни демо идеи и реална помощ за пускането на сайта.",
  },
  blog: {
    path: "/blog",
    label: "Блог",
    title: "Блог - Melvin Mihaylov",
    description: "Блог секцията в момента е изключена.",
  },
  heroOffer: bgHeroOffer,
  aboutFacts: bgAboutFacts,
  serviceOffers: bgServiceOffers,
} satisfies Pick<SiteContent, "person" | "social" | "newsletter" | "blog" | "heroOffer" | "aboutFacts" | "serviceOffers">;

export { bgAboutFacts, bgCoreSection, bgHeroOffer, bgServiceOffers };
