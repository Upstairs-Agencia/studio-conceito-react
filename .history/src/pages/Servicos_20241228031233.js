import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";

const Servicos = () => {
  // Placeholder de imagens
  const placeholderImage1 = "https://via.placeholder.com/607x500"; // Imagem ao lado do texto
  const placeholderImage2 = "https://via.placeholder.com/1920x1080"; // Imagem de fundo

  return (
    <>
      {/* Navbar */}
      <header style={{ backgroundColor: "black", color: "white", padding: "2rem 0", textAlign: "center" }}>
        <h1 className="fw-bold">Serviços</h1>
      </header>

      {/* Seção Projetar e Construir */}
      <section style={{ backgroundColor: "white", padding: "5rem 0" }}>
        <MDBContainer className="d-flex flex-column flex-lg-row align-items-center">
          {/* Texto */}
          <div style={{ flex: "1", marginBottom: "2rem" }}>
            <h2 className="fw-bold">Projetar<br />e Construir</h2>
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
          </div>

          {/* Imagem */}
          <div style={{ flex: "1", textAlign: "center" }}>
            <img
              src={placeholderImage1}
              alt="Projetar e Construir"
              style={{
                width: "100%",
                maxWidth: "607px",
                height: "500px",
                objectFit: "cover",
                marginBottom: "2rem",
              }}
            />
          </div>
        </MDBContainer>
      </section>

      {/* Seção Projetos */}
      <section
        style={{
          backgroundImage: `url(${placeholderImage2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "5rem 0",
          position: "relative",
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
      </section>
    </>
  );
};

export default Servicos;
