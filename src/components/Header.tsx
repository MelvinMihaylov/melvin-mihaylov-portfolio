"use client";

import { usePathname } from "next/navigation";

import { Fade, Line, Row, ToggleButton } from "@once-ui-system/core";

import { defaultLocale, display, getLocaleFromPathname, getLocalizedPath, getPathnameWithoutLocale, routes } from "@/resources";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";

type HeaderProps = {
  labels: {
    about: string;
    work: string;
    pricing: string;
    howItWorks: string;
  };
  languageToggleLabels: {
    switchToBg: string;
    switchToEn: string;
  };
  themeToggleLabels: {
    switchToLight: string;
    switchToDark: string;
  };
};

export const Header = ({
  labels,
  languageToggleLabels,
  themeToggleLabels,
}: HeaderProps) => {
  const pathname = usePathname() ?? getLocalizedPath(defaultLocale, "/");
  const activeLocale = getLocaleFromPathname(pathname);
  const pathnameWithoutLocale = getPathnameWithoutLocale(pathname);
  const navButtonSize = "m" as const;

  return (
    <>
      <Fade s={{ hide: true }} fillWidth position="fixed" height="80" zIndex={9} />
      <Fade
        hide
        s={{ hide: false }}
        fillWidth
        position="fixed"
        bottom="0"
        to="top"
        height="80"
        zIndex={9}
      />
      <Row
        fitHeight
        className={styles.position}
        position="sticky"
        as="header"
        zIndex={9}
        fillWidth
        padding="12"
        horizontal="center"
        data-border="rounded"
        s={{
          position: "fixed",
        }}
      >
        <Row fillWidth horizontal="center">
          <Row
            background="page"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding="8"
            horizontal="center"
            zIndex={1}
          >
            <Row gap="8" vertical="center" textVariant="body-default-m" suppressHydrationWarning>
              {routes["/"] && (
                <ToggleButton
                  prefixIcon="home"
                  href={getLocalizedPath(activeLocale, "/")}
                  selected={pathnameWithoutLocale === "/"}
                  size={navButtonSize}
                />
              )}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              {routes["/about"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="person"
                      href={getLocalizedPath(activeLocale, "/about")}
                      label={labels.about}
                      selected={pathnameWithoutLocale === "/about"}
                      size={navButtonSize}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="person"
                      href={getLocalizedPath(activeLocale, "/about")}
                      selected={pathnameWithoutLocale === "/about"}
                      size={navButtonSize}
                    />
                  </Row>
                </>
              )}
              {routes["/work"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="grid"
                      href={getLocalizedPath(activeLocale, "/work")}
                      label={labels.work}
                      selected={pathnameWithoutLocale.startsWith("/work")}
                      size={navButtonSize}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="grid"
                      href={getLocalizedPath(activeLocale, "/work")}
                      selected={pathnameWithoutLocale.startsWith("/work")}
                      size={navButtonSize}
                    />
                  </Row>
                </>
              )}
              {routes["/pricing"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="card"
                      href={getLocalizedPath(activeLocale, "/pricing")}
                      label={labels.pricing}
                      selected={pathnameWithoutLocale.startsWith("/pricing")}
                      size={navButtonSize}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="card"
                      href={getLocalizedPath(activeLocale, "/pricing")}
                      selected={pathnameWithoutLocale.startsWith("/pricing")}
                      size={navButtonSize}
                    />
                  </Row>
                </>
              )}
              {routes["/how-it-works"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="rocket"
                      href={getLocalizedPath(activeLocale, "/how-it-works")}
                      label={labels.howItWorks}
                      selected={pathnameWithoutLocale.startsWith("/how-it-works")}
                      size={navButtonSize}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="rocket"
                      href={getLocalizedPath(activeLocale, "/how-it-works")}
                      selected={pathnameWithoutLocale.startsWith("/how-it-works")}
                      size={navButtonSize}
                    />
                  </Row>
                </>
              )}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              <LanguageToggle
                locale={activeLocale}
                switchToBgLabel={languageToggleLabels.switchToBg}
                switchToEnLabel={languageToggleLabels.switchToEn}
              />
              {display.themeSwitcher && (
                <ThemeToggle
                  switchToLightLabel={themeToggleLabels.switchToLight}
                  switchToDarkLabel={themeToggleLabels.switchToDark}
                />
              )}
            </Row>
          </Row>
        </Row>
      </Row>
    </>
  );
};
