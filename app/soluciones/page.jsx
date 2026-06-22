import Button from "@/components/Button";
import { industries } from "@/data/industries";

export const metadata = {
  title: "Soluciones para reparto, flotas y logística urbana en Chile",
  description:
    "Soluciones de optimización de rutas para distribuidoras, empresas de reparto, fletes, servicios técnicos y operaciones con múltiples direcciones en Chile.",
  alternates: {
    canonical: "https://navixlabs.cl/soluciones",
  },
  openGraph: {
    title: "Soluciones para reparto, flotas y logística urbana | Navix Labs",
    description:
      "Optimización de rutas para distribuidoras, reparto, fletes, servicios técnicos y empresas con operaciones en terreno.",
    url: "https://navixlabs.cl/soluciones",
    siteName: "Navix Labs",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/navix-logo.png.png",
        width: 1200,
        height: 630,
        alt: "Navix Labs - Soluciones de optimización logística",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soluciones para reparto y flotas | Navix Labs",
    description:
      "Soluciones de optimización logística para empresas con reparto, distribución, fletes, servicios técnicos y rutas diarias.",
    images: ["/navix-logo.png.png"],
  },
};

export default function SolucionesPage() {
  return (
    <main>
      <section className="pageHero">
        <div className="container">
          <p className="eyebrow">Soluciones</p>

          <h1>
            Optimización para distintas industrias con rutas, entregas y visitas
            diarias.
          </h1>

          <p>
            La tecnología de Navix Labs puede adaptarse a empresas pequeñas y
            medianas en Chile que necesitan mejorar su operación logística sin
            implementar un sistema complejo desde cero.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gridFour">
            {industries.map((industry) => (
              <article className="industryCard" key={industry}>
                {industry}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gridThree">
          <article className="card">
            <h3>Empresas de reparto</h3>
            <p>
              Ordenamiento de entregas por zona, reducción de trayectos
              repetidos y mejor control de tiempos, kilómetros y choferes.
            </p>
          </article>

          <article className="card">
            <h3>Servicios técnicos</h3>
            <p>
              Planificación de visitas en terreno considerando ubicación,
              disponibilidad, horarios de atención y carga diaria.
            </p>
          </article>

          <article className="card">
            <h3>Distribución local</h3>
            <p>
              Asignación de pedidos por vehículo o chofer para disminuir
              kilómetros, mejorar productividad y ordenar rutas de reparto.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container grid gridThree">
          <article className="card">
            <h3>Fletes y flotas</h3>
            <p>
              Rutas más claras para operaciones con múltiples vehículos,
              distintos puntos de entrega y recorridos diarios variables.
            </p>
          </article>

          <article className="card">
            <h3>Última milla</h3>
            <p>
              Organización de entregas urbanas con foco en reducir cruces de
              ruta, tiempos muertos y kilómetros innecesarios.
            </p>
          </article>

          <article className="card">
            <h3>Operaciones B2B</h3>
            <p>
              Planificación para empresas que visitan clientes, entregan insumos
              o coordinan recorridos entre distintas zonas.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card">
            <p className="eyebrow">Aplicación</p>

            <h2>
              Si tu empresa tiene direcciones, vehículos y horarios, se puede
              optimizar.
            </h2>

            <p>
              No necesitas partir con un software complejo. Podemos comenzar con
              una planilla de direcciones y transformarla en rutas por chofer,
              métricas simples, mapa de revisión y decisiones operativas más
              claras.
            </p>

            <div className="heroActions">
              <Button href="/contacto">Evaluar mi operación</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
