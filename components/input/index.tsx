import { Checkbox, Radio } from "@mui/material";
import {
  DetailedHTMLProps,
  HTMLAttributes,
  InputHTMLAttributes,
  useState,
} from "react";
import { FaCheck } from "react-icons/fa";
import { FaRegCircleDot } from "react-icons/fa6";
interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}
const Input = (props: InputProps) => {
  const [isChcked, setIsChecked] = useState(props.checked);
  return (
    <label
      className={
        `${
          isChcked || props.checked ? "scale-105 shadow-normal" : ""
        }  break-normal transition-all flex-row-reverse  relative gap-2  text-justify mt-3 hyphens-auto text-white  w-full ${props.type !== 'text' ? 'glass border px-4 py-2 flex' : 'inline-block '} justify-end !m-0 w-full  rounded-lg  text-lg font-medium  cursor-pointer ` +
        props.className
      }
      htmlFor={props.id}
    >
      <label htmlFor={props.id} className="text-white cursor-pointer ">
        {props.label}
      </label>
      {props.type === "checkbox" && (
        <Checkbox
        
        checkedIcon={
          <FaCheck className="text-orange-secondary border-2 border-white rounded-sm bg-white font-bold size-5 text-4xl"/>
        }
          color="default"
          className=" text-white  hover:before:opacity-0 rounded-sm"
          value={props.value}
          ripple={false}
          onChange={(e) => {
            props.onChange && props.onChange(e);
            setIsChecked(e.target.checked);
          }}
          checked={isChcked}
          
          id={props.id}
        />
      )}
      {props.type === "radio" && (
        <Radio
          color="default"
          className={`size-5 text-orange-secondary mt-1 hover:bg-white ${props.checked && 'bg-white'} `}

          value={props.value}
          onChange={props.onChange}
          checked={props.checked}
          id={props.id}
        />
      )}
      {props.type === "text" && <input type="text" className="outline-none border border-orange-secondary py-2 px-3 mt-4 rounded-lg w-full text-gray-600 placeholder:text-gray-600" {...props} />}
    </label>
  );
};
export default Input;
