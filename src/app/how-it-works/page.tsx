import { Meta, Schema } from "@once-ui-system/core";
import HowItWorksView from "@/components/how-it-works/HowItWorksView";
import { baseURL, getSiteContent } from "@/resources";
import { getRequestLocale } from "@/resources/get-request-locale";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  const { howItWorks, person } = getSiteContent(locale);

  return Meta.generate({
    title: howItWorks.title,
    description: howItWorks.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(howItWorks.title)}&role=${encodeURIComponent(person.role)}`,
    path: howItWorks.path,
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
        image={`/api/og/generate?title=${encodeURIComponent(howItWorks.title)}&role=${encodeURIComponent(person.role)}`}
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
