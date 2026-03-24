export default function Skills() {
    return (
        <section id="skills" style={{ padding: '96px 0', background: 'var(--cream)', position: 'relative', overflow: 'hidden' }}>
            <div className="section-inner">
                <div className="theme-branches-wrap">
                    <div className="branch-line-v hide-on-mobile-grid" style={{ left: '0%', transformOrigin: 'top' }}></div>
                    <div className="branch-line-v hide-on-mobile-grid" style={{ left: '100%', transformOrigin: 'bottom' }}></div>
                </div>

                <svg viewBox="0 0 100 100" style={{ position: 'absolute', right: '-10%', top: '-20%', width: '60%', opacity: 0.05, mixBlendMode: 'screen', pointerEvents: 'none' }} className="svg-spin" stroke="var(--ink)" strokeWidth="0.2" fill="none">
                    <circle cx="50" cy="50" r="40" />
                    <polygon points="50,10 90,90 10,90" />
                    <polygon points="50,90 90,10 10,10" />
                </svg>

                <div className="section-header">
                    <div className="branch-line-h" style={{ bottom: '-1px', transformOrigin: 'left' }}></div>
                    <div className="gsap-fade-up">
                        <div className="label-caps section-label" style={{ display: 'none' }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
                        </div>
                        <h2 className="display-lg">Technical<br /><em>toolkit.</em></h2>
                    </div>
                    <div style={{ textAlign: 'right', maxWidth: 300 }} className="gsap-fade-up hide-on-mobile-grid">
                        <p className="body-text" style={{ fontSize: '0.95rem' }}>A curated selection of languages, frameworks, and AI tools I utilize to bridge logic with automation.</p>
                    </div>
                </div>

                <div className="skills-canvas gsap-fade-up">
                    <span className="skill-text">Python <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="1.5"><path d="M12 2v20M17 5l-10 14M22 12H2M19 19L5 5" /></svg></span>
                    <span className="skill-text">n8n</span>
                    <span className="skill-text">Prompt Engineering</span>
                    <span className="skill-text">Java <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="1.5" className="svg-bounce"><path d="M18 20V10M12 20V4M6 20v-6" /></svg></span>
                    <span className="skill-text">MySQL</span>
                    <span className="skill-pill">FastAPI</span>
                    <span className="skill-text">HTML / CSS</span>
                    <span className="skill-pill">PostgreSQL</span>
                    <span className="skill-text">AI Agents <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="1.5" className="svg-float"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg></span>
                    <span className="skill-pill">Django</span>
                    <span className="skill-text">LangChain</span>
                    <span className="skill-pill">OpenCV</span>
                    <span className="skill-pill">Gumloop</span>
                    <span className="skill-pill">MCP Tools</span>
                    <span className="skill-pill">Git</span>
                    <span className="skill-text">Automation</span>
                    <span className="skill-pill">WhatsApp API</span>
                    <span className="skill-pill">Slack API</span>
                </div>

                <div style={{ marginTop: 56, borderTop: '1px solid var(--rule)', paddingTop: 32 }} className="gsap-fade-up">
                    <div className="label-caps" style={{ marginBottom: 14 }}>Core Attributes</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                        <span className="tag tag-white">Leadership</span>
                        <span className="tag">Teamwork</span>
                        <span className="tag tag-white">Adaptability</span>
                        <span className="tag">Time Management</span>
                        <span className="tag tag-white">Problem Solving</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
