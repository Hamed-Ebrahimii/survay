import { Button } from "@mui/material";
import { ButtonHTMLAttributes, DetailedHTMLProps, } from "react";

interface Iprops extends  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  answer?: string;
  
}
const Btn = ( props : Iprops) => {
    return(
        <button style={
            {
                fontFamily : 'yekan'
            }
        } type={props.type ? props.type : 'button'} disabled={props.disabled}   className="w-full disabled:opacity-50 bg-blue-custome/80 hover:bg-blue-custome  rounded-lg py-3 px-5 text-white font-medium text-lg" onClick={props.onClick}>
                {props.answer || props.children}
        </button>
    )
    
};
export default Btn
