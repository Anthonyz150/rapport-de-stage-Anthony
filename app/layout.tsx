import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. On personnalise les métadonnées pour ton projet
export const metadata: Metadata = {
  title: "Rapport de Stage | Anthony Didier",
  description: "Présentation de mon stage de 3ème réalisé chez Avisto Telecom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-slate-50`}
      >
        {/* La Navbar est fixe en haut */}
        <Navbar />

        {/* On enlève la balise <main> d'ici ! 
            Pourquoi ? Parce que chaque page (Accueil, Rapport, etc.) possède déjà son propre <main>.
            Si on en met deux l'un dans l'autre, tes réglages de centrage vont encore casser.
        */}
        <div className="flex-grow">
          {children}
        </div>

        <Footer />
        <Analytics />
      </body>
    </html>
  );
}