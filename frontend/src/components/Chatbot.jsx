import { useState, useRef, useEffect } from 'react';

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [chatOpened, setChatOpened] = useState(false);
    const [sessionId] = useState(() => crypto.randomUUID());
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Handle contextual 'askAI' triggers from other components
    useEffect(() => {
        const handleAskAI = (e) => {
            const { topic } = e.detail;
            openChat(topic);
        };
        window.addEventListener('askAI', handleAskAI);
        return () => window.removeEventListener('askAI', handleAskAI);
    }, [chatOpened, isOpen]);

    const openChat = (topic = null) => {
        setIsOpen(true);
        if (!chatOpened) {
            const greeting = topic 
                ? `Initializing <strong>${topic}</strong> contextual space.<br><br>How can I assist you with this specific technology?`
                : `こんにちは! I'm Intekhab's AI assistant.<br><br>Ask me anything about his skills, projects, or experience.`;
            setMessages([{ role: 'assistant', text: greeting }]);
            setChatOpened(true);
        } else if (topic) {
            setMessages(prev => [...prev, { role: 'assistant', text: `Switching context to <strong>${topic}</strong>. What would you like to know?` }]);
        }
    };

    const handleSubmit = async (e) => {
        if (e) e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userText = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', text: userText }]);
        setIsLoading(true);

        try {
            const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
            const apiUrl = isLocal
                ? 'http://localhost:8000/api/chat'
                : 'https://intekhab-portfolio-production.up.railway.app/api/chat';

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userText, session_id: sessionId }),
            });

            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setMessages(prev => [...prev, { role: 'assistant', text: data.reply }]);
        } catch (error) {
            console.error('Chat error:', error);
            setMessages(prev => [...prev, { role: 'assistant', text: '<span style="color:#FF6B6B">Sorry, I could not reach the backend server.</span>' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* AI CHAT KAKEMONO SCROLL */}
            <div id="chat-window" style={{
                position: 'fixed', bottom: 85, right: 20, width: 360, zIndex: 10000,
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? 'auto' : 'none',
                transition: 'opacity 0.3s ease'
            }}>
                {/* Top Rod */}
                <div style={{
                    width: '100%', height: 18, background: 'linear-gradient(180deg,#2C1A0E,#1A100A)',
                    borderRadius: 9, position: 'relative', zIndex: 2, boxShadow: '0 6px 15px rgba(0,0,0,0.7)'
                }}>
                    <div style={{ position: 'absolute', left: -8, top: 2, bottom: 2, width: 12, background: '#3D2210', borderRadius: 4 }} />
                    <div style={{ position: 'absolute', right: -8, top: 2, bottom: 2, width: 12, background: '#3D2210', borderRadius: 4 }} />
                    <button onClick={() => setIsOpen(false)} style={{
                        position: 'absolute', right: 10, top: -4, background: 'none', border: 'none',
                        color: 'rgba(245,230,200,0.7)', fontSize: '1.6rem', cursor: 'pointer', lineHeight: 1, padding: 0
                    }}>&times;</button>
                </div>

                {/* Unrolling Paper */}
                <div className="chat-scroll-unroll dyn-border" style={{
                    width: '92%', height: isOpen ? 480 : 0, position: 'relative',
                    boxShadow: '4px 8px 30px rgba(0,0,0,0.8),inset 0 0 30px rgba(0,0,0,0.4)',
                    background: 'linear-gradient(180deg,#1C1610 0%,#171210 40%,#0E0C08 100%)',
                    borderLeft: '3px solid rgba(245,230,200,0.15)', borderRight: '3px solid rgba(245,230,200,0.15)',
                    display: 'flex', flexDirection: 'column'
                }}>
                    {/* Header */}
                    <div style={{ padding: '14px 18px', borderBottom: '1px solid rgba(245,230,200,0.1)', display: 'flex', alignItems: 'center', background: 'rgba(245,230,200,0.03)', flexShrink: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <div className="status-dot dyn-bg dyn-glow" />
                            <div>
                                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.7rem', fontWeight: 500, color: '#F5E6C8', textTransform: 'uppercase', letterSpacing: '0.12em' }}>AI Interface</div>
                                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '0.8rem', color: 'rgba(245,230,200,0.7)' }}>Contextual Portfolio Agent</div>
                            </div>
                        </div>
                    </div>

                    {/* Body */}
                    <div style={{ flex: 1, padding: 18, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 14 }}>
                        {messages.map((m, i) => (
                            <div key={i} style={{
                                alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
                                background: m.role === 'user' ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.04)',
                                padding: '12px 16px', borderRadius: m.role === 'user' ? '12px 12px 0 12px' : '0 12px 12px 12px',
                                fontFamily: "'Source Sans 3',sans-serif", fontSize: '0.9rem', color: 'var(--theme-ink)',
                                lineHeight: 1.5, border: '1px solid rgba(255,255,255,0.1)', maxWidth: '85%',
                                borderRight: m.role === 'user' ? '2px solid var(--c1)' : '1px solid rgba(255,255,255,0.1)',
                                borderLeft: m.role === 'assistant' ? '2px solid var(--c1)' : '1px solid rgba(255,255,255,0.1)'
                            }} dangerouslySetInnerHTML={{ __html: m.text }} />
                        ))}
                        {isLoading && (
                            <div style={{ alignSelf: 'flex-start', padding: '8px 16px', fontStyle: 'italic', opacity: 0.5, fontSize: '0.8rem' }}>Thinking...</div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <form onSubmit={handleSubmit} style={{ padding: '12px 14px', borderTop: '1px solid rgba(245,230,200,0.1)', background: 'rgba(0,0,0,0.4)', display: 'flex', gap: 8, flexShrink: 0 }}>
                        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask something..." style={{
                            flex: 1, padding: '10px 12px', fontSize: '0.88rem', borderRadius: 4, border: '1px solid rgba(245,230,200,0.15)',
                            background: 'rgba(0,0,0,0.5)', color: '#F5E6C8', outline: 'none'
                        }} />
                        <button type="submit" className="btn btn-filled dyn-bg" style={{ padding: '10px 16px', borderRadius: 4, fontWeight: 600, color: '#000', cursor: 'pointer' }}>Send</button>
                    </form>
                </div>

                {/* Bottom Rod */}
                <div style={{
                    width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center',
                    transform: isOpen ? 'translateY(0)' : 'translateY(-100%)', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                }}>
                    <div style={{ width: '96%', height: 14, background: 'linear-gradient(180deg,#2C1A0E,#1A100A)', borderRadius: 7, boxShadow: '0 8px 15px rgba(0,0,0,0.8)' }} />
                    <div style={{ display: 'flex', gap: 10, justifyContent: 'center', paddingTop: 4 }}>
                        <div style={{ width: 2, height: 28, background: 'linear-gradient(180deg,var(--c2),transparent)' }} />
                        <div style={{ width: 2, height: 36, background: 'linear-gradient(180deg,var(--c2),transparent)', marginTop: -8 }} />
                        <div style={{ width: 2, height: 28, background: 'linear-gradient(180deg,var(--c2),transparent)' }} />
                    </div>
                </div>
            </div>

            {/* Floating Chat FAB */}
            <div id="chat-fab" onClick={() => isOpen ? setIsOpen(false) : openChat()} style={{
                position: 'fixed', bottom: 20, right: 20, width: 56, height: 56, borderRadius: '50%',
                border: '1px solid var(--rule)', background: 'rgba(12,10,14,0.95)', backdropFilter: 'blur(12px)',
                cursor: 'pointer', zIndex: 10001, display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 8px 30px rgba(0,0,0,0.5)', transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1)'
            }}>
                <img src="/scroll(1).png" alt="Chat" style={{
                    width: 28, height: 28, transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                    transition: 'transform 0.4s ease', objectFit: 'contain'
                }} />
            </div>
        </>
    );
}
