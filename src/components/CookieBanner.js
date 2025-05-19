import React, { useState, useEffect } from 'react';
import '../styles/cookieBanner.css';

export default function CookieBanner() {
    const [visible, setVisible] = useState(false);     // controla montagem
    const [shown, setShown] = useState(false);     // controla transição

    // Ao montar, verifica consentimento e monta se faltar
    useEffect(() => {
        if (!localStorage.getItem('cookieConsent')) {
            setVisible(true);
        }
    }, []);

    // Quando montar (visible=true), dispara o fade-in
    useEffect(() => {
        if (visible) {
            // next tick para garantir pintura antes da transição
            const id = setTimeout(() => setShown(true), 10);
            return () => clearTimeout(id);
        }
    }, [visible]);

    const handleAccept = () => {
        // dispara fade-out
        setShown(false);
        // depois de 300ms (duração do transition), desmonta
        setTimeout(() => {
            localStorage.setItem('cookieConsent', 'accepted');
            setVisible(false);
        }, 300);
    };

    const handleDecline = () => {
        window.location.href = 'https://www.google.com';
    };

    if (!visible) return null;

    return (
        <div className={`cookie-banner ${shown ? 'show' : ''}`}>
            <p>
                Usamos cookies para melhorar sua experiência.{' '}
                <a href="/privacidade.pdf">Política de Privacidade</a>.
            </p>
            <div className="cookie-buttons">
                <button onClick={handleDecline}>Recusar</button>
                <button onClick={handleAccept}>Aceitar</button>
            </div>
        </div>
    );
}
