"use client"
import { useState } from "react"
import MenuCreateSurvey from "./components/menuCreateSurvey"

import MenuEditSurvay from "./components/menuEditSurvay"
import { Survay } from "@/types/survay"
import { TbBrush } from "react-icons/tb";
import { SiTestcafe } from "react-icons/si";
const Admin = () => {
    const [showEditSurvayMenu, setShowEditSurvayMenu] = useState(false)
    const [survay, setSurvay] = useState<Survay[]>([])
    const [index, setIndex] = useState(0)
    const onRemove = (value: Survay) => {
        setSurvay(survay.filter(item => item.QuestionID !== value.QuestionID))

    }
    return (
        <div className="w-full bg-white min-h-screen font-yekan">
            <div className="w-full flex items-center justify-center bg-[#0A6847] py-3 gap-4 shadow-xl">
                <button className="text-xl text-white">
                    <TbBrush />
                </button>
                <button className="text-xl text-white"><SiTestcafe />
                </button>
                <button className="text-xl text-white"></button>
            </div>
            <MenuCreateSurvey setSorvay={setSurvay} survay={survay} />
            {
                showEditSurvayMenu && <MenuEditSurvay survay={survay[index]} setSurvay={setSurvay} open={showEditSurvayMenu} setOpen={setShowEditSurvayMenu} />
            }

        </div>
    )
}
export default Admin