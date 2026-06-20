export const metadata = {
  title: "Casos de optimización de rutas, ahorro y flotas en Chile",
  description:
    "Ejemplos de optimización de rutas para empresas chilenas con comparación antes y después: kilómetros, tiempos, choferes, entregas, utilización de flota y ahorro estimado.",
  alternates: {
    canonical: "/casos",
  },
};

import Button from "@/components/Button";

const cases = [
  {
    title: "Distribuidora local",
    meta: "Escenario de referencia",
    text: "Empresa con múltiples entregas diarias en ciudad. El objetivo es reducir kilómetros recorridos y ordenar rutas por zona.",
  },
  {
    title: "Servicio técnico en terreno",
    meta: "Escenario de referencia",
    text: "Equipo de técnicos con visitas programadas. El objetivo es asignar rutas por ubicación y reducir tiempos muertos.",
  },
  {
    title: "Reparto urbano B2B",
    meta: "Escenario de referencia",
    text: "Operación con clientes comerciales, ventanas horarias y distintos volúmenes de entrega.",
  },
];

export const metadata = {
  title: "Casos de uso | Navix Labs",
  description:
    "Casos de uso y escenarios de referencia para optimización logística, distribución local y servicios en terreno.",
};

export default function CasosPage() {
  return (
    <main>
      <section className="pageHero">
        <div className="container">
          <p className="eyebrow">Casos de uso</p>
          <h1>Escenarios donde la optimización logística genera impacto directo.</h1>
          <p>
            Estos casos muestran aplicaciones posibles de Navix Labs. No se
            presentan como clientes reales, sino como escenarios de referencia
            para explicar el tipo de operación que puede optimizarse.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid gridThree">
          {cases.map((item) => (
            <article className="caseCard" key={item.title}>
              <span className="caseMeta">{item.meta}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card">
            <p className="eyebrow">Proyecto piloto</p>
            <h2>Podemos construir un caso real con datos de tu empresa.</h2>
            <p>
              Una prueba inicial permite comparar la operación actual contra una
              propuesta optimizada usando tus propias direcciones y vehículos.
            </p>

            <div className="heroActions">
              <Button href="/contacto">Solicitar piloto</Button>
              <Button href="/demo" variant="secondary">
                Ver demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
