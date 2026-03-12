import { useEffect } from 'react';

export default function AnimatedBackground() {
    useEffect(() => {
        // Floating particles
        const pc = document.getElementById('particles-container');
        if (pc) {
            for (let i = 0; i < 30; i++) {
                const p = document.createElement('div');
                const size = Math.random() * 2.5 + 0.5;
                const colors = ['#FF0055', '#00E5FF', '#FFD600', '#B400FF', '#FF6B00'];
                const c = colors[Math.floor(Math.random() * colors.length)];
                const dur = Math.random() * 20 + 12;
                const delay = Math.random() * 15;
                p.style.cssText = `
          position:absolute;width:${size}px;height:${size}px;
          background:${c};border-radius:50%;
          box-shadow:0 0 ${size * 4}px ${c};
          left:${Math.random() * 100}%;
          animation:floatUp ${dur}s ${delay}s linear infinite;
          pointer-events:none;
        `;
                pc.appendChild(p);
            }
        }

        // Ambient glow scroll parallax
        const onScroll = () => {
            const p = window.scrollY / (document.body.scrollHeight - window.innerHeight);
            const a1 = document.getElementById('amb1');
            if (a1) a1.style.top = (-200 + p * 500) + 'px';
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            {/* Floating particles container */}
            <div
                id="particles-container"
                style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 1, overflow: 'hidden' }}
            />

            {/* Ambient glows */}
            <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
                <div
                    id="amb1"
                    style={{
                        position: 'absolute',
                        width: 600, height: 600,
                        top: -200, left: '20%',
                        background: 'radial-gradient(circle, rgba(255,0,85,0.07), transparent 70%)',
                        filter: 'blur(40px)',
                        transition: 'top 1s ease',
                    }}
                />
                <div
                    id="amb2"
                    style={{
                        position: 'absolute',
                        width: 500, height: 500,
                        bottom: '10%', right: '10%',
                        background: 'radial-gradient(circle, rgba(0,229,255,0.05), transparent 70%)',
                        filter: 'blur(40px)',
                    }}
                />
                <div
                    id="amb3"
                    style={{
                        position: 'absolute',
                        width: 400, height: 400,
                        top: '40%', left: -100,
                        background: 'radial-gradient(circle, rgba(180,0,255,0.04), transparent 70%)',
                        filter: 'blur(60px)',
                    }}
                />
            </div>
        </>
    );
}
