import Link from 'next/link';
import Image from 'next/image';

const services = [
    { href: '/hizmetler/depresyon', label: 'Depresyon' },
    { href: '/hizmetler/anksiyete', label: 'Anksiyete' },
    { href: '/hizmetler/panik-atak', label: 'Panik Atak' },
    { href: '/hizmetler/okb', label: 'OKB' },
    { href: '/hizmetler/dikkat-eksikligi', label: 'Dikkat Eksikliği' },
    { href: '/hizmetler/bipolar-bozukluk', label: 'Bipolar Bozukluk' },
    { href: '/hizmetler/uyku-bozukluklari', label: 'Uyku Bozuklukları' },
    { href: '/hizmetler/cinsel-bozukluklar', label: 'Cinsel Bozukluklar' },
    { href: '/hizmetler/yetiskin-psikiyatrisi', label: 'Yetişkin Psikiyatrisi' },
    { href: '/hizmetler/16-yas-uzeri-ergen-psikiyatrisi', label: '16 Yaş Üzeri Ergen Psikiyatri' },
];

export default function Footer() {
    return (
        <footer className="ht-footer-area fix" style={{ backgroundColor: "var(--bg-dark)", color: "var(--text-inverse)", paddingTop: "80px" }}>
            <div className="container">
                {/* Top / Brand Info */}
                <div className="ht-footer-top-wrapper pb-5 border-bottom border-light border-opacity-10 mb-5">
                    <div className="row align-items-center">
                        <div className="col-lg-5 mb-4 mb-lg-0">
                            <div className="ht-footer-top-left">
                                <Link href="/" className="d-inline-block mb-4">
                                    <Image src="/logo.png" alt="Dr. Abdullah Maraş Logo" width={220} height={40} style={{ filter: "brightness(0) invert(1)" }} />
                                </Link>
                                <p className="desc mb-0 text-white-50" style={{ fontSize: "15px", lineHeight: "1.8" }}>
                                    Ankara Eryaman&apos;da, bilimsel ve etik çerçevede ruh sağlığı değerlendirmesi ve bireysel destek süreçleri sunan psikiyatri kliniği. Bu web sitesindeki içerikler bilgilendirme amaçlıdır. Tanı ve tedavi süreçleri için mutlaka uzman değerlendirmesi gereklidir.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="row">
                                <div className="col-md-6 mb-4 mb-md-0 d-flex flex-column gap-3 text-white-50">
                                    <div className="d-flex align-items-start gap-3">
                                        <div className="mt-1 flex-shrink-0">
                                            <i className="fa-solid fa-location-dot" style={{ color: "var(--primary-300)" }}></i>
                                        </div>
                                        <span>Altay Mahallesi Orhan Bey Caddesi Ata Yıldız Plaza No:1<br />Kat:1 Daire:4, Eryaman / Ankara</span>
                                    </div>
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="flex-shrink-0">
                                            <i className="fa-solid fa-phone" style={{ color: "var(--primary-300)" }}></i>
                                        </div>
                                        <span>0 312 504 53 99</span>
                                    </div>
                                    <div className="d-flex align-items-start gap-3" style={{ fontSize: "13px" }}>
                                        <div className="mt-1 flex-shrink-0">
                                            <i className="fa-regular fa-clock" style={{ color: "var(--primary-300)" }}></i>
                                        </div>
                                        <span>*Randevu saatlerimiz hafta içi 09:00 - 18:00 ve Cumartesi 09:00 - 16:00 arasındadır.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Widgets */}
                <div className="ht-footer-widget-wrapper pt-2">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <div className="ht-footer-widget-items">
                                <h5 className="head text-white mb-4" style={{ fontSize: "18px", fontWeight: "600" }}>Hızlı Erişim</h5>
                                <ul className="link-list list-unstyled d-flex flex-column gap-2" style={{ padding: 0 }}>
                                    <li><Link href="/" className="text-white-50 text-decoration-none">Ana Sayfa</Link></li>
                                    <li><Link href="/hakkinda" className="text-white-50 text-decoration-none">Hakkında</Link></li>
                                    <li><Link href="/hizmetler" className="text-white-50 text-decoration-none">Hizmetler</Link></li>
                                    <li><Link href="/randevu" className="text-white-50 text-decoration-none">Randevu</Link></li>
                                    <li><Link href="/iletisim" className="text-white-50 text-decoration-none">İletişim</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-6">
                            <div className="ht-footer-widget-items">
                                <h5 className="head text-white mb-4" style={{ fontSize: "18px", fontWeight: "600" }}>Değerlendirme Alanları</h5>
                                <ul className="link-list list-unstyled d-flex flex-wrap gap-x-4 gap-y-2" style={{ padding: 0, gap: "10px 20px" }}>
                                    {services.map((s) => (
                                        <li key={s.href} style={{ flex: "0 0 calc(50% - 10px)" }}>
                                            <Link href={s.href} className="text-white-50 text-decoration-none">{s.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="ht-footer-copyright border-top border-light border-opacity-10 py-4 mt-5 d-flex flex-column flex-md-row justify-content-between text-white-50" style={{ fontSize: "14px" }}>
                    <p className="mb-2 mb-md-0">
                        &copy; {new Date().getFullYear()} Uzm. Dr. Abdullah Maraş – Tüm hakları saklıdır.
                    </p>
                    <p className="mb-0">
                        Sağlık Bakanlığı düzenlemelerine uygun olarak hazırlanmıştır.
                    </p>
                </div>
            </div>
        </footer>
    );
}
