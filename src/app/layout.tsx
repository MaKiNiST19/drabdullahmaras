import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Oswald, Inter, Space_Grotesk } from 'next/font/google';
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./prozen.css";
import "./lenis.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
  weight: ['200', '300', '400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://drabdullahmaras.com'),
  title: {
    default: "Uzm. Dr. Abdullah Maraş | Eryaman Psikiyatrist - Ankara Psikiyatri Uzmanı",
    template: "%s | Uzm. Dr. Abdullah Maraş - Psikiyatri Uzmanı",
  },
  description:
    "Ankara Eryaman'da Uzm. Dr. Abdullah Maraş psikiyatri kliniği. Ruh sağlığı ve hastalıkları alanında bilimsel, etik ve bireysel değerlendirme. Depresyon, anksiyete, panik atak ve daha fazlası.",
  keywords: [
    "eryaman psikiyatrist",
    "eryaman psikiyatri doktoru",
    "ankara eryaman psikiyatrist",
    "altay mahallesi psikiyatrist",
    "eryaman uzman psikiyatri",
    "ankara psikiyatrist",
    "psikiyatri uzmanı eryaman",
    "ruh sağlığı eryaman",
  ],
  authors: [{ name: "Uzm. Dr. Abdullah Maraş" }],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Uzm. Dr. Abdullah Maraş - Psikiyatri Uzmanı",
    title: "Uzm. Dr. Abdullah Maraş | Eryaman Psikiyatrist",
    description:
      "Ankara Eryaman'da ruh sağlığı ve hastalıkları alanında uzman psikiyatri değerlendirmesi.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://drabdullahmaras.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning className={`${plusJakartaSans.variable} ${oswald.variable} ${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <style dangerouslySetInnerHTML={{ __html: `
          @font-face {
            font-family: 'Font Awesome 6 Free';
            font-display: swap;
          }
          @font-face {
            font-family: 'Font Awesome 6 Brands';
            font-display: swap;
          }
        `}} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://drabdullahmaras.com/#website",
                  url: "https://drabdullahmaras.com/",
                  name: "Uzm. Dr. Abdullah Maraş Psikiyatri Kliniği",
                  description: "Ankara Eryaman'da ruh sağlığı ve hastalıkları alanında uzman psikiyatri değerlendirmesi.",
                  publisher: {
                    "@id": "https://drabdullahmaras.com/#organization"
                  },
                  inLanguage: "tr-TR"
                },
                {
                  "@type": ["MedicalClinic", "MedicalOrganization", "LocalBusiness"],
                  "@id": "https://drabdullahmaras.com/#organization",
                  name: "Uzm. Dr. Abdullah Maraş Psikiyatri Kliniği",
                  url: "https://drabdullahmaras.com",
                  logo: "https://drabdullahmaras.com/logo.png",
                  image: "https://drabdullahmaras.com/dr-abdullah-maras.jpeg",
                  description: "Ankara Eryaman'da ruh sağlığı ve hastalıkları (psikiyatri) alanında uzman medikal değerlendirme ve bireysel destek süreçleri.",
                  telephone: "+903125045399",
                  medicalSpecialty: ["Psychiatry", "Psychiatric"],
                  priceRange: "$$",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Altay Mahallesi Orhan Bey Caddesi Ata Yıldız Plaza No:1 Kat:1 Daire:4",
                    addressLocality: "Etimesgut",
                    addressRegion: "Ankara",
                    postalCode: "06790",
                    addressCountry: "TR"
                  },
                  areaServed: [
                    { "@type": "City", name: "Ankara" },
                    { "@type": "City", name: "Etimesgut" },
                    { "@type": "City", name: "Eryaman" },
                    { "@type": "City", name: "Batıkent" }
                  ],
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: "39.9654",
                    longitude: "32.6186"
                  },
                  openingHoursSpecification: [
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                      opens: "09:00",
                      closes: "18:00"
                    }
                  ],
                  employee: {
                    "@id": "https://drabdullahmaras.com/#physician"
                  }
                },
                {
                  "@type": "Physician",
                  "@id": "https://drabdullahmaras.com/#physician",
                  name: "Uzm. Dr. Abdullah Maraş",
                  jobTitle: "Psikiyatri Uzmanı (Psychiatrist)",
                  description: "Ruh Sağlığı ve Hastalıkları (Psikiyatri) Uzmanı. Anadolu Üniversitesi Tıp Fakültesi mezunu.",
                  url: "https://drabdullahmaras.com/hakkinda",
                  image: "https://drabdullahmaras.com/dr-abdullah-maras.jpeg",
                  medicalSpecialty: ["Psychiatry", "Psychiatric"],
                  alumniOf: {
                    "@type": "EducationalOrganization",
                    name: "Anadolu Üniversitesi Tıp Fakültesi"
                  },
                  worksFor: {
                    "@id": "https://drabdullahmaras.com/#organization"
                  }
                }
              ]
            }),
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
