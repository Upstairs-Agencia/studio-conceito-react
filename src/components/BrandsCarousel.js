import React from "react";
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
    { name: "AstraZeneca", logo: "astrazenec.png" },
    { name: "Bacardi", logo: "bacardi.png" },
    { name: "Baxter", logo: "baxter.png" },
    { name: "CBRE", logo: "cbre.png" },
    { name: "CHEP", logo: "chep.png" },
    { name: "Concentri", logo: "concentri.png" },
    { name: "BASF", logo: "d-basp.png" },
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
    { name: "Nouryoi", logo: "nouryoi.png" },
    { name: "Onesubs", logo: "onesubs.png" },
    { name: "Pinheiro", logo: "pinheiro.png" },
    { name: "Pirelli", logo: "pirelli.png" },
    { name: "SAAE", logo: "saae.png" },
    { name: "SulAmérica", logo: "sulamerica.png" },
    { name: "Team Creatifs", logo: "teamcreat.png" },
    { name: "Track & Field", logo: "track.png" },
    { name: "Wework", logo: "wework.png" },
];

const BrandsCarousel = () => {
    return (
        <section className="py-5 brand-carousel">
            <MDBContainer fluid>
                <h1 className="text-center font-weight-bold default-title text-black">Clientes</h1>
                <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={5}
                    loop={true}
                    autoplay={{ delay: 300, disableOnInteraction: false }}
                    navigation
                    pagination={{ clickable: true }}
                    className="mt-4"
                >
                    {brands.map((brand, index) => (
                        <SwiperSlide key={index}>
                            <MDBCol className="text-center">
                                <img src={`/images/clientesImg/${brand.logo}`} alt={brand.name} style={{ maxWidth: "150px" }} />
                            </MDBCol>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="text-center mt-3">
                    <a className="btn-with-icon-animation btn-clients" href="https://sconceito.com.br/cases/">Ver todos <LuCircleArrowRight size={27} /></a>
                </div>
            </MDBContainer>
        </section>
    );
};

export default BrandsCarousel;
