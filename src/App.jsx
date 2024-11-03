import About from "./components/about/About";
import BookingForm from "./components/booking-form/BookingForm";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Menu from "./components/menu/Menu";
import Testimonials from "./components/testimonials/Testimonials";

// this is the component to wrap everything in the page
const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Menu />
      <BookingForm />
      <Testimonials />
      <Footer />
    </>
  );
};

export default App;
