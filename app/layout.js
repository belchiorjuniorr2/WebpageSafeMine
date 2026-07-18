import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL("https://minevoice-landingpage.vercel.app"),
  title: "SafeMine — Segurança em Campo por Voz",
  description:
    "App de relatos por voz para mineração a céu aberto. A IA transcreve, preenche formulários de segurança, ambiental, ergonomia, veículo, turno e inspeção — e notifica a SSMA por e-mail.",
  openGraph: {
    title: "SafeMine — Segurança em Campo por Voz",
    description:
      "Do campo para a SSMA em segundos: voz, IA e 6 módulos de relato para mina a céu aberto.",
    locale: "pt_BR",
    type: "website",
    images: ["/images/hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "SafeMine — Segurança em Campo por Voz",
    description:
      "App voice-first de relatos para operações de mineração a céu aberto.",
  },
  icons: {
    icon: "/icons/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-safemine-text">
        {children}
      </body>
    </html>
  );
}
