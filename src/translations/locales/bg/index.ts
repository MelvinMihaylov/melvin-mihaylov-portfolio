import type { SiteContent } from "@/translations/schema";
import { bgAboutSection } from "./about";
import { bgCoreSection } from "./core";
import { bgHomeSection } from "./home";
import { bgHowItWorksSection } from "./how-it-works";
import { bgPricingSection } from "./pricing";
import { bgUiSection } from "./ui";
import { bgWorkSection } from "./work";

const bgContent: SiteContent = {
  ...bgCoreSection,
  ...bgHomeSection,
  ...bgAboutSection,
  ...bgWorkSection,
  ...bgPricingSection,
  ...bgHowItWorksSection,
  ...bgUiSection,
};

export { bgContent };
export default bgContent;
