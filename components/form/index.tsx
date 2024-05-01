import { Survay } from "@/types/survay";
import Btn from "./components/btn";
import { MenuItem, Select } from "@mui/material";
import Input from "../input";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { debounce } from "@/tools/debounce";
interface Iprops extends Survay {
  handleAnswer: (value: string) => void;
  handleDisabled: (value: boolean) => void;
}
interface Answer {
  answer: string;
}
const Form = ({
  answers,
  id,
  question,
  title,
  handleAnswer,
  type,
  handleDisabled,
}: Iprops) => {
  const [onChange, setOnChange] = useState(false);
  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<Answer>({
    mode: "all",
  });
  useEffect(() => {
    if (getValues("answer")) {
      handleDisabled(false);
      handleAnswer(getValues("answer"));
    }
  }, [onChange]);
  return (
    <form
      onSubmit={handleSubmit(() => {})}
      className="w-full"
      onChange={() => setOnChange(!onChange)}
    >
      <p className="text-xl font-medium text-white font-yekan">{question}</p>
      <div className="w-full grid grid-cols-1 gap-5 mt-12">
        {type === "button" &&
          answers?.map((item) => (
            <Controller
            control={control}
            name="answer"
            key={item.id}
            render={({field})=>(
                <input
            className="w-full btn btn-info  rounded-lg py-3 px-5 text-white font-medium text-lg focus:border-2"
            type="button"
            
              value={item.answer}
              id={String(item.id)}
              onClick={(e) => {
                  //@ts-ignore
                  setOnChange(!onChange)
              
                field.onChange(e.target.value)}}
            />
            )}
            />
          ))}
        {type === "drowpDown" && (
          <Controller
            control={control}
            name="answer"
            render={({ field }) => (
              <Select
                dir="rtl"
                sx={{
                  backgroundColor: "white",
                  color: "#666",
                  fontFamily: "yekan",
                }}
                {...field}
              >
                {answers?.map((item, index) => (
                  <MenuItem
                    defaultChecked={index === 1}
                    style={{ fontFamily: "yekan" }}
                    value={item.answer}
                    key={item.id}
                  >
                    {item.answer}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        )}
        {type !== "drowpDown" &&
          type !== "button" &&
          type !== "textarea" &&
          answers?.map((item) => (
            <div className="flex gap-2 items-center w-full" key={item.id}>
              <label
                htmlFor={item.answer}
                className="text-lg font-yekan font-medium text-white"
              >
                {item.answer}
              </label>
              <Controller
                name="answer"
                control={control}
                render={({ field }) => (
                  <Input
                    type={type}
                    onChange={(e) => {
                      if (type === "text") {
                        debounce(3000 , ()=> field.onChange(e.target.value))
                        return
                      }
                      field.onChange(e.target.value)
                    }}
                    placeholder={item.answer}
                    value={type !== "text" ? item.answer : undefined}
                    id={item.answer}
                  />
                )}
              />
            </div>
          ))}
        {type === "textarea" && (
          <Controller
            control={control}
            name="answer"
            render={({ field }) => (
              <textarea
                onChange={(e)=>{
                    debounce(3000 , ()=> field.onChange(e.target.value))
                }}
                className="textarea textarea-info font-yekan"
              ></textarea>
            )}
          />
        )}
      </div>
    </form>
  );
};
export default Form;
