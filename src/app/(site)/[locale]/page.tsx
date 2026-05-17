import { getRouteLocale, type LocaleRouteProps } from "./locale-params";
import { HomePage, generateHomeMetadata } from "@/views/site/HomePage";

export async function generateMetadata({ params }: LocaleRouteProps) {
  return generateHomeMetadata(await getRouteLocale(params));
}

export default async function Home({ params }: LocaleRouteProps) {
  return <HomePage locale={await getRouteLocale(params)} />;
}
