import Link from "next/link";

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="container footerGrid">
        <div>
          <Link href="/" className="footerBrand">
            NAVIX <span>LABS</span>
          </Link>
          <p>
            Optimización logística, rutas inteligentes y herramientas digitales
            para empresas con operaciones en terreno.
          </p>
        </div>

        <div>
          <h4>Empresa</h4>
          <Link href="/servicios">Servicios</Link>
          <Link href="/soluciones">Soluciones</Link>
          <Link href="/metodologia">Metodología</Link>
        </div>

        <div>
          <h4>Producto</h4>
          <Link href="/demo">Demo</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/casos">Casos de uso</Link>
        </div>

        <div>
          <h4>Contacto</h4>
          <a href="mailto:contacto@navixlabs.cl">contacto@navixlabs.cl</a>
          <a
            href="https://wa.me/569XXXXXXXX?text=Hola%20Navix%20Labs%2C%20quiero%20consultar%20por%20optimización%20logística."
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="container footerBottom">
        <span>© 2026 Navix Labs. Todos los derechos reservados.</span>
        <span>Desarrollado para operaciones logísticas modernas.</span>
      </div>
    </footer>
  );
}
