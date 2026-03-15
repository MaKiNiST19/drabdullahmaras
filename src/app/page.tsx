import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import FAQSection from '@/components/FAQSection';
import ScrollReveal from '@/components/ScrollReveal';


export const metadata: Metadata = {
  title: 'Uzm. Dr. Abdullah Maraş | Ankara Eryaman Psikiyatrist',
  description: 'Ankara Eryaman’da 16 yaş üzeri ergen ve yetişkin psikiyatrik değerlendirme. Depresyon, anksiyete, panik atak, OKB, bipolar bozukluk, DEHB ve uyku sorunlarında bireysel görüşme süreci.',
  alternates: { canonical: 'https://drabdullahmaras.com/' },
  openGraph: {
    title: 'Uzm. Dr. Abdullah Maraş | Ankara Eryaman Psikiyatrist',
    description: 'Ankara Eryaman’da 16 yaş üzeri ergen ve yetişkin psikiyatrik değerlendirme. Depresyon, anksiyete, panik atak, OKB, bipolar bozukluk, DEHB ve uyku sorunlarında bireysel görüşme süreci.',
    type: 'website',
    locale: 'tr_TR',
    url: 'https://drabdullahmaras.com/'
  },
};

const homeFAQ = [
  {
    question: "Ankara'da psikiyatrist randevusu nasıl alınır?",
    answer: "Ankara'da Uzm. Dr. Abdullah Maraş klinik randevusu almak için web sitemiz üzerinde yer alan Randevu formunu kullanabilir ya da mesai saatleri içerisinde 0 312 504 53 99 numaralı doğrudan iletişim hattımızdan planlama yapabilirsiniz."
  },
  {
    question: "Eryaman'da psikiyatrist var mı?",
    answer: "Evet, Uzm. Dr. Abdullah Maraş Psikiyatri Kliniği, Ankara Eryaman Altay Mahallesi Orhan Bey Caddesi Ata Yıldız Plaza'da hizmet vermekte olup; 16 yaş üzeri ergen ve yetişkin yaş gruplarına yönelik tıbbi değerlendirme sunmaktadır. Bölge içerisinden Etimesgut ve Batıkent lokasyonlarına da oldukça kolay ve merkezi bir erişim ağında yer almaktadır."
  },
  {
    question: "Psikiyatrik görüşme ne kadar sürer?",
    answer: "Klinik psikiyatrik görüşmeler standart olarak bireyin detaylı anamnez (öykü) sürecini kapsayacak biçimde 40 ile 60 dakika aralığında sürdürülmektedir. Bu süreçte 16 yaş üzeri ergen ve yetişkin tüm danışanlar için yaş grubuna uygun bilimsel değerlendirme yöntemleri izlenir."
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

function HomePageHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.heroBand}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleTop}>Eryaman Psikiyatri Doktoru</span>
              <span className={styles.heroTitleMain}>Uzm. Dr. Abdullah Maraş</span>
              <span className={styles.heroTitleSmall}>Psikiyatrist</span>
            </h1>
            <p className={styles.heroDesc}>
              16 yaş üzeri ergen ve yetişkinlerde; depresyon, anksiyete, panik atak, OKB, bipolar bozukluk, DEHB ve uyku sorunlarında kanıta dayalı, bireysel psikiyatrik görüşme süreci.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/randevu" className={styles.btnPrimary}>
                Randevu Oluştur
              </Link>
              <Link href="/hizmetler" className={styles.btnTextLink}>
                Çalışma Alanlarını Görün
              </Link>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/dr-abdullah-maras.jpeg"
                alt="Uzm. Dr. Abdullah Maraş - Ankara Eryaman Psikiyatrist"
                width={420}
                height={530}
                sizes="(max-width: 991px) 100vw, 420px"
                className={styles.heroImage}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClinicBannerSection() {
  return (
    <section className={styles.clinicBannerSection}>
      <div className={styles.clinicBannerInner}>
        <Image
          src="/images/abdullah-maras-klinigi.jpg"
          alt="Uzm. Dr. Abdullah Maraş Psikiyatri Kliniği İç Mekan"
          width={1920}
          height={600}
          sizes="100vw"
          className={styles.clinicBannerImage}
          priority
          quality={85}
        />
        <div className={styles.clinicBannerOverlay}>
          <div className={styles.container}>
            <div className={styles.bannerOverlayContent}>
              <h2 className={`${styles.bannerOverlayTitle} serifFont`}>
                <ScrollReveal baseRotation={0} blurStrength={2} as="span">Ruhsal Zorlukları Anlamak</ScrollReveal>
              </h2>
              <div className={styles.bannerOverlayText}>
                <ScrollReveal baseOpacity={0} blurStrength={2} baseRotation={1} as="p">
                  Sürekli devam eden yorgunluk hissi, nedensiz bir iç huzursuzluğu, geceleri bölünen veya hiç gelmeyen uyku, yeni güne başlama isteksizliği veya olağan dikkat fonksiyonlarındaki bozulmalar zihinsel yükünüzün bir yansıması olabilir.
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function ClinicGallerySection() {
  return (
    <section className={`${styles.gallerySection} ${styles.sectionPadding}`}>
      <div className={styles.container}>
        <h2 className={`${styles.galleryTitle} serifFont`}><ScrollReveal baseRotation={0} blurStrength={2} as="span">Klinikten Kareler</ScrollReveal></h2>
        <div className={styles.galleryGrid}>
          <ScrollReveal containerClassName={styles.galleryCard} as="div" baseRotation={0} blurStrength={2} baseOpacity={0}>
            <div className={styles.galleryImageContainer}>
              <Image
                src="/images/ankara-psikiyatri-klinigi.jpg"
                alt="Uzm. Dr. Abdullah Maraş Psikiyatri Kliniği"
                width={600}
                height={450}
                className={styles.galleryPhoto}
              />
              <span className={styles.galleryCaption}>Klinik İç Görünüm</span>
            </div>
          </ScrollReveal>
          <ScrollReveal containerClassName={styles.galleryCard} as="div" baseRotation={0} blurStrength={2} baseOpacity={0}>
            <div className={styles.galleryImageContainer}>
              <Image
                src="/images/abdullah-maras-klinik.jpg"
                alt="Uzm. Dr. Abdullah Maraş Psikiyatri Kliniği"
                width={600}
                height={450}
                className={styles.galleryPhoto}
              />
              <span className={styles.galleryCaption}>Lobi</span>
            </div>
          </ScrollReveal>
          <ScrollReveal containerClassName={styles.galleryCard} as="div" baseRotation={0} blurStrength={2} baseOpacity={0}>
            <div className={styles.galleryImageContainer}>
              <Image
                src="/images/abdullah-maras-klinigi.jpg"
                alt="Uzm. Dr. Abdullah Maraş Psikiyatri Kliniği"
                width={600}
                height={450}
                className={styles.galleryPhoto}
              />
              <span className={styles.galleryCaption}>Klinik Detay</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function LocalAuthoritySection() {
  return (
    <section className={`${styles.localAuthoritySection} ${styles.sectionPadding}`}>
      <div className={styles.container}>
        <div className={styles.localLayout}>
          <div className={styles.localTextColumn}>
            <h2 className={`${styles.localTitle} serifFont`}><ScrollReveal baseRotation={0} blurStrength={4} as="span">Ankara Eryaman Psikiyatrist</ScrollReveal></h2>
            <p className={styles.leadText}>
              <ScrollReveal baseOpacity={0} blurStrength={2} baseRotation={1} as="span">Ruh sağlığı pratiğinde, insan zihninin ve bedeninin maruz kaldığı kompleks yükler salt anlık belirtiler üzerinden değil; bireyin yaşamöyküsü, stres faktörleri ve nörobiyolojik altyapısı ışığında bütüncül olarak incelenmelidir.</ScrollReveal> <strong className={styles.fontWeightOnly}>Ankara psikiyatrist</strong> arayışına giren bireyler için kliniğimiz, sıradanlaştırılmış etiketleyici teşhislerden ziyade nedenselliği ve klinik çözüm rotasını merkezine alan profesyonel bir yaklaşım sunmaktadır.
            </p>
            <p className={styles.normalText}>
              <strong className={styles.fontWeightOnly}>Eryaman psikiyatrist</strong> alanında faaliyet gösteren muayenehanemizde; 16 yaş üzeri ergen ve yetişkin hastalara destek verilmektedir. Depresyon, yaygın ve somatik anksiyete bozuklukları, OKB (Obsesif Kompulsif Bozukluk), panik atak, dikkat eksikliği (DEHB) ve tükenmişlik sendromu gibi ruh sağlığı alanlarında tıp bilimine dayalı hekimlik uygulanmaktadır.
            </p>
            <p className={styles.normalText}>
              Psikiyatrik şikayetlerin incelenmesi, herkese uyan tek tip kalıplarla gerçekleştirilemez. Kliniğimizin yaklaşımında, her danışan kendi sosyokültürel ve genetik gerçekliği içerisinde ele alınarak tıbbi bir <strong className={styles.fontWeightOnly}>psikiyatrik değerlendirme</strong> ve detaylı bir <strong className={styles.fontWeightOnly}>bireysel görüşme</strong> esasıyla planlanır. <strong className={styles.fontWeightOnly}>Batıkent psikiyatrist</strong> ve <strong className={styles.fontWeightOnly}>Etimesgut psikiyatrist</strong> ihtiyacı doğrultusunda kliniğimiz Ata Yıldız Plaza, Eryaman'da yer alır.
            </p>
          </div>
          <div className={styles.localImageColumn}>
            <ScrollReveal containerClassName={styles.localImageWrapper} as="div" baseRotation={0} blurStrength={2} baseOpacity={0}>
              <Image
                src="/images/eryaman-psikiyatri-doktoru-abdullah-maras.png"
                alt="Uzm. Dr. Abdullah Maraş - Ankara Eryaman Psikiyatrist"
                width={540}
                height={680}
                sizes="(max-width: 991px) 100vw, 540px"
                className={styles.localImage}
                quality={80}
              />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function EvaluationStepsSection() {
  const steps = [
    {
      title: "Ön Görüşme ve Öykü Alma",
      desc: "Başvuru nedeni, yaşanan ruhsal sancıların süresi ve yaşam fonksiyonlarına olan negatif etkileri detaylı bir anamnez bağlamında dinlenir. Ayrıntılı öykü alınır.",
      icon: "fa-user-plus",
      colorClass: styles.stepColor1
    },
    {
      title: "Klinik Değerlendirme",
      desc: "Öykü alımından sonra uzmanlık bilgisi dahilinde zihinsel durum muayenesi gerçekleştirilir. Bulgular bilimsel zeminine oturtulan tahlildir.",
      icon: "fa-stethoscope",
      colorClass: styles.stepColor2
    },
    {
      title: "Gerekli Yönlendirmeler",
      desc: "Klinik veriler ışığında hastanın fonksiyonlarını geri kazanması amacıyla bireyin anatomisine uygun farmakolojik veya terapötik planlamalar sunulur.",
      icon: "fa-wand-magic-sparkles",
      colorClass: styles.stepColor3
    },
    {
      title: "İzlem Planı",
      desc: "Belirlenen yaklaşımın bedende ve zihindeki geri dönüşleri periyodik görüşmelerle izlenir, gerekirse plan üzerinde klinik esnetmeler gerçekleştirilir.",
      icon: "fa-calendar-check",
      colorClass: styles.stepColor4
    }
  ];

  return (
    <section className={`${styles.stepsSection} ${styles.sectionPadding}`}>
      <div className={styles.container}>
        <div className={styles.stepsHeader}>
          <ScrollReveal baseRotation={0} blurStrength={2} baseOpacity={0}>
            <span className={styles.sectionLabel} style={{ textAlign: 'center', marginBottom: '1rem' }}>DEĞERLENDİRME SÜRECİ</span>
          </ScrollReveal>
          <ScrollReveal baseRotation={0} blurStrength={3} baseOpacity={0}>
            <h2 className={`${styles.stepsTitle} serifFont`}>
              Psikiyatrik Değerlendirme <span className="text-primary italic">Dört Aşamalı Süreç</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal baseRotation={0} blurStrength={2} baseOpacity={0}>
            <p className={styles.stepsDesc}>
              Ruh sağlığı yolculuğunuzda her adım, bilimsel standartlar ve bireysel ihtiyaçlarınız gözetilerek titizlikle planlanır.
            </p>
          </ScrollReveal>
        </div>

        <div className={styles.stepsRelativeContainer}>
          {/* Connecting Line (Desktop) */}
          <div className={styles.stepsConnectingLine} />

          <div className={styles.stepsGrid}>
            {steps.map((step, i) => (
              <ScrollReveal
                key={i}
                containerClassName={styles.stepCard}
                baseRotation={0}
                blurStrength={4}
                baseOpacity={0}
              >
                <div className={styles.stepIconContainer}>
                  <div className={`${styles.stepIconWrapper} ${step.colorClass}`}>
                    <i className={`fas ${step.icon} ${styles.stepIcon}`}></i>
                    <div className={styles.stepNumberBadge}>
                      {i + 1}
                    </div>
                  </div>
                </div>
                <h3 className={styles.stepTitle}>
                  {step.title}
                </h3>
                <p className={styles.stepDesc}>
                  {step.desc}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesGridSection() {
  return (
    <section className={`${styles.conditionsSection} ${styles.sectionPadding}`}>
      <div className={styles.container}>
        <span className={styles.sectionLabel} style={{ textAlign: 'center' }}>ÇALIŞMA ALANLARIMIZ</span>
        <h2 className={`${styles.conditionsTitle} serifFont`}>Ruh Sağlığı Değerlendirme Alanları</h2>
        <div className={styles.conditionsGrid}>
          <ScrollReveal containerClassName={styles.conditionCard} as="div" baseRotation={0} blurStrength={2} baseOpacity={0}>
            <div className={styles.conditionImageContainer}>
              <Image
                src="/images/service/depresyon.png"
                alt="Depresyon Değerlendirmesi"
                width={400}
                height={225}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1400px) 33vw, 25vw"
                className={styles.conditionImage}
                quality={75}
              />
            </div>
            <div className={styles.conditionContent}>
              <h3 className={styles.conditionTitle}>Depresyon</h3>
              <p className={styles.conditionDesc}>Karamsarlık, isteksizlik ve tamamen keyif alamama (anhedoni) haliyle gözlemlenen yaygın çökkünlük tablosunu inceler.</p>
              <Link href="/hizmetler/depresyon" className={styles.conditionLink}>İncele</Link>
            </div>
          </ScrollReveal>
          <ScrollReveal containerClassName={styles.conditionCard} as="div" baseRotation={0} blurStrength={2} baseOpacity={0}>
            <div className={styles.conditionImageContainer}>
              <Image
                src="/images/service/anksiyete.png"
                alt="Anksiyete Bozuklukları"
                width={400}
                height={225}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1400px) 33vw, 25vw"
                className={styles.conditionImage}
                quality={75}
              />
            </div>
            <div className={styles.conditionContent}>
              <h3 className={styles.conditionTitle}>Anksiyete Bozuklukları</h3>
              <p className={styles.conditionDesc}>Zihnin alarm halinde çalışması, olayları felaketleştirip bedeni kilitleyen evham sarmalının yönetimidir.</p>
              <Link href="/hizmetler/anksiyete" className={styles.conditionLink}>İncele</Link>
            </div>
          </ScrollReveal>
          <ScrollReveal containerClassName={styles.conditionCard} as="div" baseRotation={0} blurStrength={2} baseOpacity={0}>
            <div className={styles.conditionImageContainer}>
              <Image
                src="/images/service/panik-atak.png"
                alt="Panik Atak"
                width={400}
                height={225}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1400px) 33vw, 25vw"
                className={styles.conditionImage}
                quality={75}
              />
            </div>
            <div className={styles.conditionContent}>
              <h3 className={styles.conditionTitle}>Panik Atak</h3>
              <p className={styles.conditionDesc}>Aniden gelen nefes alamama, göğüs sıkışması ve korku nöbetlerinin bedende bıraktığı yoğun illüzyonel krizleri yönetir.</p>
              <Link href="/hizmetler/panik-atak" className={styles.conditionLink}>İncele</Link>
            </div>
          </ScrollReveal>
          <ScrollReveal containerClassName={styles.conditionCard} as="div" baseRotation={0} blurStrength={2} baseOpacity={0}>
            <div className={styles.conditionImageContainer}>
              <Image
                src="/images/service/okb.png"
                alt="Obsesif Kompulsif Bozukluk"
                width={400}
                height={225}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1400px) 33vw, 25vw"
                className={styles.conditionImage}
                quality={75}
              />
            </div>
            <div className={styles.conditionContent}>
              <h3 className={styles.conditionTitle}>Obsesif Kompulsif Bozukluk</h3>
              <p className={styles.conditionDesc}>İstemsiz gelen rahatsız edici obsesyonların ve ritüel zincirlerinin yetişkin hekimliği boyutunda kırılmasını işler.</p>
              <Link href="/hizmetler/okb" className={styles.conditionLink}>İncele</Link>
            </div>
          </ScrollReveal>
          <ScrollReveal containerClassName={styles.conditionCard} as="div" baseRotation={0} blurStrength={2} baseOpacity={0}>
            <div className={styles.conditionImageContainer}>
              <Image
                src="/images/service/bipolar.png"
                alt="Bipolar Bozukluk"
                width={400}
                height={225}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1400px) 33vw, 25vw"
                className={styles.conditionImage}
                quality={75}
              />
            </div>
            <div className={styles.conditionContent}>
              <h3 className={styles.conditionTitle}>Bipolar Bozukluk</h3>
              <p className={styles.conditionDesc}>Taşkın enerji patlamalarıyla çok derin dipsiz bir melankoli ağıyla sarsıldığı, döngüsel reaksiyon bozukluğudur.</p>
              <Link href="/hizmetler/bipolar-bozukluk" className={styles.conditionLink}>İncele</Link>
            </div>
          </ScrollReveal>
          <ScrollReveal containerClassName={styles.conditionCard} as="div" baseRotation={0} blurStrength={2} baseOpacity={0}>
            <div className={styles.conditionImageContainer}>
              <Image
                src="/images/service/dehb.png"
                alt="Dikkat Eksikliği ve Hiperaktivite Bozukluğu (DEHB)"
                width={400}
                height={225}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1400px) 33vw, 25vw"
                className={styles.conditionImage}
                quality={75}
              />
            </div>
            <div className={styles.conditionContent}>
              <h3 className={styles.conditionTitle}>Dikkat Eksikliği (DEHB)</h3>
              <p className={styles.conditionDesc}>İş ya da eğitim yaşamında ısrarla yaşanan dikkat kaybı, odak kalamama ve içsel dürtüselliğin yarattığı akademik sorunlardır.</p>
              <Link href="/hizmetler/eriskin-dehb" className={styles.conditionLink}>İncele</Link>
            </div>
          </ScrollReveal>
          <ScrollReveal containerClassName={styles.conditionCard} as="div" baseRotation={0} blurStrength={2} baseOpacity={0}>
            <div className={styles.conditionImageContainer}>
              <Image
                src="/images/service/uyku.png"
                alt="Uyku Bozuklukları"
                width={400}
                height={225}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1400px) 33vw, 25vw"
                className={styles.conditionImage}
                quality={75}
              />
            </div>
            <div className={styles.conditionContent}>
              <h3 className={styles.conditionTitle}>Uyku Bozuklukları</h3>
              <p className={styles.conditionDesc}>Dallanıp budaklanan uykusuzluk, sürekli yatakta dönme veya gün içinde oluşan yoğun enerji kayıplarının psikiyatrik boyutudur.</p>
              <Link href="/hizmetler/uyku-bozukluklari" className={styles.conditionLink}>İncele</Link>
            </div>
          </ScrollReveal>
          <ScrollReveal containerClassName={styles.conditionCard} as="div" baseRotation={0} blurStrength={2} baseOpacity={0}>
            <div className={styles.conditionImageContainer}>
              <Image
                src="/images/service/burnout.png"
                alt="Tükenmişlik Sendromu"
                width={400}
                height={225}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1400px) 33vw, 25vw"
                className={styles.conditionImage}
                quality={75}
              />
            </div>
            <div className={styles.conditionContent}>
              <h3 className={styles.conditionTitle}>Tükenmişlik Sendromu</h3>
              <p className={styles.conditionDesc}>Süregelen kurumsal eşitsizlikler veya toksik iş yükleri altında zihnin tamamen kendini işten soğutması (burnout) hissinin onarımıdır.</p>
              <Link href="/hizmetler/tukenmislik-sendromu" className={styles.conditionLink}>İncele</Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function DoctorBioSection() {
  return (
    <section className={`${styles.bioSection} ${styles.sectionPadding}`}>
      <div className={styles.container}>
        <div className={styles.bioGrid}>
          <div>
            <span className={styles.sectionLabel}><ScrollReveal baseRotation={0} blurStrength={2} as="span">YÖNETİCİ HEKİM</ScrollReveal></span>
            <h2 className={styles.bioTitle}><ScrollReveal baseRotation={0} blurStrength={2} as="span">Uzm. Dr. Abdullah Maraş</ScrollReveal></h2>
            <div className={styles.bioContent}>
              <ScrollReveal baseOpacity={0} blurStrength={2} baseRotation={1} as="p">
                Anadolu Üniversitesi Tıp Fakültesi altyapısından gelen Dr. Abdullah Maraş, tıp eğitimi sonrasında tamamladığı uzmanlık donanımını Ruh Sağlığı ve Hastalıkları alanına kanalize etmiştir. Klinik hekimlik süreci boyunca <strong>16 yaş üzeri ergen ve yetişkin hastalara destek vermeyi</strong> merkeze yerleştirmiş olup; tanısal işlemlerde hastayı dar kategorik etiketlere hapsetmekten kaçınan; genetik, kültürel ve çevresel doneleri bütünüyle harmanlayan felsefeyi destekler.
              </ScrollReveal>
              <ScrollReveal baseOpacity={0} blurStrength={2} baseRotation={1} as="p">
                Tıp dışı "100% garanti sözleri", iddialı mucizeler veya bilimsellikten uzak piyasa dilini asla bünyesinde ihtiva etmeyen bu yapı, doğrudan hastanın kendi güven sınırlarında yürüyen tıbbi ve analitik veriler üzerine inşa edilmiş dürüst yaklaşımı temsil eder.
              </ScrollReveal>
            </div>
          </div>
          <div>
            <ScrollReveal containerClassName={styles.bioCard} as="div" baseRotation={0} blurStrength={2} baseOpacity={0}>
              <h3 className={styles.bioCardTitle}>Klinik Odağı ve Uzmanlık</h3>
              <ul className={styles.bioList}>
                <li className={styles.bioListItem}>
                  <span className={styles.bioListText}><strong>Üniversite</strong>Anadolu Üniversitesi Tıp Fakültesi</span>
                </li>
                <li className={styles.bioListItem}>
                  <span className={styles.bioListText}><strong>Uzmanlık</strong>Ruh Sağlığı ve Hastalıkları</span>
                </li>
                <li className={styles.bioListItem}>
                  <span className={styles.bioListText}><strong>Hedef Yaş Grubu</strong>16 Yaş Üzeri Ergen ve Yetişkin Psikiyatrisi</span>
                </li>
                <li className={styles.bioListItem}>
                  <span className={styles.bioListText}><strong>Lokasyon</strong>Ankara Eryaman (Etimesgut)</span>
                </li>
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSectionComponent() {
  return (
    <section className={`${styles.faqSection} ${styles.sectionPadding}`}>
      <div className={styles.container} style={{ maxWidth: '800px' }}>
        <h2 className={`${styles.faqTitle} serifFont`}><ScrollReveal baseRotation={0} blurStrength={3} as="span">Sık Sorulan Sorular</ScrollReveal></h2>
        <p className={styles.faqDesc}><ScrollReveal baseRotation={0} blurStrength={2} as="span">Psikiyatri kliniğimize dair hastalarımızın merak ettikleri temel süreçler.</ScrollReveal></p>
        <FAQSection items={homeFAQ} />
      </div>
    </section>
  );
}

function SmallFooterCtaSection() {
  return (
    <section className={styles.smallCtaSection}>
      <div className={styles.smallCtaContainer}>
        <h2 className={`${styles.smallCtaTitle} serifFont`}>Randevu Planlamak İsterseniz</h2>
        <p className={styles.smallCtaDesc}>16 yaş üzeri ergen ve yetişkin ruh sağlığı değerlendirmesi için randevu taleplerinizi web sitemiz üzerinden iletebilirsiniz.</p>
        <Link href="/randevu" className={styles.smallCtaButton}>
          Randevu Formu
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      <HomePageHero />
      <ClinicBannerSection />
      <ClinicGallerySection />
      <LocalAuthoritySection />
      <EvaluationStepsSection />
      <ServicesGridSection />
      <DoctorBioSection />
      <FaqSectionComponent />
      <SmallFooterCtaSection />

      {/* SECTION 7 — STRUCTURED DATA BOOST */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://drabdullahmaras.com/#webpage",
                "url": "https://drabdullahmaras.com/",
                "name": "Uzm. Dr. Abdullah Maraş | Ankara Eryaman Psikiyatrist",
                "description": "Ankara Eryaman'da 16 yaş üzeri ergen ve yetişkin psikiyatrik değerlendirme. Depresyon, anksiyete, panik atak, OKB, bipolar bozukluk, DEHB ve uyku sorunlarında bireysel görüşme süreci.",
                "isPartOf": { "@id": "https://drabdullahmaras.com/#website" },
                "about": { "@id": "https://drabdullahmaras.com/#organization" },
                "inLanguage": "tr-TR"
              },
              {
                "@type": "FAQPage",
                "@id": "https://drabdullahmaras.com/#faq",
                "isPartOf": { "@id": "https://drabdullahmaras.com/#webpage" },
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
    </div>
  );
}
