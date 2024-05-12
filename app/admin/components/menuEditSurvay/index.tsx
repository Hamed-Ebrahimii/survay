import { converTypeToPersian } from "@/tools/convertTypeToPersian"
import { Survay } from "@/types/survay"
import { useClickOutside, useDidUpdate } from "@mantine/hooks"
import { Button } from "@material-tailwind/react"
import { Box, Drawer, SelectChangeEvent } from "@mui/material"
import IOSSwitch from "../switch/iosSwitch"
import { Dispatch, SetStateAction, useState } from "react"
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from "react-hook-form"
import { AddSurvayValidation, AddSurvayValidationType } from "@/validation/addSurvay"
import { useMutation } from "@tanstack/react-query"
import { addSurvay } from "@/api/addSurvay"
const typeFile = ['فایل', 'عکس', 'ویدیو', 'پی دی اف', 'همه']

const MenuEditSurvay = ({ open, setOpen, survay, setSurvay }: { open: boolean, setOpen: (value: boolean) => void, survay: Survay, setSurvay: Dispatch<SetStateAction<Survay[]>> }) => {
    const ref = useClickOutside(() => setOpen(false))
    const [personName, setPersonName] = useState<string[]>([]);
    const { mutate } = useMutation({
        mutationFn: (data: Survay) => addSurvay(data)
    })
    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(

            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const { handleSubmit, control, formState: { errors } } = useForm<AddSurvayValidationType>({
        mode: 'all',
        resolver: zodResolver(AddSurvayValidation),
        defaultValues : {
            isAttach : false,
            QuestionRequired : false,
            requierdAttach : false
        }
    })
    const onSubmit = (data: AddSurvayValidationType) => {
        //@ts-ignore
        const newSurvay: Survay = {
            ...survay,

            ...data
        }
        mutate(newSurvay)
        setOpen(false)
        setSurvay((prev) => {
            const index = prev.findIndex((item: Survay) => item.QuestionID === newSurvay.QuestionID)
            prev.splice(index, 1, newSurvay)
            return prev
        })
    }
    useDidUpdate(() => {
        console.log(errors);

    }, [errors])
    return (
        <Drawer anchor="left" open={open}>
            <Box sx={{
                width: '350px',
                backgroundColor: 'white',
                borderRadius: '30px'
            }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-full py-4 border-b px-2 ">
                        <p className="text-lg font-medium text-gray-700">
                            نوع سوال : {converTypeToPersian(survay.QuestionType)}
                        </p>
                    </div>
                    <div className="w-full py-4 border-b px-2 space-y-3 ">
                        <p className="text-lg font-medium text-gray-400 ">
                            متن سوال
                        </p>
                        <Controller name="QuestionText" control={control} render={({ field }) => (
                            <input type="text" {...field} className="py-1 px-3 rounded-lg outline-none bg-gray-100 border text-gray-400 w-full" placeholder="سوال خود را وارد کنید" />
                        )} />
                    </div>
                    <div className="w-full py-4 border-b px-2  flex items-center justify-between">
                        <p className="text-lg font-medium text-gray-400 ">
                            پاسخ دادن به سوال اجباری باشد ؟
                        </p>
                        <Controller control={control} name="QuestionRequired" render={({ field }) => (
                            <IOSSwitch {...field} />
                        )} />
                    </div>
                    <div className="w-full py-4 border-b px-2  flex items-center justify-between">
                        <p className="text-lg font-medium text-gray-400 ">
                            فایل ضمیمه داشته باشد ؟
                        </p>
                        <Controller control={control} name="isAttach" render={({ field }) => (
                            <IOSSwitch  {...field} />
                        )} />
                    </div>
                    <div className="w-full py-4 border-b px-2  flex items-center justify-between">
                        <p className="text-lg font-medium text-gray-400 ">
                            وارد کردن فایل ضمیمه اجباری باشد ؟
                        </p>
                        <Controller rules={{ required: false }} control={control} name="requierdAttach" render={({ field }) => (
                            <IOSSwitch  {...field} />
                        )} />
                    </div>
                    <div className="w-full py-4 border-b px-2  flex items-center justify-between">
                        <p className="text-lg font-medium text-gray-400 ">
                            تعداد فایل های ضمیمه را وارد کنید
                        </p>
                        <Controller rules={{ required: false }} control={control} name="numberAttatchFile" render={({ field }) => (

                            <input type="number" min={0} onChange={(e) => {

                                field.onChange(Number(e.target.valueAsNumber))
                            }} className="outline-none border rounded-lg w-12" />
                        )} />
                    </div>
                    <div className="w-full py-4 border-b px-2  space-y-4">
                        <p className="text-lg font-medium text-gray-400 ">
                            نوع فایل ضمیمه چگونه باشد ؟
                        </p>
                        <Controller rules={{ required: false }} control={control} name="typeAttatchFile" render={({ field }) => (
                            <select {...field} className="select select-bordered w-full max-w-xs"  >
                                {
                                    typeFile.map(item => <option key={item} value={item}>{item}</option>
                                    )
                                }
                            </select>
                        )} />
                    </div>
                    {
                        survay.QuestionType === 3 || survay.QuestionType === 2 && <div className="w-full py-4 border-b px-2 space-y-3 ">
                            <p className="text-lg font-medium text-gray-400 ">
                                وارد کردن گزینه ها
                            </p>
                            <Controller rules={{ required: false }} control={control} name="QuestionRules" render={({ field }) => (
                                <input type="text" {...field} className="py-1 px-2 rounded-lg outline-none border placeholder:text-sm placeholder:text-gray-400 w-full" placeholder='برای جداکردن گزینه ها از "," استفاده کنید' />
                            )} />

                        </div>
                    }
                    <Button type="submit" color="green" className="mt-2 mr-3" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        ذخیره
                    </Button>
                </form>
            </Box>
        </Drawer>
    )
}
export default MenuEditSurvay