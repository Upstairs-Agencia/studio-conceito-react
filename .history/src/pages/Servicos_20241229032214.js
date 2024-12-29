import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const placeholderImage1 = 'https://placehold.co/607x500'; // Imagem ao lado do texto
const placeholderImage2 = 'https://placehold.co/1920x570'; // Imagem de fundo
const placeholderTopicImage = 'https://placehold.co/50x50'; // Placeholder para os ícones

const Servicos = () => {
  return (
    <div>
      <Navbar />

      {/* Seção de cabeçalho do Blog */}
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
                src={placeholderImage1} 
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
          backgroundImage: `url(${placeholderImage2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '5rem 0',
        }}
      >
        <MDBContainer>
          {/* Retângulo com texto */}
          <div
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "2rem",
              width: "40%",
              left: "2rem", // Margem à esquerda
              height: "auto", // Aumenta a altura com base no conteúdo
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)", // Para criar um efeito de profundidade
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

      {/* Sessão de tópicos com fundo preto */}
      <section className="bg-black text-white py-5">
        <MDBContainer>
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
                      src={placeholderTopicImage} 
                      alt="Ícone" 
                      className="me-3" 
                      style={{ width: '50px', height: '50px' }} 
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </MDBCol>
            <MDBCol md="5">
              <img 
                src={placeholderImage1} 
                alt="Imagem de composição" 
                style={{ width: '100%', height: 'auto' }} 
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <Footer />
    </div>
  );
};

export default Servicos;
