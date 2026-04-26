import { Button, Column, Heading, Meta, Row, Schema, Tag, Text } from "@once-ui-system/core";
import { Projects } from "@/components/work/Projects";
import {
  about,
  baseURL,
  contactDetails,
  person,
  processSteps,
  supportOptions,
  work,
} from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m" paddingTop="24" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" align="center" gap="20">
        <Heading variant="display-strong-l" align="center">
          What I can build right now, even before a big public portfolio is in place.
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center">
          Instead of filling the site with weak placeholder projects, this page shows the kinds of
          websites and support services I can offer to clients today.
        </Text>
        <Row gap="8" wrap horizontal="center">
          {supportOptions.map((item) => (
            <Tag key={item} size="m">
              {item}
            </Tag>
          ))}
        </Row>
      </Column>
      <Projects />
      <Column fillWidth gap="24">
        <Heading as="h2" variant="display-strong-s" align="center">
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
      <Column fillWidth horizontal="center" align="center" gap="20" marginBottom="40">
        <Heading as="h2" variant="display-strong-s" align="center">
          Want to test the fit first?
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center">
          Start with a free call and a free demo direction before committing to a full build.
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
