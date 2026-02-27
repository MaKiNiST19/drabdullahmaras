import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../depresyon/page.module.css';

export const metadata: Metadata = {
    title: 'Bipolar Bozukluk Makaleleri | Uzm. Dr. Abdullah Maraş',
    description:
        'Bipolar bozukluk spektrumu, mani belirtileri, depresif ataklar ve hastalığın günlük yaşamdaki izleri hakkında bilgilendirici tıbbi yayın arşivi. Eryaman Psikiyatri.',
    alternates: { canonical: 'https://drabdullahmaras.com/blog/bipolar' },
    openGraph: {
        title: 'Bipolar (İki Uçlu) Bozukluk Blogu | Yetişkin Psikiyatrisi',
        description: 'Bipoların yıkıcı fırtınalarına, mani ve depresyon dalgalanmalarına bilimsel bir pencereden bakan Ankara kapsamlı psikiyatrist blogları.',
        type: 'website', locale: 'tr_TR',
    },
};

const blogPosts = [
    {
        slug: '/blog/bipolar-bozukluk-nedir',
        title: 'Bipolar Bozukluk Nedir?',
        icon: 'ℹ️',
        date: '2 Temmuz 2026',
        desc: 'Hastalığın doğasına anında giriş yapın. Bipoların (Manik Depresifin) neden iki zıt kutupta sallanan bir beyin fırtınası olduğunun en pratik özeti.',
    },
    {
        slug: '/blog/bipolar-belirtileri',
        title: 'Bipolar Belirtileri Nelerdir?',
        icon: '🔍',
        date: '1 Haziran 2026',
        desc: 'Bir kişi "çok enerjik" olduğunda hasta olabilir mi? Maninin uykusuzluğu ve taşkınlığı ile depresyonun karanlığı arasındaki klinik belirtiler kopuşu.',
    },
    {
        slug: '/blog/mani-donemi-nedir',
        title: 'Mani Dönemi Nedir?',
        icon: '🌪️',
        date: '8 Haziran 2026',
        desc: 'Hastanın aklını kaçırıyormuşçasına "dünyayı fethedeceğim" zannettiği, dürtüsel harcamaların ve uykusuzluğun tavan yaptığı o tehlikeli evre.',
    },
    {
        slug: '/blog/hipomani-nedir',
        title: 'Hipomani Nedir?',
        icon: '⚡',
        date: '15 Haziran 2026',
        desc: 'Manin kırpılmış ama çok sinsi hali: Hipomani. Kişiye kendini en parlak, en verimli hissettiren ama sonu daima büyük çöküşe çıkan enerji yalanı.',
    },
    {
        slug: '/blog/bipolar-ile-depresyon-arasindaki-fark',
        title: 'Bipolar ile Depresyon Arasındaki Fark Nedir?',
        icon: '⚖️',
        date: '21 Haziran 2026',
        desc: 'Mutsuzsunuz, ama geçmişte o garip taşkınlıkları yaşadınız mı? İki farklı hastalığın farmakolojik ve tıbbi rotalarındaki keskin yol ayrımı.',
    },
    {
        slug: '/blog/bipolar-atak-ne-kadar-surer',
        title: 'Bipolar Atak Ne Kadar Sürer?',
        icon: '⏱️',
        date: '25 Haziran 2026',
        desc: 'Mani haftalarca mı sürer? Çökkünlük ne zaman biter? Dalgaların ne kadar süreceğine ve hayatımızda ne kadarlık bir "normal (ötimi)" payı bırakacağına klinik bir bakış.',
    },
    {
        slug: '/blog/bipolar-gunluk-hayati-nasil-etkiler',
        title: 'Bipolar Günlük Hayatı Nasıl Etkiler?',
        icon: '🏚️',
        date: '29 Haziran 2026',
        desc: 'Evlilikte çatırdamalar, iş yerinde atılmalara kadar uzanan bu hastalık, hayatın tam ortasında nasıl görünmez enkazlar bırakır?',
    },
];

