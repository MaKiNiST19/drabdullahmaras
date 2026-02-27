import Link from 'next/link';
import styles from './page.module.css';
import FAQSection from '@/components/FAQSection';

const services = [
  {
    slug: 'depresyon',
    title: 'Depresyon',
    desc: 'Süregelen karamsarlık, enerji kaybı ve isteksizlik gibi belirtilerin değerlendirilmesi ve bireysel destek planlaması.',
    icon: '🌧️',
  },
  {
    slug: 'anksiyete',
    title: 'Anksiyete Bozuklukları',
    desc: 'Yaygın kaygı, endişe ve huzursuzluk durumlarına yönelik klinik değerlendirme ve yönetim süreçleri.',
    icon: '🌀',
  },
  {
    slug: 'panik-atak',
    title: 'Panik Atak',
    desc: 'Ani korku nöbetleri, çarpıntı ve nefes darlığı gibi belirtilerin değerlendirilmesi.',
    icon: '⚡',
  },
  {
    slug: 'okb',
    title: 'Obsesif Kompulsif Bozukluk',
    desc: 'Tekrarlayan düşünce ve davranış kalıplarının klinik değerlendirmesi.',
    icon: '🔄',
  },
  {
    slug: 'dikkat-eksikligi',
    title: 'Dikkat Eksikliği (DEHB)',
    desc: 'Dikkat dağınıklığı, odaklanma güçlüğü ve dürtüsellik belirtilerinin değerlendirmesi.',
    icon: '🎯',
  },
  {
    slug: 'bipolar-bozukluk',
    title: 'Bipolar Bozukluk',
    desc: 'Duygudurum dalgalanmaları ve enerji değişimlerinin klinik değerlendirmesi.',
    icon: '🔃',
  },
  {
    slug: 'uyku-bozukluklari',
    title: 'Uyku Bozuklukları',
    desc: 'Uykusuzluk, aşırı uyku ve uyku kalitesi sorunlarına yönelik değerlendirme.',
    icon: '🌙',
  },
  {
    slug: 'yetiskin-psikiyatrisi',
    title: 'Yetişkin Psikiyatrisi',
    desc: 'Yetişkin dönemine özgü ruh sağlığı sorunlarının kapsamlı değerlendirmesi.',
    icon: '🧠',
  },
  {
    slug: 'cocuk-ve-ergen-psikiyatrisi',
    title: 'Çocuk ve Ergen Psikiyatrisi',
    desc: 'Gelişim dönemine uygun psikiyatrik değerlendirme ve aile rehberliği.',
    icon: '🌱',
  },
];

