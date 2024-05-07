import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import Radio from "./radio";

const Range = (
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => {
  const min = Number(props.min) || 0
  const max = Number(props.max) || 0
  const array = Array.from(Array(max) , (_ , i= min )=> i + 1)
  console.log(array);
  
  return (
    <div className=" flex items-center overflow-hidden gap-2 p-1 px-3 rounded-lg">
      
        {
          array.map(item => <Radio key={item} value={item} onChange={props.onChange}/>)
        }
      
    </div>
  );
};
export default Range