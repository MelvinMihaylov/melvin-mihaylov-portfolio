import type { SiteContent } from "@/translations/schema";
import { bgHeroOffer } from "./core";

const bgHomeSection = {
  home: {
    path: "/",
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
  homeInquiry: {
    tag: "Изпрати запитване",
    title: "Разкажи ми какъв сайт или идея искаш и ще върна ясна посока.",
    description:
      "Остави имейл, телефон и тип проект. Когато изпратиш формата, получавам запитването директно по имейл и мога да ти пиша обратно с следващата стъпка.",
    benefits: ["Безплатна първа насока", "Подходящо и за custom идеи", "Може и само с кратко описание"],
    emailLabel: "Имейл",
    emailPlaceholder: "ivan@example.com",
    phoneLabel: "Телефон",
    phonePlaceholder: "+359 88 123 4567",
    phoneDescription: "По желание - полезно е, ако предпочиташ бързо обаждане.",
    projectTypeLabel: "Какъв проект търсиш",
    projectTypePlaceholder: "Избери тип проект",
    otherOptionLabel: "Друго",
    otherProjectLabel: "Ако е друго, опиши накратко",
    otherProjectPlaceholder: "Например booking система, redesign, по-custom идея...",
    messageLabel: "Кратко описание",
    messagePlaceholder: "Можеш да добавиш какво искаш, примери, срок или какъв стил харесваш.",
    submitLabel: "Изпрати запитване",
    submitHint: "Запитването се изпраща директно на имейла ми.",
    directContactTitle: "Предпочиташ директно?",
    directContactDescription: "Можеш да пишеш и направо на имейл или да се обадиш, ако така ти е по-удобно.",
    submission: {
      sendingLabel: "Изпращане...",
      successMessage: "Запитването е изпратено успешно. Ще ти върна отговор възможно най-скоро.",
      errorMessage: "Не успях да изпратя запитването. Опитай отново след малко или ми пиши директно.",
    },
    validation: {
      emailRequired: "Добави имейл, за да мога да ти върна отговор.",
      emailInvalid: "Добави валиден имейл адрес.",
      projectTypeRequired: "Избери тип проект.",
      otherProjectRequired: "Опиши накратко какво имаш предвид.",
    },
  },
} satisfies Pick<SiteContent, "home" | "homeShowcase" | "homeShowcaseSlides" | "homeHighlights" | "processSteps" | "homeInquiry">;

export { bgHomeSection };
