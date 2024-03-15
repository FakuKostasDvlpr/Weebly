import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React from "react";

export default function CardResult() {
  return (
    <Swiper
    modules={[Navigation, Autoplay]}
    spaceBetween={0}
    slidesPerView={1}
    effect={''}
    className='hover:cursor-grab active:cursor-grabbing w-full max-w-[500px] h-[800px] flex justify-center items-center text-center mt-20'
    direction={'horizontal'}
    autoplay={{
        delay: 5000,
        disableOnInteraction: false,
    }}
    navigation
>
        <SwiperSlide id='materiales' className='flex flex-col items-center mx-auto justify-center w-full h-full text-white' >
            <img src="https://salesclosercompany.com/wp-content/uploads/2023/12/photo_4927476779266976707_y-6533743.webp" alt="" />
        </SwiperSlide>
</Swiper>
  );
}
