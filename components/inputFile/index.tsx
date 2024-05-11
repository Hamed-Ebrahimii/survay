import { DetailedHTMLProps, useState } from "react";
import BoxFile from "./components/boxFile";
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
interface Accept {
    image: "image/";
    video: "video/mp4,video/x-m4v,video/*";
    music: "audio/mp3";
    pdf: "application/pdf";
    all: "";
}
const acceptType: Accept = {
    image: "image/",
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
        <div className="col-span-2">
            <input
                type="file"
                multiple={props.multiple}

                onChange={(e) => {
                    props.onChange && props.onChange(e);
                    const files = Array.from(e.target.files || []);
                    setFile(files);
                }}

                accept={acceptType[props.accept || "all"]}
                className={`${file.length > 0 ? "rounded-t-lg rounded-b-0" : "rounded-lg"
                    } border w-full bg-gray-100   py-1  outline-none placeholder:text-gray-400 text-gray-500 placeholder:text-xs placeholder:font-semibold file:mr-1 file:rounded-md file:border-0 file:ml-4  file:bg-blue-500 file:py-1 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-primary-700 ${props.type === "file" ? "px-1" : "px-5"
                    } ${props.error ? "border-red-400" : "border-gray-200"}`}
            />

            {file.length > 0 && (
                <div className="w-full relative bottom-2 z-30 bg-gray-100 rounded-b-lg border p-3 grid grid-cols-2 gap-3 max-h-32 overflow-auto">
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

        </div>
    )
}
export default InputFile