import React from "react";
import BoxIcon from "../../icons/BoxIcon";
import { P } from "../shared/typography";
import BadgeIcon from "../../icons/BadgeIcon";
import PickupIcon from "../../icons/PickupIcon";

const AboutServices = () => {
  const services = [
    {
      Icon: BoxIcon,
      title: "fast delivery",
      description: "Within 30 minutes",
    }, {
        Icon: BadgeIcon, title: "absolute dining", description:"Best buffet resturant"
    }, {
        Icon: PickupIcon, title: "pickup delivery", description: "Grab your food order"
    }
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
      {services.map((service) => (
        <div
          key={service.title}
          className="flex justify-start items-center gap-4"
        >
          <div className="w-[3.75rem] h-[3.75rem] rounded-full shadow-custom-black flex justify-center items-center md:w-[5.625rem] md:h-[5.625rem]">
            <service.Icon className="fill-red" />
          </div>
          <div>
            <h4 className="uppercase font-bebas font-[500] text-[1.875rem] text-btn-text">
              {service.title}
            </h4>
            <P className="font-normal">{service.description}</P>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutServices;
