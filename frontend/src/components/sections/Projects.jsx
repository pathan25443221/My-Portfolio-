import { useRef, useState } from 'react';

const projects = [
    {
        num: '01',
        title: 'Automated Data Analytics Pipeline',
        desc: 'Comprehensive n8n pipeline integrating multiple APIs to collect, process, and analyze business data in real-time. Features dynamic report generation with interactive charts via Quickchart.io.',
        tags: ['n8n', 'Gemini API', 'AI Agent'],
        video: '/videos/AutomatedDataAnalyticsPipelineUsingn8n.mp4',
        icon: <path d="M18 20V10M12 20V4M6 20v-6" />
    },
    {
        num: '02',
        title: 'AI Content Aggregation Pipeline',
        desc: 'AI-powered content aggregation utilizing n8n with RSS feeds and custom APIs. Incorporates NLP-based classification across domains (finance, tech). Fronted by a pristine JSX dashboard.',
        tags: ['n8n', 'NLP', 'JSX'],
        video: '/videos/AIContentAggregationAutomationPipeline.mp4',
        icon: <path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16M4 20h.01" />
    },
    {
        num: '03',
        title: 'Facial Recognition Attendance',
        desc: "Automates attendance tracking via real-time facial recognition using OpenCV's Haar Cascade and LBPH algorithms. Integrated with a Tkinter GUI and PostgreSQL backend.",
        tags: ['Python', 'OpenCV', 'PostgreSQL'],
        video: '/videos/FacialRecognitionSystem.mp4',
        icon: <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></>
    }
];

