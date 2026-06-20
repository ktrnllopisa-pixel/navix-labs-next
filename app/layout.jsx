import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://navixlabs.cl";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Navix Labs | Optimización de rutas de reparto en Chile",
    template: "%s | Navix Labs",
  },

  description:
    "Navix Labs ayuda a empresas en Chile con reparto, distribución, fletes y operaciones en terreno a optimizar rutas por chofer, reducir kilómetros, mejorar tiempos y controlar mejor su operación logística.",

  applicationName: "Navix Labs",

  authors: [{ name: "Navix Labs" }],
  creator: "Navix Labs",
  publisher: "Navix Labs",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "es_CL",
    url: siteUrl,
    siteName: "Navix Labs",
    title: "Navix Labs | Optimización de rutas de reparto en Chile",
    description:
      "Optimización logística para empresas chilenas con reparto, flotas, fletes, distribución y múltiples direcciones diarias.",
    images: [
      {
        url: "/navix-logo.png.png",
        width: 1200,
        height: 630,
        alt: "Navix Labs - Optimización de rutas en Chile",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Navix Labs | Optimización de rutas de reparto en Chile",
    description:
      "Ordenamos rutas por chofer, Excel operativo, mapa y métricas para reducir kilómetros y mejorar la operación logística.",
    images: ["/navix-logo.png.png"],
  },

  category: "logistics",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070b12",
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://navixlabs.cl/#organization",
    name: "Navix Labs",
    url: "https://navixlabs.cl",
    logo: "https://navixlabs.cl/navix-logo.png.png",
    description:
      "Servicio de optimización de rutas para empresas en Chile con reparto, fletes, distribución, visitas en terreno y operaciones con múltiples direcciones.",
    areaServed: [
      {
        "@type": "Country",
        name: "Chile",
      },
      {
        "@type": "City",
        name: "Santiago",
      },
      {
        "@type": "City",
        name: "Antofagasta",
      },
      {
        "@type": "City",
        name: "Valparaíso",
      },
      {
        "@type": "City",
        name: "Viña del Mar",
      },
      {
        "@type": "City",
        name: "Concepción",
      },
      {
        "@type": "City",
        name: "La Serena",
      },
      {
        "@type": "City",
        name: "Coquimbo",
      },
      {
        "@type": "City",
        name: "Iquique",
      },
      {
        "@type": "City",
        name: "Calama",
      },
      {
        "@type": "City",
        name: "Temuco",
      },
      {
        "@type": "City",
        name: "Puerto Montt",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://navixlabs.cl/#service",
    name: "Navix Labs",
    url: "https://navixlabs.cl",
    image: "https://navixlabs.cl/navix-logo.png.png",
    description:
      "Optimización de rutas de reparto para empresas chilenas que buscan reducir kilómetros, ordenar choferes, mejorar tiempos de entrega y controlar mejor su operación logística.",
    provider: {
      "@id": "https://navixlabs.cl/#organization",
    },
    areaServed: {
      "@type": "Country",
      name: "Chile",
    },
    serviceType: [
      "Optimización de rutas",
      "Planificación logística",
      "Rutas de reparto",
      "Rutas por chofer",
      "Análisis de flota",
      "Reducción de kilómetros",
      "Ahorro de combustible",
      "Optimización de distribución",
      "Planificación de operaciones en terreno",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://navixlabs.cl/#website",
    name: "Navix Labs",
    url: "https://navixlabs.cl",
    inLanguage: "es-CL",
    publisher: {
      "@id": "https://navixlabs.cl/#organization",
    },
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="es-CL">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
