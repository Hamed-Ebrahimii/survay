import { Survay } from "@/types/survay";
import Btn from "./components/btn";
import { Button, MenuItem, Select } from "@mui/material";
import Input from "../input";
import { Controller, useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { debounce } from "@/tools/debounce";
import { Context, InitialState } from "@/context/inedx";
import { ToastContainer } from "react-toastify";
interface Iprops extends Survay {
  handleTabs: (value: number) => void;
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
  handleTabs,
  type,
  handleDisabled,
}: Iprops) => {
  // @ts-ignore
  const { state, setState }: InitialState = useContext(Context);
  const {
    control,
    handleSubmit,
    formState: { errors, disabled }
  
  } = useForm<Answer>({
    mode: "all",
  });
  const onSubmit = (data: Answer) => {
    const findeIndex = state.findIndex((item) => item.id === id);
    const find = state.find((item) => item.id === id);
    find!.userAnswer = data.answer;
    find && state.splice(findeIndex, 1, find);
    setState([...state]);
    handleTabs(1);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <ToastContainer />
      <p className="text-xl font-medium text-white font-yekan">{question}</p>
      <div className="w-full grid grid-cols-1 gap-5 mt-12">
        {type === "button" &&
          answers?.map((item) => (
            <Controller
              control={control}
              name="answer"
              key={item.id}
              render={({ field }) => (
                <input
                  className="w-full btn btn-info  rounded-lg py-3 px-5 text-white font-medium text-lg focus:border-2"
                  type="submit"
                  value={item.answer}
                  id={String(item.id)}
                  onClick={(e) => {
                    //@ts-ignore
                    field.onChange(e.target.value);
                    
                  }}
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
                      console.log(e.target.value);

                      field.onChange(e.target.value);
                    }}
                    placeholder={item.answer}
                    value={type !== "text" ? item.answer : undefined}
                    id={item.answer}
                    name="answer"
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
                onChange={(e) => {
                  debounce(3000, () => field.onChange(e.target.value));
                }}
                className="textarea textarea-info font-yekan"
              ></textarea>
            )}
          />
        )}
      </div>
      {
        type !== 'button' &&
        <div className="w-1/6 my-5">
          <Btn type="submit" disabled={disabled}>تایید</Btn>
        </div>
      }
    </form>
  );
};
export default Form;
