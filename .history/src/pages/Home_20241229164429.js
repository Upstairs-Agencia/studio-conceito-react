import React from 'react';
import Navbar from '../components/navbar'; // Importando o componente Navbar
import Footer from '../components/footer';
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
        width="1931" 
        height="990" 
        src="https://www.youtube.com/embed/nuiSe-N_DjA?si=-yfuEH7sa5y8dPHv" 
        title="Background video" 
        frameborder="0" 
        allow="autoplay" 
        referrerpolicy="strict-origin-when-cross-origin" 
        >

      </iframe>

        <div className='overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <MDBContainer className='text-center text-white'>
            <h1 className='display-4 fw-bold' style={{color:"#ff6600"}}> <strong>ARQUITETURA</strong> </h1>
            <h4 className='fs-5'>DESDE 2009 </h4>
            <h1  style={{fontWeight:"lighter", fontSize:"6rem"}}>CORPORATIVA</h1>
          </MDBContainer>
        </div>
      </div>

      <Footer/>

    </>
  );
};

export default Home;
