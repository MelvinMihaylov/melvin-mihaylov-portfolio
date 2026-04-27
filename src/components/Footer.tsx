import { Row, SmartLink, Text } from "@once-ui-system/core";
import { contactDetails, person } from "@/resources";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Row as="footer" fillWidth padding="8" horizontal="center" s={{ direction: "column" }}>
      <Row
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="between"
        vertical="center"
        s={{
          direction: "column",
          horizontal: "center",
          align: "center",
        }}
      >
        <Text variant="body-default-s" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© {currentYear} /</Text>
          <Text paddingX="4">{person.name}</Text>
          <Text onBackground="neutral-weak">/ Modern websites, SEO help, and launch support.</Text>
        </Text>
        <Row gap="16" wrap horizontal="center">
          <SmartLink href={`mailto:${contactDetails.email}`}>{contactDetails.email}</SmartLink>
          <SmartLink href={`tel:${contactDetails.phone}`}>{contactDetails.phoneDisplay}</SmartLink>
          <SmartLink href="/pricing">Pricing</SmartLink>
        </Row>
      </Row>
      <Row height="80" hide s={{ hide: false }} />
    </Row>
  );
};
