import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle } from 'mdb-react-ui-kit';
import Navbar from '../components/navbar';
import Footer from '../components/footer';


// Imagens dos posts
const placeholderImage = 'https://placehold.co/600x400';

const Home = () => {

  const posts = [
    { title: 'O futuro do escritório é híbrido!', date: 'abril 15, 2024', image: placeholderImage },
    { title: 'Tendências da arquitetura corporativa', date: 'abril 15, 2024', image: placeholderImage },
    { title: 'Turn Key ou chave na mão', date: 'abril 15, 2024', image: placeholderImage },
  ];

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section com vídeo de fundo */}
      <div className='hero-section position-relative'>
        <iframe
          width="100%"
          height="725"
          src="https://www.youtube.com/embed/nuiSe-N_DjA?autoplay=1&loop=1&controls=0&showinfo=0&modestbranding=1&si=-yfuEH7sa5y8dPHv"
          title="Background video"
          frameBorder="0"
          allow="autoplay"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>

        <div className='overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <MDBContainer className='text-center text-white'>
            <h1 className='display-4 fw-bold' style={{ color: "#ff6600" }}> <strong>ARQUITETURA</strong> </h1>
            <h4 className='fs-5'>DESDE 2009 </h4>
            <h1 style={{ fontWeight: "lighter", fontSize: "6rem" }}>CORPORATIVA</h1>
          </MDBContainer>
        </div>
      </div>

      {/* Seção de Equipe */}
      <div style={{ backgroundColor: "#000", color: "#fff" }} className="py-5">
        <MDBContainer>
          <MDBRow className="align-items-center">
            {/* Texto à esquerda */}
            <MDBCol md="5" className="position-relative">
              <div style={{
                borderLeft: "2px solid #fff",
                paddingLeft: "1rem"
              }}>
                <p className="mb-0" style={{fontSize:"1.5rem"}}>
                  Nossa equipe multidisciplinar, composta por <strong>Arquitetos</strong>, <strong>Engenheiros</strong> e <strong>Designers</strong>, apresenta as melhores soluções para <strong>projetos</strong> e <strong>obras</strong> corporativas.
                </p>
              </div>
            </MDBCol>

            {/* Imagem à direita */}
            <MDBCol md="5" className="p-0 justify-content-end" style={{marginLeft:"14vw"}}>

              <div style={{
                backgroundImage: "url('https://via.placeholder.com/800x400')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                minHeight: "250px"
              }}></div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>

      {/* Seção do blog */}
      <section className="py-5" style={{ backgroundColor:"#000"}}>
        <MDBContainer>
          <MDBRow>
            {posts.map((post, index) => (
              <MDBCol key={index} md="4" className="mb-4">
                <MDBCard 
                className="h-100 border-0"
                style={{ textDecoration: 'none' , border: 'none', backgroundColor:"#000"}}
                >
                  <MDBCardImage src={post.image} position="top" alt={post.title} />
                  <MDBCardBody>
                    <MDBCardTitle>
                      <p  style={{ textDecoration: 'none', color:"#ff6600" }}>
                        Artigos
                      </p>
                      
                    </MDBCardTitle>
                    <a href="#"  className="mt-15" style={{ textDecoration: 'none', color:"white", marginBottom:"4rem"}}>
                        {post.title}
                    </a>
                    <p className="mt-5" style={{color:"#ff6600"}}>
                      {post.date}
                    </p>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </section>

      {/* Seção de Contato */}
      <div style={{ backgroundColor: "#000", color: "#fff" }} className="py-5">
        <MDBContainer>
          <h2 className="text-start" style={{ color: "white" }}><strong>Contato</strong></h2>
          <MDBRow className="mt-4">
            {/* Coluna 1 - Telefone e Endereço */}
            <MDBCol md="4">
              <h5 style={{ color: "#ff6600" }}>Telefone</h5>
              <p>+55 11 9163-27532</p>
              <h5 style={{ color: "#ff6600" }}>Endereço</h5>
              <p>Rua Arizona, 1349 – 13º andar<br />Cidade Monções – São Paulo – SP</p>
            </MDBCol>

            {/* Coluna 2 - Emails e Trabalhe Conosco */}
            <MDBCol md="4">
              <h5 style={{ color: "#ff6600" }}>Email</h5>
              <p>comercial@sconceito.com.br</p>
              <h5 style={{ color: "#ff6600" }}>Email Fornecedores</h5>
              <p>sc@sconceito.com.br</p>
              <h5 style={{ color: "#ff6600" }}>Trabalhe Conosco</h5>
              <p>Envie seu currículo</p>
            </MDBCol>

            {/* Coluna 3 - Mapa */}
            <MDBCol md="4">
              <iframe
                title="Mapa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.7245645692594!2d-46.69436132451962!3d-23.581499559932194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57854ce46527%3A0xcfa948726dc8d8bc!2sR.%20Arizona%2C%201349%20-%2013º%20andar%2C%20Cidade%20Monções%20-%20São%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1694717385290!5m2!1spt-BR!2sbr"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
