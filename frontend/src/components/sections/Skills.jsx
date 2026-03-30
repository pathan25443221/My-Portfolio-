import { gsap } from 'gsap';

export default function Skills() {
    const handleSkillClick = (e, text) => {
        const el = e.currentTarget;
        if (el.classList.contains('animating')) return;
        el.classList.add('animating');
        
        // --- Overlay ---
        const overlay = document.createElement('div');
        overlay.className = 'skills-focus-overlay';
        document.body.appendChild(overlay);
        gsap.to(overlay, { opacity: 1, duration: 0.3 });

        gsap.to(el, { opacity: 0, duration: 0.15 });

        const rect = el.getBoundingClientRect();
        const srcCX = rect.left + rect.width / 2;
        const srcCY = rect.top + rect.height / 2;
        const mode = Math.random() > 0.4 ? 'orbital' : 'rain';
        const themeColor = 'var(--c1)';

        // ── Measure characters (centered) ──
        const ghost = document.createElement('span');
        ghost.textContent = text;
        ghost.className = el.className;
        Object.assign(ghost.style, {
            position: 'fixed', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)',
            whiteSpace: 'pre', border: 'none', padding: 0, visibility: 'hidden',
            fontSize: 'clamp(3rem, 8vw, 6rem)', pointerEvents: 'none'
        });
        document.body.appendChild(ghost);

        const targets = [];
        const gRect = ghost.getBoundingClientRect();
        if (ghost.firstChild) {
            const range = document.createRange();
            for (let i = 0; i < text.length; i++) {
                range.setStart(ghost.firstChild, i);
                range.setEnd(ghost.firstChild, i + 1);
                const r = range.getBoundingClientRect();
                targets.push({ cx: r.left + r.width / 2, cy: r.top + r.height / 2 });
            }
        }
        ghost.remove();

        const clones = text.split('').map((ch, i) => {
            const clone = document.createElement('span');
            clone.textContent = ch === ' ' ? '\u00A0' : ch;
            const initLeft = mode === 'rain' ? (targets[i] ? targets[i].cx : srcCX) : srcCX;
            const initTop = mode === 'rain' ? -(100 + Math.random() * 200) : srcCY;
            
            clone.style.cssText = `
                position:fixed; left:${initLeft}px; top:${initTop}px;
                font-family:'Cormorant Garamond',serif;
                font-size:clamp(1.4rem,3vw,2.2rem); font-weight:500;
                color:#ffffff; text-shadow:0 0 14px ${themeColor};
                pointer-events:none; z-index:99999;
                white-space:pre; opacity:${mode === 'rain' ? 0 : 1};
            `;
            gsap.set(clone, { xPercent: -50, yPercent: -50 });
            document.documentElement.appendChild(clone);
            return clone;
        });

        const tl = gsap.timeline({
            onComplete: () => {
                clones.forEach(c => c.remove());
                gsap.to(overlay, { opacity: 0, duration: 0.3, onComplete: () => overlay.remove() });
                gsap.to(el, { opacity: 1, duration: 0.4 });
                el.classList.remove('animating');
                window.dispatchEvent(new CustomEvent('askAI', { detail: { topic: text } }));
            }
        });

        if (mode === 'orbital') {
            clones.forEach((clone, i) => {
                const angle = ((i / clones.length) * 360 + Math.random() * 55) * (Math.PI / 180);
                const r = 80 + Math.random() * 120;
                tl.to(clone, {
                    x: Math.cos(angle) * r,
                    y: Math.sin(angle) * r - 25,
                    scale: 1.8 + Math.random() * 1,
                    rotation: Math.random() * 90 - 45,
                    duration: 0.3, // Faster
                    ease: 'back.out(2.2)'
                }, i * 0.015);
            });

            clones.forEach((clone, i) => {
                if(targets[i]) {
                    tl.to(clone, {
                        x: targets[i].cx - srcCX,
                        y: targets[i].cy - srcCY,
                        scale: 1, rotation: 0,
                        fontSize: 'clamp(3rem,8vw,6rem)',
                        textShadow: `0 0 28px ${themeColor}, 0 0 65px ${themeColor}aa`,
                        duration: 0.45, // Faster
                        ease: 'expo.inOut'
                    }, 0.32 + i * 0.02);
                }
            });
        } else {
            clones.forEach((clone, i) => {
                const curTop = parseFloat(clone.style.top);
                if(targets[i]) {
                    tl.to(clone, {
                        y: targets[i].cy - curTop,
                        x: 0,
                        opacity: 1,
                        scale: 1,
                        rotation: Math.random() * 12 - 6,
                        fontSize: 'clamp(3rem,8vw,6rem)',
                        textShadow: `0 0 28px ${themeColor}, 0 0 65px ${themeColor}aa`,
                        duration: 0.38, // Faster
                        ease: 'bounce.out'
                    }, i * 0.04); // Faster stagger
                }
            });
            tl.to(clones, { rotation: 0, duration: 0.15, ease: 'power2.out' });
        }

        const chatBox = document.getElementById('chat-fab');
        const chatRect = chatBox ? chatBox.getBoundingClientRect() : { left: window.innerWidth - 60, top: window.innerHeight - 60, width: 50, height: 50 };
        const chatCX = chatRect.left + chatRect.width / 2;
        const chatCY = chatRect.top + chatRect.height / 2;

        tl.to({}, { duration: 0.22 }); // Shortened pause
        // Word-by-word zip phase
        const WORD_STAGGER = 0.12; 
        let currentWordIndex = 0;

        tl.addLabel('zipStart');
        
        clones.forEach((clone, i) => {
            if (i > 0 && text[i-1] === ' ') {
                currentWordIndex++;
            }
            if (text[i] === ' ') return; // Skip spaces in the actual animation zip

            const curLeft = parseFloat(clone.style.left);
            const curTop = parseFloat(clone.style.top);
            
            tl.to(clone, {
                x: chatCX - curLeft,
                y: chatCY - curTop,
                scale: 0.01,
                opacity: 0,
                duration: 0.28,
                ease: 'power3.in'
            }, `zipStart+=${currentWordIndex * WORD_STAGGER}`);
        });
    };

    return (
        <section id="skills" style={{ padding: '120px 0', position: 'relative', overflow: 'hidden' }} data-bg-step="5">
            <div className="section-inner">
                {/* Katana side dividers */}
                <div className="theme-branches-wrap">
                    <div className="katana-divider-v hide-on-mobile-grid" style={{ left: '0%' }}>
                        <div className="k-handle-v" /><div className="k-tsuba-v dyn-bg dyn-glow" /><div className="k-blade-v dyn-bg dyn-glow" />
                    </div>
                    <div className="katana-divider-v hide-on-mobile-grid" style={{ left: '100%' }}>
                        <div className="k-handle-v" /><div className="k-tsuba-v dyn-bg dyn-glow" /><div className="k-blade-v dyn-bg dyn-glow" />
                    </div>
                </div>

                {/* Spinning geometric background motif */}
                <svg viewBox="0 0 100 100" style={{ position: 'absolute', right: '-8%', top: '-15%', width: '50%', opacity: 0.04, mixBlendMode: 'screen', pointerEvents: 'none' }} className="svg-spin" stroke="var(--c2)" strokeWidth="0.3" fill="none">
                    <circle cx="50" cy="50" r="44" strokeDasharray="10 5" />
                    <polygon points="50,12 88,88 12,88" />
                    <polygon points="50,88 88,12 12,12" />
                    <circle cx="50" cy="50" r="15" stroke="var(--c1)" strokeWidth="1" />
                </svg>

                <div className="section-header dyn-border">
                    <div className="katana-divider-h" style={{ bottom: '-1px' }}>
                        <div className="k-handle-h" /><div className="k-tsuba-h dyn-bg dyn-glow" /><div className="k-blade-h dyn-bg dyn-glow" />
                    </div>
                    <div className="gsap-fade-up">
                        <div className="label-caps section-label dyn-text">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                            </svg>
                            // 004 — Skills & Expertise
                        </div>
                        <div className="section-jp-motif" style={{ alignItems: 'flex-end' }}>
                            <h2 className="display-lg">Technical<br /><em className="dyn-text">toolkit.</em></h2>
                            {/* Torii gate companion */}
                            <svg width="52" height="58" viewBox="0 0 52 58" fill="none" style={{ opacity: 0.18, marginBottom: 6, flexShrink: 0 }} xmlns="http://www.w3.org/2000/svg">
                                <rect x="2" y="12" width="48" height="5" rx="1" fill="var(--c2)" />
                                <rect x="7" y="17" width="38" height="3" rx="1" fill="var(--c2)" opacity="0.6" />
                                <rect x="7" y="20" width="4" height="36" rx="1" fill="var(--c2)" />
                                <rect x="41" y="20" width="4" height="36" rx="1" fill="var(--c2)" />
                                <rect x="12" y="7" width="28" height="4" rx="2" fill="var(--c1)" />
                                <line x1="26" y1="1" x2="26" y2="7" stroke="var(--c1)" strokeWidth="2" />
                            </svg>
                        </div>
                    </div>
                    <div style={{ textAlign: 'right', maxWidth: 400 }} className="gsap-fade-up hide-on-mobile-grid">
                        <p className="body-text" style={{ fontSize: '1rem' }}>A precision-curated selection of languages, frameworks, and AI-driven tools utilized to construct elegant, automated systems.</p>
                    </div>
                </div>

                <div className="skills-canvas gsap-fade-up">
                    <span className="skill-text" onClick={(e) => handleSkillClick(e, 'Python')}>Python</span>
                    <span className="skill-text" onClick={(e) => handleSkillClick(e, 'n8n')} style={{ fontStyle: 'italic' }}>n8n</span>
                    <span className="skill-text" onClick={(e) => handleSkillClick(e, 'Prompt Engineering')}>Prompt Engineering</span>
                    <span className="skill-pill dyn-border" onClick={(e) => handleSkillClick(e, 'Java')}>Java</span>
                    <span className="skill-pill dyn-border" onClick={(e) => handleSkillClick(e, 'MySQL')}>MySQL</span>
                    <span className="skill-text" onClick={(e) => handleSkillClick(e, 'FastAPI')}>FastAPI</span>
                    <span className="skill-pill dyn-border" onClick={(e) => handleSkillClick(e, 'HTML / CSS')}>HTML / CSS</span>
                    <span className="skill-text" onClick={(e) => handleSkillClick(e, 'PostgreSQL')} style={{ fontStyle: 'italic' }}>PostgreSQL</span>
                    <span className="skill-text" onClick={(e) => handleSkillClick(e, 'AI Agents')}>AI Agents</span>
                    <span className="skill-pill dyn-border" onClick={(e) => handleSkillClick(e, 'Django')}>Django</span>
                    <span className="skill-text" onClick={(e) => handleSkillClick(e, 'LangChain')}>LangChain</span>
                    <span className="skill-pill dyn-border" onClick={(e) => handleSkillClick(e, 'OpenCV')}>OpenCV</span>
                    <span className="skill-pill dyn-border" onClick={(e) => handleSkillClick(e, 'Gumloop')}>Gumloop</span>
                    <span className="skill-pill dyn-border" onClick={(e) => handleSkillClick(e, 'MCP Tools')}>MCP Tools</span>
                    <span className="skill-pill dyn-border" onClick={(e) => handleSkillClick(e, 'Git')}>Git</span>
                    <span className="skill-text" onClick={(e) => handleSkillClick(e, 'Automation')} style={{ fontStyle: 'italic' }}>Automation</span>
                    <span className="skill-pill dyn-border" onClick={(e) => handleSkillClick(e, 'WhatsApp API')}>WhatsApp API</span>
                    <span className="skill-pill dyn-border" onClick={(e) => handleSkillClick(e, 'Slack API')}>Slack API</span>
                </div>

                <div style={{ marginTop: 64, borderTop: '1px solid var(--rule)', paddingTop: 40 }} className="gsap-fade-up">
                    <div className="label-caps" style={{ marginBottom: 16 }}>Core Attributes</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                        <span className="tag dyn-border dyn-text">Leadership</span>
                        <span className="tag dyn-border">Teamwork</span>
                        <span className="tag dyn-border dyn-text">Adaptability</span>
                        <span className="tag dyn-border">Time Management</span>
                        <span className="tag dyn-border dyn-text">Problem Solving</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
