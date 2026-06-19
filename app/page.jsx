import Button from "@/components/Button";
import DashboardMockup from "@/components/DashboardMockup";
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
              Reduce kilómetros, tiempo y desorden en tus{" "}
              <span>rutas de reparto.</span>
            </h1>

            <p className="lead">
              En Navix Labs transformamos una lista de direcciones en rutas
              ordenadas por chofer, mapa interactivo, Excel operativo y métricas
              simples para decidir mejor.
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
                <strong>Excel + mapa</strong>
                <span>entrega operativa</span>
              </div>

              <div className="statPill">
                <strong>-45 km</strong>
                <span>ahorro en escenario demo</span>
              </div>
            </div>
          </div>

          <DashboardMockup />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHeader">
            <p className="eyebrow">Qué hacemos</p>
            <h2>Ordenamos rutas para empresas que reparten o visitan múltiples direcciones.</h2>
            <p>
              El objetivo es simple: menos vueltas, menos kilómetros, mejor uso
              de la flota y una operación más clara para el dueño o encargado.
            </p>
          </div>

          <div className="grid gridThree">
            <article className="card">
              <h3>Recibimos tus direcciones</h3>
              <p>
                Puedes partir con una planilla, lista de clientes o rutas que ya
                usan tus choferes.
              </p>
            </article>

            <article className="card">
              <h3>Calculamos rutas más eficientes</h3>
              <p>
                Ordenamos visitas y asignaciones para reducir kilómetros,
                cruces de zona y tiempos muertos.
              </p>
            </article>

            <article className="card">
              <h3>Entregamos un resultado claro</h3>
              <p>
                Recibes rutas por chofer, mapa, Excel y comparación
                antes/después.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHeader">
            <p className="eyebrow">Ejemplo rápido</p>
            <h2>Una muestra simple de lo que se puede medir.</h2>
            <p>
              El detalle completo está en la sección Ejemplo. En el inicio solo
              mostramos los indicadores principales.
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

          <div className="heroActions">
            <Button href="/demo">Ver ejemplo completo</Button>
            <Button href="/dashboard" variant="secondary">
              Ver reporte demo
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card">
            <p className="eyebrow">Siguiente paso</p>
            <h2>Envíanos tus datos y vemos si tus rutas pueden mejorar.</h2>
            <p>
              Para comenzar necesitamos ciudad, cantidad de vehículos, cantidad
              aproximada de entregas y si tienes direcciones en Excel.
            </p>

            <div className="heroActions">
              <Button href="/contacto">Completar formulario</Button>
              <Button href={whatsappUrl} variant="secondary" external>
                Escribir por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
