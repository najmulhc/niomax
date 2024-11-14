import { useRef } from "react";

import MenuSlider from "./MenuSlider";
import Container from "../../shared/Container";
import EyebrewHeading from "../../shared/EyebrewHeading";
import { H2 } from "../../shared/typography";
import SliderNav from "../../shared/SliderNav";
import MenuDecoration from "./MenuDecoration";

const Menu = () => {
  const sliderRef = useRef(null);
  return (
    <Container id="menu" className="bg-bg-baige" Decoration={MenuDecoration}>
      <div className="w-full md:flex md:justify-between items-end">
        <div>
          <EyebrewHeading>Crispy, Every Bite Taste</EyebrewHeading>
          <H2 className="text-[##181818]">popular food items</H2>
        </div>
        <div className="hidden md:block">
          <SliderNav slideRef={sliderRef} />
        </div>
      </div>
      <MenuSlider sliderRef={sliderRef} />
      <div className="flex w-full justify-center md:hidden">
        <SliderNav slideRef={sliderRef} />
      </div>
    </Container>
  );
};

export default Menu;
