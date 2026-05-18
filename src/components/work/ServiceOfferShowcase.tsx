"use client";

import Image from "next/image";
import { Button, Column, Heading, Row, Tag, Text } from "@once-ui-system/core";
import { useEffect, useRef } from "react";
import styles from "./ServiceOfferShowcase.module.scss";

export type ShowcaseItem = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  badges?: readonly string[];
  href?: string;
  ctaLabel?: string;
};

type ServiceOfferShowcaseProps = {
  items: readonly ShowcaseItem[];
  defaultCtaLabel?: string;
};

export function ServiceOfferShowcase({ items, defaultCtaLabel }: ServiceOfferShowcaseProps) {
  const showcaseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = Array.from(showcaseRef.current?.querySelectorAll<HTMLElement>("[data-service-card]") ?? []);

    if (cards.length === 0) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const revealThreshold = window.innerHeight * 0.88;

    if (reduceMotion.matches) {
      cards.forEach((card, index) => {
        card.dataset.animated = "true";
        card.dataset.visible = "true";
        card.style.setProperty("--reveal-delay", `${Math.min(index * 90, 270)}ms`);
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const card = entry.target as HTMLElement;

          card.dataset.visible = "true";
          observer.unobserve(card);
        });
      },
      {
        threshold: 0.24,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    cards.forEach((card, index) => {
      card.dataset.animated = "true";
      card.style.setProperty("--reveal-delay", `${Math.min(index * 90, 270)}ms`);

      if (card.getBoundingClientRect().top <= revealThreshold) {
        card.dataset.visible = "true";
        return;
      }

      card.dataset.visible = "false";
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, [items.length]);

  return (
    <div ref={showcaseRef} className={styles.stack}>
      {items.map((item, index) => {
        const isReverse = index % 2 === 1;
        const ctaLabel = item.ctaLabel ?? defaultCtaLabel;

        return (
          <article
            key={item.id}
            className={isReverse ? `${styles.card} ${styles.reverse}` : styles.card}
            data-service-card
            data-animated="false"
            data-visible="true"
          >
            <div className={styles.mediaShell}>
              <div className={styles.mediaGlow} />
              <div className={styles.mediaFrame}>
                <Image
                  className={styles.mediaBackground}
                  alt=""
                  aria-hidden="true"
                  src={item.image}
                  fill
                  quality={35}
                  sizes="100vw"
                />
                <div className={styles.mediaOverlay} />
                <Image
                  className={styles.image}
                  alt={item.imageAlt}
                  src={item.image}
                  fill
                  quality={82}
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 48vw"
                />
              </div>
            </div>

            <Column className={styles.content} gap="20" vertical="center">
              <Row gap="8" wrap>
                <Tag size="m">{String(index + 1).padStart(2, "0")}</Tag>
                {(item.badges ?? []).slice(0, 2).map((badge) => (
                  <Tag key={badge} size="m">
                    {badge}
                  </Tag>
                ))}
              </Row>

              <Column gap="12">
                <Heading as="h3" variant="display-strong-xs">
                  {item.title}
                </Heading>
                {item.subtitle ? (
                  <Text variant="body-default-l" onBackground="brand-weak">
                    {item.subtitle}
                  </Text>
                ) : null}
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {item.description}
                </Text>
              </Column>

              <Column className={styles.bullets} gap="12">
                {item.bullets.slice(0, 3).map((bullet) => (
                  <div key={bullet} className={styles.bullet}>
                    <span className={styles.bulletMark} aria-hidden="true" />
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {bullet}
                    </Text>
                  </div>
                ))}
              </Column>

              {item.href && ctaLabel ? (
                <div className={styles.actions}>
                  <Button href={item.href} variant="secondary" size="m" arrowIcon>
                    {ctaLabel}
                  </Button>
                </div>
              ) : null}
            </Column>
          </article>
        );
      })}
    </div>
  );
}
