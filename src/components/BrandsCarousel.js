import React, { useState, useEffect } from "react";
import { MDBContainer, MDBCol } from "mdb-react-ui-kit";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { LuCircleArrowRight } from "react-icons/lu";

const brands = [
    { name: "AJ1", logo: "aj1.png" },
    { name: "Ajinomoto", logo: "ajinomoto.png" },
    { name: "Arthrex", logo: "arthrex.png" },
    { name: "AstraZeneca", logo: "astrazeneca.png" },
    { name: "Bacardi", logo: "bacardi.png" },
    { name: "Baxter", logo: "baxter.png" },
    { name: "CBRE", logo: "cbre.png" },
    { name: "CHEP", logo: "chep.png" },
    { name: "Concentrix", logo: "concentrix.png" },
    { name: "BASF", logo: "d-basf.png" },
    { name: "Gallagher", logo: "gallagher.png" },
    { name: "Gamesa", logo: "gamesa.png" },
    { name: "Grupo SBF", logo: "gruposbf.png" },
    { name: "HRS", logo: "hrs.png" },
    { name: "IBM", logo: "ibm.png" },
    { name: "IBOPE", logo: "ibope.png" },
    { name: "iFood", logo: "ifood.png" },
    { name: "ISA", logo: "isa.png" },
    { name: "Itaú", logo: "itau.png" },
    { name: "Kyndryl", logo: "kyndryl.png" },
    { name: "Medartis", logo: "medartis.png" },
    { name: "Nouryon", logo: "nouryon.png" },
    { name: "OneSubsea", logo: "onesubsea.png" },
    { name: "Pinheiro", logo: "pinheiro.png" },
    { name: "Pirelli", logo: "pirelli.png" },
    { name: "Saab", logo: "saab.png" },
    { name: "SulAmérica", logo: "sulamerica.png" },
    { name: "Team Creatifs", logo: "teamcreat.png" },
    { name: "Track", logo: "track.png" },
    { name: "WeWork", logo: "wework.png" },
];

const BrandsCarousel = () => {

    const [responsive, setResponsive] = useState(false);

    useEffect(() => {
        // Função para checar o tamanho da tela
        const checkScreenSize = () => {
            setResponsive(window.innerWidth <= 768); // Define como true para telas menores que 768px
        };

        // Checar o tamanho da tela ao carregar
        checkScreenSize();

        // Adicionar um listener para mudanças no tamanho da tela
        window.addEventListener("resize", checkScreenSize);

        // Remover o listener quando o componente for desmontado
        return () => {
            window.removeEventListener("resize", checkScreenSize);
        };
    }, []);


    return (
        <section className="py-5 brand-carousel">
            <MDBContainer fluid>
                <h1 className="text-center font-weight-bold default-title text-black clients-home-title">Clientes</h1>
                <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    navigation
                    pagination={(!responsive && ({ clickable: true }))}
                    className="mt-4"
                    breakpoints={{
                        320: { slidesPerView: 2, spaceBetween: 10 }, // Mobile
                        768: { slidesPerView: 3, spaceBetween: 20 }, // Tablet
                        1024: { slidesPerView: 5, spaceBetween: 30 }, // Desktop
                    }}
                >
                    {brands.map((brand, index) => (
                        <SwiperSlide key={index}>
                            <MDBCol className="text-center">
                                <img src={`/images/clientesImg/${brand.logo}`} alt={brand.name} className="img-brand-carousel" />
                            </MDBCol>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="text-center mt-3">
                    <a className="btn-with-icon-animation btn-clients" href="/clientes">Ver todos <LuCircleArrowRight size={27} /></a>
                </div>
            </MDBContainer>
        </section>
    );
};

export default BrandsCarousel;
