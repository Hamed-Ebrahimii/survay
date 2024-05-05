import { DetailedHTMLProps, InputHTMLAttributes } from "react";

const Range = (
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => {
    const number = props.max - props.min
    const lengthRange = new Array(6)
    console.log(lengthRange);
    
  return (
    <div className="w-full">
     {
        lengthRange.map((item , index)=> <button key={index}>{1}</button>)
     }
    </div>
  );
};
export default Range