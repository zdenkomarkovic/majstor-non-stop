import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bravar Niš - Hitne Intervencije 24/7 | Majstor Non Stop",
  description: "Hitne bravarske usluge u Nišu - izgubljeni kljucevi, polomljene brave, otključavanje. Dostupni 24/7. Pozovite 0607182300",
  keywords: [
    "bravar niš",
    "izgubljeni kljucevi niš",
    "polomljene brave niš",
    "hitne bravarske usluge",
    "majstor bravar niš",
    "bravar 24/7",
    "otključavanje niš",
    "popravka brava niš"
  ],
  openGraph: {
    title: "Bravar Niš - Hitne Intervencije 24/7",
    description: "Hitne bravarske usluge u Nišu - izgubljeni kljucevi, polomljene brave, otključavanje. Dostupni 24/7.",
    type: "website",
    locale: "sr_RS",
  },
};

export default function BravarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

