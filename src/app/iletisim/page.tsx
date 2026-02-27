import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'İletişim | Eryaman Psikiyatrist - Uzm. Dr. Abdullah Maraş',
    description: 'Ankara Eryaman\'da Uzm. Dr. Abdullah Maraş psikiyatri kliniği iletişim bilgileri. Altay Mahallesi, Eryaman adres ve ulaşım bilgileri.',
    alternates: { canonical: 'https://drabdullahmaras.com/iletisim' },
};

export default function IletisimPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className="section-badge">✦ İletişim</span>
                    <h1>İletişim Bilgileri</h1>
                    <p className={styles.heroDesc}>
                        Ankara Eryaman, Altay Mahallesi çevresinde yer alan kliniğimize ulaşmak için
                        aşağıdaki bilgileri kullanabilirsiniz.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.grid}>
                        <div className={styles.contactCards}>
                            <div className={`card ${styles.contactCard}`}>
                                <div className={styles.cardIcon}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <h2>Adres</h2>
                                <p>Altay Mahallesi<br />Eryaman, Etimesgut<br />Ankara</p>
                                <span className={styles.note}>Eryaman, Batıkent ve Etimesgut bölgelerinden kolay ulaşım.</span>
                            </div>

                            <div className={`card ${styles.contactCard}`}>
                                <div className={styles.cardIcon}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                </div>
                                <h2>Çalışma Saatleri</h2>
                                <div className={styles.hours}>
                                    <div className={styles.hourRow}><span>Pazartesi – Cuma</span><strong>09:00 – 17:00</strong></div>
                                    <div className={styles.hourRow}><span>Cumartesi</span><strong>Randevuya göre</strong></div>
                                    <div className={styles.hourRow}><span>Pazar</span><strong>Kapalı</strong></div>
                                </div>
                            </div>

                            <div className={`card ${styles.contactCard}`}>
                                <div className={styles.cardIcon}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="4" width="18" height="18" rx="2" />
                                        <line x1="16" y1="2" x2="16" y2="6" />
                                        <line x1="8" y1="2" x2="8" y2="6" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                    </svg>
                                </div>
                                <h2>Randevu</h2>
                                <p>Kliniğimiz randevu sistemiyle çalışmaktadır.</p>
                                <Link href="/randevu" className="btn btn--primary" style={{ marginTop: '1rem' }}>
                                    Online Randevu Formu
                                </Link>
                            </div>
                        </div>

                        <div className={styles.mapSection}>
                            <h2>Konum</h2>
                            <div className={styles.mapWrapper}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12234.0!2d32.6279!3d39.9524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sEryaman%2C+Ankara!5e0!3m2!1str!2str!4v1"
                                    width="100%"
                                    height="400"
                                    style={{ border: 0, borderRadius: 'var(--radius-xl)' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Klinik Konumu - Eryaman, Ankara"
                                ></iframe>
                            </div>
                            <div className="info-banner" style={{ marginTop: '1.5rem' }}>
                                <strong>📌 Ulaşım Bilgisi</strong>
                                Kliniğimize Ankara Metrosu Eryaman istasyonlarından ve Batıkent-Etimesgut
                                güzergâhındaki toplu taşıma araçlarıyla kolaylıkla ulaşabilirsiniz.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
