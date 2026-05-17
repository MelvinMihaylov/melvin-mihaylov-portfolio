import { getRouteLocale, type LocaleRouteProps } from "../locale-params";
import { HowItWorksPage, generateHowItWorksMetadata } from "@/views/site/HowItWorksPage";

export async function generateMetadata({ params }: LocaleRouteProps) {
  return generateHowItWorksMetadata(await getRouteLocale(params));
}

export default async function HowItWorks({ params }: LocaleRouteProps) {
  return <HowItWorksPage locale={await getRouteLocale(params)} />;
}
