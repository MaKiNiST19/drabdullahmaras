import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Depresyon Hakkýnda Bilgilendirici Yazýlar | Uzm. Dr. Abdullah Maraþ',
    description:
        'Depresyon belirtileri, mevsimsel depresyon, profesyonel destek süreci ve iþ yaþamýna etkileri hakkýnda bilgilendirici yazýlar. Ankara Eryaman psikiyatri uzmaný.',
    alternates: { canonical: 'https://www.drabdullahmaras.com.tr/blog/depresyon' },
    openGraph: {
        title: 'Depresyon Hakkýnda Bilgilendirici Yazýlar',
        description: 'Depresyon hakkýnda kapsamlý bilgilendirme yazýlarý. Ankara Eryaman psikiyatri uzmaný.',
        type: 'website', locale: 'tr_TR',
    },
};

const blogPosts = [
    {
        slug: '/blog/depresyon-belirtileri',
        title: 'Depresyon Belirtileri Nelerdir? Kendinizi Tanýyýn',
        icon: '??',
        date: '2 Mart 2026',
        desc: 'Depresyonun duygusal, bedensel, biliþsel ve davranýþsal belirtilerini kapsamlý olarak ele alan yazýmýz. Süreðen karamsarlýk, enerji kaybý ve uyku düzensizlikleri gibi belirtileri tanýmanýza yardýmcý olacak bilgilendirici içerik.',
    },
    {
        slug: '/blog/mevsimsel-depresyon',
        title: 'Mevsimsel Duygudurum Deðiþiklikleri ve Kýþ Depresyonu',
        icon: '??',
        date: '26 Mart 2026',
        desc: 'Sonbahar ve kýþ aylarýnda belirginleþen mevsimsel depresyonun doðasý, nedenleri ve sýradan bir kýþ hüznünden farký. Gün ýþýðý, serotonin ve sirkadiyen ritim iliþkisini bilimsel çerçevede ele alýyoruz.',
    },
    {
        slug: '/blog/depresyon-mu-uzuntu-mu',
        title: 'Depresyon mu Üzüntü mü? Farký Nasýl Anlarsýnýz?',
        icon: '??',
        date: '9 Mart 2026',
        desc: 'Normal üzüntü ile klinik depresyon arasýndaki farký anlamak, doðru adýmlarý atabilmek açýsýndan önemlidir. Ayrýmý yapmanýza yardýmcý olacak 5 kritik soru ve yas süreci–depresyon iliþkisi.',
    },
    {
        slug: '/blog/depresyonda-profesyonel-destek',
        title: 'Depresyonda Profesyonel Destek Süreci Nasýl Ýþler?',
        icon: '??',
        date: '7 Nisan 2026',
        desc: 'Psikiyatriste baþvurmak sizi endiþelendiriyorsa, destek sürecini adým adým anlatýyoruz. Randevudan ilk görüþmeye, bireysel planlamadan izleme kadar tüm aþamalar.',
    },
    {
        slug: '/blog/is-yasami-ve-depresyon',
        title: 'Ýþ Yaþamý ve Depresyon: Ýþlevselliði Korumak',
        icon: '??',
        date: '4 Mayýs 2026',
        desc: 'Depresyonun iþ performansý üzerindeki etkileri, presenteeism ve absenteeism kavramlarý, tükenmiþlik ile depresyon farký ve iþ hayatýnda iþlevselliðin korunmasý.',
    },
    {
        slug: '/blog/depresyon-kac-gunde-gecer',
        title: 'Depresyon Kaç Günde Geçer? Süre Hakkýnda Bilinmesi Gerekenler',
        icon: '?',
        date: '18 Mart 2026',
        desc: 'Depresyonun süresi kiþiden kiþiye göre deðiþir. Belirtilerin ne kadar sürebileceði, hangi faktörlerin etkili olduðu ve erken deðerlendirmenin önemi hakkýnda bilgilendirme.',
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
                    <span className={styles.hubIcon}>???</span>
                    <h1>Depresyon Hakkýnda Bilgilendirici Yazýlar</h1>
                    <p className={styles.heroDesc}>
                        Depresyon, dünya genelinde en yaygýn görülen ruh saðlýðý durumlarýndan biridir.
                        Süreðen karamsarlýk, enerji kaybý ve yaþama karþý ilgi azalmasýyla kendini
                        gösteren bu durum hakkýnda bilimsel çerçevede hazýrlanmýþ bilgilendirici
                        yazýlarýmýza bu sayfadan ulaþabilirsiniz.
                    </p>
                    <p className={styles.heroDesc}>
                        Ankara Eryaman&apos;da Uzm. Dr. Abdullah Maraþ, depresyon belirtilerinin kapsamlý
                        deðerlendirmesini gerçekleþtirmektedir. Tüm yazýlarýmýz bilgilendirme amaçlýdýr
                        ve týbbi taný ya da tedavi önerisi niteliði taþýmamaktadýr.
                    </p>
                    <Link href="/hizmetler/depresyon" className={styles.pillarLink}>
                        <span>??</span>
                        <div>
                            <strong>Depresyon Deðerlendirmesi — Kapsamlý Hizmet Sayfasý</strong>
                            <span>Depresyon hakkýnda detaylý bilgi, deðerlendirme süreci ve SSS ›</span>
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
                                <span className={styles.readMore}>Yazýyý Oku ›</span>
                            </Link>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className={styles.hubCta}>
                        <div className={styles.ctaContent}>
                            <h2>Profesyonel Depresyon Deðerlendirmesi</h2>
                            <p>
                                Depresyon belirtileri yaþýyorsanýz, Ankara Eryaman&apos;da bilimsel çerçevede
                                psikiyatrik deðerlendirme için randevu alabilirsiniz. Altay Mahallesi çevresindeki
                                kliniðimize Etimesgut ve Batýkent bölgelerinden kolay ulaþým saðlanabilir.
                            </p>
                            <div className={styles.ctaActions}>
                                <Link href="/hizmetler/depresyon" className="btn btn--outline btn--lg">
                                    Depresyon Sayfasý
                                </Link>
                                <Link href="/randevu" className="btn btn--primary btn--lg">
                                    Randevu Al ›
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                        <strong>?? Bilgilendirme</strong>
                        Bu sayfadaki yazýlar genel bilgilendirme amaçlý hazýrlanmýþtýr. Bireysel taný ve
                        tedavi süreçleri için mutlaka bir psikiyatri uzmanýna baþvurunuz.
                    </div>
                </div>
            </section>

            {/* ItemList Schema */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org", "@type": "ItemList",
                    name: "Depresyon Hakkýnda Bilgilendirici Yazýlar",
                    description: "Depresyon konusunda bilimsel çerçevede hazýrlanmýþ bilgilendirici blog yazýlarý.",
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
                    name: "Depresyon Hakkýnda Bilgilendirici Yazýlar",
                    description: metadata.description,
                    url: "https://www.drabdullahmaras.com.tr/blog/depresyon",
                    publisher: { "@id": "https://www.drabdullahmaras.com.tr/#organization" },
                    mainEntity: {
                        "@type": "ItemList",
                        numberOfItems: blogPosts.length,
                        itemListElement: blogPosts.map((p, i) => ({
                            "@type": "ListItem", position: i + 1, url: `https://www.drabdullahmaras.com.tr${p.slug}`,
                        })),
                    },
                })
            }} />
        </>
    );
}
