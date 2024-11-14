
import { P } from '../../shared/typography';


// reusable single testimonial for slider, we can not reuse the SingleSLide component of swiper
const SingleTestimonialInfo = ({testimonial}
) => {

    const {description, name, avatar, address } = testimonial;
  return (
    <div className="flex w-full h-full flex-col justify-between">
      <P className="md:text-[1.25rem]  text-[1.125rem] leading-[1.75rem] md:leading-[2.125rem]">{description}</P>
      {/* the div for the bbottom part of the testimonial */}
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
  );
}

export default SingleTestimonialInfo