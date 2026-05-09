import { Button, Column, Heading, Line, RevealFx, Row, Schema, Tag, Text } from "@once-ui-system/core";
import { baseURL, buildPageMetadata, contactDetails, getOgImagePath, getSiteContent } from "@/resources";
import { getRequestLocale } from "@/resources/get-request-locale";

export async function generateMetadata() {
  const locale = await getRequestLocale();
  const { person, pricing } = getSiteContent(locale);

  return buildPageMetadata({
    title: pricing.title,
    description: pricing.description,
    path: pricing.path,
    image: getOgImagePath(pricing.title, person.role),
  });
}

export default async function PricingPage() {
  const locale = await getRequestLocale();
  const { about, howItWorks, person, pricing, pricingEstimates, pricingNotes, pricingSummary, ui } =
    getSiteContent(locale);
  const currentRate = locale === "bg" ? "50 EUR / час" : "50 EUR / hour";
  const standardRate = locale === "bg" ? "100 EUR / час" : "100 EUR / hour";
  const pricingTags =
    locale === "bg"
      ? ["Изработка на уебсайт", "Модерен сайт на разумен бюджет", "SEO и хостинг помощ"]
      : ["Websites", "SEO support", "Hosting help", "Google-ready pages"];

  return (
    <Column maxWidth="m" paddingTop="24" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={pricing.path}
        title={pricing.title}
        description={pricing.description}
        image={getOgImagePath(pricing.title, person.role)}
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
                {ui.pricing.currentRateLabel}
              </Text>
              <Tag size="m">{ui.pricing.popularBadge}</Tag>
            </Row>
            <Heading as="h2" variant="display-strong-l">
              {currentRate}
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak">
              {ui.pricing.currentRateDescription}
            </Text>
            <Row gap="8" wrap>
              {pricingTags.map((tag) => (
                <Tag key={tag} size="m">
                  {tag}
                </Tag>
              ))}
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
              {ui.pricing.standardRateLabel}
            </Text>
            <Heading
              as="h2"
              variant="display-strong-s"
              style={{ textDecoration: "line-through", textDecorationThickness: "0.08em" }}
            >
              {standardRate}
            </Heading>
            <Text variant="body-default-m" onBackground="neutral-weak">
              {ui.pricing.savingsDescription}
            </Text>
            <Column gap="8">
              <Text variant="label-default-s" onBackground="brand-weak">
                {ui.pricing.projectStartsFrom}
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
          {ui.pricing.estimatesTitle}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center">
          {ui.pricing.estimatesDescription}
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
                {ui.pricing.standardPriceLabel}: {estimate.standardPrice}
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
          {ui.pricing.finalPriceTitle}
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
          {ui.pricing.ctaTitle}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center">
          {ui.pricing.ctaDescription}
        </Text>
        <Row gap="12" wrap horizontal="center">
          <Button href={`mailto:${contactDetails.email}`} variant="primary" size="m" arrowIcon>
            {ui.pricing.emailCta}
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
