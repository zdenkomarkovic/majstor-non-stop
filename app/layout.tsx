import ButtonToTop from "@/components/ButtonToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Majstor Non Stop - Hitne Intervencije 24/7 | Vodoinstalater, Električar, Bravar Niš",
  description:
    "Majstor Non Stop - hitne intervencije 24/7 u Nišu. Vodoinstalater, električar i bravar usluge. Pucanje cevi, nestanak struje, izgubljeni kljucevi. Brzi Brod, Niš. Pozovite 0607182300",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
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
    "majstor niš",
  ],
  alternates: {
    canonical: "https://majstornis.rs/",
  },
  openGraph: {
    title: "Majstor Non Stop - Hitne Intervencije 24/7",
    description:
      "Hitne majstorske usluge u Nišu - vodoinstalater, električar, bravar. Dostupni 24/7. Pozovite 0607182300",
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
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-muted-foreground bg-muted  text-base md:text-xl`}
      >
        <Header />
        {children}
        <ButtonToTop />
        <Footer />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17670700223"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
  window.dataLayer = window.dataLayer || [];
  window.gtag = function(){window.dataLayer.push(arguments);}
  window.gtag('js', new Date());
  window.gtag('config', 'AW-17670700223');
`}
        </Script>

        <Script id="gtag-conversion" strategy="afterInteractive">
          {`
  window.gtag_report_conversion = function(url) {
    var callback = function () {
      if (typeof(url) != 'undefined') {
        window.location = url;
      }
    };
    window.gtag('event', 'conversion', {
      'send_to': 'AW-17670700223/APh5CMDOuf4bEL_5hepB',
      'value': 1.0,
      'currency': 'RSD',
      'event_callback': callback
    });
    return false;
  };
`}
        </Script>
      </body>
    </html>
  );
}
