const siteUrl = "https://navixlabs.cl";

export default function sitemap() {
  const routes = [
    "",
    "/optimizacion-rutas",
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
    changeFrequency:
      route === "" || route === "/optimizacion-rutas" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/optimizacion-rutas"
        ? 0.98
        : route === "/servicios"
        ? 0.95
        : route === "/soluciones"
        ? 0.9
        : route === "/casos"
        ? 0.85
        : route === "/contacto"
        ? 0.8
        : route === "/demo"
        ? 0.75
        : route === "/metodologia"
        ? 0.7
        : 0.6,
  }));
}
