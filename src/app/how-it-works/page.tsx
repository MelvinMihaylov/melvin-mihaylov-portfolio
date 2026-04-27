import { Meta, Schema } from "@once-ui-system/core";
import HowItWorksView from "@/components/how-it-works/HowItWorksView";
import { baseURL, howItWorks, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: howItWorks.title,
    description: howItWorks.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(howItWorks.title)}`,
    path: howItWorks.path,
  });
}

export default function HowItWorksPage() {
  return (
    <>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={howItWorks.title}
        description={howItWorks.description}
        path={howItWorks.path}
        image={`/api/og/generate?title=${encodeURIComponent(howItWorks.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${howItWorks.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <HowItWorksView />
    </>
  );
}
