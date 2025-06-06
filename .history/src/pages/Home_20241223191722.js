import React from 'react';
import Navbar from '../components/navbar'; // Importando o componente Navbar
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className='hero-section position-relative'>
        <img
          src='https://via.placeholder.com/1920x1080'
          alt='Hero Background'
          className='w-100'
          style={{ maxHeight: '100vh', objectFit: 'cover' }}
        />

        <div className='overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <MDBContainer className='text-center text-white'>
            <h1 className='display-4 fw-bold'>Arquitetura Corporativa</h1>
            <p className='fs-5'>Desde 2009 transformando espaços em soluções inovadoras.</p>
            <MDBBtn color='light' className='rounded-pill px-5 py-3 mt-3'>Saiba mais</MDBBtn>
          </MDBContainer>
        </div>
      </div>

      {/* Sobre Nós */}
      <section className='py-5'>
        <MDBContainer>
          <MDBRow className='align-items-center'>
            <MDBCol md='6'>
              <img
                src='https://via.placeholder.com/600x400'
                alt='Sobre nós'
                className='img-fluid rounded'
              />
            </MDBCol>
            <MDBCol md='6'>
              <h2 className='fw-bold mb-4'>Quem Somos</h2>
              <p>
                Com mais de uma década de experiência, somos líderes em arquitetura corporativa, oferecendo projetos que combinam inovação e funcionalidade.
              </p>
              <MDBBtn color='dark' className='rounded-pill px-4 py-2 mt-3'>Conheça mais</MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* Serviços */}
      <section className='py-5 bg-light'>
        <MDBContainer>
          <h2 className='text-center fw-bold mb-5'>Nossos Serviços</h2>
          <MDBRow className='text-center'>
            {['Consultoria', 'Design de Interiores', 'Projetos Executivos'].map((service, index) => (
              <MDBCol md='4' key={index} className='mb-4'>
                <div className='service-card p-4 bg-white shadow-sm rounded'>
                  <h4 className='fw-bold'>{service}</h4>
                  <p>Descrição breve do serviço oferecido pela empresa.</p>
                </div>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </section>

      {/* Contato */}
      <section className='py-5'>
        <MDBContainer>
          <MDBRow>
            <MDBCol md='6'>
              <h2 className='fw-bold mb-4'>Entre em Contato</h2>
              <p>Estamos prontos para transformar sua visão em realidade. Fale conosco e descubra como podemos ajudar!</p>
              <MDBBtn color='dark' className='rounded-pill px-4 py-2 mt-3'>Fale conosco</MDBBtn>
            </MDBCol>
            <MDBCol md='6'>
              <img
                src='https://via.placeholder.com/600x400'
                alt='Contato'
                className='img-fluid rounded'
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
};

export default Home;
