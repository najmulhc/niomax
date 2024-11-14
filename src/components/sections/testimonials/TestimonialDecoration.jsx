import decoirationTomato from '../../../assets/decoaration-tomato.png';
import decorationVeg from '../../../assets/decoration-veg.png'

const TestimonialDecoration = () => {
  return (
    <>
      <img
        src={decoirationTomato}
        className="absolute top-24 left-0 hidden md:block "
        alt="An image of a rice bowl"
      />
      <img
        src={decorationVeg}
        className="absolute bottom-10 right-0 hidden md:block "
        alt="An image of a rice bowl"
      />
    </>
  );
}

export default TestimonialDecoration