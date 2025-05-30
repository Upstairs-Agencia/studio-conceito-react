import React, { useState, useRef, useEffect } from 'react';
import '../styles/sconceitoaichat.css';
import { CiCircleChevDown } from "react-icons/ci";
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import LogoWhite from "../images/logo.png";


const SConceitoAIChat = ({ isOpen, toggleChat }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [jwtToken, setJwtToken] = useState('');
    const [threadId, setThreadId] = useState(null);
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [authForm, setAuthForm] = useState({ name: '', email: '', phone: '', businessName: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [isAuthLoading, setIsAuthLoading] = useState(false);
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
        setIsAuthLoading(true);
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
        } finally {
            setIsAuthLoading(false);
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
                <img src={LogoWhite} className='logo-chat-header' />
                <button className="close-button" onClick={toggleChat}>
                    <CiCircleChevDown size={24} />
                </button>
            </div>
            <div className="chat-body">
                {!isAuthenticated ? (
                    <>
                        <p className="chat-intro-body"> Ficou com alguma dúvida ou quer saber mais? Conte um pouco sobre você e entraremos em contato em breve! </p>
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
                            <button type="submit" disabled={isAuthLoading}>
                                {isAuthLoading ? (
                                    <>Preparando experiência <DotsLoading /></>
                                ) : (
                                    "Entrar"
                                )}
                            </button>
                        </form>
                    </>
                ) : (
                    <>
                        <div className='info-ok'>
                            <IoMdCheckmarkCircleOutline />
                            <p>Agradecemos por fornecer suas informações. Em breve, nossa equipe entrará em contato com você.</p>
                        </div>
                        {/*
                        <div className="messages">
                            {messages.map((msg, index) => (
                                <div key={index} className={`message ${msg.user === 'Você' ? 'user' : 'ia'}`}>
                                    {msg.thinking ? (
                                        <span className="bubble">Pensando <DotsLoading /></span>
                                    ) : (
                                        <span className="bubble">{msg.message}</span>
                                    )}
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>
                        */
                        }
                    </>
                )}
            </div>
            {/*{isAuthenticated && (
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
            */}
        </div >
    );
};

function DotsLoading() {
    const [dotCount, setDotCount] = useState(1);
    useEffect(() => {
        const interval = setInterval(() => {
            setDotCount((prev) => (prev % 3) + 1);
        }, 500);
        return () => clearInterval(interval);
    }, []);
    return <span>{'.'.repeat(dotCount)}</span>;
}

export default SConceitoAIChat;
