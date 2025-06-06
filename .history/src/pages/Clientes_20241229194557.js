import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import imagemColada from '../images/clientesImg/Imagem colada.png';

const Clientes = () => {
  // Array com o nome das logos
  const logos = [
    'aj1', 'ajinomoto', 'arthrex', 'astrazenec', 'bacardi', 'baxter',
    'cbre', 'chep', 'concentri', 'd-basp', 'gallagher', 'gamesa',
    'gruposbf', 'hrs', 'ibm', 'ibope', 'ifood', 'isa', 'itau', 'kyndryl',
    'medartis', 'nouryoi', 'onesubs', 'pinheiro', 'pirelli', 'saae',
    'sulamerica', 'teamcreat', 'track', 'wework'
  ];

  return (
    <div>
      <Navbar />
      {/* Cabeçalho semelhante ao Blog */}
      <section className="bg-black text-white py-5">
        <MDBContainer>
          <MDBRow className="align-items-center">
            <MDBCol md="6">
              <h1 className="fw-bold">Clientes</h1>
            </MDBCol>
            <MDBCol md="6" className="text-end">
              <img
                src="https://placehold.co/200x150" // Imagem para o padrão gráfico
                alt="Padrão gráfico"
                style={{ maxWidth: '200px', marginRight: '4rem' }}
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* Seção com texto e imagem */}
      <section className="py-5 bg-white">
        <MDBContainer>
          <MDBRow className="align-items-center">
            <MDBCol md="8">
              <p className="fw-bold text-muted">
                Valorizamos muito nossos clientes e, foi baseado no compromisso com a qualidade e responsabilidade
                com o conteúdo e informação, que desenvolvemos projetos para grandes empresas.
              </p>
            </MDBCol>
            <MDBCol md="4">
              <img
                src={imagemColada}
                alt="Clientes em destaque"
                style={{ maxWidth: '100%' }}
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* Grid de logos */}
      <section className="py-5 bg-white">
        <MDBContainer>
          <MDBRow>
            {logos.map((logo, index) => (
              <MDBCol
                key={index}
                md="2" // 5 colunas no grid
                sm="4"
                xs="6"
                className="mb-4 d-flex justify-content-center"
              >
                <img
                  src={`images/clientesImg/${logo}.png`}
                  alt={`Logo ${logo}`}
                  style={{
                    width: '188px',
                    height: '126px',
                    backgroundColor: '#fff',
                    border: 'none',
                    padding: '1rem'
                  }}
                />
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </section>

      <Footer />
    </div>
  );
};

export default Clientes;
