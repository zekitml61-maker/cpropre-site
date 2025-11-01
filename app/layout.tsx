import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "C'Propre - Pré-inscription | Pressing Professionnel à Domicile",
  description: "Inscrivez-vous en avant-première pour découvrir C'Propre, le pressing nouvelle génération à Vaison-la-Romaine. Collecte, nettoyage professionnel et livraison express.",
  keywords: "pressing, pressing domicile, nettoyage professionnel, Vaison-la-Romaine, collecte linge, livraison pressing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
