"use client";

import { useEffect, useState } from "react";
import styles from "./HomeShowcaseCarousel.module.scss";

type HomeShowcaseSlide = {
  image: string;
  alt: string;
  variant: "landscape" | "portrait";
  objectPosition?: string;
  backgroundPosition?: string;
};

interface HomeShowcaseCarouselProps {
  slides: readonly HomeShowcaseSlide[];
}

const rotationDelay = 5200;

export function HomeShowcaseCarousel({ slides }: HomeShowcaseCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotion.matches) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, rotationDelay);

    return () => window.clearInterval(intervalId);
  }, [slides.length]);

  return (
    <div className={styles.frame}>
      {slides.map((slide, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={slide.image}
            className={
              isActive
                ? `${styles.slide} ${styles[slide.variant]} ${styles.active}`
                : `${styles.slide} ${styles[slide.variant]}`
            }
            aria-hidden={!isActive}
          >
            <img
              className={styles.background}
              alt=""
              aria-hidden="true"
              src={slide.image}
              style={{ objectPosition: slide.backgroundPosition ?? slide.objectPosition }}
            />
            <div className={styles.overlay} />
            <div className={styles.content}>
              <div className={styles.media}>
                <img
                  className={styles.image}
                  alt={isActive ? slide.alt : ""}
                  src={slide.image}
                  style={{ objectPosition: slide.objectPosition }}
                />
              </div>
            </div>
          </div>
        );
      })}
      <div className={styles.indicators} aria-hidden="true">
        {slides.map((slide, index) => (
          <span
            key={slide.image}
            className={
              index === activeIndex
                ? `${styles.indicator} ${styles.indicatorActive}`
                : styles.indicator
            }
          />
        ))}
      </div>
    </div>
  );
}
