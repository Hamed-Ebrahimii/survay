import { DetailedHTMLProps, useState } from "react";
import BoxFile from "./components/boxFile";
import Btn from "../form/components/btn";
interface InputProps
    extends DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    label: string;
    htmlFor: string;
    requier?: boolean;
    error?: string;
    accept?: "image" | "video" | "music" | "pdf" | "all";
    uploadWidthChange?: boolean;
    isPending?: boolean;
    numberFile?: number,
    setError?: (error: string) => void,
    file?: File[]
}
export interface Accept {
    image: "image/*";
    video: "video/mp4,video/x-m4v,video/*";
    music: "audio/mp3";
    pdf: "application/pdf";
    all: "";
}
const acceptType: Accept = {
    image: "image/*",
    video: "video/mp4,video/x-m4v,video/*",
    music: "audio/mp3",
    pdf: "application/pdf",
    all: "",
};
const InputFile = (props: InputProps) => {
    const [file, setFile] = useState<File[]>([]);

    const handleRemove = (item: File) => {
        setFile(file.filter((value: File) => value.name !== item.name));
    };
    return (
        <div className="col-span-2 flex flex-col">
            <p className="text-white text-sm font-medium">فایل ضمیمه</p>
            <label htmlFor="attach" className={`flex  p-2 w-full rounded-lg bg-white border items-center border-orange-secondary gap-2 ${file.length > 0 && 'rounded-b-none border-b-0'}`}>
                <label htmlFor="attach" className="px-2 py-1 bg-blue-400 text-white font-medium  rounded-lg">
                    انتخاب فایل
                </label>
                <p className="text-gray-500 font-medium">
                    {
                        file.length <= 0 ? 'فایلی انتخاب نشده است' : `تعداد فایل های انتخاب شده : ${file.length}`
                    }
                </p>
            </label>
            <input
                type="file"
                multiple={props.multiple}
                id="attach"
                onChange={(e) => {
                    props.onChange && props.onChange(e);
                    const files = Array.from(e.target.files || []);
                    setFile(files);
                }}
                accept={acceptType[props.accept || "all"]}
                className={`hidden`}
            />
            {file.length > 0 && (
                <div className={`w-full relative bottom-0 z-30 bg-white rounded-b-lg border p-3 grid grid-cols-2 gap-3 max-h-32 overflow-auto  border-orange-secondary border-t-gray-300`}>
                    {file.map((item) => (
                        <BoxFile
                            file={item}
                            onClick={() => handleRemove(item)}
                            type={item.type}
                            key={item.name}
                        />
                    ))}
                </div>
            )}
            {
                props.error && <p className="text-xs text-red-500"> * {props.error}</p>
            }
        </div>
    )
}
export default InputFile