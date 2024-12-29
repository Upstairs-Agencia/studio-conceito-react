import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const placeholderImage1 = 'https://placehold.co/607x500'; // Imagem ao lado do texto
const placeholderImage2 = 'https://placehold.co/1920x1080'; // Imagem de fundo

const Servicos = () => {
  return (
    <div>
      <Navbar />
      
      {/* Sessão preta com título */}
      <section className="bg-black text-white py-5">
        <MDBContainer>
          <h1 className="fw-bold">Serviços</h1>
        </MDBContainer>
      </section>
      
      {/* Sessão Projetar e Construir */}
      <section className="py-5 bg-white">
        <MDBContainer>
          <MDBRow className="align-items-center">
            <MDBCol md="6" className="mb-4">
              <h2 className="fw-bold mb-3">Projetar<br />e Construir</h2>
              <p>
                Transformamos sonhos em projetos e materializamos projetos em patrimônio físico e tangível.
              </p>
              <p>
                Realizamos a Implantação de novos sites; Retrofit de imóvel (revitalização); Closeout (desocupação de imóveis).
              </p>
              <p>
                Trabalhamos no formato Turn Key ou por Gerenciamento.
              </p>
              <p>
                Entre em contato com o nosso time e fale da sua necessidade.
              </p>
            </MDBCol>
            <MDBCol md="6">
              <img 
                src={placeholderImage1} 
                alt="Projetar e Construir" 
                style={{ width: '100%', height: 'auto', marginBottom: '2rem' }} 
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
              width: "30%",
              position: "absolute",
              top: "-3rem", // Faz o retângulo subir sobre a imagem de fundo
              left: "1rem", // Margem à esquerda
              height: "auto", // Aumenta a altura com base no conteúdo
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)", // Para criar um efeito de profundidade
            }}
          >
            <h2 className="fw-bold">Projetos</h2>
            <p>
              Nosso grande desafio é traduzir a imagem corporativa para a arquitetura, compreendendo o universo e a história de cada cliente. Priorizamos os colaboradores com o objetivo de aumentar a satisfação, bem estar e consequente elevação da produtividade.
            </p>
            <p>
              Encaramos o momento atual como um desafio e uma excelente oportunidade de revermos os conceitos de ocupação, valorizando espaços colaborativos, de convivência e interação.
            </p>
          </div>
        </MDBContainer>
        </MDBContainer>
      </section>

      <Footer />
    </div>
  );
};

export default Servicos;
