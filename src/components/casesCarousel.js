import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const cases = [
    { title: "Studio Conceito", image: "/images/casesImg/studioconceito.png" },
    { title: "Apsen", image: "/images/casesImg/studioconceito.png" },
    { title: "Astrazeneca Centro Médico", image: "/images/casesImg/studioconceito.png" }
];

export default function CasesCarousel() {
    return (
        <div className="carousel-container">
            <h2 className="carousel-title">Cases</h2>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}       // Permite arrastar com o mouse
                centeredSlides={true}   // Centraliza o slide ativo
                loop={true}             // Loop infinito
                pagination={{ clickable: true }} // Paginação clicável
                navigation={false}      // Se quiser, pode habilitar setas de navegação
                modules={[EffectCoverflow, Pagination, Navigation]}
                // Configuração do efeito coverflow
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                // Configuração responsiva
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                className="cases-swiper"
            >
                {cases.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="slide-content" style={{ borderRadius: "10px", overflow: 'hidden' }}>
                            <img 
                                src={item.image} 
                                alt={item.title} 
                                className="carousel-img hover-zoom bg-image"
                            />
                        </div>
                        <p className="carousel-text">{item.title}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
