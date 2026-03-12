export default function Footer() {
    return (
        <footer style={{ background: 'var(--paper)', padding: '36px 0', borderTop: '1px solid var(--rule)' }}>
            <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 40px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div className="theme-grad-v" style={{ width: 6, height: 24, borderRadius: 99 }}></div>
                    <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 500, fontSize: '0.9rem', color: 'var(--ink)' }}>Intekhab Pathan</span>
                </div>
                <div className="label-caps" style={{ color: 'var(--ink-light)', opacity: 0.5 }}>Designed with precision · Pune, India · 2026</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                    <a href="https://github.com/intekhab-pathan" target="_blank" rel="noreferrer" className="label-caps" style={{ color: 'var(--ink-light)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = 'var(--ink-light)'}>GitHub</a>
                    <a href="https://linkedin.com/in/intekhab-pathan" target="_blank" rel="noreferrer" className="label-caps" style={{ color: 'var(--ink-light)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = 'var(--ink-light)'}>LinkedIn</a>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)', display: 'inline-block', boxShadow: '0 0 8px var(--green)' }}></span>
                        <span className="label-caps" style={{ color: 'var(--ink-light)' }}>Online</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
