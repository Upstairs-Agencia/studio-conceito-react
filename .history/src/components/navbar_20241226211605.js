import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
} from 'mdb-react-ui-kit';
import { FaLinkedin, FaInstagram, FaPinterest, FaBars } from 'react-icons/fa';
import { IoIosClose } from "react-icons/io";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <MDBNavbar dark bgColor="black" className="py-3">
        <MDBContainer fluid>
          {/* Logo */}
          <MDBNavbarBrand href="#" className="ms-3">
            <img
              src="https://via.placeholder.com/150x50"
              alt="Logo"
              style={{ maxHeight: '50px' }}
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
              <FaBars size={20} color='white' />
            </button>
          </div>
        </MDBContainer>
      </MDBNavbar>

      {/* Sidebar Menu */}
      {showMenu && (
        <div
          className="position-fixed top-0 end-0 bg-white vh-100 vw-75 shadow-lg"
          style={{ zIndex: 1050 }}
        >
          <div className="p-4">
            {/* Close Menu */}
            <button
              className="btn none"
              onClick={() => setShowMenu(false)}
            >
              <IoIosClose />
            </button>

            {/* Menu Items */}
            <ul className="list-unstyled">
              {['Home', 'Quem somos', 'Serviços', 'Cases', 'Blog', 'Clientes', 'Contato'].map((item, index) => (
                <li key={index} className="py-2">
                  <a href="#" className="text-dark text-decoration-none fs-5">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

