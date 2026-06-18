import Button from "@/components/Button";

export const metadata = {
  title: "Contacto | Navix Labs",
  description:
    "Contacta a Navix Labs para evaluar rutas, entregas, flota y oportunidades de optimización logística.",
};

export default function ContactoPage() {
  return (
    <main>
      <section className="pageHero">
        <div className="container">
          <p className="eyebrow">Contacto</p>
          <h1>Hablemos de tu operación logística.</h1>
          <p>
            Para preparar una evaluación inicial, puedes enviar una descripción
            simple de tu operación: cantidad de entregas, vehículos disponibles,
            zonas de reparto y principales problemas actuales.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contactOptions">
          <article className="contactCard">
            <h3>WhatsApp</h3>
            <p>
              Ideal para una primera conversación rápida sobre tu operación,
              cantidad de rutas y tipo de empresa.
            </p>

            <Button
              href="https://wa.me/569XXXXXXXX?text=Hola%20Navix%20Labs%2C%20quiero%20evaluar%20la%20optimización%20de%20rutas%20para%20mi%20empresa.%0A%0ANombre%3A%0AEmpresa%3A%0ACantidad%20de%20vehículos%3A%0ACantidad%20aprox.%20de%20entregas%3A%0AZona%20de%20operación%3A%0AConsulta%3A"
              external
            >
              Escribir por WhatsApp
            </Button>
          </article>

          <article className="contactCard">
            <h3>Correo</h3>
            <p>
              Recomendado si quieres enviar planillas, direcciones o una
              descripción más detallada de la operación.
            </p>

            <Button
              href="mailto:contacto@navixlabs.cl?subject=Evaluación%20logística%20Navix%20Labs&body=Hola%20Navix%20Labs%2C%0A%0AQuiero%20evaluar%20la%20optimización%20de%20rutas%20para%20mi%20empresa.%0A%0ANombre%3A%0AEmpresa%3A%0ACantidad%20de%20vehículos%3A%0ACantidad%20aprox.%20de%20entregas%3A%0AZona%20de%20operación%3A%0AProblema%20principal%3A%0A"
              variant="secondary"
              external
            >
              Enviar correo
            </Button>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card">
            <p className="eyebrow">Información útil</p>
            <h2>Qué datos ayudan a evaluar tu operación</h2>

            <div className="grid gridThree">
              <article>
                <h3>Direcciones</h3>
                <p>
                  Lista de clientes, puntos de entrega o ubicaciones visitadas
                  durante una jornada.
                </p>
              </article>

              <article>
                <h3>Vehículos</h3>
                <p>
                  Cantidad de choferes, vehículos disponibles, capacidad y zonas
                  habituales de operación.
                </p>
              </article>

              <article>
                <h3>Restricciones</h3>
                <p>
                  Horarios, prioridades, entregas urgentes, zonas complicadas o
                  condiciones especiales.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
