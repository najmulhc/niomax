import { Swiper, SwiperSlide } from "swiper/react";
import menu from "./menu-data";
import { P } from "../shared/typography";
import { Autoplay, Navigation } from "swiper/modules";

const MenuSlider = ({ sliderRef }) => {
  return (
    <Swiper
      onBeforeInit={(swiper) => {
        sliderRef.current = swiper;
      }}
      slidesPerView={1}
      breakpoints={{
        1024: {
          slidesPerView: 4,
        },
      }}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay, Navigation]}
      spaceBetween={32}
      className="my-6"
    >
      {menu.map((item) => (
        <SwiperSlide
          className="w-full bg-white rounded-sm p-4 min-h-[20rem] text-center flex items-center justify-center"
          key={item.name}
        >
          <div className="w-full bg-none  flex justify-center items-center">
            <img
              className="max-w-full px-auto h-auto  bg-none"
              src={item.img}
              alt={item.name}
            />
          </div>
          <div className="w-[57px] my-4 border border-red mx-auto"></div>
          <h4 className="uppercase font-bebas text-2xl text-btn-text font-[500]">
            {item.name}
          </h4>
          <P className="text-btn-text font-roboto text-lg">
            {item.description}
          </P>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MenuSlider;
