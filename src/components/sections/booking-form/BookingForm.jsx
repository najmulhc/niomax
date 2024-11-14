import Container from "../../shared/Container";
import EyebrewHeading from "../../shared/EyebrewHeading";
import { H2, P } from "../../shared/typography";
import Form from "./Form";

const BookingForm = () => {
  return (
    <Container
      id="booking-form"
      className="bg-[url('./assets/form-bg.jpg')] bg-top bg-cover"
    >
      <div>
        <EyebrewHeading>Book Now</EyebrewHeading>
        <H2 className="text-white">Book your table</H2>
        <P className="text-white my-6">
          Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo{" "}
          <br />
          molestie vel, ornare non id blandit netus.
        </P>{" "}
      </div>

      <div className="grid md:grid-cols-2">
        <Form />
      </div>
    </Container>
  );
};

export default BookingForm;
