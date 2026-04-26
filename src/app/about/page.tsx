import {
  Avatar,
  Button,
  Column,
  Heading,
  IconButton,
  Meta,
  Row,
  Schema,
  Tag,
  Text,
} from "@once-ui-system/core";
import {
  about,
  aboutFacts,
  aboutHighlights,
  baseURL,
  contactDetails,
  person,
  processSteps,
  social,
  supportOptions,
} from "@/resources";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" align="center" gap="20">
        <Avatar src={person.avatar} size="xl" />
        <Heading variant="display-strong-xl">{person.name}</Heading>
        <Text variant="display-default-xs" onBackground="neutral-weak">
          {person.role}
        </Text>
        {social.length > 0 && (
          <Row paddingBottom="8" gap="8" wrap horizontal="center" fitWidth data-border="rounded">
            {social
              .filter((item) => item.essential)
              .map(
                (item) =>
                  item.link && (
                    <React.Fragment key={item.name}>
                      <Row s={{ hide: true }}>
                        <Button
                          href={item.link}
                          prefixIcon={item.icon}
                          label={item.name}
                          size="s"
                          weight="default"
                          variant="secondary"
                        />
                      </Row>
                      <Row hide s={{ hide: false }}>
                        <IconButton
                          size="l"
                          key={`${item.name}-icon`}
                          href={item.link}
                          icon={item.icon}
                          variant="secondary"
                        />
                      </Row>
                    </React.Fragment>
                  ),
              )}
          </Row>
        )}
      </Column>
      <Column fillWidth gap="m">
        <Heading as="h2" variant="display-strong-s">
          {about.intro.title}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          {about.intro.description}
        </Text>
      </Column>
      <Row fillWidth gap="16" wrap>
        {aboutHighlights.map((item) => (
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
          </Column>
        ))}
      </Row>
      <Row fillWidth gap="16" wrap>
        {aboutFacts.map((fact) => (
          <Column
            key={fact.label}
            flex={1}
            background="neutral-alpha-weak"
            border="neutral-alpha-medium"
            radius="xl"
            padding="24"
            gap="8"
            style={{ minWidth: "16rem" }}
          >
            <Text variant="label-default-s" onBackground="brand-weak">
              {fact.label}
            </Text>
            <Heading as="h3" variant="heading-strong-l">
              {fact.value}
            </Heading>
          </Column>
        ))}
      </Row>
      <Column fillWidth gap="24">
        <Heading as="h2" variant="display-strong-s">
          How we can work together
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
                Step {index + 1}
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
      <Column fillWidth horizontal="center" align="center" gap="20">
        <Heading as="h2" variant="display-strong-s" align="center">
          Start with a free call, meeting, or first visual direction.
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center">
          If you already have references, sketches, or even a partially built AI version of the
          site, I can help turn that into a cleaner real project.
        </Text>
        <Row gap="12" wrap horizontal="center">
          <Button href={`mailto:${contactDetails.email}`} variant="primary" size="m" arrowIcon>
            Send email
          </Button>
          <Button href={`tel:${contactDetails.phone}`} variant="secondary" size="m" arrowIcon>
            {contactDetails.phoneDisplay}
          </Button>
          <Button href="/work" variant="tertiary" size="m" arrowIcon>
            See services
          </Button>
        </Row>
        <Row gap="8" wrap horizontal="center">
          {supportOptions.map((item) => (
            <Tag key={item} size="m">
              {item}
            </Tag>
          ))}
        </Row>
      </Column>
    </Column>
  );
}
