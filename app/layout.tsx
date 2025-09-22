import ButtonToTop from "@/components/ButtonToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Majstor Non Stop - Hitne Intervencije 24/7 | Vodoinstalater, Električar, Bravar Niš",
  description: "Majstor Non Stop - hitne intervencije 24/7 u Nišu. Vodoinstalater, električar i bravar usluge. Pucanje cevi, nestanak struje, izgubljeni kljucevi. Brzi Brod, Niš. Pozovite 0607182300",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  keywords: [
    "majstor non stop",
    "hitne intervencije niš",
    "vodoinstalater niš",
    "električar niš", 
    "bravar niš",
    "pucanje cevi",
    "curenje vode",
    "nestanak struje",
    "kratki spoj",
    "izgubljeni kljucevi",
    "polomljene brave",
    "majstor 24/7",
    "hitne usluge niš",
    "brzi brod niš"
  ],
  alternates: {
    canonical: "https://majstor-non-stop.rs/",
  },
  openGraph: {
    title: "Majstor Non Stop - Hitne Intervencije 24/7",
    description: "Hitne majstorske usluge u Nišu - vodoinstalater, električar, bravar. Dostupni 24/7. Pozovite 0607182300",
    type: "website",
    locale: "sr_RS",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-muted-foreground bg-muted  text-base md:text-xl`}
      >
        <Header />
        {children}
        <ButtonToTop />
        <Footer />
      </body>
    </html>
  );
}
