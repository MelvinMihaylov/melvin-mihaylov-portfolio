import type { Locale } from "./i18n";
import { baseURL } from "./once-ui.config";
import { contactDetails, getSiteContent } from "./site-content";

type JsonLd = Record<string, unknown>;

const businessId = `${baseURL}#business`;
const personId = `${baseURL}#person`;
const websiteId = `${baseURL}#website`;
const faqId = `${baseURL}#faq`;
const serviceArea = ["Bulgaria", "Europe", "Remote"];

const joinText = (parts: Array<string | undefined>) => parts.filter((part): part is string => Boolean(part)).join(" ");

const getFrequentlyAskedQuestions = (locale: Locale) => {
  const { heroOffer, howItWorksCoverage, pricingSummary, processSteps, serviceOffers } = getSiteContent(locale);
  const listedServices = serviceOffers.map((offer) => offer.title).join(", ");
  const supportAfterBuild = joinText([howItWorksCoverage[2]?.description, howItWorksCoverage[3]?.description]);

  if (locale === "bg") {
    return [
      {
        question: "Какви сайтове изработваш?",
        answer: `Изработвам сайтове за бизнес, каталози, портфолиа, лендинг страници и по-малки онлайн магазини. Основните направления са ${listedServices}.`,
      },
      {
        question: "Можеш ли да поемеш по-голям проект?",
        answer:
          "Да. Ако проектът включва повече страници, по-сложна структура, клиентска зона, каталог, резервации или друга по-голяма функционалност, подготвям индивидуална оферта според обхвата, сроковете и нужните интеграции.",
      },
      {
        question: "Правиш ли автоматизации и връзки с други системи?",
        answer:
          "Да. Мога да поема автоматизации за запитвания, известия, календар, CRM, форми, имейл потоци и други работни процеси. При по-сложни автоматизации подготвям индивидуална оферта според конкретната задача.",
      },
      {
        question: "Може ли сайтът да има абонаменти, онлайн плащания и профили за клиенти?",
        answer:
          "Да. Мога да изградя решение с абонаменти, плащания, профили за клиенти и ограничено съдържание. Това вече е по-голям проект и офертата се определя според точната функционалност.",
      },
      {
        question: "Как започва работата по сайта?",
        answer: joinText([
          "Започваме с кратък разговор, примери или предварително нахвърлен план.",
          processSteps[0]?.description,
          processSteps[1]?.description,
        ]),
      },
      {
        question: "Можеш ли да обновиш стар сайт?",
        answer:
          "Да. Мога да обновя стар сайт с по-добър дизайн, по-ясна структура, по-бърза работа и по-добра видимост в Google. Когато е нужно, предлагам и изцяло нова изработка върху чиста основа.",
      },
      {
        question: "Помагаш ли и след изработката?",
        answer: `Да. ${supportAfterBuild}`,
      },
      {
        question: "Колко струва един сайт?",
        answer: `По-малките проекти обикновено започват от 300 EUR, а текущата ставка е 50 EUR на час. ${pricingSummary.description}`,
      },
    ];
  }

  return [
    {
      question: "What kind of websites do you build?",
      answer: `${heroOffer.description} Core services include ${listedServices}.`,
    },
    {
      question: "Can you take on larger custom projects?",
      answer:
        "Yes. If the project includes more pages, more complex structure, a client area, catalog, bookings, or broader functionality, I prepare a custom offer based on scope, timeline, and required integrations.",
    },
    {
      question: "Do you build automations and system integrations?",
      answer:
        "Yes. I can handle automations for enquiries, notifications, calendars, CRM, forms, email flows, and other workflows. For more advanced automation work, I prepare a custom offer based on the exact requirements.",
    },
    {
      question: "Can the website include subscriptions, online payments, or customer accounts?",
      answer:
        "Yes. I can build a solution with subscriptions, payments, customer accounts, and gated content. That is usually a larger project, so the offer depends on the exact functionality.",
    },
    {
      question: "How does a project start?",
      answer: joinText([
        "Projects usually start with a short message, examples, or a rough plan.",
        processSteps[0]?.description,
        processSteps[1]?.description,
      ]),
    },
    {
      question: "Can you redesign an existing website?",
      answer:
        "Yes. I can improve an older website with better design, clearer structure, faster performance, and stronger Google visibility. When it makes more sense, I may recommend rebuilding it cleanly from scratch.",
    },
    {
      question: "Do you also help after the build?",
      answer: `Yes. ${supportAfterBuild}`,
    },
    {
      question: "How much does a website cost?",
      answer: `Smaller projects usually start around 300 EUR, and the current working rate is 50 EUR per hour. ${pricingSummary.description}`,
    },
  ];
};

const getFaqStructuredData = (locale: Locale): JsonLd => {
  const faqEntries = getFrequentlyAskedQuestions(locale);

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": faqId,
    mainEntity: faqEntries.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: entry.answer,
      },
    })),
  };
};

const getGlobalStructuredData = (locale: Locale): JsonLd[] => {
  const { heroOffer, home, person, pricingSummary, serviceOffers } = getSiteContent(locale);
  const keywords = Array.from(
    new Set([
      ...heroOffer.tags,
      ...pricingSummary.tags,
      ...serviceOffers.map((offer) => offer.title),
      ...serviceOffers.flatMap((offer) => offer.tags),
    ]),
  ).join(", ");

  return [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": personId,
      name: person.name,
      url: baseURL,
      image: `${baseURL}${person.avatar}`,
      email: contactDetails.email,
      telephone: contactDetails.phone,
      jobTitle: person.role,
      knowsLanguage: person.languages,
      knowsAbout: keywords,
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": businessId,
      name: person.name,
      url: baseURL,
      description: home.description,
      image: `${baseURL}${person.avatar}`,
      logo: `${baseURL}/icon.png`,
      areaServed: serviceArea,
      availableLanguage: person.languages,
      email: contactDetails.email,
      telephone: contactDetails.phone,
      priceRange: "€€",
      founder: {
        "@id": personId,
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: locale === "bg" ? "запитвания за проект" : "project enquiries",
        email: contactDetails.email,
        telephone: contactDetails.phone,
        availableLanguage: person.languages,
        areaServed: serviceArea,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: locale === "bg" ? "Уеб услуги" : "Web services",
        itemListElement: serviceOffers.map((offer, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Service",
            name: offer.title,
            description: joinText([offer.description, ...offer.bullets]),
            serviceType: offer.title,
            areaServed: serviceArea,
            provider: {
              "@id": businessId,
            },
          },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": websiteId,
      url: baseURL,
      name: person.name,
      description: home.description,
      inLanguage: ["bg", "en"],
      keywords,
      publisher: {
        "@id": businessId,
      },
      about: {
        "@id": personId,
      },
    },
  ];
};

export { getFaqStructuredData, getFrequentlyAskedQuestions, getGlobalStructuredData };
