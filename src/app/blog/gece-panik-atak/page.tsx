import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Gece Panik Atak Neden Olur? Uykuda Çarpıntı | Uzm. Dr. Abdullah Maraş',
    description:
        'Gece uykudan çarpıntıyla uyanma durumu (Nocturnal Panic Attack) neden olur? Uyurken panik atak geçirmek, gece terlemesi ve uykusuzluk ilişkisi.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/gece-panik-atak' },
    openGraph: {
        title: 'Gece Panik Atak Neden Olur? Uykudan Neden Sıçrarız?',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Gece uykudan çarpıntıyla uyanmak kalp krizi midir?',
        answer: 'Gece çarpıntıyla nefes nefese uyanmak panik atağın ciddi bir yansıması ("Nocturnal Panic Attack") olabilir. Ancak bu şikayet ilk kez oluyorsa elbette kardiyolojik/akciğer temelli acil kontrol şarttır.',
    },
    {
        question: 'Uyurken rüya görmediğim halde neden panik oldum?',
        answer: 'Gece panik atakları kabuslara veya kötü rüyalara bağlı olmak zorunda değildir. Çoğunlukla oksijen / karbondioksit dengesindeki bedensel uyarılara beynin amigdalasının verdiği uyku sırasındaki aşırı reaksiyondur.',
    },
    {
        question: 'Panik atak uyku apnesiyle (nefes durması) karışır mı?',
        answer: 'Evet. Uyku apnesi (horlama ve nefes kesilmesi) yüzünden beyin oksijensiz kaldığında bedeni uyandırmak için adrenalin pompalar. Bu durum panik atağı tetikleyebilir veya kendisi panik sanılarak yanlış değerlendirilebilir.',
    },
    {
        question: 'Gece panik ataktan sonra nasıl uyurum?',
        answer: 'Pek çok hasta saatlerce süren o sersemlik/titreme nedeniyle ve "uyursam yine gelir" korkusu yüzünden bir daha uyuyamaz. Bu durum ciddi uyku bozukluklarına kapı aralamaktadır.',
    },
    {
        question: 'Ankara Eryaman’da gece panik atakları (Noktürnal Panik) için kimden yardım almalıyım?',
        answer: 'Kardiyolog ve göğüs hastalıkları değerlendirmesinde organik bir hastalık (kalp, astım vs) bulunamadıysa Uzm. Dr. Abdullah Maraş / Psikiyatri kliniğimizden tıbbi değerlendirme randevusu alabilirsiniz.',
    },
];

