import { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes } from "react"

const Input = (props :  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) =>{
    return(
        <input {...props} className={`${props.type === "radio" && 'size-4 rounded-lg'}`}/>
    )
}
export default Input