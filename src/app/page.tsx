import {
  Button,
  Column,
  Heading,
  Line,
  Meta,
  RevealFx,
  Row,
  Schema,
  Tag,
  Text,
} from "@once-ui-system/core";
import { Projects } from "@/components/work/Projects";
import { about, baseURL, heroOffer, home, homeHighlights, person, processSteps } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingTop="0" paddingBottom="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="xl">
        <Column maxWidth="s" horizontal="center" align="center" gap="20">
          <RevealFx translateY="4" horizontal="center" paddingTop="0">
            <img
              alt="Melvin Mihaylov logo with description"
              src="/images/EnglishLogoWithDescriptionStretched.png"
              style={{
                width: "100%",
                maxWidth: "22rem",
                height: "auto",
                display: "block",
                borderRadius: "1rem",
              }}
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
                href="/work"
                variant="primary"
                size="m"
                weight="default"
                arrowIcon
              >
                See services
              </Button>
              <Button
                id="about"
                data-border="rounded"
                href={about.path}
                variant="secondary"
                size="m"
                weight="default"
                arrowIcon
              >
                About me
              </Button>
              <Button
                data-border="rounded"
                href={`mailto:${person.email}`}
                variant="tertiary"
                size="m"
                weight="default"
                arrowIcon
              >
                Get a free demo
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
      <RevealFx translateY="16" delay={0.6} fillWidth>
        <Column fillWidth gap="24">
          <Heading as="h2" variant="display-strong-xs" align="center">
            Services
          </Heading>
          <Projects range={[1, 3]} />
        </Column>
      </RevealFx>
      <Column fillWidth gap="24" marginBottom="l">
        <Heading as="h2" variant="display-strong-xs" align="center">
          How it usually goes
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
    </Column>
  );
}
