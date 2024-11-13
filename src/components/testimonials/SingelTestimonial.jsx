import ReactPlayer from "react-player";
import FlowerIcon from "../../icons/FlowerIcon";
import { H2, P } from "../shared/typography";

// this is the rapper component of the slider
const SingelTestimonial = ({ testimonial }) => {
  const { description, avatar, address, name, video } = testimonial;
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between">
      <div className="w-full h-auto md:w-[34.688rem] md:h-[34.688rem] bg-yellow p-[1.625rem] md:p-[1.188rem] relative top-0 left-0">
        <div className="flex justify-between h-full items-start w-full gap-2">
          <H2>&quot;</H2>
          <div className="flex w-full h-full flex-col justify-between">
            <P className="text-[1.25rem] leading-[2.125rem]">{description}</P>
            {/* the div for the bbottom part */}
            <div className="mt-6">
              <div className="w-full flex justify-between items-end ">
                <div>
                  <h4 className="font-bebas font-bold uppercase text-[1.25rem] text-btn-text">
                    {name}
                  </h4>
                  <p className="font-roboto text-[#33333] text-[0.875rem]">
                    {address}
                  </p>
                </div>
                <div>
                  <img
                    src={avatar}
                    alt="avatar of the user"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="flex justify-between items-end mt-2">
                <hr className="border border-btn-text w-full" />
                <hr className="bg-red border-2 border-red w-[2.5rem] h-[0.25rem]"></hr>
              </div>
            </div>
          </div>
        </div>
        <FlowerIcon className="absolute z-20 bottom-0 left-0 md:bottom-6" />
      </div>
      <div className="md:w-[763px] md:h-[34.688rem] bg-red w-full h-auto">
        <ReactPlayer
          width="100%"
          height="100%"
          muted
          playing
          url={video}
          controls={false}
          loop
        />
      </div>
    </div>
  );
};

export default SingelTestimonial;
