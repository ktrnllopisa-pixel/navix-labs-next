import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Solicitar diagnóstico de rutas para empresas en Chile",
  description:
    "Contacta a Navix Labs para evaluar rutas de reparto, cantidad de vehículos, direcciones, horarios de atención, carga, flota y restricciones operativas.",
  alternates: {
    canonical: "https://navixlabs.cl/contacto",
  },
  openGraph: {
    title: "Solicitar diagnóstico de rutas | Navix Labs",
    description:
      "Solicita una evaluación de rutas para detectar oportunidades de ahorro en kilómetros, tiempos, flota y planificación de reparto.",
    url: "https://navixlabs.cl/contacto",
    siteName: "Navix Labs",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/navix-logo.png.png",
        width: 1200,
        height: 630,
        alt: "Navix Labs - Diagnóstico de rutas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solicitar diagnóstico de rutas | Navix Labs",
    description:
      "Evalúa tus rutas de reparto, flota, horarios, entregas y oportunidades de mejora operativa.",
    images: ["/navix-logo.png.png"],
  },
};

const whatsappMessage = encodeURIComponent(
  `Hola Navix Labs, quiero solicitar un diagnóstico de rutas.

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

export default function ContactoPage() {
  return (
    <main className="contactPage">
      <section className="contactHero">
        <div className="container contactHeroGrid">
          <div>
            <p className="eyebrow">Diagnóstico de rutas</p>

            <h1>Cuéntanos cómo opera tu reparto y evaluamos tus rutas.</h1>

            <p>
              Completa los datos mínimos de tu operación: ciudad, vehículos,
              entregas, horarios y principales problemas actuales. Con eso
              podemos revisar si existe oportunidad de reducir kilómetros,
              ordenar mejor la flota y mejorar la planificación.
            </p>
          </div>

          <aside className="contactHeroCard">
            <span>Respuesta inicial</span>
            <strong>24–48 h</strong>
            <p>
              Revisamos tu información y te contactamos para pedir detalles o
              coordinar una primera evaluación.
            </p>

            <Button href={whatsappUrl} variant="secondary" external>
              Escribir por WhatsApp
            </Button>
          </aside>
        </div>
      </section>

      <section className="contactSection">
        <div className="container contactLayout">
          <div className="contactFormCard">
            <p className="eyebrow">Formulario</p>
            <h2>Enviar solicitud de diagnóstico</h2>
            <p>
              Este formulario se envía directamente desde la página. No abre
              Outlook, Gmail ni otra aplicación externa.
            </p>

            <ContactForm />
          </div>

          <aside className="contactInfoPanel">
            <div className="contactInfoBlock">
              <p className="eyebrow">Qué necesitamos</p>
              <h2>Datos mínimos para una primera evaluación</h2>

              <div className="contactChecklist">
                <article>
                  <span>01</span>
                  <div>
                    <h3>Operación</h3>
                    <p>
                      Ciudad, rubro, cantidad de vehículos y número aproximado
                      de entregas.
                    </p>
                  </div>
                </article>

                <article>
                  <span>02</span>
                  <div>
                    <h3>Restricciones</h3>
                    <p>
                      Horarios de atención, prioridades, zonas complejas o
                      clientes críticos.
                    </p>
                  </div>
                </article>

                <article>
                  <span>03</span>
                  <div>
                    <h3>Direcciones</h3>
                    <p>
                      Puedes comenzar sin Excel. Si ya tienes una planilla,
                      mejoramos la evaluación.
                    </p>
                  </div>
                </article>
              </div>
            </div>

            <div className="contactNextSteps">
              <p className="eyebrow">Después del envío</p>

              <div className="nextStep">
                <strong>1. Revisamos tu caso</strong>
                <span>Validamos si tiene sentido optimizar la operación.</span>
              </div>

              <div className="nextStep">
                <strong>2. Pedimos datos faltantes</strong>
                <span>
                  Si falta información, te pedimos planilla, zonas u horarios.
                </span>
              </div>

              <div className="nextStep">
                <strong>3. Preparamos una propuesta</strong>
                <span>
                  Te indicamos qué podríamos entregar y con qué alcance.
                </span>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
