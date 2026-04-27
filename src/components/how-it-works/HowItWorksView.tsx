import { Button, Column, Heading, Line, Row, Tag, Text } from "@once-ui-system/core";
import { BrandLogo } from "@/components";
import {
  contactDetails,
  howItWorksCoverage,
  howItWorksImagePrompts,
  howItWorksIntro,
  howItWorksPreparationNotes,
  howItWorksSteps,
} from "@/resources";

const cardStyle = { minWidth: "16rem" } as const;

export default function HowItWorksView() {
  return (
    <Column maxWidth="m" gap="xl" paddingTop="24" paddingBottom="40">
      <Column fillWidth horizontal="center" align="center" gap="20">
        <BrandLogo maxWidth={96} />
        <Tag size="l">{howItWorksIntro.label}</Tag>
        <Heading variant="display-strong-l" align="center">
          {howItWorksIntro.title}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center">
          {howItWorksIntro.description}
        </Text>
        <Row gap="12" wrap horizontal="center">
          <Button href={`mailto:${contactDetails.email}`} variant="primary" size="m" arrowIcon>
            Request free demo
          </Button>
          <Button href="/work" variant="secondary" size="m" arrowIcon>
            See services
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
          What I can handle for you
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
          How the flow usually works
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
      <Column fillWidth gap="24">
        <Heading as="h2" variant="display-strong-s" align="center">
          What helps the project move faster
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
      <Column fillWidth gap="24">
        <Heading as="h2" variant="display-strong-s" align="center">
          Ready-to-use image prompt ideas
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center">
          If you want modern visuals for the homepage or other pages, these prompt directions are
          ready to paste into an AI image tool.
        </Text>
        <Row fillWidth gap="16" wrap>
          {howItWorksImagePrompts.map((idea) => (
            <Column
              key={idea.title}
              flex={1}
              background="neutral-alpha-weak"
              border="neutral-alpha-medium"
              radius="xl"
              padding="24"
              gap="12"
              style={cardStyle}
            >
              <Heading as="h3" variant="heading-strong-l">
                {idea.title}
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {idea.description}
              </Text>
              <Text variant="label-default-s" onBackground="brand-weak">
                Prompt to paste into AI
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {idea.prompt}
              </Text>
            </Column>
          ))}
        </Row>
      </Column>
      <Column fillWidth horizontal="center" align="center" gap="20">
        <Heading as="h2" variant="display-strong-s" align="center">
          Start with a free message, examples you like, and I can build a first direction from
          there.
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center">
          If you already have a rough idea, references, or an AI-made plan, send it over and I can
          shape it into a real site.
        </Text>
        <Row gap="12" wrap horizontal="center">
          <Button href={`mailto:${contactDetails.email}`} variant="primary" size="m" arrowIcon>
            Email me
          </Button>
          <Button href={`tel:${contactDetails.phone}`} variant="secondary" size="m" arrowIcon>
            {contactDetails.phoneDisplay}
          </Button>
        </Row>
      </Column>
    </Column>
  );
}
