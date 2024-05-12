import { HTMLAttributes } from "react";
import { TiPlus } from "react-icons/ti";

const BtnShowDrawer = (props : HTMLAttributes<HTMLButtonElement>) =>{
    return(
        <button {...props} className="size-10 bg-green-400 rounded-lg relative  top-1 right-1 flex items-center justify-center">
                <TiPlus className="text-lg text-white font-medium"/>
        </button>
    )
}
export default BtnShowDrawer