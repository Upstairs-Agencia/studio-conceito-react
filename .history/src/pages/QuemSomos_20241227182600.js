export default function QuemSomos() { return <h1 style={{ textAlign: 'center' }}>Quem Somos</h1>; }
import React from 'react';
import Navbar from '../components/navbar'; // Importando o componente Navbar
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';

function AboutUs() {
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
                                className='img-fluid rounded' />
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
                                    src='https://via.placeholder.com/300x300'
                                    alt='Arq. Cristina Castilho'
                                    className='img-fluid rounded-circle mb-3' />
                                <h4 className='fw-bold'>Arq. Cristina Castilho</h4>
                                <p>CEO | Sócia fundadora</p>
                                <a href='#' className='text-white'>
                                    <i className='fab fa-linkedin fa-lg'></i>
                                </a>
                            </div>
                        </MDBCol>
                        <MDBCol md='6' className='mb-4'>
                            <div className='team-member'>
                                <img
                                    src='https://via.placeholder.com/300x300'
                                    alt='Arq. Gabriel Castilho'
                                    className='img-fluid rounded-circle mb-3' />
                                <h4 className='fw-bold'>Arq. Gabriel Castilho</h4>
                                <p>COO | Sócio fundador</p>
                                <a href='#' className='text-white'>
                                    <i className='fab fa-linkedin fa-lg'></i>
                                </a>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
            {/* Missão, Visão e Valores Section */}
            <section className='py-5'>
                <MDBContainer>
                    <h2 className='text-center fw-bold mb-5'>Atendemos em todo Brasil</h2>
                    <MDBRow>
                        <MDBCol md='6'>
                            <p>
                                Com uma equipe multidisciplinar e altamente capacitada, composta por arquitetos, engenheiros e designers, apresentamos as melhores soluções para os
                                demandas de nossos clientes, tanto na área de projeto como de obra.
                            </p>
                            <p>
                                Do início ao fim, ficamos ao lado do cliente cuidando de todos os detalhes!
                            </p>
                        </MDBCol>
                        <MDBCol md='6'>
                            <MDBRow className='text-center'>
                                <MDBCol md='4'>
                                    <div className='icon mb-3'>
                                        <i className='fas fa-bullseye fa-2x'></i>
                                    </div>
                                    <h5>Missão</h5>
                                    <p>Apresentar as melhores soluções para as demandas dos nossos clientes.</p>
                                </MDBCol>
                                <MDBCol md='4'>
                                    <div className='icon mb-3'>
                                        <i className='fas fa-eye fa-2x'></i>
                                    </div>
                                    <h5>Visão</h5>
                                    <p>Queremos ser referencia lider  Brasil  internacional com valores sucesso.</p>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>

                    </MDBRow>

                </MDBContainer>
            </section>

        </>
    )

}
