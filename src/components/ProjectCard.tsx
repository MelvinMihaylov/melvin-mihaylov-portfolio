"use client";

import {
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@once-ui-system/core";
import { BrandLogo } from "@/components/BrandLogo";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  description: string;
  link: string;
  readDetailsLabel: string;
  viewProjectLabel: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  description,
  link,
  readDetailsLabel,
  viewProjectLabel,
}) => {
  return (
    <Column fillWidth gap="m">
      {images.length > 0 ? (
        <Carousel
          sizes="(max-width: 960px) 100vw, 960px"
          items={images.map((image) => ({
            slide: image,
            alt: title,
          }))}
        />
      ) : (
        <Flex
          fillWidth
          background="neutral-alpha-weak"
          border="neutral-alpha-medium"
          radius="xl"
          padding="32"
          horizontal="center"
        >
          <Column horizontal="center" align="center" gap="12">
            <BrandLogo maxWidth={88} />
            <Text variant="label-default-s" onBackground="neutral-weak">
              {title}
            </Text>
          </Column>
        </Flex>
      )}
      <Flex
        s={{ direction: "column" }}
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="24"
        gap="l"
      >
        {title && (
          <Flex flex={5}>
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              {title}
            </Heading>
          </Flex>
        )}
        {description?.trim() && (
          <Column flex={7} gap="16">
            <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
              {description}
            </Text>
            <Flex gap="24" wrap>
              <SmartLink
                suffixIcon="arrowRight"
                style={{ margin: "0", width: "fit-content" }}
                href={href}
              >
                <Text variant="body-default-s">{readDetailsLabel}</Text>
              </SmartLink>
              {link && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: "0", width: "fit-content" }}
                  href={link}
                >
                  <Text variant="body-default-s">{viewProjectLabel}</Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Flex>
    </Column>
  );
};
