import { HTMLAttributes } from "react";
import { FaMinus } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";
interface PropsBtn extends HTMLAttributes<HTMLButtonElement> {
    isOpen: boolean
}
const BtnShowDrawer = (props: PropsBtn) => {
    return (
        <button {...props} className="size-10 bg-green-400 rounded-lg absolute  top-4 -left-12 flex items-center justify-center">
            {
                props.isOpen ? <FaMinus className="text-lg text-white font-medium"/>
                    : <TiPlus className="text-lg text-white font-medium" />
            }
        </button>
    )
}
export default BtnShowDrawer