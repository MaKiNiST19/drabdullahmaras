import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
    title: 'Hakkında - Uzm. Dr. Abdullah Maraş | Eryaman Psikiyatrist',
    description:
        'Uzm. Dr. Abdullah Maraş hakkında. Anadolu Üniversitesi Tıp Fakültesi mezunu, Ruh Sağlığı ve Hastalıkları uzmanı. Ankara Eryaman\'da psikiyatri değerlendirmesi.',
    alternates: {
        canonical: 'https://www.drabdullahmaras.com.tr/hakkinda',
    },
};

const aboutFAQ = [
    {
        question: 'Uzm. Dr. Abdullah Maraş hangi üniversiteden mezundur?',
        answer:
            'Dr. Abdullah Maraş, Anadolu Üniversitesi Tıp Fakültesi\'nden tıp doktoru olarak mezun olmuştur. Ardından Ruh Sağlığı ve Hastalıkları alanında uzmanlık eğitimini tamamlayarak psikiyatri uzmanı unvanını almıştır.',
    },
    {
        question: 'Hangi alanlarda psikiyatrik değerlendirme yapılmaktadır?',
        answer:
            'Depresyon, anksiyete bozuklukları, panik atak, obsesif kompulsif bozukluk (OKB), dikkat eksikliği ve hiperaktivite bozukluğu (DEHB), bipolar bozukluk, uyku bozuklukları, cinsel bozukluklar, yetişkin ve 16 yaş üzeri ergen psikiyatrisi alanlarında kapsamlı değerlendirme yapılmaktadır.',
    },
    {
        question: 'Klinikte nasıl bir yaklaşım benimsenmektedir?',
        answer:
            'Bilimsel verilere ve güncel klinik kılavuzlara dayalı, etik çerçevede ve her bireyin özgünlüğüne saygı duyan bir yaklaşım benimsenmektedir. Her görüşme, bireyin ihtiyaçlarına özel olarak planlanmaktadır.',
    },
    {
        question: 'Klinik nerede yer almaktadır?',
        answer:
            'Klinik, Ankara\'nın Etimesgut ilçesine bağlı Eryaman bölgesinde, Altay Mahallesi çevresinde yer almaktadır. Batıkent ve çevre bölgelerden kolay ulaşım imkânı bulunmaktadır.',
    },
];

