import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";
import { FiEye, FiHeart } from "react-icons/fi";
import { LiaBullseyeSolid } from "react-icons/lia";
import { FaLinkedinIn } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { motion } from "framer-motion";
import "../styles/quemsomos.css";

import Escritorio from '../images/quemsomosImg/escritorioImg.png';
import socio1 from '../images/quemsomosImg/socioCristina.png';
import socio2 from '../images/quemsomosImg/socioCastilho.png';
import graficoDiversidadeSocios from '../images/quemsomosImg/diversidade-socios-grafico.png';
import graficoDiversidadeColaboradores from '../images/quemsomosImg/diversidade-colaboradores-grafico.png';

export default function QuemSomos() {
  return (
    <>
      <div className="all overflow-mobile-hidden">
        {/* Seção de cabeçalho do quem somos */}
        <section className="bg-black text-white page-header-about">
          <MDBContainer>
            <MDBRow className="align-items-center">
              <MDBCol md="6">
                <motion.h1
                  className="fw-bold p-0 m-0"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }} 
                  transition={{ duration: 1.5 }}
                >
                  Quem somos
                </motion.h1>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        {/* Quem Somos Section */}
        <section className="intro-section-about">
          <MDBContainer>
            <MDBRow className="justify-content-center">
              <MDBCol md="6">
                <motion.img
                  src={Escritorio}
                  alt="Studio Conceito"
                  className="img-fluid"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }} 
                  transition={{ duration: 0.8 }}
                />
              </MDBCol>
              <MDBCol md="6" className="intro-text-container">
                <motion.h2
                  className="fw-bold mb-4"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }} 
                  transition={{ duration: 0.8 }}
                >
                  Studio Conceito
                </motion.h2>
                <motion.p
                  className="text-large"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }} 
                  transition={{ duration: 1.5 }}
                >
                  A Studio Conceito Arquitetura foi{" "}
                  <span className="fw-bold">fundada em 2009</span> e conta com uma
                  equipe altamente capacitada e com grande experiência na área
                  corporativa.
                </motion.p>
                <br />
                <motion.p
                  className="text-large"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }} 
                  transition={{ duration: 1.5 }}
                >
                  O <span className="fw-bold">Atendimento Personalizado</span> é o
                  grande foco de nossa empresa, visando sempre garantir a satisfação e a
                  consequente fidelização de nossos clientes.
                </motion.p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        {/* Sócios Section */}
        <section className="py-5 socios text-white">
          <MDBContainer>
            <motion.h1
              className="text-left titulosocios fw-bold mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }} 
              transition={{ duration: 1.5 }}
            >
              Sócios
            </motion.h1>
            <MDBRow className="text-center justify-content-between align-items-center">
              <MDBCol md="6" className="mb-4">
                <motion.div
                  className="team-member"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }} 
                  transition={{ duration: 1.5 }}
                  whileHover={{ scale: 1.03 }}
                >
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
                </motion.div>
              </MDBCol>
              <MDBCol md="6" className="mb-4">
                <motion.div
                  className="team-member"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }} 
                  transition={{ duration: 1.5 }}
                  whileHover={{ scale: 1.03 }}
                >
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
                </motion.div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        {/* Atendemos em todo Brasil Section */}
        <section className="py-5">
          <MDBContainer>
            <MDBRow className="align-items-start justify-content-center atendimento-row">
              <MDBCol md="6" className="title-container">
                <motion.h1
                  className="atendemos-title"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }} 
                  transition={{ duration: 0.8 }}
                >
                  Atendemos
                </motion.h1>
                <motion.h1
                  className="brasil-title"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }} 
                  transition={{ duration: 0.8 }}
                >
                  em todo Brasil
                </motion.h1>
                <motion.div
                  className="divider d-inline-block"
                  style={{ width: "34%" }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }} 
                  transition={{ duration: 1.5 }}
                ></motion.div>
              </MDBCol>
              <MDBCol md="6">
                <motion.p
                  className="text-large"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }} 
                  transition={{ duration: 1.5 }}
                >
                  Com uma equipe multidisciplinar e altamente capacitada, composta por:
                  arquitetos, engenheiros e designers, apresentamos as melhores
                  soluções para as demandas de nossos clientes, tanto na área de{" "}
                  <span className="fw-bold">projeto</span> como de{" "}
                  <span className="fw-bold">obra</span>.
                </motion.p>
                <motion.p
                  className="text-large"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }} 
                  transition={{ duration: 1.5 }}
                >
                  Adequamos nossos times às necessidades de cada solicitação, sejam elas
                  projetos, gerenciamento e execução de obra. Do início ao fim, ficamos ao
                  lado do cliente{" "}
                  <span className="fw-bold">cuidando de todos os detalhes!</span>
                </motion.p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        {/* Missão, Visão e Valores Section */}
        <section className="pt-5">
          <MDBContainer className="mvvsection">
            <MDBRow className="text-center mission-row">
              <MDBCol md="4" className="mission-col">
                <motion.div
                  className="icon-container"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }} 
                  transition={{ duration: 1.5 }}
                >
                  <LiaBullseyeSolid size={55} color="#3d7cc9" />
                </motion.div>
                <motion.h5
                  className="pilares-sconceito-title"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }} 
                  transition={{ duration: 1.5 }}
                >
                  Missão
                </motion.h5>
                <motion.div
                  className="divider"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }} 
                  transition={{ duration: 1.5 }}
                ></motion.div>
                <motion.p
                  className="pilares-sconceito-text"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }} 
                  transition={{ duration: 1.5 }}
                >
                  Apresentar as melhores soluções para as demandas dos nossos clientes,
                  tanto na área de projeto como de obra.
                </motion.p>
              </MDBCol>
              <MDBCol md="4" className="mission-col">
                <motion.div
                  className="icon-container"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }} 
                  transition={{ duration: 1.5 }}
                >
                  <FiEye size={55} color="#3d7cc9" />
                </motion.div>
                <motion.h5
                  className="pilares-sconceito-title"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }} 
                  transition={{ duration: 1.5 }}
                >
                  Visão
                </motion.h5>
                <motion.div
                  className="divider"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }} 
                  transition={{ duration: 1.5 }}
                ></motion.div>
                <motion.p
                  className="pilares-sconceito-text"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }} 
                  transition={{ duration: 1.5 }}
                >
                  Queremos ser reconhecidos como a empresa que mais cuida de seus
                  clientes e colaboradores, próximos e atentos a todos os detalhes.
                </motion.p>
              </MDBCol>
              <MDBCol md="4" className="mission-col">
                <motion.div
                  className="icon-container"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }} 
                  transition={{ duration: 1.5 }}
                >
                  <FiHeart size={55} color="#3d7cc9" />
                </motion.div>
                <motion.h5
                  className="pilares-sconceito-title"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }} 
                  transition={{ duration: 1.5 }}
                >
                  Valores
                </motion.h5>
                <motion.div
                  className="divider"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }} 
                  transition={{ duration: 1.5 }}
                ></motion.div>
                <motion.p
                  className="pilares-sconceito-text"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }} 
                  transition={{ duration: 1.5 }}
                >
                  Ética, Transparência, Respeito à Vida, Inovação, Paixão, Excelência,
                  Flexibilidade, Sustentabilidade, Equilíbrio e Fidelização.
                </motion.p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

          {/* Equipe Section */}
          <section className="equipe-section">
            <MDBContainer fluid className="d-flex">
              <MDBRow className="align-items-between">
                <MDBCol md="4" className="p-0 equipe-image-col mobile-hidden">
                  <motion.span
                    className="equipe-image"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }} 
                    transition={{ duration: 1.5 }}
                  ></motion.span>
                </MDBCol>
                <MDBCol
                  md="7"
                  className="d-flex flex-column justify-content-center align-items-start equipe-text"
                >
                  <motion.h2
                    className="fw-bold text-left mb-3"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }} 
                    transition={{ duration: 0.8 }}
                  >
                    Equipe
                  </motion.h2>
                  <motion.p
                    className="text-left"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }} 
                    transition={{ duration: 1.5 }}
                  >
                    Nossos departamentos de Arquitetura e Engenharia são{" "}
                    <span>muito experientes na área corporativa.</span>
                  </motion.p>
                  <motion.p
                    className="text-left"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }} 
                    transition={{ duration: 1.5 }}
                  >
                    Eles possuem uma interação constante, o que torna o conhecimento
                    de nossos colaboradores mais abrangente e os serviços oferecidos,
                    tanto de obra quanto projeto, mais ricos e completos.
                  </motion.p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>

          {/* Diversidade Section */}
          <section className="diversidade-section">
            <MDBContainer>
              <MDBRow className="align-items-center justify-content-between diversidade-row">
                <MDBCol md="5" className="d-flex flex-column diversidade-text m-0 p-0">
                  <motion.p
                    className="text-left"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }} 
                    transition={{ duration: 0.8 }}
                  >
                    A Studio Conceito tem seu quadro societário, e sua equipe de
                    colaboradores, constituído por uma{" "}
                    <span className="destaque">
                      maioria de pessoas do gênero feminino.
                    </span>
                  </motion.p>
                </MDBCol>
                <MDBCol md="7" className="d-flex justify-content-center">
                  <motion.div
                    className="chart-container"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }} 
                    transition={{ duration: 1.5 }}
                  >
                    <div className="chart-images">
                      <img
                        src={graficoDiversidadeSocios}
                        className="grafico-img-socios"
                        alt="Gráfico de diversidade - Sócios"
                      />
                      <img
                        src={graficoDiversidadeColaboradores}
                        className="grafico-img-colaboradores"
                        alt="Gráfico de diversidade - Colaboradores"
                      />
                    </div>
                    <motion.div
                      className="chart-legend"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false }} 
                      transition={{ duration: 1.5 }}
                    >
                      <GoDotFill color="#3D7CC9" size={25} />
                      <span>Gênero feminino</span>
                    </motion.div>
                  </motion.div>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
        </section>
      </div>
    </>
  );
}
