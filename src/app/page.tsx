import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Uzm. Dr. Abdullah Maraş | Ankara Eryaman Psikiyatrist',
  description: 'Ankara Eryaman’da yetişkin psikiyatrik değerlendirme. Depresyon, anksiyete, panik atak, OKB, bipolar bozukluk, erişkin DEHB ve uyku sorunlarında bireysel görüşme süreci.',
  alternates: { canonical: 'https://drabdullahmaras.com/' },
  openGraph: {
    title: 'Uzm. Dr. Abdullah Maraş | Ankara Eryaman Psikiyatrist',
    description: 'Ankara Eryaman’da yetişkin psikiyatrik değerlendirme. Depresyon, anksiyete, panik atak, OKB, bipolar bozukluk, erişkin DEHB ve uyku sorunlarında bireysel görüşme süreci.',
    type: 'website',
    locale: 'tr_TR',
    url: 'https://drabdullahmaras.com/'
  },
};

const services = [
  {
    slug: 'depresyon',
    title: 'Depresyon',
    desc: 'Süregelen karamsarlık, enerji kaybı ve isteksizlik durumlarının klinik değerlendirmesi.',
    icon: '🌧️',
  },
  {
    slug: 'anksiyete',
    title: 'Anksiyete',
    desc: 'Yaygın kaygı, endişe ve huzursuzluk durumlarına yönelik bireysel değerlendirme.',
    icon: '🌀',
  },
  {
    slug: 'panik-atak',
    title: 'Panik Atak',
    desc: 'Ani korku nöbetleri ve nefes darlığı gibi bedensel reaksiyonların psikiyatrik analizi.',
    icon: '⚡',
  },
  {
    slug: 'okb',
    title: 'OKB',
    desc: 'Tekrarlayan zihinsel takıntıların (obsesyon) yetişkin klinik vizyonuyla incelenmesi.',
    icon: '🔄',
  },
  {
    slug: 'bipolar-bozukluk',
    title: 'Bipolar Bozukluk',
    desc: 'Duygudurum dalgalanmaları ve enerji değişimlerinin klinik psikiyatrik tahlili.',
    icon: '🔃',
  },
  {
    slug: 'eriskin-dehb',
    title: 'Erişkin DEHB',
    desc: 'Yetişkinlerde odaklanma güçlüğü ve erteleme döngüsünün psikiyatrik analiz süreci.',
    icon: '🎯',
  },
  {
    slug: 'uyku-bozukluklari',
    title: 'Uyku Bozuklukları',
    desc: 'İnsomniya ve uyku kalitesi sorunlarının psikiyatrik, nörobiyolojik incelenmesi.',
    icon: '🌙',
  },
  {
    slug: 'tukenmislik-sendromu',
    title: 'Tükenmişlik Sendromu',
    desc: 'İş yükü altında ezilen zihnin motivasyon kaybı ve tükenmişlik durumunun yönetimi.',
    icon: '🔋',
  },
];

