import React from 'react';
import Navbar from '../components/navbar'; // Importando o componente Navbar
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { FaBullseye, FaEye, FaHeart } from 'react-icons/fa';

export default function QuemSomos() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Quem Somos Section */}
      <section className='py-5'>
        <MDBContainer>
          <MDBRow className='align-items-center'>
            <MDBCol md='6'>
              <img
                src='https://via.placeholder.com/600x400'
                alt='Studio Conceito'
                className='img-fluid'
              />
            </MDBCol>
            <MDBCol md='6'>
              <h2 className='fw-bold mb-4'>Studio Conceito</h2>
              <p>
                A Studio Conceito Arquitetura foi <strong>fundada em 2009</strong> e conta com uma equipe altamente capacitada e com grande experiência na área corporativa.
              </p>
              <p>
                O <strong>Atendimento Personalizado</strong> é o grande foco de nossa empresa, visando sempre garantir a satisfação e a consequente fidelização de nossos clientes.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* Sócios Section */}
      <section className='py-5 bg-dark text-white'>
        <MDBContainer>
          <h2 className='text-center fw-bold mb-5'>Sócios</h2>
          <MDBRow className='text-center'>
            <MDBCol md='6' className='mb-4'>
              <div className='team-member'>
                <img
                  src='https://via.placeholder.com/400x400'
                  alt='Arq. Cristina Castilho'
                  className='img-fluid mb-2'
                />
                <h4 className='fw-bold'>Arq. Cristina Castilho</h4>
                <p>CEO | Sócia fundadora</p>
              </div>
            </MDBCol>
            <MDBCol md='6' className='mb-4'>
              <div className='team-member'>
                <img
                  src='https://via.placeholder.com/400x400'
                  alt='Arq. Gabriel Castilho'
                  className='img-fluid mb-2'
                />
                <h4 className='fw-bold'>Arq. Gabriel Castilho</h4>
                <p>COO | Sócio fundador</p>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* Missão, Visão e Valores Section */}
      <section className='py-5 bg-white'>
        <MDBContainer style={{ display:"flex", flexDirection:"row" }}>
          <MDBRow>
            {/* Título e Subtítulo */}
            <MDBCol md='6'>
              <h2 className='fw-bold mb-3'>Atendemos em todo Brasil</h2>
              <p className='mb-2'>
                <strong>
                  Com uma equipe multidisciplinar e altamente capacitada, composta por arquitetos, engenheiros e designers, apresentamos as melhores soluções para as demandas de nossos clientes, tanto na área de <span className='fw-bold'>projeto</span> como de <span className='fw-bold'>obra</span>.
                </strong>
              </p>
              <p>
                Adequamos nossos times às necessidades de cada solicitação, sejam elas projetos, gerenciamento e execução de obra. Do início ao fim, ficamos ao lado do cliente <span className='fw-bold'>cuidando de todos os detalhes!</span>
              </p>
            </MDBCol>

            {/* Ícones e Descrições */}
            <MDBCol md='6'>
              <MDBRow className='text-center'>
                {/* Missão */}
                <MDBCol md='4'>
                  <div className='mb-3'>
                    <FaBullseye size={40} color="#3d7cc9" />
                  </div>
                  <h5 className='fw-bold'>Missão</h5>
                  <p>
                    Apresentar as melhores soluções para as demandas dos nossos clientes, tanto na área de projeto como de obra.
                  </p>
                </MDBCol>
                {/* Visão */}
                <MDBCol md='4'>
                  <div className='mb-3'>
                    <FaEye size={40} color="#3d7cc9" />
                  </div>
                  <h5 className='fw-bold'>Visão</h5>
                  <p>
                    Queremos ser reconhecidos como a empresa que mais cuida de seus clientes e colaboradores, próximos e atentos a todos os detalhes.
                  </p>
                </MDBCol>
                {/* Valores */}
                <MDBCol md='4'>
                  <div className='mb-3'>
                    <FaHeart size={40} color="#3d7cc9" />
                  </div>
                  <h5 className='fw-bold'>Valores</h5>
                  <p>
                    Ética, Transparência, Respeito à Vida, Inovação, Paixão, Excelência, Flexibilidade, Sustentabilidade, Equilíbrio e Fidelização.
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}
