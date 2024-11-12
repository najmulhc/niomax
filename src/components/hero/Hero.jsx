import Container from "../shared/Container";
import HeroImageSection from "./HeroImageSection";
import HeroTextSection from "./HeroTextSection";

const Hero = () => {
  return (
    <Container className=" min-h-screen   bg-[url('./assets/hero-bg.png')] bg-red bg-cover relative ">
      <HeroTextSection />
      <HeroImageSection />
    </Container>
  );
};

export default Hero;
