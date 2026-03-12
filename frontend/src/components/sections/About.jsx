export default function About() {
    return (
        <section id="about" style={{ padding: '96px 0', background: 'var(--cream)', position: 'relative' }}>
            <div className="section-inner">
                <div className="theme-branches-wrap">
                    <div className="branch-line-v hide-on-mobile-grid" style={{ left: '0%', transformOrigin: 'top' }}></div>
                    <div className="branch-line-v hide-on-mobile-grid" style={{ left: '100%', transformOrigin: 'bottom' }}></div>
                </div>

                <div className="section-header">
                    <div className="branch-line-h" style={{ bottom: '-1px', transformOrigin: 'left' }}></div>
                    <div className="gsap-fade-up">
                        <div className="label-caps section-label">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
                            // 001 — About me
                        </div>
                        <h2 className="display-lg">The <em>architect</em><br />behind the code.</h2>
                    </div>
                </div>

                <div className="bento-grid">
                    <div className="bento-item bento-large gsap-fade-up">
                        <svg className="bento-icon-bg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M4 17L10 11 4 5M12 19h8" /></svg>
                        <div>
                            <div className="label-caps" style={{ marginBottom: 12 }}>Introduction</div>
                            <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '1.25rem', fontWeight: 500, color: 'var(--ink)', marginBottom: 20, lineHeight: 1.4, letterSpacing: '-0.01em' }}>
                                I build systems that connect the dots.
                            </div>
                            <p className="body-text" style={{ marginBottom: 16 }}>
                                Whether it's crafting high-performance APIs in <strong>FastAPI / Django</strong> or orchestrating autonomous AI agents via <strong>n8n</strong>, my goal is always to reduce friction through code.
                            </p>
                            <p className="body-text">
                                Currently pursuing my MCA at IMED, Pune, I thrive at the intersection of application development and intelligent automation workflows.
                            </p>
                        </div>
                        <div style={{ marginTop: 28, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                            <span className="tag tag-white">Problem Solver</span>
                            <span className="tag">Full Stack</span>
                            <span className="tag tag-red">AI Automation</span>
                        </div>
                    </div>

                    <div className="bento-item bento-wide gsap-fade-up" style={{ padding: '32px 40px', background: 'var(--cream-2)' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
                            <div className="label-caps" style={{ color: 'var(--orange)', marginBottom: 16 }}>Current Focus</div>
                            <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '1.4rem', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.3, letterSpacing: '-0.02em', textShadow: '0 0 10px rgba(244,162,97,0.2)' }}>
                                Expanding capabilities in Multi-Agent Orchestration & developing AI-driven solutions via OpenRouter.
                            </div>
                        </div>
                    </div>

                    <div className="bento-item gsap-fade-up">
                        <svg className="bento-icon-bg svg-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
                        <div className="label-caps" style={{ marginBottom: 12 }}>Architecture</div>
                        <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '1.1rem', fontWeight: 500, color: 'var(--ink)', marginBottom: 6 }}>RESTful APIs & Services</div>
                        <p className="body-text" style={{ fontSize: '0.85rem' }}>Designing robust and scalable backends.</p>
                    </div>

                    <div className="bento-item gsap-fade-up">
                        <svg className="bento-icon-bg svg-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>
                        <div className="label-caps" style={{ marginBottom: 12 }}>Specialty</div>
                        <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '1.1rem', fontWeight: 500, color: 'var(--ink)', marginBottom: 6 }}>Workflow Automation</div>
                        <p className="body-text" style={{ fontSize: '0.85rem' }}>Eliminating repetitive tasks via n8n.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
