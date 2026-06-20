export const metadata = {
  title: "Soluciones para reparto, flotas y logística urbana en Chile",
  description:
    "Soluciones de optimización de rutas para distribuidoras, empresas de reparto, fletes, técnicos en terreno y operaciones con múltiples direcciones en Chile.",
  alternates: {
    canonical: "/soluciones",
  },
};

import Button from "@/components/Button";
import { industries } from "@/data/industries";

export const metadata = {
  title: "Soluciones | Navix Labs",
  description:
    "Soluciones de optimización logística para distribuidoras, reparto, fletes, servicios técnicos y operaciones B2B.",
};

export default function SolucionesPage() {
  return (
    <main>
      <section className="pageHero">
        <div className="container">
          <p className="eyebrow">Soluciones</p>
          <h1>Optimización para distintas industrias con rutas, entregas y visitas diarias.</h1>
          <p>
            La tecnología de Navix Labs puede adaptarse a empresas pequeñas y
            medianas que necesitan mejorar su operación sin implementar un
            sistema complejo desde cero.
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
              repetidos y mejor control de tiempos.
            </p>
          </article>

          <article className="card">
            <h3>Servicios técnicos</h3>
            <p>
              Planificación de visitas en terreno considerando ubicación,
              disponibilidad y carga diaria.
            </p>
          </article>

          <article className="card">
            <h3>Distribución local</h3>
            <p>
              Asignación de pedidos por vehículo o chofer para disminuir
              kilómetros y mejorar productividad.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card">
            <p className="eyebrow">Aplicación</p>
            <h2>Si tu empresa tiene direcciones, vehículos y horarios, se puede optimizar.</h2>
            <p>
              No necesitas partir con un software complejo. Podemos comenzar con
              una planilla de direcciones y transformarla en rutas, métricas y
              decisiones claras.
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
