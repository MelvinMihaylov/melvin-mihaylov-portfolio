import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
import "@/resources/custom.css";

import classNames from "classnames";
import { Analytics } from "@vercel/analytics/next";

import {
  Background,
  Column,
  Flex,
  opacity,
  RevealFx,
  SpacingToken,
} from "@once-ui-system/core";
import { Footer, Header, Providers } from "@/components";
import { buildPageMetadata, dataStyle, effects, fonts, getGlobalStructuredData, getOgImagePath, getSiteContent, style } from "@/resources";
import { getRequestLocale } from "@/resources/get-request-locale";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  const { home, person } = getSiteContent(locale);

  return buildPageMetadata({
    title: home.title,
    description: home.description,
    path: home.path,
    image: getOgImagePath(home.title, person.role),
  });
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getRequestLocale();
  const { about, howItWorks, pricing, ui, work } = getSiteContent(locale);
  const structuredData = getGlobalStructuredData(locale);

  return (
    <Flex
      suppressHydrationWarning
      as="html"
      lang={locale}
      fillWidth
      className={classNames(
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable,
      )}
    >
      <head>
        <meta name="application-name" content="Melvin Mihaylov" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Melvin Mihaylov" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#151515" />
        <meta name="msapplication-TileColor" content="#151515" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        {structuredData.map((entry, index) => (
          <script
            key={`structured-data-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
          />
        ))}
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const root = document.documentElement;
                  const defaultTheme = 'system';
                  
                  // Set defaults from config
                  const config = ${JSON.stringify({
                    brand: style.brand,
                    accent: style.accent,
                    neutral: style.neutral,
                    solid: style.solid,
                    "solid-style": style.solidStyle,
                    border: style.border,
                    surface: style.surface,
                    transition: style.transition,
                    scaling: style.scaling,
                    "viz-style": dataStyle.variant,
                  })};
                  
                  // Apply default values
                  Object.entries(config).forEach(([key, value]) => {
                    root.setAttribute('data-' + key, value);
                  });
                  
                  // Resolve theme
                  const resolveTheme = (themeValue) => {
                    if (!themeValue || themeValue === 'system') {
                      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                    }
                    return themeValue;
                  };
                  
                  // Apply saved theme
                  const savedTheme = localStorage.getItem('data-theme');
                  const resolvedTheme = resolveTheme(savedTheme);
                  root.setAttribute('data-theme', resolvedTheme);
                  
                  // Apply any saved style overrides
                  const styleKeys = Object.keys(config);
                  styleKeys.forEach(key => {
                    const value = localStorage.getItem('data-' + key);
                    if (value) {
                      root.setAttribute('data-' + key, value);
                    }
                  });
                } catch (e) {
                  console.error('Failed to initialize theme:', e);
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
      </head>
      <Providers>
        <Column
          as="body"
          background="page"
          fillWidth
          style={{ minHeight: "100vh" }}
          margin="0"
          padding="0"
          horizontal="center"
        >
          <RevealFx fill position="absolute">
            <Background
              mask={{
                x: effects.mask.x,
                y: effects.mask.y,
                radius: effects.mask.radius,
                cursor: effects.mask.cursor,
              }}
              gradient={{
                display: effects.gradient.display,
                opacity: effects.gradient.opacity as opacity,
                x: effects.gradient.x,
                y: effects.gradient.y,
                width: effects.gradient.width,
                height: effects.gradient.height,
                tilt: effects.gradient.tilt,
                colorStart: effects.gradient.colorStart,
                colorEnd: effects.gradient.colorEnd,
              }}
              dots={{
                display: effects.dots.display,
                opacity: effects.dots.opacity as opacity,
                size: effects.dots.size as SpacingToken,
                color: effects.dots.color,
              }}
              grid={{
                display: effects.grid.display,
                opacity: effects.grid.opacity as opacity,
                color: effects.grid.color,
                width: effects.grid.width,
                height: effects.grid.height,
              }}
              lines={{
                display: effects.lines.display,
                opacity: effects.lines.opacity as opacity,
                size: effects.lines.size as SpacingToken,
                thickness: effects.lines.thickness,
                angle: effects.lines.angle,
                color: effects.lines.color,
              }}
            />
          </RevealFx>
          <Flex fillWidth minHeight="8" s={{ hide: true }} />
          <Header
            locale={locale}
            labels={{
              about: about.label,
              work: work.label,
              pricing: pricing.label,
              howItWorks: howItWorks.label,
            }}
            languageToggleLabels={ui.languageToggle}
            themeToggleLabels={ui.themeToggle}
          />
          <Flex
            zIndex={0}
            fillWidth
            paddingX="l"
            paddingTop="4"
            paddingBottom="l"
            horizontal="center"
            flex={1}
          >
            <Flex horizontal="center" fillWidth minHeight="0">
              {children}
            </Flex>
          </Flex>
          <Footer />
          <Analytics />
        </Column>
      </Providers>
    </Flex>
  );
}
