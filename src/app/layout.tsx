import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Uzm. Dr. Abdullah Maraş Psikiyatri Kliniği",
              description:
                "Ankara Eryaman'da ruh sağlığı ve hastalıkları alanında uzman psikiyatri değerlendirmesi ve bireysel destek süreçleri.",
              url: "https://drabdullahmaras.com",
              telephone: "",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Altay Mahallesi",
                addressLocality: "Etimesgut",
                addressRegion: "Ankara",
                postalCode: "06790",
                addressCountry: "TR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "39.9524",
                longitude: "32.6279",
              },
              medicalSpecialty: "Psychiatric",
              priceRange: "$$",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "17:00",
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Physician",
              name: "Uzm. Dr. Abdullah Maraş",
              description:
                "Ruh Sağlığı ve Hastalıkları (Psikiyatri) Uzmanı. Anadolu Üniversitesi Tıp Fakültesi mezunu.",
              url: "https://drabdullahmaras.com/hakkinda",
              medicalSpecialty: "Psychiatric",
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Anadolu Üniversitesi Tıp Fakültesi",
              },
              jobTitle: "Psikiyatri Uzmanı",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Altay Mahallesi",
                addressLocality: "Etimesgut",
                addressRegion: "Ankara",
                postalCode: "06790",
                addressCountry: "TR",
              },
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
