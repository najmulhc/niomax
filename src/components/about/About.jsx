import Container from "../shared/Container";
import AboutServices from "./AboutServices";
import AboutTop from "./AboutTop";

const About = () => {
  return (
    <Container id="about" className="bg-white">
      <AboutTop />
      <AboutServices />
    </Container>
  );
};

export default About;
