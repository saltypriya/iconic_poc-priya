import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/swiper-bundle.css'

export default () => {
  return (
    <>
      <Swiper
        modules={[Navigation,Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{clickable: true}}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><img className='imgslide' src="/src/resources/student1.jpg" /></SwiperSlide>
        <SwiperSlide><img className='imgslide' src="/src/resources/student2.jpg" /></SwiperSlide>
        <SwiperSlide><img className='imgslide' src="/src/resources/student3.jpg" /></SwiperSlide>
        <SwiperSlide><img className='imgslide' src="/src/resources/student4.jpg" /></SwiperSlide>
      </Swiper>
    </>
  );
};