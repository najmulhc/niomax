import Container from "../../shared/Container";
import HeroTextSection from "./HeroTextSection";
import HeroImageSection from "./HeroImageSection";
import herovector from '../../../assets/hero-top-vector.png'

const Hero = () => {
  return (
    <Container className="    bg-[url('./assets/hero-bg.png')] bg-red bg-cover  ">
      <div className=" w-full flex justify-between flex-col-reverse   md:flex-row-reverse mt-8 md:my-[10rem]  relative gap-12 md:gap-0">
        <HeroImageSection />
        <HeroTextSection />  <img src={herovector} className="absolute z-10 -top-8 -right-8 hidden md:block" />
      </div>
    </Container>
  );
};

export default Hero;
