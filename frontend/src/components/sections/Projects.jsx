const projects = [
    {
        num: '01',
        title: 'Automated Data Analytics Pipeline',
        desc: 'Comprehensive data analytics automation pipeline using n8n, integrating multiple APIs to collect, process, and analyze business data in real-time. Features advanced data transformation and dynamic report generation mapped to interactive visualizations.',
        tags: ['n8n', 'Gemini API', 'AI Agents', 'Quickchart.io'],
    },
    {
        num: '02',
        title: 'AI Content Aggregation',
        desc: 'Automated content aggregation system using n8n with RSS feeds. NLP-based classification organizes articles across tech and finance spaces before pushing out curated briefings, drastically reducing human vetting time.',
        tags: ['n8n', 'RSS Feeds', 'NLP', 'Node.js', 'React'],
    },
    {
        num: '03',
        title: 'Face Recognition Attendance',
        desc: 'Automates attendance using real-time facial recognition via OpenCV Haar Cascades and LBPH sequences. Features a Tkinter GUI to administrate data stores persisted efficiently into PostgreSQL limits.',
        tags: ['Python', 'OpenCV', 'LBPH', 'Tkinter', 'PostgreSQL'],
    },
    {
        num: '04',
        title: 'Osiris Game — Dynamic NPCs',
        desc: 'Isometric game built natively with C++ utilizing SDL3. Introduced Dynamic NPCs wired to local instances of LLMs accessed via n8n webhooks, yielding deep branching progressions dynamically generated from player variables.',
        tags: ['C++', 'SDL3', 'n8n', 'Local LLM', 'Webhooks'],
    },
];

export default function Projects() {
    return (
        <section id="projects" style={{ padding: '96px 0', background: 'var(--paper)', position: 'relative' }}>
            <div className="section-inner">
                <div className="theme-branches-wrap">
                    <div className="branch-line-v hide-on-mobile-grid" style={{ left: '50%', transformOrigin: 'bottom' }}></div>
                </div>

                <div className="section-header">
                    <div className="branch-line-h" style={{ bottom: '-1px', transformOrigin: 'right' }}></div>
                    <div className="gsap-fade-up">
                        <div className="label-caps section-label">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
                            // 003 — Selected works
                        </div>
                        <h2 className="display-lg">Technical<br /><em>showcase.</em></h2>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 24 }} className="proj-grid gsap-fade-up">
                    {/* Standard Grid */}
                    {projects.map((p, idx) => (
                        <div key={idx} className="mac-card" style={{ padding: 40, border: 'none', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                                <div style={{ width: 44, height: 44, background: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}>
                                    <svg className="mac-card-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--paper)" strokeWidth="1.5"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>
                                </div>
                                <span className="label-caps">{p.num}</span>
                            </div>
                            <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '1.05rem', fontWeight: 500, color: 'var(--ink)', marginBottom: 12, lineHeight: 1.3, letterSpacing: '-0.01em' }}>{p.title}</div>
                            <p className="body-text" style={{ flex: 1, marginBottom: 20 }}>{p.desc}</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 20 }}>
                                {p.tags.map(tag => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Main Featured */}
                    <div className="mac-card" style={{ padding: 40, border: 'none', gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'var(--cream-2)' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start' }} className="proj-grid-2">
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                                    <div className="label-caps" style={{ color: 'var(--red)', padding: '4px 10px', background: 'rgba(230,57,70,0.1)', border: '1px solid rgba(230,57,70,0.2)' }}>Featured</div>
                                    <span className="label-caps" style={{ color: 'var(--ink)' }}>05</span>
                                </div>
                                <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '1.4rem', fontWeight: 600, color: 'var(--ink)', marginBottom: 16, lineHeight: 1.2, letterSpacing: '-0.02em', textShadow: '0 0 12px rgba(255,240,230,0.2)' }}>
                                    Itinerary Planner Web App
                                </div>
                                <p className="body-text" style={{ flex: 1 }}>
                                    Web-based itinerary management application that helps users plan and optimize travel routes natively in the browser. Interactive Leaflet map provides journey visualization atop an algorithmic path finder. Supports PDF generation reports and leverages an AI-assisted suggestion feature powered intrinsically by Claude models over robust APIs.
                                </p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, justifyContent: 'flex-start', paddingTop: 8 }}>
                                <div className="label-caps" style={{ color: 'var(--ink)' }}>Architectural Stack:</div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                                    {['Leaflet.js', 'Claude AI API', 'PDF Generation', 'Route Navigation', 'Data Layers', 'Vite', 'React'].map(tag => (
                                        <span key={tag} className="tag tag-white">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
