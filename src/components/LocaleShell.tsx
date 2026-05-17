import { Flex } from "@once-ui-system/core";
import { Footer, Header } from "@/components";
import { getGlobalStructuredData, getSiteContent, type Locale } from "@/resources";
import { HtmlLangSync } from "./HtmlLangSync";

type LocaleShellProps = {
  locale: Locale;
  children: React.ReactNode;
};

export function LocaleShell({ locale, children }: LocaleShellProps) {
  const { about, howItWorks, pricing, ui, work } = getSiteContent(locale);
  const structuredData = getGlobalStructuredData(locale);

  return (
    <>
      <HtmlLangSync locale={locale} />
      {structuredData.map((entry, index) => (
        <script
          key={`${locale}-structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}
      <Flex fillWidth minHeight="8" s={{ hide: true }} />
      <Header
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
      <Footer locale={locale} />
    </>
  );
}
