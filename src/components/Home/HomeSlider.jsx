import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

const HomeSlider = () => {
  return (
    <div className="relative z-0 mt-7 md:mt-0">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        autoplay={{ delay: 3000 }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="w-full relative ">
          <img
            className="w-full md:h-[700px]"
            src="https://i.ibb.co/bQWqcd4/slide.jpg"
            alt="Slide 1"
          />
          <button className="absolute left-[50%] md:left-[75%] bottom-5 md:bottom-[40%] transform -translate-x-1/2 py-1 px-3 md:py-4 md:px-10 bg-pink-600 md:font-semibold text-white rounded-full cursor-pointer">
            Shop Now
          </button>
        </SwiperSlide>
        <SwiperSlide className="w-full relative">
          <img
            className="w-full md:h-[700px]"
            src="https://i.ibb.co/jMrCv83/slide2.jpg"
            alt="Slide 2"
          />
          <button className="absolute left-[50%] md:left-[70%] bottom-5 md:bottom-[40%] transform -translate-x-1/2 py-1 px-3 md:py-4 md:px-10 bg-pink-600 md:font-semibold text-white rounded-full cursor-pointer">
            Shop Now
          </button>
        </SwiperSlide>
        <SwiperSlide className="w-full relative">
          <img
            className="w-full md:h-[700px]"
            src="https://i.ibb.co/y8BGghx/sli.jpg"
            alt="Slide 2"
          />
          <button className="absolute left-[50%] md:left-[70%] bottom-5 md:bottom-[40%] transform -translate-x-1/2 py-1 px-3 md:py-4 md:px-10 bg-pink-600 md:font-semibold text-white rounded-full cursor-pointer">
            Shop Now
          </button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;
