import "@/app/globals.css";

import { getContent } from "@/content";
import { locales } from "@/resources/i18n";
import { buildPageMetadata } from "@/resources/seo";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { type LocaleRouteProps, getRouteLocale } from "./locale-params";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-manrope",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleRouteProps): Promise<Metadata> {
  const locale = await getRouteLocale(params);
  const { meta } = getContent(locale);

  return {
    ...buildPageMetadata({
      locale,
      title: meta.title,
      description: meta.description,
      path: "/",
      imageAlt: meta.ogAlt,
    }),
    applicationName: "Melvin Mihaylov",
  };
}

/**
 * Restores the visitor's theme and motion choices before first paint, so the
 * page never flashes the wrong palette.
 */
const PREFERENCES_SCRIPT = `
(function () {
  try {
    var root = document.documentElement;
    var theme = localStorage.getItem('data-theme');
    root.setAttribute('data-theme', theme === 'light' || theme === 'dark' ? theme : 'dark');

    var motion = localStorage.getItem('data-motion');
    if (!motion) {
      motion = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'reduced' : 'full';
    }
    root.setAttribute('data-motion', motion);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.documentElement.setAttribute('data-motion', 'full');
  }
})();
`;

type LocalizedLayoutProps = LocaleRouteProps & {
  children: React.ReactNode;
};

export default async function LocalizedLayout({ children, params }: LocalizedLayoutProps) {
  const locale = await getRouteLocale(params);

  return (
    <html lang={locale} data-theme="dark" data-motion="full" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0c111b" />
        <meta name="application-name" content="Melvin Mihaylov" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Melvin Mihaylov" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#0c111b" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: inline preference restore must run before paint */}
        <script dangerouslySetInnerHTML={{ __html: PREFERENCES_SCRIPT }} />
      </head>
      <body className={manrope.variable}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
