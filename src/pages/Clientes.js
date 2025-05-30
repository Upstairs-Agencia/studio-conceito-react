import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; // Efeito de blur ao carregar
import imagemColada from "../images/clientesImg/Imagem colada.png";

// Animação de fade-in e scale
const fadeInScale = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

const Clientes = () => {
  // Estado para armazenar se é mobile ou não
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Atualiza o estado quando a tela for redimensionada
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lista de logos organizadas na ordem das imagens
  const logos = [
    "baxter", "sulamerica", "ifood", "ibm", "d-basf",
    "saab", "bacardi", "nouryon", "astrazeneca", "kyndryl",
    "track", "itau", "isa", "cbre", "arthrex",
    "ibope", "concentrix", "aj1", "onesubsea", "chep",
    "ajinomoto", "teamcreat", "medartis", "pinheiro", "gamesa",
    "gruposbf", "wework", "gallagher", "hrs", "pirelli"
  ];

  return (
    <div className="overflow-mobile-hidden">
      {/* Cabeçalho */}
      <section className="bg-black text-white page-header-client">
        <MDBContainer>
          <MDBRow className="align-items-center">
            <MDBCol md="6">
              <h1 className="fw-bold">Clientes</h1>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* Seção com texto e imagem */}
      <section className="py-5 bg-white intro-page-client" style={{ overflow: "hidden" }}>
        <MDBContainer>
          <MDBRow className="align-items-center">
            <MDBCol md="6">
              <motion.p
                className="text-large"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInScale}
              >
                Valorizamos muito nossos clientes e, foi baseado no compromisso com a{" "}
                <span className="fw-bold">qualidade</span> e{" "}
                <span className="fw-bold">responsabilidade</span> com o conteúdo e informação, que desenvolvemos projetos para grandes empresas.
              </motion.p>
            </MDBCol>
            <MDBCol md="6">
              <motion.img
                src={imagemColada}
                alt="Clientes em destaque"
                width={"700px"}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInScale}
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* Grid de logos */}
      <section className="py-5 bg-white">
        <MDBContainer fluid>
          <MDBRow className="justify-content-center">
            {logos.map((logo, index) => (
              <MDBCol
                key={index}
                md="2" // 5 por linha no desktop (12/2 = 6 logos por linha)
                className={`mb-4 d-flex justify-content-center overflow-mobile-hidden client-collumn ${isMobile ? "col-6" : ""}`}
              >
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInScale}
                >
                  <LazyLoadImage
                    src={`images/clientesImg/${logo}.png`}
                    alt={`Logo ${logo}`}
                    width={"100%"}
                    height={"auto"}
                    effect="blur"
                    className="brand-client"
                    style={{
                      backgroundColor: "#fff",
                      border: "none",
                      padding: "1rem",
                    }}
                  />
                </motion.div>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
};

export default Clientes;
