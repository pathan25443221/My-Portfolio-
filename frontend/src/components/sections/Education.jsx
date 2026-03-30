import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Education() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const scrolls = gsap.utils.toArray('.kakemono-wrap');
            
            scrolls.forEach((scroll) => {
                const paper = scroll.querySelector('.gs-unroll');
                const bottom = scroll.querySelector('.gs-unroll-bottom');

                gsap.timeline({
                    scrollTrigger: {
                        trigger: scroll,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                })
                .to(paper, { height: 'auto', duration: 1.8, ease: "power3.inOut" })
                .to(bottom, { opacity: 1, duration: 0.6 }, "-=0.8");
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="education" style={{ padding: '120px 0', position: 'relative' }} data-bg-step="6">
            <div className="section-inner">
                {/* Katana Dividers */}
                <div className="theme-branches-wrap">
                    <div className="katana-divider-v hide-on-mobile-grid" style={{ left: '33.33%' }}>
                        <div className="k-handle-v" /><div className="k-tsuba-v dyn-bg dyn-glow" /><div className="k-blade-v dyn-bg dyn-glow" />
                    </div>
                    <div className="katana-divider-v hide-on-mobile-grid" style={{ left: '66.66%' }}>
                        <div className="k-handle-v" /><div className="k-tsuba-v dyn-bg dyn-glow" /><div className="k-blade-v dyn-bg dyn-glow" />
                    </div>
                </div>

                <div className="section-header dyn-border">
                    <div className="katana-divider-h" style={{ bottom: '-1px', transform: 'rotate(180deg)' }}>
                        <div className="k-handle-h" /><div className="k-tsuba-h dyn-bg dyn-glow" /><div className="k-blade-h dyn-bg dyn-glow" />
                    </div>
                    <div className="gsap-fade-up">
                        <div className="label-caps section-label dyn-text">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                            </svg>
                            // 005 — Education
                        </div>
                        <h2 className="display-lg">Academic<br /><em className="dyn-text">foundation.</em></h2>
                    </div>
                    {/* Torii gate companion SVG */}
                    <svg width="52" height="58" viewBox="0 0 52 58" fill="none" style={{ opacity: 0.18, marginBottom: 6, flexShrink: 0 }} className="gsap-fade-up" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="12" width="48" height="5" rx="1" fill="#C0282C" />
                        <rect x="7" y="17" width="38" height="3" rx="1" fill="#C0282C" opacity="0.6" />
                        <rect x="7" y="20" width="4" height="36" rx="1" fill="#C0282C" />
                        <rect x="41" y="20" width="4" height="36" rx="1" fill="#C0282C" />
                        <rect x="12" y="7" width="28" height="4" rx="2" fill="#C8A96E" />
                        <line x1="26" y1="1" x2="26" y2="7" stroke="#C8A96E" strokeWidth="2" />
                    </svg>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40, position: 'relative', zIndex: 2, alignItems: 'start' }} className="edu-grid gsap-fade-up">

                    {/* MCA Kakemono — akane-iro crimson */}
                    <div className="kakemono-wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '100%', height: 18, background: 'linear-gradient(180deg,#2C1A0E,#1A100A)', borderRadius: 9, position: 'relative', zIndex: 2, boxShadow: '0 6px 15px rgba(0,0,0,0.7)' }}>
                            <div style={{ position: 'absolute', left: -8, top: 2, bottom: 2, width: 12, background: '#3D2210', borderRadius: 4 }} />
                            <div style={{ position: 'absolute', right: -8, top: 2, bottom: 2, width: 12, background: '#3D2210', borderRadius: 4 }} />
                        </div>
                        <div className="gs-unroll" style={{ width: '92%', height: 0, overflow: 'hidden', position: 'relative', boxShadow: '4px 8px 30px rgba(0,0,0,0.8),inset 0 0 30px rgba(0,0,0,0.4)', background: 'linear-gradient(180deg,#8B0000 0%,#A01E20 40%,#8B1010 100%)', borderLeft: '3px solid rgba(245,230,200,0.2)', borderRight: '3px solid rgba(245,230,200,0.2)' }}>
                            <div className="k-content" style={{ padding: '40px 32px 50px', width: '100%' }}>
                                <div style={{ textAlign: 'center', marginBottom: 24, display: 'flex', justifyContent: 'center' }}>
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" style={{ opacity: 0.5 }}>
                                        <circle cx="18" cy="18" r="16" stroke="#F5E6C8" strokeWidth="1" />
                                        <circle cx="18" cy="18" r="10" stroke="#F5E6C8" strokeWidth="1" />
                                        <circle cx="18" cy="18" r="4" fill="#F5E6C8" opacity="0.6" />
                                        <line x1="18" y1="2" x2="18" y2="34" stroke="#F5E6C8" strokeWidth="0.8" />
                                        <line x1="2" y1="18" x2="34" y2="18" stroke="#F5E6C8" strokeWidth="0.8" />
                                    </svg>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 28 }}>
                                    <div style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4, background: 'rgba(0,0,0,0.3)' }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F5E6C8" strokeWidth="1.5">
                                            <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
                                        </svg>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '0.55rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(245,230,200,0.6)', marginBottom: 4 }}>CGPA</div>
                                        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '2.8rem', fontWeight: 500, lineHeight: 1, color: '#F5E6C8' }}>8.79</div>
                                    </div>
                                </div>
                                <div style={{ width: 32, height: 1, background: 'rgba(245,230,200,0.25)', marginBottom: 16 }} />
                                <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: '1.1rem', fontWeight: 500, color: '#F5E6C8', marginBottom: 8, letterSpacing: '-0.01em' }}>Master of Computer Applications</div>
                                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', color: 'rgba(245,230,200,0.7)', fontSize: 1, marginBottom: 12 }}>IMED, Bharti Vidyapeeth</div>
                                <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,230,200,0.5)' }}>Jun 2024 — Present · Pune</div>
                                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: 'linear-gradient(180deg,#F5E6C8,rgba(245,230,200,0.05))' }} />
                            </div>
                        </div>
                        <div className="gs-unroll-bottom" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0 }}>
                            <div style={{ width: '96%', height: 14, background: 'linear-gradient(180deg,#2C1A0E,#1A100A)', borderRadius: 7, boxShadow: '0 8px 15px rgba(0,0,0,0.8)' }} />
                            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', paddingTop: 4 }}>
                                <div style={{ width: 2, height: 28, background: 'linear-gradient(180deg,#C0282C,transparent)' }} />
                                <div style={{ width: 2, height: 36, background: 'linear-gradient(180deg,#C0282C,transparent)', marginTop: -8 }} />
                                <div style={{ width: 2, height: 28, background: 'linear-gradient(180deg,#C0282C,transparent)' }} />
                            </div>
                        </div>
                    </div>

                    {/* BCA Kakemono — ai-iro blue */}
                    <div className="kakemono-wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '100%', height: 18, background: 'linear-gradient(180deg,#0D1E36,#060C18)', borderRadius: 9, position: 'relative', zIndex: 2, boxShadow: '0 6px 15px rgba(0,0,0,0.7)' }}>
                            <div style={{ position: 'absolute', left: -8, top: 2, bottom: 2, width: 12, background: '#152840', borderRadius: 4 }} />
                            <div style={{ position: 'absolute', right: -8, top: 2, bottom: 2, width: 12, background: '#152840', borderRadius: 4 }} />
                        </div>
                        <div className="gs-unroll" style={{ width: '92%', height: 0, overflow: 'hidden', position: 'relative', boxShadow: '4px 8px 30px rgba(0,0,0,0.8),inset 0 0 30px rgba(0,0,0,0.4)', background: 'linear-gradient(180deg,#0A1A3A 0%,#1D3E7A 40%,#0A1A3A 100%)', borderLeft: '3px solid rgba(200,216,240,0.15)', borderRight: '3px solid rgba(200,216,240,0.15)' }}>
                            <div className="k-content" style={{ padding: '40px 32px 50px', width: '100%' }}>
                                <div style={{ textAlign: 'center', marginBottom: 24, display: 'flex', justifyContent: 'center' }}>
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" style={{ opacity: 0.5 }}>
                                        <circle cx="18" cy="18" r="16" stroke="#C8D8F0" strokeWidth="1" />
                                        <path d="M18 4 L30 11 L30 25 L18 32 L6 25 L6 11 Z" stroke="#C8D8F0" strokeWidth="0.8" fill="none" />
                                        <circle cx="18" cy="18" r="5" stroke="#C8D8F0" strokeWidth="0.8" />
                                    </svg>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 28 }}>
                                    <div style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4, background: 'rgba(0,0,0,0.3)' }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8D8F0" strokeWidth="1.5">
                                            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                                        </svg>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '0.55rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(200,216,240,0.6)', marginBottom: 4 }}>CGPA</div>
                                        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '2.8rem', fontWeight: 500, lineHeight: 1, color: '#C8D8F0' }}>7.8</div>
                                    </div>
                                </div>
                                <div style={{ width: 32, height: 1, background: 'rgba(200,216,240,0.25)', marginBottom: 16 }} />
                                <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: '1.1rem', fontWeight: 500, color: '#C8D8F0', marginBottom: 8, letterSpacing: '-0.01em' }}>Bachelor of Computer Applications</div>
                                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', color: 'rgba(200,216,240,0.7)', fontSize: 1, marginBottom: 12 }}>Makhanlal Chaturvedi National Univ.</div>
                                <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(200,216,240,0.5)' }}>Jun 2021 — May 2024 · Bhopal</div>
                                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: 'linear-gradient(180deg,#C8D8F0,rgba(200,216,240,0.05))' }} />
                            </div>
                        </div>
                        <div className="gs-unroll-bottom" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0 }}>
                            <div style={{ width: '96%', height: 14, background: 'linear-gradient(180deg,#0D1E36,#060C18)', borderRadius: 7, boxShadow: '0 8px 15px rgba(0,0,0,0.8)' }} />
                            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', paddingTop: 4 }}>
                                <div style={{ width: 2, height: 28, background: 'linear-gradient(180deg,#6273C4,transparent)' }} />
                                <div style={{ width: 2, height: 36, background: 'linear-gradient(180deg,#6273C4,transparent)', marginTop: -8 }} />
                                <div style={{ width: 2, height: 28, background: 'linear-gradient(180deg,#6273C4,transparent)' }} />
                            </div>
                        </div>
                    </div>

                    {/* School Kakemono — kuro-tobi deep navy */}
                    <div className="kakemono-wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '100%', height: 18, background: 'linear-gradient(180deg,#1A1A1A,#000000)', borderRadius: 9, position: 'relative', zIndex: 2, boxShadow: '0 6px 15px rgba(0,0,0,0.7)' }}>
                            <div style={{ position: 'absolute', left: -8, top: 2, bottom: 2, width: 12, background: '#2A2A2A', borderRadius: 4 }} />
                            <div style={{ position: 'absolute', right: -8, top: 2, bottom: 2, width: 12, background: '#2A2A2A', borderRadius: 4 }} />
                        </div>
                        <div className="gs-unroll" style={{ width: '92%', height: 0, overflow: 'hidden', position: 'relative', boxShadow: '4px 8px 30px rgba(0,0,0,0.8),inset 0 0 30px rgba(0,0,0,0.4)', background: 'linear-gradient(180deg,#1A1A1A 0%,#2D2D2D 40%,#1A1A1A 100%)', borderLeft: '3px solid rgba(255,255,255,0.1)', borderRight: '3px solid rgba(255,255,255,0.1)' }}>
                            <div className="k-content" style={{ padding: '40px 32px 50px', width: '100%' }}>
                                <div style={{ textAlign: 'center', marginBottom: 24, display: 'flex', justifyContent: 'center' }}>
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" style={{ opacity: 0.5 }}>
                                        <rect x="10" y="10" width="16" height="16" stroke="#FFFFFF" strokeWidth="1" />
                                        <rect x="4" y="4" width="28" height="28" stroke="#FFFFFF" strokeWidth="0.6" opacity="0.4" />
                                        <circle cx="18" cy="18" r="3" fill="#FFFFFF" />
                                    </svg>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 28 }}>
                                    <div style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4, background: 'rgba(255,255,255,0.05)' }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5">
                                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
                                        </svg>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '0.55rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 4 }}>Percentage</div>
                                        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '2.8rem', fontWeight: 500, lineHeight: 1, color: '#FFFFFF' }}>72%</div>
                                    </div>
                                </div>
                                <div style={{ width: 32, height: 1, background: 'rgba(255,255,255,0.15)', marginBottom: 16 }} />
                                <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: '1.1rem', fontWeight: 500, color: '#FFFFFF', marginBottom: 8, letterSpacing: '-0.01em' }}>Higher Secondary Education</div>
                                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', color: 'rgba(255,255,255,0.6)', fontSize: 1, marginBottom: 12 }}>St. Theresa's School</div>
                                <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>Graduated 2021 · Bhopal</div>
                                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: 'linear-gradient(180deg,#FFFFFF,rgba(255,255,255,0.05))' }} />
                            </div>
                        </div>
                        <div className="gs-unroll-bottom" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0 }}>
                            <div style={{ width: '96%', height: 14, background: 'linear-gradient(180deg,#1A1A1A,#000000)', borderRadius: 7, boxShadow: '0 8px 15px rgba(0,0,0,0.8)' }} />
                            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', paddingTop: 4 }}>
                                <div style={{ width: 2, height: 28, background: 'linear-gradient(180deg,#555,transparent)' }} />
                                <div style={{ width: 2, height: 36, background: 'linear-gradient(180deg,#555,transparent)', marginTop: -8 }} />
                                <div style={{ width: 2, height: 28, background: 'linear-gradient(180deg,#555,transparent)' }} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
