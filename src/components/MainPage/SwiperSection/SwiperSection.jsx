import './style.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import React, { useState, useEffect } from "react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const SwiperSection = () => {
    const [swiper, setSwiper] = useState(null);
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        fetch("./productBase.json")
            .then((response) => response.json())
            .then((data) => setSlides(data));
    }, []);

    return (
        <div className="container">
            <div className="slider-container">
                <Swiper
                    onSwiper={setSwiper}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <img src={slide.imgURL} alt={`Slide ${slide.id}`} className="img_slide"/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default SwiperSection;
