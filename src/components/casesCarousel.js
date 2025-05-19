import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const cases = [
    { title: "Apsen", url: "https://blog.sconceito.com.br/apsen2/", image: "/images/casesImg/apsen.jpg" },
    { title: "Studio Conceito", url: "https://blog.sconceito.com.br/studioconceito/", image: "/images/casesImg/studio-conceito.jpg" },
    { title: "Empresa de Tecnologia", url: "https://blog.sconceito.com.br/empresa-de-tecnologia/", image: "/images/casesImg/empresa-tecnologia.jpg" },
    { title: "iFood", url: "https://blog.sconceito.com.br/ifood-2", image: "/images/casesImg/ifood.jpg" },
    { title: "Bacardi", url: "https://blog.sconceito.com.br/bacardi/", image: "/images/casesImg/bacardi.jpg" },
    { title: "Astrazeneca Centro Médico", url: "https://blog.sconceito.com.br/astrazeneca/", image: "/images/casesImg/astrazeneca-centromedico.jpg" }
];

export default function CasesCarousel() {
    return (
        <div className="carousel-container">
            <h2 className="carousel-title">Cases</h2>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={false}
                loop={true}
                pagination={{ clickable: true }}
                navigation={false}
                modules={[EffectCoverflow, Pagination, Navigation]}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
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
                        <div
                            className="carousel-img-bg"
                            style={{
                                backgroundImage: `url(${item.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '10px',
                                cursor: 'pointer'
                            }}
                            onClick={() => window.open(item.url, '_blank')}
                            title={item.title}
                        />
                        <p className="carousel-text">{item.title}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
