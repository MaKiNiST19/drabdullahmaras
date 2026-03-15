import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import styles from '../depresyon-belirtileri/page.module.css';

export const metadata: Metadata = {
    title: 'Panik Atak Öldürür mü? Boğulur muyum veya Çıldırır mıyım? | Uzm. Dr. Abdullah Maraş',
    description:
        'Panik atak öldürür mü? Ölüm korkusu, fırlayacak gibi atan kalp ve boğulma hislerinin fizyolojik açıklanması; kriz kalbe fiziksel hasar verir mi? Eryaman, Ankara.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/panik-atak-oldurur-mu' },
    openGraph: {
        title: 'Panik Atak Öldürür mü? Kriz Kalbe Hasar Verir mi?',
        type: 'article', locale: 'tr_TR',
    },
};

const faqItems = [
    {
        question: 'Panik atağın kendisinden dolayı kalp durarak ölmek mümkün mü?',
        answer: 'Hayır, tıp litaratüründe sadece panik atak geçirildi diye kalp aniden durmaz ve bir ölüm gerçekleşmez (kalp/akciğer sistemi anatomik-fiziksel olarak tamamen sağlamsa). O panik hissi sadece amigdalanın salgıladığı çok yüklü ama hayati olmayan bir adrenalindir.',
    },
    {
        question: 'Atağın şiddetinden beynime kan veya inme / felç iner mi?',
        answer: 'Hayır. Atağın getirdiği o hisler sebebiyle, artan kalp ritmi sağlıklı bir vücutta tansiyonu geçici yükseltir. Lakin bu durum o an felç gibi ağır bir beyin inmesini (%100 pıhtı vb. yoksa) tetiklemez.',
    },
    {
        question: 'Boğazım düğümleniyor nefessizlikten boğulur muyum?',
        answer: 'Kişi aşırı sık soluduğu için (hiperventilasyon sendromu) kandaki CO2 oranını değiştirir ve bu tıkanma (boğulma) hissini paradoksal şekilde kendi nefes alma tarzıyla yaratır; o anda nefes alıyor olmanıza rağmen oksijen gitmiyor veya nefessiz kalıp ölünüyor zannedilir ama bu hislerin tamamı sahtedir (boğulmayla ölüm gerçekleşmez).',
    },
    {
        question: 'Kendimi tamamen kaybedip aklımı yitirir miyim (çıldırmak)?',
        answer: 'Panik atağın korkutucu belirtisi o an beynin tüm çevre algısını flulaştırıp kişiyi panik içerisine odaklamasıdır. Bu his aklın kaybedilmesi, şizofreniye dönüşme veya kalıcı delirme anlamına ASLA gelmez.',
    },
    {
        question: 'Böyle yaşamaktansa, Ankara Eryaman’da durumum kiminle değerlendirilmelidir?',
        answer: 'Gereksiz "ölüm korkusu" ile hayattan eksiye düşüldüğünde (sosyal alanlara girememe fobisinden mustarip olunduğunda) sürecin klinik adının konulması (psikiyatrik süreç analizi ve yapılandırılması) için, Altay Mh., Eryaman’da Uzm. Dr. Abdullah Maraş / Psikiyatri servisine başvurulur.',
    },
];

