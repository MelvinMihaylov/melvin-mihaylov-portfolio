export {
  contactDetails,
  getSiteContent,
  type MarketingShowcaseSlide,
  type SiteContent,
} from "./site-content";

export {
  defaultLocale,
  getAlternateLocale,
  isLocale,
  localeCookieName,
  locales,
  normalizeLocale,
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
export { getFaqStructuredData, getFrequentlyAskedQuestions, getGlobalStructuredData } from "./structured-data";
