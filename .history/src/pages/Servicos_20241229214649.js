import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

import icon from "../images/servicosImg/icontopico.png";
import servicos from "../images/servicosImg/serviços.png";
import escritorio from "../images/servicosImg/escritorioimg.png";
import bgsession2 from "../images/servicosImg/bgsession2.png";


const Servicos = () => {
  return (
    <div>
      <Navbar />

      {/* Seção de cabeçalho do serviço*/}
      <section className="bg-black text-white py-5">
        <MDBContainer>
          <MDBRow 
            className="align-items-center"
            style={{ height: '150px' }}
          >
            <MDBCol md="6">
              <h1 className="fw-bold">Serviços</h1>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* Sessão Projetar e Construir */}
      <section className="py-5 bg-white">
        <MDBContainer>
          <MDBRow className="align-items-center">
            <MDBCol md="6" className="mb-4">
              <h1 className="fw-bold mb-3">Projetar<br />e Construir</h1>
              <h3>
                Transformamos sonhos em projetos e materializamos projetos em patrimônio físico e tangível.
              </h3>
              <h3>
                Realizamos a Implantação de novos sites; Retrofit de imóvel (revitalização); Closeout (desocupação de imóveis).
              </h3>
              <h3>
                Trabalhamos no formato Turn Key ou por Gerenciamento.
              </h3>
              <h3>
                Entre em contato com o nosso time e fale da sua necessidade.
              </h3>
            </MDBCol>
            <MDBCol md="6">
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
      <section 
        style={{
          backgroundImage: `url("images/servicosImg/Background.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '5rem 0',
        }}
      >
        <MDBContainer>
          <div
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "2rem",
              width: "40%",
              left: "2rem",
              height: "auto",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            <h1 className="fw-bold">Projetos</h1>
            <h3>
              Nosso grande desafio é traduzir a imagem corporativa para a arquitetura, compreendendo o universo e a história de cada cliente. Priorizamos os colaboradores com o objetivo de aumentar a satisfação, bem estar e consequente elevação da produtividade.
            </h3>
            <h3>
              Encaramos o momento atual como um desafio e uma excelente oportunidade de revermos os conceitos de ocupação, valorizando espaços colaborativos, de convivência e interação.
            </h3>
          </div>
        </MDBContainer>
      </section>




      <section className="bg-black text-white py-5" style={{ backgroundImage: `url("images/servicosImg/Backgroundblack.png")`, backgroundSize: 'cover',
          backgroundPosition: 'center',}}>
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
                  "Ilustrações arquitetônicas | imagens 3D",
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
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </MDBCol>
            <MDBCol md="5" style={{ width: '100%', height: 'auto'}}>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>





      {/* Sessão Obras */}
      <section 
        style={{
          backgroundImage: `url(${bgsession2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '5rem 0',
        }}
      >
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <img 
                src={escritorio} 
                alt="Obras"  
              />
            </MDBCol>
            <MDBCol md="6" className="text-Black">
              <h1 className="fw-bold">Obras</h1>
              <h5 style={{marginBottom:"2rem", marginTop:"2rem"}}>
                Nosso Departamento de Obras conta com grupos de <strong> engenheiros </strong> e <strong> arquitetos </strong>que executam e gerenciam nossos projetos e de terceiros.
              </h5>
              <h5 style={{marginBottom:"2rem"}}>
                Nosso cuidado com o cronograma, com as normas, com o orçamento, com a qualidade dos serviços e o pós-obra é nosso compromisso real com os nossos clientes.
              </h5>
              <h5 style={{marginBottom:"2rem"}}>
                Nosso comprometimento nos permite criar parcerias duradoras, Studio Conceito + Cliente, que nos possibilitam atender qualquer que seja sua demanda, desde pequenas intervenções à uma reestruturação completa.
              </h5>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* Sessão Planejamento e Coordenação */}
      <section className="bg-black text-white py-5" style={{ backgroundImage: `url("images/servicosImg/finalimg.png")`, backgroundSize: 'cover',
          backgroundPosition: 'center',}}>
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
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </MDBCol>
            <MDBCol md="5" style={{ width: '100%', height: 'auto'}}>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <Footer />
    </div>
  );
};

export default Servicos;
