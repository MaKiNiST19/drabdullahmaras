'use client';

import React, { useEffect, useRef, useMemo, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ScrollReveal.css';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealProps {
    children: ReactNode;
    scrollContainerRef?: React.RefObject<HTMLElement>;
    enableBlur?: boolean;
    baseOpacity?: number;
    baseRotation?: number;
    blurStrength?: number;
    containerClassName?: string;
    textClassName?: string;
    rotationEnd?: string;
    wordAnimationEnd?: string;
    as?: React.ElementType;
}

const ScrollReveal = ({
    children,
    scrollContainerRef,
    enableBlur = true,
    baseOpacity = 0.1,
    baseRotation = 3,
    blurStrength = 4,
    containerClassName = '',
    textClassName = '',
    rotationEnd = 'bottom bottom',
    wordAnimationEnd = 'bottom bottom',
    as: Component = 'div',
}: ScrollRevealProps) => {
    const containerRef = useRef<HTMLElement>(null);

    const splitContent = useMemo(() => {
        if (typeof children === 'string') {
            return children.split(/(\s+)/).map((word, index) => {
                if (word.match(/^\s+$/)) return word;
                return (
                    <span className="word" key={index} style={{ display: 'inline-block', whiteSpace: 'pre-wrap' }}>
                        {word}
                    </span>
                );
            });
        }

        if (Array.isArray(children)) {
            return React.Children.map(children, (child, index) => (
                <span className="word" key={index} style={{ display: 'block', width: '100%' }}>
                    {child}
                </span>
            ));
        }

        return (
            <span className="word" style={{ display: 'block', width: '100%' }}>
                {children}
            </span>
        );
    }, [children]);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

        const t1 = gsap.fromTo(
            el,
            { transformOrigin: '0% 50%', rotate: baseRotation, willChange: 'transform' },
            {
                ease: 'none',
                rotate: 0,
                scrollTrigger: {
                    trigger: el,
                    scroller,
                    start: 'top bottom',
                    end: rotationEnd,
                    scrub: true
                }
            }
        );

        const wordElements = el.querySelectorAll('.word');

        const t2 = gsap.fromTo(
            wordElements,
            { opacity: baseOpacity, willChange: 'opacity, transform' },
            {
                ease: 'none',
                opacity: 1,
                stagger: 0.05,
                scrollTrigger: {
                    trigger: el,
                    scroller,
                    start: 'top bottom-=20%',
                    end: wordAnimationEnd,
                    scrub: true
                }
            }
        );

        let t3: gsap.core.Tween | null = null;
        if (enableBlur) {
            t3 = gsap.fromTo(
                wordElements,
                { filter: `blur(${blurStrength}px)`, willChange: 'filter' },
                {
                    ease: 'none',
                    filter: 'blur(0px)',
                    stagger: 0.05,
                    scrollTrigger: {
                        trigger: el,
                        scroller,
                        start: 'top bottom-=20%',
                        end: wordAnimationEnd,
                        scrub: true
                    }
                }
            );
        }

        return () => {
            t1.scrollTrigger?.kill();
            t2.scrollTrigger?.kill();
            if (t3) t3.scrollTrigger?.kill();
            t1.kill();
            t2.kill();
            if (t3) t3.kill();
        };
    }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength]);

    return (
        <Component ref={containerRef} className={`scroll-reveal ${containerClassName} ${textClassName}`.trim()}>
            {splitContent}
        </Component>
    );
};

export default ScrollReveal;
