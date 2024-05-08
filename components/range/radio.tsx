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
        className={`clicky peer-checked:shadow-neo hover:bg-orange-primary peer-checked:scale-105 transition-all`}
      >
        <span className={'group-hover scale-110 transition-all'}>
        {props.value}
        </span>
      </label>
    </div>
  );
};
export default Radio;
