import { useRef, useState } from 'react';

const projects = [
    {
        num: '01',
        title: 'Automated Data Analytics Pipeline',
        desc: 'Comprehensive data analytics automation pipeline using n8n, integrating multiple APIs to collect, process, and analyze business data in real-time. Features advanced data transformation and dynamic report generation mapped to interactive visualizations.',
        tags: ['n8n', 'Gemini API', 'AI Agents', 'Quickchart.io'],
        video: '/videos/AutomatedDataAnalyticsPipelineUsingn8n.mp4',
    },
    {
        num: '02',
        title: 'AI Content Aggregation',
        desc: 'Automated content aggregation system using n8n with RSS feeds. NLP-based classification organizes articles across tech and finance spaces before pushing out curated briefings, drastically reducing human vetting time.',
        tags: ['n8n', 'RSS Feeds', 'NLP', 'Node.js', 'React'],
        video: '/videos/AIContentAggregationAutomationPipeline.mp4',
    },
    {
        num: '03',
        title: 'Face Recognition Attendance',
        desc: 'Automates attendance using real-time facial recognition via OpenCV Haar Cascades and LBPH sequences. Features a Tkinter GUI to administrate data stores persisted efficiently into PostgreSQL limits.',
        tags: ['Python', 'OpenCV', 'LBPH', 'Tkinter', 'PostgreSQL'],
        video: '/videos/FacialRecognitionSystem.mp4',
    },
];

function ProjectCard({ p }) {
    const videoRef = useRef(null);
    const [expanded, setExpanded] = useState(false);

    const play = () => { if (videoRef.current) videoRef.current.play().catch(() => {}); };
    const pause = () => { if (videoRef.current) videoRef.current.pause(); };

    const btnBase = {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: '0.58rem',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        padding: '5px 10px',
        background: 'rgba(18,6,16,0.75)',
        color: 'var(--ink)',
        border: '1px solid rgba(226,180,189,0.25)',
        borderRadius: 4,
        cursor: 'pointer',
        backdropFilter: 'blur(6px)',
        lineHeight: 1,
        transition: 'background 0.2s, border-color 0.2s, color 0.2s',
    };

    const ExpandIcon = () => (
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 3h6v6" /><path d="M9 21H3v-6" />
            <path d="M21 3l-7 7" /><path d="M3 21l7-7" />
        </svg>
    );
    const CollapseIcon = () => (
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M8 3v3a2 2 0 0 1-2 2H3" /><path d="M21 8h-3a2 2 0 0 1-2-2V3" />
            <path d="M3 16h3a2 2 0 0 1 2 2v3" /><path d="M16 21v-3a2 2 0 0 1 2-2h3" />
        </svg>
    );

    return (
        /* Pause video whenever mouse is anywhere on the card */
        <div
            className="mac-card"
            style={{ padding: 40, border: 'none', display: 'flex', flexDirection: 'column' }}
            onMouseLeave={pause}
        >
            {/* Card header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                <div style={{ width: 44, height: 44, background: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}>
                    <svg className="mac-card-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--paper)" strokeWidth="1.5">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                    </svg>
                </div>
                <span className="label-caps">{p.num}</span>
            </div>

            {/* ── COLLAPSED: side-by-side ── */}
            {!expanded && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start' }} className="proj-detail-grid">
                    {/* Text */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '1.05rem', fontWeight: 500, color: 'var(--ink)', marginBottom: 12, lineHeight: 1.3, letterSpacing: '-0.01em' }}>
                            {p.title}
                        </div>
                        <p className="body-text" style={{ flex: 1, marginBottom: 20 }}>{p.desc}</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                            {p.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                        </div>
                    </div>

                    {/* Video with Expand btn */}
                    <div
                        style={{ position: 'relative', borderRadius: 8, overflow: 'hidden', background: '#000', lineHeight: 0 }}
                        onMouseEnter={play}
                    >
                        <video
                            ref={videoRef}
                            src={p.video}
                            muted loop playsInline
                            style={{ width: '100%', display: 'block', maxHeight: 220, objectFit: 'cover', borderRadius: 8 }}
                        />
                        <button
                            onClick={() => setExpanded(true)}
                            style={{ ...btnBase, position: 'absolute', bottom: 10, right: 10 }}
                            onMouseEnter={e => { Object.assign(e.currentTarget.style, { background: 'var(--orange)', borderColor: 'var(--orange)', color: 'var(--paper)' }); }}
                            onMouseLeave={e => { Object.assign(e.currentTarget.style, { background: 'rgba(18,6,16,0.75)', borderColor: 'rgba(226,180,189,0.25)', color: 'var(--ink)' }); }}
                        >
                            <ExpandIcon /> Expand
                        </button>
                    </div>
                </div>
            )}

            {/* ── EXPANDED: video full-width on top, content below ── */}
            {expanded && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                    {/* Big video */}
                    <div
                        style={{ position: 'relative', borderRadius: 8, overflow: 'hidden', background: '#000', lineHeight: 0 }}
                        onMouseEnter={play}
                    >
                        <video
                            ref={videoRef}
                            src={p.video}
                            muted loop playsInline autoPlay
                            style={{ width: '100%', display: 'block', maxHeight: 480, objectFit: 'cover', borderRadius: 8 }}
                        />
                        <button
                            onClick={() => { pause(); setExpanded(false); }}
                            style={{ ...btnBase, position: 'absolute', bottom: 10, right: 10 }}
                            onMouseEnter={e => { Object.assign(e.currentTarget.style, { background: 'var(--orange)', borderColor: 'var(--orange)', color: 'var(--paper)' }); }}
                            onMouseLeave={e => { Object.assign(e.currentTarget.style, { background: 'rgba(18,6,16,0.75)', borderColor: 'rgba(226,180,189,0.25)', color: 'var(--ink)' }); }}
                        >
                            <CollapseIcon /> Collapse
                        </button>
                    </div>

                    {/* Content below video */}
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
                        <div style={{ flex: 1, minWidth: 200 }}>
                            <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '1.05rem', fontWeight: 500, color: 'var(--ink)', marginBottom: 10, lineHeight: 1.3, letterSpacing: '-0.01em' }}>
                                {p.title}
                            </div>
                            <p className="body-text" style={{ marginBottom: 0 }}>{p.desc}</p>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, alignSelf: 'flex-end' }}>
                            {p.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

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
                        <div className="label-caps section-label" style={{ display: 'none' }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                            </svg>
                        </div>
                        <h2 className="display-lg">Technical<br /><em>showcase.</em></h2>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }} className="gsap-fade-up">
                    {projects.map((p, idx) => <ProjectCard key={idx} p={p} />)}
                </div>
            </div>
        </section>
    );
}
