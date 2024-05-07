import { Survay, questionTypesTexts } from "@/types/survay";
import Btn from "./components/btn";
import Input from "../input";
import { Controller, useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { ContextSurvey, InitialState } from "@/context/inedx";
import { toast } from "react-toastify";
import DropDown from "../dropDown";
import Range from "../range";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import { debounce } from "@/tools/debounce";
import { SurveyValidationType } from "@/validation";
interface FormProps extends Survay {
  pagination: (value: number) => void;
  tabIndex: number;
  numberSurvey: number;
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
  const { state, setState }: InitialState = useContext(ContextSurvey);
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm<SurveyValidationType>({
    mode: "all",
    defaultValues: {
      answer: QuestionAnwseredValue,
    },
  });
  const questionRules = QuestionRules.split(",");
  const onSubmit = (data: SurveyValidationType) => {
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
    console.log(state);
    
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
    if (
      QuestionType !== 0 &&
      QuestionType !== 1 &&
      QuestionType !== 5 &&
      QuestionType !== 6 &&
      tabIndex + 1 < numberSurvey
    ) {
      const subscription = watch(() => handleSubmit(onSubmit)());
      return () => subscription.unsubscribe();
    }
  }, [watch]);
  useEffect(() => {
    console.log(errors.answer?.message);
  }, [errors.answer?.message]);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onChange={() => {
        debounce(1000, () => {
          if (errors.answer?.message) {
            toast(errors.answer.message, {
              type: "error",
            });
          }
        });
      }}
      className="w-full flex flex-col h-full !min-h-[450px]"
    >
      <p className="text-xl font-medium text-white font-yekan">
        {QuestionText}
      </p>
      <div className="w-full space-y-4  mt-12 flex-1   justify-start items-start overflow-hidden overflow-y-auto">
        {QuestionType === 0 &&
          QuestionRules.split(",")?.map((item) => (
            <Controller
              control={control}
              name="answer"
              key={item}
              rules={{ required: QuestionRequired === 1 }}
              render={({ field }) => <Input type="text" {...field} />}
            />
          ))}
        {QuestionType === 1 && (
          <Controller
            control={control}
            name="answer"
            rules={{ required: QuestionRequired === 1 }}
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
                  name="answer"
                  rules={{ required: QuestionRequired === 1 }}
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
                  className="flex gap-2 items-center w-ful bg-orange-secondary/80 hover:bg-orange-secondary justify-center !m-0 w-full border rounded-lg p-5 text-lg font-medium text-white peer-checked:bg-orange-secondary"
                >
                  {item}
                </label>
              </div>
            ))}
          </div>
        )}

        {QuestionType === 3 && (
          <div className="w-full grid grid-cols-2 items-center justify-center gap-5">
            {questionRules?.map((item) => (
              <div className="" key={item}>
                <Controller
                  name="answer"
                  rules={{ required: QuestionRequired === 1 }}
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
                  className="flex gap-2 items-center w-full bg-orange-secondary/80 hover:bg-orange-secondary justify-center !m-0  border rounded-lg p-5 text-lg font-medium text-white peer-checked:bg-orange-secondary"
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
            name="answer"
            rules={{ required: QuestionRequired === 1 }}
            render={({ field }) => (
              <div className="w-full px-4 py-1  rounded-full  flex items-center justify-center flex-wrap ">
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
            name="answer"
            rules={{ required: QuestionRequired === 1 }}
            render={({ field: { onChange, value } }) => (
              <DatePicker
                inputClass="py-1 px-2 rounded-lg outline-none placeholder:text-xs placeholder:text-white bg-orange-secondary text-white"
                value={value || ""}
                onChange={(date: DateObject) => {
                  onChange(date?.isValid ? date.format() : "");
                }}
                onOpenPickNewDate={false}
                format={"YYYY/MM/DD"}
                calendar={persian}
                locale={persian_fa}
                calendarPosition="bottom-right"
                editable={false}
                placeholder="تاریخ مورد نظر را انتخاب کنید"
              />
            )}
          />
        )}
        {QuestionType === 6 && (
          <Controller
            control={control}
            name="answer"
            rules={{ required: QuestionRequired === 1 }}
            render={({ field: { onChange, value } }) => (
              <DatePicker
                disableDayPicker
                format="HH:mm"
                plugins={[<TimePicker key={undefined} hideSeconds />]}
                calendar={persian}
                locale={persian_fa}
                calendarPosition="bottom-right"
                value={value || ""}
                onChange={(date: DateObject) => {
                  onChange(date?.isValid ? date.format() : "");
                }}
                onOpenPickNewDate={false}
                inputClass="py-1 px-2 rounded-lg outline-none placeholder:text-xs placeholder:text-white bg-orange-secondary text-white"
                placeholder="زمان مورد نظر خورد را انتخاب کنید"
                editable={false}
              />
            )}
          />
        )}
        {QuestionType === 7 && (
          <Controller
            control={control}
            rules={{ required: QuestionRequired === 1 }}
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
      </div>
      <div className="w-full flex items-center justify-between my-4 ">
        <div>
          <Btn
            className=""
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
