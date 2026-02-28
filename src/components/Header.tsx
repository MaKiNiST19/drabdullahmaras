'use client';

import Link from 'next/link';
import Image from 'next/image';
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
                        <Image src="/logo.png" alt="Uzm. Dr. Abdullah Maraş Logo" width={40} height={40} priority />
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
