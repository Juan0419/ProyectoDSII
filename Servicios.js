import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCoverflow} from "swiper";
import "swiper/css";
import "swiper/css/effect-EffectCoverflow";
import "/styleSer.css";

const slides = ["Images/crossfit.jpg","Images/trx.jpg","Images/masajes.jpg"];

export const Carrusel = () =>
    <Swiper
    centeredSlides
    slidesPerView = "auto"
    effect = "coverflow"
    loop
    coverflowEffect = {{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slidesShadows: true,
    }}
    modules={[EffectCoverflow]}
    >
        <div className="swiper-wrapper">
            {slides.map((slide) => (
                <SwiperSlide
                style={{
                    backgroundImage: 'url(${slide})',
                }}
                />
            ))}
        </div>
    </Swiper>