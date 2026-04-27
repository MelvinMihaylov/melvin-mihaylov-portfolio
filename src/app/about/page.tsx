import {
  Avatar,
  Button,
  Column,
  Heading,
  IconButton,
  Row,
  Schema,
  Tag,
  Text,
} from "@once-ui-system/core";
import { baseURL, buildPageMetadata, contactDetails, getOgImagePath, getSiteContent } from "@/resources";
import { getRequestLocale } from "@/resources/get-request-locale";
import React from "react";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  const { about, person } = getSiteContent(locale);

  return buildPageMetadata({
    title: about.title,
    description: about.description,
    path: about.path,
    image: getOgImagePath(about.title, person.role),
  });
}

export default async function About() {
  const locale = await getRequestLocale();
  const { about, aboutFacts, aboutHighlights, person, processSteps, social, supportOptions, ui, work } =
    getSiteContent(locale);

  return (
    <Column maxWidth="m" gap="xl" paddingY="12">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={getOgImagePath(about.title, person.role)}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${about.avatar.image ?? person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" align="center" gap="20">
        <Avatar src={about.avatar.image ?? person.avatar} size={14} />
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
          {ui.about.processTitle}
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
                {ui.about.stepLabel} {index + 1}
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
          {ui.about.ctaTitle}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center">
          {ui.about.ctaDescription}
        </Text>
        <Row gap="12" wrap horizontal="center">
          <Button href={`mailto:${contactDetails.email}`} variant="primary" size="m" arrowIcon>
            {ui.about.emailCta}
          </Button>
          <Button href={`tel:${contactDetails.phone}`} variant="secondary" size="m" arrowIcon>
            {contactDetails.phoneDisplay}
          </Button>
          <Button href={work.path} variant="tertiary" size="m" arrowIcon>
            {ui.about.servicesCta}
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
