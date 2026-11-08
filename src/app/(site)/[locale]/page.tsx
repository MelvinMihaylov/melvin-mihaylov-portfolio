import { FreeSiteBanner } from "@/components/FreeSiteBanner";
import { JourneyPath } from "@/components/JourneyPath";
import { SiteHeader } from "@/components/SiteHeader";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { CraftStrip } from "@/components/sections/CraftStrip";
import { Directions } from "@/components/sections/Directions";
import { Hero } from "@/components/sections/Hero";
import { Integrations } from "@/components/sections/Integrations";
import { Pricing } from "@/components/sections/Pricing";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { Why } from "@/components/sections/Why";
import { getContent } from "@/content";
import { getLandingStructuredData } from "@/resources/structured-data";
import { type LocaleRouteProps, getRouteLocale } from "./locale-params";

export default async function LandingPage({ params }: LocaleRouteProps) {
  const locale = await getRouteLocale(params);
  const content = getContent(locale);
  const structuredData = getLandingStructuredData(locale);

  return (
    <main id="page" className="site-page">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD has no React equivalent
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <a href="#directions" className="skip-link">
        {content.header.skipLink}
      </a>

      <JourneyPath />
      <SiteHeader locale={locale} content={content} />

      <Hero content={content} />
      <CraftStrip content={content} />
      <Why content={content} />
      <Directions content={content} />
      <Services content={content} />
      <Integrations content={content} />
      <Process content={content} />
      <About content={content} />
      <Pricing content={content} />
      <Contact content={content} locale={locale} />
      <SiteFooter content={content} />
      <FreeSiteBanner content={content} />
    </main>
  );
}