export default function BipolarHubPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <span>Bipolar Bozukluk</span>
                    </div>
                    <span className={styles.hubIcon}>🎭</span>
                    <h1>Bipolar Bozukluk Hakkında Bilgilendirici Yazılar</h1>
                    <p className={styles.heroDesc}>
                        Hayatınızdaki bazı bölümler o kadar enerjik (hiç uykusuz) geçmişken; sonrasında yataktan
                        bıkkınlıkla haftalarca kalkamadığınız karanlık dehlizlere itiliyorsanız, yalnız değilsiniz.
                        Bipolar (iki uçlu) bozukluk spektrumunu yetişkinler ekseninde inceliyoruz.
                    </p>
                    <Link href="/hizmetler/bipolar-bozukluk" className={styles.pillarLink}>
                        <span>📑</span>
                        <div>
                            <strong>Ankara Eryaman Bipolar Değerlendirme Süreci</strong>
                            <span>Hastalığın teşhis, izlem ve yapılandırması üzerine hazırlanan Ana Konsültasyon (hizmet) sayfasına gidin →</span>
                        </div>
                    </Link>
                </div>
            </section>

            <section className="section">
                <div className="container">

                    <div style={{ marginBottom: 'var(--space-8)' }}>
                        <h2>Bu İçerikler Kimler İçin Hazırlanmıştır?</h2>
                        <p>
                            Bu sayfadaki bilgi havuzu; hayatının bir döneminde durdurulamaz bir coşku (manik enerji yükselmesi) içine
                            girip sanki hiç yorulmayacakmış gibi hisseden, sonrasında ise kimseyle görüşmek istemeyecek kadar derin
                            bir depresif çöküş (low) yaşayan yetişkin beyinlerin anlaşılmasına rehberlik etmek için derlenmiştir.
                        </p>
                        <p>
                            Bilhassa, kendisinde (veya partnerinde / çalışanında) aşırı cesaretli çıkışları takiben amansız sessizlikler
                            fark edenlerin; sorunun bir "karakter zayıflığı / şımarıklığı" olmadığını, düpedüz organik-nöropsikiyatrik
                            bir hastalık olan Bipolar (Manik Depresif) dalgası olduğunu kavramaları hedeflenmektedir. Bu
                            dalgalanma o denli trajiktir ki birey enerjik iken doktora gelmez; kütüphanemiz tam da bu gizli tehlikeye
                            (mani döneminin sahte neşesine) ışık tutar.
                        </p>
                    </div>

                    <div className={styles.postsGrid}>
                        {blogPosts.map((post) => (
                            <Link href={post.slug} key={post.slug} className={styles.postCard}>
                                <div className={styles.postHeader}>
                                    <span className={styles.postIcon}>{post.icon}</span>
                                    <time>{post.date}</time>
                                </div>
                                <h2>{post.title}</h2>
                                <p>{post.desc}</p>
                                <span className={styles.readMore}>Blog Yazısına Git →</span>
                            </Link>
                        ))}
                    </div>

                    <div className={styles.hubCta}>
                        <div className={styles.ctaContent}>
                            <h2>Coşkulu Dengesizliğin Tedavisi Sizin Elinizde Başlar</h2>
                            <p>
                                İki zıt kutupta sürekli sarkaç gibi savrulmak, hayatı yorucu bir kumar masasına çevirir.
                                Sizin "enerji" sandığınız o mani evresini; en ufak uyarıcının bile tehlikesiz olduğu sakin ("ötimik") güne
                                taşımak; klinik uzman değerlendirmesiyle gerçekleştirilen tıbbi seanslarda biçimlenir.
                                Ankara (Eryaman, Batıkent) odaklı hizmet sağlayan muayenehanemizde dengenizi birlikte kuralım.
                            </p>
                            <div className={styles.ctaActions}>
                                <Link href="/hizmetler/bipolar-bozukluk" className="btn btn--outline btn--lg">
                                    Bipolar Klinik Süreci
                                </Link>
                                <Link href="/randevu" className="btn btn--primary btn--lg">
                                    Doktor Randevusu Al →
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                        <strong>📌 Medikal Bildirim Notu</strong>
                        Burada derlenen makaleler size "Bipolar" teşhisi koydurmaya değil, "Farkındalık yaratmaya" yarar. Kliniğimiz, "%100 mucize başarılar veya yan etkisiz kesin tedaviler" ile satılamayan tıp etiği sınırlarında, Ruh Sağlığı ve Hastalıkları kurallarınca yetişkin hastaları (Eryaman) kabul etmektedir. Teşhisi olmayan bir zihin dalgalanmasına kendi başınıza müdahale etmeye kalkışmamalısınız, her dalganın kendi ilacı tıbbiyededir.
                    </div>
                </div>
            </section>

            {/* Collection / ItemList Schema */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org", "@type": "ItemList",
                    name: "Bipolar (İki Uçlu) Duygudurum Hastalığı Makale Kütüphanesi",
                    description: "Bipolar hastalarının taşkınlık (mani) ve mani sonrası yaşadıkları o derin depresyon evresine dair kapsamlı yetişkin bilgileri",
                    numberOfItems: blogPosts.length,
                    itemListElement: blogPosts.map((p, i) => ({
                        "@type": "ListItem", position: i + 1,
                        url: `https://drabdullahmaras.com${p.slug}`,
                        name: p.title,
                    })),
                })
            }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org", "@type": "CollectionPage",
                    name: "Bipolar Bozukluk Bilgilendirme Serisi Merkezi",
                    url: "https://drabdullahmaras.com/blog/bipolar",
                    author: { "@type": "Physician", name: "Uzm. Dr. Abdullah Maraş", url: "https://drabdullahmaras.com/hakkinda" },
                    publisher: { "@type": "MedicalBusiness", name: "Uzm. Dr. Abdullah Maraş Psikiyatro" }
                })
            }} />
        </>
    );
}
