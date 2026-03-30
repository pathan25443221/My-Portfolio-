import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import profileImg from '../../assets/20241207_132110.jpg(1).jpg';

gsap.registerPlugin(ScrollTrigger);

const CYCLE_SLIDES = [
    { label: 'Hard Skill', value: 'Python', jp: 'パイソン', kanji: '技術', type: 'hard' },
    { label: 'Soft Skill', value: 'Leadership', jp: 'リーダーシップ', kanji: '統率', type: 'soft' },
    { label: 'Hard Skill', value: 'FastAPI', jp: 'ファストAPI', kanji: '開発', type: 'hard' },
    { label: 'Soft Skill', value: 'Adaptability', jp: '適応力', kanji: '適応力', type: 'soft' },
    { label: 'Hard Skill', value: 'n8n Automation', jp: 'エヌエイトエヌ', kanji: '自動化', type: 'hard' },
    { label: 'Soft Skill', value: 'Problem Solving', jp: '問題解決', kanji: '解決力', type: 'soft' },
    { label: 'Hard Skill', value: 'LangChain', jp: 'ランチェーン', kanji: '連鎖', type: 'hard' },
    { icon: 'Collaboration', label: 'Soft Skill', value: 'Collaboration', jp: '協働', kanji: '協働', type: 'soft' },
    { label: 'Hard Skill', value: 'AI Agents', jp: 'AIエージェント', kanji: '知能', type: 'hard' },
    { label: 'Soft Skill', value: 'Time Management', jp: '時間管理', kanji: '時間管理', type: 'soft' },
];

const KANA = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

