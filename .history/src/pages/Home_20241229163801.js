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

      {/* Hero Section com vídeo de fundo */}
      <div className='hero-section position-relative'>
      <iframe 
        width="1920" 
        height="1080" 
        src="https://www.youtube.com/embed/nuiSe-N_DjA?si=-yfuEH7sa5y8dPHv" 
        title="Background video" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>

      </iframe>

        <div className='overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <MDBContainer className='text-center text-white'>
            <h1 className='display-4 fw-bold' style={{color:"#ff6600"}}> <strong>ARQUITETURA</strong> </h1>
            <h4 className='fs-5'>DESDE 2009 </h4>
            <p className='fs-5 ' style={{fontWeight:"lighter"}}>CORPORATIVA</p>
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
