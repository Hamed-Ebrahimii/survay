import { DetailedHTMLProps, InputHTMLAttributes, ReactNode, useState } from "react"

const Radio = (props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >) =>{
    const [cheked , setChecked] = useState(false)
    return(
      <>
        <label htmlFor={String(props.value)} className={`border-r py-3 px-6 text-lg text-white font-medium ${cheked ? 'bg-blue-800' : 'bg-blue-700'}  hover:bg-blue-800 `}>
          {props.value}
        </label>
        <input {...props} checked={cheked} id={String(props.value)} onChange={(e)=>{props.onChange && props.onChange(e) ; setChecked(!cheked) ; console.log(cheked);
         }} type="radio" name="range" className="hidden"/>
      </>
                
        
    )
}
export default Radio