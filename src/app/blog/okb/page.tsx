import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../depresyon/page.module.css';

export const metadata: Metadata = {
    title: 'OKB Hakkında Bilgilendirici Yazılar | Uzm. Dr. Abdullah Maraş',
    description:
        'Takıntı hastalığı (OKB) nedir? Temizlik, simetri, zarar verme ve dini takıntı belirtileri hakkında yetişkinlere yönelik tıbbi blog kütüphanesi. Ankara Eryaman.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/okb' },
    openGraph: {
        title: 'OKB ve Takıntı Hastalığı Hakkında Bilgilendirici (Klinik) Makaleler',
        description: 'Yetişkinlerde Obsesyon ve Kompulsiyonlara dair zihinsel döngüleri açıklayan tıbbi rehber içerikler. Uzm. Dr. Abdullah Maraş, Eryaman.',
        type: 'website', locale: 'tr_TR',
    },
};

const blogPosts = [
    {
        slug: '/blog/okb-belirtileri',
        title: 'OKB Belirtileri Nelerdir?',
        icon: '🔍',
        date: '2 Nisan 2026',
        desc: 'Bireyin zihnine aniden saplanan mantıksız düşünceler (obsesyon) ve bunlardan kurtulmak için çabaladığı ritüel (kompulsiyon) tabloları.',
    },
    {
        slug: '/blog/temizlik-takintisi',
        title: 'Temizlik Takıntısı (Mizofobi) Nedir?',
        icon: '🧼',
        date: '10 Nisan 2026',
        desc: 'Elleri sıkça yıkamanın ötesine geçerek bulaş veya kirlenme korkusuyla saatleri harcamaya ve toplumdan kopmaya varan döngünün anatomisi.',
    },
    {
        slug: '/blog/surekli-kontrol-etme',
        title: 'Sürekli Kontrol Etme İsteği Neden Olur?',
        icon: '🚪',
        date: '18 Nisan 2026',
        desc: 'Kapıyı kilitledim mi, ya ütü fişte kaldıysa? Aklı kurcalayan ve evi terk edememeye yol açan kontrol obsesyonu (Checking OCD).',
    },
    {
        slug: '/blog/dini-takintilar-okb-mi',
        title: 'Dini Takıntılar OKB midir?',
        icon: '💭',
        date: '25 Nisan 2026',
        desc: 'Bireyin hiç istemeden aklından geçen küfür ve günah düşünceleri, dini inancının azalmasından değil, tıbben OKB mekanizmasından kaynaklanır.',
    },
    {
        slug: '/blog/zarar-verme-dusuncesi-okb-mi',
        title: 'Zarar Verme Düşüncesi OKB mi?',
        icon: '✂️',
        date: '5 Mayıs 2026',
        desc: 'Sevdiklerine zarar vereceği korkusu ile mutfaktaki bıçakları saklatan, eyleme geçme niyetinin "asla olmadığı" rahatsız edici obsesyon tipleri.',
    },
    {
        slug: '/blog/okb-gunluk-hayati-nasil-etkiler',
        title: 'OKB Günlük Hayatı Nasıl Etkiler?',
        icon: '⏱️',
        date: '15 Mayıs 2026',
        desc: 'Takıntıların zihni saatlerce esir alması ile iş hayatından (mesai kayıpları) partner ilişkilerine (evlilik) kadar sarsan işlev kaybı etkileri.',
    },
    {
        slug: '/blog/okb-gecer-mi',
        title: 'OKB Geçer mi? Takıntıların Seyri',
        icon: '📉',
        date: '24 Mayıs 2026',
        desc: 'Saçma sapan düşüncelerim kaybolacak mı sorusunun klinik boyutlarıyla cevabı ve tedavinin (yapılandırmanın) kişiden kişiye özelleşen seyri.',
    },
];

