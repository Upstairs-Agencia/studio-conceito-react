import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { LuCircleArrowRight } from "react-icons/lu";
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
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={2} // Aumenta a largura dos slides visíveis
                spaceBetween={20} // Adiciona espaçamento entre os slides
                coverflowEffect={{
                    rotate: 50, // Inclina os slides laterais
                    stretch: 100, // Aumenta a distância entre os slides
                    depth: 300, // Mantém o efeito 3D
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{ clickable: true }}
                navigation={false}                
                loop={true}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="cases-swiper"
            >
                {cases.map((item, index) => (
                    <SwiperSlide key={index} style={{ width: "70%", height: "auto" }}>
                        <div className="bg-image hover-zoom" style={{ borderRadius: "10px" }}>
                            <img src={item.image} alt={item.title} style={{ width: "100%", height: "auto" }} />
                        </div>
                        <p className="carousel-text">{item.title}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
            <a className="btn-with-icon-animation" href="https://sconceito.com.br/cases/">Ver todos <LuCircleArrowRight size={27}/></a>
        </div>
    );
}
