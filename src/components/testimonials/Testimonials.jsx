import { useRef } from "react";
import Container from "../shared/Container";
import EyebrewHeading from "../shared/EyebrewHeading";
import { H2 } from "../shared/typography";
import SliderNav from "../menu/SliderNav";
import TestimonialSlider from "./TestimonialSlider";

const Testimonials = () => {
  const testimonialSliderRef = useRef(null);
  return (
    <Container id="testimonials" className="bg-bg-baiged">
      <div className="flex justify-between items-end">
        <div>
          <EyebrewHeading>Crispy, Every Bite Taste</EyebrewHeading>
          <H2 className="text-[##181818]">what some of my customers say</H2>
        </div>
        <div className="hidden md:block">
          <SliderNav slideRef={testimonialSliderRef} />
        </div>
      </div>

      <TestimonialSlider sliderRef={testimonialSliderRef} />

      <div className="w-full flex  justify-center md:hidden">
        <SliderNav slideRef={testimonialSliderRef} />
      </div>
    </Container>
  );
};

export default Testimonials;
