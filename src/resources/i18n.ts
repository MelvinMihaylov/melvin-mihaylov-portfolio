export const locales = ["bg", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "bg";
export const localeCookieName = "preferred-locale";

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && locales.includes(value as Locale);
}

export function normalizeLocale(value: string | null | undefined): Locale {
  return isLocale(value) ? value : defaultLocale;
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "bg" ? "en" : "bg";
}
