import { Button } from "@mui/material";
import { ButtonHTMLAttributes, DetailedHTMLProps, } from "react";

interface Iprops extends  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  answer?: string;
  
}
const Btn = ( props : Iprops) => {
    return(
        <Button style={
            {
                fontFamily : 'yekan'
            }
        } type={props.type ? props.type : 'button'} disabled={props.disabled} variant="contained" color="info" className="w-full border border-slate-200 rounded-lg py-3 px-5 text-white font-medium text-lg" onClick={props.onClick}>
                {props.answer || props.children}
        </Button>
    )
    
};
export default Btn
