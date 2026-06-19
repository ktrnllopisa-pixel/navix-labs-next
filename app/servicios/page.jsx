import Button from "@/components/Button";
import { services } from "@/data/services";

const whatsappMessage = encodeURIComponent(
  `Hola Navix Labs, quiero consultar por optimización de rutas.

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

export const metadata = {
  title: "Servicios | Navix Labs",
  description:
    "Servicios de optimización de rutas para reducir kilómetros, tiempo operativo y desorden en empresas con reparto o visitas en terreno.",
};

export default function ServiciosPage() {
  return (
    <main className="servicesPage">
      <section className="servicesHero">
        <div className="container servicesHeroGrid">
          <div className="servicesHeroText">
            <p className="eyebrow">Servicios</p>

            <h1>
              Menos kilómetros recorridos. Más control sobre tu operación.
            </h1>

            <p>
              En un contexto donde el combustible pesa más en los costos,
              optimizar rutas deja de ser una mejora opcional: se vuelve una
              forma directa de proteger margen, ordenar equipos y reducir
              recorridos innecesarios.
            </p>

            <div className="heroActions">
              <Button href="/contacto">Solicitar evaluación</Button>
              <Button href={whatsappUrl} variant="secondary" external>
                Consultar por WhatsApp
              </Button>
            </div>
          </div>

          <aside className="fuelCard">
            <span>Presión operativa</span>
            <h2>Cada kilómetro mal recorrido cuesta más.</h2>
            <p>
              Si una ruta cruza zonas, repite trayectos o reparte carga de forma
              desigual, el impacto aparece en combustible, tiempo y desgaste de
              la flota.
            </p>

            <div className="fuelCardMetrics">
              <div>
                <strong>Km</strong>
                <small>recorridos</small>
              </div>

              <div>
                <strong>Tiempo</strong>
                <small>en terreno</small>
              </div>

              <div>
                <strong>Flota</strong>
                <small>mejor utilizada</small>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="servicesSection">
        <div className="container">
          <div className="servicesSectionHeader">
            <p className="eyebrow">Paquetes</p>
            <h2>Empieza simple y escala según tu operación.</h2>
            <p>
              No necesitas partir con un sistema complejo. Puedes comenzar con
              una evaluación puntual y avanzar hacia una planificación
              recurrente si tu operación lo necesita.
            </p>
          </div>

          <div className="servicePackageGrid">
            {services.map((service) => (
              <article
                key={service.title}
                className={
                  service.tag === "Más solicitado"
                    ? "servicePackage featuredPackage"
                    : "servicePackage"
                }
              >
                <span className="packageTag">{service.tag}</span>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="packageBestFor">
                  <strong>Recomendado para</strong>
                  <span>{service.bestFor}</span>
                </div>

                <ul>
                  {service.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="servicesSection servicesTightSection">
        <div className="container">
          <div className="fuelMessageBand">
            <div>
              <p className="eyebrow">Combustible y margen</p>
              <h2>Cuando el costo por litro sube, la ruta importa más.</h2>
            </div>

            <p>
              La optimización no elimina el costo del combustible, pero ayuda a
              reducir kilómetros innecesarios, mejorar la asignación de choferes
              y tomar decisiones con datos en vez de intuición.
            </p>
          </div>
        </div>
      </section>

      <section className="servicesSection servicesTightSection">
        <div className="container">
          <div className="servicesSectionHeader">
            <p className="eyebrow">Entrega</p>
            <h2>Qué recibe el cliente</h2>
          </div>

          <div className="deliverablesGrid">
            <article>
              <span>01</span>
              <h3>Excel operativo</h3>
              <p>
                Archivo ordenado con rutas, chofer asignado, secuencia de
                visitas y datos básicos para ejecutar la jornada.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Mapa de revisión</h3>
              <p>
                Visualización clara para entender zonas, recorridos y posibles
                cruces de ruta.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Comparación simple</h3>
              <p>
                Distancia estimada, tiempo operativo y diferencia entre el
                escenario inicial y el optimizado.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>Resumen ejecutivo</h3>
              <p>
                Explicación corta y útil para dueños, administradores o
                encargados de operación.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="servicesSection">
        <div className="container">
          <div className="servicesCta">
            <div>
              <p className="eyebrow">Siguiente paso</p>
              <h2>Envíanos tus direcciones y vemos qué se puede mejorar.</h2>
              <p>
                Con ciudad, cantidad de vehículos y entregas aproximadas ya
                podemos preparar una primera evaluación de rutas.
              </p>
            </div>

            <div className="heroActions">
              <Button href="/contacto">Solicitar diagnóstico</Button>
              <Button href={whatsappUrl} variant="secondary" external>
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
