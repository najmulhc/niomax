import Container from "../../shared/Container";
import HeroTextSection from "./HeroTextSection";
import HeroImageSection from "./HeroImageSection";

const Hero = () => {
  return (
    <Container className="    bg-[url('./assets/hero-bg.png')] bg-red bg-cover  ">
      <div className="  ">
        <HeroTextSection />
        <HeroImageSection />
      </div>
    </Container>
  );
};

export default Hero;
