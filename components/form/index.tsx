import { Survay } from "@/types/survay";
import Btn from "./components/btn";
import Input from "../input";
import { Controller, useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { Context, InitialState } from "@/context/inedx";
import { toast } from "react-toastify";
import DropDown from "../dropDown";
interface FormProps extends Survay {
  pagination: (value: number) => void;
  tabIndex: number;
  numberSurvey: number;
}
interface Answer {
  answer: string;
}
const Form = ({
  answers,
  id,
  question,
  pagination,
  type,
  requierd,
  userAnswer,
  tabIndex,
  numberSurvey,
}: FormProps) => {
  // @ts-ignore
  const { state, setState }: InitialState = useContext(Context);
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<Answer>({
    mode: "all",
    defaultValues: {
      answer: userAnswer,
    },
  });
  useEffect(() => {
    if (errors.answer?.message) {
      toast(errors.answer.message, {
        type: "error",
      });
    }
  }, [errors.answer?.message]);
  const onSubmit = (data: Answer) => {
    const findeIndex = state.findIndex((item) => item.id === id);
    const find = state.find((item) => item.id === id);
    find!.userAnswer = data.answer;
    find && state.splice(findeIndex, 1, find);
    setState([...state]);
    pagination(1);
  };
  const checkDisabled = () => {
    console.log(errors.answer?.message);

    if (requierd) {
      if (isDirty || isValid) {
        return false;
      }
      return true;
    }
    return false;
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col h-full"
    >
      <p className="text-xl font-medium text-white font-yekan">{question}</p>
      <div className="w-full grid grid-cols-1 gap-5 mt-12 flex-1 ">
        {type === "button" &&
          answers?.map((item) => (
            <Controller
              rules={{ required: requierd && "پر کردن این بخش اجباری است" }}
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
            rules={{ required: requierd && "پر کردن این بخش اجباری است" }}
            name="answer"
            render={({ field }) => (
              <DropDown
                name={field.name}
                onChange={field.onChange}
                data={["بله", "خیر"]}
                lable=""
              />
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
                rules={{ required: requierd && "پر کردن این بخش اجباری است" }}
                control={control}
                render={({ field }) => (
                  <Input
                    type={type}
                    onChange={(e) => {
                      console.log(e.target.value);

                      field.onChange(e.target.value);
                    }}
                    checked={item.answer === userAnswer || undefined}
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
            rules={{ required: requierd && "پر کردن این بخش اجباری است" }}
            name="answer"
            render={({ field }) => (
              <textarea
                {...field}
                className="textarea textarea-info font-yekan"
              ></textarea>
            )}
          />
        )}
      </div>
      <div className="w-full flex items-center justify-between my-4">
        <div>
          <Btn
            type="button"
            disabled={tabIndex <= 0}
            onClick={() => pagination(-1)}
          >
            سوال قبلی
          </Btn>
        </div>
        <div className="min-w-[118px]">
          <Btn type="submit" disabled={checkDisabled()}>
            {numberSurvey <= tabIndex + 1 ? "پایان" : " سوال بعدی"}
          </Btn>
        </div>
      </div>
    </form>
  );
};
export default Form;
