'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const navLinks = [
    { href: '/', label: 'Ana Sayfa' },
    { href: '/hakkinda', label: 'Hakkında' },
    { href: '/hizmetler', label: 'Çalışma Alanları' },
    { href: '/iletisim', label: 'İletişim' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prozen uses Offcanvas logic
    const toggleOffcanvas = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeOffcanvas = () => setIsMobileMenuOpen(false);

    return (
        <>
            <header className="ht-header-area header-1">
                {/* Top Header */}
                <div className="ht-top-header" style={{ fontSize: "14px", padding: "4px 0" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="left">
                                    <p style={{ margin: 0 }}>
                                        <i className="fa-solid fa-location-dot" /> Altay Mahallesi Orhan Bey Caddesi Ata Yıldız Plaza No:1 Kat:1 Daire:4, Eryaman / Ankara
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <ul className="right justify-content-lg-end" style={{ margin: 0 }}>
                                    <li>
                                        <i className="fa-solid fa-phone" />
                                        <Link href="tel:+903125045399">0 312 504 53 99</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Header */}
                <div className={`ht-main-header header-1${isScrolled ? " sticky" : " pill-header"}`}>
                    <div className="container">
                        <div className="ht-menu-wrapper">
                            <div className="ht-menu-left">
                                {/* Logo */}
                                <div className="ht-menu-logo">
                                    <Link href="/">
                                        <Image
                                            src="/logo.png"
                                            alt="Uzm. Dr. Abdullah Maraş Logo"
                                            width={280}
                                            height={60}
                                            priority
                                            quality={100}
                                        />
                                    </Link>
                                </div>
                            </div>

                            {/* Menu - Now outside left group for better alignment control */}
                            <div className="ht-menu-main d-none d-lg-block flex-grow-1 text-end">
                                <nav className="ht-mobile-menu-active">
                                    <ul className="d-inline-flex">
                                        {navLinks.map((link, index) => (
                                            <li key={index} className="ms-4">
                                                <Link href={link.href}>
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>

                            {/* Right */}
                            <div className="ht-menu-right">
                                <Link
                                    href="/randevu"
                                    className="ht-btn d-none d-lg-block"
                                >
                                    Randevu Al
                                </Link>

                                <button
                                    type="button"
                                    className="ht-menu-btn d-lg-none offcanvas-toggle"
                                    onClick={toggleOffcanvas}
                                    style={{ border: "none", background: "none" }}
                                    aria-label="Menüyü aç/kapat"
                                >
                                    <i className="fa-solid fa-bars-staggered" style={{ fontSize: "24px" }} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Offcanvas */}
            <div className={`ht-offcanvas${isMobileMenuOpen ? " ht-offcanvas-open" : ""}`} style={{ zIndex: 99999 }}>
                <div className="ht-offcanvas-wrapper">
                    {/* Header */}
                    <div className="ht-offcanvas-header mb-50" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Link href="/" className="ht-offcanvas-logo" onClick={closeOffcanvas}>
                            <Image
                                src="/logo.png"
                                alt="Uzm. Dr. Abdullah Maraş Logo"
                                width={200}
                                height={36}
                            />
                        </Link>

                        <button
                            type="button"
                            className="ht-offcanvas-toggle-close"
                            onClick={closeOffcanvas}
                            aria-label="Kapat"
                        >
                            <i className="fas fa-times" />
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <div className="ht-offcanvas-menu d-xl-none mb-50">
                        <nav>
                            <ul style={{ padding: 0, listStyle: "none" }}>
                                {navLinks.map((link, index) => (
                                    <li key={index} style={{ marginBottom: "15px", borderBottom: "1px solid rgba(0,0,0,0.05)", paddingBottom: "10px" }}>
                                        <Link
                                            href={link.href}
                                            onClick={closeOffcanvas}
                                            style={{ color: "#1a2332", fontSize: "18px", fontWeight: "600", textDecoration: "none" }}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                                <li style={{ marginTop: "30px" }}>
                                    <Link
                                        href="/randevu"
                                        onClick={closeOffcanvas}
                                        className="ht-btn w-100 text-center"
                                        style={{
                                            display: "block",
                                            textDecoration: "none"
                                        }}
                                    >
                                        Randevu Al
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* Info */}
                    <div className="ht-offcanvas-info mb-50">
                        <h3 className="ht-offcanvas__title" style={{ fontSize: "20px", marginBottom: "20px" }}>İletişim</h3>
                        <span style={{ display: "block", marginBottom: "10px" }}>
                            <i className="fa-solid fa-location-dot" style={{ color: "var(--primary-500)", marginRight: "8px" }} />
                            Altay Mahallesi Orhan Bey Caddesi Ata Yıldız Plaza No:1 Kat:1 Daire:4, Eryaman / Ankara
                        </span>
                        <span>
                            <i className="fa-solid fa-phone" style={{ color: "var(--primary-500)", marginRight: "8px" }} />
                            <Link href="tel:+903125045399" style={{ color: "#6b7d93", textDecoration: "none" }}>0 312 504 53 99</Link>
                        </span>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            <div
                className={`ht-offcanvas-overlay${isMobileMenuOpen ? " ht-offcanvas-overlay-open" : ""}`}
                onClick={closeOffcanvas}
                role="button"
                tabIndex={0}
                aria-label="Menüyü kapat"
                style={{ zIndex: 99998 }}
            />
        </>
    );
}
