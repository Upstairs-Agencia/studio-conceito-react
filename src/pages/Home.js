import React from 'react';
import { motion } from 'framer-motion';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
} from 'mdb-react-ui-kit';
import CasesCarousel from '../components/casesCarousel';
import { LuCircleArrowRight } from 'react-icons/lu';
import { HiOutlineChevronDown } from 'react-icons/hi2';
import BrandsCarousel from '../components/BrandsCarousel';
import imgesquerda from '../images/homeImg/Grupo-de-mascara-3-1.png';
import SeloGptw from '../images/selo-gptw.png';

// Variantes de animação
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: 'easeOut' } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Home = () => {
  const posts = [
    {
      title: 'O futuro do escritório é híbrido!',
      date: 'abril 15, 2024',
      image: 'images/homeImg/home3.png',
    },
    {
      title: 'Tendências da arquitetura corporativa',
      date: 'abril 15, 2024',
      image: 'images/homeImg/home4.png',
    },
    {
      title: 'Turn Key ou chave na mão',
      date: 'abril 15, 2024',
      image: 'images/homeImg/home5.png',
    },
  ];

  return (
    <div className="overflow-mobile-hidden">
      {/* Hero Section */}
      <motion.div
        className="hero-section"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="video-container">
          <iframe
            src="https://www.youtube-nocookie.com/embed/nuiSe-N_DjA?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&playsinline=1&playlist=nuiSe-N_DjA&rel=0&fs=0&disablekb=1"
            title="Background Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
        <motion.div className="overlay" variants={fadeInUp}>
          <MDBContainer className="text-white title-container-home">
            <motion.h1 className="hero-title" variants={fadeInUp}>
              ARQUITETURA
            </motion.h1>
            <div className="hero-subtitle-container">
              <motion.h4 className="hero-subtitle" variants={fadeInUp}>
                DESDE 2009
              </motion.h4>
              <motion.h1 className="hero-main-text" variants={fadeInUp}>
                CORPORATIVA
              </motion.h1>
            </div>
          </MDBContainer>
          <motion.div
            className="selo-gptw-container-home"
            whileHover={{ scale: 1.1 }}
            variants={fadeInUp}
          >
            <img
              src={SeloGptw}
              alt="Selo GPTW"
              width="120px"
              height="auto"
            />
          </motion.div>
          <motion.a
            href="#intro"
            className="scroll-button"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <HiOutlineChevronDown className="icon" />
          </motion.a>
        </motion.div>
        <div className="fade-overlay"></div>
      </motion.div>

      {/* Seção de Equipe */}
      <section className="bg-black" style={{ color: '#fff' }} id="intro">
        <MDBContainer fluid>
          <MDBRow className="align-items-center gap-0">
            <MDBCol
              md="6"
              className="position-relative intro-home-col d-flex justify-content-center align-items-center"
            >
              <motion.div
                className="intro-home-border"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }} 
                variants={slideInLeft}
                transition={{ duration: 2 }}
              >
                <p className="mb-0 intro-home-text">
                  Nossa equipe multidisciplinar, composta por{' '}
                  <strong>Arquitetos</strong>, <strong>Engenheiros</strong> e{' '}
                  <strong>Designers</strong>, apresenta as melhores soluções para{' '}
                  <strong>projetos</strong> e <strong>obras</strong> corporativas.
                </p>
              </motion.div>
            </MDBCol>
            <MDBCol md="6" className="p-0 justify-content-end">
              <motion.img
                src={imgesquerda}
                alt="grafismo"
                className="grafismo-1-img-home"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }} 
                variants={slideInRight}
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* Seção de Cases */}
      <section className="bg-black">
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }} 
                transition={{ duration: 1.5 }}
              >
                <CasesCarousel />
              </motion.div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* Seção Cuidamos Mais (wtmc) */}
      <section className="bg-black wtmc-section">
        <MDBContainer>
          <MDBRow className="justify-content-center align-items-center gap-5">
            <MDBCol md={4}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }} 
                transition={{ duration: 2 }}
              >
                <h1 className="wtmc-title">
                  Sim, <br />
                  cuidamos <br className="mobile-hidden" />
                  mais
                </h1>
                <p className="wtmc-description">
                  Nosso maior desafio é traduzir a imagem corporativa para a
                  arquitetura
                </p>
                <div className="wtmc-card">
                  <motion.a
                    href="/servicos"
                    className="btn-with-icon-animation wtmc-btn"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    Serviços <LuCircleArrowRight size={27} />
                  </motion.a>
                </div>
              </motion.div>
            </MDBCol>
            <MDBCol md={4}>
              <motion.div
                className="wtmc-card about-bkg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }} 
                transition={{ duration: 1 }}
              >
                <motion.a
                  href="/quem-somos"
                  className="btn-with-icon-animation wtmc-btn"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  Quem Somos <LuCircleArrowRight size={27} />
                </motion.a>
              </motion.div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* Brands Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }} 
        transition={{ duration: 1.5 }}
      >
        <BrandsCarousel />
      </motion.div>

      {/* Seção do blog */}
      <section
        style={{
          backgroundColor: '#000',
          paddingBottom: '6.5rem',
          paddingTop: '2rem',
        }}
      >
        <MDBContainer>
          <motion.h1
            className="text-center font-weight-bold default-title text-white blog-title mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }} 
            transition={{ duration: 1.5 }}
          >
            Blog
          </motion.h1>
          <MDBRow>
            {posts.map((post, index) => (
              <MDBCol key={index} md="4" className="mb-4">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }} 
                  transition={{ duration: 1.5 }}
                >
                  <MDBCard
                    className="h-100 border-0"
                    style={{
                      textDecoration: 'none',
                      border: 'none',
                      backgroundColor: '#000',
                    }}
                  >
                    <MDBCardImage
                      src={post.image}
                      position="top"
                      alt={post.title}
                    />
                    <MDBCardBody className="m-0 p-0 blog-post-body">
                      <MDBCardTitle>
                        <p
                          style={{
                            textDecoration: 'none',
                            color: '#ff6600',
                            fontWeight: 300,
                            textTransform: 'uppercase',
                            fontSize: '1rem',
                          }}
                        >
                          Artigos
                        </p>
                      </MDBCardTitle>
                      <a href="#!" className="blog-home-title">
                        {post.title}
                      </a>
                      <p style={{ color: '#ff6600', fontSize: '0.8rem' }}>
                        {post.date}
                      </p>
                    </MDBCardBody>
                  </MDBCard>
                </motion.div>
              </MDBCol>
            ))}
          </MDBRow>
          <motion.a
            className="btn-with-icon-animation btn-blog"
            href="https://sconceito.com.br/cases/"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            Ver todos <LuCircleArrowRight size={27} />
          </motion.a>
        </MDBContainer>
      </section>

      {/* Seção de Contato */}
      <div style={{ backgroundColor: '#000' }} className="py-5">
        <MDBContainer>
          <motion.h1
            className="text-start default-title text-white contato-home-title"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }} 
            transition={{ duration: 1.5 }}
          >
            Contato
          </motion.h1>
          <MDBRow style={{ marginTop: '5rem' }}>
            <MDBCol md="4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }} 
                transition={{ duration: 1.5 }}
              >
                <h5 className="contact-option-title">Telefone</h5>
                <p className="contact-option-description text-white">
                  <a
                    href="https://wa.me/5511916327532"
                    target="_blank"
                    rel="noreferrer"
                  >
                    +55 11 9163-27532
                  </a>
                </p>
                <h5 className="contact-option-title">Endereço</h5>
                <p
                  className="contact-option-description text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  <a
                    href="https://www.google.com/maps/place/R.+Arizona,+1349+-+13%C2%BA+andar+-+Cidade+Mon%C3%A7%C3%B5es,+S%C3%A3o+Paulo+-+SP,+04567-003/@-23.6107968,-46.6964559,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce50cbee905755:0x1f0707eec8c48307!8m2!3d-23.6107968!4d-46.693881!16s%2Fg%2F11qpkl_lfp?entry=ttu"
                  >
                    Rua Arizona, 1349 – 13º andar
                    <br />
                    Cidade Monções – São Paulo – SP
                  </a>
                </p>
              </motion.div>
            </MDBCol>
            <MDBCol md="4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }} 
                transition={{ duration: 1.5 }}
              >
                <h5 className="contact-option-title">Email</h5>
                <p className="contact-option-description text-white">
                  <a href="mailto:comercial@sconceito.com.br">
                    comercial@sconceito.com.br
                  </a>
                </p>
                <h5 className="contact-option-title">Email Fornecedores</h5>
                <p className="contact-option-description text-white">
                  <a href="mailto:sc@sconceito.com.br">sc@sconceito.com.br</a>
                </p>
                <h5 className="contact-option-title">Trabalhe Conosco</h5>
                <p
                  className="contact-option-description text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  <a href="https://studioconceito.vagas.solides.com.br/">
                    Envie seu currículo
                  </a>
                </p>
              </motion.div>
            </MDBCol>
            <MDBCol md="4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }} 
                transition={{ duration: 1.5 }}
              >
                <iframe
                  title="Mapa"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.7245645692594!2d-46.69436132451962!3d-23.581499559932194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57854ce46527%3A0xcfa948726dc8d8bc!2sR.%20Arizona%2C%201349%20-%2013%C2%BA%20andar%2C%20Cidade%20Mon%C3%A7%C3%B5es%20-%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1694717385290!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="300px"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </motion.div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
};

export default Home;
