import { Column, Heading, Text } from "@once-ui-system/core";
import { defaultLocale, getSiteContent } from "@/resources";

export default function NotFound() {
  const { ui } = getSiteContent(defaultLocale);

  return (
    <Column as="section" fill center paddingBottom="160">
      <Text marginBottom="s" variant="display-strong-xl">
        404
      </Text>
      <Heading marginBottom="l" variant="display-default-xs">
        {ui.notFound.title}
      </Heading>
      <Text onBackground="neutral-weak">{ui.notFound.description}</Text>
    </Column>
  );
}
