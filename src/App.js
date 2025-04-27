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

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
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
      <Footer />
      <SConceitoAIChat isOpen={isChatOpen} toggleChat={toggleChat} />
      <button className="chat-floating-button" onClick={toggleChat} />
    </Router>
  );
}

export default App;
