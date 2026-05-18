import Image from "next/image";
import { Button, Column, Heading, Row, Schema, Text } from "@once-ui-system/core";
import { ServiceOfferShowcase } from "@/components/work/ServiceOfferShowcase";
import {
  baseURL,
  buildPageMetadata,
  contactDetails,
  getLocalizedPath,
  getSiteContent,
  type Locale,
} from "@/resources";

type WorkPageProps = {
  locale: Locale;
};

export function generateWorkMetadata(locale: Locale) {
  const { work, workShowcase } = getSiteContent(locale);

  return buildPageMetadata({
    locale,
    title: work.title,
    description: work.description,
    path: work.path,
    image: workShowcase.image,
  });
}

export function WorkPage({ locale }: WorkPageProps) {
  const { about, howItWorks, person, serviceOffers, ui, work, workSupportAreas, workShowcase } =
    getSiteContent(locale);
  const workPath = getLocalizedPath(locale, work.path);
  const aboutPath = getLocalizedPath(locale, about.path);
  const howItWorksPath = getLocalizedPath(locale, howItWorks.path);
  const localizedServiceOffers = serviceOffers.map((offer) => ({
    id: offer.slug,
    title: offer.title,
    subtitle: offer.headline,
    description: offer.description,
    bullets: offer.bullets,
    image: offer.image,
    imageAlt: offer.imageAlt,
    badges: offer.tags,
    href: getLocalizedPath(locale, `/work/${offer.slug}`),
  }));
  const localizedSupportAreas = workSupportAreas.map((item) => ({
    id: item.title,
    title: item.title,
    subtitle: item.subtitle,
    description: item.description,
    bullets: item.bullets,
    image: item.image ?? workShowcase.image,
    imageAlt: item.imageAlt ?? item.title,
    badges: item.badges,
    href: `mailto:${contactDetails.email}?subject=${encodeURIComponent(item.title)}`,
    ctaLabel: ui.work.supportCta,
  }));

  return (
    <Column maxWidth="m" paddingTop="24" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={workPath}
        title={work.title}
        description={work.description}
        image={workShowcase.image}
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
            alt={workShowcase.alt}
            src={workShowcase.image}
            fill
            quality={80}
            sizes="(max-width: 768px) 100vw, 768px"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </Column>
      <Column fillWidth gap="24">
        <Column
          fillWidth
          maxWidth="s"
          horizontal="center"
          align="center"
          gap="12"
          style={{ marginInline: "auto" }}
        >
          <Heading as="h2" variant="display-strong-s" align="center">
            {ui.work.serviceDetailsTitle}
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" align="center">
            {ui.work.serviceDetailsDescription}
          </Text>
        </Column>
        <ServiceOfferShowcase items={localizedServiceOffers} defaultCtaLabel={ui.work.serviceDetailsCta} />
      </Column>
      <Column fillWidth gap="24">
        <Column fillWidth maxWidth="s" horizontal="center" align="center" gap="12" style={{ marginInline: "auto" }}>
          <Heading as="h2" variant="display-strong-s" align="center">
            {ui.work.supportTitle}
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" align="center">
            {ui.work.supportDescription}
          </Text>
        </Column>
        <ServiceOfferShowcase items={localizedSupportAreas} />
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
