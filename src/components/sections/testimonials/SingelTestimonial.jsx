import ReactPlayer from "react-player";
import { H2 } from "../../shared/typography";
import FlowerIcon from "../../../icons/FlowerIcon";
import SingleTestimonialInfo from "./SingleTestimonialInfo";

// this is the rapper component of the slider
const SingelTestimonial = ({ testimonial }) => {
  const { video } = testimonial;
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between">
      <div className="w-full h-auto md:w-[34.688rem] md:h-[34.688rem] bg-yellow p-[1.625rem] md:p-[1.188rem] relative top-0 left-0">
        <div className="flex justify-between h-full items-start w-full gap-2">
          <H2>&quot;</H2>
          <SingleTestimonialInfo testimonial={testimonial} />
        </div>
        <FlowerIcon className="absolute z-20 bottom-0 left-0 md:bottom-6" />
      </div>
      <div className="md:w-[763px] md:h-[34.688rem] bg-red w-full h-auto">
        <ReactPlayer
          width="100%"
          height="100%"
          muted
          playing
          url={video}
          controls={false}
          loop
        />
      </div>
    </div>
  );
};

export default SingelTestimonial;
