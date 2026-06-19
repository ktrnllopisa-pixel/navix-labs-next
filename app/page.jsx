import Button from "@/components/Button";
import MetricCard from "@/components/MetricCard";
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
              Rutas más cortas, ordenadas y fáciles de operar.
            </h1>

            <p className="lead">
              Navix Labs convierte listas de direcciones en rutas por chofer,
              Excel operativo y métricas simples para reducir kilómetros,
              tiempo y desorden en repartos.
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
                <strong>Excel</strong>
                <span>rutas listas para operar</span>
              </div>

              <div className="statPill">
                <strong>-31%</strong>
                <span>escenario referencial</span>
              </div>
            </div>
          </div>

          <aside className="heroProofCard">
            <div className="proofHeader">
              <span>Ejemplo de mejora</span>
              <strong>Ruta diaria optimizada</strong>
            </div>

            <div className="proofComparison">
              <div>
                <span>Antes</span>
                <strong>142 km</strong>
              </div>

              <div>
                <span>Después</span>
                <strong>97 km</strong>
              </div>
            </div>

            <div className="proofSavings">
              <span>Ahorro estimado</span>
              <strong>-45 km</strong>
              <p>
                Menos distancia recorrida al ordenar entregas y asignaciones por
                chofer.
              </p>
            </div>

            <div className="proofDeliverables">
              <span>Entrega al cliente</span>
              <ul>
                <li>Rutas por chofer</li>
                <li>Excel operativo</li>
                <li>Comparación antes/después</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="section sectionCompact">
        <div className="container">
          <div className="sectionHeader">
            <p className="eyebrow">Qué hacemos</p>
            <h2>Una mejora concreta para empresas que trabajan con rutas.</h2>
            <p>
              Pensado para reparto local, técnicos en terreno, distribución y
              operaciones con múltiples direcciones diarias.
            </p>
          </div>

          <div className="grid gridThree">
            <article className="card">
              <h3>Recibimos tus datos</h3>
              <p>
                Puedes partir con una planilla de direcciones, lista de clientes
                o rutas actuales.
              </p>
            </article>

            <article className="card">
              <h3>Ordenamos la operación</h3>
              <p>
                Revisamos vehículos, entregas, zonas y recorridos para proponer
                una ruta más eficiente.
              </p>
            </article>

            <article className="card">
              <h3>Entregamos resultado útil</h3>
              <p>
                Rutas por chofer, Excel operativo, resumen de métricas y
                comparación simple.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section sectionCompact">
        <div className="container">
          <div className="sectionHeader">
            <p className="eyebrow">Impacto</p>
            <h2>Indicadores simples para entender la mejora.</h2>
            <p>
              El ejemplo completo está en la sección “Ejemplo”. En el inicio
              solo mostramos los números principales.
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

      <section className="section sectionCompact">
        <div className="container">
          <div className="card ctaCard">
            <p className="eyebrow">Siguiente paso</p>
            <h2>Envíanos tus datos y evaluamos si tus rutas pueden mejorar.</h2>
            <p>
              Para comenzar necesitamos ciudad, cantidad de vehículos, entregas
              aproximadas y principal problema actual.
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
