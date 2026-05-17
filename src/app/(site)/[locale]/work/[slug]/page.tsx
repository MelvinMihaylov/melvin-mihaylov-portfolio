import type { Metadata } from "next";
import { defaultLocale, getSiteContent, locales } from "@/resources";
import { ServiceOfferPage, generateServiceOfferMetadata } from "@/views/site/ServiceOfferPage";
import { getLocalizedRouteParams, type LocaleSlugRouteProps } from "../../locale-params";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getSiteContent(defaultLocale).serviceOffers.map((offer) => ({
      locale,
      slug: offer.slug,
    })),
  );
}

export async function generateMetadata({ params }: LocaleSlugRouteProps): Promise<Metadata> {
  const { locale, slug } = await getLocalizedRouteParams(params);
  return generateServiceOfferMetadata(locale, slug);
}

export default async function ServiceOfferRoute({ params }: LocaleSlugRouteProps) {
  const { locale, slug } = await getLocalizedRouteParams(params);
  return <ServiceOfferPage locale={locale} slug={slug} />;
}
