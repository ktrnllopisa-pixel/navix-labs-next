import Button from "@/components/Button";
import MetricCard from "@/components/MetricCard";
import ResultsPreview from "@/components/ResultsPreview";
import { metrics } from "@/data/metrics";

export const metadata = {
  title: "Ejemplo | Navix Labs",
  description:
    "Ejemplo de optimización de rutas con comparación antes/después y entrega operativa.",
};

export default function DemoPage() {
  return (
    <main>
      <section className="pageHero">
        <div className="container">
          <p className="eyebrow">Ejemplo antes/después</p>
          <h1>Una forma simple de visualizar la mejora de una ruta.</h1>
          <p>
            Esta sección muestra un escenario de referencia para entender cómo
            se comparan una jornada manual y una jornada optimizada.
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
              Más recorrido, menos claridad sobre la carga de trabajo y menor
              control operativo.
            </p>
          </div>

          <div className="compareBox after">
            <p className="eyebrow">Después</p>
            <h3>Ruta optimizada</h3>
            <strong>97 km</strong>
            <p>
              Visitas mejor ordenadas, mejor distribución por chofer y menos
              kilómetros recorridos.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ResultsPreview />
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
            <p className="eyebrow">Importante</p>
            <h2>El ejemplo es referencial.</h2>
            <p>
              El resultado real depende de tus direcciones, horarios,
              restricciones, vehículos y forma actual de operación.
            </p>

            <div className="heroActions">
              <Button href="/contacto">Solicitar diagnóstico</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
