import { useEffect, useState } from 'react';

const TOTAL_DURATION = 2800; // ms before fade-out begins

export default function LoadingScreen({ onComplete }) {
    const [phase, setPhase] = useState('init'); // init → name → subtitle → bar → done

    useEffect(() => {
        // Sequence
        const t1 = setTimeout(() => setPhase('name'), 200);
        const t2 = setTimeout(() => setPhase('subtitle'), 900);
        const t3 = setTimeout(() => setPhase('bar'), 1300);
        const t4 = setTimeout(() => setPhase('fade'), TOTAL_DURATION);
        const t5 = setTimeout(() => onComplete(), TOTAL_DURATION + 600);

        return () => [t1, t2, t3, t4, t5].forEach(clearTimeout);
    }, [onComplete]);

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 9000,
                background: 'var(--black)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
                opacity: phase === 'fade' ? 0 : 1,
                pointerEvents: phase === 'fade' ? 'none' : 'all',
            }}
        >
            {/* Grid background */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'linear-gradient(rgba(255,0,85,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,85,0.04) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
            }} />

            {/* CRT scanlines overlay */}
            <div style={{
                position: 'absolute', inset: 0,
                background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.07) 3px, rgba(0,0,0,0.07) 4px)',
                pointerEvents: 'none',
            }} />

            {/* Ambient glow */}
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                <div style={{ position: 'absolute', width: 500, height: 500, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'radial-gradient(circle, rgba(255,0,85,0.09), transparent 70%)', filter: 'blur(40px)' }} />
                <div style={{ position: 'absolute', width: 350, height: 350, top: '30%', left: '30%', background: 'radial-gradient(circle, rgba(0,229,255,0.05), transparent 70%)', filter: 'blur(60px)' }} />
            </div>

            {/* Main content */}
            <div style={{ position: 'relative', textAlign: 'center' }}>

                {/* Pre-load terminal line */}
                <div style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: '0.75rem', fontWeight: 600,
                    letterSpacing: '0.3em', textTransform: 'uppercase',
                    color: 'rgba(255,0,85,0.5)',
                    marginBottom: 28,
                    opacity: phase === 'init' ? 0 : 1,
                    transform: phase === 'init' ? 'translateY(8px)' : 'translateY(0)',
                    transition: 'opacity 0.4s ease, transform 0.4s ease',
                    display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center',
                }}>
                    <span style={{ display: 'inline-block', width: 20, height: 1, background: 'var(--pink)', boxShadow: '0 0 6px var(--pink)' }} />
                    Initializing Systems
                    <span style={{ display: 'inline-block', width: 20, height: 1, background: 'var(--pink)', boxShadow: '0 0 6px var(--pink)' }} />
                </div>

                {/* Glitch name */}
                <h1
                    className={phase !== 'init' ? 'loader-glitch' : ''}
                    data-text="INTEKHAB PATHAN"
                    style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: 'clamp(3.5rem, 10vw, 8rem)',
                        lineHeight: 1,
                        letterSpacing: '0.07em',
                        color: 'var(--white)',
                        opacity: phase === 'init' ? 0 : 1,
                        transform: phase === 'init' ? 'translateY(30px) scale(0.96)' : 'translateY(0) scale(1)',
                        transition: 'opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1)',
                    }}
                >
                    INTEKHAB <span style={{ color: 'var(--pink)', textShadow: '0 0 40px rgba(255,0,85,0.6)' }}>PATHAN</span>
                </h1>

                {/* Role subtitle */}
                <p style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 'clamp(0.9rem, 2.5vw, 1.3rem)',
                    fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase',
                    color: 'var(--cyan)',
                    textShadow: '0 0 20px rgba(0,229,255,0.4)',
                    marginTop: 16,
                    opacity: phase === 'init' || phase === 'name' ? 0 : 1,
                    transform: phase === 'init' || phase === 'name' ? 'translateY(10px)' : 'translateY(0)',
                    transition: 'opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s',
                }}>
                    Full Stack Developer · AI Agent Engineer
                </p>

                {/* Loading bar */}
                <div style={{
                    marginTop: 48,
                    opacity: phase === 'init' || phase === 'name' ? 0 : 1,
                    transition: 'opacity 0.4s ease',
                    width: 'min(450px, 80vw)',
                    marginInline: 'auto',
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                        <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,0,85,0.5)' }}>Loading</span>
                        <span id="load-pct" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '0.9rem', letterSpacing: '0.12em', color: 'var(--pink)' }}>
                            <LoadingPct active={phase === 'bar' || phase === 'fade'} />
                        </span>
                    </div>
                    <div style={{ width: '100%', height: 2, background: 'rgba(255,0,85,0.12)', position: 'relative', overflow: 'hidden' }}>
                        {/* Segmented bar overlay */}
                        <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(0,0,0,0.3) 5px, rgba(0,0,0,0.3) 6px)', zIndex: 2 }} />
                        <div style={{
                            height: '100%',
                            background: 'linear-gradient(90deg, var(--pink), var(--orange, #FF6B00), var(--yellow))',
                            boxShadow: '0 0 12px var(--pink)',
                            transition: 'width 1.4s cubic-bezier(0.16,1,0.3,1)',
                            width: (phase === 'bar' || phase === 'fade') ? '100%' : '0%',
                            position: 'relative', zIndex: 1,
                        }} />
                    </div>
                </div>

            </div>

            {/* Corner marks */}
            <CornerMark pos="tl" />
            <CornerMark pos="br" />
        </div>
    );
}

/* Counts 0→100 during bar phase */
function LoadingPct({ active }) {
    const [pct, setPct] = useState(0);
    useEffect(() => {
        if (!active) { setPct(0); return; }
        let n = 0;
        const iv = setInterval(() => {
            n += Math.floor(Math.random() * 5) + 3;
            if (n >= 100) { setPct(100); clearInterval(iv); return; }
            setPct(n);
        }, 50);
        return () => clearInterval(iv);
    }, [active]);
    return <>{pct}%</>;
}

function CornerMark({ pos }) {
    const isTopLeft = pos === 'tl';
    const style = {
        position: 'absolute',
        ...(isTopLeft ? { top: 32, left: 32 } : { bottom: 32, right: 32 }),
    };
    const hStyle = {
        position: 'absolute',
        width: 24, height: 2,
        background: 'var(--pink)',
        boxShadow: '0 0 8px var(--pink)',
        ...(isTopLeft ? { top: 0, left: 0 } : { bottom: 0, right: 0 }),
    };
    const vStyle = {
        position: 'absolute',
        width: 2, height: 24,
        background: 'var(--pink)',
        boxShadow: '0 0 8px var(--pink)',
        ...(isTopLeft ? { top: 0, left: 0 } : { bottom: 0, right: 0 }),
    };
    return (
        <div style={style}>
            <div style={hStyle} />
            <div style={vStyle} />
        </div>
    );
}