function ProjectCard({ p }) {
    const videoRef = useRef(null);
    const [expanded, setExpanded] = useState(false);

    const play = () => { if (videoRef.current) videoRef.current.play().catch(() => {}); };
    const pause = () => { if (videoRef.current) videoRef.current.pause(); };

    const btnBase = {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: '0.65rem',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        padding: '8px 16px',
        background: 'rgba(20,15,10,0.85)',
        color: '#fff',
        border: '1px solid rgba(245,208,138,0.2)',
        borderRadius: 40,
        cursor: 'pointer',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        zIndex: 10,
        transition: 'all 0.3s ease',
    };

    const ExpandIcon = () => (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 3h6v6" /><path d="M9 21H3v-6" />
            <path d="M21 3l-7 7" /><path d="M3 21l7-7" />
        </svg>
    );
    const CollapseIcon = () => (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M8 3v3a2 2 0 0 1-2 2H3" /><path d="M21 8h-3a2 2 0 0 1-2-2V3" />
            <path d="M3 16h3a2 2 0 0 1 2 2v3" /><path d="M16 21v-3a2 2 0 0 1 2-2h3" />
        </svg>
    );

    return (
        <div 
            className="mac-card dyn-border" 
            style={{ 
                padding: expanded ? '40px' : '32px', 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onMouseLeave={pause}
        >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
                <div className="dyn-border" style={{ width: 44, height: 44, background: 'rgba(255,255,255,0.02)', border: '1px solid', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}>
                    <svg className="mac-card-icon dyn-text" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        {p.icon}
                    </svg>
                </div>
                <span className="label-caps dyn-text">{p.num}</span>
            </div>

            {/* ── COLLAPSED LAYOUT (SIDE-BY-SIDE) ── */}
            {!expanded && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start' }} className="proj-detail-grid">
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '1.25rem', fontWeight: 500, color: 'var(--theme-ink)', marginBottom: 12, lineHeight: 1.3, letterSpacing: '-0.01em' }}>
                            {p.title}
                        </div>
                        <p className="body-text" style={{ flex: 1, marginBottom: 20, fontSize: '0.95rem' }}>{p.desc}</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                            {p.tags.map(tag => (
                                <span key={tag} className="tag dyn-border">{tag}</span>
                            ))}
                        </div>
                    </div>

                    <div 
                        style={{ position: 'relative', borderRadius: 8, overflow: 'hidden', background: '#000', lineHeight: 0, boxShadow: '0 12px 40px rgba(0,0,0,0.5)' }}
                        onMouseEnter={play}
                    >
                        <video
                            ref={videoRef}
                            src={p.video}
                            muted loop playsInline
                            style={{ width: '100%', display: 'block', maxHeight: 220, objectFit: 'cover' }}
                        />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)', pointerEvents: 'none' }} />
                        <button
                            onClick={() => setExpanded(true)}
                            style={{ ...btnBase, position: 'absolute', bottom: 12, right: 12 }}
                            onMouseEnter={e => { Object.assign(e.currentTarget.style, { background: 'var(--c1)', borderColor: 'var(--c1)' }); }}
                            onMouseLeave={e => { Object.assign(e.currentTarget.style, { background: 'rgba(20,15,10,0.85)', borderColor: 'rgba(245,208,138,0.2)' }); }}
                        >
                            <ExpandIcon /> Expand
                        </button>
                    </div>
                </div>
            )}

            {/* ── EXPANDED LAYOUT (STACKED) ── */}
            {expanded && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                    <div 
                        style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', background: '#000', lineHeight: 0, boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }}
                        onMouseEnter={play}
                    >
                        <video
                            ref={videoRef}
                            src={p.video}
                            muted loop playsInline autoPlay
                            style={{ width: '100%', display: 'block', maxHeight: 520, objectFit: 'cover' }}
                        />
                        <button
                            onClick={() => { pause(); setExpanded(false); }}
                            style={{ ...btnBase, position: 'absolute', bottom: 20, right: 20 }}
                            onMouseEnter={e => { Object.assign(e.currentTarget.style, { background: 'var(--c1)', borderColor: 'var(--c1)' }); }}
                            onMouseLeave={e => { Object.assign(e.currentTarget.style, { background: 'rgba(20,15,10,0.85)', borderColor: 'rgba(245,208,138,0.2)' }); }}
                        >
                            <CollapseIcon /> Collapse
                        </button>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                        <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '1.6rem', fontWeight: 500, color: 'var(--theme-ink)', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                            {p.title}
                        </div>
                        <p className="body-text" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.7)', maxWidth: 800 }}>{p.desc}</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 8 }}>
                            {p.tags.map(tag => (
                                <span key={tag} className="tag dyn-border" style={{ fontSize: '0.75rem', padding: '6px 14px' }}>{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default function Projects() {
    return (
        <section id="projects" style={{ padding: '120px 0', position: 'relative' }} data-bg-step="4">
            <div className="section-inner">
                
                {/* --- JAPANESE MOTIF ACCENTS --- */}

                {/* Yagasuri (arrow feather) pattern */}
                <svg style={{ position: 'absolute', right: '-1%', top: '5%', width: 180, height: 300, opacity: 0.04, pointerEvents: 'none' }} viewBox="0 0 60 100" fill="none">
                    <defs>
                        <pattern id="yagasuri" x="0" y="0" width="12" height="20" patternUnits="userSpaceOnUse">
                            <path d="M0 0 Q6 5 12 0 M0 10 Q6 15 12 10 M6 0 L6 20" stroke="var(--c4)" strokeWidth="0.6" fill="none" />
                            <path d="M0 5 Q3 8 6 5 Q9 2 12 5" stroke="var(--c4)" strokeWidth="0.4" fill="none" opacity="0.5" />
                        </pattern>
                    </defs>
                    <rect width="60" height="100" fill="url(#yagasuri)" />
                </svg>

                {/* Sakura petal motif top-left */}
                <svg className="jp-mon petal-drift-2" style={{ position: 'absolute', left: '0%', top: '2%', width: 120, height: 120, opacity: 0.05, pointerEvents: 'none' }} viewBox="0 0 60 60" fill="none">
                    {[0, 72, 144, 216, 288].map(deg => (
                        <ellipse key={deg} cx="30" cy="20" rx="12" ry="18" stroke="var(--c2)" strokeWidth="0.8" transform={`rotate(${deg} 30 30)`} />
                    ))}
                </svg>

                {/* Katana vertical dividers */}
                <div className="theme-branches-wrap">
                    <div className="katana-divider-v hide-on-mobile-grid" style={{ left: '0%' }}>
                        <div className="k-handle-v" /><div className="k-tsuba-v dyn-bg dyn-glow" /><div className="k-blade-v dyn-bg dyn-glow" />
                    </div>
                </div>

                <div className="section-header dyn-border">
                    <div className="katana-divider-h" style={{ bottom: '-1px' }}>
                        <div className="k-handle-h" /><div className="k-tsuba-h dyn-bg dyn-glow" /><div className="k-blade-h dyn-bg dyn-glow" />
                    </div>
                    <div className="gsap-fade-up">
                        <div className="label-caps section-label dyn-text">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="16 18 22 12 16 6" />
                                <polyline points="8 6 2 12 8 18" />
                            </svg>
                            // 003 — Projects
                        </div>
                        <div className="section-jp-motif" style={{ alignItems: 'flex-end' }}>
                            <h2 className="display-lg">Technical<br /><em className="dyn-text">showcase.</em></h2>
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" style={{ opacity: 0.18, marginBottom: 8, flexShrink: 0, animation: 'petal-drift 7s ease-in-out infinite' }}>
                                {[0, 72, 144, 216, 288].map((deg, i) => (
                                    <ellipse key={deg} cx="30" cy="16" rx="9" ry="14" fill="var(--c2)" opacity={i % 2 === 0 ? 0.5 : 0.4} transform={`rotate(${deg} 30 30)`} />
                                ))}
                                <circle cx="30" cy="30" r="5" fill="var(--c1)" opacity="0.8" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="gsap-fade-up" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 32, marginTop: 48 }}>
                    {projects.map((p, idx) => (
                        <ProjectCard key={idx} p={p} />
                    ))}
                </div>
            </div>
        </section>
    );
}
