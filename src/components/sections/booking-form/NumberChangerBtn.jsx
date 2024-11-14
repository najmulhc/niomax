
import IncrementIcon from '../../../icons/input/IncrementIcon';
import DecrementIcon from '../../../icons/input/DecrementIcon';


// custom arrows for number increase and decrease
const NumberChangerBtn = ({
    onChange, value
}) => {
  return (
    <>
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        className="absolute right-0 top-3 "
      >
        <IncrementIcon />
      </button>
      <button
        type="button"
        onClick={() => onChange(value - 1)}
        className="absolute right-0  top-7"
      >
        <DecrementIcon />
      </button>
    </>
  );
}

export default NumberChangerBtn