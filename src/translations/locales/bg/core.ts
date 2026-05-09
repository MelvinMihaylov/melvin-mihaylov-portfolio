import type { PortfolioFact, ServiceOffer, SiteContent } from "@/translations/schema";
import { contactDetails } from "@/translations/shared";

const bgServiceOffers: ServiceOffer[] = [
  {
    slug: "business-websites-and-catalogues",
    title: "Бизнес сайтове и каталози",
    description:
      "Подходящо за местни бизнеси, студиа, ресторанти и услуги, които имат нужда от ясен, модерен сайт или каталог.",
    bullets: [
      "Начална страница и вътрешни страници по мярка",
      "Ясен контакт, запитване или записване",
      "Добра визия и на телефон, и на лаптоп",
    ],
    tags: ["Изработка на сайт", "Бизнес сайт", "Каталог"],
    ctaLabel: "Поискай безплатно демо",
  },
  {
    slug: "portfolio-and-gallery-websites",
    title: "Портфолиа и визуални сайтове",
    description:
      "Подходящо за създатели, фотографи, архитекти, козметични брандове, автомобилни проекти и всеки, който има нужда от по-силно визуално представяне.",
    bullets: [
      "Портфолиа и сайтове за личен бранд",
      "Галерии и визуални секции",
      "Персонални страници според стила на бранда",
    ],
    tags: ["Портфолио сайт", "Галерия", "Визуален бранд"],
    ctaLabel: "Разкажи ми идеята си",
  },
  {
    slug: "online-shops-and-sales-pages",
    title: "Онлайн магазини и продажбени страници",
    description:
      "Подходящо за по-малки онлайн магазини, продуктови страници и лендинг страници за оферти, когато продуктът трябва да се представя по-ясно и по-уверено.",
    bullets: [
      "По-малки онлайн магазини и продуктови страници",
      "Лендинг страници за оферти и кампании",
      "По-чисто представяне и повече доверие към продукта",
    ],
    tags: ["Онлайн магазин", "Лендинг страница", "Продуктови страници"],
    ctaLabel: "Поискай безплатен разговор",
  },
  {
    slug: "ai-project-rescue-and-launch-help",
    title: "Довършване на започнати сайтове",
    description:
      "Ако сайтът е започнат с ChatGPT, Claude или друг инструмент с изкуствен интелект, мога да го подредя, довърша и подготвя за пускане.",
    bullets: [
      "Подреждане на чернови, направени с помощта на изкуствен интелект",
      "Поправка на недовършени секции и слаби решения",
      "Подготовка за хостинг, пускане и бъдещи промени",
    ],
    tags: ["Довършване на сайт", "Хостинг", "SEO"],
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
    value: "Виждаш първата посока преди плащане",
  },
  {
    label: "Гъвкав обхват",
    value: "Изработка на бизнес сайт, каталог, портфолио, лендинг или онлайн магазин",
  },
  {
    label: "Съдействие при пускане",
    value: "Хостинг, домейн, Google SEO и доработка след пускане",
  },
];

const bgHeroOffer = {
  label: "Модерен сайт с разумен бюджет",
  title: "Изработка на модерни сайтове за бизнес, каталози, портфолиа и онлайн магазини.",
  description:
    "Изработвам ясни и модерни сайтове за бизнеси, каталози, портфолиа, лендинг страници и по-малки онлайн магазини. Работя с ясен процес, разумен бюджет и реална помощ със SEO, хостинг и пускането на сайта.",
  tags: [
    "Изработка на сайт",
    "Бизнес сайтове",
    "Портфолиа",
    "Онлайн магазини",
    "Лендинг страници",
    "SEO и хостинг",
  ],
};

const bgCoreSection = {
  person: {
    firstName: "Melvin",
    lastName: "Mihaylov",
    name: "Melvin Mihaylov",
    role: "Уеб разработчик за бизнес сайтове",
    avatar: "/images/me.png",
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
    description: "Безплатен разговор, първа посока и реална помощ по изработката и пускането на сайта.",
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
