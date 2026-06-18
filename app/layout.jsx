import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Navix Labs | Optimización logística y rutas inteligentes",
  description:
    "Navix Labs desarrolla soluciones de optimización de rutas, análisis logístico y herramientas digitales para empresas con operaciones en terreno.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
