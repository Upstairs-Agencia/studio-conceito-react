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
                loop={true}
                pagination={{ clickable: true }}
                navigation={false}
                modules={[EffectCoverflow, Pagination, Navigation]}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                        coverflowEffect: {
                            rotate: 30,
                            stretch: 50,
                            depth: 100,
                            modifier: 1,
                            slideShadows: false,
                        },
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                        coverflowEffect: {
                            rotate: 50,
                            stretch: 100,
                            depth: 300,
                            modifier: 1,
                            slideShadows: true,
                        },
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                        coverflowEffect: {
                            rotate: 50,
                            stretch: 100,
                            depth: 300,
                            modifier: 1,
                            slideShadows: true,
                        },
                    },
                }}
                className="cases-swiper"
            >
                {cases.map((item, index) => (
                    <SwiperSlide key={index} style={{ width: "70%", height: "auto" }}>
                        <div className="bg-image hover-zoom" style={{ borderRadius: "10px" }}>
                            <img src={item.image} alt={item.title} className="carousel-img" style={{ width: "100%", height: "auto" }} />
                        </div>
                        <p className="carousel-text">{item.title}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
            <a className="btn-with-icon-animation" href="https://sconceito.com.br/cases/">Ver todos <LuCircleArrowRight size={27} /></a>
        </div>
    );
}
