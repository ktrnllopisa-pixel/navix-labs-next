import Button from "@/components/Button";
import MetricCard from "@/components/MetricCard";
import ResultsPreview from "@/components/ResultsPreview";
import { metrics } from "@/data/metrics";

const whatsappMessage = encodeURIComponent(
  `Hola Navix Labs, quiero optimizar rutas para mi empresa.

Nombre:
Empresa:
Ciudad:
Cantidad de vehículos:
Cantidad aprox. de entregas diarias:
Rubro:
¿Tengo direcciones en Excel?: Sí / No
Principal problema actual:`
);

const whatsappUrl = `https://wa.me/56973860127?text=${whatsappMessage}`;

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
              Transformamos una lista de direcciones en rutas ordenadas por
              chofer, resumen operativo, Excel claro y métricas simples para
              tomar decisiones.
            </p>

            <div className="heroActions">
              <Button href="/contacto">Solicitar diagnóstico</Button>
              <Button href={whatsappUrl} variant="secondary" external>
                Escribir por WhatsApp
              </Button>
            </div>

            <div className="heroStats">
              <div className="statPill">
                <strong>48h</strong>
                <span>evaluación inicial</span>
              </div>

              <div className="statPill">
                <strong>Excel + resumen</strong>
                <span>entrega clara</span>
              </div>

              <div className="statPill">
                <strong>-31%</strong>
                <span>escenario de referencia</span>
              </div>
            </div>
          </div>

          <ResultsPreview />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHeader">
            <p className="eyebrow">Qué hacemos</p>
            <h2>Una mejora concreta para empresas que trabajan con rutas.</h2>
            <p>
              Navix Labs está pensado para operaciones reales: reparto local,
              técnicos en terreno, distribución y múltiples visitas diarias.
            </p>
          </div>

          <div className="grid gridThree">
            <article className="card">
              <h3>Recibimos tus datos</h3>
              <p>
                Puedes partir con una planilla de direcciones, lista de clientes
                o descripción simple de tu operación.
              </p>
            </article>

            <article className="card">
              <h3>Calculamos una mejor ruta</h3>
              <p>
                Ordenamos visitas y asignaciones para reducir vueltas, cruces de
                zona y kilómetros innecesarios.
              </p>
            </article>

            <article className="card">
              <h3>Entregamos resultado útil</h3>
              <p>
                Recibes un resultado claro para operar: resumen, asignación,
                tabla de trabajo y comparación.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHeader">
            <p className="eyebrow">Ejemplo rápido</p>
            <h2>Indicadores simples que muestran el impacto.</h2>
            <p>
              El detalle completo está en la sección Ejemplo. Aquí solo dejamos
              los números más importantes.
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
          <div className="card">
            <p className="eyebrow">Siguiente paso</p>
            <h2>Envíanos tus datos y evaluamos si tus rutas pueden mejorar.</h2>
            <p>
              Para comenzar necesitamos ciudad, cantidad de vehículos,
              entregas aproximadas y principal problema actual.
            </p>

            <div className="heroActions">
              <Button href="/contacto">Completar formulario</Button>
              <Button href="/demo" variant="secondary">
                Ver ejemplo completo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
