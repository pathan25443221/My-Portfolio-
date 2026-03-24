import { useEffect, useRef } from 'react';
import profileImg from '../../assets/intekhab.jpeg';

export default function About() {
    const imgRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const img = imgRef.current;
        const container = containerRef.current;
        if (!img || !container) return;

        const handleScroll = () => {
            // Use container bounding rect for scroll progress
            const rect = container.getBoundingClientRect();
            const viewportH = window.innerHeight;

            // Start animation when the container enters the viewport (starts appearing from bottom)
            const start = viewportH;
            
            // End animation sooner, e.g., when the container is 30% from the top
            const end = viewportH * 0.3;

            const top = rect.top;

            if (top > start) {
                // Not yet in view - full big rectangle
                img.style.borderRadius = '8px';
                img.style.transform = 'scale(1.1)';
            } else if (top < end) {
                // Fully scrolled past target point - perfect centered circle
                img.style.borderRadius = '50%';
                img.style.transform = 'scale(1)';
            } else {
                // Fast interpolation
                const progress = (start - top) / (start - end); // 0 to 1
                
                // Accelerate the morphing effect
                const easeProgress = Math.pow(progress, 1.5); 

                const scale = 1.1 - (0.1 * easeProgress);
                const radius = 8 + (50 - 8) * easeProgress;

                // Add tilt shift effect: rotates from 15deg (tilted) back to 0deg (flat)
                // and translateY to give a perspective shift effect
                const rotateX = 15 * (1 - easeProgress);
                const translateY = 20 * (1 - easeProgress);

                img.style.borderRadius = `${radius}%`;
                img.style.transform = `perspective(1000px) rotateX(${rotateX}deg) translateY(${translateY}px) scale(${scale})`;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // initialize
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="about" style={{ padding: '96px 0', background: 'var(--cream)', position: 'relative' }} ref={containerRef}>
            <div className="section-inner">
                <div className="theme-branches-wrap">
                    <div className="branch-line-v hide-on-mobile-grid" style={{ left: '0%', transformOrigin: 'top' }}></div>
                    <div className="branch-line-v hide-on-mobile-grid" style={{ left: '100%', transformOrigin: 'bottom' }}></div>
                </div>

                <div className="section-header" style={{ marginBottom: 20, borderBottom: 'none', paddingBottom: 0 }}>
                    <div className="gsap-fade-up">
                    </div>
                </div>

                {/* ── Split Layout: Left Image, Right Bento Grid ── */}
                <div className="about-split-layout">
                    
                    {/* Left Panel: Profile Image Container */}
                    <div className="about-left-panel gsap-fade-up">
                        <div className="profile-hero-wrapper">
                            <img
                                ref={imgRef}
                                src={profileImg}
                                alt="Intekhab Pathan"
                                className="profile-hero-img"
                                style={{ transformOrigin: 'center bottom' }}
                            />
                        </div>
                    </div>

                    {/* Right Panel: Content Grid */}
                    <div className="about-right-panel">
                        <div className="gsap-fade-up" style={{ marginBottom: 40 }}>
                            <h2 className="display-lg" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1 }}>
                                The <em>architect</em><br />behind the code.
                            </h2>
                        </div>
                        
                        <div className="bento-grid-right">
                            {/* ── Introduction ── */}
                            <div className="content-item gsap-fade-up">
                                <div>
                                    <div className="label-caps" style={{ marginBottom: 12 }}>Introduction</div>
                                    <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '1.25rem', fontWeight: 500, color: 'var(--ink)', marginBottom: 20, lineHeight: 1.4, letterSpacing: '-0.01em' }}>
                                        I build systems that connect the dots.
                                    </div>
                                    <p className="body-text" style={{ marginBottom: 16 }}>
                                        Whether it's crafting high-performance APIs in <strong style={{ color: 'var(--blue)', textShadow: '0 0 8px rgba(109,136,179,0.5)' }}>FastAPI</strong> / <strong style={{ color: 'var(--green)', textShadow: '0 0 8px rgba(168,194,86,0.5)' }}>Django</strong> or orchestrating autonomous AI agents via <strong style={{ color: 'var(--red)', textShadow: '0 0 8px rgba(230,57,70,0.5)' }}>n8n</strong>, my goal is always to reduce friction through code.
                                    </p>
                                    <p className="body-text">
                                        Currently pursuing my MCA at <span style={{ color: 'var(--purple)', fontWeight: 700, textShadow: '0 0 8px rgba(131,56,236,0.5)' }}>IMED, Pune</span>, I thrive at the intersection of <span style={{ color: 'var(--teal)', fontWeight: 600, textShadow: '0 0 8px rgba(106,156,137,0.4)' }}>application development</span> and <span style={{ color: 'var(--orange)', fontWeight: 600, textShadow: '0 0 8px rgba(244,162,97,0.4)' }}>intelligent automation workflows</span>.
                                    </p>
                                </div>
                                <div style={{ marginTop: 28, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                                    <span className="tag tag-white">Problem Solver</span>
                                    <span className="tag">Full Stack</span>
                                    <span className="tag tag-red">AI Automation</span>
                                </div>
                            </div>

                            {/* ── Current Focus ── */}
                            <div className="content-item gsap-fade-up">
                                <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
                                    <div className="label-caps" style={{ color: 'var(--orange)', marginBottom: 16 }}>Current Focus</div>
                                    <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '1.4rem', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.3, letterSpacing: '-0.02em', textShadow: '0 0 10px rgba(244,162,97,0.2)' }}>
                                        Expanding capabilities in <span style={{ color: 'var(--pink)', fontWeight: 700, textShadow: '0 0 10px rgba(255,181,167,0.5)' }}>Multi-Agent Orchestration</span> &amp; developing AI-driven solutions via <span style={{ color: 'var(--blue)', fontWeight: 700, textShadow: '0 0 10px rgba(109,136,179,0.5)' }}>OpenRouter</span>.
                                    </div>
                                </div>
                            </div>

                            {/* ── Architecture ── */}
                            <div className="content-item gsap-fade-up">
                                <div className="label-caps" style={{ marginBottom: 12, color: 'var(--teal)', fontWeight: 700, textShadow: '0 0 6px rgba(106,156,137,0.5)' }}>Architecture</div>
                                <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '1.1rem', fontWeight: 500, color: 'var(--ink)', marginBottom: 6 }}><span style={{ color: 'var(--blue)', fontWeight: 700, textShadow: '0 0 8px rgba(109,136,179,0.5)' }}>RESTful</span> APIs &amp; Services</div>
                                <p className="body-text" style={{ fontSize: '0.85rem' }}>Designing robust and scalable backends.</p>
                            </div>

                            {/* ── Specialty ── */}
                            <div className="content-item gsap-fade-up">
                                <div className="label-caps" style={{ marginBottom: 12, color: 'var(--purple)', fontWeight: 700, textShadow: '0 0 6px rgba(131,56,236,0.5)' }}>Specialty</div>
                                <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '1.1rem', fontWeight: 500, color: 'var(--ink)', marginBottom: 6 }}><span style={{ color: 'var(--red)', fontWeight: 700, textShadow: '0 0 8px rgba(230,57,70,0.5)' }}>Workflow</span> Automation</div>
                                <p className="body-text" style={{ fontSize: '0.85rem' }}>Eliminating repetitive tasks via n8n.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
