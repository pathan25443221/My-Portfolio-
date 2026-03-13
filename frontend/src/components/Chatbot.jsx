import { useState, useRef, useEffect } from 'react';

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', text: "Systems online. I am a localized AI agent loaded with Intekhab's portfolio context. What would you like to know?" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    // Initialize session ID once per session using Native Web Crypto API
    const [sessionId] = useState(() => crypto.randomUUID());
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) scrollToBottom();
    }, [messages, isOpen]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userText = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', text: userText }]);
        setIsLoading(true);

        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
            const response = await fetch(`${apiUrl}/api/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: userText,
                    session_id: sessionId
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setMessages(prev => [...prev, { role: 'assistant', text: data.reply }]);
        } catch (error) {
            console.error('Chat error:', error);
            setMessages(prev => [...prev, { role: 'assistant', text: "Error: Could not connect to the backend agent. Please try again later." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Chat Window */}
            {isOpen && (
                <div className="mac-card"
                    style={{
                        position: 'fixed',
                        bottom: 110, // Avoid overlapping the fab
                        right: 32,
                        zIndex: 999999,
                        width: 'calc(100vw - 64px)',
                        maxWidth: 380,
                        height: 540,
                        display: 'flex',
                        flexDirection: 'column',
                        padding: 0,
                        boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
                        border: '1px solid var(--rule)',
                        overflow: 'hidden',
                        animation: 'chat-float-up 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards'
                    }}>
                    {/* Header */}
                    <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--rule)', background: 'rgba(26, 12, 20, 0.95)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <div style={{ width: 36, height: 36, borderRadius: 4, background: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--paper)" strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
                            </div>
                            <div>
                                <div className="label-caps" style={{ color: 'var(--ink)', marginBottom: 2 }}>Contextual Agent</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                    <span className="status-dot"></span>
                                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.65rem', color: 'var(--green)' }}>Llama 3.3 70B</span>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} style={{ background: 'transparent', border: 'none', color: 'var(--ink-light)', cursor: 'pointer', padding: 4 }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="chat-transcript" style={{ flex: 1, padding: 20, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 16, background: 'var(--paper)' }}>
                        {messages.map((m, i) => (
                            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
                                <div style={{
                                    maxWidth: '85%',
                                    padding: '12px 16px',
                                    borderRadius: m.role === 'user' ? '12px 12px 0 12px' : '0 12px 12px 12px',
                                    background: m.role === 'user' ? 'var(--cream-3)' : 'var(--cream-2)',
                                    color: 'var(--ink)',
                                    lineHeight: 1.5,
                                    fontSize: '0.9rem',
                                    border: m.role === 'user' ? 'none' : '1px solid var(--rule)',
                                    whiteSpace: 'pre-wrap' // Allows markdown-like breaks
                                }}>
                                    {m.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div style={{ alignSelf: 'flex-start', display: 'flex', gap: 4, padding: '12px 16px', background: 'var(--cream-2)', borderRadius: '0 12px 12px 12px', border: '1px solid var(--rule)' }}>
                                <span className="pulse-dot" style={{ background: 'var(--ink-light)' }}></span>
                                <span className="pulse-dot" style={{ background: 'var(--ink-light)', animationDelay: '0.2s' }}></span>
                                <span className="pulse-dot" style={{ background: 'var(--ink-light)', animationDelay: '0.4s' }}></span>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSubmit} style={{ padding: '16px 20px', background: 'rgba(26, 12, 20, 0.95)', borderTop: '1px solid var(--rule)', display: 'flex', gap: 12 }}>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask about my expertise..."
                            disabled={isLoading}
                            style={{
                                flex: 1,
                                background: 'transparent',
                                border: 'none',
                                outline: 'none',
                                color: 'var(--ink)',
                                fontFamily: "'Source Sans 3', sans-serif",
                                fontSize: '0.95rem'
                            }}
                        />
                        <button type="submit" disabled={isLoading || !input.trim()} style={{
                            background: 'var(--ink)',
                            color: 'var(--paper)',
                            border: 'none',
                            width: 32,
                            height: 32,
                            borderRadius: 4,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: (isLoading || !input.trim()) ? 'not-allowed' : 'pointer',
                            opacity: (isLoading || !input.trim()) ? 0.5 : 1
                        }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
                        </button>
                    </form>
                </div>
            )}

            {/* Floating Action Button */}
            <div style={{ position: 'fixed', bottom: 32, right: 32, zIndex: 999999 }}>
                <button
                    onClick={(e) => { e.preventDefault(); setIsOpen(!isOpen); }}
                    style={{
                        width: 64,
                        height: 64,
                        borderRadius: '50%',
                        background: 'var(--ink)',
                        border: 'none',
                        boxShadow: isOpen ? 'none' : '0 8px 24px rgba(255, 240, 230, 0.2)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        transition: 'transform 0.2s ease',
                        transform: isOpen ? 'rotate(90deg) scale(0.9)' : 'rotate(0deg) scale(1)'
                    }}
                >
                    {/* Embedded SVG icon for chat */}
                    {isOpen ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--paper)" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
                    ) : (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--paper)" strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
                    )}
                </button>
            </div>
        </>
    );
}
