// the circle of texts in the bottom of the hero image
const OfferToday = () => {
  return (
    <div className="absolute md:bottom-0 right-4 bottom-4 md:-right-16 z-40 shadow shadow-offer-shadow ">
      <div className="bg-yellow rounded-full flex justify-center items-center md:w-[7.5rem] md:h-[7.5rem] w-[4.5rem] h-[4.5rem] p-1  md:p-2">
        <div className="flex rounded-full h-full w-full border border-dashed border-red justify-center items-center">
          <h1 className="font-bebas font-bold text-[21.5px] leading-[21.5px]  md:leading-[2.25rem]  md:text-4xl text-center text-btn-text">
            today offer
          </h1>
        </div>
      </div>
    </div>
  );
};

export default OfferToday;