export default function OkbHubPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <span>OKB (Takıntı Zihni)</span>
                    </div>
                    <span className={styles.hubIcon}>🔄</span>
                    <h1>OKB Hakkında Bilgilendirici Yazılar</h1>
                    <p className={styles.heroDesc}>
                        Aklınızdan o saplantılı ve rahatsız edici (istemediğiniz) düşünceleri bir türlü kovamıyorsanız;
                        ve bunu sonlandırmak için yorucu döngüleri ("elli kez kontrol etmek", "aşırı yıkamak") yapmak
                        zorunda hissediyorsanız, doğru sayfadasınız.
                    </p>
                    <p className={styles.heroDesc}>
                        Eryaman’da Uzm. Dr. Abdullah Maraş, bu içerikleri <strong>yalnızca yetişkin hastalar
                            için gelişen OKB (takıntı ve tekrar davranış döngüsü)</strong> mekanizmalarını paylaşarak,
                        sorunun karakter zayıflığı değil klinik bir süreç (amigdala bozulması) olduğunu
                        aktarmak amacıyla hazırlamıştır.
                    </p>
                    <Link href="/hizmetler/okb" className={styles.pillarLink}>
                        <span>📑</span>
                        <div>
                            <strong>OKB (Takıntı) Değerlendirmesi — Ana Konsültasyon Hizmeti</strong>
                            <span>Ankara Eryaman'da obsesyonlarınızı beraber irdelediğimiz hizmet sayfasına gidin →</span>
                        </div>
                    </Link>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ marginBottom: 'var(--space-8)' }}>
                        <h2>Bu içerikler kimler için hazırlanmıştır?</h2>
                        <p>
                            Bu sayfada yer alan yazılar, zihninden bir türlü atamadığı rahatsız edici ve mantıksız düşüncelerle (obsesyonlar)
                            mücadele eden yetişkin bireyler için derlenmiştir. Düşüncelerin sürekli tekrarlanması, kişide yoğun kaygı yaratır ve
                            günlük hayatın akışını bozmaya başlar.
                        </p>
                        <p>
                            Ayrıca kapı, kilit ve ocak gibi eşyaları güvende hissetmek uğruna defalarca kontrol edenler, bir şeyleri sıralama
                            veyahut gereğinden fazla temizlik yapma ihtiyacı hissedenler bu içeriklerin hedef okuyucu kitlesidir.
                            Kaygıyı durdurmak adına yapılan bu tekrarlayıcı ve yorucu eylemler döngüsü yakından incelenmektedir.
                        </p>
                        <p>
                            Sadece fiziksel değil; zihinsel yolla yapılan içten tekrarlar, belirli sayılara ulaşma çabası ve bazı
                            cümleleri defalarca tekrar ederek kendini rahatlatmaya (zihinsel kompulsiyon) çalışanlar da
                            bu yazılarda kendilerine dair açıklayıcı klinik bilgiler edineceklerdir.
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
                                <span className={styles.readMore}>Blog Yazısını İncele →</span>
                            </Link>
                        ))}
                    </div>

                    <div className={styles.hubCta}>
                        <div className={styles.ctaContent}>
                            <h2>Ankara Eryaman OKB Değerlendirme Süreci Başlasın</h2>
                            <p>
                                Aklınızdaki yorucu vesveselerden kendi başınıza (yapmamalıyım diyerek) kurtulamazsınız çünkü
                                beynin fizyolojik sistemi alarmdadır. Eryaman Altay Mahallesi'ndeki psikiyatrik konsültasyon alanımızda, hastalık yapısının çözümü için kliniğimiz ile
                                bireysel görüşme (randevu) sürecinizi planlayabilirsiniz.
                            </p>
                            <div className={styles.ctaActions}>
                                <Link href="/hizmetler/okb" className="btn btn--outline btn--lg">
                                    OKB Uzman Değerlendirme Sayfası
                                </Link>
                                <Link href="/randevu" className="btn btn--primary btn--lg">
                                    Doktordan Randevu Al →
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                        <strong>📌 Bilgilendirme Notu</strong>
                        Bloglar ve makalelerdeki yaklaşımlar "%100 başarı, garanti, kesin tedavi vaat etmez". Tıbbi süreçler
                        içerisindeki gidişat kişiden kişiye farklı şekillenecek olup teşhis / farmakoterapi (veya terapi) sadece
                        kendi hekiminizce yürütülebilir. Kliniğimizde 16 yaş altı çocuk kabulü yapılmamaktadır. 16 yaş ve üzeri ergenler için değerlendirme hizmeti sunulmaktadır.
                        Yetişkin psikiyatrisi temellidir.
                    </div>
                </div>
            </section>

            {/* ItemList / CollectionPage Schema */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org", "@type": "ItemList",
                    name: "OKB Hakkında Bilgilendirici Yazılar (Takıntı Hastalıkları)",
                    description: "Yetişkinlerde Obsesyon ve Kompulsif davranışları açıklayan kılavuz niteliğindeki blog listesi",
                    numberOfItems: blogPosts.length,
                    itemListElement: blogPosts.map((p, i) => ({
                        "@type": "ListItem", position: i + 1,
                        url: `https://www.drabdullahmaras.com.tr${p.slug}`,
                        name: p.title,
                    })),
                })
            }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org", "@type": "CollectionPage",
                    name: "OKB Bilgilendirme Makaleleri (Yetişkin)",
                    url: "https://www.drabdullahmaras.com.tr/blog/okb",
                    publisher: { "@id": "https://www.drabdullahmaras.com.tr/#organization" }
                })
            }} />
        </>
    );
}
