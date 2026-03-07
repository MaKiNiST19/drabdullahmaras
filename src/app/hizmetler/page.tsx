import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/data/services';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Psikiyatrik DeÄŸerlendirme Hizmetleri | Eryaman Psikiyatrist',
    description: 'Ankara Eryaman\'da Uzm. Dr. Abdullah MaraÅŸ psikiyatri kliniÄŸinde sunulan deÄŸerlendirme alanlarÄ±. Depresyon, anksiyete, panik atak, OKB, DEHB ve daha fazlasÄ±.',
    alternates: { canonical: 'https://drabdullahmaras.com/hizmetler' },
};

export default function HizmetlerPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className="section-badge">âœ¦ DeÄŸerlendirme AlanlarÄ±</span>
                    <h1>Psikiyatrik DeÄŸerlendirme Hizmetleri</h1>
                    <p className={styles.heroDesc}>
                        Ankara Eryaman, Altay Mahallesi Ã§evresinde Uzm. Dr. Abdullah MaraÅŸ tarafÄ±ndan
                        sunulan psikiyatrik deÄŸerlendirme alanlarÄ±. Her alan iÃ§in detaylÄ± bilgilendirme
                        sayfalarÄ±nÄ± inceleyebilirsiniz.
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
                                    DetaylÄ± Bilgi â†’
                                </span>
                            </Link>
                        ))}
                    </div>
                    <div className="info-banner" style={{ marginTop: '3rem' }}>
                        <strong>ğŸ“Œ Bilgilendirme</strong>
                        Bu sayfadaki iÃ§erikler genel bilgilendirme amaÃ§lÄ±dÄ±r. TanÄ± ve tedavi sÃ¼reÃ§leri iÃ§in mutlaka uzman hekim deÄŸerlendirmesi gereklidir.
                    </div>
                </div>
            </section>
        </>
    );
}
