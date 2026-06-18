import Button from "@/components/Button";
import DashboardMockup from "@/components/DashboardMockup";
import MetricCard from "@/components/MetricCard";
import ProcessStep from "@/components/ProcessStep";
import ServiceCard from "@/components/ServiceCard";
import { metrics } from "@/data/metrics";
import { services } from "@/data/services";
import { industries } from "@/data/industries";

const process = [
  {
    number: "01",
    title: "Levantamiento operativo",
    text: "Revisamos direcciones, zonas, cantidad de entregas, horarios, vehículos y restricciones reales de la operación.",
  },
  {
    number: "02",
    title: "Limpieza y preparación de datos",
    text: "Ordenamos la información para convertir direcciones dispersas en datos útiles para análisis logístico.",
  },
  {
    number: "03",
    title: "Optimización y simulación",
    text: "Calculamos rutas eficientes, asignación por chofer y comparación entre el escenario actual y el escenario optimizado.",
  },
  {
    number: "04",
    title: "Entrega ejecutiva",
    text: "Entregamos mapa, rutas, Excel y métricas claras para que la empresa pueda tomar decisiones sin depender de lenguaje técnico.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container heroGrid">
          <div>
            <p className="eyebrow">Optimización logística para operaciones reales</p>

            <h1 className="displayTitle">
              Tecnología para ordenar rutas, flotas y entregas con{" "}
              <span>criterio empresarial.</span>
            </h1>

            <p className="lead">
              Navix Labs desarrolla soluciones de optimización de rutas,
              planificación logística y reportes operativos para empresas que
              trabajan con reparto, visitas en terreno o múltiples direcciones
              diarias.
            </p>

            <div className="heroActions">
              <Button href="/demo">Ver demo operativa</Button>
              <Button href="/servicios" variant="secondary">
                Explorar servicios
              </Button>
            </div>

            <div className="heroStats">
              <div className="statPill">
                <strong>142 km</strong>
                <span>operación inicial</span>
              </div>

              <div className="statPill">
                <strong>97 km</strong>
                <span>ruta optimizada</span>
              </div>

              <div className="statPill">
                <strong>-31%</strong>
                <span>ahorro estimado</span>
              </div>
            </div>
          </div>

          <DashboardMockup />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHeader">
            <p className="eyebrow">Problema</p>
            <h2>Muchas empresas reparten todos los días, pero pocas miden realmente su operación.</h2>
            <p>
              Cuando las rutas se arman manualmente, es común perder tiempo,
              recorrer kilómetros innecesarios, sobrecargar choferes y no tener
              claridad sobre el costo real de cada jornada.
            </p>
          </div>

          <div className="grid gridThree">
            <article className="card">
              <h3>Rutas improvisadas</h3>
              <p>
                Las entregas se ordenan por costumbre, intuición o urgencia,
                sin comparar alternativas.
              </p>
            </article>

            <article className="card">
              <h3>Flota poco balanceada</h3>
              <p>
                Algunos choferes quedan sobrecargados mientras otros tienen
                recorridos más livianos o menos eficientes.
              </p>
            </article>

            <article className="card">
              <h3>Decisiones sin datos</h3>
              <p>
                Sin métricas claras, es difícil saber cuánto se ahorra, cuánto
                se pierde o dónde mejorar.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHeader">
            <p className="eyebrow">Métricas</p>
            <h2>Resultados expresados en números simples para tomar decisiones.</h2>
            <p>
              No entregamos solo mapas. Transformamos la operación en métricas
              entendibles para dueños, administradores y equipos de terreno.
            </p>
          </div>

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
          <div className="sectionHeader">
            <p className="eyebrow">Servicios</p>
            <h2>Soluciones concretas para operaciones con rutas, flotas y entregas.</h2>
            <p>
              Navix Labs está diseñado para empresas que necesitan ordenar su
              operación sin implementar sistemas complejos desde el primer día.
            </p>
          </div>

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
          <div className="sectionHeader">
            <p className="eyebrow">Industrias</p>
            <h2>Aplicable a empresas que trabajan todos los días en terreno.</h2>
          </div>

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
        <div className="container">
          <div className="sectionHeader">
            <p className="eyebrow">Metodología</p>
            <h2>Un proceso claro, medible y orientado a resultados.</h2>
          </div>

          <div className="processList">
            {process.map((step) => (
              <ProcessStep
                key={step.number}
                number={step.number}
                title={step.title}
                text={step.text}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card">
            <p className="eyebrow">Diagnóstico</p>
            <h2>Convierte una operación desordenada en una operación medible.</h2>
            <p>
              Si tu empresa trabaja con repartos, visitas o rutas diarias,
              podemos preparar una evaluación inicial con datos simples:
              direcciones, vehículos, horarios y cantidad de entregas.
            </p>

            <div className="heroActions">
              <Button href="/contacto">Solicitar diagnóstico</Button>
              <Button href="/dashboard" variant="secondary">
                Ver vista dashboard
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
