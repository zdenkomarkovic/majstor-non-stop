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
    "Majstor Non Stop - Hitne Intervencije 24/7 | Vodoinstalater, Bravar Niš",
  description:
    "Hitne majstorske intervencije 24/7 u Nišu. Vodoinstalater, bravar. Pucanje cevi, curenje vode, izgubljeni ključevi, polomljene brave. Pozovite 0607182300",
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
    "hitni vodoinstalater niš",
    "bravar niš",
    "hitni bravar niš",
    "pucanje cevi",
    "curenje vode",
    "nestanak struje",
    "kratki spoj",
    "izgubljeni ključevi",
    "polomljene brave",
    "majstor 24/7",
    "hitne usluge niš",
    "majstor niš",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://majstornis.rs/",
  },
  openGraph: {
    title: "Majstor Non Stop - Hitne Intervencije 24/7",
    description:
      "Hitne majstorske usluge u Nišu - vodoinstalater, bravar. Dostupni 24/7. Pozovite 0607182300",
    type: "website",
    url: "https://majstornis.rs/",
    siteName: "Majstor Non Stop",
    locale: "sr_RS",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Majstor Non Stop - Hitne Intervencije Niš",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Majstor Non Stop - Hitne Intervencije 24/7",
    description:
      "Hitne majstorske usluge u Nišu - vodoinstalater, bravar. Dostupni 24/7. Pozovite 0607182300",
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
      'send_to': 'AW-17670700223/okMgCPLe0oocEL_5hepB',
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
