import type { SiteContent } from "@/translations/schema";
import { bgHeroOffer } from "./core";

const bgHomeSection = {
  home: {
    path: "/",
    label: "Начало",
    title: "Изработка на модерни сайтове за бизнес | Melvin Mihaylov",
    description: bgHeroOffer.description,
    headline: bgHeroOffer.title,
    featured: {
      display: true,
      title: bgHeroOffer.label,
      href: "/work",
    },
    subline:
      "Изработвам модерни сайтове за бизнес с ясна структура, разумен бюджет и помощ от първата идея до SEO, хостинга и пускането.",
  },
  homeShowcase: {
    title: "Как изглеждат сайтовете, по които работя",
    description:
      "От фирмени сайтове и каталози до лендинг страници и по-силно бранд представяне - това е типът работа, който правя, когато на клиента му трябва добро първо впечатление и ясна структура.",
    image: "/images/landingMarketingImage4.png",
    alt: "Пример за модерен уебсайт за бизнес в стила на Melvin Mihaylov",
  },
  homeShowcaseSlides: [
    {
      image: "/images/landingMarketingImage4.png",
      darkImage: "/images/landingMarketingImage4ForDarkTheme.png",
      alt: "Пример за модерен уебсайт за бизнес в стила на Melvin Mihaylov",
      variant: "landscape",
      objectPosition: "center center",
      backgroundPosition: "center center",
    },
    {
      image: "/images/landingMarketingImage3.png",
      darkImage: "/images/landingMarketingImage3ForDarkTheme.png",
      alt: "Брандирана концепция за модерен бизнес уебсайт с логото и цветовата палитра на Melvin Mihaylov",
      variant: "portrait",
      objectPosition: "center top",
      backgroundPosition: "center center",
    },
  ],
  homeHighlights: [
    {
      title: "Първа посока преди плащане",
      description:
        "Ако искаш първо да видиш посоката, мога да подготвя семпла начална концепция или демо на началната страница преди ангажимент.",
    },
    {
      title: "Ясна структура според целта",
      description:
        "Запитвания, записвания, продажби или по-силно представяне - структурата на сайта се прави според резултата, който търсиш.",
    },
    {
      title: "Модерен вид с разумен бюджет",
      description:
        "Целта е сайтът да изглежда професионално и актуално, без да става излишно скъп.",
    },
    {
      title: "SEO, хостинг и помощ след пускането",
      description:
        "След изработката мога да помогна с Google индексиране, SEO основи, хостинг и доизпипване.",
    },
  ],
  processSteps: [
    {
      title: "Кратък разговор",
      description:
        "Разказваш какво искаш, какъв бизнес имаш и какъв тип сайт ти трябва.",
    },
    {
      title: "Първа посока",
      description:
        "Преди плащане мога да подготвя първа визуална посока или демо, за да видиш дали усещането е правилно.",
    },
    {
      title: "Изработка и корекции според обратната връзка",
      description:
        "Сайтът се оформя около това, което наистина искаш, без да те вкарва насила в една готова шаблонна рамка.",
    },
    {
      title: "Пускане и последваща помощ",
      description: "Мога да помогна с хостинг, домейн, Google SEO и практичните задачи около пускането на сайта.",
    },
  ],
  homeInquiry: {
    tag: "Изпрати запитване",
    title: "Разкажи ми какъв сайт ти трябва и ще върна ясна посока.",
    description:
      "Остави имейл, телефон и тип проект. Подходящо е, ако търсиш сайт за бизнес, лендинг страница, портфолио или по-индивидуална идея.",
    benefits: [
      "Първа насока без ангажимент",
      "Подходящо за бизнес сайт, каталог или по-индивидуална идея",
      "Може и само с кратко описание",
    ],
    emailLabel: "Имейл",
    emailPlaceholder: "ivan@example.com",
    phoneLabel: "Телефон",
    phonePlaceholder: "+359 88 123 4567",
    phoneDescription: "По желание - полезно е, ако предпочиташ бързо обаждане.",
    projectTypeLabel: "Какъв проект търсиш",
    projectTypePlaceholder: "Избери тип проект",
    otherOptionLabel: "Друго",
    otherProjectLabel: "Ако е друго, опиши накратко",
    otherProjectPlaceholder: "Например система за записвания, обновяване на стар сайт, по-индивидуална идея...",
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
