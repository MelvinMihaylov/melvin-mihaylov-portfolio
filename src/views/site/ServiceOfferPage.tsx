import Image from "next/image";
import { notFound } from "next/navigation";
import { Button, Column, Heading, Row, Schema, Tag, Text } from "@once-ui-system/core";
import {
  baseURL,
  buildBreadcrumbStructuredData,
  buildFaqStructuredData,
  buildPageMetadata,
  buildServiceStructuredData,
  contactDetails,
  getLocalizedPath,
  getServiceOffer,
  getSiteContent,
  type Locale,
} from "@/resources";

type ServiceOfferPageProps = {
  locale: Locale;
  slug: string;
};

export function generateServiceOfferMetadata(locale: Locale, slug: string) {
  const offer = getServiceOffer(locale, slug);

  if (!offer) {
    notFound();
  }

  return buildPageMetadata({
    locale,
    title: offer.seoTitle,
    description: offer.seoDescription,
    path: `/work/${offer.slug}`,
    image: offer.image,
  });
}

export function ServiceOfferPage({ locale, slug }: ServiceOfferPageProps) {
  const offer = getServiceOffer(locale, slug);
  const { home, person, pricing, ui, work } = getSiteContent(locale);

  if (!offer) {
    notFound();
  }

  const homePath = getLocalizedPath(locale, home.path);
  const pagePath = getLocalizedPath(locale, `/work/${offer.slug}`);
  const pricingPath = getLocalizedPath(locale, pricing.path);
  const workPath = getLocalizedPath(locale, work.path);
  const faqStructuredData = buildFaqStructuredData(
    offer.faq,
    `${baseURL}#service-faq-${locale}-${offer.slug}`,
  );
  const breadcrumbStructuredData = buildBreadcrumbStructuredData(
    [
      { name: home.label, path: homePath },
      { name: work.label, path: workPath },
      { name: offer.title, path: pagePath },
    ],
    `${baseURL}${pagePath}#breadcrumb`,
  );
  const serviceStructuredData = buildServiceStructuredData({
    locale,
    offer,
    path: pagePath,
  });

  return (
    <Column maxWidth="m" gap="xl" paddingTop="24" paddingBottom="40">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={offer.seoTitle}
        description={offer.seoDescription}
        path={pagePath}
        image={offer.image}
        author={{
          name: person.name,
          url: `${baseURL}${pagePath}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }}
      />
      <Column fillWidth horizontal="center" align="center" gap="20">
        <Tag size="l">{offer.title}</Tag>
        <Heading variant="display-strong-l" align="center">
          {offer.headline}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center">
          {offer.description}
        </Text>
        <Row gap="8" wrap horizontal="center">
          {offer.tags.map((tag) => (
            <Tag key={tag} size="m">
              {tag}
            </Tag>
          ))}
        </Row>
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "3 / 2",
            display: "block",
            borderRadius: "1.5rem",
            overflow: "hidden",
          }}
        >
          <Image
            alt={offer.imageAlt}
            src={offer.image}
            fill
            priority
            quality={82}
            sizes="(max-width: 768px) 100vw, 768px"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </Column>
      <Column fillWidth gap="24">
        <Heading as="h2" variant="display-strong-s" align="center">
          {ui.servicePage.idealForTitle}
        </Heading>
        <Row fillWidth gap="16" wrap>
          {offer.idealFor.map((item) => (
            <Column
              key={item}
              flex={1}
              background="neutral-alpha-weak"
              border="neutral-alpha-medium"
              radius="xl"
              padding="24"
              gap="12"
              style={{ minWidth: "16rem" }}
            >
              <Text variant="body-default-m" onBackground="neutral-weak">
                {item}
              </Text>
            </Column>
          ))}
        </Row>
      </Column>
      <Column fillWidth gap="24">
        <Heading as="h2" variant="display-strong-s" align="center">
          {ui.servicePage.deliverablesTitle}
        </Heading>
        <Row fillWidth gap="16" wrap>
          {offer.bullets.map((bullet) => (
            <Column
              key={bullet}
              flex={1}
              background="neutral-alpha-weak"
              border="neutral-alpha-medium"
              radius="xl"
              padding="24"
              gap="12"
              style={{ minWidth: "16rem" }}
            >
              <Text variant="body-default-m" onBackground="neutral-weak">
                {bullet}
              </Text>
            </Column>
          ))}
        </Row>
      </Column>
      <Column fillWidth gap="24">
        <Heading as="h2" variant="display-strong-s" align="center">
          {ui.servicePage.pricingHintTitle}
        </Heading>
        <Column
          background="neutral-alpha-weak"
          border="neutral-alpha-medium"
          radius="xl"
          padding="24"
          gap="12"
        >
          <Text variant="body-default-l" onBackground="neutral-weak" align="center">
            {offer.pricingHint}
          </Text>
        </Column>
      </Column>
      <Column fillWidth gap="24">
        <Column maxWidth="s" horizontal="center" align="center" gap="12">
          <Heading as="h2" variant="display-strong-s" align="center">
            {ui.servicePage.faqTitle}
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" align="center">
            {ui.servicePage.faqDescription}
          </Text>
        </Column>
        <Row fillWidth gap="16" wrap>
          {offer.faq.map((entry) => (
            <Column
              key={entry.question}
              flex={1}
              background="neutral-alpha-weak"
              border="neutral-alpha-medium"
              radius="xl"
              padding="24"
              gap="12"
              style={{ minWidth: "16rem" }}
            >
              <Heading as="h3" variant="heading-strong-l">
                {entry.question}
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {entry.answer}
              </Text>
            </Column>
          ))}
        </Row>
      </Column>
      <Column fillWidth horizontal="center" align="center" gap="20">
        <Heading as="h2" variant="display-strong-s" align="center">
          {ui.servicePage.ctaTitle}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center">
          {ui.servicePage.ctaDescription}
        </Text>
        <Row gap="12" wrap horizontal="center">
          <Button href={`mailto:${contactDetails.email}`} variant="primary" size="m" arrowIcon>
            {offer.ctaLabel}
          </Button>
          <Button href={pricingPath} variant="secondary" size="m" arrowIcon>
            {ui.servicePage.pricingCta}
          </Button>
          <Button href={workPath} variant="tertiary" size="m" arrowIcon>
            {ui.servicePage.servicesCta}
          </Button>
        </Row>
      </Column>
    </Column>
  );
}
