import React, { useState } from 'react';
import '../styles/sconceitoaichat.css';

const SConceitoAIChat = ({ isOpen, toggleChat }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [jwtToken, setJwtToken] = useState('');
    const [threadId, setThreadId] = useState(null);
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [authForm, setAuthForm] = useState({ name: '', email: '', phone: '', businessName: '' });
    const api = process.env.REACT_APP_API_URL;

    const resetChat = () => {
        setIsAuthenticated(false);
        setJwtToken('');
        setThreadId(null);
        setMessages([]);
        setUserInput('');
        setAuthForm({ name: '', email: '', phone: '', businessName: '' });
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
        if (!userInput.trim()) return;

        const newMessage = { user: 'Você', message: userInput };
        setMessages([...messages, newMessage]);

        try {
            const response = await fetch(`${api}/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${jwtToken}`,
                },
                body: JSON.stringify({
                    message: userInput,
                    thread_id: threadId || undefined,
                }),
            });
            const data = await response.json();
            if (response.ok) {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { user: 'IA', message: data.response },
                ]);
                setThreadId(data.thread_id);
            } else {
                alert('Erro ao enviar mensagem.');
                resetChat();
            }
        } catch (error) {
            console.error('Erro ao enviar mensagem:', error);
            resetChat();
        }

        setUserInput('');
    };

    return (
        <div className={`chat-container ${isOpen ? 'open' : 'close'}`}>
            <div className="chat-header">
                <h3>Chat AI</h3>
                <button className="close-button" onClick={toggleChat}>
                    X
                </button>
            </div>
            <div className="chat-body">
                {!isAuthenticated ? (
                    <form onSubmit={handleAuthSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Nome"
                            value={authForm.name}
                            onChange={handleAuthChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            value={authForm.email}
                            onChange={handleAuthChange}
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Celular"
                            value={authForm.phone}
                            onChange={handleAuthChange}
                            required
                        />
                        <input
                            type="text"
                            name="businessName"
                            placeholder="Nome da Empresa"
                            value={authForm.businessName}
                            onChange={handleAuthChange}
                            required
                        />
                        <button type="submit">Entrar</button>
                    </form>
                ) : (
                    <>
                        <div className="messages">
                            {messages.map((msg, index) => (
                                <div key={index} className={`message ${msg.user === 'Você' ? 'user' : 'ia'}`}>
                                    <strong>{msg.user}:</strong> {msg.message}
                                </div>
                            ))}
                        </div>
                        <input
                            type="text"
                            placeholder="Digite sua mensagem..."
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                        />
                        <button onClick={handleSendMessage}>Enviar</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default SConceitoAIChat;
