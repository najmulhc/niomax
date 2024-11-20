import { Swiper, SwiperSlide } from "swiper/react";
import menu from "../../../constants/menu-data";
import { Autoplay, Navigation } from "swiper/modules";
import SingleItem from "./SingleItem";

const MenuSlider = ({ sliderRef }) => {
  // swiper config for slider
  const sliderConfig = {
    onBeforeInit: (swiper) => {
      sliderRef.current = swiper;
    },
    slidesPerView: 1,
    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    loop: true,
    modules: [Autoplay, Navigation],
    spaceBetween: 32,
    className: "my-6",
  };

  return (
    <Swiper {...sliderConfig}>
      {menu.map((item) => (
        <SwiperSlide
          className="w-full  bg-white rounded-sm p-4 min-h-[20rem] text-center flex "
          key={item.name}
        >
          <SingleItem item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MenuSlider;
