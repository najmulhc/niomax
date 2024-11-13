import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import testimonials from "./testimonials";
import SingelTestimonial from "./SingelTestimonial";
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
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.name} className="w-full h-[100px] mt-8">
          <SingelTestimonial testimonial={testimonial} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
