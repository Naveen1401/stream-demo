import './style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import Img1 from '../../Images/c1.1.png'
import Img2 from '../../Images/c1.2.png'
import Img3 from '../../Images/c1.3.png'
import Img4 from '../../Images/c1.4.png'
import Img5 from '../../Images/c1.5.png'
function MainCarousel() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            autoplay
            pagination={{ clickable: true }}
        >
            <SwiperSlide><img className='c1Image' src={Img1} alt="Slider"/></SwiperSlide>
            <SwiperSlide><img className='c1Image' src={Img2} alt="Slider"/></SwiperSlide>
            <SwiperSlide><img className='c1Image' src={Img3} alt="Slider"/></SwiperSlide>
            <SwiperSlide><img className='c1Image' src={Img4} alt="Slider"/></SwiperSlide>
            <SwiperSlide><img className='c1Image' src={Img5} alt="Slider"/></SwiperSlide>
        </Swiper>
    );
};
export default MainCarousel;