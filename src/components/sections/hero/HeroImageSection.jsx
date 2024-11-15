import HeroImage from "../../../assets/hero-min.jpg"; 
import OfferToday from "./OfferToday"; 
const HeroImageSection = () => {
  return (
    <div className="md:w-[751px]   overflow-visible relative top-0 right-0  md:z-20">
     
 
      <img
        src={HeroImage}
        alt="hero image "
        className="w-full h-[310px] md:h-auto z-20 "
      />
      <OfferToday />
    </div>
  );
};

export default HeroImageSection;
