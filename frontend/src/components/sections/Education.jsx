export default function Education() {
    return (
        <section id="education" style={{ padding: '96px 0', background: 'var(--paper)', position: 'relative' }}>
            <div className="section-inner">
                <div className="theme-branches-wrap">
                    <div className="branch-line-v hide-on-mobile-grid" style={{ left: '33.33%', transformOrigin: 'top' }}></div>
                    <div className="branch-line-v hide-on-mobile-grid" style={{ left: '66.66%', transformOrigin: 'bottom' }}></div>
                </div>

                <div className="section-header">
                    <div className="branch-line-h" style={{ bottom: '-1px', transformOrigin: 'center' }}></div>
                    <div className="gsap-fade-up">
                        <div className="label-caps section-label">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /></svg>
                            // 005 — Education
                        </div>
                        <h2 className="display-lg">Academic<br /><em>foundation.</em></h2>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0, border: '1px solid var(--rule)' }} className="edu-grid gsap-fade-up">
                    {/* MCA */}
                    <div className="mac-card" style={{ border: 'none', borderRight: '1px solid var(--rule)', padding: 36 }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 28 }}>
                            <div style={{ width: 52, height: 52, background: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4, boxShadow: '0 0 12px rgba(255, 240, 230, 0.1)' }}>
                                <svg className="mac-card-icon svg-float" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--paper)" strokeWidth="1.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div className="label-caps" style={{ marginBottom: 4 }}>CGPA</div>
                                <div className="stat-num" style={{ color: 'var(--red)', fontSize: '2.2rem', textShadow: '0 0 12px rgba(255,77,77,0.3)' }}>8.79</div>
                            </div>
                        </div>
                        <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '1.05rem', fontWeight: 500, color: 'var(--ink)', marginBottom: 6, letterSpacing: '-0.01em' }}>Master of Computer Applications</div>
                        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: 'var(--ink-light)', fontSize: '0.95rem', marginBottom: 10 }}>IMED, Bharti Vidyapeeth</div>
                        <div className="label-caps">Jun 2024 — Present · Pune</div>
                    </div>

                    {/* BCA */}
                    <div className="mac-card" style={{ border: 'none', borderRight: '1px solid var(--rule)', padding: 36 }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 28 }}>
                            <div style={{ width: 52, height: 52, background: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}>
                                <svg className="mac-card-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--paper)" strokeWidth="1.5"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /></svg>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div className="label-caps" style={{ marginBottom: 4 }}>CGPA</div>
                                <div className="stat-num" style={{ fontSize: '2.2rem', color: 'var(--ink)' }}>7.8</div>
                            </div>
                        </div>
                        <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '1.05rem', fontWeight: 500, color: 'var(--ink)', marginBottom: 6, letterSpacing: '-0.01em' }}>Bachelor of Computer Applications</div>
                        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: 'var(--ink-light)', fontSize: '0.95rem', marginBottom: 10 }}>Makhanlal Chaturvedi National University</div>
                        <div className="label-caps">Jun 2021 — May 2024 · Bhopal</div>
                    </div>

                    {/* School */}
                    <div className="mac-card" style={{ border: 'none', padding: 36 }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 28 }}>
                            <div style={{ width: 52, height: 52, background: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}>
                                <svg className="mac-card-icon svg-spin" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--paper)" strokeWidth="1.5"><circle cx="12" cy="12" r="3" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(45 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-45 12 12)" /></svg>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div className="label-caps" style={{ marginBottom: 4 }}>Score</div>
                                <div className="stat-num" style={{ fontSize: '2.2rem', color: 'var(--ink)' }}>71%</div>
                            </div>
                        </div>
                        <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '1.05rem', fontWeight: 500, color: 'var(--ink)', marginBottom: 6, letterSpacing: '-0.01em' }}>Science — Jr. College</div>
                        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: 'var(--ink-light)', fontSize: '0.95rem', marginBottom: 10 }}>Central Academy Hr. Sec. School</div>
                        <div className="label-caps">2009 — 2021</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
