import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../depresyon/page.module.css';

export const metadata: Metadata = {
    title: 'Bipolar Bozukluk Makaleleri | Uzm. Dr. Abdullah Maraþ',
    description:
        'Bipolar bozukluk spektrumu, mani belirtileri, depresif ataklar ve hastalýðýn günlük yaþamdaki izleri hakkýnda bilgilendirici týbbi yayýn arþivi. Eryaman Psikiyatri.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/bipolar' },
    openGraph: {
        title: 'Bipolar (Ýki Uçlu) Bozukluk Blogu | Yetiþkin Psikiyatrisi',
        description: 'Bipolarýn yýkýcý fýrtýnalarýna, mani ve depresyon dalgalanmalarýna bilimsel bir pencereden bakan Ankara kapsamlý psikiyatrist bloglarý.',
        type: 'website', locale: 'tr_TR',
    },
};

const blogPosts = [
    {
        slug: '/blog/bipolar-bozukluk-nedir',
        title: 'Bipolar Bozukluk Nedir?',
        icon: '??',
        date: '2 Temmuz 2026',
        desc: 'Hastalýðýn doðasýna anýnda giriþ yapýn. Bipolarýn (Manik Depresifin) neden iki zýt kutupta sallanan bir beyin fýrtýnasý olduðunun en pratik özeti.',
    },
    {
        slug: '/blog/bipolar-belirtileri',
        title: 'Bipolar Belirtileri Nelerdir?',
        icon: '??',
        date: '1 Haziran 2026',
        desc: 'Bir kiþi "çok enerjik" olduðunda hasta olabilir mi? Maninin uykusuzluðu ve taþkýnlýðý ile depresyonun karanlýðý arasýndaki klinik belirtiler kopuþu.',
    },
    {
        slug: '/blog/mani-donemi-nedir',
        title: 'Mani Dönemi Nedir?',
        icon: '???',
        date: '8 Haziran 2026',
        desc: 'Hastanýn aklýný kaçýrýyormuþçasýna "dünyayý fethedeceðim" zannettiði, dürtüsel harcamalarýn ve uykusuzluðun tavan yaptýðý o tehlikeli evre.',
    },
    {
        slug: '/blog/hipomani-nedir',
        title: 'Hipomani Nedir?',
        icon: '?',
        date: '15 Haziran 2026',
        desc: 'Manin kýrpýlmýþ ama çok sinsi hali: Hipomani. Kiþiye kendini en parlak, en verimli hissettiren ama sonu daima büyük çöküþe çýkan enerji yalaný.',
    },
    {
        slug: '/blog/bipolar-ile-depresyon-arasindaki-fark',
        title: 'Bipolar ile Depresyon Arasýndaki Fark Nedir?',
        icon: '??',
        date: '21 Haziran 2026',
        desc: 'Mutsuzsunuz, ama geçmiþte o garip taþkýnlýklarý yaþadýnýz mý? Ýki farklý hastalýðýn farmakolojik ve týbbi rotalarýndaki keskin yol ayrýmý.',
    },
    {
        slug: '/blog/bipolar-atak-ne-kadar-surer',
        title: 'Bipolar Atak Ne Kadar Sürer?',
        icon: '??',
        date: '25 Haziran 2026',
        desc: 'Mani haftalarca mý sürer? Çökkünlük ne zaman biter? Dalgalarýn ne kadar süreceðine ve hayatýmýzda ne kadarlýk bir "normal (ötimi)" payý býrakacaðýna klinik bir bakýþ.',
    },
    {
        slug: '/blog/bipolar-gunluk-hayati-nasil-etkiler',
        title: 'Bipolar Günlük Hayatý Nasýl Etkiler?',
        icon: '???',
        date: '29 Haziran 2026',
        desc: 'Evlilikte çatýrdamalar, iþ yerinde atýlmalara kadar uzanan bu hastalýk, hayatýn tam ortasýnda nasýl görünmez enkazlar býrakýr?',
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
                    <span className={styles.hubIcon}>??</span>
                    <h1>Bipolar Bozukluk Hakkýnda Bilgilendirici Yazýlar</h1>
                    <p className={styles.heroDesc}>
                        Hayatýnýzdaki bazý bölümler o kadar enerjik (hiç uykusuz) geçmiþken; sonrasýnda yataktan
                        býkkýnlýkla haftalarca kalkamadýðýnýz karanlýk dehlizlere itiliyorsanýz, yalnýz deðilsiniz.
                        Bipolar (iki uçlu) bozukluk spektrumunu yetiþkinler ekseninde inceliyoruz.
                    </p>
                    <Link href="/hizmetler/bipolar-bozukluk" className={styles.pillarLink}>
                        <span>??</span>
                        <div>
                            <strong>Ankara Eryaman Bipolar Deðerlendirme Süreci</strong>
                            <span>Hastalýðýn teþhis, izlem ve yapýlandýrmasý üzerine hazýrlanan Ana Konsültasyon (hizmet) sayfasýna gidin ›</span>
                        </div>
                    </Link>
                </div>
            </section>

            <section className="section">
                <div className="container">

                    <div style={{ marginBottom: 'var(--space-8)' }}>
                        <h2>Bu Ýçerikler Kimler Ýçin Hazýrlanmýþtýr?</h2>
                        <p>
                            Bu sayfadaki bilgi havuzu; hayatýnýn bir döneminde durdurulamaz bir coþku (manik enerji yükselmesi) içine
                            girip sanki hiç yorulmayacakmýþ gibi hisseden, sonrasýnda ise kimseyle görüþmek istemeyecek kadar derin
                            bir depresif çöküþ (low) yaþayan yetiþkin beyinlerin anlaþýlmasýna rehberlik etmek için derlenmiþtir.
                        </p>
                        <p>
                            Bilhassa, kendisinde (veya partnerinde / çalýþanýnda) aþýrý cesaretli çýkýþlarý takiben amansýz sessizlikler
                            fark edenlerin; sorunun bir "karakter zayýflýðý / þýmarýklýðý" olmadýðýný, düpedüz organik-nöropsikiyatrik
                            bir hastalýk olan Bipolar (Manik Depresif) dalgasý olduðunu kavramalarý hedeflenmektedir. Bu
                            dalgalanma o denli trajiktir ki birey enerjik iken doktora gelmez; kütüphanemiz tam da bu gizli tehlikeye
                            (mani döneminin sahte neþesine) ýþýk tutar.
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
                                <span className={styles.readMore}>Blog Yazýsýna Git ›</span>
                            </Link>
                        ))}
                    </div>

                    <div className={styles.hubCta}>
                        <div className={styles.ctaContent}>
                            <h2>Coþkulu Dengesizliðin Tedavisi Sizin Elinizde Baþlar</h2>
                            <p>
                                Ýki zýt kutupta sürekli sarkaç gibi savrulmak, hayatý yorucu bir kumar masasýna çevirir.
                                Sizin "enerji" sandýðýnýz o mani evresini; en ufak uyarýcýnýn bile tehlikesiz olduðu sakin ("ötimik") güne
                                taþýmak; klinik uzman deðerlendirmesiyle gerçekleþtirilen týbbi seanslarda biçimlenir.
                                Ankara (Eryaman, Batýkent) odaklý hizmet saðlayan muayenehanemizde dengenizi birlikte kuralým.
                            </p>
                            <div className={styles.ctaActions}>
                                <Link href="/hizmetler/bipolar-bozukluk" className="btn btn--outline btn--lg">
                                    Bipolar Klinik Süreci
                                </Link>
                                <Link href="/randevu" className="btn btn--primary btn--lg">
                                    Doktor Randevusu Al ›
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                        <strong>?? Medikal Bildirim Notu</strong>
                        Burada derlenen makaleler size "Bipolar" teþhisi koydurmaya deðil, "Farkýndalýk yaratmaya" yarar. Kliniðimiz, "%100 mucize baþarýlar veya yan etkisiz kesin tedaviler" ile satýlamayan týp etiði sýnýrlarýnda, Ruh Saðlýðý ve Hastalýklarý kurallarýnca yetiþkin hastalarý (Eryaman) kabul etmektedir. Teþhisi olmayan bir zihin dalgalanmasýna kendi baþýnýza müdahale etmeye kalkýþmamalýsýnýz, her dalganýn kendi ilacý týbbiyededir.
                    </div>
                </div>
            </section>

            {/* Collection / ItemList Schema */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org", "@type": "ItemList",
                    name: "Bipolar (Ýki Uçlu) Duygudurum Hastalýðý Makale Kütüphanesi",
                    description: "Bipolar hastalarýnýn taþkýnlýk (mani) ve mani sonrasý yaþadýklarý o derin depresyon evresine dair kapsamlý yetiþkin bilgileri",
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
                    name: "Bipolar Bozukluk Bilgilendirme Serisi Merkezi",
                    url: "https://www.drabdullahmaras.com.tr/blog/bipolar",
                    author: { "@id": "https://www.drabdullahmaras.com.tr/#physician" },
                    publisher: { "@id": "https://www.drabdullahmaras.com.tr/#organization" }
                })
            }} />
        </>
    );
}
