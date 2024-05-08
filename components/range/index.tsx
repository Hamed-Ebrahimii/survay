import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import Radio from "./radio";

const Range = (
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => {
  const min = Number(props.min) || 0;
  const max = Number(props.max) || 0;
  const array = Array.from(Array(max), (_, i = min) => i + 1);
  return (
    <div className="  items-center grid grid-cols-5 gap-2 py-5 px-3 rounded-lg">
      {array.map((item) => (
        <Radio key={item} value={item} onChange={props.onChange} />
      ))}
    </div>
  );
};
export default Range;
