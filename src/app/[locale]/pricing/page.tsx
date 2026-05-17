import { getRouteLocale, type LocaleRouteProps } from "../locale-params";
import { PricingPage, generatePricingMetadata } from "@/views/site/PricingPage";

export async function generateMetadata({ params }: LocaleRouteProps) {
  return generatePricingMetadata(await getRouteLocale(params));
}

export default async function Pricing({ params }: LocaleRouteProps) {
  return <PricingPage locale={await getRouteLocale(params)} />;
}
