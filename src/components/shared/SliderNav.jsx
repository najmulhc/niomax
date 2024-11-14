import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// navigation icons for the sliders
const SliderNav = ({ slideRef }) => {
  return (
    <div className="gap-4 flex justify-end items-end">
      <button
        className="w-[3.75rem] h-[3.75rem] flex justify-center items-center bg-white rounded-full shadow-custom-black text-lg hover:text-red text-[##0A1425]"
        onClick={() => slideRef.current.slidePrev()}
      >
        <IoIosArrowBack />
      </button>
      <button
        className="w-[3.75rem] h-[3.75rem] flex justify-center items-center bg-white rounded-full shadow-custom-black text-lg hover:text-red  text-[#0A1425]"
        onClick={() => {
          slideRef.current.slideNext();
        }}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default SliderNav;
