import type { MetadataRoute } from "next";
import { baseURL, defaultLocale, getSiteContent, routes as routesConfig } from "@/resources";

const getRoutePriority = (route: string) => {
  switch (route) {
    case "/":
      return 1;
    case "/work":
    case "/pricing":
    case "/how-it-works":
      return 0.9;
    default:
      return 0.8;
  }
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const works = getSiteContent(defaultLocale).serviceDetails.map((service) => ({
    url: `${baseURL}/work/${service.slug}`,
    lastModified: new Date(service.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const activeRoutes = Object.keys(routesConfig).filter(
    (route) => routesConfig[route as keyof typeof routesConfig],
  );

  const routes = activeRoutes.map((route) => ({
    url: `${baseURL}${route !== "/" ? route : ""}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: getRoutePriority(route),
  }));

  return [...routes, ...works];
}
