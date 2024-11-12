import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const TestimonialSlider = ({ sliderRef }) => {
  return (
    <Swiper
      onBeforeInit={(swiper) => {
        sliderRef.current = swiper;
      }}
      slidesPerView={1}
      loop={true}
      modules={[Navigation, Autoplay]}
    >
      <SwiperSlide className="w-full h-[100px] bg-red">
        {" "}
        <div className="flex ">

        </div>
      </SwiperSlide>
      <SwiperSlide className="w-full h-[100px] bg-bg-baige">
        <div className="w-full h-[100px] bg-red"></div>
      </SwiperSlide>
    </Swiper>
  );
};

export default TestimonialSlider;
