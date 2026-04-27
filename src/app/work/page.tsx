import { Button, Column, Heading, Row, Schema, Text } from "@once-ui-system/core";
import { baseURL, buildPageMetadata, contactDetails, getOgImagePath, getSiteContent } from "@/resources";
import { getRequestLocale } from "@/resources/get-request-locale";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  const { person, work } = getSiteContent(locale);

  return buildPageMetadata({
    title: work.title,
    description: work.description,
    path: work.path,
    image: getOgImagePath(work.title, person.role),
  });
}

export default async function Work() {
  const locale = await getRequestLocale();
  const { about, howItWorks, person, ui, work, workSupportAreas, workWebsiteTypes, workShowcase } =
    getSiteContent(locale);

  return (
    <Column maxWidth="m" paddingTop="24" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={getOgImagePath(work.title, person.role)}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
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
          <Button href={howItWorks.path} variant="tertiary" size="m" arrowIcon>
            {howItWorks.label}
          </Button>
        </Row>
      </Column>
    </Column>
  );
}
