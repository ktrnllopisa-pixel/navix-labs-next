import Button from "@/components/Button";

const siteUrl = "https://navixlabs.cl";

export const metadata = {
  title: "Optimización de rutas para empresas en Chile",
  description:
    "Servicio de optimización de rutas para empresas en Chile. Navix Labs ordena rutas por chofer, reduce kilómetros, mejora tiempos de reparto y entrega Excel operativo, mapa y métricas claras.",
  alternates: {
    canonical: "https://navixlabs.cl/optimizacion-rutas",
  },
  openGraph: {
    title: "Optimización de rutas para empresas en Chile | Navix Labs",
    description:
      "Optimización de rutas de reparto, flotas y operaciones en terreno. Rutas por chofer, Excel operativo, mapa y métricas para reducir kilómetros y tiempos.",
    url: "https://navixlabs.cl/optimizacion-rutas",
    siteName: "Navix Labs",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/navix-logo.png.png",
        width: 1200,
        height: 630,
        alt: "Navix Labs - Optimización de rutas para empresas en Chile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Optimización de rutas para empresas en Chile | Navix Labs",
    description:
      "Rutas por chofer, Excel operativo, mapa y métricas para empresas con reparto, flotas y operaciones en terreno.",
    images: ["/navix-logo.png.png"],
  },
};

const whatsappMessage = encodeURIComponent(
  `Hola Navix Labs, quiero consultar por optimización de rutas.

Nombre:
Empresa:
Ciudad:
Cantidad de vehículos:
Cantidad aprox. de entregas diarias:
¿Tengo direcciones en Excel?: Sí / No
Principal problema actual:`
);

const whatsappUrl = `https://wa.me/56973860127?text=${whatsappMessage}`;

