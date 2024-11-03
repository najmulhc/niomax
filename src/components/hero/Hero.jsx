import {  P } from "../shared/typography";
import Button from "../shared/Button";
import Container from "../shared/Container";
import HeroImage from "../../assets/hero-min.jpg";
import HeroTopVector from "../../assets/hero-top-vector.png";

const Hero = () => {
  return (
    <Container className=" min-h-screen   bg-[url('./assets/hero-bg.png')] bg-red bg-cover flex justify-between items-center  ">
      <div className="z-20">
        <h1 className="uppercase font-bebas md:pr-4 z-20  md:bg-text-gradient text-white text-[4rem] leading-[4.5rem] md:text-[7.5rem] md:leading-[8.125rem]">
          taste the authentic saudi cuisine
        </h1>
        <P className="text-white mt-6 mb-12">
          Among the best Saudi chefs in the world, serving <br /> you something
          beyond flavor.{" "}
        </P>
        <Button href="#menu">explore now</Button>
      </div>
      <div className="w-auto relative z-10">
        <img className="absolute right-[-25px] top-[-30px] z-10" src={HeroTopVector} width={45} height={45} alt="star image" />
        <img
          className="md:w-[750px] z-10 md:h-[649px] z-15"
          src={HeroImage}
          alt="picture of a food"
        />
      </div>
    </Container>
  );
};

export default Hero;
