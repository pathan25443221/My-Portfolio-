export default function Experience() {
    return (
        <section id="experience" style={{ padding: '120px 0', position: 'relative' }} data-bg-step="3">
            <div className="section-inner">

                {/* --- JAPANESE MOTIF ACCENTS --- */}
                
                {/* Sayagata (key fret) background pattern */}
                <svg style={{ position: 'absolute', right: '-2%', top: '15%', width: 240, height: 400, opacity: 0.03, pointerEvents: 'none' }} viewBox="0 0 100 200" fill="none">
                    <defs>
                        <pattern id="sayagata" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M0 20 L10 20 L10 10 L30 10 L30 30 L10 30 L10 20 M20 0 L20 10 M20 30 L20 40 M0 0 L10 0 M30 0 L40 0 M0 40 L10 40 M30 40 L40 40" stroke="var(--c3)" strokeWidth="0.8" fill="none" />
                        </pattern>
                    </defs>
                    <rect width="100" height="200" fill="url(#sayagata)" />
                </svg>

                {/* Enso circle — experience section */}
                <svg style={{ position: 'absolute', right: '4%', top: '5%', width: 160, height: 160, opacity: 0.05, pointerEvents: 'none' }} viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="44" stroke="var(--c2)" strokeWidth="4" strokeLinecap="round" strokeDasharray="240 40" className="enso-svg" />
                </svg>

                {/* Shippo (seven-treasure) linked rings */}
                <svg style={{ position: 'absolute', left: '-1%', bottom: '5%', width: 200, height: 120, opacity: 0.04, pointerEvents: 'none' }} viewBox="0 0 100 60" fill="none">
                    <defs>
                        <pattern id="shippo" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="10" cy="10" r="9" stroke="var(--c4)" strokeWidth="0.7" fill="none" />
                            <circle cx="0" cy="0" r="9" stroke="var(--c4)" strokeWidth="0.7" fill="none" />
                            <circle cx="20" cy="0" r="9" stroke="var(--c4)" strokeWidth="0.7" fill="none" />
                            <circle cx="0" cy="20" r="9" stroke="var(--c4)" strokeWidth="0.7" fill="none" />
                            <circle cx="20" cy="20" r="9" stroke="var(--c4)" strokeWidth="0.7" fill="none" />
                        </pattern>
                    </defs>
                    <rect width="100" height="60" fill="url(#shippo)" />
                </svg>

                {/* Katana separators */}
                <div className="theme-branches-wrap">
                    <div className="katana-divider-v hide-on-mobile-grid" style={{ left: '0%' }}>
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
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                            // 002 — Experience
                        </div>
                        <div className="section-jp-motif" style={{ alignItems: 'flex-end' }}>
                            <h2 className="display-lg">Work<br /><em className="dyn-text">history.</em></h2>
                            {/* Crossed katana mon */}
                            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" style={{ opacity: 0.16, marginBottom: 6, flexShrink: 0 }}>
                                <circle cx="28" cy="28" r="26" stroke="var(--c2)" strokeWidth="0.8" />
                                <line x1="8" y1="8" x2="48" y2="48" stroke="var(--c1)" strokeWidth="2" strokeLinecap="round" />
                                <line x1="48" y1="8" x2="8" y2="48" stroke="var(--c1)" strokeWidth="2" strokeLinecap="round" />
                                <rect x="22" y="25" width="12" height="6" rx="1" fill="var(--c2)" opacity="0.7" />
                            </svg>
                        </div>
                    </div>
                    <div style={{ textAlign: 'right' }} className="gsap-fade-up hide-on-mobile-grid-sm">
                        <div className="label-caps" style={{ marginBottom: 4 }}>Working Since</div>
                        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.5rem', fontWeight: 500, color: 'var(--theme-ink)' }}>2025</div>
                    </div>
                </div>

                <div className="gsap-fade-up">
                    {/* Header: Company with glassmorphism */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 48 }}>
                        <div className="dyn-border" style={{ width: 56, height: 56, background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', border: '1px solid', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="svg-spin dyn-text">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                <path d="M3 9h18M9 21V9" />
                            </svg>
                        </div>
                        <div>
                            <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '1.4rem', fontWeight: 500, color: 'var(--theme-ink)', letterSpacing: '-0.01em' }}>Actly</div>
                            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: 'var(--theme-ink-dim)', fontSize: '1.1rem' }}>Remote · Kuwait</div>
                        </div>
                        <div className="bg-gradient-shift hide-on-mobile-grid-sm" style={{ width: 2, height: 64, marginLeft: 'auto', opacity: 0.5 }}></div>
                    </div>

                    {/* Role 1: Full-time */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(180px, 220px) 1fr', gap: 0, borderBottom: '1px solid var(--rule)', paddingBottom: 48, marginBottom: 48 }} className="exp-row dyn-border">
                        <div style={{ paddingRight: 32, paddingTop: 4 }}>
                            <div className="label-caps" style={{ marginBottom: 12 }}>01/2026 — Present</div>
                            <span className="tag dyn-text dyn-border">Full-time</span>
                        </div>
                        <div>
                            <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '1.25rem', fontWeight: 500, color: 'var(--theme-ink)', marginBottom: 12, letterSpacing: '-0.01em' }}>Full Stack Developer</div>
                            <p className="body-text" style={{ maxWidth: 720, marginBottom: 24 }}>Spearheading AI Agent integrations across diverse proprietary platforms and Meta Developer tools (including WhatsApp). Collaborating directly with executive leadership to architect innovative, generative AI solutions.</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                <span className="tag dyn-border">AI Agents</span>
                                <span className="tag dyn-border">WhatsApp API</span>
                                <span className="tag dyn-border">Meta Dev Tools</span>
                                <span className="tag dyn-border">n8n</span>
                                <span className="tag dyn-border">FastAPI</span>
                            </div>
                        </div>
                    </div>

                    {/* Role 2: Intern */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(180px, 220px) 1fr', gap: 0 }} className="exp-row">
                        <div style={{ paddingRight: 32, paddingTop: 4 }}>
                            <div className="label-caps" style={{ marginBottom: 12 }}>10/2025 — 12/2025</div>
                            <span className="tag dyn-border dyn-text">Intern</span>
                        </div>
                        <div>
                            <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '1.25rem', fontWeight: 500, color: 'var(--theme-ink)', marginBottom: 12, letterSpacing: '-0.01em' }}>Full Stack Developer Intern</div>
                            <p className="body-text" style={{ maxWidth: 720, marginBottom: 24 }}>Worked on implementing and innovating existing software architectures. Authored custom MCP tools for Notion and Slack, designed to be seamlessly integrated into powerful AI-driven workflows.</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                <span className="tag dyn-border">MCP Tools</span>
                                <span className="tag dyn-border">Notion API</span>
                                <span className="tag dyn-border">Slack API</span>
                                <span className="tag dyn-border">Workflow Automation</span>
                                <span className="tag dyn-border">Django</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
