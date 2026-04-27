import { Schema } from "@once-ui-system/core";
import HowItWorksView from "@/components/how-it-works/HowItWorksView";
import { baseURL, buildPageMetadata, getOgImagePath, getSiteContent } from "@/resources";
import { getRequestLocale } from "@/resources/get-request-locale";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  const { howItWorks, person } = getSiteContent(locale);

  return buildPageMetadata({
    title: howItWorks.title,
    description: howItWorks.description,
    path: howItWorks.path,
    image: getOgImagePath(howItWorks.title, person.role),
  });
}

export default async function HowItWorksPage() {
  const locale = await getRequestLocale();
  const { howItWorks, person } = getSiteContent(locale);

  return (
    <>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={howItWorks.title}
        description={howItWorks.description}
        path={howItWorks.path}
        image={getOgImagePath(howItWorks.title, person.role)}
        author={{
          name: person.name,
          url: `${baseURL}${howItWorks.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <HowItWorksView locale={locale} />
    </>
  );
}
