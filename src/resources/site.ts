const normalizeBaseURL = (value: string) => value.replace(/\/+$/, "");

const productionBaseURL = "https://melvinmihaylov.com";

/**
 * Resolves the canonical origin. Vercel preview deployments get their own URL so
 * previews never emit canonicals pointing at production.
 */
const resolveBaseURL = () => {
  const configuredURL =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_ENV === "production" ? productionBaseURL : undefined) ||
    (process.env.VERCEL_BRANCH_URL ? `https://${process.env.VERCEL_BRANCH_URL}` : undefined) ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined) ||
    productionBaseURL;

  return normalizeBaseURL(configuredURL);
};

export const baseURL: string = resolveBaseURL();

export const contactDetails = {
  email: "melvinmihaylov@gmail.com",
  phone: "+359898361347",
  phoneDisplay: "+359 898 361 347",
  github: "https://github.com/MelvinMihaylov",
} as const;

export const person = {
  name: "Melvin Mihaylov",
  role: "Web design & development",
  logo: "/images/mmlogo.avif",
  avatar: "/images/me.avif",
} as const;

/** Profiles that belong in the Person schema's `sameAs`. Empty entries are filtered out. */
export const sameAs: string[] = [contactDetails.github].filter(Boolean);
