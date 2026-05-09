import {
  DataStyleConfig,
  DisplayConfig,
  EffectsConfig,
  FontsConfig,
  MailchimpConfig,
  RoutesConfig,
  SameAsConfig,
  SchemaConfig,
  SocialSharingConfig,
  StyleConfig,
} from "@/types";
import { Geist_Mono } from "next/font/google";
import { Nunito } from "next/font/google";
import { defaultLocale } from "./i18n";
import { contactDetails, getSiteContent } from "./site-content";

const normalizeBaseURL = (value: string) => value.replace(/\/+$/, "");
const productionBaseURL = "https://melvinmihaylov.com";

const resolveBaseURL = () => {
  const configuredURL =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_ENV === "production" ? productionBaseURL : undefined) ||
    (process.env.VERCEL_BRANCH_URL ? `https://${process.env.VERCEL_BRANCH_URL}` : undefined) ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined) ||
    productionBaseURL;

  return normalizeBaseURL(configuredURL);
};

const baseURL: string = resolveBaseURL();

const routes: RoutesConfig = {
  "/": true,
  "/about": true,
  "/work": true,
  "/pricing": true,
  "/blog": false,
  "/how-it-works": true,
};

const display: DisplayConfig = {
  location: false,
  time: false,
  themeSwitcher: true,
};

const defaultContent = getSiteContent(defaultLocale);

const heading = Nunito({
  variable: "--font-heading",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const body = Nunito({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const label = Nunito({
  variable: "--font-label",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const code = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

const fonts: FontsConfig = {
  heading: heading,
  body: body,
  label: label,
  code: code,
};

// default customization applied to the HTML in the main layout.tsx
const style: StyleConfig = {
  theme: "system", // dark | light | system
  neutral: "gray", // sand | gray | slate | mint | rose | dusk | custom
  brand: "cyan", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan | custom
  accent: "red", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan | custom
  solid: "contrast", // color | contrast
  solidStyle: "flat", // flat | plastic
  border: "playful", // rounded | playful | conservative | sharp
  surface: "translucent", // filled | translucent
  transition: "all", // all | micro | macro
  scaling: "100", // 90 | 95 | 100 | 105 | 110
};

const dataStyle: DataStyleConfig = {
  variant: "gradient", // flat | gradient | outline
  mode: "categorical", // categorical | divergent | sequential
  height: 24, // default chart height
  axis: {
    stroke: "var(--neutral-alpha-weak)",
  },
  tick: {
    fill: "var(--neutral-on-background-weak)",
    fontSize: 11,
    line: false,
  },
};

const effects: EffectsConfig = {
  mask: {
    cursor: false,
    x: 50,
    y: 0,
    radius: 100,
  },
  gradient: {
    display: false,
    opacity: 100,
    x: 50,
    y: 60,
    width: 100,
    height: 50,
    tilt: 0,
    colorStart: "accent-background-strong",
    colorEnd: "page-background",
  },
  dots: {
    display: true,
    opacity: 40,
    size: "2",
    color: "brand-background-strong",
  },
  grid: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-medium",
    width: "0.25rem",
    height: "0.25rem",
  },
  lines: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-weak",
    size: "16",
    thickness: 1,
    angle: 45,
  },
};

const mailchimp: MailchimpConfig = {
  action: "https://url/subscribe/post?parameters",
  effects: {
    mask: {
      cursor: true,
      x: 50,
      y: 0,
      radius: 100,
    },
    gradient: {
      display: true,
      opacity: 90,
      x: 50,
      y: 0,
      width: 50,
      height: 50,
      tilt: 0,
      colorStart: "accent-background-strong",
      colorEnd: "static-transparent",
    },
    dots: {
      display: true,
      opacity: 20,
      size: "2",
      color: "brand-on-background-weak",
    },
    grid: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-medium",
      width: "0.25rem",
      height: "0.25rem",
    },
    lines: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-medium",
      size: "16",
      thickness: 1,
      angle: 90,
    },
  },
};

// default schema data
const schema: SchemaConfig = {
  logo: "/images/mmlogo.png",
  type: "Person",
  name: "Melvin Mihaylov",
  description: defaultContent.home.description,
  email: contactDetails.email,
};

// social links
const sameAs: SameAsConfig = {
  threads: "",
  linkedin: "",
  discord: "",
};

// social sharing configuration for blog posts
const socialSharing: SocialSharingConfig = {
  display: false,
  platforms: {
    x: false,
    linkedin: false,
    facebook: false,
    pinterest: false,
    whatsapp: false,
    reddit: false,
    telegram: false,
    email: false,
    copyLink: false,
  },
};

export {
  display,
  mailchimp,
  routes,
  baseURL,
  fonts,
  style,
  schema,
  sameAs,
  socialSharing,
  effects,
  dataStyle,
};
