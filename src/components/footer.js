import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { useLocation } from "react-router-dom";
import LogoBlack from "../images/footerimg/studio-footer-image.png";
import LogoWhite from "../images/logo.png";
import "../styles/footer.css";
import { LuCircleArrowUp } from "react-icons/lu";

const Footer = () => {

  const location = useLocation();

  return (
    <MDBFooter className={`footer-container text-center text-white ${location.pathname === "/" && ('bg-black')}`}>
      <MDBContainer className="footer-content">

        <MDBRow className="">
          {/* Logo e Nome */}
          <MDBCol md="6" className="footer-left footer-no-padding">
            <img
              src={location.pathname === '/' ? LogoWhite : LogoBlack}
              alt="Studio Conceito Logo"
              className="footer-logo mt-2"
            />

          </MDBCol>

          {/* Direitos Reservados */}
          <MDBCol md="6" className={`footer-copyright footer-no-padding ${location.pathname === "/" && ('text-white')}`}>
            {location.pathname === "/" && (
              <a className="btn-with-icon-animation btn-blog" style={{ textTransform: 'uppercase' }} href="#">
                Voltar ao topo <LuCircleArrowUp size={27} /></a>
            )}
            <p className="mb-2">{new Date().getFullYear()}  ® Todos os direitos reservados</p>
          </MDBCol>


        </MDBRow>
        <MDBRow className="">
          {/* Navegação */}
          <MDBCol md="12" className="mb-3 footer-center footer-no-padding mobile-hidden">
            <nav className="footer-nav">
              <a href="/" className={location.pathname === "/" && ('footerHighlight')}>Home</a>
              <a href="/quem-somos" className={location.pathname === "/" ? ('text-white')
                : location.pathname === "/quem-somos" ? ('footerHighlight') : null}> Quem somos </a>
              <a href="/servicos" className={location.pathname === "/" ? ('text-white')
                : location.pathname === "/servicos" ? ('footerHighlight') : null}>Serviços</a>
              <a href="/cases" className={location.pathname === "/" ? ('text-white')
                : location.pathname === "/cases" ? ('footerHighlight') : null}>Cases</a>
              <a href="/blog" className={location.pathname === "/" ? ('text-white')
                : location.pathname === "/blog" ? ('footerHighlight') : null}>Blog</a>
              <a href="/clientes" className={location.pathname === "/" ? ('text-white')
                : location.pathname === "/clientes" ? ('footerHighlight') : null}>Clientes</a>
              <a href="/contato" className={location.pathname === "/" ? ('text-white')
                : location.pathname === "/contato" ? ('footerHighlight') : null}>
                Contato
              </a>
            </nav>
          </MDBCol>
          {location.pathname === "/" && (
            <MDBCol md={12} className="text-center" style={{ fontWeight: 300, paddingTop: '3rem', paddingBottom: '2rem' }}>
              <p>Studio Conceito – {new Date().getFullYear()}<br />
                Todos os direitos reservados</p>
            </MDBCol>
          )}
        </MDBRow>



      </MDBContainer>
    </MDBFooter>
  );
};

export default Footer;
