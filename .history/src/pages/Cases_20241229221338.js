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
    src:"images/casesImg/[nomedocase sem espaco].png",
  },
  {
    title: "Studio Conceito",
    src:"images/casesImg/[nomedocase sem espaco].png",
  },
  {
    title: "Ifood",
    src:"images/casesImg/[nomedocase sem espaco].png",
  },
  {
    title: "Aj1",
    src:"images/casesImg/[nomedocase sem espaco].png",
  },
  {
    title: "Cemig",
    src:"images/casesImg/[nomedocase sem espaco].png",
  },
  {
    title: "Empresa de Tecnologia",
    src:"images/casesImg/[nomedocase sem espaco].png",
  },
  {
    title: "Empresa de Tecnologia",
    src:"images/casesImg/[nomedocase sem espaco].png",
  },
  {
    title: "Bacardi",
    src:"images/casesImg/[nomedocase sem espaco].png",
  },
  {
    title: "AstraZeneca - Centro Medico",
    src:"images/casesImg/[nomedocase sem espaco].png",
  },
  {
    title: "Ifood - espaço dos entregadores",
    src:"images/casesImg/[nomedocase sem espaco].png",
  },
  {
    title: "Apsen",
    src:"images/casesImg/[nomedocase sem espaco].png",
  },
  {
    title: "Astrazeneca - Restaurante",
    src:"images/casesImg/[nomedocase sem espaco].png",
  },
  {
    title: "Apsen",
    src:"images/casesImg/[nomedocase sem espaco].png",
  },
  {
    title: "Aj1",
    src:"images/casesImg/[nomedocase sem espaco].png",
  },
  {
    title: "Empresa de Tecnologia",
    src:"images/casesImg/[nomedocase sem espaco].png",
  },
  {
    title: "AstraZeneca - Centro Medico",
    src:"images/casesImg/[nomedocase sem espaco].png",
  },
  {
    title: "Ifood",
    src:"images/casesImg/[nomedocase sem espaco].png",
  },
  {
    title: "Studio Conceito",
    src:"images/casesImg/[nomedocase sem espaco].png",
  },
  {
    title: "Bacardi",
    src:"images/casesImg/[nomedocase sem espaco].png",
  },
  {
    title: "Empresa de Tecnologia",
    src:"images/casesImg/[nomedocase sem espaco].png",
  },
  {
    title: "Cemig",
    src:"images/casesImg/[nomedocase sem espaco].png",
  },
  {
    title: "Ifood - Recife",
    src:"images/casesImg/[nomedocase sem espaco].png",
  },
  {
    title: "Empresa de Tecnologia",
    src:"images/casesImg/[nomedocase sem espaco].png",
  },
  {
    title: "AstraZeneca - Restaurante",
    src:"images/casesImg/[nomedocase sem espaco].png",
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
