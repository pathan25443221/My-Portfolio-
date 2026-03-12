import { motion } from 'framer-motion';

// ─── Section Terminal Header ────────────────────────────────
export function TerminalHeader({ path, title, accent = 'cyan' }) {
    const accentColor = {
        cyan: 'text-neon-cyan',
        violet: 'text-neon-violet',
        green: 'text-neon-green',
        pink: 'text-neon-pink',
    }[accent] || 'text-neon-cyan';

    const underlineColor = {
        cyan: 'bg-neon-cyan',
        violet: 'bg-neon-violet',
        green: 'bg-neon-green',
        pink: 'bg-neon-pink',
    }[accent] || 'bg-neon-cyan';

    return (
        <div className="mb-12 text-center">
            <p className="section-header-prompt mb-2">
                <span className="text-neon-green">~/</span>
                <span className="text-text-secondary">{path}</span>
                <span className="text-text-muted"> $</span>
            </p>
            <h2 className={`font-mono text-4xl md:text-5xl font-bold ${accentColor} mb-3`} style={{ textShadow: accent === 'cyan' ? '0 0 30px rgba(0,245,255,0.3)' : accent === 'violet' ? '0 0 30px rgba(123,47,255,0.3)' : '0 0 30px rgba(0,255,65,0.3)' }}>
                {title}
            </h2>
            <div className="flex justify-center">
                <div className={`h-0.5 w-16 ${underlineColor} rounded-full`} style={{ boxShadow: accent === 'cyan' ? '0 0 10px rgba(0,245,255,0.6)' : '0 0 10px rgba(123,47,255,0.6)' }} />
            </div>
        </div>
    );
}

// ─── Glass Card ─────────────────────────────────────────────
export function GlassCard({ children, className = '', glowAccent = 'cyan', topBorder = false, style = {} }) {
    const topBorderStyle = {
        cyan: '2px solid rgba(0,245,255,0.5)',
        violet: '2px solid rgba(123,47,255,0.5)',
        green: '2px solid rgba(0,255,65,0.5)',
        pink: '2px solid rgba(247,37,133,0.5)',
    }[glowAccent];

    return (
        <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className={`glass-card ${className}`}
            style={{
                borderTop: topBorder ? topBorderStyle : undefined,
                boxShadow: topBorder
                    ? `0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05), 0 -1px 20px ${glowAccent === 'cyan' ? 'rgba(0,245,255,0.15)' : glowAccent === 'violet' ? 'rgba(123,47,255,0.15)' : 'rgba(0,255,65,0.15)'}`
                    : undefined,
                ...style
            }}
        >
            {children}
        </motion.div>
    );
}

// ─── Neon Badge / CLI Flag ───────────────────────────────────
export function NeonBadge({ children, color = 'cyan' }) {
    return (
        <span className={`term-tag ${color === 'cyan' ? '' : color}`}>
            --{children}
        </span>
    );
}

// ─── Tech Tag ────────────────────────────────────────────────
export function TechTag({ children, color = 'cyan' }) {
    return (
        <span className={`term-tag ${color === 'cyan' ? '' : color} text-xs`}>
            &lt;{children}&gt;
        </span>
    );
}

// ─── Skill Bar ───────────────────────────────────────────────
export function SkillBar({ name, icon, level, index = 0, inView = true }) {
    const filled = Math.round(level / 10);
    const empty = 10 - filled;
    const barStr = '█'.repeat(filled) + '░'.repeat(empty);

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.07 }}
            className="glass-card p-4 group"
        >
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                    <span className="text-lg">{icon}</span>
                    <span className="font-mono text-sm text-text-primary">{name}</span>
                </div>
                <span className="font-mono text-xs text-neon-cyan">{level}%</span>
            </div>
            <div className="skill-bar-track">
                <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${level}%` } : { width: 0 }}
                    transition={{ duration: 1.0, delay: index * 0.07 + 0.3, ease: 'easeOut' }}
                />
            </div>
            <div className="mt-1.5">
                <span className="font-mono text-[10px] text-text-muted group-hover:text-neon-cyan/60 transition-colors tracking-[0.1em]">
                    {'['}
                    <span className="text-neon-cyan">{barStr.slice(0, filled)}</span>
                    <span className="text-text-muted">{barStr.slice(filled)}</span>
                    {']'} {level}%
                </span>
            </div>
        </motion.div>
    );
}

// ─── Terminal Prompt Line ────────────────────────────────────
export function PromptLine({ cmd, output, className = '' }) {
    return (
        <div className={`font-mono text-sm ${className}`}>
            <div>
                <span className="text-neon-green">❯ </span>
                <span className="text-neon-cyan">{cmd}</span>
            </div>
            {output && (
                <div className="text-text-secondary mt-0.5 pl-4">{output}</div>
            )}
        </div>
    );
}
