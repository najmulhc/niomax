import Container from "../../shared/Container";
import HeroTextSection from "./HeroTextSection";
import HeroImageSection from "./HeroImageSection";

const Hero = () => {
  return (
    <Container className=" min-h-screen   bg-[url('./assets/hero-bg.png')] bg-red bg-cover relative ">
      <HeroTextSection />
      <HeroImageSection />
    </Container>
  );
};

export default Hero;