export default function GecePanikAtakBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/panik-atak">Panik Atak</Link><span>/</span>
                        <span>Gece Uykuda Atak</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Panik Atak</span>
                        <time dateTime="2026-03-10">10 Mart 2026</time>
                        <span>•</span><span>8 dk okuma</span>
                    </div>
                    <h1>Gece Panik Atak (Nocturnal Panik) Neden Olur? Uykuda Çarpıntı</h1>
                    <p className={styles.heroDesc}>
                        En sakin, en güvenli olduğunuzu düşündüğünüz an: Uykunuzun en derinliği.
                        Fakat birden bire, ölümcül bir korku, nefessizlik veya "kalbim bir anda fırlayacak gibi oluyor"
                        hissiyle sıçrıyorsunuz.
                    </p>
                    <div className={styles.author}>
                        <div className={styles.authorIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <div><strong>Uzm. Dr. Abdullah Maraş</strong><span>Ruh Sağlığı (Psikiyatrist) Uzmanı</span></div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.articleGrid}>
                        <article className={styles.article}>

                            <p className={styles.lead}>
                                Gün içi stresi veya korkuları anlamlandırabiliriz; çünkü dışarıda bizi yoran mesai, patron,
                                trafik vardır. Ancak tüm bedenin kasılmalarının gevşediği "iyileşme evremiz" (Uyku) içinde
                                kopan fırtına — yani <Link href="/hizmetler/panik-atak">Noktürnal Panik Atak</Link> — bireyi
                                kendi yatağına dahi "düşman", "güvensiz" hissettiren psikiyatrik bir tablo yaratmaktadır.
                            </p>

                            <h2>Gece Uykudan Çarpıntıyla Uyanma Durumu Ne İfade Eder?</h2>
                            <p>
                                Hastalar panikle uyandıklarında kendilerini "boğuluyor", göğüslerinin üzerinde devasa bir taş
                                oturuyor veyahut 100 metreden koşup gelmişçesine terler içinde bulurlar. Gündüz gerçekleşen
                                <Link href="/blog/panik-atak-belirtileri">panik atak belirtilerine</Link> kıyasla, gece atağı bilinç kapalı
                                yakaladığı için <Link href="/blog/panik-atak-oldurur-mu">"Ölecekmişim hissi / Ölüm korkusunu"</Link>
                                katbekat ağır, tam anlamıyla karanlık bir çaresizlikte sunar.
                            </p>

                            <h2>Kabus mu Yoksa Organik Neden mi? (Uyku Apnesi Fakörü)</h2>
                            <p>
                                Gece paniği çoğu zaman bir aksiyon filmi veya kabus sonrası uyanmayla <strong>karıştırılmamalıdır</strong>.
                                Birey çoğu zaman son derece normal, hatta rüyasız bir uyku döngüsünden direkt olarak devasa bir korku
                                dalgalanmasıyla sıçrar. Altında yatan asıl neden (psikolojik olarak birikimi hariç), tıbben
                                <strong>karbondioksit (CO2) duyarlılığı</strong> ya da uyku esnasındaki nefes durma senaryolarıdır.
                            </p>
                            <ul>
                                <li>Bedende horlamaya / kiloya bağlı kısa süreli <strong>Uyku Apnesi (Nefes kesintisi)</strong> olduğunda, beyin oksijensiz kaldığı için "Uyan, Yoksa Öleceksin!" komutuyla sistemi adrenalin havuzuna atar.</li>
                                <li>Bu uyanış bir panik atak tablosudur.</li>
                            </ul>

                            <h2>Beynin Yüksek Alarm Hassasiyeti (Amigdala ve Uyku)</h2>
                            <p>
                                Peki gündüz <Link href="/hizmetler/anksiyete">bir anksiyete, yani yaygın kaygı durumu</Link> var mıydı?
                                Evet, çoğunlukla sürekli kaygı yaşayan, gün boyu dertlere, takıntılara (OKB) "gardını alan" beynimiz;
                                gece gard düştüğünde bilinçaltındaki korku kutularını açar. Vücudun dinlenmesini reddeden
                                Amigdala (korku merkezi), en ufak kas seğirmesini / gaz sıkışmasını sahte bir "Felaket" alarmiyle
                                yorumlayarak hastayı deşarjın (Noktürnal Panik Atağın) kucağına uyandırır.
                            </p>

                            <h2>Uyku Bozukluklarına Olan Dominosu Etkisi</h2>
                            <p>
                                Gece 03.00'te uyanıp 15 dakikalık bir (hiç bitmeyecek gibi gelen o o kriz atlatıldığında)
                                titreme sonrası birey sırılsıklamdır. Lakin en kötüsü, "Yeniden uyursam yine nefesim kesilir de
                                ölür müyüm?" ya da "Kalp krizi geçirip uykumda gider miyim?" beklentisidir (Beklenti Evhamı).
                                İşte bu his aylarca süren inatçı bir <Link href="/hizmetler/uyku-bozukluklari">uykuna dalamama veya uyku kalitesi bozukluklarına </Link>
                                evrilip, gün boyu insanı yorgun ve <Link href="/hizmetler/depresyon">çökkün / bitik hissettirecek</Link> zincirleme etki yaratır.
                            </p>

                            <h2>Uzman Psikiyatrist Değerlendirmesi Neden Kritiktir?</h2>
                            <p>
                                Gündüz size açık olan sokaklar, yardım isteyeceğiniz komşular varken; gece 04.00'te bu hisleri ve
                                baskıyı hissetmek ağır bir tramvadır. Hastanın yalnız başına çektiği uykusuz geceler yerine;
                                Ankara Eryaman (Altay Mh.)'nda bulunan kliniğimizde, kalp muayenesi temiz çıkmış bireyler için:
                            </p>
                            <ul>
                                <li>Gece paniklerine (Noktürnal) dair ayırıcı klinik dinleme,</li>
                                <li>Uyku tetikleyici unsurların (apne mi, kafein/alışkanlık eğilimi mi, ağır YAB -yaygın anksiyete- mi) yapılandırılması,</li>
                                <li>Hastalığın kişisel, etik sınırlarında biyolojik veya terapi yol haritasına konulması,</li>
                            </ul>
                            <p>
                                işlemleri titizlikle Uzm. Dr. Abdullah Maraş tarafından bireye sunulmaktadır. Çözümsüz zannettiğiniz
                                uykuyu bölen çarpıntılarınızla yüzleşip rahatlamak adına profesyonel süreçlere başvuru düşünülmelidir.
                            </p>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Bilgilendirme Notu</strong>
                                Bu metinler tedavi yöntemine veya ("%100 garantili sonuçlu" gibi) uygunsuz vaatlere yer vermez.
                                Organik (fiziksel-solunumsal) nedenler ekarte edilmeden "kesin panik ataktır"
                                teşhisi internet blogları üzerinden konulmamalı, daima bir sağlık kurumunda doktor nezaretine gidilmelidir.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <h3>Uykusuz Gecelere Boyun Eğmeyin</h3>
                                <p>Eryaman kliniğimizdeki psikiyatrist değerlendirme seansıyla bu uykusuz ve kaygılı döngüyü anlamlandırmak mümkündür.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Değerlendirme Al →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Değerlendirme Takvimi</h3>
                                <p>Noktürnal panik süreçleriniz için klinik desteği (Ankara)</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Doktor Randevusu Al</Link>
                            </div>

                            <div className={styles.sidebarCard}>
                                <h4>Diğer Atak & Kaygı Temaları</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/hizmetler/uyku-bozukluklari">Uyku Bozukluklarında Analiz</Link></li>
                                    <li><Link href="/hizmetler/panik-atak">Panik Atak Pillar Sayfası</Link></li>
                                    <li><Link href="/blog/panik-atak-kac-dakika-surer">Ataklar Ne Kadar Sürer?</Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* FAQ Schema */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org", "@type": "FAQPage",
                    mainEntity: faqItems.map(f => ({
                        "@type": "Question", name: f.question,
                        acceptedAnswer: { "@type": "Answer", text: f.answer },
                    })),
                })
            }} />
        </>
    );
}
