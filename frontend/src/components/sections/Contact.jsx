import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function Contact() {
    const [sent, setSent] = useState(false);
    const formRef = useRef(null);
    const scrollBodyRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const f = formRef.current;
        const name = f.querySelector('input[type="text"]').value;
        const email = f.querySelector('input[type="email"]').value;
        const msg = f.querySelector('textarea').value;
        const sub = encodeURIComponent(`Portfolio Inquiry from ${name}`);
        const body = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\nMessage:\n${msg}`);
        window.location.href = `mailto:intekhabpathan125@gmail.com?subject=${sub}&body=${body}`;

        setSent(true);
    };

    const handleReset = () => {
        setSent(false);
    };

    useEffect(() => {
        if (scrollBodyRef.current) {
            gsap.fromTo(scrollBodyRef.current, 
                { height: 0, opacity: 0 },
                { 
                    height: 'auto', 
                    opacity: 1, 
                    duration: 1.5, 
                    ease: "power3.inOut",
                    scrollTrigger: {
                        trigger: "#contact",
                        start: "top 75%",
                        toggleActions: "play none none none"
                    }
                }
            );
        }
    }, []);

    return (
        <section id="contact" style={{ padding: '120px 0 80px', position: 'relative' }} data-bg-step="1">
            <div className="section-inner">
                
                {/* Section header */}
                <div className="gsap-fade-up" style={{ marginBottom: 64 }}>
                    <div className="label-caps section-label dyn-text" style={{ marginBottom: 20 }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        // 006 — Contact
                    </div>
                    <h2 className="display-lg">Let's<br /><em className="dyn-text">connect.</em></h2>
                </div>

                {/* THE SCROLL */}
                <div className="gsap-fade-up" style={{ position: 'relative' }}>
                    
                    {/* Scroll rod top */}
                    <div style={{ position: 'relative', height: 28, display: 'flex', alignItems: 'center', zIndex: 2 }}>
                        <div style={{ position: 'absolute', left: -12, right: -12, height: 22, borderRadius: 4, background: 'linear-gradient(180deg,#2a2218 0%,#1a1510 40%,#0e0c08 100%)', boxShadow: '0 4px 16px rgba(0,0,0,0.6),inset 0 1px 0 rgba(255,255,255,0.08)' }} />
                        {/* Rod end knobs */}
                        <div style={{ position: 'absolute', left: -20, width: 16, height: 22, borderRadius: 3, background: 'linear-gradient(180deg,#3a3020,#1a1510)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)' }} />
                        <div style={{ position: 'absolute', right: -20, width: 16, height: 22, borderRadius: 3, background: 'linear-gradient(180deg,#3a3020,#1a1510)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)' }} />
                        <div className="bg-gradient-shift" style={{ position: 'absolute', left: -12, right: -12, height: 1.5, top: '50%', opacity: 0.3 }} />
                    </div>

                    {/* Scroll body */}
                    <div ref={scrollBodyRef} style={{ position: 'relative', background: 'linear-gradient(160deg,#1C1610 0%,#171210 50%,#141008 100%)', borderLeft: '1px solid rgba(255,255,255,0.06)', borderRight: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                        
                        {/* Asanoha (hemp leaf) pattern */}
                        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.025, pointerEvents: 'none' }}>
                            <defs>
                                <pattern id="asanoha" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
                                    <g stroke="var(--c1)" strokeWidth="0.7" fill="none" transform="translate(30,26)">
                                        <line x1="0" y1="-20" x2="0" y2="20" /><line x1="-17.3" y1="-10" x2="17.3" y2="10" /><line x1="-17.3" y1="10" x2="17.3" y2="-10" />
                                        <line x1="0" y1="-20" x2="8.66" y2="-15" /><line x1="0" y1="-20" x2="-8.66" y2="-15" />
                                        <line x1="17.3" y1="-10" x2="17.3" y2="0" /><line x1="17.3" y1="-10" x2="8.66" y2="-15" />
                                        <line x1="17.3" y1="10" x2="17.3" y2="0" /><line x1="17.3" y1="10" x2="8.66" y2="15" />
                                        <line x1="0" y1="20" x2="8.66" y2="15" /><line x1="0" y1="20" x2="-8.66" y2="15" />
                                        <line x1="-17.3" y1="10" x2="-8.66" y2="15" /><line x1="-17.3" y1="10" x2="-17.3" y2="0" />
                                        <line x1="-17.3" y1="-10" x2="-17.3" y2="0" /><line x1="-17.3" y1="-10" x2="-8.66" y2="-15" />
                                        <polygon points="0,-10 8.66,-5 8.66,5 0,10 -8.66,5 -8.66,-5" />
                                    </g>
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#asanoha)" />
                        </svg>

                        {/* Side Decorations */}
                        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 48, borderRight: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 32, padding: '40px 0' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" style={{ opacity: 0.15 }} fill="none">
                                <circle cx="12" cy="12" r="11" stroke="var(--c1)" strokeWidth="0.8" />
                                <path d="M12 4 C16 4, 20 8, 20 12 C20 16, 16 16, 12 16 C12 16, 16 12, 12 8 C8 4, 4 8, 4 12 C4 16, 8 20, 12 20 C16 20, 20 16, 20 12" stroke="var(--c1)" strokeWidth="0.8" fill="none" />
                            </svg>
                        </div>
                        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 48, borderLeft: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 32, padding: '40px 0' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" style={{ opacity: 0.15 }} fill="none">
                                <path d="M12 2 L22 8 L22 16 L12 22 L2 16 L2 8 Z" stroke="var(--c1)" strokeWidth="0.8" />
                                <circle cx="12" cy="12" r="3" fill="var(--c1)" opacity="0.5" />
                            </svg>
                        </div>

                        {/* Content Grid */}
                        <div style={{ padding: '64px 80px', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 80 }} className="contact-grid">
                            {/* Detailed Details */}
                            <div>
                                <div className="label-caps" style={{ marginBottom: 20, color: 'var(--c2)' }}>Direct Channels</div>
                                <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                                    {[
                                        { label: 'Email', val: 'intekhabpathan125@gmail.com', link: 'mailto:intekhabpathan125@gmail.com', color: 'var(--c1)' },
                                        { label: 'LinkedIn', val: 'Intekhab Pathan', link: 'https://www.linkedin.com/in/intekhabpathan/', color: 'var(--c2)' },
                                        { label: 'GitHub', val: 'pathan25443221', link: 'https://github.com/pathan25443221', color: 'var(--c3)' }
                                    ].map((item, idx) => (
                                        <a key={idx} href={item.link} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', textDecoration: 'none', color: '#fff' }} className="contact-link-row">
                                            <div>
                                                <div className="label-caps" style={{ marginBottom: 4, opacity: 0.5, fontSize: '0.6rem' }}>{item.label}</div>
                                                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.9rem' }}>{item.val}</div>
                                            </div>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={item.color} strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Form Area */}
                            <div>
                                {sent ? (
                                    <div style={{ padding: '48px 0', textAlign: 'center' }}>
                                        <div className="display-md" style={{ color: 'var(--c1)', marginBottom: 12 }}>Message Logged.</div>
                                        <p className="body-text" style={{ color: 'rgba(255,255,255,0.6)' }}>Your inquiry has been stored in the scroll. Opening your mail client...</p>
                                        <button onClick={handleReset} className="btn" style={{ marginTop: 28, color: '#fff', borderColor: 'var(--rule)' }}>← Reset Scroll</button>
                                    </div>
                                ) : (
                                    <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                                        <div className="label-caps" style={{ marginBottom: -8, color: 'var(--c2)' }}>Entry log</div>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                                            <input type="text" required placeholder="IDENTIFIER (NAME)" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 16px', color: '#fff', fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', borderRadius: 4 }} />
                                            <input type="email" required placeholder="COORDINATES (EMAIL)" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 16px', color: '#fff', fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', borderRadius: 4 }} />
                                        </div>
                                        <textarea required rows="5" placeholder="INQUIRY / MESSAGE BODY" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '16px', color: '#fff', fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', borderRadius: 4, resize: 'none' }} />
                                        <button type="submit" className="btn btn-filled" style={{ alignSelf: 'flex-start', background: 'var(--c1)', borderColor: 'var(--c1)' }}>Transmit Inquiry →</button>
                                    </form>
                                )}
                            </div>
                        </div>

                    </div>

                    {/* Scroll rod bottom */}
                    <div style={{ position: 'relative', height: 28, display: 'flex', alignItems: 'center', zIndex: 2, marginTop: -2 }}>
                        <div style={{ position: 'absolute', left: -12, right: -12, height: 22, borderRadius: 4, background: 'linear-gradient(180deg,#2a2218 0%,#1a1510 40%,#0e0c08 100%)', boxShadow: '0 4px 16px rgba(0,0,0,0.6)' }} />
                        <div style={{ position: 'absolute', left: -20, width: 16, height: 22, borderRadius: 3, background: 'linear-gradient(180deg,#3a3020,#1a1510)' }} />
                        <div style={{ position: 'absolute', right: -20, width: 16, height: 22, borderRadius: 3, background: 'linear-gradient(180deg,#3a3020,#1a1510)' }} />
                    </div>

                </div>
            </div>
        </section>
    );
}
