import Button from "@/components/Button";
import DashboardMockup from "@/components/DashboardMockup";
import MetricCard from "@/components/MetricCard";
import { metrics } from "@/data/metrics";

export const metadata = {
  title: "Demo | Navix Labs",
  description:
    "Demo visual de optimización logística con comparación antes/después, rutas y métricas operativas.",
};

export default function DemoPage() {
  return (
    <main>
      <section className="pageHero">
        <div className="container">
          <p className="eyebrow">Demo operativa</p>
          <h1>Una vista clara de cómo se transforma una operación logística.</h1>
          <p>
            Este escenario muestra cómo Navix Labs puede comparar una operación
            inicial contra una propuesta optimizada, usando métricas simples:
            kilómetros, tiempo, entregas, choferes y ahorro estimado.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container comparison">
          <div className="compareBox">
            <p className="eyebrow">Antes</p>
            <h3>Planificación manual</h3>
            <strong>142 km</strong>
            <p>
              Rutas armadas sin optimización, mayor recorrido, más tiempo en
              terreno y menor visibilidad operativa.
            </p>
          </div>

          <div className="compareBox after">
            <p className="eyebrow">Después</p>
            <h3>Ruta optimizada</h3>
            <strong>97 km</strong>
            <p>
              Rutas ordenadas, mejor asignación de choferes y reducción
              estimada de kilómetros recorridos.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <DashboardMockup />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gridFour">
            {metrics.map((metric) => (
              <MetricCard
                key={metric.label}
                value={metric.value}
                label={metric.label}
                detail={metric.detail}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card">
            <p className="eyebrow">Nota</p>
            <h2>La demo representa un escenario de referencia.</h2>
            <p>
              Los resultados reales dependen de direcciones, tráfico, horarios,
              restricciones, capacidades de vehículos y reglas de cada empresa.
              Navix Labs permite adaptar el análisis a cada operación.
            </p>

            <div className="heroActions">
              <Button href="/contacto">Solicitar demo personalizada</Button>
              <Button href="/dashboard" variant="secondary">
                Ver dashboard
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
