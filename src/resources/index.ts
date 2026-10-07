export {
  defaultLocale,
  getAlternateLocale,
  getAlternateOpenGraphLocales,
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

export { baseURL, contactDetails, person, sameAs } from "./site";
export { formspreeEndpoint, hasConfiguredFormspree } from "./formspree";
export { buildPageMetadata, getCanonicalUrl, getOgImagePath, searchRobotsDirectives } from "./seo";
export { getLandingStructuredData } from "./structured-data";
