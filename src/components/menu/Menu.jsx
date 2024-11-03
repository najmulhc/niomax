import Container from "../shared/Container";
import EyebrewHeading from "../shared/EyebrewHeading";
import { H2 } from "../shared/typography";

const Menu = () => {
  return (
    <Container id="menu" className='bg-bg-baige'>
      <EyebrewHeading>Crispy, Every Bite Taste</EyebrewHeading>
      <H2 className='text-[##181818]' >
        popular food items
      </H2>
    </Container>
  );
};

export default Menu;
