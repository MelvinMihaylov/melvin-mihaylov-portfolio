import type { SiteContent } from "@/translations/schema";
import { enAboutSection } from "./about";
import { enCoreSection } from "./core";
import { enHomeSection } from "./home";
import { enHowItWorksSection } from "./how-it-works";
import { enPricingSection } from "./pricing";
import { enUiSection } from "./ui";
import { enWorkSection } from "./work";

const enContent: SiteContent = {
  ...enCoreSection,
  ...enHomeSection,
  ...enAboutSection,
  ...enWorkSection,
  ...enPricingSection,
  ...enHowItWorksSection,
  ...enUiSection,
};

export { enContent };
export default enContent;
