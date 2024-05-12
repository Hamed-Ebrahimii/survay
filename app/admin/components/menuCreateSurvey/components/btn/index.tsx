import { HTMLAttributes } from "react"

const ButtonMenu = (props : HTMLAttributes<HTMLButtonElement>) =>{
    return(
        <button  {...props} className="w-full py-2 px-1 bg-green-300 text-white font-medium text-lg hover:bg-green-100 rounded-lg">
                {
                    props.children
                }
        </button>
    )
}
export default ButtonMenu