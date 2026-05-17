export {
  contactDetails,
  getServiceOffer,
  getSiteContent,
  type FaqEntry,
  type MarketingShowcaseSlide,
  type SiteContent,
} from "./site-content";

export {
  defaultLocale,
  getAlternateOpenGraphLocales,
  getAlternateLocale,
  getLocaleFromPathname,
  getLocaleNativeLabel,
  getLocalePrefix,
  getLocaleShortLabel,
  getLocalizedPath,
  getOpenGraphLocale,
  getPathnameWithoutLocale,
  isLocale,
  locales,
  type Locale,
} from "./i18n";

export {
  display,
  mailchimp,
  routes,
  baseURL,
  fonts,
  style,
  schema,
  sameAs,
  socialSharing,
  effects,
  dataStyle,
} from "./once-ui.config";

export { formspreeEndpoint, hasConfiguredFormspree } from "./formspree";
export { buildPageMetadata, getCanonicalUrl, getOgImagePath, searchRobotsDirectives } from "./seo";
export { buildFaqStructuredData, getFaqStructuredData, getFrequentlyAskedQuestions, getGlobalStructuredData } from "./structured-data";
