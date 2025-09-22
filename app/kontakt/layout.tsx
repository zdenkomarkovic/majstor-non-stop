import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt - Majstor Non Stop Niš | Hitne Intervencije 24/7",
  description: "Kontaktirajte Majstor Non Stop za hitne majstorske usluge u Nišu. Telefon: 0607182300. Adresa: Rimska 9 br 5a, Brzi Brod, Niš. Dostupni 24/7.",
  keywords: [
    "kontakt majstor non stop",
    "telefon majstor niš",
    "adresa majstor niš",
    "brzi brod niš",
    "rimska 9 niš",
    "majstor kontakt"
  ],
  openGraph: {
    title: "Kontakt - Majstor Non Stop Niš",
    description: "Kontaktirajte Majstor Non Stop za hitne majstorske usluge u Nišu. Dostupni 24/7.",
    type: "website",
    locale: "sr_RS",
  },
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

