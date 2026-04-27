import { Column, Heading, Text } from "@once-ui-system/core";
import { getSiteContent } from "@/resources";
import { getRequestLocale } from "@/resources/get-request-locale";

export default async function NotFound() {
  const locale = await getRequestLocale();
  const { ui } = getSiteContent(locale);

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
