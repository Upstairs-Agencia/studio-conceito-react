import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { motion } from "framer-motion";
import backgroundMap from "../images/ContactBg.png";

// Variantes para animações
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactPage = () => {
  return (
    <motion.div
      className="overflow-mobile-hidden"
      style={{
        backgroundImage: `url(${backgroundMap})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <MDBContainer>
        <MDBRow className="align-items-center">
          <MDBCol md={9} className="bg-black contato-info-container">
            <motion.h1
              className="text-start default-title text-white"
              variants={itemVariants}
            >
              Contato
            </motion.h1>
            <MDBRow className="align-items-center justify-content-between">
              {/* Coluna 1 - Telefone e Endereço */}
              <MDBCol md="6">
                <motion.div variants={itemVariants}>
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
                  <p className="contact-option-description text-white">
                    <a href="tel:1123647151">+55 11 2364-7151</a>
                  </p>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <h5 className="contact-option-title">Email</h5>
                  <p className="contact-option-description text-white">
                    <a
                      href="mailto:comercial@sconceito.com.br"
                      target="_blank"
                      rel="noreferrer"
                    >
                      comercial@sconceito.com.br
                    </a>
                  </p>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <h5 className="contact-option-title">Endereço</h5>
                  <p className="contact-option-description text-white">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.google.com/maps/place/R.+Arizona,+1349+-+13%C2%BA+andar+-+Cidade+Mon%C3%A7%C3%B5es,+S%C3%A3o+Paulo+-+SP,+04567-003/@-23.6107968,-46.6964559,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce50cbee905755:0x1f0707eec8c48307!8m2!3d-23.6107968!4d-46.693881!16s%2Fg%2F11qpkl_lfp?entry=ttu"
                    >
                      Rua Arizona, 1349 – 13º andar
                      <br />
                      Cidade Monções – São Paulo – SP
                    </a>
                  </p>
                </motion.div>
              </MDBCol>

              {/* Coluna 2 - Emails e Trabalhe Conosco */}
              <MDBCol md="5">
                <motion.div variants={itemVariants}>
                  <h5 className="contact-option-title">Email Fornecedores</h5>
                  <p className="contact-option-description text-white">
                    <a href="mailto:sc@sconceito.com.br">sc@sconceito.com.br</a>
                  </p>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <h5 className="contact-option-title">Trabalhe Conosco</h5>
                  <p className="contact-option-description text-white">
                    <a
                      href="https://studioconceito.vagas.solides.com.br/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Envie seu currículo
                    </a>
                  </p>
                </motion.div>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </motion.div>
  );
};

export default ContactPage;
