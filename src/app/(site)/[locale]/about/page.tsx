import { getRouteLocale, type LocaleRouteProps } from "../locale-params";
import { AboutPage, generateAboutMetadata } from "@/views/site/AboutPage";

export async function generateMetadata({ params }: LocaleRouteProps) {
  return generateAboutMetadata(await getRouteLocale(params));
}

export default async function About({ params }: LocaleRouteProps) {
  return <AboutPage locale={await getRouteLocale(params)} />;
}
