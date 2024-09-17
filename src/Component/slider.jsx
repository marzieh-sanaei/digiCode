import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// images
import img from "./../image/img.gif";
import img1 from "./../image/img1.webp";
import img2 from "./../image/img2.webp";
import img3 from "./../image/img3.webp";
import img4 from "./../image/img4.webp";
import img5 from "./../image/img5.webp";
import img6 from "./../image/img6.webp";
import img7 from "./../image/img7.webp";

export default function Slider(){
    return(
        <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className='h-[600px] w-full hidden md:flex justify-center items-center' src={img} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[600px] w-full hidden md:flex justify-center items-center' src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[600px] w-full hidden md:flex justify-center items-center' src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[600px] w-full hidden md:flex justify-center items-center' src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[600px] w-full hidden md:flex justify-center items-center' src={img4} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[600px] w-full hidden md:flex justify-center items-center' src={img5} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[600px] w-full hidden md:flex justify-center items-center' src={img6} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[600px] w-full hidden md:flex justify-center items-center' src={img7} alt="" /></SwiperSlide>
      </Swiper>
    )
}
