import React from "react";
import { FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import backgroundMap from "../images/ContactBg.png"; // Ajuste o caminho da imagem
import logoImage from "../images/logoBlack.png"; // Ajuste o caminho do logo

const ContactPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundMap})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <MDBContainer className="text-white py-5">
        <MDBRow className="justify-content-center">
          <MDBCol md="8" className="bg-black p-4 rounded">
            <div className="text-center mb-4">
              <img src={logoImage} alt="Studio Conceito Logo" style={{ width: "150px" }} />
            </div>
            <h2 className="text-white text-center mb-3">Contato</h2>
            <MDBRow>
              <MDBCol md="6" className="text-white">
                <p>
                  <strong>TELEFONE</strong>
                  <br />
                  +55 11 9163-27532
                  <br />
                  +55 11 2364-7151
                </p>
                <p>
                  <strong>EMAIL</strong>
                  <br />
                  comercial@sconceito.com.br
                </p>
                <p>
                  <strong>ENDEREÇO</strong>
                  <br />
                  Rua Arizona, 1349 – 13º andar
                  <br />
                  Cidade Monções – São Paulo – SP
                </p>
              </MDBCol>
              <MDBCol md="6" className="text-white">
                <p>
                  <strong>EMAIL FORNECEDORES</strong>
                  <br />
                  sc@sconceito.com.br
                </p>
                <p>
                  <strong>TRABALHE CONOSCO</strong>
                  <br />
                  Envie seu currículo
                </p>
              </MDBCol>
            </MDBRow>
            <div className="d-flex justify-content-center mt-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-3"
                style={{ fontSize: "1.5rem" }}
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-3"
                style={{ fontSize: "1.5rem" }}
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-3"
                style={{ fontSize: "1.5rem" }}
              >
                <FaPinterest />
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer />
    </div>
  );
};

export default ContactPage;