import { useEffect, useState } from 'react';

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const el = document.documentElement;
            const scrolled = el.scrollTop || document.body.scrollTop;
            const max = el.scrollHeight - el.clientHeight;
            setProgress(max > 0 ? (scrolled / max) * 100 : 0);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-[100] h-[2px] bg-transparent">
            <div
                className="h-full transition-all duration-100"
                style={{
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, #00f5ff, #7b2fff)',
                    boxShadow: '0 0 8px rgba(0,245,255,0.6)',
                }}
            />
        </div>
    );
}
