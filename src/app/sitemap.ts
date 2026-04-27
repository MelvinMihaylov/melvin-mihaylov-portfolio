import { baseURL, defaultLocale, getSiteContent, routes as routesConfig } from "@/resources";

export default async function sitemap() {
  const works = getSiteContent(defaultLocale).serviceDetails.map((service) => ({
    url: `${baseURL}/work/${service.slug}`,
    lastModified: service.publishedAt,
  }));

  const activeRoutes = Object.keys(routesConfig).filter(
    (route) => routesConfig[route as keyof typeof routesConfig],
  );

  const routes = activeRoutes.map((route) => ({
    url: `${baseURL}${route !== "/" ? route : ""}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...works];
}
