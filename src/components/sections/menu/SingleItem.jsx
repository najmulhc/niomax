
import { P } from '../../shared/typography';
 

const SingleItem = ({
    item
}) => {
  return (
    <>
      <div className="w-full bg-none  flex justify-center items-center">
        <img
          className="max-w-full my-6 px-auto h-[7.5rem]  bg-none"
          src={item.img}
          alt={item.name}
        />
      </div>
      <div className="w-[57px]  border border-red mx-auto"></div>
      <h4 className="uppercase font-bebas text-2xl text-btn-text font-[500] my-6">
        {item.name}
      </h4>
      <P className="text-btn-text font-roboto text-lg">{item.description}</P>
    </>
  );
}

export default SingleItem