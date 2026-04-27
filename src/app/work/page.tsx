import { Button, Column, Heading, Meta, Row, Schema, Text } from "@once-ui-system/core";
import {
  about,
  baseURL,
  contactDetails,
  howItWorks,
  person,
  work,
  workSupportAreas,
  workWebsiteTypes,
  workShowcase,
} from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m" paddingTop="24" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" align="center" gap="20">
        <Heading variant="display-strong-l" align="center">
          What I do, explained simply.
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center">
          This page is the simple version: what kinds of websites I build, what extra help I can
          provide, and where SEO, Google visibility, hosting, and marketing-related pages fit in.
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
          Types of websites I do
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
          Support around the website
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
          Want the simple process too?
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center">
          The How it works page explains the full flow from first contact and examples to free
          demo, build, SEO, hosting, and launch help.
        </Text>
        <Row gap="12" wrap horizontal="center">
          <Button href={`mailto:${contactDetails.email}`} variant="primary" size="m" arrowIcon>
            Email me
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
