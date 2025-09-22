import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vodoinstalater Niš - Hitne Intervencije 24/7 | Majstor Non Stop",
  description: "Hitne vodoinstalaterske usluge u Nišu - pucanje cevi, curenje vode, kvarovi u instalacijama. Dostupni 24/7. Pozovite 0607182300",
  keywords: [
    "vodoinstalater niš",
    "pucanje cevi niš",
    "curenje vode niš",
    "hitne vodoinstalaterske usluge",
    "majstor vode niš",
    "vodoinstalater 24/7",
    "kvarovi vode niš",
    "popravka cevi niš"
  ],
  openGraph: {
    title: "Vodoinstalater Niš - Hitne Intervencije 24/7",
    description: "Hitne vodoinstalaterske usluge u Nišu - pucanje cevi, curenje vode, kvarovi u instalacijama. Dostupni 24/7.",
    type: "website",
    locale: "sr_RS",
  },
};

export default function VodoinstalaterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

