const siteUrl = "https://navixlabs.cl";

export default function sitemap() {
  const routes = [
    "",
    "/servicios",
    "/soluciones",
    "/casos",
    "/demo",
    "/metodologia",
    "/contacto",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/servicios"
        ? 0.95
        : route === "/soluciones"
        ? 0.9
        : route === "/casos"
        ? 0.85
        : route === "/contacto"
        ? 0.8
        : 0.7,
  }));
}
