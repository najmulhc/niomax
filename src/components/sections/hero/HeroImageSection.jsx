import HeroImage from "../../../assets/hero-min.jpg";
import HeroTopVector from "../../../assets/hero-top-vector.png";
import OfferToday from "./OfferToday";

const HeroImageSection = () => {
  return (
    <div className=" md:abosolute top-0 right-0 z-10  w-full  ">
      <div className="w-full flex justify-end relative ">
        {" "}
        <img
          className="absolute right-0 -top-5 z-10 md:-top-8 md:-right-7"
          src={HeroTopVector}
          width={45}
          height={45}
          alt="star image"
        />
        <img
          className="md:w-[700px] absolute right-0 top-0 z-20"
          src={HeroImage}
          alt="picture of a food"
        />
        <OfferToday />
      </div>
    </div>
  );
};

export default HeroImageSection;
