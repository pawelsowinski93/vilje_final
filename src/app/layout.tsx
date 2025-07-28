/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import {
  Roboto_Slab,
  Square_Peg,
  Cormorant_Garamond,
  Instrument_Serif,
} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Menu from "@/components/menu";
import Footer from "@/components/footer";

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
});

const squarePeg = Square_Peg({
  variable: "--font-square-peg",
  subsets: ["latin"],
  weight: "400",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const theImpressionist = localFont({
  src: "../../public/font/theimpressionist-webfont.woff",
  variable: "--font-the-impressionist",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Vilje - Katarzyna Sowińska | Psycholog i Psychotraumatolog",
  description:
    "Jestem psychologiem i psychotraumatologiem. W pracy terapeutycznej łączę podejścia psychologiczne z metodami pracy z ciałem i układem nerwowym.",
  keywords:
    "psycholog, psycholog online, psycholog kraków, psycholog gdańsk, psycholog warszawa, psychotraumatolog, trauma, brainspotting, somatic experiencing, terapia, zdrowie psychiczne, terapia psychologiczna, ",
  authors: [{ name: "Katarzyna Sowińska" }],
  creator: "Katarzyna Sowińska",
  publisher: "Vilje",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.webp", type: "image/webp" },
    ],
    apple: "/favicon.webp",
  },
  openGraph: {
    title: "Vilje - Katarzyna Sowińska | Psycholog i Psychotraumatolog",
    description:
      "Jestem psychologiem i psychotraumatologiem. W pracy terapeutycznej łączę podejścia psychologiczne z metodami pracy z ciałem i układem nerwowym.",
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vilje - Katarzyna Sowińska | Psycholog i Psychotraumatolog",
    description:
      "Jestem psychologiem i psychotraumatologiem. W pracy terapeutycznej łączę podejścia psychologiczne z metodami pracy z ciałem i układem nerwowym.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/favicon.webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${robotoSlab.variable} ${squarePeg.variable} ${cormorantGaramond.variable} ${theImpressionist.variable} ${instrumentSerif.variable} antialiased`}
      >
        <Menu />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
