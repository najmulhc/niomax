import { useForm } from "react-hook-form";
import Input from "./Input";
import Button from "../../shared/Button";
 

const Form = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="flex flex-col gap-4 mb-4">
        <div className="grid md:grid-cols-2 gap-4">
          <Input
            control={control}
            name="name"
            inputType="text"
            placeholder="Your name"
            required
          />
          <Input
            control={control}
            name="email"
            inputType="email"
            placeholder="Your Email"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <Input
            control={control}
            name="reservationDate"
            inputType="date"
            placeholder="Reservation date"
          />
          <Input
            control={control}
            name="peopleCount"
            inputType="number"
            placeholder="Total people"
          />{" "}
        </div>
        <Input
          control={control}
          name="Message"
          inputType="textarea"
          placeholder="Message"
          required
          text="col-span-2"
        />
      </div>
      <Button>Submit</Button>
    </form>
  );
};

export default Form;
