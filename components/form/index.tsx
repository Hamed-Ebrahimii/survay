import { Survay, questionTypesTexts } from "@/types/survay";
import Btn from "./components/btn";
import Input from "../input";
import { Controller, useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { Context, InitialState } from "@/context/inedx";
import { toast } from "react-toastify";
import DropDown from "../dropDown";
import Range from "../range";
interface FormProps extends Survay {
  pagination: (value: number) => void;
  tabIndex: number;
  numberSurvey: number;
}
interface Answer {
  answer: string;
}
const Form = ({
  QuestionType,
  tabIndex,
  numberSurvey,
  pagination,
  QuestionRequired,
  QuestionRules,
  QuestionText,
  QuestionAnwseredValue,
  QuestionDesc,
  QuestionID,
}: FormProps) => {
  // @ts-ignore
  const { state, setState }: InitialState = useContext(Context);
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm<Answer>({
    mode: "all",
    defaultValues: {
      answer: QuestionAnwseredValue,
    },
  });
  useEffect(() => {
    if (errors.answer?.message) {
      toast(errors.answer.message, {
        type: "error",
      });
    }
  }, [errors.answer?.message]);
  const questionRules = QuestionRules.split(",");
  const onSubmit = (data: Answer) => {
    const newState: Survay = {
      QuestionType,
      QuestionDesc,
      QuestionID,
      QuestionRequired,
      QuestionRules,
      QuestionText,
      QuestionAnwseredValue: data.answer,
    };
    const QuestionFindIndex = state.findIndex(
      (item) => item.QuestionID === QuestionID
    );
    state.splice(QuestionFindIndex, 1, newState);
    setState(state);
    pagination(1);
  };
  const checkDisabled = () => {
    if (QuestionRequired) {
      if (isDirty || isValid) {
        return false;
      }
      return true;
    }
    return false;
  };
  useEffect(() => {
    if (QuestionType === 3 && tabIndex + 1 < numberSurvey) {
      const subscription = watch(() => handleSubmit(onSubmit)());

      return () => subscription.unsubscribe();
    }
  }, [handleSubmit, watch]);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col h-full !min-h-[450px]"
    >
      <p className="text-xl font-medium text-white font-yekan">
        {QuestionText}
      </p>
      <div className="w-full space-y-4  mt-12 flex-1   justify-start items-start overflow-hidden overflow-y-auto">
        {QuestionType === 0 &&
          QuestionRules.split(",")?.map((item) => (
            <Controller
              rules={{
                required:
                  QuestionRequired === 1 && "پر کردن این بخش اجباری است",
              }}
              control={control}
              name="answer"
              key={item}
              render={({ field }) => <Input type="text" {...field} />}
            />
          ))}
        {QuestionType === 7 && (
          <Controller
            control={control}
            rules={{
              required: QuestionRequired == 1 && "پر کردن این بخش اجباری است",
            }}
            name="answer"
            render={({ field }) => (
              <div className="col-span-2">
                <DropDown
                  name={field.name}
                  onChange={field.onChange}
                  data={["بله", "خیر"]}
                  lable=""
                  defaultValue={field.value}
                />
              </div>
            )}
          />
        )}
        {QuestionType === 3 && (
          <div className="w-full grid grid-cols-2 items-center justify-center gap-5">
            {questionRules?.map((item) => (
              <div className="" key={item}>
                <Controller
                  name="answer"
                  rules={{
                    required:
                      QuestionRequired === 1 && "پر کردن این بخش اجباری است",
                  }}
                  control={control}
                  render={({ field }) => (
                    <Input
                      type={"radio"}
                      onChange={(e) => {
                        field.onChange(e.target.value);
                      }}
                      defaultChecked={
                        item === QuestionAnwseredValue || undefined
                      }
                      placeholder={item}
                      value={item}
                      id={item}
                      name="answer"
                      className="hidden peer"
                    />
                  )}
                />
                <label
                  htmlFor={item}
                  className="flex gap-2 items-center w-ful bg-blue-custome hover:bg-blue-primary justify-center !m-0 w-full border rounded-lg p-5 text-lg font-medium text-white peer-checked:bg-blue-primary"
                >
                  {item}
                </label>
              </div>
            ))}
          </div>
        )}
        {QuestionType === 1 && (
          <Controller
            control={control}
            rules={{
              required: QuestionRequired === 1 && "پر کردن این بخش اجباری است",
            }}
            name="answer"
            render={({ field }) => (
              <textarea
                {...field}
                className="textarea textarea-info font-yekan w-full"
              ></textarea>
            )}
          />
        )}
        {QuestionType === 2 && (
          <div className="grid grid-cols-2 gap-5">
            {questionRules.map((item) => (
              <div key={item} className="flex items-center gap-2 !margin-0">
                <Controller
                  control={control}
                  rules={{
                    required:
                      QuestionRequired === 1 && "پر کردن این بخش اجباری است",
                  }}
                  name="answer"
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="checkbox"
                      id={item}
                      className=" font-yekan w-full hidden peer"
                    ></Input>
                  )}
                />
                <label
                  htmlFor={item}
                  className="flex gap-2 items-center w-ful bg-blue-custome hover:bg-blue-primary justify-center !m-0 w-full border rounded-lg p-5 text-lg font-medium text-white peer-checked:bg-blue-primary"
                >
                  {item}
                </label>
              </div>
            ))}
          </div>
        )}
        {QuestionType === 4 && (
          <Controller
            control={control}
            rules={{
              required: QuestionRequired === 1 && "پر کردن این بخش اجباری است",
            }}
            name="answer"
            render={({ field }) => (
              <div className="w-full px-4 py-1  rounded-full  flex items-center justify-center  ">
                <Range
                  {...field}
                  min={+questionRules[0]}
                  max={+questionRules.slice(-1)[0]}
                />
              </div>
            )}
          />
        )}
        {QuestionType === 5 && (
          <Controller
            control={control}
            rules={{
              required: QuestionRequired === 1 && "پر کردن این بخش اجباری است",
            }}
            name="answer"
            render={({ field }) => (
              <Input
                {...field}
                type="date"
                className="textarea textarea-info font-yekan w-full"
              ></Input>
            )}
          />
        )}
      </div>
      <div className="w-full flex items-center justify-between my-4 ">
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
