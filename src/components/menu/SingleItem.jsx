
import { SwiperSlide } from 'swiper/react';
import { P } from '../shared/typography';

const SingleItem = ({
    item
}) => {
  return (
    <SwiperSlide
      className="w-full  bg-white rounded-sm p-4 min-h-[20rem] text-center flex "
      key={item.name}
    >
      <div className="w-full bg-none  flex justify-center items-center">
        <img
          className="max-w-full my-6 px-auto h-full  bg-none"
          src={item.img}
          alt={item.name}
        />
      </div>
      <div className="w-[57px]  border border-red mx-auto"></div>
      <h4 className="uppercase font-bebas text-2xl text-btn-text font-[500] my-6">
        {item.name}
      </h4>
      <P className="text-btn-text font-roboto text-lg">{item.description}</P>
    </SwiperSlide>
  );
}

export default SingleItem