import { Survay } from "@/types/survay";
import Btn from "./components/btn";
import { MenuItem, Select } from "@mui/material";
import Input from "../input";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
interface Iprops extends Survay {
  handleAnswer: (value: number) => void;
  handleDisabled : (value : boolean) => void
}
interface Answer {
    answer : string
}
const Form = ({ answers, id, question, title, handleAnswer, type , handleDisabled }: Iprops) => {
    const [onChange , setOnChange ] = useState(false)
   const {control , getValues    , handleSubmit , formState : {errors}} = useForm<Answer>({
            mode : 'all'
   })
   useEffect(()=>{
       console.log(getValues('answer') , errors  );
    if(getValues('answer')){
        handleDisabled(false)
    }
   } , [onChange])
  return (
    <form onSubmit={handleSubmit(()=>{})} className="w-full" onChange={()=> setOnChange(!onChange)}>
      <p className="text-xl font-medium text-white font-yekan">{question}</p>
      <div className="w-full grid grid-cols-1 gap-5 mt-12">
        {type === "button" &&
          answers?.map((item) => (
            <Btn
              key={item.id}
              answer={item.answer}
              id={String(item.id)}
              onClick={() => handleAnswer(id)}
            />
          ))}
        {type === "drowpDown" && (
          <Controller
          control={control}
          name="answer"
          render={({field})=>(
            <Select dir="rtl" sx={{
                backgroundColor : 'white',
                color : '#666'
            }} {...field}>
            {
                answers?.map((item , index) => <MenuItem defaultChecked={index ===1} value={item.answer} key={item.id}>{item.answer}</MenuItem>)
            }
          </Select>
          )}
          />
        )}
        {type !== "drowpDown" &&
          type !== "button" &&
          answers?.map((item) => (
            <div className="flex gap-2 items-center" key={item.id}>
            <label htmlFor={ item.answer} className="text-lg font-yekan font-medium text-white">{item.answer}</label>
            <Controller
            name="answer"control={control}
            render={({field})=>(
                
                <Input  type={type} {...field} placeholder={item.answer}  value={ item.answer} id={ item.answer} />
            )}
            />
            </div>
          ))}
      </div>
    </form>
  );
};
export default Form;
