import { HTMLAttributes } from "react";
import { TiPlus } from "react-icons/ti";

const BtnShowDrawer = (props : HTMLAttributes<HTMLButtonElement>) =>{
    return(
        <button {...props} className="size-10 bg-green-400 rounded-lg absolute  top-4 -left-12 flex items-center justify-center">
                <TiPlus className="text-lg text-white font-medium"/>
        </button>
    )
}
export default BtnShowDrawer