import { Button, Column, Heading, Line, Row, Tag, Text } from "@once-ui-system/core";
import { BrandLogo } from "@/components";
import { contactDetails, getSiteContent, type Locale } from "@/resources";

const cardStyle = { minWidth: "16rem" } as const;

type HowItWorksViewProps = {
  locale: Locale;
};

export default function HowItWorksView({ locale }: HowItWorksViewProps) {
  const {
    howItWorksCoverage,
    howItWorksIntro,
    howItWorksPreparationNotes,
    howItWorksSteps,
    ui,
    work,
  } = getSiteContent(locale);

  return (
    <Column maxWidth="m" gap="xl" paddingTop="24" paddingBottom="40">
      <Column fillWidth horizontal="center" align="center" gap="20">
        <BrandLogo
          maxWidth={360}
          alt={ui.brandLogoAlt}
          src="/images/EnglishLogoWithDescriptionStretched.png"
          radius="1.5rem"
        />
        <Tag size="l">{howItWorksIntro.label}</Tag>
        <Heading variant="display-strong-l" align="center">
          {howItWorksIntro.title}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center">
          {howItWorksIntro.description}
        </Text>
        <Row gap="12" wrap horizontal="center">
          <Button href={`mailto:${contactDetails.email}`} variant="primary" size="m" arrowIcon>
            {ui.howItWorks.primaryCta}
          </Button>
          <Button href={work.path} variant="secondary" size="m" arrowIcon>
            {ui.howItWorks.secondaryCta}
          </Button>
        </Row>
        <Row gap="8" wrap horizontal="center">
          {howItWorksIntro.tags.map((tag) => (
            <Tag key={tag} size="m">
              {tag}
            </Tag>
          ))}
        </Row>
      </Column>
      <Column fillWidth gap="24">
        <Row fillWidth paddingRight="64">
          <Line maxWidth={48} />
        </Row>
        <Heading as="h2" variant="display-strong-s" align="center">
          {ui.howItWorks.coverageTitle}
        </Heading>
        <Row fillWidth gap="16" wrap>
          {howItWorksCoverage.map((item) => (
            <Column
              key={item.title}
              flex={1}
              background="neutral-alpha-weak"
              border="neutral-alpha-medium"
              radius="xl"
              padding="24"
              gap="12"
              style={cardStyle}
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
        <Row fillWidth paddingLeft="64" horizontal="end">
          <Line maxWidth={48} />
        </Row>
      </Column>
      <Column fillWidth gap="24">
        <Heading as="h2" variant="display-strong-s" align="center">
          {ui.howItWorks.stepsTitle}
        </Heading>
        <Row fillWidth gap="16" wrap>
          {howItWorksSteps.map((step, index) => (
            <Column
              key={step.title}
              flex={1}
              background="neutral-alpha-weak"
              border="neutral-alpha-medium"
              radius="xl"
              padding="24"
              gap="12"
              style={cardStyle}
            >
              <Text variant="label-default-s" onBackground="brand-weak">
                {ui.howItWorks.stepLabel} {index + 1}
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
      <Column fillWidth gap="24">
        <Heading as="h2" variant="display-strong-s" align="center">
          {ui.howItWorks.preparationTitle}
        </Heading>
        <Row fillWidth gap="16" wrap>
          {howItWorksPreparationNotes.map((note) => (
            <Column
              key={note.title}
              flex={1}
              background="neutral-alpha-weak"
              border="neutral-alpha-medium"
              radius="xl"
              padding="24"
              gap="12"
              style={cardStyle}
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
      <Column fillWidth horizontal="center" align="center" gap="20">
        <Heading as="h2" variant="display-strong-s" align="center">
          {ui.howItWorks.ctaTitle}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center">
          {ui.howItWorks.ctaDescription}
        </Text>
        <Row gap="12" wrap horizontal="center">
          <Button href={`mailto:${contactDetails.email}`} variant="primary" size="m" arrowIcon>
            {ui.howItWorks.emailCta}
          </Button>
          <Button href={`tel:${contactDetails.phone}`} variant="secondary" size="m" arrowIcon>
            {contactDetails.phoneDisplay}
          </Button>
        </Row>
      </Column>
    </Column>
  );
}
