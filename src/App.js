import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import QuemSomos from './pages/QuemSomos';
import Servicos from './pages/Servicos';
import Clientes from './pages/Clientes';
import Contato from './pages/Contato';
import Footer from './components/footer';
import ScrollToTop from './components/ScrollToTop';
import SConceitoAIChat from './components/SConceitoAIChat';
import ChatHint from './components/ChatHint';
import CookieBanner from './components/CookieBanner'; // <<< import

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showHint, setShowHint] = useState(true);

  const toggleChat = () => {
    setIsChatOpen(open => !open);
    setShowHint(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

      {/* Cookie Banner */}
      <CookieBanner />

      <Footer />

      {/* balão de dica */}
      <ChatHint visible={showHint} onClose={() => setShowHint(false)} />

      {/* chat widget */}
      <SConceitoAIChat isOpen={isChatOpen} toggleChat={toggleChat} />

      {/* botão flutuante */}
      <button className="chat-floating-button" onClick={toggleChat} />
    </Router>
  );
}

export default App;
