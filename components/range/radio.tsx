import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
  useState,
} from "react";

const Radio = (
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => {
  return (
    <div>
     
      <input
        {...props}
        id={String(props.value)}
        onChange={(e) => {
          props.onChange && props.onChange(e);
          console.log(e.target.checked);
        }}
        type="radio"
        name="range"
        className="hidden peer"
      />
       <label
        htmlFor={String(props.value)}
        className={`border-r py-3 block px-6 text-lg text-white font-medium peer-checked:bg-blue-primary bg-blue-custome  hover:bg-blue-primary`}
      >
        {props.value}
      </label>
    </div>
  );
};
export default Radio;