"use client";

import { AccordionGroup, Column, Heading, Row, Text } from "@once-ui-system/core";

type FaqEntry = {
  question: string;
  answer: string;
};

type HomeFaqSectionProps = {
  title: string;
  description: string;
  entries: FaqEntry[];
};

const shellStyle = {
  overflow: "hidden",
  background: `
    radial-gradient(circle at top left, color-mix(in srgb, var(--brand-background-strong) 12%, transparent), transparent 38%),
    radial-gradient(circle at bottom right, color-mix(in srgb, var(--accent-background-strong) 10%, transparent), transparent 42%),
    linear-gradient(
      180deg,
      color-mix(in srgb, var(--surface-background) 84%, var(--page-background)),
      color-mix(in srgb, var(--page-background) 92%, var(--surface-background))
    )
  `,
  boxShadow:
    "0 1.5rem 4rem rgba(0, 0, 0, 0.08), inset 0 1px 0 color-mix(in srgb, var(--neutral-on-background-strong) 8%, transparent)",
} as const;

const introStyle = {
  minWidth: "16rem",
  flex: "0.9 1 16rem",
} as const;

const panelStyle = {
  minWidth: "20rem",
  flex: "1.1 1 24rem",
  background: "color-mix(in srgb, var(--surface-background) 78%, transparent)",
  backdropFilter: "blur(0.75rem)",
  boxShadow:
    "inset 0 1px 0 color-mix(in srgb, var(--neutral-on-background-strong) 10%, transparent), 0 1rem 2.5rem rgba(0, 0, 0, 0.08)",
} as const;

const indexStyle = {
  minWidth: "2.5rem",
  textAlign: "center" as const,
} as const;

export function HomeFaqSection({ title, description, entries }: HomeFaqSectionProps) {
  const items = entries.map((entry, index) => ({
    title: (
      <Row fillWidth gap="12" vertical="center">
        <Text variant="label-default-s" onBackground="brand-weak" style={indexStyle}>
          {String(index + 1).padStart(2, "0")}
        </Text>
        <Text variant="heading-strong-s">{entry.question}</Text>
      </Row>
    ),
    content: (
      <Text variant="body-default-m" onBackground="neutral-weak">
        {entry.answer}
      </Text>
    ),
  }));

  return (
    <Column
      fillWidth
      gap="20"
      background="neutral-alpha-weak"
      border="neutral-alpha-medium"
      radius="xl"
      padding="24"
      style={shellStyle}
    >
      <Row fillWidth gap="20" wrap vertical="start">
        <Column gap="16" style={introStyle}>
          <Heading as="h2" variant="display-strong-xs">
            {title}
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak">
            {description}
          </Text>
        </Column>

        <AccordionGroup
          items={items}
          autoCollapse
          size="l"
          fillWidth
          radius="xl"
          overflow="hidden"
          style={panelStyle}
        />
      </Row>
    </Column>
  );
}
