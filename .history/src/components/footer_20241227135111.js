import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Logo from "../images/logoBlack.png";
import "../styles/footer.css";

const Footer = () => {
  return (
    <MDBFooter className="footer-container text-center text-white">
      <MDBContainer className="p-4 footer-content">
        <MDBRow>
          {/* Logo e Nome */}
          <MDBCol md="4" className="mb-4 footer-left">
            <img
              src={Logo}
              alt="Studio Conceito Logo"
              className="footer-logo"
            />
            <p className="footer-name">Studio Conceito</p>
          </MDBCol>

          {/* Navegação */}
          <MDBCol md="4" className="mb-4 footer-center">
            <nav className="footer-nav">
              <a href="/">Home</a>
              <a href="/quem-somos">Quem somos</a>
              <a href="/servicos">Serviços</a>
              <a href="/cases">Cases</a>
              <a href="/blog">Blog</a>
              <a href="/clientes">Clientes</a>
              <a href="/contato" className="footerHighlight">
                Contato
              </a>
            </nav>
          </MDBCol>

          {/* Direitos Reservados */}
          <MDBCol md="4" className="mb-4 footer-right">
            <p className="mb-0">2023 &copy; Todos os direitos reservados</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};

export default Footer;
