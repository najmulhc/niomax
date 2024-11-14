import { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import HamburgerIcon from "../../icons/HamburgerIcon";
import Button from "../shared/Button";

const Header = () => {
  const pages = ["Home", "About", "Portfolio", "Clients", "Blog", "Contact"];
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-40 ${
        isScrolled ? "bg-red" : "bg-none"
      } w-full md:h-[6.75rem] h-[4.813rem] top-0 left-0 py-8 px-[1.875rem] `}
    >
      <div className="md:w-[82.5rem] h-full flex justify-between items-center mx-auto">
        <div className="flex justify-start items-center gap-12">
          <img src={logo} alt="" />

          <div className="md:flex justify-start items-center text-white text-[0.938rem] gap-10 font-montserrat hidden ">
            {pages.map((item) => (
              <a
                href="#"
                className="hover:text-yellow font-releway font-raleway text-sm font-medium leading-[17.61px] text-left decoration-none"
                key={item}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="hidden md:block">
          <Button>Book a table</Button>
        </div>
        <div className="block md:hidden">
          <HamburgerIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
