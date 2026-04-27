"use client";

import { useTheme } from "@once-ui-system/core";
import { useEffect, useState } from "react";
import styles from "./HomeShowcaseCarousel.module.scss";

type HomeShowcaseSlide = {
  image: string;
  darkImage?: string;
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
  const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    setCurrentTheme(document.documentElement.getAttribute("data-theme") || "light");
  }, [theme]);

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
        const slideImage =
          currentTheme === "dark" && slide.darkImage ? slide.darkImage : slide.image;

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
              src={slideImage}
              style={{ objectPosition: slide.backgroundPosition ?? slide.objectPosition }}
            />
            <div className={styles.overlay} />
            <div className={styles.content}>
              <div className={styles.media}>
                <img
                  className={styles.image}
                  alt={isActive ? slide.alt : ""}
                  src={slideImage}
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
