import Container from '../shared/Container'
import EyebrewHeading from '../shared/EyebrewHeading'
import { H2 } from '../shared/typography'

const BookingForm = () => {
  return (
    <Container id="booking-form">
      <EyebrewHeading>Book Now</EyebrewHeading>
      <H2 className="text-white"> 
        Book your table
      </H2>
    </Container>
  )
}

export default BookingForm