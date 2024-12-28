import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const placeholderImage = 'https://placehold.co/150x150'; // Placeholder das logos

const Clientes = () => {
  // Array de 30 imagens placeholders
  const logos = Array.from({ length: 30 }, () => placeholderImage);

  return (
    <div>
      <Navbar />
      {/* Cabeçalho semelhante ao Blog */}
      <section className="bg-black text-white py-5">
        <MDBContainer>
          <MDBRow className="align-items-center">
            <MDBCol md="6">
              <h1 className="fw-bold">Serviços</h1>
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
                src="https://placehold.co/300x200"
                alt="Clientes em destaque"
                style={{ maxWidth: '100%' }}
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* Grid de logos */}
      <section className="py-5">
        <MDBContainer>
          <MDBRow>
            {logos.map((logo, index) => (
              <MDBCol key={index} md="2" sm="4" xs="6" className="mb-4 d-flex justify-content-center">
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  style={{ maxWidth: '100px', maxHeight: '100px' }}
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
