import { P } from "../shared/typography";
import Button from "../shared/Button";
const HeroTextSection = () => {
  return (
    <div className="relative top-0 left-0 w-full h-full bg-purple-600 "> 
      <div className="  ">
        <h1 className="uppercase font-bebas md:pr-4    md:bg-text-gradient text-white text-[4rem] leading-[4.5rem] md:text-[7.5rem] md:leading-[8.125rem]">
          taste the authentic saudi cuisine 
        </h1>
        <P className="text-white mt-6 mb-12">
          Among the best Saudi chefs in the world, serving <br /> you something
          beyond flavor.{" "}
        </P>
        <Button href="#menu">explore now</Button>
      </div>
    </div>
  );
};

export default HeroTextSection;
