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

const homeFAQ = [
  {
    question: "Ankara'da psikiyatrist randevusu nasıl alınır?",
    answer: "Ankara'da Uzm. Dr. Abdullah Maraş klinik randevusu almak için web sitemiz üzerinde yer alan Randevu formunu kullanabilir ya da mesai saatleri içerisinde +90 5XX XXX XX XX numaralı doğrudan iletişim hattımızdan planlama yapabilirsiniz."
  },
  {
    question: "Eryaman'da psikiyatrist var mı?",
    answer: "Evet, Uzm. Dr. Abdullah Maraş Yetişkin Psikiyatri Kliniği, Ankara Eryaman Altay Mahallesi mevkiinde hizmet vermekte olup, bölge içerisinden Etimesgut ve Batıkent lokasyonlarına da oldukça kolay ve merkezi bir erişim ağında yer almaktadır."
  },
  {
    question: "Psikiyatrik görüşme ne kadar sürer?",
    answer: "Yetişkin değerlendirmesine yönelik uygulanan klinik psikiyatrik görüşmeler standart olarak bireyin detaylı anamnez (öykü) sürecini kapsayacak biçimde 40 ile 60 dakika aralığında sürdürülmektedir."
  },
  {
    question: "İlk görüşmede ne yapılır?",
    answer: "İlk görüşme; başvuru nedeninizin detaylandırıldığı, günlük hayata yansıyan zorlukların incelendiği ve psikiyatrik öykünüzün tıbbi kılavuzlar sınırında yargısızca dinlendiği kapsamlı bir veri toplama seansıdır. Bu aşama sonrasında klinik teşhis ve hekim planlamasına geçilir."
  },
  {
    question: "Hangi durumlarda psikiyatriste başvurulmalı?",
    answer: "Uykusuzluğun kronikleştiği, isteksizlik ve yorgunluğun olağan bir yorgunluk halini aştığı (anhedoni), tekrarlayan panik nöbetlerin yaşandığı veya iş yerindeki stresin günlük fonksiyonları bloke ettiği tükenmişlik anlarında, tıbbi tanı ve hekimlik değerlendirmesi için mutlaka bir uzmana başvurulmalıdır."
  }
];

