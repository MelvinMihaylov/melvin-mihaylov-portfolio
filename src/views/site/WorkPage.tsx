import { Button, Column, Heading, Row, Schema, Tag, Text } from "@once-ui-system/core";
import {
  baseURL,
  buildPageMetadata,
  contactDetails,
  getLocalizedPath,
  getOgImagePath,
  getSiteContent,
  type Locale,
} from "@/resources";

type WorkPageProps = {
  locale: Locale;
};

export function generateWorkMetadata(locale: Locale) {
  const { person, work } = getSiteContent(locale);

  return buildPageMetadata({
    locale,
    title: work.title,
    description: work.description,
    path: work.path,
    image: getOgImagePath(work.title, person.role, person.name),
  });
}

export function WorkPage({ locale }: WorkPageProps) {
  const { about, howItWorks, person, serviceOffers, ui, work, workSupportAreas, workWebsiteTypes, workShowcase } =
    getSiteContent(locale);
  const workPath = getLocalizedPath(locale, work.path);
  const aboutPath = getLocalizedPath(locale, about.path);
  const howItWorksPath = getLocalizedPath(locale, howItWorks.path);

  return (
    <Column maxWidth="m" paddingTop="24" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={workPath}
        title={work.title}
        description={work.description}
        image={getOgImagePath(work.title, person.role, person.name)}
        author={{
          name: person.name,
          url: `${baseURL}${aboutPath}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" align="center" gap="20">
        <Heading variant="display-strong-l" align="center">
          {ui.work.introTitle}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center">
          {work.description}
        </Text>
      </Column>
      <Column fillWidth gap="24" horizontal="center">
        <Column maxWidth="s" horizontal="center" align="center" gap="12">
          <Heading as="h2" variant="display-strong-s" align="center">
            {workShowcase.title}
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" align="center">
            {workShowcase.description}
          </Text>
        </Column>
        <img
          alt={workShowcase.alt}
          src={workShowcase.image}
          style={{
            width: "100%",
            aspectRatio: "3 / 2",
            objectFit: "cover",
            display: "block",
            borderRadius: "1.5rem",
          }}
        />
      </Column>
      <Column fillWidth gap="24">
        <Heading as="h2" variant="display-strong-s" align="center">
          {ui.work.websiteTypesTitle}
        </Heading>
        <Row fillWidth gap="16" wrap>
          {workWebsiteTypes.map((item) => (
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
              <Heading as="h3" variant="heading-strong-l">
                {item.title}
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {item.description}
              </Text>
              <Column gap="8">
                {item.bullets.map((bullet) => (
                  <Text key={bullet} variant="body-default-s" onBackground="neutral-weak">
                    - {bullet}
                  </Text>
                ))}
              </Column>
            </Column>
          ))}
        </Row>
      </Column>
      <Column fillWidth gap="24">
        <Column maxWidth="s" horizontal="center" align="center" gap="12">
          <Heading as="h2" variant="display-strong-s" align="center">
            {ui.work.serviceDetailsTitle}
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" align="center">
            {ui.work.serviceDetailsDescription}
          </Text>
        </Column>
        <Row fillWidth gap="16" wrap>
          {serviceOffers.map((offer) => (
            <Column
              key={offer.slug}
              flex={1}
              background="neutral-alpha-weak"
              border="neutral-alpha-medium"
              radius="xl"
              padding="24"
              gap="12"
              style={{ minWidth: "16rem" }}
            >
              <Heading as="h3" variant="heading-strong-l">
                {offer.title}
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {offer.description}
              </Text>
              <Row gap="8" wrap>
                {offer.tags.slice(0, 3).map((tag) => (
                  <Tag key={tag} size="m">
                    {tag}
                  </Tag>
                ))}
              </Row>
              <Button
                href={getLocalizedPath(locale, `/work/${offer.slug}`)}
                variant="secondary"
                size="m"
                arrowIcon
              >
                {ui.work.serviceDetailsCta}
              </Button>
            </Column>
          ))}
        </Row>
      </Column>
      <Column fillWidth gap="24">
        <Heading as="h2" variant="display-strong-s" align="center">
          {ui.work.supportTitle}
        </Heading>
        <Row fillWidth gap="16" wrap>
          {workSupportAreas.map((item) => (
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
              <Heading as="h3" variant="heading-strong-l">
                {item.title}
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {item.description}
              </Text>
              <Column gap="8">
                {item.bullets.map((bullet) => (
                  <Text key={bullet} variant="body-default-s" onBackground="neutral-weak">
                    - {bullet}
                  </Text>
                ))}
              </Column>
            </Column>
          ))}
        </Row>
      </Column>
      <Column fillWidth horizontal="center" align="center" gap="20" marginBottom="40">
        <Heading as="h2" variant="display-strong-s" align="center">
          {ui.work.ctaTitle}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center">
          {ui.work.ctaDescription}
        </Text>
        <Row gap="12" wrap horizontal="center">
          <Button href={`mailto:${contactDetails.email}`} variant="primary" size="m" arrowIcon>
            {ui.work.emailCta}
          </Button>
          <Button href={`tel:${contactDetails.phone}`} variant="secondary" size="m" arrowIcon>
            {contactDetails.phoneDisplay}
          </Button>
          <Button href={howItWorksPath} variant="tertiary" size="m" arrowIcon>
            {howItWorks.label}
          </Button>
        </Row>
      </Column>
    </Column>
  );
}
