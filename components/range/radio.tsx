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
        }}
        type="radio"
        name="range"
        className="hidden peer"
      />
      <label
        htmlFor={String(props.value)}
        className={`group item py-3 transition-all hover:scale-110 px-6 text-lg text-white font-medium  flex justify-center items-center  rounded-lg bg-orange-secondary/80 hover:bg-orange-secondary cursor-pointer `}
      >
        <span className={'group-hover scale-110 transition-all'}>
        {props.value}
        </span>
      </label>
    </div>
  );
};
export default Radio;
