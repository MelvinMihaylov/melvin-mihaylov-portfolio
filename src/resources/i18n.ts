export const locales = ["bg", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "bg";

const localeDefinitions = {
  bg: {
    shortLabel: "BG",
    nativeLabel: "Български",
    openGraphLocale: "bg_BG",
  },
  en: {
    shortLabel: "EN",
    nativeLabel: "English",
    openGraphLocale: "en_US",
  },
} satisfies Record<
  Locale,
  {
    shortLabel: string;
    nativeLabel: string;
    openGraphLocale: string;
  }
>;

function normalizePathname(pathname: string): string {
  if (!pathname) {
    return "/";
  }

  const withLeadingSlash = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const normalized = withLeadingSlash.replace(/\/+$/, "");

  return normalized || "/";
}

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && locales.includes(value as Locale);
}

export function getAlternateLocale(locale: Locale): Locale {
  const currentIndex = locales.indexOf(locale);
  const nextIndex = (currentIndex + 1) % locales.length;

  return locales[nextIndex] ?? defaultLocale;
}

export function getLocalePrefix(locale: Locale): string {
  return `/${locale}`;
}

export function getLocaleShortLabel(locale: Locale): string {
  return localeDefinitions[locale].shortLabel;
}

export function getLocaleNativeLabel(locale: Locale): string {
  return localeDefinitions[locale].nativeLabel;
}

export function getOpenGraphLocale(locale: Locale): string {
  return localeDefinitions[locale].openGraphLocale;
}

export function getAlternateOpenGraphLocales(locale: Locale): string[] {
  return locales.filter((entry) => entry !== locale).map((entry) => getOpenGraphLocale(entry));
}

export function getLocaleFromPathname(pathname: string): Locale {
  const normalizedPath = normalizePathname(pathname);

  for (const locale of locales) {
    const prefix = getLocalePrefix(locale);

    if (normalizedPath === prefix || normalizedPath.startsWith(`${prefix}/`)) {
      return locale;
    }
  }

  return defaultLocale;
}

export function getPathnameWithoutLocale(pathname: string): string {
  const normalizedPath = normalizePathname(pathname);
  for (const locale of locales) {
    const prefix = getLocalePrefix(locale);

    if (normalizedPath === prefix) {
      return "/";
    }

    if (normalizedPath.startsWith(`${prefix}/`)) {
      return normalizedPath.slice(prefix.length) || "/";
    }
  }

  return normalizedPath;
}

export function getLocalizedPath(locale: Locale, path: string): string {
  const normalizedPath = getPathnameWithoutLocale(normalizePathname(path));
  const prefix = getLocalePrefix(locale);

  if (normalizedPath === "/") {
    return prefix || "/";
  }

  return `${prefix}${normalizedPath}`;
}
