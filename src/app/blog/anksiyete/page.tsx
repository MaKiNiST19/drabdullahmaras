import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../depresyon/page.module.css';

export const metadata: Metadata = {
    title: 'Anksiyete Hakkýnda Bilgilendirici Yazýlar | Uzm. Dr. Abdullah Maraþ',
    description:
        'Anksiyete belirtileri, sürekli endiþe hali, panik atak farký ve sosyal anksiyete üzerine uzman bilgilendirme yazýlarý. Ankara Eryaman.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/anksiyete' },
    openGraph: {
        title: 'Anksiyete Hakkýnda Bilgilendirici Yazýlar',
        description: 'Anksiyete bozukluðu (kaygý bozukluðu) ve iliþkili sorunlar hakkýnda týbbi bilgilendirme yazýlarý.',
        type: 'website', locale: 'tr_TR',
    },
};

const blogPosts = [
    {
        slug: '/blog/anksiyete-belirtileri',
        title: 'Anksiyete Belirtileri Nelerdir? Kaygý Hangi Noktada Bozukluða Dönüþür?',
        icon: '?',
        date: '10 Mart 2026',
        desc: 'Normal kaygý ile anksiyete bozukluðu arasýndaki ince çizgiyi deðerlendiriyoruz. Huzursuzluk, çarpýntý, kaçýnma davranýþlarý ve günlük yaþam üzerindeki etkiler.',
    },
    {
        slug: '/blog/anksiyete-krizi',
        title: 'Anksiyete Krizi Sýrasýnda Ne Olur?',
        icon: '??',
        date: '24 Mart 2026',
        desc: 'Kaygýnýn zirveye ulaþtýðý anksiyete krizinin bedensel ve zihinsel mekanizmalarý. Korku hissi, odaklanma sorunlarý ve destek süreci hakkýnda açýklamalar.',
    },
    {
        slug: '/blog/anksiyete-ve-panik-atak-farki',
        title: 'Anksiyete ile Panik Atak Arasýndaki Fark Nedir?',
        icon: '??',
        date: '8 Nisan 2026',
        desc: 'Sürekli hissedilen yaygýn kaygý hali ile aniden gelen, dakikalar içinde zirveye ulaþan panik ataðýn süre, belirti ve yoðunluk temelinde karþýlaþtýrmasý.',
    },
    {
        slug: '/blog/sosyal-anksiyete-fobi',
        title: 'Sosyal Anksiyete (Sosyal Fobi) Nedir?',
        icon: '??',
        date: '15 Nisan 2026',
        desc: 'Ýnsanlarýn içinde kaygý yaþama hissi, eleþtirilme korkusu ve kaçýnma. Sosyal fobinin iþ okul yaþamýna yansýmalarý ve bu durumla baþa çýkma gerekliliði.',
    },
    {
        slug: '/blog/surekli-kaygi-hali',
        title: 'Sürekli Kaygý Hali Neden Olur?',
        icon: '??',
        date: '5 Mayýs 2026',
        desc: 'Belirli bir tehdit yokken bile sürüp giden, "sürekli endiþe hali ve yorgunluk" yaratan anksiyete sarmalýnýn altýnda yatan faktörler.',
    },
    {
        slug: '/blog/anksiyete-ne-kadar-surer',
        title: 'Anksiyete Ne Kadar Sürer?',
        icon: '?',
        date: '12 Mayýs 2026',
        desc: 'Anksiyete belirtilerinin süresi kiþiden kiþiye farklýlýk gösterir. Gündelik yaþamý zorlayan kaygýnýn ne kadar devam edebileceði ve uzman deðerlendirmesinin rolü.',
    },
];

export default function AnksiyeteHubPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <span>Anksiyete</span>
                    </div>
                    <span className={styles.hubIcon}>???</span>
                    <h1>Anksiyete Hakkýnda Bilgilendirici Yazýlar</h1>
                    <p className={styles.heroDesc}>
                        Anksiyete (kaygý bozukluðu), zihni sürekli meþgul eden ve bedensel belirtilerle günlük hayatý
                        yýpratabilen bir süreçtir. "Kötü bir þey olacak" beklentisi, panik atak ve sosyal fobiyi anlatan
                        yazýlarýmýzý inceleyebilirsiniz.
                    </p>
                    <p className={styles.heroDesc}>
                        Uzm. Dr. Abdullah Maraþ, Ankara Eryaman'da anksiyete bozukluklarýnýn profesyonel olarak
                        deðerlendirmesini gerçekleþtirmektedir. Yazýlarýn tamamý bilgilendirme amaçlýdýr.
                    </p>
                    <Link href="/hizmetler/anksiyete" className={styles.pillarLink}>
                        <span>??</span>
                        <div>
                            <strong>Anksiyete Deðerlendirmesi — Ana Hizmet Sayfasý</strong>
                            <span>Ankara Eryaman'daki klinik deðerlendirme süreçlerine ve detaylara göz atýn ›</span>
                        </div>
                    </Link>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.postsGrid}>
                        {blogPosts.map((post) => (
                            <Link href={post.slug} key={post.slug} className={styles.postCard}>
                                <div className={styles.postHeader}>
                                    <span className={styles.postIcon}>{post.icon}</span>
                                    <time>{post.date}</time>
                                </div>
                                <h2>{post.title}</h2>
                                <p>{post.desc}</p>
                                <span className={styles.readMore}>Yazýyý Oku ›</span>
                            </Link>
                        ))}
                    </div>

                    <div className={styles.hubCta}>
                        <div className={styles.ctaContent}>
                            <h2>Ankara Eryaman'da Anksiyete Deðerlendirmesi Ýçin Randevu</h2>
                            <p>
                                Kaygý hayatýnýzý yönetmesin. Ankara Eryaman (Altay Mh.) kliniðimizde,
                                huzursuzluk ve endiþelerinizi uzman eþliðinde deðerlendirebilirsiniz.
                            </p>
                            <div className={styles.ctaActions}>
                                <Link href="/hizmetler/anksiyete" className="btn btn--outline btn--lg">
                                    Anksiyete Sayfasý
                                </Link>
                                <Link href="/randevu" className="btn btn--primary btn--lg">
                                    Randevu Al ›
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                        <strong>?? Bilgilendirme</strong>
                        Bu sayfadaki yazýlar týbbi taný veya kendi kendine tedavi önerisi deðildir.
                        Korkularýnýz veya belirtilerinizin klinik tanýsý için psikiyatri uzmanýna baþvurunuz.
                    </div>
                </div>
            </section>

            {/* ItemList Schema */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org", "@type": "ItemList",
                    name: "Anksiyete Hakkýnda Bilgilendirici Yazýlar",
                    description: "Anksiyete bozukluklarý konusunda hazýrlanmýþ bilimsel bilgilendirici yazýlar.",
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
                    name: "Anksiyete Hakkýnda Bilgilendirici Yazýlar",
                    url: "https://www.drabdullahmaras.com.tr/blog/anksiyete",
                    publisher: { "@id": "https://www.drabdullahmaras.com.tr/#organization" }
                })
            }} />
        </>
    );
}
