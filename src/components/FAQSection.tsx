'use client';

import { useState } from 'react';
import styles from './FAQSection.module.css';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    items: FAQItem[];
    title?: string;
    subtitle?: string;
}

export default function FAQSection({ items, title, subtitle }: FAQSectionProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={styles.faqList}>
            {title && (
                <div className="section-header" style={{ marginBottom: '2rem' }}>
                    <h2>{title}</h2>
                    {subtitle && <p>{subtitle}</p>}
                </div>
            )}
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`${styles.faqItem} ${activeIndex === index ? styles.faqItemActive : ''}`}
                >
                    <button
                        className={styles.faqQuestion}
                        onClick={() => toggle(index)}
                        aria-expanded={activeIndex === index}
                    >
                        <span>{item.question}</span>
                        <div className={styles.faqIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </div>
                    </button>
                    <div className={styles.faqAnswer} aria-hidden={activeIndex !== index}>
                        <p>{item.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
