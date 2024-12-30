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
    src:"",
  },
  {
    title: "Studio Conceito",
    src:"",
  },
  {
    title: "Ifood",
    src:"",
  },
  {
    title: "Aj1",
    src:"",
  },
  {
    title: "Cemig",
    src:"",
  },
  {
    title: "Empresa de Tecnologia",
    src:"",
  },
  {
    title: "Empresa de Tecnologia",
    src:"",
  },
  {
    title: "Bacardi",
    src:"",
  },
  {
    title: "AstraZeneca - Centro Medico",
    src:"",
  },
  {
    title: "Ifood - espaço dos entregadores",
    src:"",
  },
  {
    title: "Apsen",
    src:"",
  },
  {
    title: "Astrazeneca - Restaurante",
    src:"",
  },
  {
    title: "Apsen",
    src:"",
  },
  {
    title: "Aj1",
    src:"",
  },
  {
    title: "Empresa de Tecnologia",
    src:"",
  },
  {
    title: "AstraZeneca - Centro Medico",
    src:"",
  },
  {
    title: "Ifood",
    src:"",
  },
  {
    title: "Studio Conceito",
    src:"",
  },
  {
    title: "Bacardi",
    src:"",
  },
  {
    title: "Empresa de Tecnologia",
    src:"",
  },
  {
    title: "Cemig",
    src:"",
  },
  {
    title: "Ifood - Recife",
    src:"",
  },
  {
    title: "Empresa de Tecnologia",
    src:"",
  },
  {
    title: "AstraZeneca - Restaurante",
    src:"",
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
                  src={caseItem.image}
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
