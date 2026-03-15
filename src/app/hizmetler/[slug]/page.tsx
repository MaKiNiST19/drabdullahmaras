import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services, getServiceBySlug, getRelatedServices } from '@/data/services';
import FAQSection from '@/components/FAQSection';
import styles from './page.module.css';

const PILLAR_PAGES = ['depresyon', 'anksiyete', 'panik-atak', 'okb', 'bipolar-bozukluk'];

export async function generateStaticParams() {
    return services
        .filter((service) => !PILLAR_PAGES.includes(service.slug))
        .map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = getServiceBySlug(slug);
    if (!service) return {};
    return {
        title: service.metaTitle,
        description: service.metaDescription,
        alternates: { canonical: `https://drabdullahmaras.com/hizmetler/${service.slug}` },
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);
    if (!service) notFound();

    const related = getRelatedServices(service.content.relatedServices);

    return (
        <>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <Link href="/hizmetler" className={styles.backLink}>← Tüm Çalışma Alanları</Link>
                    <span className={styles.heroIcon}>{service.icon}</span>
                    <h1>{service.title}</h1>
                    <p className={styles.heroDesc}>{service.shortDesc}</p>
                    <div className="divider divider--center"></div>
                </div>
            </section>

            {/* Content */}
            <section className="section">
                <div className="container">
                    <div className={styles.contentGrid}>
                        <article className={styles.article}>
                            <p className={styles.intro}>{service.content.intro}</p>

                            {service.content.sections.map((section, i) => (
                                <div key={i} className={styles.contentSection}>
                                    <h2>{section.title}</h2>
                                    <p>{section.text}</p>
                                    {section.subsections?.map((sub, j) => (
                                        <div key={j}>
                                            <h3>{sub.title}</h3>
                                            <p>{sub.text}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}

                            <div className="info-banner">
                                <strong>📌 Bilgilendirme</strong>
                                Bu sayfadaki içerikler genel bilgilendirme amaçlıdır. Bireysel tanı ve tedavi süreçleri için mutlaka uzman hekim değerlendirmesi gereklidir.
                            </div>

                            {/* FAQ */}
                            <div className={styles.faqWrapper}>
                                <h2>Sık Sorulan Sorular</h2>
                                <FAQSection items={service.content.faq} />
                            </div>

                            {/* Related */}
                            <div className={styles.relatedSection}>
                                <h2>İlgili Çalışma Alanları</h2>
                                <div className={styles.relatedGrid}>
                                    {related.map((r) => (
                                        <Link href={`/hizmetler/${r.slug}`} key={r.slug} className={`card ${styles.relatedCard}`}>
                                            <span className={styles.relatedIcon}>{r.icon}</span>
                                            <h3>{r.title}</h3>
                                            <p>{r.shortDesc}</p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCta}>
                                <h3>Değerlendirme İçin</h3>
                                <p>Profesyonel psikiyatrik değerlendirme için randevu alabilirsiniz.</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ width: '100%' }}>Randevu Al</Link>
                            </div>
                            <div className={styles.sidebarInfo}>
                                <h4>Klinik Bilgileri</h4>
                                <div className={styles.infoItem}>
                                    <span className={styles.infoLabel}>Uzman</span>
                                    <span>Uzm. Dr. Abdullah Maraş</span>
                                </div>
                                <div className={styles.infoItem}>
                                    <span className={styles.infoLabel}>Uzmanlık</span>
                                    <span>Ruh Sağlığı ve Hastalıkları</span>
                                </div>
                                <div className={styles.infoItem}>
                                    <span className={styles.infoLabel}>Konum</span>
                                    <span>Eryaman, Ankara</span>
                                </div>
                            </div>
                            <div className={styles.sidebarLinks}>
                                <h4>Diğer Alanlar</h4>
                                <ul>
                                    {services.filter(s => s.slug !== slug).map(s => (
                                        <li key={s.slug}><Link href={`/hizmetler/${s.slug}`}>{s.title}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2>Profesyonel Değerlendirme İçin Randevu Alın</h2>
                    <p>Ankara Eryaman&apos;da bilimsel çerçevede psikiyatrik değerlendirme.</p>
                    <Link href="/randevu" className="btn btn--primary btn--lg">Randevu Al →</Link>
                </div>
            </section>

            {/* Schemas */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: service.content.faq.map(f => ({
                        "@type": "Question", name: f.question,
                        acceptedAnswer: { "@type": "Answer", text: f.answer }
                    }))
                })
            }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "MedicalWebPage",
                    name: service.title,
                    description: service.metaDescription,
                    url: `https://drabdullahmaras.com/hizmetler/${service.slug}`,
                    author: { "@id": "https://drabdullahmaras.com/#physician" },
                    publisher: { "@id": "https://drabdullahmaras.com/#organization" },
                    isPartOf: { "@id": "https://drabdullahmaras.com/#website" }
                })
            }} />
        </>
    );
}
