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
  const seoSupport = howItWorksCoverage.map((item) => item.description).join(" ");

  if (locale === "bg") {
    return [
      {
        question: "Какви уебсайтове изработва Melvin Mihaylov?",
        answer: `${heroOffer.description} Основните услуги включват ${listedServices}.`,
      },
      {
        question: "Как започва един проект?",
        answer: joinText([
          "Проектът започва с контакт, примери или дори AI подготвен план.",
          processSteps[0]?.description,
          processSteps[1]?.description,
        ]),
      },
      {
        question: "Помага ли със SEO, Google индексиране и хостинг?",
        answer: `Да. ${seoSupport}`,
      },
      {
        question: "Какви са цените?",
        answer: `Текущата ставка е 50 EUR на час вместо 100 EUR. ${pricingSummary.description}`,
      },
    ];
  }

  return [
    {
      question: "What kind of websites does Melvin Mihaylov build?",
      answer: `${heroOffer.description} Core services include ${listedServices}.`,
    },
    {
      question: "How does a project start?",
      answer: joinText([
        "Projects usually start with a message, examples, or even an AI-made plan from the client.",
        processSteps[0]?.description,
        processSteps[1]?.description,
      ]),
    },
    {
      question: "Do you help with SEO, Google indexing, and hosting?",
      answer: `Yes. ${seoSupport}`,
    },
    {
      question: "What are the prices?",
      answer: `The current working rate is 50 EUR per hour instead of 100 EUR per hour. ${pricingSummary.description}`,
    },
  ];
};

const getGlobalStructuredData = (locale: Locale): JsonLd[] => {
  const { heroOffer, home, person, serviceOffers } = getSiteContent(locale);
  const keywords = Array.from(
    new Set([
      ...heroOffer.tags,
      ...serviceOffers.map((offer) => offer.title),
      ...serviceOffers.flatMap((offer) => offer.tags),
    ]),
  ).join(", ");
  const faqEntries = getFrequentlyAskedQuestions(locale);

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
      logo: `${baseURL}/images/mmlogo.png`,
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
    {
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
    },
  ];
};

export { getGlobalStructuredData };
