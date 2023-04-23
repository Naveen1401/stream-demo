import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
function Carousel({ Sliders, SPV }) {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={SPV}
            navigation
            autoplay
            pagination={{ clickable: true }}
        >
            {Sliders.map((slide) => (
                <SwiperSlide key={slide.image}>
                    <img src={slide.image} alt="Slider" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
export default Carousel;