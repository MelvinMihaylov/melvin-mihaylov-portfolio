import { getContent } from "@/content";
import { type Locale, getLocalizedPath } from "./i18n";
import { getCanonicalUrl } from "./seo";
import { baseURL, contactDetails, person, sameAs } from "./site";

/**
 * Person + ProfessionalService + FAQ + Service graph for the landing page.
 * Returned as one `@graph` so the whole page is described by a single script tag.
 */
export function getLandingStructuredData(locale: Locale) {
  const content = getContent(locale);
  const pageUrl = getCanonicalUrl(getLocalizedPath(locale, "/"));
  const personId = `${baseURL}/#person`;
  const businessId = `${baseURL}/#business`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: person.name,
        url: pageUrl,
        image: `${baseURL}${person.avatar}`,
        email: contactDetails.email,
        telephone: contactDetails.phone,
        jobTitle: content.hero.eyebrow,
        description: content.meta.description,
        sameAs,
      },
      {
        "@type": "ProfessionalService",
        "@id": businessId,
        name: person.name,
        url: pageUrl,
        image: `${baseURL}${person.logo}`,
        email: contactDetails.email,
        telephone: contactDetails.phone,
        description: content.meta.description,
        founder: { "@id": personId },
        areaServed: { "@type": "Country", name: "Bulgaria" },
        priceRange: "€",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: content.services.eyebrow,
          itemListElement: content.services.items.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.name,
              description: service.body,
            },
          })),
        },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: content.meta.title,
        description: content.meta.description,
        inLanguage: locale,
        about: { "@id": businessId },
        isPartOf: {
          "@type": "WebSite",
          "@id": `${baseURL}/#website`,
          url: baseURL,
          name: person.name,
          inLanguage: locale,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: content.pricing.faq.map((entry) => ({
          "@type": "Question",
          name: entry.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: entry.answer,
          },
        })),
      },
    ],
  };
}
