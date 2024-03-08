import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, A11y } from "swiper/modules"
import { Imgs, Img } from "./styled_components"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

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
  )
}
