import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Randevu Al | Eryaman Psikiyatrist - Uzm. Dr. Abdullah Maraş',
    description: 'Ankara Eryaman\'da Uzm. Dr. Abdullah Maraş psikiyatri kliniğinden randevu alın. Ruh sağlığı değerlendirmesi için online randevu formu.',
    alternates: { canonical: 'https://drabdullahmaras.com/randevu' },
};

export default function RandevuPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className="section-badge">✦ Randevu</span>
                    <h1>Randevu Alın</h1>
                    <p className={styles.heroDesc}>
                        Ankara Eryaman&apos;da psikiyatrik değerlendirme için randevu talebi oluşturabilirsiniz.
                        Formunuz değerlendirildikten sonra sizinle iletişime geçilecektir.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.grid}>
                        <div className={styles.formSection}>
                            <h2>Randevu Formu</h2>
                            <p>Aşağıdaki formu doldurarak randevu talebi oluşturabilirsiniz.</p>
                            <form className={styles.form}>
                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="name">Ad Soyad *</label>
                                        <input type="text" id="name" name="name" required placeholder="Adınız ve soyadınız" />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="phone">Telefon *</label>
                                        <input type="tel" id="phone" name="phone" required placeholder="05XX XXX XX XX" />
                                    </div>
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="email">E-posta</label>
                                    <input type="email" id="email" name="email" placeholder="ornek@email.com" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="subject">Değerlendirme Alanı</label>
                                    <select id="subject" name="subject">
                                        <option value="">Seçiniz</option>
                                        <option value="depresyon">Depresyon</option>
                                        <option value="anksiyete">Anksiyete</option>
                                        <option value="panik-atak">Panik Atak</option>
                                        <option value="okb">OKB</option>
                                        <option value="dehb">Dikkat Eksikliği (DEHB)</option>
                                        <option value="bipolar">Bipolar Bozukluk</option>
                                        <option value="uyku">Uyku Bozuklukları</option>
                                        <option value="yetiskin">Yetişkin Psikiyatrisi</option>
                                        <option value="ergen">16 Yaş Üzeri Ergen Psikiyatri</option>
                                        <option value="cinsel-bozukluklar">Cinsel Bozukluklar</option>
                                        <option value="diger">Diğer</option>
                                    </select>
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="message">Mesajınız</label>
                                    <textarea id="message" name="message" rows={5} placeholder="Randevu talebiyle ilgili notlarınız..."></textarea>
                                </div>
                                <button type="submit" className="btn btn--primary btn--lg" style={{ width: '100%' }}>
                                    Randevu Talebi Gönder
                                </button>
                            </form>
                            <div className="info-banner" style={{ marginTop: '1.5rem' }}>
                                <strong>📌 Bilgilendirme</strong>
                                Form gönderimi randevu onayı anlamına gelmemektedir. Talebiniz değerlendirildikten sonra sizinle iletişime geçilecektir.
                            </div>
                        </div>
                        <aside className={styles.sidebar}>
                            <div className={styles.infoCard}>
                                <h3>Klinik Bilgileri</h3>
                                <div className={styles.infoItem}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                    <div><strong>Adres</strong><span>Altay Mahallesi Orhan Bey Caddesi<br />Ata Yıldız Plaza No:1 Kat:1 Daire:4<br />Eryaman / Ankara</span></div>
                                </div>
                                <div className={styles.infoItem}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                    <div><strong>Telefon</strong><span>0 312 504 53 99</span></div>
                                </div>
                                <div className={styles.infoItem}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                    <div><strong>Çalışma Saatleri</strong><span>Hafta içi: 09:00 – 18:00<br />Cumartesi: 09:00 – 16:00</span></div>
                                </div>
                                <div className={styles.infoItem}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                                    <div><strong>Randevu</strong><span>Randevu sistemiyle hizmet verilmektedir</span></div>
                                </div>
                            </div>
                            <div className={styles.infoCard}>
                                <h3>Neden Randevu ile?</h3>
                                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                                    Randevu sistemi, her bireye yeterli süre ve özen ayrılmasını sağlamaktadır.
                                    Görüşmelerinizde acele edilmeden, detaylı bir değerlendirme gerçekleştirilmektedir.
                                </p>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
}
