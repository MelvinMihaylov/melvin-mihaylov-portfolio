import { LocaleShell } from "@/components/LocaleShell";
import { locales } from "@/resources";
import { getRouteLocale, type LocaleRouteProps } from "./locale-params";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type LocalizedLayoutProps = LocaleRouteProps & {
  children: React.ReactNode;
};

export default async function LocalizedLayout({ children, params }: LocalizedLayoutProps) {
  const locale = await getRouteLocale(params);

  return <LocaleShell locale={locale}>{children}</LocaleShell>;
}
