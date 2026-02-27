import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/data/services';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Psikiyatrik Değerlendirme Hizmetleri | Eryaman Psikiyatrist',
    description: 'Ankara Eryaman\'da Uzm. Dr. Abdullah Maraş psikiyatri kliniğinde sunulan değerlendirme alanları. Depresyon, anksiyete, panik atak, OKB, DEHB ve daha fazlası.',
    alternates: { canonical: 'https://drabdullahmaras.com/hizmetler' },
};

export default function HizmetlerPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className="section-badge">✦ Değerlendirme Alanları</span>
                    <h1>Psikiyatrik Değerlendirme Hizmetleri</h1>
                    <p className={styles.heroDesc}>
                        Ankara Eryaman, Altay Mahallesi çevresinde Uzm. Dr. Abdullah Maraş tarafından
                        sunulan psikiyatrik değerlendirme alanları. Her alan için detaylı bilgilendirme
                        sayfalarını inceleyebilirsiniz.
                    </p>
                </div>
            </section>

            <section className={`section ${styles.servicesSection}`}>
                <div className="container">
                    <div className={styles.grid}>
                        {services.map((service) => (
                            <Link href={`/hizmetler/${service.slug}`} key={service.slug} className={`card ${styles.serviceCard}`}>
                                <span className={styles.icon}>{service.icon}</span>
                                <h2 className={styles.cardTitle}>{service.title}</h2>
                                <p className={styles.cardDesc}>{service.shortDesc}</p>
                                <span className={styles.cardLink}>
                                    Detaylı Bilgi →
                                </span>
                            </Link>
                        ))}
                    </div>
                    <div className="info-banner" style={{ marginTop: '3rem' }}>
                        <strong>📌 Bilgilendirme</strong>
                        Bu sayfadaki içerikler genel bilgilendirme amaçlıdır. Tanı ve tedavi süreçleri için mutlaka uzman hekim değerlendirmesi gereklidir.
                    </div>
                </div>
            </section>
        </>
    );
}
