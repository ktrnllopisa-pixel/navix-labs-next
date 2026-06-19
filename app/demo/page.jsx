import Button from "@/components/Button";

const whatsappMessage = encodeURIComponent(
  `Hola Navix Labs, quiero revisar un ejemplo de optimización para mi empresa.

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

const constraints = [
  {
    title: "Ventanas horarias",
    text: "Clientes con horarios de recepción distintos, prioridades y entregas que no pueden quedar al final.",
  },
  {
    title: "Flota disponible",
    text: "Asignación según cantidad de vehículos, capacidad, jornada estimada y equilibrio de carga entre choferes.",
  },
  {
    title: "Carga y servicio",
    text: "Consideración de demanda, tiempo de descarga o atención y cantidad de paradas por ruta.",
  },
  {
    title: "Zona geográfica",
    text: "Agrupación por sectores para evitar cruces innecesarios, vueltas largas y recorridos duplicados.",
  },
];

const routePlan = [
  {
    route: "Ruta Norte / Industrial",
    vehicle: "Vehículo 1",
    deliveries: "7",
    load: "420 kg",
    window: "09:00–13:00",
    km: "28 km",
    time: "4 h 35 min",
  },
  {
    route: "Ruta Centro / Comercial",
    vehicle: "Vehículo 2",
    deliveries: "6",
    load: "310 kg",
    window: "09:30–13:30",
    km: "24 km",
    time: "4 h 10 min",
  },
  {
    route: "Ruta Sur / Residencial",
    vehicle: "Vehículo 3",
    deliveries: "5",
    load: "270 kg",
    window: "10:00–14:00",
    km: "21 km",
    time: "3 h 55 min",
  },
  {
    route: "Ruta Mixta / Prioridad",
    vehicle: "Vehículo 4",
    deliveries: "4",
    load: "380 kg",
    window: "08:30–12:30",
    km: "24 km",
    time: "4 h 48 min",
  },
];

const metrics = [
  {
    value: "142 km",
    label: "escenario manual",
    detail: "Recorrido estimado con planificación inicial sin optimización.",
  },
  {
    value: "97 km",
    label: "escenario optimizado",
    detail: "Distancia estimada después de ordenar zonas, horarios y carga.",
  },
  {
    value: "-45 km",
    label: "menos recorrido",
    detail: "Kilómetros evitados en la jornada de referencia.",
  },
  {
    value: "-31%",
    label: "reducción estimada",
    detail: "Mejora referencial frente al escenario manual.",
  },
];

export const metadata = {
  title: "Ejemplo | Navix Labs",
  description:
    "Ejemplo de optimización de rutas considerando horarios, flota, carga, zonas geográficas y métricas operativas.",
};

export default function DemoPage() {
  return (
    <main className="demoPage">
      <section className="demoHero">
        <div className="container demoHeroGrid">
          <div className="demoHeroText">
            <p className="eyebrow">Ejemplo antes/después</p>

            <h1>Una optimización realista no ordena solo direcciones.</h1>

            <p>
              En una operación de reparto, la ruta depende de horarios,
              vehículos disponibles, carga, zonas, prioridades y tiempos de
              atención. Este ejemplo muestra cómo se puede transformar una
              jornada manual en una planificación más clara y medible.
            </p>

            <div className="heroActions">
              <Button href="/contacto">Solicitar diagnóstico</Button>
              <Button href={whatsappUrl} variant="secondary" external>
                Consultar por WhatsApp
              </Button>
            </div>
          </div>

          <aside className="demoScenarioCard">
            <span>Escenario base</span>
            <h2>Operación diaria con múltiples restricciones</h2>

            <div className="scenarioStats">
              <div>
                <strong>22</strong>
                <small>entregas</small>
              </div>

              <div>
                <strong>4</strong>
                <small>vehículos</small>
              </div>

              <div>
                <strong>4</strong>
                <small>zonas</small>
              </div>

              <div>
                <strong>1 día</strong>
                <small>jornada</small>
              </div>
            </div>

            <p>
              El objetivo no es solo acortar la ruta, sino equilibrar la carga
              de trabajo, respetar ventanas horarias y evitar recorridos
              innecesarios.
            </p>
          </aside>
        </div>
      </section>

      <section className="demoSection">
        <div className="container">
          <div className="demoCompareGrid">
            <article className="demoCompareCard">
              <p className="eyebrow">Antes</p>
              <h2>Planificación manual</h2>

              <strong>142 km</strong>

              <p>
                Rutas armadas por costumbre, urgencia o experiencia del chofer,
                con mayor riesgo de cruces entre zonas y carga desigual.
              </p>

              <ul>
                <li>Mayor distancia recorrida</li>
                <li>Menor visibilidad de la jornada</li>
                <li>Asignación menos equilibrada</li>
              </ul>
            </article>

            <article className="demoCompareCard after">
              <p className="eyebrow">Después</p>
              <h2>Ruta optimizada</h2>

              <strong>97 km</strong>

              <p>
                Rutas reorganizadas considerando zonas, horarios, carga por
                vehículo y duración estimada de la jornada.
              </p>

              <ul>
                <li>Menos kilómetros innecesarios</li>
                <li>Mejor distribución por chofer</li>
                <li>Salida operativa lista para usar</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="demoSection demoTightSection">
        <div className="container">
          <div className="demoSectionHeader">
            <p className="eyebrow">Qué considera el modelo</p>
            <h2>Restricciones que hacen que la ruta sea realmente operativa.</h2>
            <p>
              Una optimización útil no solo minimiza distancia. También debe
              ajustarse a cómo trabaja la empresa en terreno.
            </p>
          </div>

          <div className="demoLogicGrid">
            {constraints.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="demoSection">
        <div className="container">
          <div className="routePlanBlock">
            <div className="routePlanHeader">
              <div>
                <p className="eyebrow">Plan operativo</p>
                <h2>Asignación sugerida por vehículo.</h2>
              </div>

              <p>
                Este formato permite que el encargado vea rápidamente qué ruta
                hace cada vehículo, cuántas entregas lleva, qué carga mueve y
                cuánto dura la jornada estimada.
              </p>
            </div>

            <div className="routePlanTable">
              <div className="routePlanHead">
                <span>Ruta</span>
                <span>Vehículo</span>
                <span>Entregas</span>
                <span>Carga</span>
                <span>Ventana</span>
                <span>Km</span>
                <span>Jornada</span>
              </div>

              {routePlan.map((row) => (
                <div className="routePlanRow" key={row.route}>
                  <span>{row.route}</span>
                  <span>{row.vehicle}</span>
                  <span>{row.deliveries}</span>
                  <span>{row.load}</span>
                  <span>{row.window}</span>
                  <span>{row.km}</span>
                  <span>{row.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="demoSection demoTightSection">
        <div className="container">
          <div className="demoMetricsGrid">
            {metrics.map((metric) => (
              <article key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
                <p>{metric.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="demoSection demoTightSection">
        <div className="container">
          <div className="demoFuelBand">
            <div>
              <p className="eyebrow">Impacto operativo</p>
              <h2>Menos kilómetros significa menos presión sobre el costo diario.</h2>
            </div>

            <div className="fuelImpactNumbers">
              <div>
                <strong>-45 km</strong>
                <span>menos por jornada</span>
              </div>

              <div>
                <strong>-990 km</strong>
                <span>potencial mensual si se repite 22 días</span>
              </div>
            </div>

            <p>
              Esta proyección es referencial. El resultado real depende de tus
              direcciones, horarios, restricciones, vehículos y forma actual de
              operar.
            </p>
          </div>
        </div>
      </section>

      <section className="demoSection">
        <div className="container">
          <div className="demoCta">
            <div>
              <p className="eyebrow">Siguiente paso</p>
              <h2>Podemos armar un ejemplo con tus propias direcciones.</h2>
              <p>
                Si tienes una planilla de clientes, direcciones o rutas
                actuales, podemos revisar qué se puede mejorar en una primera
                evaluación.
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
