import logo from "../../assets/logo.svg";
import HamburgerIcon from "../../icons/HamburgerIcon";
import Button from "../shared/Button";

const Header = () => {
  const pages = ["Home", "About", "Portfolio", "Clients", "Blog", "Contact"];
  return (
    <header className="sticky z-40 bg-red w-full md:h-[6.75rem] h-[4.813rem] top-0 left-0 py-8 px-[1.875rem]  ">
      <div className="md:w-[82.5rem] h-full flex justify-between items-center mx-auto">
        <div className="flex justify-start items-center gap-12">
          <img src={logo} alt="" />

          <div className="md:flex justify-start items-center text-white gap-10 font-roboto hidden ">
            {pages.map((item) => (
              <a href="#" className="hover:text-yellow" key={item}>
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
