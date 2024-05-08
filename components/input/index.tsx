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
        props.type === "radio" && "size-4 radio radio-warning mt-1 rounded-lg "
      } ${
        props.type === "checkbox" && "checkbox !size-6 border-orange-secondary glass [--chkfg:white] [--chkbg:orange]"
      } ${props.type === "text" && "input input-bordered input-info w-full bg-gray-50 font-yekan"} ${props.className}`}
    />
  );
};
export default Input;
