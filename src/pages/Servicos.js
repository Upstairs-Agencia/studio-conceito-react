import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { motion } from 'framer-motion';
import icon from "../images/servicosImg/icontopico.png";
import servicos from "../images/servicosImg/serviços.png";
import escritorio from "../images/servicosImg/escritorioimg.png";

const Servicos = () => {
  return (
    <div className='overflow-mobile-hidden'>
      {/* Seção de cabeçalho do serviço */}
      <section className="page-header-services">
        <MDBContainer>
          <MDBRow className="align-items-center">
            <MDBCol md="6">
              <motion.h1
                className="fw-bold"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
              >
                Serviços
              </motion.h1>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* Sessão Projetar e Construir */}
      <section className="py-5 bg-white-default projetar-contruir-section">
        <MDBContainer>
          <motion.h1
            className="fw-bold mb-3 text-black intro-container-services-h1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }} 
            transition={{ duration: 1.5 }}
          >
            Projetar<br />e Construir
          </motion.h1>
          <MDBRow className="align-items-center justify-content-between px-2 row-intro-container-services">
            <MDBCol md="5" className="mb-4 intro-container-services">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }} 
                transition={{ duration: 0.8 }}
              >
                <p className="text-large">
                  Transformamos sonhos em projetos e materializamos projetos em patrimônio físico e tangível.
                </p>
                <p className="text-large">
                  Realizamos a <span className="fw-bold">Implantação</span> de novos sites;&nbsp;
                  <span className="fw-bold">Retrofit</span> de imóvel (revitalização); <span className="fw-bold">Closeout</span> (desocupação de imóveis).
                </p>
                <p className="text-large">
                  Trabalhamos no formato <span className="fw-bold">Turn Key</span> ou por <span className="fw-bold">Gerenciamento</span>.
                </p>
                <p className="text-large">
                  Entre em contato com o nosso time e fale da sua necessidade.
                </p>
              </motion.div>
            </MDBCol>
            <MDBCol md="6" className="text-center intro-container-services">
              <motion.img
                src={servicos}
                alt="Projetar e Construir"
                style={{ width: '100%', height: 'auto' }}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }} 
                transition={{ duration: 0.8 }}
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* Sessão Projetos */}
      <section className="projetos-section">
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol md={5}>
              <motion.div
                className="project-services-container"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }} 
                transition={{ duration: 0.8 }}
              >
                <motion.h1 className="fw-bold">Projetos</motion.h1>
                <motion.img
                  src="images/servicosImg/projetos-1024x438.jpg"
                  className="desktop-hidden img-project-services-mobile img-fluid"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }} 
                  transition={{ duration: 0.8 }}
                  alt="Projetos"
                />
                <motion.p
                  className="text-white text-large"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }} 
                  transition={{ duration: 0.8 }}
                >
                  Nosso grande desafio é traduzir a imagem corporativa para a arquitetura, compreendendo o universo e a história de cada cliente. Priorizamos os colaboradores com o objetivo de aumentar a satisfação, bem estar e consequente elevação da produtividade.
                </motion.p>
                <motion.p
                  className="text-white text-large"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }} 
                  transition={{ duration: 0.8 }}
                >
                  Encaramos o momento atual como um desafio e uma excelente oportunidade de revermos os conceitos de ocupação, valorizando espaços colaborativos, de convivência e interação.
                </motion.p>
              </motion.div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* Sessão Destaques */}
      <section className="bg-black text-white destaques-section">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="7">
              <motion.ul
                className="list-unstyled"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }} 
                transition={{ duration: 0.8 }}
              >
                {[
                  "estudo de viabilidade",
                  "estudo preliminar",
                  "anteprojeto",
                  "projeto executivo",
                  "as built",
                  "ilustrações arquitetônicas | imagens 3D",
                  "projetos técnicos complementares",
                  "compatibilização",
                  "levantamento físico do imóvel"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="d-flex align-items-center mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }} 
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <img src={icon} alt="Ícone" className="me-3" />
                    <span className="item-list">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </MDBCol>
            <MDBCol md="5" style={{ width: '100%', height: 'auto' }}>
              {/* Espaço vazio para composição visual */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* Sessão Obras */}
      <section className="obras-section">
        <MDBContainer>
          <MDBRow className="justify-content-center gap-5">
            <MDBCol md="5">
              <motion.img
                src={escritorio}
                alt="Obras"
                width="auto"
                height="100%"
                className="mobile-hidden"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }} 
                transition={{ duration: 0.8 }}
              />
            </MDBCol>
            <MDBCol md="6" className="text-Black">
              <motion.h1
                className="fw-bold text-black"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }} 
                transition={{ duration: 0.8 }}
              >
                Obras
              </motion.h1>
              <motion.img
                src="/images/servicosImg/studio-conceito-servicos.jpg"
                alt="Obras"
                className="desktop-hidden img-fluid img-obras-servicos"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }} 
                transition={{ duration: 0.8 }}
              />
              <motion.p
                className="text-large"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }} 
                transition={{ duration: 0.8 }}
              >
                Nosso Departamento de Obras conta com grupos de <span className="fw-bold">engenheiros</span> e <span className="fw-bold">arquitetos</span> que executam e gerenciam nossos projetos e de terceiros.
              </motion.p>
              <motion.p
                className="text-large"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }} 
                transition={{ duration: 0.8 }}
              >
                Nosso cuidado com o cronograma, com as normas, com o orçamento, com a qualidade dos serviços e o pós-obra é nosso compromisso real com os nossos clientes.
              </motion.p>
              <motion.p
                className="text-large"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }} 
                transition={{ duration: 0.8 }}
              >
                Nosso comprometimento nos permite criar parcerias duradoras, Studio Conceito + Cliente, que nos possibilitam atender qualquer que seja sua demanda, desde pequenas intervenções à uma reestruturação completa.
              </motion.p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* Sessão Planejamento e Coordenação */}
      <section className="bg-black text-white py-5 planejamento-section">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="7">
              <motion.ul
                className="list-unstyled"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }} 
                transition={{ duration: 0.8 }}
              >
                {[
                  "planejamento",
                  "cronograma e prazos",
                  "suprimentos",
                  "coordenação",
                  "logística de fornecedores",
                  "fiscalização",
                  "controle de qualidade",
                  "relatório técnico",
                  "relatórios administrativos e financeiros"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="d-flex align-items-center mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }} 
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <img src={icon} alt="Ícone" className="me-3" />
                    <span className="item-list">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </MDBCol>
            <MDBCol md="5" style={{ width: '100%', height: 'auto' }}>
              {/* Espaço vazio para composição visual */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
};

export default Servicos;
