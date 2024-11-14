import { Controller } from "react-hook-form"; 
import NumberChangerBtn from "./NumberChangerBtn";

const Input = ({ control, name, inputType = "text", ...props }) => {
  if (inputType === "textarea") {
    return (
      <Controller
        control={control}
        name={name}
        defaultValue={inputType === "number" ? 0 : ""}
        render={({ field: { onChange, value } }) => (
          <div className={`bg-none relative top-0 left-0 ${props?.text}`}>
            <textarea
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="w-full h-full align-text-bottom  px-4 py-3  border bg-none  border-white text-left text-white outline-none  focus:outline-none "
              {...props}
            />
          </div>
        )}
      />
    );
  }

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={inputType === "number" ? 0 : ""}
      render={({ field: { onChange, value } }) => (
        <div className={`bg-none  relative top-0 left-0 ${props?.text}`}>
          <input
            type={inputType}
            value={value}
            onChange={(e) =>
              onChange(
                inputType === "number" ? Number(e.target.value) : e.target.value
              )
            }
            className="w-full h-full align-text-bottom  px-4 py-3  border bg-none  border-white text-left text-white outline-none  focus:outline-none  "
            {...props}
          />

          {/* Show buttons only for number input type */}
          {inputType === "number" && (
            <NumberChangerBtn onChange={onChange} value={value} />
          )}
        </div>
      )}
    />
  );
};

export default Input;