export default function HakkindaPage() {
    return (
        <>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroBg}>
                    <div className={styles.heroOrb}></div>
                </div>
                <div className={`container ${styles.heroContent}`}>
                    <span className="section-badge">✦ Hakkında</span>
                    <h1>Uzm. Dr. Abdullah Maraş</h1>
                    <p className={styles.heroSubtitle}>Ruh Sağlığı ve Hastalıkları (Psikiyatri) Uzmanı</p>
                    <div className="divider divider--center"></div>
                </div>
            </section>

            {/* Main Content */}
            <section className={`section ${styles.mainContent}`}>
                <div className="container">
                    <div className={styles.contentGrid}>
                        <div className={styles.contentMain}>
                            <h2>Eğitim ve Mesleki Geçmiş</h2>
                            <p>
                                Uzm. Dr. Abdullah Maraş, tıp eğitimini Anadolu Üniversitesi Tıp Fakültesi&apos;nde
                                tamamlamıştır. Tıp fakültesi eğitiminin ardından Ruh Sağlığı ve Hastalıkları
                                (Psikiyatri) alanında uzmanlık eğitimine başlamış ve bu alandaki eğitimini
                                başarıyla tamamlayarak psikiyatri uzmanı unvanını almıştır.
                            </p>
                            <p>
                                Uzmanlık eğitimi sürecinde, çeşitli ruhsal hastalıkların klinik değerlendirmesi,
                                farmakolojik yaklaşımlar ve psikoterapi yöntemleri üzerine kapsamlı deneyim
                                kazanmıştır. Bilimsel literatürü yakından takip eden Dr. Maraş, kanıta dayalı
                                tıp ilkelerini klinik pratiğine entegre etmektedir.
                            </p>

                            <h2>Uzmanlık Alanları</h2>
                            <p>
                                Dr. Abdullah Maraş, ruh sağlığı ve hastalıkları alanında geniş bir yelpazede
                                psikiyatrik değerlendirme gerçekleştirmektedir. Başlıca değerlendirme alanları
                                şunlardır:
                            </p>
                            <ul>
                                <li><Link href="/hizmetler/depresyon">Depresyon</Link> ve duygudurum bozuklukları</li>
                                <li><Link href="/hizmetler/anksiyete">Anksiyete bozuklukları</Link> ve yaygın kaygı</li>
                                <li><Link href="/hizmetler/panik-atak">Panik atak</Link> ve panik bozukluğu</li>
                                <li><Link href="/hizmetler/okb">Obsesif kompulsif bozukluk (OKB)</Link></li>
                                <li><Link href="/hizmetler/dikkat-eksikligi">Dikkat eksikliği ve hiperaktivite bozukluğu (DEHB)</Link></li>
                                <li><Link href="/hizmetler/bipolar-bozukluk">Bipolar bozukluk</Link></li>
                                <li><Link href="/hizmetler/uyku-bozukluklari">Uyku bozuklukları</Link></li>
                                <li><Link href="/hizmetler/cinsel-bozukluklar">Cinsel bozukluklar</Link></li>
                                <li><Link href="/hizmetler/yetiskin-psikiyatrisi">Yetişkin psikiyatrisi</Link></li>
                                <li><Link href="/hizmetler/16-yas-uzeri-ergen-psikiyatrisi">16 yaş üzeri ergen psikiyatri</Link></li>
                            </ul>

                            <h2>Klinik Yaklaşım ve Prensipler</h2>
                            <p>
                                Dr. Maraş, her bireyin özgün bir hikâyesi ve ihtiyaçları olduğu prensibinden
                                hareket etmektedir. Klinik değerlendirme sürecinde aşağıdaki temel ilkelere
                                bağlı kalınmaktadır:
                            </p>

                            <h3>Bilimsel Yaklaşım</h3>
                            <p>
                                Tüm değerlendirme ve yönlendirme süreçleri, güncel bilimsel verilere ve uluslararası
                                kabul görmüş klinik kılavuzlara dayalı olarak yürütülmektedir. Kanıta dayalı tıp
                                prensipleri, klinik kararların temelini oluşturmaktadır.
                            </p>

                            <h3>Etik Çerçeve</h3>
                            <p>
                                Mesleki etik kurallar ve hasta hakları, klinik pratiğin temel taşlarıdır.
                                Gizlilik, aydınlatılmış onam ve bireyin özerkliğine saygı ilkeleri titizlikle
                                uygulanmaktadır.
                            </p>

                            <h3>Bireysel Değerlendirme</h3>
                            <p>
                                Her birey farklıdır ve standart bir yaklaşım tüm bireyler için uygun olmayabilir.
                                Bu nedenle, kapsamlı bir klinik görüşme ile bireyin ihtiyaçları, yaşam koşulları
                                ve beklentileri dikkatlice değerlendirilmekte; bireysel bir planlama yapılmaktadır.
                            </p>

                            <h3>Bütüncül Bakış</h3>
                            <p>
                                Ruh sağlığı, biyolojik, psikolojik ve sosyal faktörlerin etkileşimiyle
                                şekillenmektedir. Bu nedenle değerlendirme sürecinde bireyin yaşamının tüm
                                boyutları göz önüne alınarak bütüncül bir bakış açısı benimsenmektedir.
                            </p>

                            <h2>Ankara Eryaman&apos;da Psikiyatri Hizmeti</h2>
                            <p>
                                Dr. Abdullah Maraş, Ankara&apos;nın Etimesgut ilçesine bağlı Eryaman bölgesinde,
                                Altay Mahallesi çevresinde hizmet vermektedir. Kliniğe Eryaman, Batıkent ve çevre
                                bölgelerden kolay ulaşım sağlanabilmektedir.
                            </p>
                            <p>
                                Randevu sistemiyle çalışan klinikte, her bireye yeterli süre ve özen ayrılmaktadır.
                                Görüşmelerde acele edilmeden, detaylı bir değerlendirme gerçekleştirilmesi
                                hedeflenmektedir.
                            </p>

                            <div className="info-banner">
                                <strong>📌 Bilgilendirme</strong>
                                Bu sayfadaki içerikler genel bilgilendirme amaçlıdır.
                                Bireysel tanı ve tedavi süreçleri için mutlaka uzman hekim değerlendirmesi gereklidir.
                                Bu web sitesi Sağlık Bakanlığı düzenlemelerine uygun olarak hazırlanmıştır.
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className={styles.sidebar}>
                            <div className={styles.profileCard}>
                                <div className={styles.profileIcon}>
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                </div>
                                <h3>Uzm. Dr. Abdullah Maraş</h3>
                                <p className={styles.profileSpecialty}>Psikiyatri Uzmanı</p>
                                <div className={styles.profileDivider}></div>
                                <div className={styles.profileInfo}>
                                    <div className={styles.profileInfoItem}>
                                        <span className={styles.profileLabel}>Uzmanlık</span>
                                        <span className={styles.profileValue}>Ruh Sağlığı ve Hastalıkları</span>
                                    </div>
                                    <div className={styles.profileInfoItem}>
                                        <span className={styles.profileLabel}>Eğitim</span>
                                        <span className={styles.profileValue}>Anadolu Üniversitesi Tıp Fakültesi</span>
                                    </div>
                                    <div className={styles.profileInfoItem}>
                                        <span className={styles.profileLabel}>Konum</span>
                                        <span className={styles.profileValue}>Eryaman, Ankara</span>
                                    </div>
                                    <div className={styles.profileInfoItem}>
                                        <span className={styles.profileLabel}>Bölge</span>
                                        <span className={styles.profileValue}>Altay Mah. / Etimesgut</span>
                                    </div>
                                </div>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%', marginTop: '1rem' }}>
                                    Randevu Al
                                </Link>
                            </div>

                            <div className={styles.sidebarCard}>
                                <h4>Değerlendirme Alanları</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/hizmetler/depresyon">Depresyon</Link></li>
                                    <li><Link href="/hizmetler/anksiyete">Anksiyete</Link></li>
                                    <li><Link href="/hizmetler/panik-atak">Panik Atak</Link></li>
                                    <li><Link href="/hizmetler/okb">OKB</Link></li>
                                    <li><Link href="/hizmetler/dikkat-eksikligi">DEHB</Link></li>
                                    <li><Link href="/hizmetler/bipolar-bozukluk">Bipolar Bozukluk</Link></li>
                                    <li><Link href="/hizmetler/uyku-bozukluklari">Uyku Bozuklukları</Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section section--light">
                <div className="container container--narrow">
                    <div className="section-header">
                        <span className="section-badge">✦ Sık Sorulan Sorular</span>
                        <h2>Doktor Hakkında Merak Edilenler</h2>
                    </div>
                    <FAQSection items={aboutFAQ} />
                </div>
            </section>

            {/* Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: aboutFAQ.map((faq) => ({
                            "@type": "Question",
                            name: faq.question,
                            acceptedAnswer: { "@type": "Answer", text: faq.answer },
                        })),
                    }),
                }}
            />
        </>
    );
}
