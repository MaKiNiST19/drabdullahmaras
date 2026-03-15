import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../depresyon/page.module.css';

export const metadata: Metadata = {
    title: 'Panik Atak Hakkında Bilgilendirici Yazılar | Uzm. Dr. Abdullah Maraş',
    description:
        'Panik atak belirtileri, süresi, gece uykudayken atak geçirmek ve panik atak kalp krizi farkı içerikleri. Ankara Eryaman.',
    alternates: { canonical: 'https://drabdullahmaras.com/blog/panik-atak' },
    openGraph: {
        title: 'Panik Atak Hakkında Bilgilendirici Yazılar',
        description: 'Ölüm korkusu, nefes alamama, çarpıntı... panik atak bozuklukları hakkında klinik bilgilendirme yazıları.',
        type: 'website', locale: 'tr_TR',
    },
};

const blogPosts = [
    {
        slug: '/blog/panik-atak-belirtileri',
        title: 'Panik Atak Belirtileri Nelerdir?',
        icon: '⚡',
        date: '12 Şubat 2026',
        desc: 'Bedenin verdiği sahte alarmlar... Çarpıntı, göğüs ağrısı, boğulma hissi ve titremeyle seyreden belirtiler bütünü.',
    },
    {
        slug: '/blog/panik-atak-kac-dakika-surer',
        title: 'Panik Atak Krizi Kaç Dakika Sürer?',
        icon: '⏳',
        date: '27 Şubat 2026',
        desc: 'Hiç bitmeyecek gibi gelen o krizin bedendeki adrenalin döngüsünün saniyeler / dakikalar bazında zaman çizelgesi.',
    },
    {
        slug: '/blog/gece-panik-atak',
        title: 'Gece Panik Atak Neden Olur?',
        icon: '🌙',
        date: '10 Mart 2026',
        desc: 'Gece uykudan çarpıntıyla ve "nefes alamıyorum" hissiyle uyanmak. Bilinçaltı ve gün stresinin uyku anında patlak vermesi.',
    },
    {
        slug: '/blog/panik-atak-kalp-krizi-mi',
        title: 'Panik Atak ile Kalp Krizi Nasıl Ayırt Edilir?',
        icon: '❤️',
        date: '18 Mart 2026',
        desc: 'Sol kola yayılan ağrılar, göğüs sıkışması ilk anlarda nasıl anlaşılamamaktadır? Acil hekimi ve psikiyatri ayırıcı tanıları.',
    },
    {
        slug: '/blog/panik-atak-oldurur-mu',
        title: 'Panik Atak Öldürür mü?',
        icon: '⚠️',
        date: '2 Nisan 2026',
        desc: 'En yüksek korku anı olan "ölecekmişim hissinin" fizyolojik gerçekleri, beden dokusuna zarar verip vermeme analizleri.',
    },
];

export default function PanikAtakHubPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Ana Sayfa</Link><span>/</span>
                        <Link href="/blog">Blog</Link><span>/</span>
                        <span>Panik Atak</span>
                    </div>
                    <span className={styles.hubIcon}>🌩️</span>
                    <h1>Panik Atak Hakkında Bilgilendirici Yazılar</h1>
                    <p className={styles.heroDesc}>
                        Ortada hiçbir neden yokken göğüste sıkışma, ölüm / çıldırma korkusu,
                        veya kalbinizin yerindenfırlayacak gibi atması... Yaşadığınız o "Dakikalar
                        geçmek bilmiyor" hissini uzman perspektifiyle ayrıntılı olarak aşağıda değerlendirdik.
                    </p>
                    <p className={styles.heroDesc}>
                        Uzm. Dr. Abdullah Maraş, Ankara Eryaman'da anksiyete ve panik durumlarının bilimsel
                        değerlendirmesini gerçekleştirmektedir. Metinler teşhis amacı değil,
                        bilgilendirme bilinci gütmektedir.
                    </p>
                    <Link href="/hizmetler/panik-atak" className={styles.pillarLink}>
                        <span>📑</span>
                        <div>
                            <strong>Panik Atak Değerlendirmesi — Ana Hizmet Sayfası</strong>
                            <span>Ankara Eryaman'daki klinik değerlendirme süreçlerine göz atın →</span>
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
                                <span className={styles.readMore}>Yazıyı Oku →</span>
                            </Link>
                        ))}
                    </div>

                    <div className={styles.hubCta}>
                        <div className={styles.ctaContent}>
                            <h2>Ankara Eryaman panik atak değerlendirme süreci</h2>
                            <p>
                                Asansöre binememeye, kalabalık caddelere çıkmamaya mahkum değilsiniz.
                                Krizlerin sonlanamaması eylemsizliği, tıbbi danışmanlık görüşmesiyle Eryaman kliniğimizde çözülebilir.
                            </p>
                            <div className={styles.ctaActions}>
                                <Link href="/hizmetler/panik-atak" className="btn btn--outline btn--lg">
                                    Panik Atak Sayfası
                                </Link>
                                <Link href="/randevu" className="btn btn--primary btn--lg">
                                    Doktor Görüşmesi Al →
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="info-banner" style={{ marginTop: 'var(--space-8)' }}>
                        <strong>📌 Bilgilendirme Notu</strong>
                        Bu metinler tedavi yöntemine ("kesin, %100" sonuçlu vaatlere) karşılık gelmemektedir.
                        Organik (fiziksel) nedenler ekarte edildikten sonra (acil servis teşhisi vs) süreç adına
                        psikiyatri dalından destek alınmalıdır.
                    </div>
                </div>
            </section>

            {/* ItemList / CollectionPage Schema */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org", "@type": "ItemList",
                    name: "Panik Atak Hakkında Bilgilendirici Yazılar",
                    description: "Panik atak ve kriz döngüleri hakkında tıbbi açıklamalar",
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
                    name: "Panik Atak Bilgilendirme Makaleleri",
                    url: "https://drabdullahmaras.com/blog/panik-atak",
                    publisher: { "@id": "https://drabdullahmaras.com/#organization" }
                })
            }} />
        </>
    );
}
