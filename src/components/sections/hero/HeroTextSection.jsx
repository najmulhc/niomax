import Button from "../../shared/Button";

const HeroTextSection = () => {
  return (
    <div className="  md:w-1/2  relative top-0 left-0 ">
      <div className=" h-full flex flex-col items-start justify-center md:absolute top-0 left-0 md:z-20 ">
        <h1 className="bg-text-gradient md:w-[830px] font-bebas text-white uppercase text-[3rem] leading-[3.5rem] md:text-[7.5rem] md:leading-[8.125rem] ">
          taste the authentic saudi cuisine.
        </h1>
        <p className="md:w-[34.938rem] font-roboto font-[400] text-white text-[1.25rem]   md:text-[1.5rem] leading-[1.75rem] md:leading-8  mb-8">
          Among the best Saudi chefs in the world, serving you something beyond
          flavor.{" "}
        </p>

        <Button href="#menu">explore menu</Button>
      </div>
    </div>
  );
};

export default HeroTextSection;
