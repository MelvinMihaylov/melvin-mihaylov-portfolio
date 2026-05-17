import type { Locale } from "@/resources/i18n";
import { bgContent } from "./locales/bg";
import { enContent } from "./locales/en";
import type { ServiceOffer, SiteContent } from "./schema";

export { contactDetails } from "./shared";
export type {
  FaqEntry,
  HowItWorksCoverage,
  MarketingShowcase,
  MarketingShowcaseSlide,
  PortfolioFact,
  PortfolioHighlight,
  PricingEstimate,
  ProcessStep,
  ServiceInfoBlock,
  ServiceOffer,
  SiteContent,
} from "./schema";

export const siteContentByLocale = {
  bg: bgContent,
  en: enContent,
} satisfies Record<Locale, SiteContent>;

export function getSiteContent(locale: Locale): SiteContent {
  return siteContentByLocale[locale];
}

export function getServiceOffer(locale: Locale, slug: string): ServiceOffer | undefined {
  return siteContentByLocale[locale].serviceOffers.find((offer) => offer.slug === slug);
}
