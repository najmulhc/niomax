import Container from "../../shared/Container";
import AboutDecoration from "./AboutDecoration";
import AboutServices from "./AboutServices";
import AboutTop from "./AboutTop";

const About = () => {
  return (
    <Container id="about" className="bg-white" Decoration={AboutDecoration}>
      <AboutTop />
      <AboutServices />
    </Container>
  );
};

export default About;
