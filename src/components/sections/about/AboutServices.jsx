import services from "../../../constants/about-services-data";
import { P } from "../../shared/typography";

const AboutServices = () => {
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
