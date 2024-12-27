import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBContainer,
} from "mdb-react-ui-kit";
import { FaLinkedin, FaInstagram, FaPinterest, FaBars } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";

import SeloGptw from "../images/selo-gptw.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {/* Navbar */}
      <MDBNavbar dark bgColor="black" className="py-4 px-5">
        <MDBContainer fluid className="d-flex justify-content-between align-items-center">
          {/* Logo */}
          <MDBNavbarBrand href="#" className="ms-3">
            <img
              src="https://via.placeholder.com/150x50"
              alt="Logo"
              style={{ maxHeight: "50px" }}
            />
          </MDBNavbarBrand>

          {/* Social Icons and Menu Toggle */}
          <div className="d-flex align-items-center">
            {/* Social Icons */}
            <div className="d-flex gap-3 me-3">
              <button className="btn btn-light rounded-circle p-2">
                <FaLinkedin size={20} />
              </button>
              <button className="btn btn-light rounded-circle p-2">
                <FaInstagram size={20} />
              </button>
              <button className="btn btn-light rounded-circle p-2">
                <FaPinterest size={20} />
              </button>
            </div>

            {/* FaBars Icon for Sidebar */}
            <button
              className="btn rounded-circle p-2"
              onClick={() => setShowMenu(!showMenu)}
            >
              <FaBars size={20} color="white" />
            </button>
          </div>
        </MDBContainer>
      </MDBNavbar>

      {/* Sidebar Menu */}
      {showMenu && (
        <div
          className="position-fixed top-0 end-0 bg-white vh-100 vw-350 shadow-lg d-flex flex-column"
          style={{ zIndex: 1050, width: "500px" }}
        >
          <div className="d-flex justify-content-end p-3">
            {/* Close Button */}
            <button
              className="p-0"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => setShowMenu(false)}
            >
              <IoIosClose size={40} />
            </button>
          </div>

          



          <div className="p-4 flex-grow-1">
            {/* Menu Items */}
            <ul className="list-unstyled">
              {[
                { label: "Home", link: "/" },
                { label: "Quem somos", link: "/quem-somos" },
                { label: "Serviços", link: "/servicos" },
                { label: "Cases", link: "/cases" },
                { label: "Blog", link: "/blog" },
                { label: "Clientes", link: "/clientes" },
                { label: "Contato", link: "/contato" },
              ].map((item, index) => (
                <li key={index} className="py-2">
                  <Link
                    to={item.link}
                    className="text-decoration-none fs-6"
                    style={{
                      transition: "all 0.3s ease-in-out", // Transição suave
                      color:"black"
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = "#FF7F30"; // Altera a cor
                      e.currentTarget.style.fontWeight = "bold"; // Negrito
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = "black"; // Retorna à cor original
                      e.currentTarget.style.fontWeight = "normal"; // Retira o negrito
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>



          {/* Footer Section */}
          <div className="d-flex justify-content-between align-items-center px-4 pb-4">
            {/* Social Icons */}
            <div className="d-flex gap-3">
              <button className="btn btn-dark rounded-circle p-2">
                <FaLinkedin size={20} color="white" />
              </button>
              <button className="btn btn-dark rounded-circle p-2">
                <FaInstagram size={20} color="white" />
              </button>
              <button className="btn btn-dark rounded-circle p-2">
                <FaPinterest size={20} color="white" />
              </button>
            </div>

            {/* Placeholder Image */}
            <img
              src={SeloGptw}
              alt="Great Place to Work"
              style={{ maxHeight: "200px", marginBottom: "4rem" }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
