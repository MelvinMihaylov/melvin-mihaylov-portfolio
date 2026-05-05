import type { SiteContent } from "@/translations/schema";

const bgUiSection = {
  ui: {
    brandLogoAlt: "Лого на Melvin Mihaylov",
    themeToggle: {
      switchToLight: "Превключи към светла тема",
      switchToDark: "Превключи към тъмна тема",
    },
    languageToggle: {
      switchToBg: "Превключи на български",
      switchToEn: "Превключи на английски",
    },
    footer: {
      tagline: "Модерни уебсайтове, SEO помощ и хостинг",
    },
    home: {
      primaryCta: "Виж какво правя",
      secondaryCta: "За мен",
      tertiaryCta: "Изпрати запитване",
      processTitle: "Как обикновено протича",
      stepLabel: "Стъпка",
    },
    about: {
      processTitle: "Как можем да работим заедно",
      stepLabel: "Стъпка",
      ctaTitle: "Започни с безплатен разговор, среща или първа визуална посока.",
      ctaDescription:
        "Ако вече имаш примери, скици или дори частично направена AI версия на сайта, мога да помогна тя да стане по-чист и реален проект.",
      emailCta: "Изпрати имейл",
      servicesCta: "Виж услугите",
    },
    work: {
      introTitle: "Какво правя - обяснено просто и ясно.",
      websiteTypesTitle: "Какви сайтове изработвам",
      supportTitle: "Подкрепа около сайта",
      ctaTitle: "Искаш и простия процес?",
      ctaDescription:
        "Страницата „Как работи“ показва целия flow - от първия контакт и примерите до безплатното демо, изработката, SEO, хостинга и помощта при launch.",
      emailCta: "Изпрати имейл",
    },
    pricing: {
      currentRateLabel: "Текуща цена за нов проект",
      popularBadge: "Тук започват повечето клиенти",
      currentRateDescription:
        "Това е актуалната работна цена за нови проекти. Получаваш същото модерно изпълнение, ясна комуникация и launch помощ - просто на по-лек стартов бюджет.",
      standardRateLabel: "Стандартна ставка",
      savingsDescription: "Новите проекти спестяват 50 EUR на час спрямо стандартната цена.",
      projectStartsFrom: "По-малките проекти обикновено започват от",
      estimatesTitle: "Примерни бюджети",
      estimatesDescription:
        "Това са ориентировъчни примери, за да е по-лесно да добиеш реална представа още преди разговора.",
      standardPriceLabel: "Стандартна цена",
      finalPriceTitle: "Какво влияе на крайната цена",
      ctaTitle: "Искаш по-точна оферта?",
      ctaDescription:
        "Изпрати кратко описание, няколко примера, които харесваш, или дори AI направен outline и ще дам по-реалистична насока за бюджета и проекта.",
      emailCta: "Изпрати имейл",
    },
    howItWorks: {
      primaryCta: "Поискай безплатно демо",
      secondaryCta: "Виж услугите",
      coverageTitle: "С какво мога да помогна",
      stepsTitle: "Как обикновено протича процесът",
      stepLabel: "Стъпка",
      preparationTitle: "Какво помага проектът да върви по-бързо",
      promptsTitle: "Готови идеи за image prompts",
      promptsDescription:
        "Ако искаш модерни визии за началната страница или други секции, тези prompt идеи са готови за директно поставяне в AI image tool.",
      promptLabel: "Prompt за AI инструмент",
      ctaTitle: "Започни с кратко съобщение, няколко примера и ще изградя първа посока оттам.",
      ctaDescription:
        "Ако вече имаш rough идея, референции или AI направен план, изпрати ги и ще ги оформя в реален сайт.",
      emailCta: "Изпрати имейл",
    },
    projectCard: {
      readDetails: "Виж детайли",
    },
    serviceDetails: {
      moreServices: "Още услуги",
    },
    notFound: {
      title: "Страницата не е намерена",
      description: "Страницата, която търсиш, не съществува.",
    },
    routeGuard: {
      protectedTitle: "Тази страница е защитена с парола",
      passwordLabel: "Парола",
      submit: "Вход",
      incorrectPassword: "Невалидна парола",
    },
  },
} satisfies Pick<SiteContent, "ui">;

export { bgUiSection };
