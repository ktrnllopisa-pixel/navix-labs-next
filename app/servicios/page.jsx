import ServiceCard from "@/components/ServiceCard";
import Button from "@/components/Button";
import { services } from "@/data/services";

export const metadata = {
  title: "Servicios | Navix Labs",
  description:
    "Servicios de optimización de rutas, planificación de flotas, reportes ejecutivos y automatización logística.",
};

export default function ServiciosPage() {
  return (
    <main>
      <section className="pageHero">
        <div className="container">
          <p className="eyebrow">Servicios</p>
          <h1>Soluciones logísticas diseñadas para empresas con operación en terreno.</h1>
          <p>
            Navix Labs ayuda a ordenar rutas, reducir kilómetros, equilibrar
            flotas y convertir operaciones manuales en procesos medibles.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gridTwo">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                points={service.points}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card">
            <p className="eyebrow">Entrega</p>
            <h2>Qué recibe el cliente</h2>
            <p>
              Cada proyecto puede incluir archivo Excel con rutas, mapa
              interactivo, asignación por chofer, métricas de kilómetros,
              tiempos estimados, número de entregas y comparación antes/después.
            </p>

            <div className="heroActions">
              <Button href="/demo">Ver demo</Button>
              <Button href="/contacto" variant="secondary">
                Solicitar evaluación
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
