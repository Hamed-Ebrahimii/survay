import { converTypeToPersian } from "@/tools/convertTypeToPersian"
import { Survay } from "@/types/survay"
import { Button } from "@material-tailwind/react"
import { MdDeleteForever, MdEdit } from "react-icons/md"
import SurvayIcon from "../icon/survayIcon"

const SurvayBox = ({ survay, onDelete, onEdit }: { survay: Survay, onDelete: (value: Survay) => void, onEdit: (index: number) => void }) => {
    return (
        <div className="w-1/2 rounded-md px-4 py-5 shadow-lg">
            <div className="w-full flex items-center justify-between">
                <p className="text-lg font-medium text-gray-600 ">
                    {
                        converTypeToPersian(survay?.QuestionType)
                    }
                </p>
                <div className="text-gray-600 text-lg font-medium">
                    <SurvayIcon index={survay?.QuestionType} />
                </div>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-gray-400 text-lg">
                    متن سوال
                </p>
                <p className="text-gray-500 text-lg">
                    {
                        survay?.QuestionText
                    }
                </p>
            </div>
            <div className="w-full flex items-center justify-end gap-2">
                <Button onClick={() => onEdit(0)} color="amber" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <MdEdit className="text-white text-lg " />
                </Button>
                <Button color="red" onClick={() => onDelete(survay)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <MdDeleteForever className="text-white text-lg" />

                </Button>
            </div>
        </div>
    )
}
export default SurvayBox