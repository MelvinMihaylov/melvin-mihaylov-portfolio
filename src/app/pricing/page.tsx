import { Button, Column, Heading, Meta, Row, Schema, Tag, Text } from "@once-ui-system/core";
import {
  about,
  baseURL,
  contactDetails,
  howItWorks,
  person,
  pricing,
  pricingEstimates,
  pricingNotes,
  pricingSummary,
} from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: pricing.title,
    description: pricing.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(pricing.title)}`,
    path: pricing.path,
  });
}

export default function PricingPage() {
  return (
    <Column maxWidth="m" paddingTop="24" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={pricing.path}
        title={pricing.title}
        description={pricing.description}
        image={`/api/og/generate?title=${encodeURIComponent(pricing.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" align="center" gap="20">
        <Tag size="l">{pricingSummary.label}</Tag>
        <Heading variant="display-strong-l" align="center">
          {pricingSummary.title}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center">
          {pricingSummary.description}
        </Text>
        <Row gap="8" wrap horizontal="center">
          {pricingSummary.tags.map((tag) => (
            <Tag key={tag} size="m">
              {tag}
            </Tag>
          ))}
        </Row>
      </Column>
      <Row fillWidth gap="16" wrap>
        <Column
          flex={1}
          background="neutral-alpha-weak"
          border="neutral-alpha-medium"
          radius="xl"
          padding="24"
          gap="8"
          style={{ minWidth: "16rem" }}
        >
          <Text variant="label-default-s" onBackground="brand-weak">
            Standard rate
          </Text>
          <Heading as="h2" variant="display-strong-s">
            100 EUR / hour
          </Heading>
        </Column>
        <Column
          flex={1}
          background="neutral-alpha-weak"
          border="neutral-alpha-medium"
          radius="xl"
          padding="24"
          gap="8"
          style={{ minWidth: "16rem" }}
        >
          <Text variant="label-default-s" onBackground="brand-weak">
            Current rate
          </Text>
          <Heading as="h2" variant="display-strong-s">
            50 EUR / hour
          </Heading>
        </Column>
      </Row>
      <Column fillWidth gap="24">
        <Heading as="h2" variant="display-strong-s" align="center">
          Simple project estimates
        </Heading>
        <Row fillWidth gap="16" wrap>
          {pricingEstimates.map((estimate) => (
            <Column
              key={estimate.title}
              flex={1}
              background="neutral-alpha-weak"
              border="neutral-alpha-medium"
              radius="xl"
              padding="24"
              gap="12"
              style={{ minWidth: "16rem" }}
            >
              <Heading as="h3" variant="heading-strong-l">
                {estimate.title}
              </Heading>
              <Text variant="label-default-s" onBackground="brand-weak">
                Typical time: {estimate.hours}
              </Text>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {estimate.description}
              </Text>
              <Column gap="4">
                <Text variant="body-default-s" onBackground="neutral-weak">
                  Current estimate: {estimate.discountedPrice}
                </Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  Standard estimate: {estimate.standardPrice}
                </Text>
              </Column>
            </Column>
          ))}
        </Row>
      </Column>
      <Column fillWidth gap="24">
        <Heading as="h2" variant="display-strong-s" align="center">
          A few useful notes
        </Heading>
        <Row fillWidth gap="16" wrap>
          {pricingNotes.map((note) => (
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
      </Column>
      <Column fillWidth horizontal="center" align="center" gap="20" marginBottom="40">
        <Heading as="h2" variant="display-strong-s" align="center">
          Want a more exact estimate?
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center">
          Send a short description, examples you like, or even an AI-made outline and I can give
          you a more realistic direction for the project.
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
