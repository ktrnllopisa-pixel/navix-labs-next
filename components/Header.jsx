import Link from "next/link";
import Button from "@/components/Button";

const navItems = [
  { href: "/servicios", label: "Servicios" },
  { href: "/soluciones", label: "Soluciones" },
  { href: "/demo", label: "Demo" },
  { href: "/metodologia", label: "Metodología" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="siteHeader">
      <div className="container headerInner">
        <Link href="/" className="brand" aria-label="Ir al inicio">
          <span className="brandSymbol">N</span>
          <span className="brandText">
            NAVIX <span>LABS</span>
          </span>
        </Link>

        <nav className="navLinks" aria-label="Navegación principal">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="headerAction">
          <Button href="/dashboard" variant="secondary">
            Ver dashboard
          </Button>
        </div>
      </div>
    </header>
  );
}
