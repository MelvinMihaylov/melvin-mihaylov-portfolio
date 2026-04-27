import {
  Button,
  Column,
  Heading,
  Line,
  Meta,
  RevealFx,
  Row,
  Schema,
  Tag,
  Text,
} from "@once-ui-system/core";
import { BrandLogo } from "@/components";
import { HomeShowcaseCarousel } from "@/components/home/HomeShowcaseCarousel";
import { baseURL, contactDetails, getSiteContent } from "@/resources";
import { getRequestLocale } from "@/resources/get-request-locale";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  const { home, person } = getSiteContent(locale);

  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: `/api/og/generate?title=${encodeURIComponent(home.title)}&role=${encodeURIComponent(person.role)}`,
  });
}

export default async function Home() {
  const locale = await getRequestLocale();
  const { about, heroOffer, home, homeHighlights, homeShowcase, homeShowcaseSlides, person, processSteps, ui, work } =
    getSiteContent(locale);

  return (
    <Column maxWidth="m" gap="xl" paddingTop="0" paddingBottom="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}&role=${encodeURIComponent(person.role)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="xl">
        <Column maxWidth="s" horizontal="center" align="center" gap="20">
          <RevealFx translateY="4" horizontal="center" paddingTop="0">
            <BrandLogo maxWidth={220} alt={ui.brandLogoAlt} />
          </RevealFx>
          {home.featured.display && (
            <RevealFx fillWidth horizontal="center">
              <Tag size="l">{home.featured.title}</Tag>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="center">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx delay={0.4} horizontal="center">
            <Row gap="12" wrap horizontal="center">
              <Button
                id="services"
                data-border="rounded"
                href={work.path}
                variant="primary"
                size="m"
                weight="default"
                arrowIcon
              >
                {ui.home.primaryCta}
              </Button>
              <Button
                id="about"
                data-border="rounded"
                href={about.path}
                variant="secondary"
                size="m"
                weight="default"
                arrowIcon
              >
                {ui.home.secondaryCta}
              </Button>
              <Button
                data-border="rounded"
                href={`mailto:${contactDetails.email}`}
                variant="tertiary"
                size="m"
                weight="default"
                arrowIcon
              >
                {ui.home.tertiaryCta}
              </Button>
            </Row>
          </RevealFx>
          <RevealFx delay={0.5} horizontal="center">
            <Row gap="8" wrap horizontal="center">
              {heroOffer.tags.map((tag) => (
                <Tag key={tag} size="m">
                  {tag}
                </Tag>
              ))}
            </Row>
          </RevealFx>
        </Column>
      </Column>
      <RevealFx translateY="12" delay={0.55} fillWidth>
        <Column fillWidth gap="24" horizontal="center">
          <Column maxWidth="s" horizontal="center" align="center" gap="12">
            <Heading as="h2" variant="display-strong-xs" align="center">
              {homeShowcase.title}
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak" align="center">
              {homeShowcase.description}
            </Text>
          </Column>
          <HomeShowcaseCarousel slides={homeShowcaseSlides} />
        </Column>
      </RevealFx>
      <Column fillWidth gap="24">
        <Row fillWidth paddingRight="64">
          <Line maxWidth={48} />
        </Row>
        <Row fillWidth gap="16" wrap>
          {homeHighlights.map((item) => (
            <Column
              key={item.title}
              flex={1}
              background="neutral-alpha-weak"
              border="neutral-alpha-medium"
              radius="xl"
              padding="24"
              gap="12"
              style={{ minWidth: "16rem" }}
            >
              <Heading as="h2" variant="heading-strong-l">
                {item.title}
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {item.description}
              </Text>
            </Column>
          ))}
        </Row>
        <Row fillWidth paddingLeft="64" horizontal="end">
          <Line maxWidth={48} />
        </Row>
      </Column>
      <Column fillWidth gap="24" marginBottom="l">
        <Heading as="h2" variant="display-strong-xs" align="center">
          {ui.home.processTitle}
        </Heading>
        <Row fillWidth gap="16" wrap>
          {processSteps.map((step, index) => (
            <Column
              key={step.title}
              flex={1}
              background="neutral-alpha-weak"
              border="neutral-alpha-medium"
              radius="xl"
              padding="24"
              gap="12"
              style={{ minWidth: "16rem" }}
            >
              <Text variant="label-default-s" onBackground="brand-weak">
                {ui.home.stepLabel} {index + 1}
              </Text>
              <Heading as="h3" variant="heading-strong-l">
                {step.title}
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {step.description}
              </Text>
            </Column>
          ))}
        </Row>
      </Column>
    </Column>
  );
}
