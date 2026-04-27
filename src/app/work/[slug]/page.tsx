import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  Column,
  Flex,
  Heading,
  Line,
  Row,
  Schema,
  SmartLink,
  Text,
} from "@once-ui-system/core";
import { BrandLogo, ScrollToHash } from "@/components";
import { Projects } from "@/components/work/Projects";
import { baseURL, buildPageMetadata, defaultLocale, getOgImagePath, getSiteContent } from "@/resources";
import { getRequestLocale } from "@/resources/get-request-locale";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return getSiteContent(defaultLocale).serviceDetails.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const locale = await getRequestLocale();
  const { person, serviceDetails, work } = getSiteContent(locale);
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const service = serviceDetails.find((entry) => entry.slug === slugPath);

  if (!service) return {};

  return buildPageMetadata({
    title: service.title,
    description: service.summary,
    path: `${work.path}/${service.slug}`,
    image: getOgImagePath(service.title, person.role),
  });
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const locale = await getRequestLocale();
  const { about, person, serviceDetails, ui, work } = getSiteContent(locale);
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const service = serviceDetails.find((entry) => entry.slug === slugPath);

  if (!service) {
    notFound();
  }

  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={`${work.path}/${service.slug}`}
        title={service.title}
        description={service.summary}
        datePublished={service.publishedAt}
        dateModified={service.publishedAt}
        image={getOgImagePath(service.title, person.role)}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column maxWidth="s" gap="16" horizontal="center" align="center">
        <SmartLink href={work.path}>
          <Text variant="label-strong-m">{work.label}</Text>
        </SmartLink>
        <Text variant="body-default-xs" onBackground="neutral-weak">
          {service.subtitle}
        </Text>
        <Heading variant="display-strong-m">{service.title}</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak" align="center">
          {service.summary}
        </Text>
      </Column>
      <Flex
        fillWidth
        background="neutral-alpha-weak"
        border="neutral-alpha-medium"
        radius="xl"
        padding="40"
        horizontal="center"
      >
        <Column horizontal="center" align="center" gap="16">
          <BrandLogo maxWidth={120} />
          <Text variant="label-default-s" onBackground="neutral-weak">
            {person.name}
          </Text>
        </Column>
      </Flex>
      <Column style={{ margin: "auto" }} as="article" maxWidth="xs" gap="24">
        {service.sections.map((section) => (
          <Column key={section.title} gap="12">
            <Heading as="h2" variant="heading-strong-xl">
              {section.title}
            </Heading>
            {section.description && (
              <Text variant="body-default-m" onBackground="neutral-weak">
                {section.description}
              </Text>
            )}
            {section.bullets && (
              <Column gap="8">
                {section.bullets.map((bullet) => (
                  <Text key={bullet} variant="body-default-m" onBackground="neutral-weak">
                    - {bullet}
                  </Text>
                ))}
              </Column>
            )}
          </Column>
        ))}
      </Column>
      <Column fillWidth gap="40" horizontal="center" marginTop="40">
        <Line maxWidth={40} />
        <Heading as="h2" variant="heading-strong-xl" marginBottom="24">
          {ui.serviceDetails.moreServices}
        </Heading>
        <Projects exclude={[service.slug]} range={[1, 2]} locale={locale} />
      </Column>
      <ScrollToHash />
    </Column>
  );
}
