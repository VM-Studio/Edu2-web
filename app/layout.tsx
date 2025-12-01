import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Salud Legal | Abogados especialistas en reclamos de cobertura médica",
  description: "Especialistas en reclamos de cobertura de salud. Te ayudamos a conseguir la autorización judicial para tu cirugía maxilofacial. Sin honorarios por adelantado.",
  keywords: "abogados salud, reclamos obra social, cirugía ortognática, cobertura médica, amparo de salud, mentoplastia, maxilofacial",
  authors: [{ name: "Salud Legal" }],
  openGraph: {
    title: "Salud Legal | Abogados especialistas en reclamos de cobertura médica",
    description: "Te ayudamos a conseguir la autorización judicial para tu cirugía. Sin honorarios por adelantado.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} ${playfair.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
