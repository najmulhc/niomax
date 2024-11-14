import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/sections/hero/Hero";
import About from "./components/sections/about/About";
import Menu from "./components/sections/menu/Menu";
import BookingForm from "./components/sections/booking-form/BookingForm";
import Testimonials from "./components/sections/testimonials/Testimonials";

import "./App.css";

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