export default function PanikAtakOldururMuBlog() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <Link href="/blog/panik-atak">Panik Atak</Link><span>/</span>
                        <span>Atak Öldürür mü?</span>
                    </div>
                    <div className={styles.meta}>
                        <span className={styles.category}>Panik Atak</span>
                        <time dateTime="2026-04-02">2 Nisan 2026</time>
                        <span>•</span><span>8 dk okuma</span>
                    </div>
                    <h1>Panik Atak Öldürür mü? Boğulma / Çıldırma Korkusu ve Fizyoloji</h1>
                    <p className={styles.heroDesc}>
                        Hayatınızın herhangi bir anında, belki en güvende olduğunuz ev kanepenizde otururken "kalbim
                        bir anda fırlayacak gibi oluyor" dediniz. Sonraki adım dev bir kaygı:
                        "Acaba şimdi nefesim kesilecek ve ölecekmişim hissi gerçek mi?"
                        Ölüm korkusunun ve panik atağın beden üzerindeki sahte izlerini inceliyoruz.
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
                                112 kayıtları ve Acil Servis triyaj gözlemlerinin neredeyse vazgeçilmez bir bölümü;
                                sedye üzerinde rengi gitmiş, terler içerisinde ancak klinik monitörlerde (Ekg vb)
                                fizyolojisi tamamen sağlam olan bireylerdir. Onlara <Link href="/blog/panik-atak-kalp-krizi-mi">
                                    kalp krizi ekarte süreci arayışlarından sonra "Size hiçbir şeyiniz yok" (Siz sadece panik oluyorsunuz,
                                    kalpte hasar yok anlamında)</Link> denilmesi o ölüm korkusunu yaşayan hasta için tam bir ikilemdir.
                                Peki panik atak (krizinin) kendisi o an organlara direkt hasar verip, bireyi nefessizlik veya
                                kalp iflası ile ölüme taşıyabilir mi?
                            </p>

                            <h2>Ölüm Korkusunun Fizyolojisi (Neden "Ölüyorum" Sanırız?)</h2>
                            <p>
                                İnsanın evrimsel beyni ("Amigdala" - tehlikeyi algılama radarı),
                                gerçek bir avcı (bir ayı vb.) gördüğünde veya yanlışlıkla tamamen hayali (sanal/psikolojik)
                                bir tehdit alarmı yarattığında ayrım yapmaz. Sisteme "Acil Kaç" (Savaş / Kaç tepkisi) emri verir.
                            </p>
                            <ul>
                                <li><strong>Adrenalin</strong> salgısı maksimuma patlar.</li>
                                <li>Kalp, bedeni kaçmaya hazırlamak için kaslara oksijen (kan) fırlattığından o kadar hızlı ve sert vurur ki <Link href="/blog/panik-atak-belirtileri">göğüs kafesinde sızı/basınca (Atak Belirtilerine)</Link> yol açar.</li>
                            </ul>
                            <p>
                                Lakin bedenin karşısında "kaçacak bir hedef" (bir yılan vs) yoktur. O an asansördedir veya uyuyordur
                                (<Link href="/blog/gece-panik-atak">gece uykudan çarpıntıyla uyanma durumu</Link>). Bu denli devasa,
                                ama anlamsızca gelen yüksek dozdaki kalbin eforu ve soluksuz kalma hissi beyince sadece
                                tek bir şekilde yorumlanır: "Vücudum kendiliğinden iflas ediyor, o halde ölüyorum!"
                            </p>

                            <h2>Neden Çıldırmış, Delirmiş Gibi Hissederiz? (Aklımı Mı Yitiriyorum?)</h2>
                            <p>
                                Ölümün yanı sıra diğer bir büyük korku <strong>çıldırma / aklını yitirme</strong> yanılsamasıdır.
                                <Link href="/blog/panik-atak-kac-dakika-surer">Dakikalar geçmek bilmediği</Link> o kısacık zaman
                                zarfında; sistemin merkez siniri adrenalinle o denli kitlenir ki beyin, etraftaki normal dünyayı
                                (masayı, arkadaşı, yolu) silik ve uzak (derealizasyon) gibi algılatır. "Ben artık beynime hükmedemiyorum, bağırıp çağırsam
                                kontrolümü kaybedeceğim" kaygısı, korkunun çaresizliğinden doğar. Atak asla sizi kalıcı
                                bir şizofreniye ya da akıl hastasına çevirmez; bu sadece korku temelli aşırı uyarılmadır.
                            </p>

                            <h2>Boğulmaktan Ya da Havasızlıktan Ölür Müyüm?</h2>
                            <p>
                                Asla. Kendinizi "Nefes alamıyorum sanıyorum" derken yakaladığınız o anda
                                gerçekleşen tam tersidir: Çok fazla ve çok hızlı (hiperventilasyon) nefes
                                almışsınızdır. Kandaki Oksijen ve <Link href="/hizmetler/uyku-bozukluklari">Uyku CO2</Link> dengesinin hızla değişmesi
                                kaslarda kasılmaya (kramplara ve boğazda bir yumru düğüme) sebebiyet verir. Nefes alsanız dahi
                                ciğeriniz zaten şiştiği için <strong>sanki soluk içeri girmiyor</strong> yalanını (boğulma hissini) yaratır.
                            </p>

                            <h2>Panik Atak (Doğrudan) Öldürür mü?</h2>
                            <p>
                                Eğer kişinin atakta iken organik bağından veya arka zeminden kalbine ait bir koroner damar (krizi) veya iskemisi yoksa;
                                <br /><br />
                                <strong>Hayır, bir panik atağın kendisi (sadece adrenalin ve hatalı korku olduğu için) insanı
                                    kalpten ya da başka bir organdan VURARAK ÖLDÜRMEZ.</strong> Kaslar yorulur, <Link href="/hizmetler/anksiyete">sürekli kaygının
                                        yıkım ve depresyonuna (tükenmişliğe)</Link> sürüklenebilir
                                (<Link href="/hizmetler/depresyon">çökkün tablo</Link>), lakin doğrudan bir yaşam
                                sonlanmasına giden ölüm nedeni tıp istatistiklerinde o anda yoktur.
                            </p>

                            <h2>Erken Önlemin Hayati Anlamı: Eryaman Psikiyatrist Değerlendirmesi</h2>
                            <p>
                                Peki bedeninizi öldürmüyorsa neden destek almalısınız? Çünkü <strong>ruhunuzu ve özgürlüğünüzü
                                    (yaşamı) sömürerek öldürür</strong>. Beklenti kaygısıyla (ya yine "ölecekmişim" hissi yaşarsam korkusuyla)
                                yıllarca aynı eve mahkum, sevdiklerinden uzak (toplum içine çıkamayan/agorafobik), araba süremeyen
                                ve bitkin insanlar yaratır.
                            </p>
                            <p>
                                Ankara Eryaman (Altay Mh.) ile Etimesgut dolaylarındaki kliniğimize Acil / Kardiyoloji kapılarından
                                umutsuzca ve korkuyla (<Link href="/hizmetler/panik-atak">panik atak değerlendirme süreci
                                    arayışıyla</Link>) elinde temiz tahlil kağıtlarıyla gelen danışanların
                                o görünmez yüklerini uzman psikiyatrist konsültasyonu ile omuzlarından almak mümkündür.
                                Uzm. Dr. Abdullah Maraş, bedenin verdiği bu "ölüm / çıldırma" yalanının kırılması ve beynin eski
                                dingin ritmine geçebilmesi için bireye özgü bilimsel ve farmakolojik süreç rotasını
                                çizmektedir.
                            </p>

                            <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                                <strong>📌 Acil Yardım Bilgilendirme ve Uyarı Notu</strong>
                                Panik atağın kendisi öldürücü olmayan bir tablodur ibaresi, tıp literatürünün genel bir bilgisidir. Ancak bu
                                şu anlama ASLA gelmez: "Göğsüm sıkışıyor ama korkmayayım bu zaten paniktir (kendinizce teşhis)." Her birey
                                bu süreçlerden önce şiddetli göğüs veya omuz sol ağrılarında mutlak biçimde ilk olarak tahlillerini (Gerekirse Acil Servisten
                                EKG aldırarak Kalbini) Organik / Fiziksel olarak ekarte etmelidir ("Kalbimde bir risk var mıdır?"). Daha
                                sonrasında Psikiyatrik/Ruh sağlığı alanlarına intikal edilmelidir.
                            </div>

                            <div className={styles.faqSection} id="sss">
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={faqItems} />
                            </div>

                            <div className={styles.articleCta}>
                                <h3>Bu Dehşet Verici Korkuyla Tek Başınıza Devam Etmeyin</h3>
                                <p>Eryaman kliniğimizdeki psikiyatrist değerlendirme seansıyla bu endişeli ölüyorum döngüsünü irdeliyebilir, profesyonel olarak bu kaygıyı sınırlandırabilirsiniz.</p>
                                <Link href="/randevu" className="btn btn--primary btn--lg">Randevu Menüsü →</Link>
                            </div>
                        </article>

                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Uzman Değerlendirme Takvimi</h3>
                                <p>O zor dakikalara mecbur değilsiniz.</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Doktor Randevusu Al</Link>
                            </div>

                            <div className={styles.sidebarCard}>
                                <h4>Konularına Göre Tasnifler</h4>
                                <ul className={styles.sidebarLinks}>
                                    <li><Link href="/hizmetler/panik-atak">Panik Atak Klinik Değerlendirmeleri</Link></li>
                                    <li><Link href="/blog/panik-atak-kac-dakika-surer">Ölüm Kokusu Kaç Dakika Sürer?</Link></li>
                                    <li><Link href="/hizmetler/anksiyete">Kaygıdan Tükenen Zihin ve Beden</Link></li>
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
