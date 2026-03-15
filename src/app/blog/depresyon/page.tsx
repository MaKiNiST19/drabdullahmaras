import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Depresyon Hakkında Bilgilendirici Yazılar | Uzm. Dr. Abdullah Maraş',
    description:
        'Depresyon belirtileri, mevsimsel depresyon, profesyonel destek süreci ve iş yaşamına etkileri hakkında bilgilendirici yazılar. Ankara Eryaman psikiyatri uzmanı.',
    alternates: { canonical: 'https://drabdullahmaras.com/blog/depresyon' },
    openGraph: {
        title: 'Depresyon Hakkında Bilgilendirici Yazılar',
        description: 'Depresyon hakkında kapsamlı bilgilendirme yazıları. Ankara Eryaman psikiyatri uzmanı.',
        type: 'website', locale: 'tr_TR',
    },
};

const blogPosts = [
    {
        slug: '/blog/depresyon-belirtileri',
        title: 'Depresyon Belirtileri Nelerdir? Kendinizi Tanıyın',
        icon: '📋',
        date: '2 Mart 2026',
        desc: 'Depresyonun duygusal, bedensel, bilişsel ve davranışsal belirtilerini kapsamlı olarak ele alan yazımız. Süreğen karamsarlık, enerji kaybı ve uyku düzensizlikleri gibi belirtileri tanımanıza yardımcı olacak bilgilendirici içerik.',
    },
    {
        slug: '/blog/mevsimsel-depresyon',
        title: 'Mevsimsel Duygudurum Değişiklikleri ve Kış Depresyonu',
        icon: '❄️',
        date: '26 Mart 2026',
        desc: 'Sonbahar ve kış aylarında belirginleşen mevsimsel depresyonun doğası, nedenleri ve sıradan bir kış hüznünden farkı. Gün ışığı, serotonin ve sirkadiyen ritim ilişkisini bilimsel çerçevede ele alıyoruz.',
    },
    {
        slug: '/blog/depresyon-mu-uzuntu-mu',
        title: 'Depresyon mu Üzüntü mü? Farkı Nasıl Anlarsınız?',
        icon: '🔍',
        date: '9 Mart 2026',
        desc: 'Normal üzüntü ile klinik depresyon arasındaki farkı anlamak, doğru adımları atabilmek açısından önemlidir. Ayrımı yapmanıza yardımcı olacak 5 kritik soru ve yas süreci–depresyon ilişkisi.',
    },
    {
        slug: '/blog/depresyonda-profesyonel-destek',
        title: 'Depresyonda Profesyonel Destek Süreci Nasıl İşler?',
        icon: '🤝',
        date: '7 Nisan 2026',
        desc: 'Psikiyatriste başvurmak sizi endişelendiriyorsa, destek sürecini adım adım anlatıyoruz. Randevudan ilk görüşmeye, bireysel planlamadan izleme kadar tüm aşamalar.',
    },
    {
        slug: '/blog/is-yasami-ve-depresyon',
        title: 'İş Yaşamı ve Depresyon: İşlevselliği Korumak',
        icon: '💼',
        date: '4 Mayıs 2026',
        desc: 'Depresyonun iş performansı üzerindeki etkileri, presenteeism ve absenteeism kavramları, tükenmişlik ile depresyon farkı ve iş hayatında işlevselliğin korunması.',
    },
    {
        slug: '/blog/depresyon-kac-gunde-gecer',
        title: 'Depresyon Kaç Günde Geçer? Süre Hakkında Bilinmesi Gerekenler',
        icon: '⏳',
        date: '18 Mart 2026',
        desc: 'Depresyonun süresi kişiden kişiye göre değişir. Belirtilerin ne kadar sürebileceği, hangi faktörlerin etkili olduğu ve erken değerlendirmenin önemi hakkında bilgilendirme.',
    },
];

export default function DepresyonHubPage() {
    return (
        <>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <span>Depresyon</span>
                    </div>
                    <span className={styles.hubIcon}>🌧️</span>
                    <h1>Depresyon Hakkında Bilgilendirici Yazılar</h1>
                    <p className={styles.heroDesc}>
                        Depresyon, dünya genelinde en yaygın görülen ruh sağlığı durumlarından biridir.
                        Süreğen karamsarlık, enerji kaybı ve yaşama karşı ilgi azalmasıyla kendini
                        gösteren bu durum hakkında bilimsel çerçevede hazırlanmış bilgilendirici
                        yazılarımıza bu sayfadan ulaşabilirsiniz.
                    </p>
                    <p className={styles.heroDesc}>
                        Ankara Eryaman&apos;da Uzm. Dr. Abdullah Maraş, depresyon belirtilerinin kapsamlı
                        değerlendirmesini gerçekleştirmektedir. Tüm yazılarımız bilgilendirme amaçlıdır
                        ve tıbbi tanı ya da tedavi önerisi niteliği taşımamaktadır.
                    </p>
                    <Link href="/hizmetler/depresyon" className={styles.pillarLink}>
                        <span>📖</span>
                        <div>
                            <strong>Depresyon Değerlendirmesi — Kapsamlı Hizmet Sayfası</strong>
                            <span>Depresyon hakkında detaylı bilgi, değerlendirme süreci ve SSS →</span>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Blog Posts Grid */}
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
                                <span className={styles.readMore}>Yazıyı Oku →</span>
                            </Link>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className={styles.hubCta}>
                        <div className={styles.ctaContent}>
                            <h2>Profesyonel Depresyon Değerlendirmesi</h2>
                            <p>
                                Depresyon belirtileri yaşıyorsanız, Ankara Eryaman&apos;da bilimsel çerçevede
                                psikiyatrik değerlendirme için randevu alabilirsiniz. Altay Mahallesi çevresindeki
                                kliniğimize Etimesgut ve Batıkent bölgelerinden kolay ulaşım sağlanabilir.
                            </p>
                            <div className={styles.ctaActions}>
                                <Link href="/hizmetler/depresyon" className="btn btn--outline btn--lg">
                                    Depresyon Sayfası
                                </Link>
                                <Link href="/randevu" className="btn btn--primary btn--lg">
                                    Randevu Al →
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                        <strong>📌 Bilgilendirme</strong>
                        Bu sayfadaki yazılar genel bilgilendirme amaçlı hazırlanmıştır. Bireysel tanı ve
                        tedavi süreçleri için mutlaka bir psikiyatri uzmanına başvurunuz.
                    </div>
                </div>
            </section>

            {/* ItemList Schema */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org", "@type": "ItemList",
                    name: "Depresyon Hakkında Bilgilendirici Yazılar",
                    description: "Depresyon konusunda bilimsel çerçevede hazırlanmış bilgilendirici blog yazıları.",
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
                    name: "Depresyon Hakkında Bilgilendirici Yazılar",
                    description: metadata.description,
                    url: "https://drabdullahmaras.com/blog/depresyon",
                    publisher: { "@id": "https://drabdullahmaras.com/#organization" },
                    mainEntity: {
                        "@type": "ItemList",
                        numberOfItems: blogPosts.length,
                        itemListElement: blogPosts.map((p, i) => ({
                            "@type": "ListItem", position: i + 1, url: `https://drabdullahmaras.com${p.slug}`,
                        })),
                    },
                })
            }} />
        </>
    );
}
