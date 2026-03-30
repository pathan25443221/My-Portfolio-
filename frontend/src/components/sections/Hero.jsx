import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const TICKER_ITEMS = [
    'Python', 'FastAPI', 'n8n Automation', 'AI Agents', 'LangChain',
    'Prompt Engineering', 'MCP Tools', 'WhatsApp API', 'Java', 'PostgreSQL', 'OpenCV',
    'Python', 'FastAPI', 'n8n Automation', 'AI Agents', 'LangChain', 'Prompt Engineering',
];

export default function Hero() {
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const katanaSvgRef = useRef(null);
    const bladeLineRef = useRef(null);
    const glowBehindRef = useRef(null);
    const heroBarRef = useRef(null);
    const scrollIndicatorRef = useRef(null);
    const slashFlashRef = useRef(null);
    const lightSweepRef = useRef(null);
    const particlesRef = useRef(null);
    const risingSakuraRef = useRef(null);

    useEffect(() => {
        const firstName = firstNameRef.current;
        const lastName = lastNameRef.current;
        const katanaSvg = katanaSvgRef.current;
        const bladeLine = bladeLineRef.current;
        const glowBehind = glowBehindRef.current;
        const heroBar = heroBarRef.current;
        const scrollIndicator = scrollIndicatorRef.current;
        const slashFlash = slashFlashRef.current;
        const lightSweep = lightSweepRef.current;

        if (!firstName) return;

        // ── SCRAMBLE LOGIC ──
        const scramble = (id, originalText, duration = 2) => {
            const el = document.getElementById(id);
            if (!el) return Promise.resolve();
            const kana = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
            const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const frameInterval = 75; // Matching index2.html
            let lastUpdate = 0;
            let startTime = 0;

            return new Promise(resolve => {
                function tick(ts) {
                    if (!startTime) startTime = ts;
                    const progress = Math.min((ts - startTime) / (duration * 1000), 1);
                    
                    if (ts - lastUpdate >= frameInterval) {
                        lastUpdate = ts;
                        let result = '';
                        for (let i = 0; i < originalText.length; i++) {
                            const ch = originalText[i];
                            if (ch === ' ' || ch === '.') { result += ch; continue; }
                            
                            // Gradually resolve characters shifted by 0.3 like in index2.html
                            if (progress > (i / originalText.length) + 0.3) {
                                result += ch;
                            } else {
                                const pool = Math.random() > 0.5 ? kana : latin;
                                result += pool[Math.floor(Math.random() * pool.length)];
                            }
                        }
                        el.textContent = result;
                    }

                    if (progress < 1) {
                        requestAnimationFrame(tick);
                    } else {
                        el.textContent = originalText;
                        resolve();
                    }
                }
                requestAnimationFrame(tick);
            });
        };

        const lockWidth = (el) => {
            if (!el) return;
            const w = el.getBoundingClientRect().width;
            el.style.width = w + 'px';
            el.style.display = 'inline-block';
            el.style.textAlign = 'center';
        };

        // ── PETAL TRAIL LOGIC ──
        const initPetalTrail = () => {
            const canvas = particlesRef.current;
            if (!canvas) return;
            const ns = 'http://www.w3.org/2000/svg';
            const colors = ['#C0282C', '#C8A96E', '#B50030', '#E8B4C0', '#C87890', '#F5D08A'];
            let lx = -999, ly = -999, lt = 0;

            const defs = [
                { vb: '0 0 20 18', d: 'M10 16 C4 16,0.5 11,0.5 7 C0.5 3,3.5 0.5,7 1.5 C8 1.8,9 2.5,10 1 C11 2.5,12 1.8,13 1.5 C16.5 0.5,19.5 3,19.5 7 C19.5 11,16 16,10 16Z', w: 1.3, h: 1.0 },
                { vb: '0 0 18 20', d: 'M9 18 C3 17,0.5 12,1 7.5 C1.5 3,4 0.5,7.5 1 C9 1.2,10.5 2,11.5 1.2 C14.5 0,17.5 2.5,17 7 C16.5 12,14 17.5,9 18Z', w: 1.1, h: 1.3 },
                { vb: '0 0 22 16', d: 'M11 14.5 C5 15,0.5 11,0.5 7 C0.5 3.5,3.5 1,7 1.5 C9 1.8,10 3,11 1.5 C12 3,13 1.8,15 1.5 C18.5 1,21.5 3.5,21.5 7 C21.5 11,17 15,11 14.5Z', w: 1.5, h: 0.95 },
            ];

            const spawnPetal = (x, y) => {
                const def = defs[Math.floor(Math.random() * defs.length)];
                const color = colors[Math.floor(Math.random() * colors.length)];
                const size = 5 + Math.random() * 7; // Smaller trail petals
                const w = size * def.w, h = size * def.h;

                const wrap = document.createElement('div');
                wrap.className = 'trail-petal';
                Object.assign(wrap.style, {
                    left: (x - w / 2) + 'px', top: (y - h / 2) + 'px',
                    width: w + 'px', height: h + 'px',
                });

                const svg = document.createElementNS(ns, 'svg');
                svg.setAttribute('viewBox', def.vb);
                svg.setAttribute('width', w); svg.setAttribute('height', h);

                const path = document.createElementNS(ns, 'path');
                path.setAttribute('d', def.d);
                path.setAttribute('fill', color);
                path.setAttribute('opacity', (0.72 + Math.random() * 0.2).toFixed(2));

                svg.appendChild(path);
                wrap.appendChild(svg);
                canvas.appendChild(wrap);

                const driftX = (Math.random() - 0.5) * 90;
                const fallY = 70 + Math.random() * 90;
                const spin = (Math.random() > 0.5 ? 1 : -1) * (160 + Math.random() * 220);
                const dur = 1100 + Math.random() * 900;

                const anim = wrap.animate([
                    { transform: `rotate(${Math.random() * 30 - 15}deg) scale(1)`, opacity: 0.85 },
                    { transform: `translate(${driftX * 0.45}px,${fallY * 0.45}px) rotate(${spin * 0.5}deg) scale(0.85)`, opacity: 0.65, offset: 0.4 },
                    { transform: `translate(${driftX}px,${fallY}px) rotate(${spin}deg) scale(0.3)`, opacity: 0 }
                ], { duration: dur, easing: 'cubic-bezier(0.25,0.46,0.45,0.94)', fill: 'forwards' });
                anim.onfinish = () => wrap.remove();
            };

            const handleMove = (e) => {
                const now = Date.now();
                const dx = e.clientX - lx, dy = e.clientY - ly;
                if (Math.sqrt(dx * dx + dy * dy) < 28 || now - lt < 55) return;
                lx = e.clientX; ly = e.clientY; lt = now;
                spawnPetal(e.clientX, e.clientY);
            };

            document.addEventListener('mousemove', handleMove);
            return () => document.removeEventListener('mousemove', handleMove);
        };

        const cleanupPetals = initPetalTrail();

        // ── RISING SAKURA LOGIC ──
        const initRisingSakura = () => {
            const container = risingSakuraRef.current;
            if (!container) return;

            const ns = 'http://www.w3.org/2000/svg';
            const colors = ['#E8B4C0', '#F5D08A', '#FFB7C5', '#C87890', '#FFFFFF'];
            const defs = [
                { vb: '0 0 20 18', d: 'M10 16 C4 16,0.5 11,0.5 7 C0.5 3,3.5 0.5,7 1.5 C8 1.8,9 2.5,10 1 C11 2.5,12 1.8,13 1.5 C16.5 0.5,19.5 3,19.5 7 C19.5 11,16 16,10 16Z' },
                { vb: '0 0 18 20', d: 'M9 18 C3 17,0.5 12,1 7.5 C1.5 3,4 0.5,7.5 1 C9 1.2,10.5 2,11.5 1.2 C14.5 0,17.5 2.5,17 7 C16.5 12,14 17.5,9 18Z' },
            ];

            const spawnRisingPetal = () => {
                const def = defs[Math.floor(Math.random() * defs.length)];
                const color = colors[Math.floor(Math.random() * colors.length)];
                const size = 15 + Math.random() * 20;
                const left = Math.random() * 100;

                const petal = document.createElement('div');
                petal.className = 'sakura-petal';
                Object.assign(petal.style, {
                    left: `${left}%`,
                    top: '110%',
                    width: `${size}px`,
                    height: `${size}px`,
                    opacity: 0.6 + Math.random() * 0.4,
                });

                const svg = document.createElementNS(ns, 'svg');
                svg.setAttribute('viewBox', def.vb);
                svg.setAttribute('width', '100%');
                svg.setAttribute('height', '100%');

                const path = document.createElementNS(ns, 'path');
                path.setAttribute('d', def.d);
                path.setAttribute('fill', color);
                
                svg.appendChild(path);
                petal.appendChild(svg);
                container.appendChild(petal);

                const dur = 8 + Math.random() * 8;
                const drift = (Math.random() - 0.5) * 250;
                const rotation = 360 + Math.random() * 720;

                gsap.to(petal, {
                    y: -window.innerHeight - 200,
                    x: drift,
                    rotation: rotation,
                    duration: dur,
                    ease: "none",
                    onComplete: () => petal.remove()
                });
            };

            const interval = setInterval(spawnRisingPetal, 450);
            
            // Initial burst
            for(let i=0; i<8; i++) {
                setTimeout(spawnRisingPetal, Math.random() * 2000);
            }

            return () => clearInterval(interval);
        };

        const cleanupRisingSakura = initRisingSakura();

        // ── INTRO SEQUENCE ──
        const tl = gsap.timeline({ delay: 0.4 });

        gsap.set('#stage', { rotateX: 25, rotateY: -12, z: -200, opacity: 0 });

        tl.to('#stage', { rotateX: 0, rotateY: 0, z: 0, opacity: 1, duration: 1.7, ease: 'expo.out' }, 0);
        tl.to(firstName, { opacity: 1, duration: 0.45, ease: 'power4.out' }, 0.55);
        tl.to(lightSweep, { left: '110%', opacity: 1, duration: 1.0, ease: 'power2.inOut' }, 0.6);
        tl.to(katanaSvg, { opacity: 1, scaleX: 1, transformOrigin: '0% 50%', duration: 0.48, ease: 'power4.out' }, 1.05);
        tl.to(glowBehind, { opacity: 0.6, duration: 0.3 }, 1.25);
        tl.to(lastName, { opacity: 1, duration: 0.45, ease: 'power3.out' }, 1.35);

        tl.call(() => {
            lockWidth(firstName);
            lockWidth(lastName);
            scramble('first-name', 'Intekhab', 2.5);
            scramble('last-name', 'Pathan', 2.5);
        }, [], 1.95);

        // Katana withdrawal
        tl.to(katanaSvg, { scaleX: 0, transformOrigin: '100% 50%', duration: 0.17, ease: 'power4.in' }, 4.7);
        tl.to(bladeLine, { opacity: 1, scaleX: 1, duration: 0.07 }, 4.85);

        // ── WHITE FLASH ANIMATION ──
        tl.set(slashFlash, { display: 'block', background: 'white', zIndex: 1000 }, 4.85);
        tl.to(slashFlash, { opacity: 1, duration: 0.05 }, 4.85);
        tl.to(slashFlash, { opacity: 0, duration: 0.8, ease: 'power3.out' }, 4.90);
        tl.set(slashFlash, { display: 'none' }, 5.7);

        tl.to(bladeLine, { opacity: 0, duration: 0.5, ease: 'power2.out' }, 5.0);

        tl.add(() => {
            firstName.classList.add('active-glow');
            lastName.classList.add('active-glow');
        }, 4.95);

        tl.to('#navbar', { opacity: 1, duration: 1, ease: 'power2.out' }, 5.2);
        tl.to(heroBar, { opacity: 1, y: -20, duration: 1, ease: 'power2.out' }, 5.3);
        tl.to(scrollIndicator, { opacity: 0.8, duration: 1 }, 5.6);

        // Stage idle sway
        tl.to('#stage', { rotateX: 1.5, rotateY: -1, duration: 4.0, ease: 'sine.inOut', yoyo: true, repeat: -1 }, 5.4);

        // ── SCROLL SECTION CHANGE ──
        const sections = document.querySelectorAll('[data-bg-step]');
        const handleScroll = () => {
            const scrollY = window.scrollY;
            let currentStep = 1;
            sections.forEach(sec => {
                const rect = sec.getBoundingClientRect();
                const sTop = rect.top + scrollY;
                if (scrollY >= sTop - window.innerHeight * 0.5) {
                    currentStep = parseInt(sec.dataset.bgStep) || 1;
                }
            });
            document.body.setAttribute('data-current-step', currentStep);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (cleanupPetals) cleanupPetals();
            if (cleanupRisingSakura) cleanupRisingSakura();
        };
    }, []);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            {/* Flash overlay */}
            <div id="slash-flash" ref={slashFlashRef} style={{
                position: 'fixed', inset: 0, background: 'white',
                opacity: 0, pointerEvents: 'none', zIndex: 1000, 
                display: 'none'
            }} />

            {/* Light sweep */}
            <div className="light-sweep" ref={lightSweepRef} id="light-sweep" />

            {/* Rising Sakura Container */}
            <div className="sakura-container" ref={risingSakuraRef} />

            <section id="hero" data-bg-step="1" style={{
                position: 'relative', minHeight: '100vh', display: 'flex',
                flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                overflow: 'hidden', paddingTop: 70, zIndex: 10, perspective: '1400px'
            }}>
                {/* Petal trail canvas */}
                <div id="intro-particles" ref={particlesRef} style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none' }} />

                {/* Kanji atmosphere stamps */}
                <div className="kanji-stamp" style={{ fontSize: '22vw', top: '5%', left: '-4%', transform: 'rotate(-8deg)' }}>道</div>
                <div className="kanji-stamp" style={{ fontSize: '14vw', top: '15%', right: '-2%', transform: 'rotate(5deg)', opacity: 0.018 }}>技</div>
                <div className="kanji-stamp" style={{ fontSize: '10vw', bottom: '20%', left: '3%', transform: 'rotate(-12deg)', opacity: 0.02 }}>創</div>
                <div className="kanji-stamp" style={{ fontSize: '8vw', bottom: '30%', right: '5%', transform: 'rotate(7deg)', opacity: 0.02 }}>智</div>

                {/* Stage — name */}
                <div className="stage" id="stage">
                    <span className="first-name" ref={firstNameRef} id="first-name">Intekhab</span>

                    {/* Blade zone */}
                    <div className="blade-zone">
                        <div className="glow-behind" ref={glowBehindRef} id="glow-behind" />
                        <div className="blade-line" ref={bladeLineRef} id="blade-line" />

                        <svg id="katana-svg" ref={katanaSvgRef} viewBox="0 0 900 50">
                            <defs>
                                <linearGradient id="bladeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="var(--c1)" />
                                    <stop offset="33%" stopColor="var(--c2)" />
                                    <stop offset="66%" stopColor="var(--c4)" />
                                    <stop offset="100%" stopColor="var(--c6)" />
                                </linearGradient>
                                <linearGradient id="handleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#0a0a0a" />
                                    <stop offset="100%" stopColor="#1c1c1c" />
                                </linearGradient>
                            </defs>
                            <rect x="6" y="21" width="90" height="8" fill="url(#handleGrad)" rx="2" />
                            <line x1="16" y1="21" x2="24" y2="29" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                            <line x1="32" y1="21" x2="40" y2="29" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                            <line x1="48" y1="21" x2="56" y2="29" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                            <line x1="64" y1="21" x2="72" y2="29" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                            <line x1="80" y1="21" x2="88" y2="29" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                            <rect x="97" y="14" width="8" height="22" fill="var(--c3)" rx="1.5" />
                            <rect x="98.5" y="15.5" width="5" height="19" fill="var(--c2)" rx="1" opacity="0.5" />
                            <path d="M 106 23 L 890 25 L 106 27 Z" fill="url(#bladeGrad)" />
                            <line x1="106" y1="23.5" x2="882" y2="25" stroke="rgba(255,255,255,0.7)" strokeWidth="0.7" />
                            <line x1="106" y1="26.2" x2="876" y2="25" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                        </svg>
                    </div>

                    <span className="last-name" ref={lastNameRef} id="last-name">Pathan</span>
                </div>

                {/* Scroll indicator */}
                <div className="scroll-indicator" ref={scrollIndicatorRef} id="scroll-indicator">
                    <div className="label-caps" style={{ fontSize: '0.55rem' }}>Scroll</div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="7" y="4" width="10" height="16" rx="5" />
                        <path d="M12 8v4" strokeWidth="2" className="svg-wheel" />
                    </svg>
                </div>

                {/* Hero bottom bar */}
                <div className="hero-bar-wrapper" ref={heroBarRef} id="hero-bar-wrapper">
                    <div className="bg-gradient-shift" style={{ height: 2, width: '100%' }} />
                    <div className="hero-bar">
                        <div className="hero-meta-row">
                            <div className="hero-stats">
                                <div className="hero-stat-item">
                                    <div className="label-caps">Status</div>
                                    <div className="hero-stat-value">
                                        <span className="status-dot dyn-bg dyn-glow" />
                                        Available for work
                                    </div>
                                </div>
                                <div className="hero-stat-item">
                                    <div className="label-caps">Current Role</div>
                                    <div className="hero-stat-value">Actly · Remote</div>
                                </div>
                                <div className="hero-stat-item">
                                    <div className="label-caps">Core Focus</div>
                                    <div className="hero-stat-value">AI · Automation · Fast APIs</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                                <div className="magnetic-wrap">
                                    <button className="btn btn-filled" onClick={() => scrollToSection('projects')}>View Work</button>
                                </div>
                                <div className="magnetic-wrap">
                                    <button className="btn" onClick={() => scrollToSection('contact')}>Get in Touch</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ticker strip */}
            <div className="ticker-wrap dyn-border" style={{ borderTop: '1px solid', borderBottom: '1px solid' }}>
                <div className="ticker-inner">
                    {TICKER_ITEMS.map((item, i) => (
                        <span key={i} className="ticker-item">
                            {item} <span className="ticker-dot dyn-bg" />
                        </span>
                    ))}
                </div>
            </div>
        </>
    );
}
