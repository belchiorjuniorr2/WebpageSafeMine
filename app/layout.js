import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://safemine.com.br"),
  title: "SafeMine — Segurança em Campo por Voz",
  description:
    "Registre ocorrências de segurança em mineração falando. A IA preenche o formulário, você revisa e envia. Menos burocracia, mais segurança.",
  openGraph: {
    title: "SafeMine — Segurança em Campo por Voz",
    description:
      "Plataforma voice-first para registro de ocorrências em operações de mineração.",
    locale: "pt_BR",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "SafeMine — Segurança em Campo por Voz",
    description:
      "Plataforma voice-first para registro de ocorrências em operações de mineração.",
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
