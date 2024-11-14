import Container from "../../shared/Container";
import HeroTextSection from "./HeroTextSection";
import HeroImageSection from "./HeroImageSection";

const Hero = () => {
  return (
    <Container className=" min-h-screen   bg-[url('./assets/hero-bg.png')] bg-red bg-cover  ">
      <div className=" flex flex-col  h-full md:flex-row relative items-center mx-auto gap-8 md:gap-0">
        <HeroTextSection />
        <HeroImageSection />
      </div>
    </Container>
  );
};

export default Hero;
