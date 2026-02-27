import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import FAQSection from '@/components/FAQSection';

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
    desc: 'Ani korku nöbetleri, çarpıntı ve nefes darlığı gibi bedensel reaksiyonların analizi.',
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
    desc: 'Duygudurum dalgalanmaları ve enerji değişimlerinin klinik psikiyatrik değerlendirmesi.',
    icon: '🔃',
  },
  {
    slug: 'eriskin-dehb',
    title: 'Erişkin DEHB',
    desc: 'Yetişkinlerde dikkat dağınıklığı, odaklanma güçlüğü ve erteleme döngüsünün tahlili.',
    icon: '🎯',
  },
  {
    slug: 'uyku-bozukluklari',
    title: 'Uyku Bozuklukları',
    desc: 'İnsomniya, gece uyanmaları ve kronik uyku kalitesi sorunlarının psikiyatrik analizi.',
    icon: '🌙',
  },
  {
    slug: 'tukenmislik-sendromu',
    title: 'Tükenmişlik Sendromu',
    desc: 'İş ve sistem yükü altında ezilen zihnin motivasyon kaybı ve tükenmişlik onarımı.',
    icon: '🔋',
  },
];

const homeFAQ = [
  {
    question: 'Psikiyatrist ile psikolog arasındaki fark nedir?',
    answer: 'Psikiyatristler tıp fakültesi mezunu olup uzmanlık eğitimi almış hekimlerdir ve gerektiğinde ilaç tedavisi uygulayabilirler. Psikologlar ise psikoloji lisans eğitimi almış profesyonellerdir ve genellikle psikoterapi yöntemleri ile çalışırlar. Her iki meslek grubu da ruh sağlığı alanında önemli rol üstlenmektedir.',
  },
  {
    question: "Eryaman'da psikiyatri randevusu nasıl alınır?",
    answer: "Ankara Eryaman'da Uzm. Dr. Abdullah Maraş'tan randevu almak için web sitemiz üzerindeki randevu formunu doldurabilir veya iletişim sayfamızdaki bilgileri kullanarak doğrudan ulaşabilirsiniz. Altay Mahallesi çevresinde kolay erişim imkânı sunulmaktadır.",
  },
  {
    question: 'Psikiyatrik değerlendirme ne kadar sürer?',
    answer: 'İlk psikiyatrik değerlendirme görüşmesi genellikle 40-60 dakika arasında sürmektedir. Bu sürede detaylı bir klinik görüşme yapılarak bireyin ruh sağlığı durumu hakkında kapsamlı bir değerlendirme gerçekleştirilir.',
  },
  {
    question: 'İlk görüşmede ne konuşulur?',
    answer: 'İlk görüşmede mevcut yakınmalarınız, geçmiş sağlık öykünüz, aile geçmişiniz ve günlük yaşamınızı etkileyen durumlar hakkında detaylı bir görüşme yapılır. Bu bilgiler bireysel değerlendirme sürecinin temelini oluşturur.',
  },
  {
    question: 'Psikiyatriste gitmek utanılacak bir şey mi?',
    answer: 'Ruh sağlığı, genel sağlığın ayrılmaz bir parçasıdır. Tıpkı fiziksel bir rahatsızlıkta hekime başvurulması gibi, ruhsal zorluklar yaşandığında da uzman desteği almak doğal ve önemli bir adımdır. Erken dönemde alınan profesyonel destek, yaşam kalitesinin korunmasına katkı sağlayabilir.',
  }
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero} style={{ background: 'var(--bg-light)', paddingBottom: 'var(--space-12)' }}>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroText}>
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot}></span>
              Ankara – Eryaman / Altay Mahallesi
            </div>
            <h1 className={styles.heroTitle} style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.1 }}>
              Uzm. Dr. Abdullah Maraş <br />
              <span style={{ fontSize: '0.65em', color: 'var(--primary-600)', fontWeight: 500, display: 'block', marginTop: 'var(--space-2)' }}>
                Ankara Eryaman’da Yetişkin Psikiyatrik Değerlendirme
              </span>
            </h1>
            <p className={styles.heroDesc} style={{ marginBottom: 'var(--space-6)', maxWidth: '600px', fontSize: '1.15rem' }}>
              Depresyon, anksiyete, panik atak, OKB, bipolar bozukluk, erişkin DEHB ve uyku sorunlarında bireysel psikiyatrik görüşme süreci.
              <br /><br />
              Eryaman ve çevresinde yetişkinlere yönelik klinik değerlendirme hizmeti sunulmaktadır.
            </p>
            <div className={styles.heroActions}>
              <Link href="/randevu" className="btn btn--primary btn--lg" id="hero-randevu-btn">
                Randevu Oluştur
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </Link>
              <Link href="/hizmetler" className="btn btn--secondary btn--lg" id="hero-hizmetler-btn">
                Değerlendirme Alanlarını İncele
              </Link>
            </div>
          </div>
          <div className={styles.heroVisual} style={{ justifyContent: 'flex-end', animation: 'fadeInUp 0.8s 0.2s ease both' }}>
            <Image
              src="/dr-abdullah-maras.jpeg"
              alt="Uzm. Dr. Abdullah Maraş"
              width={420}
              height={520}
              className="doctor-hero-img"
              style={{ borderRadius: 'var(--radius-3xl)', objectFit: 'cover', boxShadow: 'var(--shadow-xl)' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Local Authority Section */}
      <section className="section" style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--neutral-200)', borderBottom: '1px solid var(--neutral-200)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h2 style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--text-3xl)' }}>Ankara Eryaman’da Yetişkin Psikiyatri</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-6)', lineHeight: 1.7 }}>
            Psikiyatrik tıp bilimi çerçevesinde, yalnızca <strong>yetişkin (adult) danışanlara</strong> odaklanan kliniğimiz, Eryaman (Altay Mahallesi) bölgesinde yer almaktadır. Hastanın yaşadığı krizlere tekil standartlarla değil, yaşam dinamikleri ve biyolojisi nezdinde yaklaşarak; Batıkent, Etimesgut ve diğer merkezlerden kolay erişimli lokasyonumuzda profesyonel klinik destek yapılandırması gerçekleştiriyoruz.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--space-6)', fontSize: 'var(--text-md)', fontWeight: 500, color: 'var(--text-primary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}><span style={{ color: 'var(--primary-600)', fontSize: '1.5rem' }}>•</span> Tıp Doktoru & Uzman Psikiyatrist</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}><span style={{ color: 'var(--primary-600)', fontSize: '1.5rem' }}>•</span> Anadolu Üniversitesi Tıp Fakültesi</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}><span style={{ color: 'var(--primary-600)', fontSize: '1.5rem' }}>•</span> Bireysel, Etik Klinik Yaklaşım</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">✦ Değerlendirme Alanları</span>
            <h2>Yetişkin Psikiyatrik Hizmetleri</h2>
            <p>
              Eryaman&apos;da ruh sağlığı alanında sunduğumuz kapsamlı yetişkin değerlendirme başlıkları. Sorununuzu seçerek klinik yaklaşımımızı inceleyebilirsiniz.
            </p>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <Link
                href={`/hizmetler/${service.slug}`}
                key={service.slug}
                className={`card ${styles.serviceCard}`}
                style={{ animationDelay: `${index * 0.05}s` }}
                id={`service-card-${service.slug}`}
              >
                <span className={styles.serviceIcon}>{service.icon}</span>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.desc}</p>
                <span className={styles.serviceLink}>
                  Detaylı İncele
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14m-7-7 7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Credibility (About) Section */}
      <section className={`section section--light ${styles.aboutPreview}`}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent}>
              <span className="section-badge">✦ Uzman Hekim</span>
              <h2 style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-4)' }}>Uzm. Dr. Abdullah Maraş</h2>
              <div className="divider"></div>

              <p>
                Anadolu Üniversitesi Tıp Fakültesi&apos;nden mezun olduktan sonra Ruh Sağlığı ve Hastalıkları alanında uzmanlık eğitimini tamamlayan Dr. Maraş,
                kurmuş olduğu klinikte sadece psikiyatrik yetişkin (18+) görüşmelerini yürütmektedir.
              </p>
              <p style={{ marginTop: 'var(--space-4)' }}>
                Klinik yaklaşım felsefesinin merkezinde; hastalıkları değil o hastalığa tutulmuş "insanı ve yükünü" bireysel dinamikleriyle ele almak yatar. Tıbbiyede mucizevi vaatler ve kesin çözümler yerine; hastanın kendi direncine, çevresel faktörlerine ve yapısal potansiyeline uygun kanıta dayalı (terapötik ve farmakolojik) <strong>"bireysel psikiyatrik değerlendirme"</strong> felsefesine sadıktır.
              </p>
              <div className={styles.aboutStats} style={{ background: 'transparent', border: 'none', padding: 0, marginTop: 'var(--space-6)', flexDirection: 'row', flexWrap: 'wrap', gap: 'var(--space-8)' }}>
                <div className={styles.aboutStat}>
                  <div className={styles.aboutStatIcon}>🎓</div>
                  <div>
                    <strong>Tıp Eğitimi</strong>
                    <span>Anadolu Üniv. Tıp Fakültesi</span>
                  </div>
                </div>
                <div className={styles.aboutStat}>
                  <div className={styles.aboutStatIcon}>⚕️</div>
                  <div>
                    <strong>Uzmanlık Alanı</strong>
                    <span>Ruh Sağlığı (Psikiyatri)</span>
                  </div>
                </div>
              </div>
              <Link href="/hakkinda" className="btn btn--secondary" style={{ marginTop: 'var(--space-8)' }}>
                Doktor Biyografisini İncele
              </Link>
            </div>
            <div className={styles.aboutVisual}>
              <div className={styles.aboutQuote}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.15">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
                <blockquote>
                  &ldquo;Ruh sağlığı mücadelesi herkes için paket şablonlarla asla çözülemez. Güvenilir ve klinik tıbbi tedavi oluşturmadan önce, hastanın şemasını yargısız ve geniş açılı bir hekimlikle dinleyebilmek ilk hedefimizdir.&rdquo;
                </blockquote>
                <cite>Uzm. Dr. Abdullah Maraş</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className={`section ${styles.locationSection}`}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">✦ Konum</span>
            <h2>Eryaman İçinde Merkezi Erişim</h2>
            <p>
              Kliniğimiz Ankara Eryaman, Altay Mahallesi çevresinde konumlanmakta olup Etimesgut, Batıkent ve Optimum kavşağı nezdinde yüksek erişilebilirliğe sahiptir.
            </p>
          </div>
          <div className={styles.locationGrid}>
            <div className={`card ${styles.locationCard}`}>
              <div className={styles.locationCardIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3>Klinik Adresi</h3>
              <p>Altay Mahallesi, Eryaman<br />Etimesgut / Ankara</p>
            </div>
            <div className={`card ${styles.locationCard}`}>
              <div className={styles.locationCardIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3>Çalışma Saatleri</h3>
              <p>Sizlerin vaktine saygı göstermek adına <br /> randevulu (bireysel) kabul edilmektedir.</p>
            </div>
            <div className={`card ${styles.locationCard}`}>
              <div className={styles.locationCardIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <h3>Randevu Yönetimi</h3>
              <p>Online sistemimiz veya<br />ofis iletişim hatlarıyla planlama.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`section section--light ${styles.faqSection}`}>
        <div className="container container--narrow">
          <div className="section-header">
            <span className="section-badge">✦ Bilinmesi Gerekenler</span>
            <h2>Sık Sorulan Sorular</h2>
          </div>
          <FAQSection items={homeFAQ} />
          <div className="info-banner" style={{ marginTop: '2rem' }}>
            <strong>📌 Yasal Uyarı</strong>
            Web sayfası içerikleri herhangi bir teşhis koymak maksatlı değildir. Ruhsal hastalıklarda doğru tanı ve çözümler ancak ve ancak "psikiyatrist (tıp dooktoru)" tarafından gerçekleştirilen birebir (online veya yüz yüze) klinik muayeneler dahilinde ortaya çıkarılmaktadır.
          </div>
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
                  "addressLocality": "Eryaman, Etimesgut",
                  "addressRegion": "Ankara"
                },
                "availableService": {
                  "@type": "MedicalTest",
                  "name": "Psychiatric Evaluation"
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
                }
              },
              {
                "@type": "WebSite",
                "url": "https://drabdullahmaras.com/",
                "name": "Uzm. Dr. Abdullah Maraş",
                "description": "Ankara Eryaman'da Yetişkin Psikiyatrik Değerlendirme."
              },
              {
                "@type": "FAQPage",
                "mainEntity": homeFAQ.map((faq) => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Ana Sayfa",
                    "item": "https://drabdullahmaras.com/"
                  }
                ]
              }
            ]
          })
        }}
      />
    </>
  );
}