export default function About() {
    const [activeSlide, setActiveSlide] = useState(0);
    const hScrollRef = useRef(null);
    const photoWrapRef = useRef(null);
    const resumeBtnRef = useRef(null);
    const cycleValueRef = useRef(null);
    const cyclerIntervalRef = useRef(null);
    const cycleStarted = useRef(false);

    // --- SCRAMBLE LOGIC ---
    const scrambleValue = (el, jpText, enText, durationMs = 900) => {
        return new Promise(resolve => {
            const splitPoint = 0.45; 
            let start = null;
            let lastFrame = 0;
            const frameInterval = 55;

            function tick(ts) {
                if (!start) start = ts;
                const progress = Math.min((ts - start) / durationMs, 1);

                if (ts - lastFrame >= frameInterval) {
                    lastFrame = ts;
                    if (progress < splitPoint) {
                        let result = '';
                        const p = progress / splitPoint;
                        for (let i = 0; i < jpText.length; i++) {
                            result += Math.random() < p * 0.6 ? jpText[i] : KANA[Math.floor(Math.random() * KANA.length)];
                        }
                        el.textContent = result;
                        el.style.opacity = '0.7';
                        el.style.letterSpacing = '0.08em';
                    } else {
                        const p2 = (progress - splitPoint) / (1 - splitPoint);
                        let result = '';
                        for (let i = 0; i < enText.length; i++) {
                            const ch = enText[i];
                            if (ch === ' ' || ch === '·' || ch === '—') { result += ch; continue; }
                            result += p2 > (i / enText.length) + 0.25 ? ch : KANA[Math.floor(Math.random() * KANA.length)];
                        }
                        el.textContent = result;
                        el.style.opacity = '1';
                        el.style.letterSpacing = '-0.01em';
                    }
                }
                if (progress < 1) requestAnimationFrame(tick);
                else {
                    el.textContent = enText;
                    el.style.opacity = '1';
                    el.style.letterSpacing = '-0.01em';
                    resolve();
                }
            }
            requestAnimationFrame(tick);
        });
    };

    // --- INITIAL UNFURL & CYCLER START ---
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                observer.disconnect();
                
                // Unfurl scroll
                setTimeout(() => {
                    if (!hScrollRef.current) return;
                    gsap.fromTo(hScrollRef.current, 
                        { width: '14px' }, 
                        { width: '100%', duration: 1.6, ease: 'power2.inOut', delay: 0.2,
                          onComplete: () => {
                              if (!cycleStarted.current) {
                                  cycleStarted.current = true;
                                  startCycler();
                              }
                          }
                        }
                    );
                }, 500);
            }
        }, { threshold: 0.1 });

        if (photoWrapRef.current) observer.observe(photoWrapRef.current);
        return () => {
            observer.disconnect();
            if (cyclerIntervalRef.current) clearInterval(cyclerIntervalRef.current);
        };
    }, []);

    const startCycler = () => {
        const valueEl = cycleValueRef.current;
        if (valueEl) scrambleValue(valueEl, CYCLE_SLIDES[0].jp, CYCLE_SLIDES[0].value);
        
        cyclerIntervalRef.current = setInterval(() => {
            setActiveSlide(prev => {
                const next = (prev + 1) % CYCLE_SLIDES.length;
                if (cycleValueRef.current) {
                    scrambleValue(cycleValueRef.current, CYCLE_SLIDES[next].jp, CYCLE_SLIDES[next].value);
                }
                return next;
            });
        }, 2800);
    };

    // --- RESUME UNROLL ---
    const handleResumeClick = (e) => {
        const btn = resumeBtnRef.current;
        if (!btn || btn.dataset.animating === '1') return;
        btn.dataset.animating = '1';

        const body = btn.querySelector('.rsb-body');
        const text = btn.querySelector('.rsb-text');
        const icon = btn.querySelector('.rsb-icon');

        const tl = gsap.timeline();
        // Unroll
        tl.to(body, { paddingLeft: 44, paddingRight: 44, duration: 0.45, ease: 'power2.out' })
          .to([text, icon], { opacity: 0, duration: 0.18 }, 0)
          .call(() => { text.textContent = 'Unrolling...'; }, null, 0.22)
          .to([text, icon], { opacity: 1, duration: 0.25 }, 0.22);

        // Roll back
        tl.to(body, { paddingLeft: 16, paddingRight: 16, duration: 0.4, ease: 'power2.in', delay: 1.1 })
          .to([text, icon], { opacity: 0, duration: 0.15 }, "-=0.4")
          .call(() => { 
                text.textContent = 'Download CV'; 
                delete btn.dataset.animating;
            }, null, "-=0.0")
          .to([text, icon], { opacity: 1, duration: 0.2 });
    };

    const slide = CYCLE_SLIDES[activeSlide];

    return (
        <section id="about" style={{ padding: '120px 0' }} data-bg-step="2">
            <div className="section-inner">
                {/* Japanese motif accents */}
                <svg className="jp-mon" style={{ right: '-1%', top: '8%', width: 220, height: 280, opacity: 0.05 }} viewBox="0 0 110 140" fill="none">
                    <defs>
                        <pattern id="kikko" x="0" y="0" width="28" height="32" patternUnits="userSpaceOnUse">
                            <polygon points="14,2 22,7 22,17 14,22 6,17 6,7" stroke="var(--c1)" strokeWidth="0.8" fill="none" />
                        </pattern>
                    </defs>
                    <rect width="110" height="140" fill="url(#kikko)" />
                </svg>

                {/* Katana vertical branch lines */}
                <div className="theme-branches-wrap">
                    <div className="katana-divider-v hide-on-mobile-grid" style={{ left: '0%' }}>
                        <div className="k-handle-v" /><div className="k-tsuba-v dyn-bg dyn-glow" /><div className="k-blade-v dyn-bg dyn-glow" />
                    </div>
                    <div className="katana-divider-v hide-on-mobile-grid" style={{ left: '100%' }}>
                        <div className="k-handle-v" /><div className="k-tsuba-v dyn-bg dyn-glow" /><div className="k-blade-v dyn-bg dyn-glow" />
                    </div>
                </div>

                {/* Section header */}
                <div className="section-header dyn-border">
                    <div className="katana-divider-h" style={{ bottom: '-1px' }}>
                        <div className="k-handle-h" /><div className="k-tsuba-h dyn-bg dyn-glow" /><div className="k-blade-h dyn-bg dyn-glow" />
                    </div>
                    <div className="gsap-fade-up section-jp-motif">
                        <div>
                            <div className="label-caps section-label dyn-text">
                                001 — About
                            </div>
                            <h2 className="display-lg">About<br /><em className="dyn-text" style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--c2)' }}>the developer.</em></h2>
                        </div>
                        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" style={{ opacity: 0.18 }}>
                            <path d="M 36 6 A 30 30 0 1 1 14 58" stroke="var(--c2)" strokeWidth="4" strokeLinecap="round" fill="none" />
                        </svg>
                    </div>
                </div>

                <div className="about-layout gsap-fade-up">
                    {/* Photo Cell */}
                    <div className="photo-cell">
                        <div className="photo-frame-wrap" ref={photoWrapRef}>
                            <div className="photo-inner">
                                <img src={profileImg} alt="Intekhab Pathan" />
                            </div>
                            <div className="photo-brush" />
                            <div className="photo-seal">印</div>
                            <div className="photo-nameplate">
                                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '0.95rem', fontWeight: 500, color: 'rgba(245,230,200,0.9)', letterSpacing: '0.05em' }}>Intekhab Pathan</div>
                                <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '0.5rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(245,230,200,0.42)', marginTop: 3 }}>Full Stack · AI Dev</div>
                            </div>
                            <svg className="photo-kamon" style={{ opacity: 0.4 }} viewBox="0 0 56 56" fill="none">
                                <circle cx="28" cy="28" r="26" stroke="rgba(192,40,44,0.45)" strokeWidth="0.8" />
                                <circle cx="28" cy="28" r="20" stroke="rgba(200,169,110,0.35)" strokeWidth="0.6" />
                                <line x1="28" y1="2" x2="28" y2="54" stroke="rgba(192,40,44,0.25)" strokeWidth="0.6" />
                                <line x1="2" y1="28" x2="54" y2="28" stroke="rgba(192,40,44,0.25)" strokeWidth="0.6" />
                            </svg>
                        </div>
                    </div>

                    {/* Scroll Cell */}
                    <div className="h-scroll-cell">
                        <div className="h-scroll-wrap" ref={hScrollRef} style={{ width: '14px', overflow: 'hidden' }}>
                            <div className="h-scroll-inner">
                                <div className="h-rod-cap" />
                                <div className="h-scroll-paper">
                                    <div className="h-kanji-bg">人</div>
                                    <div className="h-deco-band">
                                        <div className="h-cycle-label">{slide.label}</div>
                                        <div className="h-cycle-value" ref={cycleValueRef} style={{ color: slide.type === 'soft' ? 'var(--c4)' : 'var(--c1)' }}>{slide.value}</div>
                                        <div className="h-cycle-kanji">{slide.kanji}</div>
                                        <div className="h-cycle-dots">
                                            {CYCLE_SLIDES.map((_, i) => (
                                                <span key={i} className={`h-dot${i === activeSlide ? ' active' : ''}`} onClick={() => setActiveSlide(i)} />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="h-info-items">
                                        {[
                                            { label: 'Age', value: '24 yrs' },
                                            { label: 'Location', value: 'Pune, India' },
                                            { label: 'Role', value: 'AI Dev' },
                                            { label: 'Education', value: 'MCA — IMED' },
                                            { label: 'Focus', value: 'Automation' },
                                            { label: 'Status', value: 'Available', isStatus: true },
                                        ].map(item => (
                                            <div key={item.label} className="h-info-item">
                                                <div className="h-info-text">
                                                    <div className="h-info-label">{item.label}</div>
                                                    {item.isStatus ? (
                                                        <div className="h-status-dot">
                                                            <span className="status-dot dyn-bg dyn-glow" style={{ width: 7, height: 7 }} />
                                                            <span className="h-info-value">{item.value}</span>
                                                        </div>
                                                    ) : <div className="h-info-value">{item.value}</div>}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="h-rod-end">
                                    <div className="h-tassels">
                                        <div className="h-tassel" style={{ height: 20 }} />
                                        <div className="h-tassel" style={{ height: 28, marginTop: -8 }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bio Cell */}
                    <div className="bio-cell">
                        <div className="bento-content">
                            <div className="dyn-bg" style={{ width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, borderRadius: 4 }}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                            </div>
                            <p className="body-text" style={{ fontSize: '1.05rem', lineHeight: 1.6 }}>
                                I am a Full Stack Developer venturing deep into AI and Automation. I specialize in bridging complex systems and building seamless, intelligent workflows using modern frameworks and tools like <strong>n8n</strong> and <strong>Gumloop</strong>.
                                <br /><br />
                                My foundation lies in architecting robust backend architectures with <strong>FastAPI</strong> and <strong>Django</strong>, seamlessly combined with a passion for leveraging generative AI to craft thoughtful user experiences. Currently at Actly, working directly with leadership to conceptualize and deploy innovative AI agent solutions.
                            </p>
                        </div>
                        <div className="resume-scroll-btn" ref={resumeBtnRef} onClick={handleResumeClick}>
                            <div className="rsb-rod" />
                            <a href="/resume.pdf" download="Intekhab_Pathan_CV.pdf" className="rsb-body" onClick={e => e.stopPropagation()}>
                                <svg className="rsb-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                                <span className="rsb-text">Download CV</span>
                            </a>
                            <div className="rsb-rod" />
                        </div>
                    </div>

                    {/* Stats Cell — Kakemono Style */}
                    <div className="stats-cell glance-card">
                        <div className="glance-rod">
                            <div className="glance-cap left" />
                            <div className="glance-cap right" />
                        </div>
                        <div className="glance-body">
                            <div className="glance-kanji">実</div>
                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <div className="glance-label">At a Glance</div>
                                <div className="glance-num">5+</div>
                                <div className="glance-sub">Projects Built</div>
                                <div className="glance-divider" />
                                <div className="glance-num">01</div>
                                <div className="glance-sub">Enterprise Role</div>
                            </div>
                        </div>
                        <div className="glance-rod-bottom">
                            <div className="glance-cap left" />
                            <div className="glance-cap right" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
