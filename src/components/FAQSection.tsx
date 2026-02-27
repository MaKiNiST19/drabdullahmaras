'use client';

import { useState } from 'react';

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
        <div className="faq-list">
            {title && (
                <div className="section-header" style={{ marginBottom: '2rem' }}>
                    <h2>{title}</h2>
                    {subtitle && <p>{subtitle}</p>}
                </div>
            )}
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                >
                    <button className="faq-question" onClick={() => toggle(index)}>
                        <span>{item.question}</span>
                        <span className="faq-icon">+</span>
                    </button>
                    <div className="faq-answer">
                        <p>{item.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
