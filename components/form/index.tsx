import { Survay } from "@/types/survay";
import Btn from "./components/btn";
import Input from "../input";
import { Controller, useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { ContextSurvey, InitialState } from "@/context/inedx";
import { toast } from "react-toastify";
import DropDown from "../dropDown";
import Range from "../range";
import { Calendar, DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import TimePicker from "react-multi-date-picker/plugins/analog_time_picker";
import { debounce } from "@/tools/debounce";
import { SurveyValidationType } from "@/validation";
import "../../style/datepiker.css";
import InputFile from "../inputFile";
import { useDidUpdate } from "@mantine/hooks";
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
  isAttach,
  numberAttatchFile,
  typeAttatchFile,
  requierdAttach
}: FormProps) => {
  const { state, setState }: InitialState = useContext(ContextSurvey);
  const [isSelected, setIsSelcted] = useState<number[]>([]);
  const {
    control,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isValid },
  } = useForm<SurveyValidationType>({
    mode: "all",
    defaultValues: {
      answer: QuestionAnwseredValue,
    },
  });
  const questionRules = QuestionRules?.split(",") || [''];
  const onSubmit = (data: SurveyValidationType) => {
    const newState: Survay = {
      QuestionType,
      QuestionDesc,
      QuestionID,
      QuestionRequired,
      QuestionRules,
      QuestionText,
      isAttach,
      requierdAttach,
      QuestionAnwseredValue: data.answer,
    };
    const QuestionFindIndex = state.findIndex(
      (item) => item.QuestionID === QuestionID
    );
    state.splice(QuestionFindIndex, 1, newState);
    setState(state);


    debounce(1000, () => pagination(1));
  };
  const checkDisabled = () => {


    if (QuestionRequired || requierdAttach) {
      if (isValid) {
        return false;
      }
      return true;
    }
    return false;
  }



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
  useDidUpdate(() => {
    console.log(errors);

  }, [errors])
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
      autoComplete="off"
      className="w-full flex flex-col h-full mt-6"
    >
      <p className="text-xl font-medium text-white font-yekan">
        {QuestionText}
      </p>
      <div className="w-full space-y-4  flex-1 justify-start items-start ">
        {QuestionType === 0 && <>
          {
            QuestionRules.split(",")?.map((item) => (
              <Controller
                control={control}
                name="answer"
                key={item}
                rules={{ required: QuestionRequired === 1 }}
                render={({ field }) => (
                  <Input
                    label={item}
                    type="text"
                    {...field}
                    placeholder={QuestionText}
                  />
                )}
              />
            )
            )
          }

        </>}
        {QuestionType === 1 && (
          <>
            <Controller
              control={control}
              name="answer"
              rules={{ required: QuestionRequired === 1 }}
              render={({ field }) => (
                <textarea
                  {...field}
                  placeholder={QuestionText}
                  className="font-yekan w-full bg-white text-gray-600 border-orange-secondary border outline-none rounded-xl p-4 max-h-36 overflow-y-auto mt-4"
                ></textarea>
              )}
            />
          </>
        )}
        {QuestionType === 2 && (
          <div className="grid grid-cols-2 justify-center py-4 gap-4 items-center">
            {questionRules.map((item) => (
              <div
                key={item}
                className="flex w-3/4 relative items-center gap-2 mx-auto !margin-0"
              >
                <Controller
                  control={control}
                  name="answer"
                  rules={{ required: QuestionRequired === 1 }}
                  render={({ field }) => (
                    <Input
                      label={item}
                      onChange={(e) => {
                        field.onChange(e.target.value);
                      }}
                      type="checkbox"
                      id={item}
                      className="items-center"
                    ></Input>
                  )}
                />

              </div>
            ))}
          </div>
        )}
        {QuestionType === 3 && (
          <div className="w-full grid grid-cols-2 py-4 px-5  items-center justify-center gap-3">
            {questionRules?.map((item, index) => (
              <div className="w-11/12 mx-auto" key={index}>
                <Controller
                  name="answer"
                  rules={{ required: QuestionRequired === 1 }}
                  control={control}
                  render={({ field }) => (
                    <Input
                      label={item}
                      type={"radio"}
                      onChange={(e: { target: { value: any } }) => {
                        field.onChange(e.target.value);
                        setIsSelcted([index]);
                      }}
                      defaultChecked={
                        item === QuestionAnwseredValue || undefined
                      }
                      checked={isSelected.includes(index)}
                      value={item}
                      id={String(index)}
                      name="answer"
                      className="items-start"
                    />
                  )}
                />
              </div>
            ))}

          </div>
        )}

        {QuestionType === 4 && <>
          <Controller
            control={control}
            name="answer"

            rules={{ required: QuestionRequired === 1 }}
            render={({ field }) => (
              <div className="w-full px-4 py-1 rounded-full flex items-center justify-center flex-wrap ">
                <Range
                  {...field}
                  min={+questionRules[0]}
                  max={+questionRules.slice(-1)[0]}
                />

              </div>
            )}
          />

        </>
        }
        {QuestionType === 5 && (
          <>
            <Controller
              control={control}
              name="answer"
              rules={{ required: QuestionRequired === 1 }}
              render={({ field: { onChange, value } }) => (
                <Calendar
                  value={value || ""}
                  onChange={(date: DateObject) => {
                    onChange(date?.isValid ? date.format() : "");
                  }}
                  className="mx-auto mt-4"
                  format={"YYYY/MM/DD"}
                  calendar={persian}
                  locale={persian_fa}
                />
              )}
            />

          </>
        )}
        {QuestionType === 6 && (
          <>
            <Controller
              control={control}
              name="answer"

              rules={{ required: QuestionRequired === 1 }}
              render={({ field: { onChange } }) => (
                <Calendar
                  disableDayPicker
                  format="HH:mm"
                  plugins={[<TimePicker key={""} hideSeconds />]}
                  calendar={persian}
                  className=" mx-auto mt-4"
                  locale={persian_fa}
                  onChange={(date: DateObject) => {
                    console.log(date.format());

                    onChange(date?.isValid ? date.format() : "");
                  }}
                />
              )}
            />

          </>
        )}
        {QuestionType === 7 && (
          <>
            <Controller
              control={control}
              rules={{ required: QuestionRequired === 1 }}
              name="answer"
              render={({ field }) => (
                <div className="col-span-2">
                  <DropDown
                    placeholder={QuestionText}
                    name={field.name}
                    onChange={field.onChange}
                    data={questionRules}
                    lable=""
                    defaultValue={field.value}
                  />
                </div>
              )}
            />

          </>
        )}
      </div>
      <div className="mt-3">
        {
          isAttach &&
          <Controller
            control={control}
            name="attach"
            rules={{ required: requierdAttach }}
            render={({ field }) => (
              <InputFile
                htmlFor=""
                label=""
                accept={typeAttatchFile}
                error={errors.attach?.message}
                multiple={(numberAttatchFile || 0) > 1}
                numberFile={numberAttatchFile || 0}
                onChange={(e) => {
                  const file = Array.from(e.target.files || [])
                  if ((numberAttatchFile || 0) < file.length) {
                    setError('attach', {
                      message: `تعداد فایل بیش از ${numberAttatchFile} میباشد`
                    })
                    return
                  }
                  field.onChange(file)
                }}
                placeholder={QuestionText}
              />
            )}
          />
        }
      </div>
      <div className="w-full flex items-center justify-between mt-6 ">
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
          <Btn
            type="submit"
            onClick={() => pagination(1)}
            disabled={checkDisabled()}
          >
            {numberSurvey <= tabIndex + 1 ? "پایان" : " سوال بعدی"}
          </Btn>
        </div>
      </div>
    </form>
  );
};
export default Form;
