import "swiper/css";

import { Img, Imgs } from "./Slider_components";

import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css/pagination";

export const Slider = ({ photos }) => {
    return (
        <Imgs>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                speed={800}
                pagination={{ clickable: true }}
            >
                {photos.map((photo, index) => (
                    <SwiperSlide key={index}>
                        <Img src={photo} alt="photo" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Imgs>
    );
};
