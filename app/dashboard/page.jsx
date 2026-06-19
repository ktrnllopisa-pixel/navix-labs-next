import Button from "@/components/Button";
import ResultsPreview from "@/components/ResultsPreview";

export const metadata = {
  title: "Entrega | Navix Labs",
  description:
    "Vista de entrega operativa: resumen, rutas por chofer y métricas claras para el cliente.",
};

export default function DashboardPage() {
  return (
    <main>
      <section className="pageHero">
        <div className="container">
          <p className="eyebrow">Entrega</p>
          <h1>Así se ve una entrega clara para el cliente.</h1>
          <p>
            En vez de mostrar un dashboard complejo, preferimos una salida
            simple y entendible: resumen operativo, asignación por chofer y
            métricas principales.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ResultsPreview />
        </div>
      </section>

      <section className="section">
        <div className="container grid gridThree">
          <article className="card">
            <h3>Resumen ejecutivo</h3>
            <p>
              Una vista breve para entender rápidamente qué cambió y dónde está
              la mejora.
            </p>
          </article>

          <article className="card">
            <h3>Asignación operativa</h3>
            <p>
              Distribución por chofer o vehículo para que la jornada sea más
              clara y aplicable.
            </p>
          </article>

          <article className="card">
            <h3>Documento utilizable</h3>
            <p>
              La entrega busca ser práctica: clara para el dueño, para la
              administración y para quien ejecuta la ruta.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card">
            <p className="eyebrow">Siguiente paso</p>
            <h2>Podemos preparar una entrega basada en tus propios datos.</h2>
            <p>
              Si tienes direcciones, vehículos y una operación diaria o semanal,
              podemos evaluar una primera versión para tu empresa.
            </p>

            <div className="heroActions">
              <Button href="/contacto">Solicitar diagnóstico</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
