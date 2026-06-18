import DashboardMockup from "@/components/DashboardMockup";
import MetricCard from "@/components/MetricCard";
import { metrics } from "@/data/metrics";

export const metadata = {
  title: "Dashboard | Navix Labs",
  description:
    "Vista dashboard de métricas logísticas, rutas optimizadas, flota y ahorro operativo.",
};

export default function DashboardPage() {
  return (
    <main>
      <section className="pageHero">
        <div className="container">
          <p className="eyebrow">Dashboard demo</p>
          <h1>Panel operativo para visualizar rutas, flota y métricas de ahorro.</h1>
          <p>
            Esta vista representa el tipo de panel que Navix Labs puede
            desarrollar para convertir rutas y direcciones en información útil
            para la toma de decisiones.
          </p>
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
        <div className="container grid gridThree">
          <article className="card">
            <h3>Rutas por chofer</h3>
            <p>
              Visualización de entregas asignadas, kilómetros estimados y tiempo
              total por vehículo.
            </p>
          </article>

          <article className="card">
            <h3>Indicadores ejecutivos</h3>
            <p>
              Métricas de ahorro, utilización de flota, entregas realizadas y
              comparación contra operación base.
            </p>
          </article>

          <article className="card">
            <h3>Escalabilidad</h3>
            <p>
              La vista puede evolucionar hacia un portal privado con datos de
              clientes, histórico de rutas y reportes descargables.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