export default function Home() {
  return (
    <>
      {/* 1) HERO */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Uzm. Dr. Abdullah Maraş
              <span className={styles.heroTitleSub}>Ankara Eryaman’da Yetişkin Psikiyatrik Değerlendirme</span>
            </h1>
            <p className={styles.heroDesc}>
              Depresyon, anksiyete, panik atak, OKB, bipolar bozukluk, erişkin DEHB ve uyku sorunlarında kanıta dayalı, bireysel psikiyatrik görüşme süreci.
            </p>
            <div className={styles.heroActions}>
              <Link href="/randevu" className={styles.btnPrimary}>
                Randevu Oluştur
              </Link>
              <Link href="/hizmetler" className={styles.btnOutline}>
                Hizmet Alanlarını İncele
              </Link>
            </div>

            <div className={styles.heroCredibility}>
              <div className={styles.credibilityItem}>
                <span className={styles.credDot}></span>
                Yetişkin Psikiyatrisi
              </div>
              <div className={styles.credibilityItem}>
                <span className={styles.credDot}></span>
                Bireysel Klinik Değerlendirme
              </div>
              <div className={styles.credibilityItem}>
                <span className={styles.credDot}></span>
                Ankara Eryaman
              </div>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <Image
              src="/dr-abdullah-maras.jpeg"
              alt="Uzm. Dr. Abdullah Maraş"
              width={480}
              height={580}
              className={styles.heroImage}
              priority
            />
          </div>
        </div>
      </section>

      {/* 2) WHY THIS CLINIC SECTION */}
      <section className={styles.whySection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Neden Ankara Eryaman’da Bu Klinik?</h2>
            <p>Ruh sağlığı pratiğinde yetişkinlere özgü yaklaşımlarımız ve etik standartlarımız.</p>
          </div>
          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <div className={styles.whyCardIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3 className={styles.whyCardTitle}>Bireysel Değerlendirme Yaklaşımı</h3>
              <p className={styles.whyCardDesc}>Şablonlardan uzak; kişinin kendi kimliğine, yaşamsal döngüsüne ve yapısal direncine özel olarak planlanan spesifik psikiyatrik görüşme anlayışı.</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyCardIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3 className={styles.whyCardTitle}>Yapılandırılmış Klinik Görüşme</h3>
              <p className={styles.whyCardDesc}>Uluslararası tıbbi tanı kılavuzları rehberliğinde uygulanan, nedenselliği tam ortaya koyan net ve derinleştirilmiş muayene mimarisi.</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyCardIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className={styles.whyCardTitle}>Güvenli ve Yargısız Alan</h3>
              <p className={styles.whyCardDesc}>Hasta mahremiyetini ve tıbbi gizliliği mutlak merkeze alan, etiketleme yapılmaksızın huzurlu bir zemin sunan klinik prensipler.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3) SERVICES GRID */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Yetişkin Psikiyatrik Hizmetleri</h2>
            <p>18 yaş ve üzeri bireylerin ruhsal sorunlarına yönelik güncel hekimlik değerlendirmeleri.</p>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <Link
                href={`/hizmetler/${service.slug}`}
                key={service.slug}
                className={styles.serviceCard}
              >
                <span className={styles.serviceIcon}>{service.icon}</span>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local Authority Boost */}
      <section className="section" style={{ backgroundColor: '#ffffff', padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className={styles.sectionTitle} style={{ fontSize: '1.75rem' }}>Ankara Eryaman Psikiyatrist</h2>
          <p className={styles.localText}>
            Uzm. Dr. Abdullah Maraş, tıp bilimi çerçevesinde çalışan ve <strong>Ankara psikiyatrist</strong> arayışında olan yetişkin bireylere hizmet sunan bir ruh sağlığı uzmanıdır. Güncel yaklaşımları merkeze alan muayenehanemiz Altay Mahallesi&apos;nde bulunmakta olup, ağırlıklı olarak <strong>Eryaman psikiyatrist</strong> hizmetleri kapsamında hizmet vermektedir. Kliniğimizin merkezi erişim özellikleri, ulaşım ağları nedeniyle <strong>Etimesgut psikiyatrist</strong> ve <strong>Batıkent psikiyatrist</strong> arayışındaki hastalarımız için de kolay bir erişim ağı sunmaktadır. Psikiyatrik görüşmelerde hiçbir biçimde eksen dışı yüzdelik vaatler verilmemekte, bireye saygılı ve bilimsel kanıta dayalı klinik bir üslup gözetilmektedir.
          </p>
        </div>
      </section>

      {/* Global Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Physician",
                "name": "Uzm. Dr. Abdullah Maraş",
                "medicalSpecialty": "Psychiatry",
                "image": "https://drabdullahmaras.com/dr-abdullah-maras.jpeg",
                "url": "https://drabdullahmaras.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Altay Mahallesi",
                  "addressLocality": "Etimesgut",
                  "addressRegion": "Ankara",
                  "addressCountry": "TR"
                },
                "areaServed": {
                  "@type": "AdministrativeArea",
                  "name": "Ankara"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "39.9654",
                  "longitude": "32.6186"
                }
              },
              {
                "@type": "MedicalOrganization",
                "name": "Uzm. Dr. Abdullah Maraş Psikiyatri Kliniği",
                "url": "https://drabdullahmaras.com",
                "logo": "https://drabdullahmaras.com/dr-abdullah-maras.jpeg",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "Randevu İletişim",
                  "areaServed": "Ankara"
                },
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Altay Mahallesi",
                  "addressLocality": "Etimesgut",
                  "addressRegion": "Ankara",
                  "addressCountry": "TR"
                }
              },
              {
                "@type": "WebSite",
                "url": "https://drabdullahmaras.com/",
                "name": "Uzm. Dr. Abdullah Maraş",
                "description": "Ankara Eryaman'da yetişkin psikiyatrik değerlendirme. Depresyon, anksiyete, panik atak, OKB, bipolar bozukluk, erişkin DEHB ve uyku sorunlarında bireysel görüşme süreci."
              },
              {
                "@type": "LocalBusiness",
                "name": "Uzm. Dr. Abdullah Maraş - Yetişkin Psikiyatrist",
                "image": "https://drabdullahmaras.com/dr-abdullah-maras.jpeg",
                "@id": "https://drabdullahmaras.com",
                "url": "https://drabdullahmaras.com",
                "telephone": "+90 5XX XXX XX XX",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Altay Mahallesi",
                  "addressLocality": "Eryaman, Etimesgut",
                  "addressRegion": "Ankara",
                  "addressCountry": "TR"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "39.9654",
                  "longitude": "32.6186"
                }
              }
            ]
          })
        }}
      />
    </>
  );
}
