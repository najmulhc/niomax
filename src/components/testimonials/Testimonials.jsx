
import { useRef } from "react";
import Container from "../shared/Container";
import EyebrewHeading from "../shared/EyebrewHeading";
import { H2 } from "../shared/typography";
import SliderNav from "../menu/SliderNav";
import TestimonialSlider from "./TestimonialSlider";

const Testimonials = () => {
  const testimonialSliderRef  = useRef(null)
  return (
    <Container id="testimonials" className="bg-bg-baiged">
      <div className="flex justify-between items-end">
 
        <div>
          <EyebrewHeading>Crispy, Every Bite Taste</EyebrewHeading>
          <H2 className="text-[##181818]">what some of my customers say</H2>
        </div>
        <SliderNav slideRef={testimonialSliderRef} />
      </div>

      <TestimonialSlider sliderRef={testimonialSliderRef} />
    </Container>
  );
};

export default Testimonials;
