"use client";

import { usePathname, useRouter } from "next/navigation";

import { Fade, Line, Row, ToggleButton } from "@once-ui-system/core";

import { routes, about, display, howItWorks, pricing, work } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";

export const Header = () => {
  const pathname = usePathname() ?? "";
  const router = useRouter();
  const navButtonSize = "m" as const;

  const scrollToPageTop = () => {
    const runScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.body.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.scrollingElement?.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    runScroll();

    window.requestAnimationFrame(runScroll);
    window.setTimeout(runScroll, 80);
  };

  const navigateTo = (target: string) => {
    if (pathname === target) {
      scrollToPageTop();
      return;
    }

    router.push(target, { scroll: true });
    scrollToPageTop();
  };

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
                  onClick={() => navigateTo("/")}
                  selected={pathname === "/"}
                  size={navButtonSize}
                />
              )}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              {routes["/about"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="person"
                      onClick={() => navigateTo("/about")}
                      label={about.label}
                      selected={pathname === "/about"}
                      size={navButtonSize}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="person"
                      onClick={() => navigateTo("/about")}
                      selected={pathname === "/about"}
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
                      onClick={() => navigateTo("/work")}
                      label={work.label}
                      selected={pathname.startsWith("/work")}
                      size={navButtonSize}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="grid"
                      onClick={() => navigateTo("/work")}
                      selected={pathname.startsWith("/work")}
                      size={navButtonSize}
                    />
                  </Row>
                </>
              )}
              {routes["/pricing"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="document"
                      onClick={() => navigateTo("/pricing")}
                      label={pricing.label}
                      selected={pathname.startsWith("/pricing")}
                      size={navButtonSize}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="document"
                      onClick={() => navigateTo("/pricing")}
                      selected={pathname.startsWith("/pricing")}
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
                      onClick={() => navigateTo("/how-it-works")}
                      label={howItWorks.label}
                      selected={pathname.startsWith("/how-it-works")}
                      size={navButtonSize}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="rocket"
                      onClick={() => navigateTo("/how-it-works")}
                      selected={pathname.startsWith("/how-it-works")}
                      size={navButtonSize}
                    />
                  </Row>
                </>
              )}
              {display.themeSwitcher && (
                <>
                  <Line background="neutral-alpha-medium" vert maxHeight="24" />
                  <ThemeToggle />
                </>
              )}
            </Row>
          </Row>
        </Row>
      </Row>
    </>
  );
};
