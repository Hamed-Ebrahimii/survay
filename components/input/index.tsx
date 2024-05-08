import { Checkbox, Radio } from "@mui/material";
import { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes, useState } from "react";
interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}
const Input = (props: InputProps) => {
  const [isChcked , setIsChecked] = useState(props.checked)
  return (
    <label
      className={
        `${
          isChcked || props.checked ? "scale-105 shadow-normal" : ""
        } flex break-normal transition-all flex-row-reverse  relative gap-2 text-justify hyphens-auto text-white  w-full glass justify-end !m-0  border rounded-lg p-4 text-lg font-medium  cursor-pointer ` +
        props.className
      }
      htmlFor={props.id}
    >
      <label htmlFor={props.id} className="text-white cursor-pointer">
        {props.label}
      </label>
      {props.type === "checkbox" && (
        <Checkbox
          color="default"
          className="text-orange-secondary"
          value={props.value}
          onChange={(e)=>{
            props.onChange && props.onChange(e)
            setIsChecked(e.target.checked)
          }}
          checked={isChcked}
          id={props.id}
        />
      )}
      {props.type === "radio" && (
        <Radio
          color="default"
          className="text-orange-secondary"
          size="small"
          value={props.value}
          onChange={props.onChange}
          checked={props.checked}
          id={props.id}
        />
      )}
      {props.type === "text" && <input type="text" {...props} />}
    </label>
  );
};
export default Input;
