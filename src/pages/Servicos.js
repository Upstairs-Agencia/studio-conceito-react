import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import icon from "../images/servicosImg/icontopico.png";
import servicos from "../images/servicosImg/serviços.png";
import escritorio from "../images/servicosImg/escritorioimg.png";


const Servicos = () => {
  return (
    <div>
      {/* Seção de cabeçalho do serviço*/}
      <section className="page-header-services">
        <MDBContainer>
          <MDBRow
            className="align-items-center"
          >
            <MDBCol md="6">
              <h1 className="fw-bold">Serviços</h1>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* Sessão Projetar e Construir */}
      <section className="py-5 bg-white-default projetar-contruir-section">
        <MDBContainer>
          <h1 className="fw-bold mb-3 text-black intro-container-services-h1 ">Projetar<br />e Construir</h1>
          <MDBRow className="align-items-center justify-content-between px-2 row-intro-container-services">
            <MDBCol md="5" className="mb-4 intro-container-services">
              <p className='text-large'>
                Transformamos sonhos em projetos e materializamos projetos em patrimônio físico e tangível.
              </p>
              <p className='text-large'>
                Realizamos a <span className='fw-bold'>Implantação</span> de novos sites;&nbsp;
                <span className='fw-bold'>Retrofit</span> de imóvel (revitalização); <span className='fw-bold'>Closeout</span> (desocupação de imóveis).
              </p>
              <p className='text-large'>
                Trabalhamos no formato <span className='fw-bold'>Turn Key</span> ou por <span className='fw-bold'>Gerenciamento</span>.
              </p>
              <p className='text-large'>
                Entre em contato com o nosso time e fale da sua necessidade.
              </p>
            </MDBCol>
            <MDBCol md="6" className='text-center intro-container-services'>
              <img
                src={servicos}
                alt="Projetar e Construir"
                style={{ width: '100%', height: 'auto' }}
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* Sessão Projetos */}
      <section className='projetos-section'>
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol md={5}>
              <div className='project-services-container'>
                <h1 className="fw-bold">Projetos</h1>
                <img src='images/servicosImg/projetos-1024x438.jpg' className='desktop-hidden img-project-services-mobile img-fluid' />
                <p className='text-white text-large'>
                  Nosso grande desafio é traduzir a imagem corporativa para a arquitetura, compreendendo o universo e a história de cada cliente. Priorizamos os colaboradores com o objetivo de aumentar a satisfação, bem estar e consequente elevação da produtividade.
                </p>
                <p className='text-white text-large'>
                  Encaramos o momento atual como um desafio e uma excelente oportunidade de revermos os conceitos de ocupação, valorizando espaços colaborativos, de convivência e interação.
                </p>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>




      <section className="bg-black text-white destaques-section">
        <MDBContainer >
          <MDBRow>
            <MDBCol md="7">
              <ul className="list-unstyled">
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
                  <li key={index} className="d-flex align-items-center mb-3">
                    <img
                      src={icon}
                      alt="Ícone"
                      className="me-3"
                    />
                    <span className='item-list'>{item}</span>
                  </li>
                ))}
              </ul>
            </MDBCol>
            <MDBCol md="5" style={{ width: '100%', height: 'auto' }}>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>





      {/* Sessão Obras */}
      <section className='obras-section'>
        <MDBContainer>
          <MDBRow className='justify-content-center gap-5'>
            <MDBCol md="5">
              <img
                src={escritorio}
                alt="Obras"
                width={'auto'}
                height={'100%'}
                className='mobile-hidden'
              />
            </MDBCol>
            <MDBCol md="6" className="text-Black">
              <h1 className="fw-bold text-black">Obras</h1>
              <img
                src={'/images/servicosImg/studio-conceito-servicos.jpg'}
                alt="Obras"
                className='desktop-hidden img-fluid img-obras-servicos'
              />
              <p className='text-large'>
                Nosso Departamento de Obras conta com grupos de <span className='fw-bold'> engenheiros </span> e <span className='fw-bold'> arquitetos </span>que executam e gerenciam nossos projetos e de terceiros.
              </p>
              <p className='text-large'>
                Nosso cuidado com o cronograma, com as normas, com o orçamento, com a qualidade dos serviços e o pós-obra é nosso compromisso real com os nossos clientes.
              </p>
              <p className='text-large'>
                Nosso comprometimento nos permite criar parcerias duradoras, Studio Conceito + Cliente, que nos possibilitam atender qualquer que seja sua demanda, desde pequenas intervenções à uma reestruturação completa.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* Sessão Planejamento e Coordenação */}
      <section className="bg-black text-white py-5 planejamento-section">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="7">
              <ul className="list-unstyled">
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
                  <li key={index} className="d-flex align-items-center mb-3">
                    <img
                      src={icon}
                      alt="Ícone"
                      className="me-3"
                    />
                    <span className='item-list'>{item}</span>
                  </li>
                ))}
              </ul>
            </MDBCol>
            <MDBCol md="5" style={{ width: '100%', height: 'auto' }}>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
};

export default Servicos;
