import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        setMobileOpen(false);
        const el = document.getElementById(id);
        if (el) window.scrollTo({ top: el.offsetTop - 68, behavior: 'smooth' });
    };

    return (
        <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
            <div style={{ maxWidth: 1152, margin: '0 auto', padding: '16px 40px', display: 'flex', alignItems: 'center', justify: 'content', justifyContent: 'space-between' }} className="nav-inner">

                {/* Logo / Brand */}
                <div className="nav-logo-group" onClick={() => scrollTo('hero')}>
                    <div className="theme-grad-v nav-logo-icon"></div>
                    <div className="nav-logo-text-wrap">
                        <span className="nav-logo-text">Intekhab</span>
                    </div>
                </div>

                {/* Desktop Links */}
                <div style={{ display: 'flex', gap: 32 }} className="nav-links">
                    <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }} className="nav-link">About</a>
                    <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }} className="nav-link">Work</a>
                    <a href="#skills" onClick={(e) => { e.preventDefault(); scrollTo('skills'); }} className="nav-link">Expertise</a>
                </div>

                {/* Desktop CTA */}
                <div className="nav-cta magnetic-wrap">
                    <button className="btn" onClick={() => scrollTo('contact')}>Start a project</button>
                </div>

                {/* Mobile Toggle */}
                <button
                    id="mobile-btn"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    style={{ display: 'none', background: 'transparent', border: 'none', color: 'var(--ink)', cursor: 'pointer' }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        {mobileOpen ?
                            <path d="M18 6L6 18M6 6l12 12" /> :
                            <path d="M3 12h18M3 6h18M3 18h18" />
                        }
                    </svg>
                </button>

            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        id="mobile-menu"
                        className="open"
                    >
                        <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }} className="mobile-link">About</a>
                        <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }} className="mobile-link">Work</a>
                        <a href="#skills" onClick={(e) => { e.preventDefault(); scrollTo('skills'); }} className="mobile-link">Expertise</a>
                        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }} className="mobile-link" style={{ color: 'var(--red)', borderBottom: 'none' }}>Contact</a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
