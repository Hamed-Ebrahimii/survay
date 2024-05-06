import { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes } from "react";

const Input = (
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => {
  return (
    <input
      {...props}
      className={` ${
        props.type === "radio" && "size-4 radio radio-info  rounded-lg"
      } ${
        props.type === "checkbox" && "checkbox checkbox-info [--chkfg:white]"
      } ${props.type === "text" && "input input-bordered input-info w-full bg-gray-50 font-yekan"} ${props.className}`}
    />
  );
};
export default Input;
