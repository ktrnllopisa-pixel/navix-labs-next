import ProcessStep from "@/components/ProcessStep";
import Button from "@/components/Button";

const steps = [
  {
    number: "01",
    title: "Recepción de información",
    text: "El cliente entrega direcciones, cantidad de entregas, horarios, vehículos disponibles y condiciones relevantes.",
  },
  {
    number: "02",
    title: "Validación de datos",
    text: "Se revisa que las direcciones sean utilizables, se ordenan zonas y se preparan los datos para el análisis.",
  },
  {
    number: "03",
    title: "Modelamiento de operación",
    text: "Se construye un escenario operativo con restricciones de capacidad, ventanas horarias, cantidad de choferes y tiempos estimados.",
  },
  {
    number: "04",
    title: "Optimización de rutas",
    text: "Se calculan rutas eficientes, secuencias de visitas y asignación de entregas por vehículo o chofer.",
  },
  {
    number: "05",
    title: "Comparación antes/después",
    text: "Se comparan kilómetros, tiempos, número de entregas y utilización de flota para estimar mejoras operativas.",
  },
  {
    number: "06",
    title: "Entrega de resultados",
    text: "El cliente recibe rutas, mapa, planilla y resumen ejecutivo con información clara para aplicar en su operación.",
  },
];

export const metadata = {
  title: "Metodología | Navix Labs",
  description:
    "Metodología de trabajo para transformar direcciones, vehículos y entregas en rutas optimizadas y métricas logísticas.",
};

export default function MetodologiaPage() {
  return (
    <main>
      <section className="pageHero">
        <div className="container">
          <p className="eyebrow">Metodología</p>
          <h1>De una planilla de direcciones a una operación logística medible.</h1>
          <p>
            Nuestro enfoque permite partir con información simple y transformarla
            en rutas, reportes y decisiones operativas concretas.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="processList">
            {steps.map((step) => (
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
            <p className="eyebrow">Inicio rápido</p>
            <h2>Para comenzar no necesitas un sistema complejo.</h2>
            <p>
              Basta con una planilla de direcciones, cantidad de vehículos y una
              descripción simple de cómo funciona actualmente tu operación.
            </p>

            <div className="heroActions">
              <Button href="/contacto">Enviar información inicial</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
