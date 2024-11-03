import Container from "../shared/Container";
import { H2, P } from "../shared/typography";
import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Container className="bg-[url('./assets/footer-bg.jpg')] bg-blend-overlay bg-[rgba(0,0,0,.80)] backdrop-blur-[6.5px] bg-center  bg-cover">
      <H2 className="text-white text-center">
        we are ready to have you the best dining experiences
      </H2>
      <FooterLinks />

      <FooterSocial />
      <P className="text-center text-white">
        © {year} <span className="text-yellow">Niomax</span> All rights
        reserved.
      </P>
    </Container>
  );
};

export default Footer;