const faqs = [
  {
    question: "¿Qué es la optimización de rutas?",
    answer:
      "La optimización de rutas consiste en ordenar direcciones, vehículos, horarios y restricciones para definir qué chofer visita cada punto y en qué orden, buscando reducir kilómetros, tiempos y desorden operativo.",
  },
  {
    question: "¿Qué empresas necesitan optimización de rutas?",
    answer:
      "Es útil para empresas de reparto, distribución, fletes, servicios técnicos, visitas en terreno, última milla y cualquier operación con múltiples direcciones diarias.",
  },
  {
    question: "¿Necesito tener un software instalado?",
    answer:
      "No. Puedes comenzar enviando una planilla con direcciones, vehículos, horarios, capacidades y restricciones. Navix Labs procesa la información y entrega rutas ordenadas, mapa, Excel operativo y métricas.",
  },
  {
    question: "¿Qué resultados se pueden medir?",
    answer:
      "Se pueden medir kilómetros totales, tiempo estimado, entregas por chofer, utilización de flota, ahorro operativo y comparación entre la planificación actual y la ruta optimizada.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/optimizacion-rutas#webpage`,
    url: `${siteUrl}/optimizacion-rutas`,
    name: "Optimización de rutas para empresas en Chile",
    description:
      "Servicio de optimización de rutas para empresas chilenas con reparto, flotas, fletes, distribución y operaciones en terreno.",
    inLanguage: "es-CL",
    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },
    about: {
      "@id": `${siteUrl}/optimizacion-rutas#service`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/optimizacion-rutas#service`,
    name: "Optimización de rutas",
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
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

export default function OptimizacionRutasPage() {
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
            <p className="eyebrow">Optimización de rutas en Chile</p>

            <h1>Optimización de rutas para empresas con reparto y flotas.</h1>

            <p>
              Navix Labs ayuda a empresas en Chile a ordenar rutas de reparto,
              asignar clientes por chofer, reducir kilómetros recorridos y
              mejorar la planificación diaria de operaciones en terreno.
            </p>

            <div className="homeActions">
              <Button href="/contacto">Solicitar diagnóstico</Button>
              <Button href={whatsappUrl} variant="secondary" external>
                Consultar por WhatsApp
              </Button>
            </div>

            <span className="homeNote">
              Servicio pensado para empresas de reparto, distribución, fletes,
              última milla, técnicos en terreno y operaciones con múltiples
              direcciones diarias.
            </span>
          </div>

          <aside className="homeResultCard">
            <div className="homeResultHeader">
              <span>Resultado buscado</span>
              <strong>Ruta optimizada</strong>
            </div>

            <div className="homeResultRows">
              <div>
                <span>Menos kilómetros</span>
                <strong>↓</strong>
              </div>

              <div>
                <span>Mejor orden</span>
                <strong>✓</strong>
              </div>

              <div className="highlight">
                <span>Más control operativo</span>
                <strong>Excel + mapa</strong>
              </div>
            </div>

            <Button href="/demo" variant="secondary">
              Ver ejemplo
            </Button>
          </aside>
        </div>
      </section>

      <section className="homeProcess">
        <div className="container">
          <div className="homeSectionHeader">
            <p className="eyebrow">Qué significa optimizar rutas</p>
            <h2>No es solo ordenar direcciones en un mapa.</h2>
          </div>

          <div className="homeProcessGrid">
            <article>
              <span>01</span>
              <h3>Asignar clientes por chofer</h3>
              <p>
                Definimos qué clientes conviene visitar con cada vehículo,
                considerando zonas, capacidad, carga y cantidad de entregas.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Ordenar la secuencia de visitas</h3>
              <p>
                Se propone un orden de recorrido para reducir cruces de ruta,
                tiempos muertos y kilómetros innecesarios durante la jornada.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Medir el resultado</h3>
              <p>
                Entregamos métricas simples como kilómetros totales, tiempo
                estimado, entregas por chofer y comparación antes/después.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="homeProcess">
        <div className="container">
          <div className="homeSectionHeader">
            <p className="eyebrow">Problemas que resuelve</p>
            <h2>Cuando las rutas se planifican manualmente, aparecen costos ocultos.</h2>
          </div>

          <div className="homeProcessGrid">
            <article>
              <span>01</span>
              <h3>Kilómetros innecesarios</h3>
              <p>
                Choferes que se cruzan, rutas que vuelven a la misma zona y
                recorridos que podrían agruparse mejor.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Desorden en la jornada</h3>
              <p>
                Direcciones repartidas sin criterio operativo, entregas
                atrasadas y poca claridad sobre qué debe hacer cada chofer.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Poca visibilidad del ahorro</h3>
              <p>
                Muchas empresas saben que podrían mejorar, pero no tienen una
                comparación clara entre la ruta actual y una ruta optimizada.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="homeProcess">
        <div className="container">
          <div className="homeSectionHeader">
            <p className="eyebrow">Qué datos usamos</p>
            <h2>Mientras mejor sea la información, más realista será la ruta.</h2>
          </div>

          <div className="homeProcessGrid">
            <article>
              <span>01</span>
              <h3>Direcciones y clientes</h3>
              <p>
                Lista de puntos de entrega, visitas, clientes o destinos que
                deben ser considerados en la jornada.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Vehículos y choferes</h3>
              <p>
                Cantidad de vehículos disponibles, capacidad, horarios de flota
                y restricciones básicas de operación.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Horarios y restricciones</h3>
              <p>
                Ventanas horarias, tiempos de servicio, prioridades, zonas de
                reparto y condiciones especiales de cada operación.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="homeProcess">
        <div className="container">
          <div className="homeSectionHeader">
            <p className="eyebrow">Entregables</p>
            <h2>Recibes una salida práctica para operar, no solo teoría.</h2>
          </div>

          <div className="homeProcessGrid">
            <article>
              <span>01</span>
              <h3>Excel operativo</h3>
              <p>
                Archivo con cliente, dirección, chofer asignado, orden de visita
                y datos útiles para ejecutar la ruta.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Mapa de rutas</h3>
              <p>
                Visualización de recorridos para revisar zonas, cruces,
                distribución territorial y coherencia operativa.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Reporte de métricas</h3>
              <p>
                Comparación de kilómetros, tiempos, entregas, utilización de
                flota y ahorro estimado.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="homeProcess">
        <div className="container">
          <div className="homeSectionHeader">
            <p className="eyebrow">Preguntas frecuentes</p>
            <h2>Preguntas sobre optimización de rutas.</h2>
          </div>

          <div className="homeProcessGrid">
            {faqs.map((item, index) => (
              <article key={item.question}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="homeCtaSection">
        <div className="container">
          <div className="homeCta">
            <div>
              <p className="eyebrow">Siguiente paso</p>
              <h2>Evalúa si tus rutas actuales pueden mejorar.</h2>
              <p>
                Puedes comenzar con una planilla simple de direcciones,
                vehículos y horarios. Con eso revisamos si existe oportunidad de
                reducir kilómetros, ordenar choferes y mejorar la operación.
              </p>
            </div>

            <div className="homeActions">
              <Button href="/contacto">Solicitar diagnóstico</Button>
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
