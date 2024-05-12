"use client"
import { useState } from "react"
import MenuCreateSurvey from "./components/menuCreateSurvey"
import { converTypeToPersian } from "@/tools/convertTypeToPersian"
import { Button } from "@material-tailwind/react"
import { FaPencilAlt } from "react-icons/fa"
import { MdDeleteForever } from "react-icons/md"
import MenuEditSurvay from "./components/menuEditSurvay"
import { Survay } from "@/types/survay"
const Admin = () => {
    const [showEditSurvayMenu, setShowEditSurvayMenu] = useState(false)
    const [survay, setSurvay] = useState<Survay[]>([])
    const [index, setIndex] = useState(0)
    return (
        <div className="w-full bg-blue-gray-100 min-h-screen font-yekan">
            <MenuCreateSurvey setSorvay={setSurvay} survay={survay} />
            {
                showEditSurvayMenu && <MenuEditSurvay survay={survay[index]} open={showEditSurvayMenu} setOpen={setShowEditSurvayMenu} />
            }
            <div className="flex  items-center justify-center w-full h-screen">
                <div className="w-1/2 mx-auto   px-3 py-4 rounded-lg bg-white">
                    <p className="text-gray-400 font-medium text-lg text-center">
                        لیست سوالات ساخته شده
                    </p>
                    {
                        survay.map((item, index) => (
                            <div className="w-full bg-white shadow-sm border grid grid-cols-3 items-center justify-end py-2 px-3 rounded-lg" key={item.QuestionID}>
                                <p className="text-gray-400 font-medium ">
                                    {
                                        converTypeToPersian(item.QuestionType)
                                    }
                                </p>
                                <div className="flex items-center gap-2 text-gray-400 font-medium ">
                                    <p>
                                        تایتل:
                                    </p>
                                    <p>

                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Button color="amber" placeholder={''} onClick={() => { setShowEditSurvayMenu(true); setIndex(index) }} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} >
                                        <FaPencilAlt className="text-white font-medium text-lg" />

                                    </Button>
                                    <Button onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} color="red" placeholder={''} >
                                        <MdDeleteForever className="text-white font-medium text-lg" />
                                    </Button>
                                </div>
                            </div>))
                    }
                </div>
            </div>
        </div>
    )
}
export default Admin