import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";

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

export const metadata = {
  title: "Diagnóstico de rutas | Navix Labs",
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
            Puedes contactarnos por WhatsApp o completar el formulario. Para una
            primera evaluación necesitamos ciudad, cantidad de vehículos,
            entregas aproximadas y principal problema actual.
          </p>

          <div className="heroActions">
            <Button href={whatsappUrl} external>
              Escribir por WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gridTwo">
          <div className="card">
            <p className="eyebrow">Formulario</p>
            <h2>Enviar solicitud de diagnóstico</h2>
            <p>
              Usa este formulario si prefieres dejar tus datos sin abrir Outlook
              o Gmail. La solicitud se enviará directamente para revisión.
            </p>

            <ContactForm />
          </div>

          <div className="card">
            <p className="eyebrow">Qué revisamos</p>
            <h2>Datos mínimos para optimizar rutas</h2>

            <div className="processList compactProcess">
              <article className="processStep">
                <span>01</span>
                <div>
                  <h3>Direcciones</h3>
                  <p>
                    Clientes, puntos de entrega o ubicaciones visitadas durante
                    una jornada.
                  </p>
                </div>
              </article>

              <article className="processStep">
                <span>02</span>
                <div>
                  <h3>Vehículos</h3>
                  <p>
                    Cantidad de choferes, vehículos disponibles y carga habitual
                    de trabajo.
                  </p>
                </div>
              </article>

              <article className="processStep">
                <span>03</span>
                <div>
                  <h3>Restricciones</h3>
                  <p>
                    Horarios, prioridades, zonas complicadas o entregas urgentes.
                  </p>
                </div>
              </article>

              <article className="processStep">
                <span>04</span>
                <div>
                  <h3>Resultado</h3>
                  <p>
                    Rutas ordenadas, mapa, Excel operativo y comparación
                    antes/después.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
