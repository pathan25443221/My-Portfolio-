import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import Chatbot from './components/Chatbot';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

export default function App() {

  useEffect(() => {
    // ── THEME BRANCHING ON SCROLL ──
    const sections = document.querySelectorAll('section:not(#hero)');
    sections.forEach(sec => {
      const linesH = sec.querySelectorAll('.branch-line-h');
      const linesV = sec.querySelectorAll('.branch-line-v');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sec,
          start: "top 75%",
          toggleActions: "play none none none"
        }
      });
      if (linesH.length) tl.to(linesH, { scaleX: 1, opacity: 1, duration: 2, ease: "power3.inOut", stagger: 0.2 }, 0);
      if (linesV.length) tl.to(linesV, { scaleY: 1, opacity: 1, duration: 2, ease: "power3.inOut", stagger: 0.2 }, 0);
    });

    // ── FADE UPs ──
    const fadeUps = document.querySelectorAll('section:not(#hero) .gsap-fade-up');
    fadeUps.forEach((element) => {
      gsap.to(element, {
        y: 0, opacity: 1, duration: 1.2, ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    });

    // Mobile grid tweaks
    const checkMobile = () => {
      const isMob = window.innerWidth < 768;
      document.querySelectorAll('.hide-mobile').forEach(el => el.style.display = isMob ? 'none' : '');
      document.querySelectorAll('.show-mobile').forEach(el => el.style.display = isMob ? '' : 'none');
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Magnetic wrap logic
    document.querySelectorAll('.magnetic-wrap').forEach(wrap => {
      const btn = wrap.querySelector('.btn');
      if (!btn) return;
      const handleMove = e => {
        const rect = wrap.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(btn, { x: x * 0.4, y: y * 0.4, duration: 0.3, ease: 'power2.out' });
      };
      const handleLeave = () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
      };
      wrap.addEventListener('mousemove', handleMove);
      wrap.addEventListener('mouseleave', handleLeave);
      // Store for cleanup if needed in future
      wrap._handlers = { handleMove, handleLeave };
    });

    return () => {
      window.removeEventListener('resize', checkMobile);
      ScrollTrigger.getAll().forEach(t => t.kill());
      document.querySelectorAll('.magnetic-wrap').forEach(wrap => {
        if (wrap._handlers) {
          wrap.removeEventListener('mousemove', wrap._handlers.handleMove);
          wrap.removeEventListener('mouseleave', wrap._handlers.handleLeave);
        }
      });
    };
  }, []);

  return (
    <>
      {/* Navbar sits outside so it overlays hero */}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
