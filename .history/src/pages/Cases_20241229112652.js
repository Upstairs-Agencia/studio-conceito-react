import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/cases";

const caseStudies = [
  {
    title: "Studio Conceito",
    description: "Espaço moderno e funcional",
    image: "https://via.placeholder.com/700x400",
  },
  {
    title: "Open Office",
    description: "Ambiente colaborativo",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "Design Lab",
    description: "Inovação e criatividade",
    image: "https://via.placeholder.com/700x400",
  },
  {
    title: "Espaço Corporativo",
    description: "Conforto e produtividade",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "Hub Criativo",
    description: "Estilo e praticidade",
    image: "https://via.placeholder.com/700x400",
  },
  {
    title: "Sala de Reunião",
    description: "Elegância e tecnologia",
    image: "https://via.placeholder.com/600x400",
  },
];

function Cases() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Navbar />
      <MDBContainer className="my-5">
        <h1
          className="mb-4"
          style={{
            textAlign: "left",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Cases
        </h1>
        <MDBRow>
          {caseStudies.map((caseItem, index) => (
            <MDBCol md="6" className="mb-4" key={index}>
              <div className="case-card">
                <img
                  src={caseItem.image}
                  alt={`Imagem do ${caseItem.title}`}
                  className="case-image"
                />
                <div className="case-overlay">
                  <div className="case-info">
                    <span className="case-title">Case</span>
                    <span className="case-description">
                      {caseItem.title}
                    </span>
                  </div>
                </div>
              </div>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
      <Footer />
    </div>
  );
}

export default Cases;
