import { getRouteLocale, type LocaleRouteProps } from "../locale-params";
import { WorkPage, generateWorkMetadata } from "@/views/site/WorkPage";

export async function generateMetadata({ params }: LocaleRouteProps) {
  return generateWorkMetadata(await getRouteLocale(params));
}

export default async function Work({ params }: LocaleRouteProps) {
  return <WorkPage locale={await getRouteLocale(params)} />;
}
