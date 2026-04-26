"use client";

import { Button, Column, Heading, Row, Tag, Text } from "@once-ui-system/core";
import { BrandLogo } from "@/components";
import { contactDetails, galleryDirections, galleryNotes, supportOptions } from "@/resources";

export default function GalleryView() {
  return (
    <Column fillWidth gap="xl">
      <Column fillWidth horizontal="center" align="center" gap="20">
        <BrandLogo maxWidth={96} />
        <Heading variant="display-strong-l" align="center">
          Sample directions for the kinds of websites I can build and demo for clients.
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center">
          This page is not pretending to be a finished portfolio archive. It shows visual directions
          and site types that can be adapted into real client projects.
        </Text>
      </Column>
      <Row fillWidth gap="16" wrap>
        {galleryDirections.map((item, index) => (
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
            <Text variant="label-default-s" onBackground="brand-weak">
              Direction {index + 1}
            </Text>
            <Heading as="h2" variant="heading-strong-l">
              {item.title}
            </Heading>
            <Text variant="body-default-m" onBackground="neutral-weak">
              {item.subtitle}
            </Text>
          </Column>
        ))}
      </Row>
      <Row fillWidth gap="16" wrap>
        {galleryNotes.map((note) => (
          <Column
            key={note.title}
            flex={1}
            background="neutral-alpha-weak"
            border="neutral-alpha-medium"
            radius="xl"
            padding="24"
            gap="12"
            style={{ minWidth: "16rem" }}
          >
            <Heading as="h3" variant="heading-strong-l">
              {note.title}
            </Heading>
            <Text variant="body-default-m" onBackground="neutral-weak">
              {note.description}
            </Text>
          </Column>
        ))}
      </Row>
      <Column fillWidth horizontal="center" align="center" gap="16">
        <Text variant="label-default-m" onBackground="brand-weak">
          Possible website types
        </Text>
        <Row gap="8" wrap horizontal="center">
          {supportOptions.map((item) => (
            <Tag key={item} size="m">
              {item}
            </Tag>
          ))}
        </Row>
      </Column>
      <Column fillWidth horizontal="center" align="center" gap="20">
        <Heading as="h2" variant="display-strong-s" align="center">
          If one of these directions feels right, I can turn it into a free first demo for your own
          project.
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center">
          That can start from a new idea or from something you already drafted with AI and now want
          to improve properly.
        </Text>
        <Row gap="12" wrap horizontal="center">
          <Button href="/work" variant="secondary" size="m" arrowIcon>
            Back to services
          </Button>
          <Button href={`mailto:${contactDetails.email}`} variant="primary" size="m" arrowIcon>
            Request free demo
          </Button>
        </Row>
      </Column>
    </Column>
  );
}
