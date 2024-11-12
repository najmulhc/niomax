import HeroImage from "../../assets/hero-min.jpg";
import HeroTopVector from "../../assets/hero-top-vector.png";

const HeroImageSection = () => {
  return (
    <div className="w-full top-0 left-0 relative h-full bg-pink-600 ">
      <div className="  ">
        <img
          className=""
          src={HeroTopVector}
          width={45}
          height={45}
          alt="star image"
        />
        <img
          className="md:w-[700px] "
          src={HeroImage}
          alt="picture of a food"
        />
      </div>
    </div>
  );
};

export default HeroImageSection;
