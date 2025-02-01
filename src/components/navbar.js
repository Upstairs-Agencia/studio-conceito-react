import React, { useState, useEffect } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBContainer,
} from "mdb-react-ui-kit";
import { useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaPinterestP, FaInstagram, FaBars } from "react-icons/fa6";
import SeloGptw from "../images/selo-gptw.png";
import LogoWhite from "../images/logoWhite.png";
import LogoBlack from "../images/logoBlack.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const mobileOptions = [
    { label: "Home", link: "/" },
    { label: "Quem somos", link: "/quem-somos" },
    { label: "Serviços", link: "/servicos" },
    { label: "Cases", link: "/cases" },
    { label: "Blog", link: "/blog" },
    { label: "Clientes", link: "/clientes" },
    { label: "Contato", link: "/contato" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Esconde a navbar ao rolar para baixo
        setIsNavbarHidden(true);
      } else {
        // Mostra a navbar ao rolar para cima
        setIsNavbarHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    // Adiciona o evento de rolagem
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Remove o evento ao desmontar o componente
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      {/* Navbar */}
      <MDBNavbar
        dark
        bgColor={location.pathname === '/' ? "black" : 'white'}
        sticky
        className={`px-3 transition-navbar ${isNavbarHidden ? "navbar-hidden" : ""
          }`}
      >
        <MDBContainer fluid className="d-flex justify-content-between align-items-center">
          {/* Logo */}
          <MDBNavbarBrand href="#">
            <img src={location.pathname === '/' ? LogoWhite : LogoBlack} alt="Logo" className="navbar-logo" />
          </MDBNavbarBrand>

          {/* Social Icons */}
          <div className="d-flex align-items-center gap-4 navbar-content">
            <a
              className={`btn-social-navbar rounded-circle p-2 ${location.pathname === '/' ? "bg-white text-black" : 'bg-black text-white'}`}
              href="https://www.linkedin.com/company/studio-conceito-arquitetura"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              className={`btn-social-navbar rounded-circle p-2 ${location.pathname === '/' ? "bg-white text-black" : 'bg-black text-white'}`}
              href="https://www.instagram.com/sconceitoarquitetura/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={20} />
            </a>
            <a
              className={`btn-social-navbar rounded-circle p-2 ${location.pathname === '/' ? "bg-white text-black" : 'bg-black text-white'}`}
              href="https://br.pinterest.com/StudioConceitoArq/"
              target="_blank"
              rel="noreferrer"
            >
              <FaPinterestP size={18} />
            </a>
          </div>
        </MDBContainer>
      </MDBNavbar>

      {/* Toggle Button (Fixado no topo) */}
      <button
        className="toggle-navbar-btn p-2"
        style={{
          color: location.pathname === '/' ? "white" : 'black',
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => setShowMenu(!showMenu)}
      >
        <FaBars size={23} />
      </button>

      {/* Overlay + Sidebar */}
      {showMenu && (
        <>
          {/* Overlay */}
          <div
            className="position-fixed top-0 start-0 w-100 h-100 bg-dark"
            onClick={() => setShowMenu(false)} // Fecha ao clicar fora da sidebar
          ></div>
        </>
      )}

      {/* Sidebar */}
      <div
        className={`sidebar-content ${showMenu ? "show" : ""}`}
      >
        <div className="d-flex justify-content-end p-2">
          {/* Close Button */}
          <button
            className="p-0 toggle-btn-sidebar"
            onClick={() => setShowMenu(false)}
          >
            <IoClose size={40} />
          </button>
        </div>

        <div className="navbar-sidebar-content">
          {/* Menu Items */}
          <ul className="list-unstyled">
            {mobileOptions.map((item, index) => (
              <li key={index} className="py-2">
                <Link
                  to={item.link}
                  onClick={() => setShowMenu(false)}
                  className="text-decoration-none sidebar-content-item fs-6"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          {/* Social Icons */}
          <div className="d-flex align-items-center gap-3 navbar-social-sidebar">
            <a
              className="btn-social-sidebar rounded-circle p-2"
              href="https://www.linkedin.com/company/studio-conceito-arquitetura"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              className="btn-social-sidebar rounded-circle p-2"
              href="https://www.instagram.com/sconceitoarquitetura/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={20} />
            </a>
            <a
              className="btn-social-sidebar rounded-circle p-2"
              href="https://br.pinterest.com/StudioConceitoArq/"
              target="_blank"
              rel="noreferrer"
            >
              <FaPinterestP size={18} />
            </a>
          </div>
          <img
            src={SeloGptw}
            alt="Great Place to Work"
            className="gptw-selo-sidebar"
          />
        </div>
      </div>
    </>

  );
};

export default Navbar;
