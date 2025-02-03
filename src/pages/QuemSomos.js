import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { FiEye, FiHeart } from "react-icons/fi";
import { LiaBullseyeSolid } from "react-icons/lia";
import "../styles/quemsomos.css";
import Escritorio from '../images/quemsomosImg/escritorioImg.png';
import socio1 from '../images/quemsomosImg/socioCristina.png';
import socio2 from '../images/quemsomosImg/socioCastilho.png';
import graficoDiversidadeSocios from '../images/quemsomosImg/diversidade-socios-grafico.png';
import graficoDiversidadeColaboradores from '../images/quemsomosImg/diversidade-colaboradores-grafico.png';
import { FaLinkedinIn } from "react-icons/fa6";

export default function QuemSomos() {
  return (
    <>
      <div className="all">

        {/* Seção de cabeçalho do quem somos */}
        <section className="bg-black text-white page-header-about">
          <MDBContainer>
            <MDBRow className="align-items-center">
              <MDBCol md="6">
                <h1 className="fw-bold p-0 m-0">Quem somos</h1>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        {/* Quem Somos Section */}
        <section className="intro-section-about">
          <MDBContainer>
            <MDBRow className="justify-content-center">
              <MDBCol md="6">
                <img
                  src={Escritorio}
                  alt="Studio Conceito"
                  className="img-fluid"
                />
              </MDBCol>
              <MDBCol md="6" className="intro-text-container">
                <h2 className="fw-bold mb-4">Studio Conceito</h2>
                <p className="text-large">
                  A Studio Conceito Arquitetura foi{" "}
                  <span className="fw-bold">fundada em 2009</span> e conta com uma equipe
                  altamente capacitada e com grande experiência na área
                  corporativa.
                </p>
                <br />
                <p className="text-large">
                  O <span className="fw-bold">Atendimento Personalizado</span> é o grande foco
                  de nossa empresa, visando sempre garantir a satisfação e a
                  consequente fidelização de nossos clientes.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

        </section>

        {/* Sócios Section */}
        <section className="py-5 socios text-white">
          <MDBContainer>
            <h1 className="text-left titulosocios fw-bold mt-4">Sócios</h1>
            <MDBRow className="text-center justify-content-between align-items-center">
              <MDBCol md="6" className="mb-4">
                <div className="team-member">
                  <img
                    src={socio1}
                    alt="Arq. Cristina Castilho"
                    className="img-fluid mb-2"
                  />
                  <div className="description">
                    <div>
                      <h4 className="fw-bold">Arq. Cristina Castilho</h4>
                      <p>CEO | Sócia fundadora</p>
                    </div>
                    <a
                      className="btn-social-navbar bg-white rounded-circle p-2"
                      href="https://www.linkedin.com/in/cristina-castilho-46b72714/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedinIn size={18} />
                    </a>
                  </div>
                </div>
              </MDBCol>
              <MDBCol md="6" className="mb-4">
                <div className="team-member">
                  <img
                    src={socio2}
                    alt="Arq. Gabriel Castilho"
                    className="img-fluid mb-2"
                  />
                  <div className="description">
                    <div>
                      <h4 className="fw-bold">Arq. Gabriel Castilho</h4>
                      <p>COO | Sócio fundador</p>
                    </div>
                    <a
                      className="btn-social-navbar bg-white rounded-circle p-2"
                      href="https://www.linkedin.com/in/gabriel-castilho-7434a016/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedinIn size={18} />
                    </a>
                  </div>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        {/* Atendemos em todo Brasil Section */}
        <section className="py-5">
          <MDBContainer>
            <MDBRow className="align-items-start justify-content-center atendimento-row">
              <MDBCol md="6" className="title-container">
                <h1 className="atendemos-title">Atendemos</h1>
                <h1 className="brasil-title">em todo Brasil</h1>
                <div className="divider d-inline-block" style={{ width: '34%' }}></div>
              </MDBCol>
              <MDBCol md="6">
                <p className="text-large">
                  Com uma equipe multidisciplinar e altamente capacitada,
                  composta por: arquitetos, engenheiros e designers, apresentamos
                  as melhores soluções para as demandas de nossos clientes,
                  tanto na área de <span className="fw-bold">projeto</span> como
                  de <span className="fw-bold">obra</span>.
                </p>
                <p className="text-large">
                  Adequamos nossos times às necessidades de cada solicitação,
                  sejam elas projetos, gerenciamento e execução de obra. Do
                  início ao fim, ficamos ao lado do cliente{" "}
                  <span className="fw-bold">
                    cuidando de todos os detalhes!
                  </span>
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        {/* Missão, Visão e Valores Section */}
        <section className="pt-5">
          <MDBContainer className="mvvsection">
            <MDBRow className="text-center mission-row">
              <MDBCol md="4" className="mission-col">
                <div className="icon-container">
                  <LiaBullseyeSolid size={55} color="#3d7cc9" />
                </div>
                <h5 className="pilares-sconceito-title">Missão</h5>
                <div className="divider"></div>
                <p className="pilares-sconceito-text">
                  Apresentar as melhores soluções para as demandas dos nossos
                  clientes, tanto na área de projeto como de obra.
                </p>
              </MDBCol>
              <MDBCol md="4" className="mission-col">
                <div className="icon-container">
                  <FiEye size={55} color="#3d7cc9" />
                </div>
                <h5 className="pilares-sconceito-title">Visão</h5>
                <div className="divider"></div>
                <p className="pilares-sconceito-text">
                  Queremos ser reconhecidos como a empresa que mais cuida de
                  seus clientes e colaboradores, próximos e atentos a todos os
                  detalhes.
                </p>
              </MDBCol>
              <MDBCol md="4" className="mission-col">
                <div className="icon-container">
                  <FiHeart size={55} color="#3d7cc9" />
                </div>
                <h5 className="pilares-sconceito-title">Valores</h5>
                <div className="divider"></div>
                <p className="pilares-sconceito-text">
                  Ética, Transparência, Respeito à Vida, Inovação, Paixão,
                  Excelência, Flexibilidade, Sustentabilidade, Equilíbrio e
                  Fidelização.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

          {/* Equipe Section */}
          <section className="equipe-section">
            <MDBContainer fluid className="d-flex">
              <MDBRow className=" align-items-between">
                <MDBCol md="4" className="p-0 equipe-image-col">
                  <span className="equipe-image"></span>
                </MDBCol>
                <MDBCol
                  md="7"
                  className="d-flex flex-column justify-content-center align-items-start equipe-text"
                >
                  <h2 className="fw-bold text-left mb-3">Equipe</h2>
                  <p className="text-left">
                    Nossos departamentos de Arquitetura e Engenharia são{" "}
                    <span>muito experientes na área corporativa.</span>
                  </p>
                  <p className="text-left">
                    Eles possuem uma interação constante, o que torna o
                    conhecimento de nossos colaboradores mais abrangente e os
                    serviços oferecidos, tanto de obra quanto projeto, mais ricos
                    e completos.
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>

          {/* Diversidade Section */}
          <section className="diversidade-section">
            <MDBContainer>
              <MDBRow className="align-items-center justify-content-between diversidade-row">
                <MDBCol md="5" className="d-flex flex-column diversidade-text m-0 p-0">
                  <p className="text-left">
                    A Studio Conceito tem seu quadro societário, e sua equipe de
                    colaboradores, constituído por uma{" "}
                    <span className="destaque">
                      maioria de pessoas do gênero feminino.
                    </span>
                  </p>
                </MDBCol>
                <MDBCol md="7" className="d-flex justify-content-center">
                  <div className="chart-container">
                    <img src={graficoDiversidadeSocios} className="grafico-img-socios" alt="Gráfico de diversidade - Sócios" />
                    <img src={graficoDiversidadeColaboradores} className="grafico-img-colaboradores" alt="Gráfico de diversidade - Colaboradores" />
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
        </section>
      </div>
    </>
  );
}
