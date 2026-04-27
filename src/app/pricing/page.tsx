import { Button, Column, Heading, Line, Meta, RevealFx, Row, Schema, Tag, Text } from "@once-ui-system/core";
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
        <Heading variant="display-strong-xl" align="center">
          {pricingSummary.title}
        </Heading>
        <Text variant="heading-default-xl" onBackground="neutral-weak" align="center">
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
      <RevealFx translateY="8" fillWidth>
        <Row fillWidth gap="16" wrap>
          <Column
            background="neutral-alpha-weak"
            border="neutral-alpha-medium"
            radius="xl"
            padding="24"
            gap="16"
            style={{ minWidth: "18rem", flex: "1.4 1 18rem" }}
          >
            <Row fillWidth wrap gap="12" horizontal="between" vertical="start">
              <Text variant="label-default-s" onBackground="brand-weak">
                Current project rate
              </Text>
              <Tag size="m">Most clients start here</Tag>
            </Row>
            <Heading as="h2" variant="display-strong-l">
              50 EUR / hour
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak">
              This is the current working rate for new projects. You still get the same modern
              design work, practical communication, and launch support - just at a lighter entry
              price.
            </Text>
            <Row gap="8" wrap>
              <Tag size="m">Websites</Tag>
              <Tag size="m">SEO support</Tag>
              <Tag size="m">Hosting help</Tag>
              <Tag size="m">Google-ready pages</Tag>
            </Row>
          </Column>
          <Column
            background="neutral-alpha-weak"
            border="neutral-alpha-medium"
            radius="xl"
            padding="24"
            gap="16"
            style={{ minWidth: "16rem", flex: "1 1 16rem" }}
          >
            <Text variant="label-default-s" onBackground="brand-weak">
              Standard rate
            </Text>
            <Heading
              as="h2"
              variant="display-strong-s"
              style={{ textDecoration: "line-through", textDecorationThickness: "0.08em" }}
            >
              100 EUR / hour
            </Heading>
            <Text variant="body-default-m" onBackground="neutral-weak">
              Current projects save 50 EUR per hour compared with the standard rate.
            </Text>
            <Column gap="8">
              <Text variant="label-default-s" onBackground="brand-weak">
                Typical smaller project starts from
              </Text>
              <Heading as="h3" variant="heading-strong-xl">
                300 EUR
              </Heading>
            </Column>
          </Column>
        </Row>
      </RevealFx>
      <Column fillWidth gap="24">
        <Row fillWidth paddingRight="64">
          <Line maxWidth={48} />
        </Row>
        <Heading as="h2" variant="display-strong-s" align="center">
          Quick project estimates
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center">
          These are simple ballpark examples so the pricing feels easier to understand before we
          even talk.
        </Text>
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
              <Row fillWidth wrap gap="12" horizontal="between" vertical="center">
                <Tag size="m">{estimate.label}</Tag>
                <Text variant="label-default-s" onBackground="brand-weak">
                  {estimate.hours}
                </Text>
              </Row>
              <Heading as="h3" variant="heading-strong-l">
                {estimate.title}
              </Heading>
              <Heading as="p" variant="display-strong-s">
                {estimate.discountedPrice}
              </Heading>
              <Text
                variant="body-default-s"
                onBackground="neutral-weak"
                style={{ textDecoration: "line-through", textDecorationThickness: "0.08em" }}
              >
                Standard: {estimate.standardPrice}
              </Text>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {estimate.description}
              </Text>
            </Column>
          ))}
        </Row>
        <Row fillWidth paddingLeft="64" horizontal="end">
          <Line maxWidth={48} />
        </Row>
      </Column>
      <Column fillWidth gap="24">
        <Heading as="h2" variant="display-strong-s" align="center">
          What affects the final price
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
          Send a short description, a few examples you like, or even an AI-made outline and I can
          give you a more realistic estimate and project direction.
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
