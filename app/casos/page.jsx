import Button from "@/components/Button";

export const metadata = {
  title: "Casos de optimización de rutas, ahorro y flotas en Chile",
  description:
    "Ejemplos de optimización de rutas para empresas chilenas con comparación antes y después: kilómetros, tiempos, choferes, entregas, utilización de flota y ahorro estimado.",
  alternates: {
    canonical: "https://navixlabs.cl/casos",
  },
  openGraph: {
    title: "Casos de optimización de rutas | Navix Labs",
    description:
      "Escenarios de referencia para empresas con reparto, distribución, servicios técnicos, flotas y operaciones en terreno.",
    url: "https://navixlabs.cl/casos",
    siteName: "Navix Labs",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/navix-logo.png.png",
        width: 1200,
        height: 630,
        alt: "Navix Labs - Casos de optimización de rutas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casos de optimización de rutas | Navix Labs",
    description:
      "Ejemplos de uso para optimizar rutas, reducir kilómetros, ordenar choferes y mejorar operaciones de reparto.",
    images: ["/navix-logo.png.png"],
  },
};

const cases = [
  {
    title: "Distribuidora local",
    meta: "Escenario de referencia",
    text: "Empresa con múltiples entregas diarias en ciudad. El objetivo es reducir kilómetros recorridos, ordenar rutas por zona y asignar clientes por chofer.",
  },
  {
    title: "Servicio técnico en terreno",
    meta: "Escenario de referencia",
    text: "Equipo de técnicos con visitas programadas. El objetivo es asignar rutas por ubicación, horarios de atención y reducir tiempos muertos.",
  },
  {
    title: "Reparto urbano B2B",
    meta: "Escenario de referencia",
    text: "Operación con clientes comerciales, ventanas horarias y distintos volúmenes de entrega. El foco es mejorar planificación, flota y cumplimiento.",
  },
];

export default function CasosPage() {
  return (
    <main>
      <section className="pageHero">
        <div className="container">
          <p className="eyebrow">Casos de uso</p>

          <h1>
            Escenarios donde la optimización logística genera impacto directo.
          </h1>

          <p>
            Estos casos muestran aplicaciones posibles de Navix Labs. No se
            presentan como clientes reales, sino como escenarios de referencia
            para explicar el tipo de operación que puede optimizarse en empresas
            con reparto, flotas, distribución o visitas en terreno.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid gridThree">
          {cases.map((item) => (
            <article className="caseCard" key={item.title}>
              <span className="caseMeta">{item.meta}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container grid gridThree">
          <article className="card">
            <h3>Comparación antes y después</h3>
            <p>
              Una optimización permite comparar kilómetros, tiempos estimados,
              entregas por chofer y utilización de flota frente a la operación
              actual.
            </p>
          </article>

          <article className="card">
            <h3>Rutas por chofer</h3>
            <p>
              La operación se ordena asignando clientes o visitas a cada
              vehículo según ubicación, capacidad, horarios y restricciones.
            </p>
          </article>

          <article className="card">
            <h3>Reporte operativo</h3>
            <p>
              El resultado puede entregarse como Excel operativo, mapa de rutas
              y resumen ejecutivo para tomar decisiones con datos simples.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card">
            <p className="eyebrow">Proyecto piloto</p>

            <h2>Podemos construir un caso real con datos de tu empresa.</h2>

            <p>
              Una prueba inicial permite comparar la operación actual contra una
              propuesta optimizada usando tus propias direcciones, vehículos,
              horarios y restricciones reales.
            </p>

            <div className="heroActions">
              <Button href="/contacto">Solicitar piloto</Button>
              <Button href="/demo" variant="secondary">
                Ver demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
