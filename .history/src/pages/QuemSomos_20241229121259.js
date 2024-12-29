import React from "react";
import Navbar from "../components/navbar"; // Importando o componente Navbar
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { FaBullseye, FaEye, FaHeart } from "react-icons/fa";

import Footer from "../components/footer";
import "../styles/quemsomos.css";

export default function QuemSomos() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Seção de cabeçalho do quem somos */}
      <section className="bg-black text-white py-5">
        <MDBContainer>
          <MDBRow className="align-items-center">
            <MDBCol md="6">
              <h1 className="fw-bold">Quem somos</h1>
            </MDBCol>
            <MDBCol md="6" className="text-end">
              <img
                src="https://placehold.co/200x150" // Imagem maior para seguir o padrão original
                alt="Padrão gráfico"
                style={{ maxWidth: "200px", marginRight: "4rem" }}
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* Quem Somos Section */}
      <section className="py-5 ">
        <MDBContainer>
          <MDBRow className="align-items-center">
            <MDBCol md="6">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Studio Conceito"
                className="img-fluid"
              />
            </MDBCol>
            <MDBCol md="6">
              <h2 className="fw-bold mb-4">Studio Conceito</h2>
              <p>
                A Studio Conceito Arquitetura foi{" "}
                <strong>fundada em 2009</strong> e conta com uma equipe
                altamente capacitada e com grande experiência na área
                corporativa.
              </p>
              <p>
                O <strong>Atendimento Personalizado</strong> é o grande foco de
                nossa empresa, visando sempre garantir a satisfação e a
                consequente fidelização de nossos clientes.
              </p>
            </MDBCol>
          </MDBRow>
          
        </MDBContainer>
        <img
            src="https://via.placeholder.com/1920x200"
            alt="Studio Conceito"
            className="img-fluid"
        />
      </section>

      {/* Sócios Section */}
      <section className="py-5 bg-dark text-white">
        <MDBContainer>
          <h2 className="text-center fw-bold mb-5">Sócios</h2>
          <MDBRow className="text-center">
            <MDBCol md="6" className="mb-4">
              <div className="team-member">
                <img
                  src="https://via.placeholder.com/400x400"
                  alt="Arq. Cristina Castilho"
                  className="img-fluid mb-2"
                />
                <h4 className="fw-bold">Arq. Cristina Castilho</h4>
                <p>CEO | Sócia fundadora</p>
              </div>
            </MDBCol>
            <MDBCol md="6" className="mb-4">
              <div className="team-member">
                <img
                  src="https://via.placeholder.com/400x400"
                  alt="Arq. Gabriel Castilho"
                  className="img-fluid mb-2"
                />
                <h4 className="fw-bold">Arq. Gabriel Castilho</h4>
                <p>COO | Sócio fundador</p>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* Atendemos em todo Brasil Section */}
      <section className="py-5 bg-light">
        <MDBContainer>
          <MDBRow className="align-items-center">
            <MDBCol md="6" className="title-container">
              <h1 className="atendemos-title">Atendemos</h1>
              <h1 className="brasil-title">em todo Brasil</h1>
            </MDBCol>
            <MDBCol md="6">
              <p className="text-large">
                Com uma equipe multidisciplinar e altamente capacitada, composta
                por arquitetos, engenheiros e designers, apresentamos as
                melhores soluções para as demandas de nossos clientes, tanto na
                área de <span className="fw-bold">projeto</span> como de{" "}
                <span className="fw-bold">obra</span>.
              </p>
              <p className="text-large">
                Adequamos nossos times às necessidades de cada solicitação,
                sejam elas projetos, gerenciamento e execução de obra. Do início
                ao fim, ficamos ao lado do cliente{" "}
                <span className="fw-bold">cuidando de todos os detalhes!</span>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* Missão, Visão e Valores Section */}
      <section className="py-5 bg-white">
        <MDBContainer>
          <MDBRow className="text-center mission-row">
            <MDBCol md="4" className="mission-col">
              <div className="icon-container">
                <FaBullseye size={40} color="#3d7cc9" />
              </div>
              <h5 className="fw-bold">Missão</h5>
              <div className="divider"></div>
              <p>
                Apresentar as melhores soluções para as demandas dos nossos
                clientes, tanto na área de projeto como de obra.
              </p>
            </MDBCol>
            <MDBCol md="4" className="mission-col">
              <div className="icon-container">
                <FaEye size={40} color="#3d7cc9" />
              </div>
              <h5 className="fw-bold">Visão</h5>
              <div className="divider"></div>
              <p>
                Queremos ser reconhecidos como a empresa que mais cuida de seus
                clientes e colaboradores, próximos e atentos a todos os
                detalhes.
              </p>
            </MDBCol>
            <MDBCol md="4" className="mission-col">
              <div className="icon-container">
                <FaHeart size={40} color="#3d7cc9" />
              </div>
              <h5 className="fw-bold">Valores</h5>
              <div className="divider"></div>
              <p>
                Ética, Transparência, Respeito à Vida, Inovação, Paixão,
                Excelência, Flexibilidade, Sustentabilidade, Equilíbrio e
                Fidelização.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <Footer />
      </section>
    </>
  );
}
