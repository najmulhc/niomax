import { useState } from "react";
import aboutImage from "../../assets/about.png";
import AboutToggleBtn from "./AboutToggle";
import { H2, P } from "../shared/typography";
import Button from "../shared/Button";
import PhoneIcon from "../../icons/PhoneIcon";
import MarketExperience from "./MarketExperience";

const AboutTop = () => {
  const [active, setActive] = useState("about");
  const aboutInfo = [
    {
      value: "about",
      title: "About",
      topTitle: "Exceptional culinary experience and delicious food",
      ctaText: "About us",
    },
    {
      value: "experience",
      title: "Experience",
      topTitle: "Five years of professional culinary experience.",
      ctaText: "View Certificate",
    },
    {
      value: "contact",
      title: "Contact",
      topTitle: "Have a questions? or any booking for your next party?",
      ctaText: "Contact us",
    },
  ];
  const displayItem = aboutInfo.filter((item) => item.value == active)[0];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-12 mb-8">
      <div className="w-full z-10 relative">
        <img src={aboutImage} alt="" className="relative top-0 left-0 w-full h-auto z-10" />
        <MarketExperience />
      </div>
      <div className="w-full">
        <div className="border-b border-red w-full">
          {aboutInfo.map((item) => (
            <AboutToggleBtn
              key={item.title}
              value={item.value}
              setActiveBar={setActive}
              activeBar={active == item.value}
            >
              {item.title}
            </AboutToggleBtn>
          ))}
        </div>
        <div className="pt-8">
          <H2 className="text-[#181818]">{displayItem.topTitle}</H2>
          <P className="my-6 text-[#333333] leading-5 font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            unde accusantium corporis quas nesciunt, tenetur repudiandae
            pariatur. Magni quibusdam ipsa, sint minus itaque deleniti vel ipsam
            omnis nemo quae accusamus voluptates debitis dolor alias velit fugit
            asperiores non rerum voluptas possimus doloribus eveniet eaque
            assumenda! Odit, quo! Quisquam, optio laboriosam.
          </P>
          <div className="flex w-full justify-start items-center gap-4">
            <Button href="#">{displayItem.ctaText}</Button>
            {displayItem.value == "about" && (
              <div className="flex justify-between items-center gap-2">
                <PhoneIcon />
                <h3 className="font-roboto font-[500] text-[#0A1425] text-[1.125rem]">
                  +880 123 4567 7890
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTop;
