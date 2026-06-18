import Button from "@/components/Button";

const whatsappMessage =
  "Hola Navix Labs, quiero optimizar rutas para mi empresa.%0A%0A" +
  "Nombre:%0A" +
  "Empresa:%0A" +
  "Ciudad:%0A" +
  "Cantidad de vehículos:%0A" +
  "Cantidad aprox. de entregas diarias:%0A" +
  "Rubro:%0A" +
  "¿Tengo direcciones en Excel?: Sí / No%0A" +
  "Principal problema actual:%0A";

export const metadata = {
  title: "Contacto | Navix Labs",
  description:
    "Solicita un diagnóstico express de rutas para reducir kilómetros, tiempo y desorden en operaciones de reparto.",
};

export default function ContactoPage() {
  return (
    <main>
      <section className="pageHero">
        <div className="container">
          <p className="eyebrow">Diagnóstico de rutas</p>
          <h1>Envíanos tus datos y evaluamos tu operación de reparto.</h1>
          <p>
            Para preparar una primera evaluación necesitamos información simple:
            ciudad, cantidad de vehículos, cantidad aproximada de entregas y si
            tienes una planilla con direcciones.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contactOptions">
          <article className="contactCard">
            <h3>Solicitar por WhatsApp</h3>
            <p>
              La forma más rápida de iniciar. El mensaje ya incluye una ficha
              básica para que podamos entender tu operación.
            </p>

            <Button
              href={`https://wa.me/56973860127?text=${whatsappMessage}`}
              external
            >
              Enviar datos por WhatsApp
            </Button>
          </article>

          <article className="contactCard">
            <h3>Enviar por correo</h3>
            <p>
              Recomendado si ya tienes planillas, direcciones o información más
              detallada de tus repartos.
            </p>

            <Button
              href="mailto:contacto@navixlabs.cl?subject=Diagnóstico%20de%20rutas%20Navix%20Labs&body=Hola%20Navix%20Labs%2C%0A%0AQuiero%20evaluar%20la%20optimización%20de%20rutas%20para%20mi%20empresa.%0A%0ANombre%3A%0AEmpresa%3A%0ACiudad%3A%0ACantidad%20de%20vehículos%3A%0ACantidad%20aprox.%20de%20entregas%20diarias%3A%0ARubro%3A%0A%C2%BFTengo%20direcciones%20en%20Excel%3F%3A%20S%C3%AD%20%2F%20No%0AProblema%20principal%3A%0A"
              variant="secondary"
              external
            >
              Enviar información por correo
            </Button>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card">
            <p className="eyebrow">Qué necesitamos</p>
            <h2>Mientras más claro el dato, mejor la ruta.</h2>

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
                  habituales de reparto.
                </p>
              </article>

              <article>
                <h3>Restricciones</h3>
                <p>
                  Horarios, prioridades, entregas urgentes, zonas difíciles o
                  condiciones especiales.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card">
            <p className="eyebrow">Ideal para</p>
            <h2>Empresas que reparten o visitan múltiples direcciones.</h2>
            <p>
              Distribuidoras, fletes, gas, agua, ferreterías, técnicos en
              terreno, reparto local, servicios B2B y cualquier operación que
              tenga vehículos moviéndose por la ciudad.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
