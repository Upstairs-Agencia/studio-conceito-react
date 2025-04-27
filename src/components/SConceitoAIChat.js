import React, { useState, useRef, useEffect } from 'react';
import '../styles/sconceitoaichat.css';
import { CiCircleChevDown } from "react-icons/ci";

const SConceitoAIChat = ({ isOpen, toggleChat }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [jwtToken, setJwtToken] = useState('');
    const [threadId, setThreadId] = useState(null);
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [authForm, setAuthForm] = useState({ name: '', email: '', phone: '', businessName: '' });
    const [isLoading, setIsLoading] = useState(false);
    const api = process.env.REACT_APP_API_URL;

    // Ref para rolar o chat
    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    const resetChat = () => {
        setIsAuthenticated(false);
        setJwtToken('');
        setThreadId(null);
        setMessages([]);
        setUserInput('');
        setAuthForm({ name: '', email: '', phone: '', businessName: '' });
        setIsLoading(false);
    };

    const handleAuthChange = (e) => {
        const { name, value } = e.target;
        setAuthForm({ ...authForm, [name]: value });
    };

    const handleAuthSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${api}/auth`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(authForm),
            });
            const data = await response.json();
            if (response.ok && data.success) {
                setJwtToken(data.token);
                setIsAuthenticated(true);
            } else {
                alert('Erro ao autenticar. Verifique os dados e tente novamente.');
                resetChat();
            }
        } catch (error) {
            console.error('Erro ao autenticar:', error);
            resetChat();
        }
    };

    const handleSendMessage = async () => {
        if (!userInput.trim() || isLoading) return;

        const newMessage = { user: 'Você', message: userInput };
        setMessages((prev) => [...prev, newMessage]);
        setIsLoading(true);
        setUserInput('');

        try {
            // Adiciona o balão "Pensando..."
            setMessages((prev) => [...prev, { user: 'IA', message: 'Pensando...', thinking: true }]);

            const response = await fetch(`${api}/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${jwtToken}`,
                },
                body: JSON.stringify({
                    message: newMessage.message,
                    thread_id: threadId || undefined,
                }),
            });
            const data = await response.json();

            setMessages((prev) => {
                // Remove o último balão "Pensando..."
                const filtered = prev.filter((msg, idx) => !(msg.thinking && idx === prev.length - 1));
                return [
                    ...filtered,
                    { user: 'IA', message: data.response }
                ];
            });
            setThreadId(data.thread_id);
        } catch (error) {
            console.error('Erro ao enviar mensagem:', error);
            resetChat();
        } finally {
            setIsLoading(false);
        }
    };

    // Envia mensagem ao pressionar Enter
    const handleInputKeyDown = (e) => {
        if (e.key === 'Enter' && !isLoading) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    // Mensagem inicial da IA
    useEffect(() => {
        if (isAuthenticated) {
            setMessages([
                {
                    user: 'IA',
                    message: 'Olá! 👋 Eu sou a SConceito AI, sua assistente inteligente. Estou pronta para ajudar você e sua empresa a transformar ideias em soluções inovadoras. Como posso te ajudar hoje?'
                }
            ]);
        }
    }, [isAuthenticated]);

    return (
        <div className={`chat-container ${isOpen ? 'open' : 'close'}`}>
            <div className="chat-header">
                <h3>SConceito AI</h3>
                <button className="close-button" onClick={toggleChat}>
                    <CiCircleChevDown size={24} />
                </button>
            </div>
            <div className="chat-body">
                {!isAuthenticated ? (
                    <>
                        <p>Antes de começarmos, gostariamos de conhecer você melhor.</p>
                        <form onSubmit={handleAuthSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="seu nome"
                                value={authForm.name}
                                onChange={handleAuthChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="seu e-mail"
                                value={authForm.email}
                                onChange={handleAuthChange}
                                required
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="seu número de WhatsApp"
                                value={authForm.phone}
                                onChange={handleAuthChange}
                                required
                            />
                            <input
                                type="text"
                                name="businessName"
                                placeholder="o nome de sua empresa"
                                value={authForm.businessName}
                                onChange={handleAuthChange}
                                required
                            />
                            <button type="submit">Entrar</button>
                        </form>
                    </>
                ) : (
                    <>
                        <div className="messages">
                            {messages.map((msg, index) => (
                                <div key={index} className={`message ${msg.user === 'Você' ? 'user' : 'ia'}`}>
                                    <span className="bubble">{msg.message}</span>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>
                    </>
                )}
            </div>
            {isAuthenticated && (
                <div className="chat-footer">
                    <input
                        type="text"
                        placeholder="Digite sua mensagem..."
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyDown={handleInputKeyDown}
                        disabled={isLoading}
                    />
                    <button onClick={handleSendMessage} disabled={isLoading || !userInput.trim()}>
                        Enviar
                    </button>
                </div>
            )}
        </div>
    );
};

export default SConceitoAIChat;
