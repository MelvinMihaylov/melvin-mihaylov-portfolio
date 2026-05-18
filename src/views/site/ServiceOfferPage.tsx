import Image from "next/image";
import { notFound } from "next/navigation";
import { Button, Column, Heading, Row, Schema, Tag, Text } from "@once-ui-system/core";
import {
  baseURL,
  buildBreadcrumbStructuredData,
  buildFaqStructuredData,
  buildPageMetadata,
  buildServiceStructuredData,
  contactDetails,
  getLocalizedPath,
  getServiceOffer,
  getSiteContent,
  type Locale,
} from "@/resources";
import styles from "./ServiceOfferPage.module.scss";

type ServiceOfferPageProps = {
  locale: Locale;
  slug: string;
};

export function generateServiceOfferMetadata(locale: Locale, slug: string) {
  const offer = getServiceOffer(locale, slug);

  if (!offer) {
    notFound();
  }

  return buildPageMetadata({
    locale,
    title: offer.seoTitle,
    description: offer.seoDescription,
    path: `/work/${offer.slug}`,
    image: offer.image,
  });
}

export function ServiceOfferPage({ locale, slug }: ServiceOfferPageProps) {
  const offer = getServiceOffer(locale, slug);
  const { home, person, pricing, ui, work } = getSiteContent(locale);

  if (!offer) {
    notFound();
  }

  const homePath = getLocalizedPath(locale, home.path);
  const pagePath = getLocalizedPath(locale, `/work/${offer.slug}`);
  const pricingPath = getLocalizedPath(locale, pricing.path);
  const workPath = getLocalizedPath(locale, work.path);
  const serviceMailto = `mailto:${contactDetails.email}?subject=${encodeURIComponent(offer.title)}`;
  const faqStructuredData = buildFaqStructuredData(
    offer.faq,
    `${baseURL}#service-faq-${locale}-${offer.slug}`,
  );
  const breadcrumbStructuredData = buildBreadcrumbStructuredData(
    [
      { name: home.label, path: homePath },
      { name: work.label, path: workPath },
      { name: offer.title, path: pagePath },
    ],
    `${baseURL}${pagePath}#breadcrumb`,
  );
  const serviceStructuredData = buildServiceStructuredData({
    locale,
    offer,
    path: pagePath,
  });

  return (
    <Column maxWidth="l" gap="xl" paddingTop="24" paddingBottom="40">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={offer.seoTitle}
        description={offer.seoDescription}
        path={pagePath}
        image={offer.image}
        author={{
          name: person.name,
          url: `${baseURL}${pagePath}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }}
      />
      <article className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <Tag size="l">{offer.title}</Tag>
            <Heading variant="display-strong-l" align="center">
              {offer.headline}
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak" align="center">
              {offer.description}
            </Text>
            <div className={styles.tagRow}>
              {offer.tags.map((tag) => (
                <Tag key={tag} size="m">
                  {tag}
                </Tag>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.heroMediaSection}>
          <div className={styles.heroMediaFrame}>
            <Image
              className={styles.heroImageBackground}
              alt=""
              aria-hidden="true"
              src={offer.image}
              fill
              quality={35}
              sizes="100vw"
            />
            <div className={styles.heroImageOverlay} />
            <Image
              className={styles.heroImage}
              alt={offer.imageAlt}
              src={offer.image}
              fill
              priority
              quality={84}
              sizes="100vw"
            />
          </div>
        </section>

        {offer.articleIntro?.length ? (
          <section className={styles.introPanel}>
            <Column gap="12">
              {offer.articleIntro.map((paragraph) => (
                <Text key={paragraph} variant="body-default-m" onBackground="neutral-weak">
                  {paragraph}
                </Text>
              ))}
            </Column>
          </section>
        ) : null}

        <section className={styles.summaryGrid}>
          <div className={styles.summaryPanel}>
            <Column gap="16">
              <Heading as="h2" variant="display-strong-s">
                {ui.servicePage.idealForTitle}
              </Heading>
              <ul className={styles.summaryList}>
                {offer.idealFor.map((item) => (
                  <li key={item} className={styles.summaryItem}>
                    <span className={styles.summaryMark} aria-hidden="true" />
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {item}
                    </Text>
                  </li>
                ))}
              </ul>
            </Column>
          </div>
          <div className={styles.summaryPanel}>
            <Column gap="16">
              <Heading as="h2" variant="display-strong-s">
                {ui.servicePage.deliverablesTitle}
              </Heading>
              <ul className={styles.summaryList}>
                {offer.bullets.map((bullet) => (
                  <li key={bullet} className={styles.summaryItem}>
                    <span className={styles.summaryMark} aria-hidden="true" />
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {bullet}
                    </Text>
                  </li>
                ))}
              </ul>
            </Column>
          </div>
        </section>

        {offer.articleSections?.map((section, index) => (
          <section
            key={section.title}
            className={index % 2 === 1 ? `${styles.storySection} ${styles.storySectionAlt}` : styles.storySection}
          >
            <div className={styles.storyBody}>
              <Heading as="h2" variant="display-strong-s">
                {section.title}
              </Heading>
              <div className={styles.storyParagraphs}>
                {section.paragraphs.map((paragraph) => (
                  <Text key={paragraph} variant="body-default-m" onBackground="neutral-weak">
                    {paragraph}
                  </Text>
                ))}
              </div>
            </div>
            {section.bullets?.length ? (
              <div className={styles.storyAside}>
                {section.bullets.map((bullet) => (
                  <div key={bullet} className={styles.storyBulletCard}>
                    <div className={styles.storyBullet}>
                      <span className={styles.storyBulletMark} aria-hidden="true" />
                      <Text variant="body-default-s" onBackground="neutral-weak">
                        {bullet}
                      </Text>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </section>
        ))}

        <section className={styles.pricingPanel}>
          <Column gap="12">
            <Heading as="h2" variant="display-strong-s">
              {ui.servicePage.pricingHintTitle}
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak">
              {offer.pricingHint}
            </Text>
          </Column>
        </section>

        <section className={styles.faqSection}>
          <Column gap="12">
            <Heading as="h2" variant="display-strong-s">
              {ui.servicePage.faqTitle}
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak">
              {ui.servicePage.faqDescription}
            </Text>
          </Column>
          <div className={styles.faqAccordion}>
            {offer.faq.map((entry, index) => (
              <details key={entry.question} className={styles.faqItem}>
                <summary className={styles.faqSummary}>
                  <Text variant="label-default-s" onBackground="brand-weak" className={styles.faqIndex}>
                    {String(index + 1).padStart(2, "0")}
                  </Text>
                  <Text variant="heading-strong-s">{entry.question}</Text>
                </summary>
                <div className={styles.faqAnswer}>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    {entry.answer}
                  </Text>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.ctaPanel}>
          <Column gap="16">
            <Heading as="h2" variant="display-strong-s">
              {ui.servicePage.ctaTitle}
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak">
              {ui.servicePage.ctaDescription}
            </Text>
            <div className={styles.ctaActions}>
              <Button href={serviceMailto} variant="primary" size="m" arrowIcon>
                {offer.ctaLabel}
              </Button>
              <Button href={pricingPath} variant="secondary" size="m" arrowIcon>
                {ui.servicePage.pricingCta}
              </Button>
              <Button href={workPath} variant="tertiary" size="m" arrowIcon>
                {ui.servicePage.servicesCta}
              </Button>
            </div>
          </Column>
        </section>
      </article>
    </Column>
  );
}
