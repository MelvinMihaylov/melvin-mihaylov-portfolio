import {
  Button,
  Column,
  Heading,
  Line,
  RevealFx,
  Row,
  Schema,
  Tag,
  Text,
} from "@once-ui-system/core";
import { BrandLogo } from "@/components";
import { HomeFaqSection } from "@/components/home/HomeFaqSection";
import { HomeInquirySection } from "@/components/home/HomeInquirySection";
import { HomeShowcaseCarousel } from "@/components/home/HomeShowcaseCarousel";
import {
  baseURL,
  buildPageMetadata,
  getFaqStructuredData,
  getFrequentlyAskedQuestions,
  getLocalizedPath,
  getOgImagePath,
  getSiteContent,
  type Locale,
} from "@/resources";

type HomePageProps = {
  locale: Locale;
};

export function generateHomeMetadata(locale: Locale) {
  const { home, person } = getSiteContent(locale);

  return buildPageMetadata({
    locale,
    title: home.title,
    description: home.description,
    path: home.path,
    image: getOgImagePath(home.title, person.role, person.name),
  });
}

export function HomePage({ locale }: HomePageProps) {
  const {
    about,
    homeInquiry,
    homeShowcase,
    homeShowcaseSlides,
    heroOffer,
    home,
    homeHighlights,
    person,
    processSteps,
    serviceOffers,
    ui,
    work,
  } = getSiteContent(locale);
  const faqEntries = getFrequentlyAskedQuestions(locale);
  const faqStructuredData = getFaqStructuredData(locale);
  const homePath = getLocalizedPath(locale, home.path);
  const aboutPath = getLocalizedPath(locale, about.path);
  const workPath = getLocalizedPath(locale, work.path);

  return (
    <Column maxWidth="m" gap="xl" paddingTop="0" paddingBottom="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={homePath}
        title={home.title}
        description={home.description}
        image={getOgImagePath(home.title, person.role, person.name)}
        author={{
          name: person.name,
          url: `${baseURL}${aboutPath}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <Column fillWidth horizontal="center" gap="xl">
        <Column maxWidth="s" horizontal="center" align="center" gap="20">
          <RevealFx translateY="4" horizontal="center" paddingTop="0">
            <BrandLogo
              maxWidth={360}
              alt={ui.brandLogoAlt}
              radius="1.5rem"
            />
          </RevealFx>
          {home.featured.display && (
            <RevealFx fillWidth horizontal="center">
              <Tag size="l">{home.featured.title}</Tag>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="center">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx delay={0.4} horizontal="center">
            <Row gap="12" wrap horizontal="center">
              <Button
                id="services"
                data-border="rounded"
                href={workPath}
                variant="primary"
                size="m"
                weight="default"
                arrowIcon
              >
                {ui.home.primaryCta}
              </Button>
              <Button
                id="about"
                data-border="rounded"
                href={aboutPath}
                variant="secondary"
                size="m"
                weight="default"
                arrowIcon
              >
                {ui.home.secondaryCta}
              </Button>
              <Button
                data-border="rounded"
                href="#home-inquiry"
                variant="tertiary"
                size="m"
                weight="default"
                arrowIcon
              >
                {ui.home.tertiaryCta}
              </Button>
            </Row>
          </RevealFx>
          <RevealFx delay={0.5} horizontal="center">
            <Row gap="8" wrap horizontal="center">
              {heroOffer.tags.map((tag) => (
                <Tag key={tag} size="m">
                  {tag}
                </Tag>
              ))}
            </Row>
          </RevealFx>
        </Column>
      </Column>
      <RevealFx translateY="12" delay={0.55} fillWidth>
        <Column fillWidth gap="24" horizontal="center">
          <Column maxWidth="s" horizontal="center" align="center" gap="12">
            <Heading as="h2" variant="display-strong-xs" align="center">
              {homeShowcase.title}
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak" align="center">
              {homeShowcase.description}
            </Text>
          </Column>
          <HomeShowcaseCarousel slides={homeShowcaseSlides} />
        </Column>
      </RevealFx>
      <Column fillWidth gap="24">
        <Row fillWidth paddingRight="64">
          <Line maxWidth={48} />
        </Row>
        <Row fillWidth gap="16" wrap>
          {homeHighlights.map((item) => (
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
              <Heading as="h2" variant="heading-strong-l">
                {item.title}
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {item.description}
              </Text>
            </Column>
          ))}
        </Row>
        <Row fillWidth paddingLeft="64" horizontal="end">
          <Line maxWidth={48} />
        </Row>
      </Column>
      <Column fillWidth gap="24" marginBottom="l">
        <Heading as="h2" variant="display-strong-xs" align="center">
          {ui.home.processTitle}
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
                {ui.home.stepLabel} {index + 1}
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
      <HomeFaqSection
        title={ui.home.faqTitle}
        description={ui.home.faqDescription}
        entries={faqEntries}
      />
      <HomeInquirySection content={homeInquiry} serviceOffers={serviceOffers} />
    </Column>
  );
}
