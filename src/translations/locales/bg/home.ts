import type { SiteContent } from "@/translations/schema";
import { bgHeroOffer } from "./core";

const bgHomeSection = {
  home: {
    path: "/",
    image: "/images/og/home.jpg",
    label: "Начало",
    title: "Melvin Mihaylov - Модерни уебсайтове с практичен бюджет",
    description: bgHeroOffer.description,
    headline: bgHeroOffer.title,
    featured: {
      display: true,
      title: bgHeroOffer.label,
      href: "/work",
    },
    subline: bgHeroOffer.description,
  },
  homeShowcase: {
    title: "Как изглежда работата ми на практика",
    description:
      "От портфолиа и фирмени сайтове до лендинг страници и по-силно бранд представяне - това е типът модерна визия, който изграждам за клиенти, на които им трябва добро първо впечатление.",
    image: "/images/landingMarketingImage4.png",
    alt: "Пример за модерен сайт в бранда на Melvin Mihaylov",
  },
  homeShowcaseSlides: [
    {
      image: "/images/landingMarketingImage4.png",
      darkImage: "/images/landingMarketingImage4ForDarkTheme.png",
      alt: "Пример за модерен сайт в бранда на Melvin Mihaylov",
      variant: "landscape",
      objectPosition: "center center",
      backgroundPosition: "center center",
    },
    {
      image: "/images/landingMarketingImage3.png",
      darkImage: "/images/landingMarketingImage3ForDarkTheme.png",
      alt: "Брандирана концепция за сайт с логото и цветовата палитра на Melvin Mihaylov",
      variant: "portrait",
      objectPosition: "center top",
      backgroundPosition: "center center",
    },
  ],
  homeHighlights: [
    {
      title: "Безплатно демо преди плащане",
      description:
        "Ако искаш първо да видиш посоката, мога да подготвя семпла начална концепция или homepage demo преди ангажимент.",
    },
    {
      title: "Безплатни разговори и срещи",
      description:
        "Можеш спокойно да обясниш какво искаш, а аз ще помогна да оформим най-силното и най-практично решение.",
    },
    {
      title: "Модерна визия с разумен бюджет",
      description:
        "Целта е сайтът да изглежда професионално и актуално, без да става излишно скъп.",
    },
    {
      title: "Помощ след AI старт",
      description:
        "Ако вече си започнал с ChatGPT или Claude, мога да довърша проекта, да го изчистя, хостна и подобря за Google или AI SEO.",
    },
  ],
  processSteps: [
    {
      title: "Безплатен разговор или среща",
      description: "Разказваш какво искаш, какъв стил харесваш и какво трябва да постигне сайтът.",
    },
    {
      title: "Безплатна първа посока или демо",
      description:
        "Преди плащане мога да подготвя първа визуална посока или демо, за да видиш дали усещането е правилно.",
    },
    {
      title: "Изработка и корекции според обратната връзка",
      description:
        "Сайтът се оформя около това, което наистина искаш, без да те вкарва насила в една готова шаблонна рамка.",
    },
    {
      title: "Launch със съдействие",
      description: "Мога да помогна с хостинг, домейн, Google SEO, AI SEO и практичните launch задачи.",
    },
  ],
} satisfies Pick<SiteContent, "home" | "homeShowcase" | "homeShowcaseSlides" | "homeHighlights" | "processSteps">;

export { bgHomeSection };
