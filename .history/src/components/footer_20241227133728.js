import React from "react";
import Logo from "../images/logoBlack.png";
import "../styles/footer.css"; // Certifique-se de criar este arquivo para estilização.

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <img src={Logo} alt="Studio Conceito Logo" className="footer-logo" />
        <p>Studio Conceito</p>
      </div>
      <div className="footer-center">
        <nav className="footer-nav">
          <a href="/">Home</a>
          <a href="/quem-somos">Quem somos</a>
          <a href="/servicos">Serviços</a>
          <a href="/cases">Cases</a>
          <a href="/blog">Blog</a>
          <a href="/clientes">Clientes</a>
          <a href="/contato" className="footer-highlight">Contato</a>
        </nav>
      </div>
      <div className="footer-right">
        <p>2023 &copy; Todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
