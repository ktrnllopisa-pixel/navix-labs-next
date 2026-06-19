import Link from "next/link";

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

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="container footerGrid">
        <div>
          <Link href="/" className="footerBrand">
            NAVIX <span>LABS</span>
          </Link>
          <p>
            Optimización express de rutas para empresas con reparto, visitas en
            terreno y operaciones con múltiples direcciones.
          </p>
        </div>

        <div>
          <h4>Rutas</h4>
          <Link href="/servicios">Servicios</Link>
          <Link href="/demo">Ejemplo antes/después</Link>
          <Link href="/metodologia">Cómo funciona</Link>
        </div>

        <div>
          <h4>Entrega</h4>
          <Link href="/dashboard">Reporte demo</Link>
          <Link href="/casos">Casos de uso</Link>
          <Link href="/soluciones">Empresas objetivo</Link>
        </div>

        <div>
          <h4>Contacto</h4>
          <Link href="/contacto">Formulario de diagnóstico</Link>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            WhatsApp directo
          </a>
        </div>
      </div>

      <div className="container footerBottom">
        <span>© 2026 Navix Labs. Todos los derechos reservados.</span>
        <span>Menos kilómetros. Más orden. Mejores rutas.</span>
      </div>
    </footer>
  );
}
