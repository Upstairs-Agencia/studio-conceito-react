import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle } from 'mdb-react-ui-kit';
import imgesquerda from '../images/homeImg/Grupo-de-mascara-3-1.png';
import CasesCarousel from '../components/casesCarousel';
import { LuCircleArrowRight } from "react-icons/lu";
import BrandsCarousel from '../components/BrandsCarousel';


const Home = () => {

  const posts = [
    { title: 'O futuro do escritório é híbrido!', date: 'abril 15, 2024', image: 'images/homeImg/home3.png' },
    { title: 'Tendências da arquitetura corporativa', date: 'abril 15, 2024', image: 'images/homeImg/home4.png' },
    { title: 'Turn Key ou chave na mão', date: 'abril 15, 2024', image: 'images/homeImg/home5.png' },
  ];

  return (
    <>

      <div className="hero-section">
        <div className="video-container">
          <iframe
            src="https://www.youtube-nocookie.com/embed/nuiSe-N_DjA?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&playsinline=1&playlist=nuiSe-N_DjA&rel=0&fs=0&disablekb=1"
            title="Background Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>


        </div>

        <div className="overlay">
          <MDBContainer className="text-white">
            <h1 className="hero-title">ARQUITETURA</h1>
            <div className='hero-subtitle-container'>
              <h4 className="hero-subtitle">DESDE 2009</h4>
              <h1 className="hero-main-text">CORPORATIVA</h1>
            </div>
          </MDBContainer>
        </div>
        <div className="fade-overlay"></div>
      </div>


      {/* Seção de Equipe */}
      <section className='bg-black' style={{ color: "#fff" }}>
        <MDBContainer fluid>
          <MDBRow className="align-items-center gap-0">
            {/* Texto à esquerda */}
            <MDBCol md="6" className="position-relative intro-home-col d-flex justify-content-center align-items-center">
              <div className="intro-home-border">
                <p className="mb-0 intro-home-text">
                  Nossa equipe multidisciplinar, composta por <strong>Arquitetos</strong>, <strong>Engenheiros</strong> e <strong>Designers</strong>, apresenta as melhores soluções para <strong>projetos</strong> e <strong>obras</strong> corporativas.
                </p>
              </div>
            </MDBCol>

            <MDBCol md="6" className="p-0 justify-content-end">

              <img src={imgesquerda} alt='grafismo' className='grafismo-1-img-home' />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* Seção de Cases */}
      <section className='bg-black'>
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol>
              <CasesCarousel />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* Seção Cuidamos Mais (wtmc)*/}
      <section className='bg-black wtmc-section'>
        <MDBContainer>
          <MDBRow className='justify-content-center align-items-center gap-5'>
            <MDBCol md={4}>
              <h1 className='wtmc-title'>Sim, <br />
                cuidamos <br />
                mais
              </h1>
              <p className='wtmc-description'>
                Nosso maior desafio é traduzir a imagem corporativa para a arquitetura
              </p>
              <div className='wtmc-card'>
                <a className='btn-with-icon-animation wtmc-btn'>Serviços <LuCircleArrowRight size={27} /></a>
              </div>
            </MDBCol>
            <MDBCol md={4}>
              <div className='wtmc-card about-bkg'>
                <a className='btn-with-icon-animation wtmc-btn'>Quem Somos <LuCircleArrowRight size={27} /></a>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <BrandsCarousel />

      {/* Seção do blog */}
      <section className="py-5" style={{ backgroundColor: "#000" }}>
        <MDBContainer>
          <h1 className="text-center font-weight-bold default-title text-white blog-title mb-4">Blog</h1>
          <MDBRow>
            {posts.map((post, index) => (
              <MDBCol key={index} md="4" className="mb-4">
                <MDBCard
                  className="h-100 border-0"
                  style={{ textDecoration: 'none', border: 'none', backgroundColor: "#000" }}
                >
                  <MDBCardImage src={post.image} position="top" alt={post.title} />
                  <MDBCardBody className='m-0 p-0 blog-post-body'>
                    <MDBCardTitle>
                      <p style={{ textDecoration: 'none', color: "#ff6600", fontWeight: 300, textTransform: 'uppercase', fontSize: '1rem' }}>
                        Artigos
                      </p>

                    </MDBCardTitle>
                    <a href="#" className="mt-15" style={{ height: '5rem', display: 'block', textDecoration: 'none', color: "white", fontWeight: 200, fontSize: '1.1rem', paddingRight: '0.7rem' }}>
                      {post.title}
                    </a>
                    <p style={{ color: "#ff6600", fontSize: '0.8rem' }}>
                      {post.date}
                    </p>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))}
          </MDBRow>
          <a className="btn-with-icon-animation btn-blog" href="https://sconceito.com.br/cases/">Ver todos <LuCircleArrowRight size={27} /></a>
        </MDBContainer>
      </section>

      {/* Seção de Contato */}
      <div style={{ backgroundColor: "#000"}} className="py-5">
        <MDBContainer>
          <h1 className="text-start default-title text-white">Contato</h1>
          <MDBRow style={{marginTop: '5rem'}}>
            {/* Coluna 1 - Telefone e Endereço */}
            <MDBCol md="4">
              <h5 className='contact-option-title'>Telefone</h5>
              <p className='contact-option-description text-white'>+55 11 9163-27532</p>
              <h5 className='contact-option-title'>Endereço</h5>
              <p className='contact-option-description text-white'>Rua Arizona, 1349 – 13º andar<br />Cidade Monções – São Paulo – SP</p>
            </MDBCol>

            {/* Coluna 2 - Emails e Trabalhe Conosco */}
            <MDBCol md="4">
              <h5 className='contact-option-title'>Email</h5>
              <p className='contact-option-description text-white'>comercial@sconceito.com.br</p>
              <h5 className='contact-option-title'>Email Fornecedores</h5>
              <p className='contact-option-description text-white'>sc@sconceito.com.br</p>
              <h5 className='contact-option-title'>Trabalhe Conosco</h5>
              <p className='contact-option-description text-white'>Envie seu currículo</p>
            </MDBCol>

            {/* Coluna 3 - Mapa */}
            <MDBCol md="4">
              <iframe
                title="Mapa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.7245645692594!2d-46.69436132451962!3d-23.581499559932194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57854ce46527%3A0xcfa948726dc8d8bc!2sR.%20Arizona%2C%201349%20-%2013º%20andar%2C%20Cidade%20Monções%20-%20São%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1694717385290!5m2!1spt-BR!2sbr"
                width="100%"
                height="300px"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>

    </>
  );
};

export default Home;
