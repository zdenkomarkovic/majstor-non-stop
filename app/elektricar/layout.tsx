import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Električar Niš - Hitne Intervencije 24/7 | Majstor Non Stop",
  description: "Hitne električarske usluge u Nišu - nestanak struje, kratki spoj, kvarovi u instalacijama. Dostupni 24/7. Pozovite 0607182300",
  keywords: [
    "električar niš",
    "nestanak struje niš",
    "kratki spoj niš",
    "hitne električarske usluge",
    "majstor struje niš",
    "električar 24/7",
    "kvarovi struje niš",
    "popravka instalacija niš"
  ],
  openGraph: {
    title: "Električar Niš - Hitne Intervencije 24/7",
    description: "Hitne električarske usluge u Nišu - nestanak struje, kratki spoj, kvarovi u instalacijama. Dostupni 24/7.",
    type: "website",
    locale: "sr_RS",
  },
};

export default function ElektricarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

