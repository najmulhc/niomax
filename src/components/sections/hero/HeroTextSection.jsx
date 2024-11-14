import Button from "../../shared/Button";
import { P } from "../../shared/typography";

 
const HeroTextSection = () => {
  return (
    <div className="  w-full md:absolute top-0 left-0 z-20  md:w-1/2  ">
   
        {" "}
        <h1 className="uppercase font-bebas md:pr-4  md:bg-text-gradient text-white text-[4rem] leading-[4.5rem] md:text-[7rem] md:leading-[8.125rem] md:w-[830px] ">
          taste the authentic saudi cuisine
        </h1>
        <P className="text-white mt-6 mb-12">
          Among the best Saudi chefs in the world, serving <br /> you something
          beyond flavor.{" "}
        </P>
        <Button href="#menu">explore now</Button>
    
    </div>
  );
};

export default HeroTextSection;
