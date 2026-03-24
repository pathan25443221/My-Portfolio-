import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
    const typedRef = useRef(null);
    const heroRef = useRef(null);

    useEffect(() => {
        // ── TYPEWRITER TEXT ──
        const phrases = ['Full Stack Developer', 'AI Agent Engineer', 'Automation Architect', 'n8n Workflow Builder'];
        let pi = 0, ci = 0, del = false;
        const el = typedRef.current;
        if (!el) return;
        let timer;

        function tick() {
            const ph = phrases[pi];
            if (!del) {
                el.textContent = ph.slice(0, ++ci);
                if (ci === ph.length) { del = true; timer = setTimeout(tick, 2200); return; }
            } else {
                el.textContent = ph.slice(0, --ci);
                if (ci === 0) { del = false; pi = (pi + 1) % phrases.length; }
            }
            timer = setTimeout(tick, del ? 55 : 75);
        }
        timer = setTimeout(tick, 600);

        // ── ENTRANCE ANIMATIONS ──
        const tl = gsap.timeline();
        tl.fromTo(".hero-sun-glow", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 3, ease: "power2.out" })
            .fromTo(".hero-sun-core", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 2.5, ease: "power2.out" }, "-=2.5")
            .fromTo(".anime-stars", { opacity: 0 }, { opacity: 0.7, duration: 2 }, "-=2")
            .fromTo(".layer-far-wrap", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: "power2.out" }, "-=2")
            .fromTo(".layer-mid-wrap", { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: "power2.out" }, "-=1.8")
            .fromTo(".layer-front-wrap", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: "power2.out" }, "-=1.6")
            .to(".gsap-fade-in", { opacity: 1, duration: 1.2, stagger: 0.1, ease: "power2.out" }, "-=1")
            .to("#hero .gsap-fade-up", { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power2.out" }, "-=0.8");

        const heroTl = gsap.timeline({ delay: 1.5 });
        heroTl.to("#hero-branches .branch-line-h", { scaleX: 1, opacity: 1, duration: 2, stagger: 0.2, ease: "power3.inOut" }, 0)
            .to("#hero-branches .branch-line-v", { scaleY: 1, opacity: 1, duration: 2, stagger: 0.2, ease: "power3.inOut" }, 0);

        // ── SCROLL PARALLAX ──
        gsap.to("#hero-num", { yPercent: -30, ease: "none", scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true } });
        gsap.to(".hero-sun-wrap", { yPercent: 40, ease: "none", scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true } });
        gsap.to(".layer-far-wrap", { yPercent: 15, ease: "none", scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true } });
        gsap.to(".layer-mid-wrap", { yPercent: 30, ease: "none", scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true } });
        gsap.to(".layer-front-wrap", { yPercent: 45, ease: "none", scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true } });

        // ── MOUSE PARALLAX ──
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 10;
            gsap.to(".layer-far", { x: x * 0.3, y: y * 0.3, duration: 1, ease: "power1.out", overwrite: "auto" });
            gsap.to(".layer-mid", { x: x * 0.8, y: y * 0.8, duration: 1, ease: "power1.out", overwrite: "auto" });
            gsap.to(".layer-front", { x: x * 1.5, y: y * 1.5, duration: 1, ease: "power1.out", overwrite: "auto" });
            gsap.to(".hero-sun-core, .hero-sun-glow", { x: x * -0.5, y: y * -0.5, duration: 1, ease: "power1.out", overwrite: "auto" });
        };
        const heroEl = heroRef.current;
        if (heroEl) heroEl.addEventListener('mousemove', handleMouseMove);

        return () => {
            clearTimeout(timer);
            if (heroEl) heroEl.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    // Generate embers for the effect
    const embers = Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100 + 'vw',
        bottom: Math.random() * 20 + 'vh',
        size: Math.random() * 4 + 2 + 'px',
        dur: Math.random() * 4 + 3 + 's',
        delay: Math.random() * 5 + 's'
    }));

    return (
        <section id="hero" ref={heroRef}>
            <div className="hero-bg-num" id="hero-num">01</div>
            <div className="light-rays"></div>
            <div className="anime-stars"></div>
            <div className="shooting-star"></div>

            <div className="hero-sun-wrap">
                <div className="hero-sun-glow"></div>
                <div className="hero-sun-core"></div>
            </div>

            <div className="landscape-container">
                <div className="layer-wrap layer-far-wrap">
                    <svg className="layer-svg layer-far" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path fill="#6D213C" fillOpacity="0.8" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,197.3C960,213,1056,203,1152,186.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
                <div className="layer-wrap layer-mid-wrap">
                    <svg className="layer-svg layer-mid" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path fill="#3D1E2D" d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,240C840,256,960,256,1080,240C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                    </svg>
                </div>
                <div className="layer-wrap layer-front-wrap">
                    <svg className="layer-svg layer-front" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path fill="#0D0408" d="M0,288L80,272C160,256,320,224,480,218.7C640,213,800,235,960,245.3C1120,256,1280,256,1360,256L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                    </svg>
                    <div className="embers-container" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                        {embers.map(e => (
                            <div key={e.id} className="ember" style={{
                                left: e.left, bottom: e.bottom, width: e.size, height: e.size,
                                '--dur': e.dur, animationDelay: e.delay
                            }} />
                        ))}
                    </div>
                </div>
            </div>

            <div id="hero-branches" className="theme-branches">
                <div className="branch-line-v hide-on-mobile-grid" style={{ left: '20%', transformOrigin: 'top' }}></div>
                <div className="branch-line-v hide-on-mobile-grid" style={{ left: '80%', transformOrigin: 'top' }}></div>
            </div>

            <div className="hero-content">
                <div className="gsap-fade-up">
                    <h1 className="display-xl hero-name" style={{ marginBottom: 4 }}>
                        Intekhab <br /> <em>Pathan.</em>
                    </h1>
                </div>

                <div className="gsap-fade-up" style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 12 }}>
                    <svg className="svg-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                    <div className="label-caps" style={{ color: 'var(--red)', letterSpacing: '0.25em' }}>
                        <span ref={typedRef}></span><span style={{ animation: 'blink 1s step-end infinite' }}>_</span>
                    </div>
                </div>

                {/* hero-bar now wraps the meta row to elevate the z-index */}
            </div>

            <div className="hero-bar gsap-fade-up hide-on-mobile-grid-sm">
                <div className="hero-meta-row gsap-fade-up">
                    <div className="hero-stats">
                        <div className="hero-stat-value"><span className="status-dot"></span> Available for Work</div>
                        <div className="hero-stat-value" style={{ color: 'var(--ink-light)' }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                            Pune, India
                        </div>
                    </div>
                    <div className="hero-btns">
                        <div className="magnetic-wrap"><button className="btn btn-filled" onClick={() => scrollTo('projects')}>View Work →</button></div>
                        <div className="magnetic-wrap"><button className="btn" onClick={() => scrollTo('contact')}>Contact [C]</button></div>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator gsap-fade-in">
                <div className="label-caps" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Scroll to explore</div>
                <div style={{ width: 1, height: 60, background: 'var(--rule)', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: 0, left: '-1px', width: 3, height: 10, background: 'var(--red)', borderRadius: 2 }} className="svg-wheel"></div>
                </div>
            </div>
        </section>
    );
}
