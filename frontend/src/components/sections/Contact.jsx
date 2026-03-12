import { useState, useRef } from 'react';

export default function Contact() {
    const [sent, setSent] = useState(false);
    const formRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const f = formRef.current;
        const name = f.querySelector('input[type="text"]').value;
        const email = f.querySelector('input[type="email"]').value;
        const msg = f.querySelector('textarea').value;
        const sub = encodeURIComponent(`Portfolio Inquiry from ${name}`);
        const body = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\nMessage:\n${msg}`);
        window.location.href = `mailto:intekhabpathan125@gmail.com?subject=${sub}&body=${body}`;

        // Hide form, show success
        f.style.display = 'none';
        setSent(true);
    };

    const handleReset = () => {
        setSent(false);
        if (formRef.current) {
            formRef.current.style.display = 'flex';
            formRef.current.reset();
        }
    };

    return (
        <section id="contact" style={{ padding: '96px 0', background: 'var(--cream)', position: 'relative' }}>
            <div className="section-inner">
                {/* Mathematically calculated to perfectly align vertically with gap spacing */}
                <div className="theme-branches-wrap">
                    <div className="branch-line-v hide-on-mobile-grid-sm" style={{ left: 'calc((100% - 80px) * 0.4 + 40px)', transformOrigin: 'bottom' }}></div>
                </div>

                <div className="section-header">
                    <div className="branch-line-h" style={{ bottom: '-1px', transformOrigin: 'center' }}></div>
                    <div className="gsap-fade-up">
                        <div className="label-caps section-label">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            // 006 — Contact
                        </div>
                        <h2 className="display-lg">Let's<br /><em>connect.</em></h2>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 80 }} className="contact-grid">
                    {/* Contact Details */}
                    <div className="gsap-fade-up">
                        <div className="label-caps" style={{ marginBottom: 28 }}>Contact Details</div>
                        <div style={{ borderTop: '1px solid var(--rule)' }}>

                            <a href="mailto:intekhabpathan125@gmail.com" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 0', borderBottom: '1px solid var(--rule)', textDecoration: 'none', color: 'var(--ink)', transition: 'padding-left 0.3s, color 0.3s' }} onMouseOver={e => { e.currentTarget.style.paddingLeft = '12px'; e.currentTarget.style.color = 'var(--red)' }} onMouseOut={e => { e.currentTarget.style.paddingLeft = '0'; e.currentTarget.style.color = 'var(--ink)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" /></svg>
                                    <div>
                                        <div className="label-caps" style={{ marginBottom: 4 }}>Email</div>
                                        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.78rem', fontWeight: 400, color: 'var(--ink)' }}>intekhabpathan125@gmail.com</div>
                                    </div>
                                </div>
                                <span className="label-caps" style={{ color: 'var(--red)', opacity: 0.6 }}>Write →</span>
                            </a>

                            <a href="tel:+918871171713" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 0', borderBottom: '1px solid var(--rule)', textDecoration: 'none', color: 'var(--ink)', transition: 'padding-left 0.3s, color 0.3s' }} onMouseOver={e => { e.currentTarget.style.paddingLeft = '12px'; e.currentTarget.style.color = 'var(--orange)' }} onMouseOut={e => { e.currentTarget.style.paddingLeft = '0'; e.currentTarget.style.color = 'var(--ink)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                    <div>
                                        <div className="label-caps" style={{ marginBottom: 4 }}>Phone</div>
                                        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.78rem', fontWeight: 400, color: 'var(--ink)' }}>+91 8871171713</div>
                                    </div>
                                </div>
                                <span className="label-caps" style={{ color: 'var(--orange)', opacity: 0.6 }}>Call →</span>
                            </a>

                            <a href="https://linkedin.com/in/intekhab-pathan" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 0', borderBottom: '1px solid var(--rule)', textDecoration: 'none', color: 'var(--ink)', transition: 'padding-left 0.3s, color 0.3s' }} onMouseOver={e => { e.currentTarget.style.paddingLeft = '12px'; e.currentTarget.style.color = 'var(--blue)' }} onMouseOut={e => { e.currentTarget.style.paddingLeft = '0'; e.currentTarget.style.color = 'var(--ink)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                                    <div>
                                        <div className="label-caps" style={{ marginBottom: 4 }}>LinkedIn</div>
                                        <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '0.9rem', fontWeight: 500, color: 'var(--ink)' }}>Intekhab Pathan</div>
                                    </div>
                                </div>
                                <span className="label-caps" style={{ color: 'var(--blue)', opacity: 0.6 }}>View →</span>
                            </a>

                            <a href="https://github.com/intekhab-pathan" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 0', textDecoration: 'none', color: 'var(--ink)', transition: 'padding-left 0.3s, color 0.3s' }} onMouseOver={e => { e.currentTarget.style.paddingLeft = '12px'; e.currentTarget.style.color = 'var(--purple)' }} onMouseOut={e => { e.currentTarget.style.paddingLeft = '0'; e.currentTarget.style.color = 'var(--ink)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                                    <div>
                                        <div className="label-caps" style={{ marginBottom: 4 }}>GitHub</div>
                                        <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '0.9rem', fontWeight: 500, color: 'var(--ink)' }}>Intekhab Pathan</div>
                                    </div>
                                </div>
                                <span className="label-caps" style={{ color: 'var(--purple)', opacity: 0.6 }}>Explore →</span>
                            </a>

                        </div>
                    </div>

                    {/* Form */}
                    <div className="gsap-fade-up">
                        <div className="label-caps" style={{ marginBottom: 28 }}>Send a message</div>

                        {sent && (
                            <div id="contact-success" style={{ padding: '48px 0', textAlign: 'center' }} className="gsap-fade-up">
                                <div className="display-md" style={{ color: 'var(--orange)', marginBottom: 12 }}>Sent.</div>
                                <p className="body-text">Your message has been dispatched. Your mail client should open shortly.</p>
                                <div className="magnetic-wrap"><button onClick={handleReset} className="btn" style={{ marginTop: 28 }}>← Reset</button></div>
                            </div>
                        )}

                        <form ref={formRef} id="contact-form" onSubmit={handleSubmit} style={{ display: sent ? 'none' : 'flex', flexDirection: 'column', gap: 28 }}>
                            <div>
                                <label className="label-caps" style={{ display: 'block', marginBottom: 10 }}>Your Name</label>
                                <input type="text" id="entry-name" required placeholder="Full name" className="mac-input" />
                            </div>
                            <div>
                                <label className="label-caps" style={{ display: 'block', marginBottom: 10 }}>Email Address</label>
                                <input type="email" id="entry-email" required placeholder="your@email.com" className="mac-input" />
                            </div>
                            <div>
                                <label className="label-caps" style={{ display: 'block', marginBottom: 10 }}>Message</label>
                                <textarea id="entry-message" required rows="4" placeholder="What are you working on?" style={{ background: 'transparent', border: '1px solid var(--rule)', color: 'var(--ink)', fontFamily: "'Source Sans 3', sans-serif", fontSize: '0.95rem', fontWeight: 300, outline: 'none', width: '100%', padding: 12, resize: 'none', transition: 'border-color 0.2s' }} onFocus={e => e.currentTarget.style.borderColor = 'var(--orange)'} onBlur={e => e.currentTarget.style.borderColor = 'var(--rule)'}></textarea>
                            </div>
                            <div className="magnetic-wrap" style={{ alignSelf: 'flex-start' }}>
                                <button type="submit" className="btn btn-filled" style={{ justifyContent: 'center' }}>Send Message →</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
