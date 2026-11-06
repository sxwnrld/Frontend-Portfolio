import "./globals.css";
import { Courier_Prime, Karla, Young_Serif } from "next/font/google";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import RevealObserver from "./_components/RevealObserver";

const sans = Karla({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Young_Serif({ subsets: ["latin"], weight: "400", variable: "--font-display", display: "swap" });
const mono = Courier_Prime({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono", display: "swap" });

export const metadata = {
  title: {
    default: "Sawwan Akrour — Développeur web",
    template: "%s — Sawwan Akrour",
  },
  description:
    "Portfolio de Sawwan Akrour, étudiant en développement web à l’IIM. Projets, compétences et contact.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${sans.variable} ${display.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        {/* Active les animations d'apparition seulement si le JS est disponible */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        <span id="top" />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
