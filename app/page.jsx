import Button from "@/components/Button";

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

export default function Home() {
  return (
    <main>
      <section className="hero homeHero">
        <div className="container homeHeroGrid">
          <div className="homeHeroContent">
            <p className="eyebrow">Optimización express de rutas</p>

            <h1 className="displayTitle homeTitle">
              Optimiza tus rutas de reparto en 48 horas.
            </h1>

            <p className="lead homeLead">
              Convertimos tus direcciones en rutas por chofer, Excel operativo,
              mapa y métricas simples para reducir kilómetros, tiempo y
              desorden.
            </p>

            <div className="heroActions">
              <Button href="/contacto">Solicitar diagnóstico</Button>
              <Button href={whatsappUrl} variant="secondary" external>
                WhatsApp
              </Button>
            </div>

            <p className="homeSmallNote">
              Ideal para reparto local, distribución, fletes, técnicos en
              terreno y empresas con múltiples direcciones diarias.
            </p>
          </div>

          <aside className="minimalProofCard">
            <p className="minimalProofEyebrow">Ejemplo referencial</p>

            <div className="minimalProofRows">
              <div>
                <span>Antes</span>
                <strong>142 km</strong>
              </div>

              <div>
                <span>Después</span>
                <strong>97 km</strong>
              </div>

              <div className="highlightRow">
                <span>Ahorro estimado</span>
                <strong>-45 km</strong>
              </div>
            </div>

            <Button href="/demo" variant="secondary">
              Ver ejemplo completo
            </Button>
          </aside>
        </div>
      </section>

      <section className="section homeSection">
        <div className="container">
          <div className="homeIntro">
            <p className="eyebrow">Cómo funciona</p>
            <h2>Un proceso simple para ordenar tus rutas.</h2>
          </div>

          <div className="miniProcess">
            <article>
              <span>01</span>
              <h3>Envías tus direcciones</h3>
              <p>
                Puede ser una planilla, lista de clientes o rutas actuales.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Ordenamos la operación</h3>
              <p>
                Revisamos vehículos, zonas, entregas y recorridos posibles.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Recibes una entrega clara</h3>
              <p>
                Rutas por chofer, Excel operativo y comparación antes/después.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section homeSection">
        <div className="container">
          <div className="simpleCta">
            <p className="eyebrow">Siguiente paso</p>
            <h2>Veamos si tus rutas pueden mejorar.</h2>
            <p>
              Completa el formulario con ciudad, vehículos, entregas
              aproximadas y principal problema actual.
            </p>

            <div className="heroActions">
              <Button href="/contacto">Completar formulario</Button>
              <Button href={whatsappUrl} variant="secondary" external>
                Escribir por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
