import Button from "@/components/Button";

export const metadata = {
  title: "Solicitud recibida | Navix Labs",
  description: "Solicitud de diagnóstico de rutas recibida por Navix Labs.",
};

export default function GraciasPage() {
  return (
    <main>
      <section className="pageHero">
        <div className="container">
          <p className="eyebrow">Solicitud recibida</p>
          <h1>Gracias. Recibimos tu solicitud de diagnóstico.</h1>
          <p>
            Revisaremos la información de tu operación y te contactaremos para
            avanzar con la evaluación de rutas.
          </p>

          <div className="heroActions">
            <Button href="/">Volver al inicio</Button>
            <Button href="/demo" variant="secondary">
              Ver ejemplo antes/después
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