export default function Home() {
  return (
    <>
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
              alt="Uzm. Dr. Abdullah Maraş - Ankara Eryaman Psikiyatrist"
              width={480}
              height={580}
              className={styles.heroImage}
              priority
            />
          </div>
        </div>
      </section>

      {/* SECTION 1 — SEO POWER INTRO BLOCK */}
      <section className={styles.seoIntroSection}>
        <div className={`container ${styles.seoContent}`}>
          <h2 className={styles.sectionTitle}>Ankara Eryaman Psikiyatrist</h2>
          <p className={styles.textBlock}>
            Ruh sağlığı pratiğinde, insan zihninin ve bedeninin maruz kaldığı kompleks yükler salt anlık belirtiler üzerinden değil; bireyin yaşamöyküsü, stres faktörleri ve nörobiyolojik altyapısı ışığında bütüncül olarak incelenmelidir. <strong>Ankara psikiyatrist</strong> arayışına giren erişkin bireyler için kliniğimiz, sıradanlaştırılmış etiketleyici teşhislerden ziyade nedenselliği ve klinik çözüm rotasını merkezine alan profesyonel bir yaklaşım sunmaktadır.
          </p>
          <p className={styles.textBlock}>
            <strong>Eryaman psikiyatrist</strong> alanında faaliyet gösteren muayenehanemizde, sadece yetişkin (18+) danışan grubuna hizmet verilmekte olup depresyon, yaygın ve somatik anksiyete bozuklukları, OKB (Obsesif Kompulsif Bozukluk), panik atak, yetişkin dikkat eksikliği (Erişkin DEHB) ve tükenmişlik sendromu gibi ruh sağlığı alanlarında tıp bilimine dayalı hekimlik uygulanmaktadır.
          </p>
          <p className={styles.textBlock}>
            Psikiyatrik şikayetlerin incelenmesi, herkese uyan tek tip kalıplarla gerçekleştirilemez. Kliniğimizin yaklaşımında, her danışan kendi sosyokültürel ve genetik gerçekliği içerisinde ele alınarak tıbbi bir <strong>yetişkin psikiyatri</strong> ve detaylı bir <strong>bireysel değerlendirme</strong> esasıyla planlanır. <strong>Batıkent psikiyatrist</strong> ve özellikle <strong>Etimesgut psikiyatrist</strong> ihtiyacı doğrultusunda kliniğimiz bölge ağında, çevre ilçelerden dahi direkt ulaşılabilen merkezi bir noktaya (Altay Mahallesi) sahiptir. Uzm. Dr. Abdullah Maraş nezaretindeki tahlil görüşmelerinde; danışanın sınırlarına, mahremiyetine ve yapısal özelliklerine azami saygı gösterilerek güvenli ve yargısız bir klinik zemin sağlığı korumak en önemli ilkemizdir.
          </p>
        </div>
      </section>

      {/* SECTION 2 — EVALUATION PROCESS STRUCTURE */}
      <section className={styles.processSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Psikiyatrik Değerlendirme Süreci Nasıl İlerler?</h2>
            <p>Hastalıkları tek tipleştirmeden, bireyin dinamiklerine uygun tasarlanan profesyonel adımlar.</p>
          </div>
          <div className={styles.processGrid}>
            <div className={styles.processCard}>
              <div className={styles.processNumber}>01</div>
              <h3 className={styles.processTitle}>Ön Görüşme ve Öykü Alma</h3>
              <p className={styles.processDesc}>
                Psikiyatrik konsültasyonun temel ve vazgeçilmez aşamasıdır. Başvuru nedeni, yaşanan ruhsal sancıların süresi ve yaşam fonksiyonlarına olan negatif etkileri detaylı bir anamnez bağlamında dinlenir. Geçmiş tıbbi veriler, iş ve sosyal yaşam düzeni bütünüyle ele alınarak yargısız bir klinik analiz başlatılır.
              </p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.processNumber}>02</div>
              <h3 className={styles.processTitle}>Klinik Değerlendirme</h3>
              <p className={styles.processDesc}>
                Öykü alımından sonra uzmanlık bilgisi dahilinde zihinsel durum muayenesi gerçekleştirilir. Uykusuzluk, motivasyon çökkünlüğü veya bedensel kaygılar uluslararası tıp kılavuzlarının rasyonelliğinde süzgeçten geçirilir. Bu, hastanın yaşadığı bulguları bilimsel zemine oturtan yapılı bir tahlildir.
              </p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.processNumber}>03</div>
              <h3 className={styles.processTitle}>Gerekli Yönlendirmeler</h3>
              <p className={styles.processDesc}>
                Klinik veriler ışığında hastanın fonksiyonlarını geri kazanması amacıyla bilimsel limitler dahilinde yol haritası çizilir. Gerekli durumlarda (farmakolojik veya terapötik bazda) planlamalar sunulur. Ancak her sürecin anatomisi kişiden kişiye değişebilir özelliktedir, asla standardı dayatan katı mucize algısı satılmaz.
              </p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.processNumber}>04</div>
              <h3 className={styles.processTitle}>İzlem Planı</h3>
              <p className={styles.processDesc}>
                Belirlenen yaklaşımın bedende ve zihindeki geri dönüşleri periyodik görüşmelerle izlenir. Stresle başa çıkabilme seviyesi ve süreçteki ilerleyiş yakından ele alınarak gerektiği durumlarda plan üzerinde medikal veya klinik esnetmeler gerçekleştirilir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — CORE CONDITIONS SUMMARY BLOCK */}
      <section className={styles.conditionsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Yetişkin Ruh Sağlığı Alanları</h2>
            <p>Eryaman yetişkin psikiyatri kliniğimizde, uyguladığımız temel değerlendirme başlıkları.</p>
          </div>

          <div className={styles.conditionsGrid}>
            <div className={styles.conditionCard}>
              <h3>Depresyon</h3>
              <p>Zihnin enerji merkezini kapatan; uzun seyirli karamsarlık, isteksizlik ve tamamen keyif alamama (anhedoni) haliyle gözlemlenen yaygın çökkünlük tablosunu inceler. Sosyal yıkımın önüne geçmek asıl tahlilin rotasıdır.</p>
              <Link href="/hizmetler/depresyon" className={styles.conditionLink}>Depresyon detaylarını incele</Link>
            </div>
            <div className={styles.conditionCard}>
              <h3>Anksiyete Bozuklukları</h3>
              <p>Ortada somut bir tehlike ya da uyaran olmasa dahi zihnin alarm halinde çalışması, olayları felaketleştirerek bedenin kas katı kalmasına neden olan evham sarmalını tıbbi yolla kontrol etmeyi hedefler.</p>
              <Link href="/hizmetler/anksiyete" className={styles.conditionLink}>Anksiyete detaylarını incele</Link>
            </div>
            <div className={styles.conditionCard}>
              <h3>Panik Atak</h3>
              <p>Aniden gelen nefes alamama, göğüs sıkışması ve ani korku nöbetlerinin bedende bıraktığı yoğun illüzyonel krizleri yöneten, hastayı acil servislerden klinik analize çekmeyi barındıran değerlendirmedir.</p>
              <Link href="/hizmetler/panik-atak" className={styles.conditionLink}>Panik Atak detaylarını incele</Link>
            </div>
            <div className={styles.conditionCard}>
              <h3>Obsesif Kompulsif Bozukluk (OKB)</h3>
              <p>Kişinin isteği dışında kontrolsüzce gelen rahatsız edici obsesyonların (takıntı) ve o kaygıyı söndürmek uğruna tekrarlanan kompulsiyon (ritüel) zincirlerinin yetişkin hekimliği boyutunda kırılmasını işler.</p>
              <Link href="/hizmetler/okb" className={styles.conditionLink}>OKB detaylarını incele</Link>
            </div>
            <div className={styles.conditionCard}>
              <h3>Bipolar Bozukluk</h3>
              <p>Duygudurumun yüksek eksende taşkınlık ve enerji patlamalarıyla; alt eksende derin dipsiz bir melankoli ağıyla sarsıldığı, çok hassas izlem gerektiren döngüsel reaksiyon bozukluğunun klinik yönetimidir.</p>
              <Link href="/hizmetler/bipolar-bozukluk" className={styles.conditionLink}>Bipolar detaylarını incele</Link>
            </div>
            <div className={styles.conditionCard}>
              <h3>Erişkin DEHB</h3>
              <p>Yetişkin iş ya da eğitim yaşamında ısrarla yaşanan dikkat kaybı, odak kalamama, iş erteleme ve içsel dürtüselliğin zemin oluşturduğu sistem sorunlarının değerlendirme metotlarını kapsamaktadır.</p>
              <Link href="/hizmetler/eriskin-dehb" className={styles.conditionLink}>Erişkin DEHB detaylarını incele</Link>
            </div>
            <div className={styles.conditionCard}>
              <h3>Uyku Bozuklukları</h3>
              <p>Dallanıp budaklanan uykusuzluk, sürekli yatakta dönme veya gün içinde oluşan yoğun enerji kayıplarının (kalitesiz bedensel iyileşme), psikiyatrik dinamiklerde ele alındığı nörobiyolojik analiz bacağıdır.</p>
              <Link href="/hizmetler/uyku-bozukluklari" className={styles.conditionLink}>Uyku detaylarını incele</Link>
            </div>
            <div className={styles.conditionCard}>
              <h3>Tükenmişlik Sendromu</h3>
              <p>Süregelen kurumsal eşitsizlikler, toksik iş yükleri veya taşıması imkansız bakım stresi altında zihnin tamamen kendini fişten çekip (burnout) işten soğuma hissinin yarattığı sarsıntının profesyonel onarımıdır.</p>
              <Link href="/hizmetler/tukenmislik-sendromu" className={styles.conditionLink}>Tükenmişlik detaylarını incele</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — TRUST + CREDENTIAL DEPTH */}
      <section className={styles.doctorSection}>
        <div className={`container ${styles.doctorContent}`}>
          <h2 className={styles.sectionTitle}>Uzm. Dr. Abdullah Maraş</h2>
          <p className={styles.textBlock} style={{ textAlign: 'center' }}>
            Anadolu Üniversitesi Tıp Fakültesi altyapısından gelen Dr. Abdullah Maraş, tıp eğitimi sonrasında tamamladığı uzmanlık donanımını Ruh Sağlığı ve Hastalıkları alanına kanalize etmiştir. Klinik hekimlik süreci boyunca <strong>sadece yetişkin (adult) danışan odaklı</strong> psikiatrik değerlendirmeler sunmayı merkeze yerleştirmiş olup; tanısal işlemlerde hastayı dar kategorik etiketlere hapsetmekten kaçınan; genetik, kültürel ve çevresel doneleri "bütünsel bir yapıda" harmanlayan bir bakış felsefesini destekler.
          </p>
          <p className={styles.textBlock} style={{ textAlign: 'center', marginBottom: 0 }}>
            Tıp dışı "100% garanti sözleri, iddialı mucize garantileri" veya bilimsellikten uzak piyasa dilini asla bünyesinde ihtiva etmeyen bu klinik organizasyon, doğrudan hastanın kendi güven sınırlarında yürüyen; tıbbi ve analitik veriler üzerine inşa edilmiş dürüst, profesyonel klinik destek ilkesinden yürütülmektedir.
          </p>
        </div>
      </section>

      {/* SECTION 5 — LOCAL AUTHORITY FOOTER BLOCK */}
      <section className={styles.localFooterSection}>
        <div className={`container ${styles.localFooterContent}`}>
          <h2 className={styles.sectionTitle}>Ankara Eryaman’da Yetişkin Psikiyatrist</h2>
          <p className={styles.textBlock} style={{ textAlign: 'center', marginBottom: 0 }}>
            Ankara genelinde var olan karmaşık ve kalabalık ruh sağlığı merkezi yapılaşmalarından izole biçimde dizayn edilmiş olan kliniğimiz, Etimesgut sınırları içindeki <strong>Altay Mahallesi</strong> konumundadır. Kliniğin yalnızca 18 yaş ve üzeri yetişkin gruplarına hizmet edecek yapıda optimize edilmesiyle ortam; steril, nötr ve oldukça sakin kurgulanmıştır. Bu stratejik lokasyon imkanı sayesinde büyükşehir trafiğinden bağımsız olarak Eryaman, <strong>Batıkent</strong> ve merkez <strong>Etimesgut</strong> güzergahından çok nitelikli ve kolay ulaşım ağı kazanmıştır. Mahremiyet prensibini ilk sıraya yerleştirdiğimiz “Ankara Eryaman ve çevresinde yetişkinlere yönelik psikiyatrik değerlendirme hizmeti” çizgisi, danışanlarımızın konforlu hekim desteği sürecine ulaşmalarına kesintisiz olanak sağlamaktadır.
          </p>
        </div>
      </section>

      {/* SECTION 6 — FAQ (Homepage Level) */}
      <section className={styles.faqSection}>
        <div className="container container--narrow">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Sık Sorulan Sorular</h2>
            <p>Psikiyatri kliniğimize dair hastalarımızın merak ettikleri temel süreçler.</p>
          </div>
          <FAQSection items={homeFAQ} />
        </div>
      </section>

      {/* SECTION 7 — STRUCTURED DATA BOOST */}
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
                "availableService": {
                  "@type": "MedicalTest",
                  "name": "Psychiatric Evaluation"
                },
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
                "logo": "https://drabdullahmaras.com/logo.png",
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
                "telephone": "+90 5XX XXX XX XX", /* User's request to use place holder here from previous context */
                "priceRange": "$$",
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
              }
            ]
          })
        }}
      />
    </>
  );
}
