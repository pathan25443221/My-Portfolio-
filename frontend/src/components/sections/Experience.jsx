export default function Experience() {
    return (
        <section id="experience" style={{ padding: '96px 0', background: 'var(--cream)', position: 'relative' }}>
            <div className="section-inner">
                {/* Follows exact dimension structure to align flawlessly */}
                <div className="theme-branches-wrap">
                    <div className="branch-line-v hide-on-mobile-grid-sm" style={{ left: '180px', transformOrigin: 'top' }}></div>
                </div>

                <div className="section-header">
                    <div className="branch-line-h" style={{ bottom: '-1px', transformOrigin: 'right' }}></div>
                    <div className="gsap-fade-up">
                        <div className="label-caps section-label" style={{ display: 'none' }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                        </div>
                        <h2 className="display-lg">Work<br/><em>history.</em></h2>
                    </div>
                    <div style={{ textAlign: 'right' }} className="gsap-fade-up hide-on-mobile-grid-sm">
                        <div className="label-caps" style={{ marginBottom: 4 }}>Working Since</div>
                        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.2rem', fontWeight: 500 }}>2025</div>
                    </div>
                </div>

                <div className="gsap-fade-up">
                    {/* Company header */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
                        <div style={{ width: 44, height: 44, background: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4, boxShadow: '0 0 12px rgba(255, 240, 230, 0.1)' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--paper)" strokeWidth="1.5" className="svg-spin">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                <path d="M3 9h18M9 21V9"/>
                            </svg>
                        </div>
                        <div>
                            <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '1.15rem', fontWeight: 500, color: 'var(--ink)' }}>Actly</div>
                            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: 'var(--ink-light)', fontSize: '0.95rem' }}>Remote · Kuwait</div>
                        </div>
                        <div className="theme-grad-v hide-on-mobile-grid-sm" style={{ width: 3, height: 56, borderRadius: 99, marginLeft: 'auto' }}></div>
                    </div>

                    {/* Role 1 */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, 180px) 1fr', gap: 0, borderBottom: '1px solid var(--rule)', paddingBottom: 36, marginBottom: 36 }} className="exp-row">
                        <div style={{ paddingRight: 24, paddingTop: 2 }}>
                            <div className="label-caps" style={{ marginBottom: 10 }}>01/2026 — Present</div>
                            <span className="tag tag-red">Full-time</span>
                        </div>
                        <div>
                            <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '1.05rem', fontWeight: 500, color: 'var(--ink)', marginBottom: 6, letterSpacing: '-0.01em' }}>Full Stack Developer</div>
                            <p className="body-text" style={{ maxWidth: 640, marginBottom: 16 }}>AI Agent integration with various proprietary tools and Meta Developer tools including WhatsApp. Working directly with the Project Manager and CEO to architect innovative automation solutions.</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                                <span className="tag">AI Agent Integration</span>
                                <span className="tag">WhatsApp Business API</span>
                                <span className="tag">Meta Dev Tools</span>
                            </div>
                        </div>
                    </div>

                    {/* Role 2 */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, 180px) 1fr', gap: 0 }} className="exp-row">
                        <div style={{ paddingRight: 24, paddingTop: 2 }}>
                            <div className="label-caps" style={{ marginBottom: 10 }}>10/2025 — 12/2025</div>
                            <span className="tag tag-red">Intern</span>
                        </div>
                        <div>
                            <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '1.05rem', fontWeight: 500, color: 'var(--ink)', marginBottom: 6, letterSpacing: '-0.01em' }}>Full Stack Developer Intern</div>
                            <p className="body-text" style={{ maxWidth: 640, marginBottom: 16 }}>Implemented and innovated existing software. Created custom MCP tools (Notion, Slack) to be integrated into AI-powered Workflows.</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                                <span className="tag">Custom MCP Tools</span>
                                <span className="tag">Notion Integration</span>
                                <span className="tag">Slack Integration</span>
                                <span className="tag">Workflow Automation</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
