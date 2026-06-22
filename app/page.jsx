import Button from "@/components/Button";

const siteUrl = "https://navixlabs.cl";

export const metadata = {
  title: "Optimización de rutas de reparto para empresas en Chile",
  description:
    "Optimiza rutas de reparto en Chile con Navix Labs. Ordenamos clientes por chofer, reducimos kilómetros, mejoramos tiempos y entregamos Excel operativo, mapa de rutas y métricas claras para empresas con flotas y operaciones en terreno.",
  alternates: {
    canonical: "https://navixlabs.cl/",
  },
  openGraph: {
    title: "Navix Labs | Optimización de rutas de reparto en Chile",
    description:
      "Servicio de optimización logística para empresas chilenas con reparto, flotas, fletes, distribución y múltiples direcciones diarias.",
    url: "https://navixlabs.cl/",
    siteName: "Navix Labs",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/navix-logo.png.png",
        width: 1200,
        height: 630,
        alt: "Navix Labs - Optimización de rutas de reparto en Chile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Navix Labs | Optimización de rutas de reparto en Chile",
    description:
      "Rutas por chofer, Excel operativo, mapa y métricas para reducir kilómetros, tiempos y desorden en operaciones de reparto.",
    images: ["/navix-logo.png.png"],
  },
};

const whatsappMessage = encodeURIComponent(
  `Hola Navix Labs, quiero optimizar rutas para mi empresa.

Nombre:
Empresa:
Ciudad:
Cantidad de vehículos:
Cantidad aprox. de entregas diarias:
Rubro:
¿Tengo direcciones en Excel?: Sí / No
Principal problema actual:`
);

const whatsappUrl = `https://wa.me/56973860127?text=${whatsappMessage}`;

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/#webpage`,
    url: `${siteUrl}/`,
    name: "Optimización de rutas de reparto para empresas en Chile",
    description:
      "Navix Labs ayuda a empresas en Chile a optimizar rutas de reparto, ordenar clientes por chofer, reducir kilómetros y mejorar tiempos de operación.",
    inLanguage: "es-CL",
    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },
    about: {
      "@id": `${siteUrl}/#service`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/#route-optimization-service`,
    name: "Optimización de rutas de reparto en Chile",
    serviceType: "Optimización logística y planificación de rutas",
    provider: {
      "@type": "Organization",
      name: "Navix Labs",
      url: siteUrl,
    },
    areaServed: {
      "@type": "Country",
      name: "Chile",
    },
    description:
      "Servicio para transformar direcciones, horarios, vehículos y restricciones operativas en rutas ordenadas por chofer, Excel operativo, mapa y métricas de ahorro.",
    audience: {
      "@type": "BusinessAudience",
      audienceType:
        "Empresas con reparto, distribución, fletes, flotas y operaciones en terreno",
    },
  },
];

export default function Home() {
  return (
    <main className="homePage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <section className="homeHero">
        <div className="container homeHeroGrid">
          <div className="homeHeroText">
            <p className="eyebrow">Optimización express de rutas en Chile</p>

            <h1>Optimiza tus rutas de reparto en 48 horas.</h1>

            <p>
              Convertimos tus direcciones, horarios y vehículos en rutas por
              chofer, Excel operativo, mapa y métricas simples para reducir
              kilómetros, tiempo y desorden en operaciones de reparto.
            </p>

            <div className="homeActions">
              <Button href="/contacto">Solicitar diagnóstico</Button>
              <Button href={whatsappUrl} variant="secondary" external>
                WhatsApp
              </Button>
            </div>

            <span className="homeNote">
              Para empresas en Chile con reparto local, distribución, fletes,
              técnicos en terreno, flotas y múltiples direcciones diarias.
            </span>
          </div>

          <aside className="homeResultCard">
            <div className="homeResultHeader">
              <span>Ejemplo referencial</span>
              <strong>Ruta diaria</strong>
            </div>

            <div className="homeResultRows">
              <div>
                <span>Antes</span>
                <strong>142 km</strong>
              </div>

              <div>
                <span>Después</span>
                <strong>97 km</strong>
              </div>

              <div className="highlight">
                <span>Ahorro estimado</span>
                <strong>-45 km</strong>
              </div>
            </div>

            <Button href="/demo" variant="secondary">
              Ver ejemplo completo
            </Button>
          </aside>
        </div>
      </section>

      <section className="homeProcess">
        <div className="container">
          <div className="homeSectionHeader">
            <p className="eyebrow">Cómo funciona</p>
            <h2>Un proceso simple para ordenar tus rutas de reparto.</h2>
          </div>

          <div className="homeProcessGrid">
            <article>
              <span>01</span>
              <h3>Envías tus direcciones</h3>
              <p>
                Puede ser una planilla Excel, lista de clientes, rutas actuales,
                horarios de atención o zonas de reparto.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Ordenamos la operación</h3>
              <p>
                Revisamos vehículos, choferes, carga, zonas, entregas,
                restricciones y recorridos posibles.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Recibes una entrega clara</h3>
              <p>
                Rutas por chofer, Excel operativo, mapa de revisión y
                comparación antes/después con métricas simples.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="homeProcess">
        <div className="container">
          <div className="homeSectionHeader">
            <p className="eyebrow">Para quién es</p>
            <h2>
              Optimización logística para empresas con operaciones en terreno.
            </h2>
          </div>

          <div className="homeProcessGrid">
            <article>
              <span>01</span>
              <h3>Reparto y distribución</h3>
              <p>
                Empresas que entregan productos diariamente y necesitan reducir
                kilómetros, tiempos muertos y cruces de ruta.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Fletes y flotas</h3>
              <p>
                Operaciones con varios vehículos, múltiples direcciones,
                horarios de atención y capacidad limitada por vehículo.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Servicios en terreno</h3>
              <p>
                Técnicos, visitas a clientes, instalaciones, mantenciones o
                recorridos diarios que hoy se planifican manualmente.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="homeCtaSection">
        <div className="container">
          <div className="homeCta">
            <div>
              <p className="eyebrow">Siguiente paso</p>
              <h2>Veamos si tus rutas pueden mejorar.</h2>
              <p>
                Completa el formulario con ciudad, vehículos, entregas
                aproximadas, horarios, restricciones y principal problema actual.
                Con eso podemos evaluar si existe oportunidad de ahorro en
                kilómetros, tiempo y uso de flota.
              </p>
            </div>

            <div className="homeActions">
              <Button href="/contacto">Completar formulario</Button>
              <Button href={whatsappUrl} variant="secondary" external>
                Escribir por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
