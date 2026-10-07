import { type Locale, isLocale } from "@/resources";
import { notFound } from "next/navigation";

type LocaleParamRecord = {
  locale: string;
};

export type LocaleRouteProps = {
  params: Promise<LocaleParamRecord>;
};

export type LocaleSlugRouteProps = {
  params: Promise<
    LocaleParamRecord & {
      slug: string;
    }
  >;
};

export function validateLocaleParam(locale: string): Locale {
  if (!isLocale(locale)) {
    notFound();
  }

  return locale;
}

export async function getRouteLocale(params: Promise<LocaleParamRecord>): Promise<Locale> {
  const { locale } = await params;
  return validateLocaleParam(locale);
}

export async function getLocalizedRouteParams(
  params: Promise<LocaleParamRecord & { slug: string }>,
) {
  const { locale, slug } = await params;

  return {
    locale: validateLocaleParam(locale),
    slug,
  };
}
