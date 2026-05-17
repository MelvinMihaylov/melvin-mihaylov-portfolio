import { Schema } from "@once-ui-system/core";
import HowItWorksView from "@/components/how-it-works/HowItWorksView";
import {
  baseURL,
  buildPageMetadata,
  getLocalizedPath,
  getOgImagePath,
  getSiteContent,
  type Locale,
} from "@/resources";

type HowItWorksPageProps = {
  locale: Locale;
};

export function generateHowItWorksMetadata(locale: Locale) {
  const { howItWorks, person } = getSiteContent(locale);

  return buildPageMetadata({
    locale,
    title: howItWorks.title,
    description: howItWorks.description,
    path: howItWorks.path,
    image: getOgImagePath(howItWorks.title, person.role, person.name),
  });
}

export function HowItWorksPage({ locale }: HowItWorksPageProps) {
  const { howItWorks, person } = getSiteContent(locale);
  const howItWorksPath = getLocalizedPath(locale, howItWorks.path);

  return (
    <>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={howItWorks.title}
        description={howItWorks.description}
        path={howItWorksPath}
        image={getOgImagePath(howItWorks.title, person.role, person.name)}
        author={{
          name: person.name,
          url: `${baseURL}${howItWorksPath}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <HowItWorksView locale={locale} />
    </>
  );
}
