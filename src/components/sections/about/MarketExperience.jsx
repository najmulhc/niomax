import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { P } from "../../shared/typography";


// the circular progressbar with number in top of the image 
const MarketExperience = () => {
  return (
    <div className="top-4 left-3 md:top-8 md:left-6 z-20 absolute bg-white shadow-custom-black rounded-[1.125rem] p-4 flex justify-between items-center gap-2">
      <div
        style={{
          width: 95,
          height: 95,
        }}
      >
        <CircularProgressbar
          value={50}
          text="50+"
          styles={{
            path: {
              stroke: "#FEBF00",
            },
            text: {
              fontWeight: 700,
              fill: "#181818",
            },
          }}
        />
      </div>{" "}
      <P className="font-[700] font-roboto">
        Market <br /> Experiences
      </P>
    </div>
  );
};

export default MarketExperience;
