import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const services = [
    { href: '/hizmetler/depresyon', label: 'Depresyon' },
    { href: '/hizmetler/anksiyete', label: 'Anksiyete' },
    { href: '/hizmetler/panik-atak', label: 'Panik Atak' },
    { href: '/hizmetler/okb', label: 'OKB' },
    { href: '/hizmetler/dikkat-eksikligi', label: 'Dikkat Eksikliği' },
    { href: '/hizmetler/bipolar-bozukluk', label: 'Bipolar Bozukluk' },
    { href: '/hizmetler/uyku-bozukluklari', label: 'Uyku Bozuklukları' },
    { href: '/hizmetler/yetiskin-psikiyatrisi', label: 'Yetişkin Psikiyatrisi' },
    { href: '/hizmetler/cocuk-ve-ergen-psikiyatrisi', label: 'Çocuk ve Ergen Psikiyatrisi' },
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerGlow}></div>
            <div className={`container ${styles.footerInner}`}>
                <div className={styles.footerGrid}>
                    {/* Brand Column */}
                    <div className={styles.footerBrand}>
                        <div className={styles.brandLogo}>
                            <div className={styles.brandIcon}>
                                <Image src="/logo.png" alt="Dr. Abdullah Maraş Logo" width={40} height={40} />
                            </div>
                            <div>
                                <div className={styles.brandName}>Uzm. Dr. Abdullah Maraş</div>
                                <div className={styles.brandTitle}>Ruh Sağlığı ve Hastalıkları Uzmanı</div>
                            </div>
                        </div>
                        <p className={styles.brandDesc}>
                            Ankara Eryaman&apos;da, bilimsel ve etik çerçevede ruh sağlığı değerlendirmesi ve bireysel
                            destek süreçleri sunan psikiyatri kliniği.
                        </p>
                        <div className={styles.brandLocation}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <span>Altay Mahallesi, Eryaman / Ankara</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.footerCol}>
                        <h4 className={styles.footerColTitle}>Hızlı Erişim</h4>
                        <ul className={styles.footerLinks}>
                            <li><Link href="/">Ana Sayfa</Link></li>
                            <li><Link href="/hakkinda">Hakkında</Link></li>
                            <li><Link href="/hizmetler">Hizmetler</Link></li>
                            <li><Link href="/randevu">Randevu</Link></li>
                            <li><Link href="/iletisim">İletişim</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className={styles.footerCol}>
                        <h4 className={styles.footerColTitle}>Değerlendirme Alanları</h4>
                        <ul className={styles.footerLinks}>
                            {services.map((s) => (
                                <li key={s.href}><Link href={s.href}>{s.label}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Info */}
                    <div className={styles.footerCol}>
                        <h4 className={styles.footerColTitle}>Bilgilendirme</h4>
                        <div className={styles.footerNotice}>
                            <p>
                                Bu web sitesindeki içerikler bilgilendirme amaçlıdır.
                                Tanı ve tedavi süreçleri için mutlaka uzman değerlendirmesi gereklidir.
                            </p>
                            <p>
                                Sağlık Bakanlığı düzenlemelerine uygun olarak hazırlanmıştır.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>&copy; {new Date().getFullYear()} Uzm. Dr. Abdullah Maraş – Tüm hakları saklıdır.</p>
                    <p className={styles.footerDisclaimer}>
                        Bu site tıbbi tanı veya tedavi önerisi sunmamaktadır.
                    </p>
                </div>
            </div>
        </footer>
    );
}
