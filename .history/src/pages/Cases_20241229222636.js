import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/cases.css";


const caseStudies = [
  {
    title: "Empresa de Tecnologia",
    src:"images/casesImg/empresadetecnologia1.png",
  },
  {
    title: "Studio Conceito",
    src:"images/casesImg/estudioconceito.png",
  },
  {
    title: "Ifood",
    src:"images/casesImg/ifood2.png",
  },
  {
    title: "Aj1",
    src:"images/casesImg/AJ1-1.png",
  },
  {
    title: "Cemig",
    src:"images/casesImg/cemig1.png",
  },
  {
    title: "Empresa de Tecnologia",
    src:"images/casesImg/empresadetecnologia5.png",
  },
  {
    title: "Empresa de Tecnologia",
    src:"images/casesImg/empresadetecnologia2.png",
  },
  {
    title: "Bacardi",
    src:"images/casesImg/bacardi1.png",
  },
  {
    title: "AstraZeneca - Centro Medico",
    src:"images/casesImg/astrazeneca3.png",
  },
  {
    title: "Ifood - espaço dos entregadores",
    src:"images/casesImg/ifood3.png",
  },
  {
    title: "Apsen",
    src:"images/casesImg/apsen1.png",
  },
  {
    title: "Astrazeneca - Restaurante",
    src:"images/casesImg/astrazeneca2.png",
  },
  {
    title: "Apsen",
    src:"images/casesImg/apsen.png",
  },
  {
    title: "Aj1",
    src:"images/casesImg/AJ1.png",
  },
  {
    title: "Empresa de Tecnologia",
    src:"images/casesImg/empresadetecnologia4.png",
  },
  {
    title: "AstraZeneca - Centro Medico",
    src:"images/casesImg/astrazeneca-centromedico.png",
  },
  {
    title: "Ifood",
    src:"images/casesImg/ifood.png",
  },
  {
    title: "Studio Conceito",
    src:"images/casesImg/studioconceito1.png",
  },
  {
    title: "Bacardi",
    src:"images/casesImg/bacardi.png",
  },
  {
    title: "Empresa de Tecnologia",
    src:"images/casesImg/empresadetecnologia3.png",
  },
  {
    title: "Cemig",
    src:"images/casesImg/cemig.png",
  },
  {
    title: "Ifood - Recife",
    src:"images/casesImg/ifood4.png",
  },
  {
    title: "Empresa de Tecnologia",
    src:"images/casesImg/empresadetecnologia.png",
  },
  {
    title: "AstraZeneca - Restaurante",
    src:"images/casesImg/astrazeneca.png",
  },
];

function Cases() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Navbar/>
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
        <MDBRow className="g-4">
          {caseStudies.map((caseItem, index) => (
            <MDBCol md="6" key={index}>
              <div className="case-card">
                <img
                  src={caseItem.src}
                  alt={`Imagem do ${caseItem.title}`}
                  className="case-image"
                />
                <div className="case-overlay">
                  <div className="case-info">
                    <span className="case-title">Case</span> <br></br>
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
