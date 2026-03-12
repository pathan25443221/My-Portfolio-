import { useEffect, useRef } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*!+=~';

export function useScramble() {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Need original text to scramble to
        const originalText = el.getAttribute('data-text') || el.innerText;
        el.setAttribute('data-text', originalText);

        let iterations = 0;
        let interval = null;

        const startScramble = () => {
            clearInterval(interval);
            iterations = 0;

            interval = setInterval(() => {
                el.innerText = originalText
                    .split('')
                    .map((char, index) => {
                        if (index < iterations) {
                            return originalText[index];
                        }
                        // keep spaces as spaces
                        if (char === ' ') return ' ';
                        return CHARS[Math.floor(Math.random() * CHARS.length)];
                    })
                    .join('');

                if (iterations >= originalText.length) {
                    clearInterval(interval);
                }

                // Adjust speed/density of scrambling: lower += increment means more scrambling frames
                iterations += 1 / 3;
            }, 30);
        };

        // Use IntersectionObserver to start scrambling when visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startScramble();
                    // optionally disconnect if you only want it to happen once
                    // observer.disconnect();
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        observer.observe(el);

        return () => {
            clearInterval(interval);
            observer.disconnect();
        };
    }, []);

    return ref;
}
