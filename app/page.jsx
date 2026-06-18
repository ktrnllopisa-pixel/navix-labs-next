import Button from "@/components/Button";
import DashboardMockup from "@/components/DashboardMockup";
import MetricCard from "@/components/MetricCard";
import ProcessStep from "@/components/ProcessStep";
import ServiceCard from "@/components/ServiceCard";
import { metrics } from "@/data/metrics";
import { services } from "@/data/services";

const process = [
  {
    number: "01",
    title: "Envías tus direcciones",
    text: "Puedes partir con una planilla, lista de clientes, puntos de entrega o rutas actuales usadas por tus choferes.",
  },
  {
    number: "02",
    title: "Ordenamos y analizamos la operación",
    text: "Revisamos zonas, cantidad de vehículos, entregas diarias, tiempos estimados y restricciones básicas.",
  },
  {
    number: "03",
    title: "Calculamos una ruta optimizada",
    text: "Proponemos un orden de visitas más eficiente para reducir kilómetros, tiempos muertos y desorden operativo.",
  },
  {
    number: "04",
    title: "Recibes mapa, Excel y métricas",
    text: "Entregamos una salida clara: rutas por chofer, mapa visual, kilómetros, tiempo estimado y comparación antes/después.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container heroGrid">
          <div>
            <p className="eyebrow">Optimización express de rutas</p>

            <h1 className="displayTitle">
              Reduce kilómetros, tiempo y desorden en tus{" "}
              <span>rutas de reparto.</span>
            </h1>

            <p className="lead">
              Navix Labs ayuda a empresas con entregas, reparto local o visitas
              en terreno a transformar una lista de direcciones en rutas
              ordenadas por chofer, mapa interactivo, Excel operativo y métricas
              claras de ahorro.
            </p>

            <div className="heroActions">
              <Button href="/contacto">Solicitar diagnóstico de rutas</Button>
              <Button href="/demo" variant="secondary">
                Ver ejemplo antes/después
              </Button>
            </div>

            <div className="heroStats">
              <div className="statPill">
                <strong>48h</strong>
                <span>para una evaluación inicial</span>
              </div>

              <div className="statPill">
                <strong>-45 km</strong>
                <span>ahorro en escenario demo</span>
              </div>

              <div className="statPill">
                <strong>Excel + mapa</strong>
                <span>entrega clara para operar</span>
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
            <h2>
              Muchas empresas reparten todos los días, pero siguen armando rutas
              a mano.
            </h2>
            <p>
              Cuando las rutas se ordenan por intuición, costumbre o urgencia,
              se pierden kilómetros, combustible, horas de trabajo y capacidad
              real de la flota.
            </p>
          </div>

          <div className="grid gridThree">
            <article className="card">
              <h3>Choferes sobrecargados</h3>
              <p>
                Algunas rutas quedan demasiado largas mientras otros vehículos
                quedan con menor carga o recorridos poco eficientes.
              </p>
            </article>

            <article className="card">
              <h3>Kilómetros innecesarios</h3>
              <p>
                Visitas mal ordenadas generan vueltas, cruces de zona y más
                gasto en combustible.
              </p>
            </article>

            <article className="card">
              <h3>Poca visibilidad</h3>
              <p>
                Sin métricas, es difícil saber si la operación está mejorando o
                si cada día se está perdiendo dinero.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHeader">
            <p className="eyebrow">Ejemplo antes/después</p>
            <h2>
              La diferencia entre repartir “como siempre” y repartir con rutas
              ordenadas.
            </h2>
            <p>
              Este escenario de referencia muestra cómo una operación puede
              reducir distancia recorrida al reorganizar visitas y asignaciones.
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
            <p className="eyebrow">Qué vendemos</p>
            <h2>Servicios simples para mejorar tus rutas sin complicarte.</h2>
            <p>
              No necesitas implementar un sistema complejo desde el primer día.
              Puedes empezar con tus direcciones actuales y recibir una salida
              operativa clara.
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
            <p className="eyebrow">Qué recibe el cliente</p>
            <h2>Una entrega útil, no un informe difícil de entender.</h2>
            <p>
              La idea es que el dueño, administrador o encargado de operaciones
              pueda usar los resultados sin saber de programación ni modelos
              matemáticos.
            </p>
          </div>

          <div className="grid gridThree">
            <article className="card">
              <h3>Rutas por chofer</h3>
              <p>
                Orden recomendado de visitas para cada vehículo o persona en
                terreno.
              </p>
            </article>

            <article className="card">
              <h3>Mapa interactivo</h3>
              <p>
                Visualización de las rutas para entender zonas, recorridos y
                distribución territorial.
              </p>
            </article>

            <article className="card">
              <h3>Excel operativo</h3>
              <p>
                Archivo claro con direcciones, orden de visita, chofer asignado,
                kilómetros y tiempos estimados.
              </p>
            </article>

            <article className="card">
              <h3>Comparación antes/después</h3>
              <p>
                Métricas simples para mostrar cuánto mejora la operación frente
                al escenario inicial.
              </p>
            </article>

            <article className="card">
              <h3>Ahorro estimado</h3>
              <p>
                Estimación de reducción de distancia, tiempo y combustible según
                los datos disponibles.
              </p>
            </article>

            <article className="card">
              <h3>Resumen ejecutivo</h3>
              <p>
                Explicación corta para tomar decisiones sin entrar en detalles
                técnicos.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHeader">
            <p className="eyebrow">Proceso</p>
            <h2>Cómo funciona el diagnóstico de rutas.</h2>
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
            <p className="eyebrow">Próximo paso</p>
            <h2>Envía tus direcciones y evaluamos si puedes ahorrar kilómetros.</h2>
            <p>
              Para comenzar basta con saber cuántas entregas haces, cuántos
              vehículos tienes, en qué ciudad operas y si cuentas con una
              planilla de direcciones.
            </p>

            <div className="heroActions">
              <Button href="/contacto">Solicitar diagnóstico</Button>
              <Button href="/demo" variant="secondary">
                Ver ejemplo de resultado
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
