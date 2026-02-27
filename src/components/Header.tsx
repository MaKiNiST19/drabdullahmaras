'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';

const navLinks = [
    { href: '/', label: 'Ana Sayfa' },
    { href: '/hakkinda', label: 'Hakkında' },
    { href: '/hizmetler', label: 'Hizmetler' },
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

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.headerInner}`}>
                <Link href="/" className={styles.logo}>
                    <div className={styles.logoIcon}>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 2C7.37 2 2 7.37 2 14s5.37 12 12 12 12-5.37 12-12S20.63 2 14 2z" stroke="currentColor" strokeWidth="2" fill="none" />
                            <path d="M14 8v4m0 0v4m0-4h4m-4 0h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <circle cx="14" cy="14" r="8" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.4" />
                        </svg>
                    </div>
                    <div className={styles.logoText}>
                        <span className={styles.logoName}>Uzm. Dr. Abdullah Maraş</span>
                        <span className={styles.logoTitle}>Psikiyatri Uzmanı</span>
                    </div>
                </Link>

                <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={styles.navLink}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link href="/randevu" className={`btn btn--primary btn--sm ${styles.navCta}`} onClick={() => setIsMobileMenuOpen(false)}>
                        Randevu Al
                    </Link>
                </nav>

                <button
                    className={`${styles.burger} ${isMobileMenuOpen ? styles.burgerOpen : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Menüyü aç/kapat"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
}
