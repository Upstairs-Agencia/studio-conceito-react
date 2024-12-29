import React from "react";
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
            <h1><strong className="text-white mb-3" style={{textAlign: "left"}}>Contato</strong></h1>
            <MDBRow>
              <MDBCol md="6" className="text-white">
                <p>
                  <strong style={{color: `#ff6600`}}>TELEFONE</strong>
                  <br />
                  +55 11 9163-27532
                  <br />
                  +55 11 2364-7151
                </p>
                <p>
                  <strong style={{color: `#ff6600`}}>EMAIL</strong>
                  <br />
                  comercial@sconceito.com.br
                </p>
                <p>
                  <strong style={{color: `#ff6600`}}>ENDEREÇO</strong>
                  <br />
                  Rua Arizona, 1349 – 13º andar
                  <br />
                  Cidade Monções – São Paulo – SP
                </p>
              </MDBCol>
              <MDBCol md="6" className="text-white">
                <p>
                  <strong style={{color: `#ff6600`}}> EMAIL FORNECEDORES</strong>
                  <br />
                  sc@sconceito.com.br
                </p>
                <p>
                  <strong style={{color: `#ff6600`}}>TRABALHE CONOSCO</strong>
                  <br />
                  Envie seu currículo
                </p>
              </MDBCol>
            </MDBRow>
        
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer />
    </div>
  );
};

export default ContactPage;