const homeFAQ = [
  {
    question: 'Psikiyatrist ile psikolog arasındaki fark nedir?',
    answer:
      'Psikiyatristler tıp fakültesi mezunu olup uzmanlık eğitimi almış hekimlerdir ve gerektiğinde ilaç tedavisi uygulayabilirler. Psikologlar ise psikoloji lisans eğitimi almış profesyonellerdir ve genellikle psikoterapi yöntemleri ile çalışırlar. Her iki meslek grubu da ruh sağlığı alanında önemli rol üstlenmektedir.',
  },
  {
    question: "Eryaman'da psikiyatri randevusu nasıl alınır?",
    answer:
      "Ankara Eryaman'da Uzm. Dr. Abdullah Maraş'tan randevu almak için web sitemiz üzerindeki randevu formunu doldurabilir veya iletişim sayfamızdaki bilgileri kullanarak doğrudan ulaşabilirsiniz. Altay Mahallesi çevresinde kolay erişim imkânı sunulmaktadır.",
  },
  {
    question: 'Psikiyatrik değerlendirme ne kadar sürer?',
    answer:
      'İlk psikiyatrik değerlendirme görüşmesi genellikle 40-60 dakika arasında sürmektedir. Bu sürede detaylı bir klinik görüşme yapılarak bireyin ruh sağlığı durumu hakkında kapsamlı bir değerlendirme gerçekleştirilir.',
  },
  {
    question: 'İlk görüşmede ne konuşulur?',
    answer:
      'İlk görüşmede mevcut yakınmalarınız, geçmiş sağlık öykünüz, aile geçmişiniz ve günlük yaşamınızı etkileyen durumlar hakkında detaylı bir görüşme yapılır. Bu bilgiler bireysel değerlendirme sürecinin temelini oluşturur.',
  },
  {
    question: 'Psikiyatriste gitmek utanılacak bir şey mi?',
    answer:
      'Ruh sağlığı, genel sağlığın ayrılmaz bir parçasıdır. Tıpkı fiziksel bir rahatsızlıkta hekime başvurulması gibi, ruhsal zorluklar yaşandığında da uzman desteği almak doğal ve önemli bir adımdır. Erken dönemde alınan profesyonel destek, yaşam kalitesinin korunmasına katkı sağlayabilir.',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroOrb1}></div>
          <div className={styles.heroOrb2}></div>
          <div className={styles.heroOrb3}></div>
        </div>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroText}>
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot}></span>
              Ankara – Eryaman / Altay Mahallesi
            </div>
            <h1 className={styles.heroTitle}>
              Ruh Sağlığınız İçin <span className="gradient-text">Uzman Psikiyatri</span> Değerlendirmesi
            </h1>
            <p className={styles.heroDesc}>
              Uzm. Dr. Abdullah Maraş, Ankara Eryaman&apos;da ruh sağlığı ve hastalıkları alanında
              bilimsel, etik ve bireysel yaklaşımla psikiyatrik değerlendirme sunmaktadır.
              Anadolu Üniversitesi Tıp Fakültesi mezunu olup, Ruh Sağlığı ve Hastalıkları
              uzmanlık belgesine sahiptir.
            </p>
            <div className={styles.heroActions}>
              <Link href="/randevu" className="btn btn--primary btn--lg" id="hero-randevu-btn">
                Randevu Al
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </Link>
              <Link href="/hizmetler" className="btn btn--secondary btn--lg" id="hero-hizmetler-btn">
                Değerlendirme Alanları
              </Link>
            </div>
            <div className={styles.heroCredentials}>
              <div className={styles.credential}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>Tıp Doktoru Diploması</span>
              </div>
              <div className={styles.credential}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>Psikiyatri Uzmanlık Belgesi</span>
              </div>
              <div className={styles.credential}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>Anadolu Üniversitesi Tıp Fak.</span>
              </div>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroCard}>
              <div className={styles.heroCardIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
                  <path d="M12 6v4m0 0v4m0-4h4m-4 0H8" />
                  <circle cx="12" cy="12" r="7" strokeDasharray="3 3" opacity="0.3" />
                </svg>
              </div>
              <h3 className={styles.heroCardTitle}>Uzm. Dr. Abdullah Maraş</h3>
              <p className={styles.heroCardSubtitle}>Ruh Sağlığı ve Hastalıkları Uzmanı</p>
              <div className={styles.heroCardDivider}></div>
              <div className={styles.heroCardInfo}>
                <div className={styles.heroCardInfoItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Eryaman, Ankara</span>
                </div>
                <div className={styles.heroCardInfoItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>Randevu ile hizmet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Important Section */}
      <section className={`section section--light ${styles.whySection}`}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">✦ Bilgilendirme</span>
            <h2>Neden Psikiyatri Değerlendirmesi Önemlidir?</h2>
            <p>
              Ruh sağlığı, yaşam kalitesinin temel taşlarından biridir. Erken dönemde profesyonel
              değerlendirme, bireyin günlük yaşam fonksiyonlarını koruyabilmesi açısından önemli
              bir adımdır.
            </p>
          </div>
          <div className={styles.whyGrid}>
            <div className={`card ${styles.whyCard}`}>
              <div className={styles.whyCardIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4m0-4h.01" />
                </svg>
              </div>
              <h3>Erken Değerlendirme</h3>
              <p>
                Ruhsal zorlukların erken fark edilmesi ve profesyonel değerlendirmeyle
                ele alınması, bireyin yaşam kalitesinin korunmasına destek sağlayabilir.
                Ankara Eryaman&apos;da uzman psikiyatrik değerlendirme hizmeti sunulmaktadır.
              </p>
            </div>
            <div className={`card ${styles.whyCard}`}>
              <div className={styles.whyCardIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3>Bireysel Yaklaşım</h3>
              <p>
                Her birey farklıdır ve ruh sağlığı süreçleri bireysel değerlendirme
                gerektirir. Klinik görüşme, bireyin özgün ihtiyaçlarını anlamak ve
                uygun yönlendirmeler yapabilmek için temel adımdır.
              </p>
            </div>
            <div className={`card ${styles.whyCard}`}>
              <div className={styles.whyCardIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12l2 2 4-4" />
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
                </svg>
              </div>
              <h3>Bilimsel Çerçeve</h3>
              <p>
                Psikiyatrik değerlendirme, güncel bilimsel verilere ve klinik
                kılavuzlara dayalı olarak gerçekleştirilir. Etik ilkeler ve
                kanıta dayalı yaklaşım temel prensiplerdir.
              </p>
            </div>
            <div className={`card ${styles.whyCard}`}>
              <div className={styles.whyCardIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3>Gizlilik ve Güven</h3>
              <p>
                Tüm görüşmeler mesleki gizlilik ilkeleri çerçevesinde
                yürütülmektedir. Güvenli ve yargısız bir ortamda psikiyatrik
                değerlendirme yapılmaktadır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">✦ Değerlendirme Alanları</span>
            <h2>Psikiyatrik Değerlendirme Hizmetleri</h2>
            <p>
              Eryaman&apos;da ruh sağlığı alanında kapsamlı psikiyatrik değerlendirme sunulmaktadır.
              Her alan için detaylı bilgilendirme sayfalarını inceleyebilirsiniz.
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
                  Detaylı Bilgi
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14m-7-7 7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className={`section section--gradient ${styles.aboutPreview}`}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent}>
              <span className="section-badge">✦ Uzman Hekim</span>
              <h2>Uzm. Dr. Abdullah Maraş</h2>
              <div className="divider"></div>
              <p className={styles.aboutLead}>
                Ruh Sağlığı ve Hastalıkları (Psikiyatri) Uzmanı
              </p>
              <p>
                Anadolu Üniversitesi Tıp Fakültesi&apos;nden mezun olan Dr. Abdullah Maraş,
                Ruh Sağlığı ve Hastalıkları alanında uzmanlık eğitimini tamamlamıştır.
                Ankara Eryaman, Altay Mahallesi çevresinde hizmet veren kliniğinde,
                bilimsel ve etik çerçevede bireysel psikiyatrik değerlendirme
                gerçekleştirmektedir.
              </p>
              <p>
                Yetişkin psikiyatrisi başta olmak üzere, çocuk ve ergen ruh sağlığı alanında
                da değerlendirme yapan Dr. Maraş, her bireyin özgün ihtiyaçlarına odaklanan
                bir klinik yaklaşım benimsemektedir.
              </p>
              <div className={styles.aboutStats}>
                <div className={styles.aboutStat}>
                  <div className={styles.aboutStatIcon}>🎓</div>
                  <div>
                    <strong>Anadolu Üniversitesi</strong>
                    <span>Tıp Fakültesi</span>
                  </div>
                </div>
                <div className={styles.aboutStat}>
                  <div className={styles.aboutStatIcon}>📋</div>
                  <div>
                    <strong>Uzmanlık Belgesi</strong>
                    <span>Ruh Sağlığı ve Hastalıkları</span>
                  </div>
                </div>
                <div className={styles.aboutStat}>
                  <div className={styles.aboutStatIcon}>📍</div>
                  <div>
                    <strong>Eryaman, Ankara</strong>
                    <span>Altay Mahallesi</span>
                  </div>
                </div>
              </div>
              <Link href="/hakkinda" className="btn btn--secondary" id="about-detail-btn">
                Detaylı Bilgi
              </Link>
            </div>
            <div className={styles.aboutVisual}>
              <div className={styles.aboutQuote}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
                <blockquote>
                  &ldquo;Ruh sağlığı değerlendirmesinde temel ilkem; bilimsel veriye dayalı,
                  etik çerçevede ve her bireyin özgünlüğüne saygı duyan bir klinik yaklaşım benimsemektir.&rdquo;
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
            <h2>Eryaman&apos;da Kolay Erişim</h2>
            <p>
              Kliniğimiz Ankara Eryaman, Altay Mahallesi çevresinde yer almaktadır.
              Etimesgut ve Batıkent bölgelerinden kolay ulaşım imkânı sunulmaktadır.
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
              <h3>Adres</h3>
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
              <p>Hafta içi: 09:00 – 17:00<br />Randevu ile hizmet verilmektedir</p>
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
              <h3>Randevu</h3>
              <p>Online randevu formu veya<br />telefonla iletişim</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`section section--light ${styles.faqSection}`}>
        <div className="container container--narrow">
          <div className="section-header">
            <span className="section-badge">✦ Sık Sorulan Sorular</span>
            <h2>Merak Edilenler</h2>
            <p>
              Psikiyatri değerlendirmesi hakkında sık sorulan sorular ve yanıtları.
            </p>
          </div>
          <FAQSection items={homeFAQ} />
          <div className="info-banner" style={{ marginTop: '2rem' }}>
            <strong>📌 Bilgilendirme</strong>
            Bu sayfadaki içerikler genel bilgilendirme amaçlıdır.
            Bireysel tanı ve tedavi süreçleri için mutlaka uzman hekim değerlendirmesi gereklidir.
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBg}>
          <div className={styles.ctaOrb1}></div>
          <div className={styles.ctaOrb2}></div>
        </div>
        <div className={`container ${styles.ctaContent}`}>
          <h2>Profesyonel Psikiyatrik Değerlendirme İçin</h2>
          <p>
            Ankara Eryaman&apos;da, bilimsel ve etik çerçevede ruh sağlığı değerlendirmesi
            için randevu alabilirsiniz.
          </p>
          <div className={styles.ctaActions}>
            <Link href="/randevu" className="btn btn--primary btn--lg" id="cta-randevu-btn">
              Randevu Al
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
            </Link>
            <Link href="/iletisim" className="btn btn--secondary btn--lg" id="cta-iletisim-btn">
              İletişim
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: homeFAQ.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}
