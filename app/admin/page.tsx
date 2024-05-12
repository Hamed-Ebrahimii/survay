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
            
            <MenuCreateSurvey setSorvay={setSurvay} survay={survay} />
            {
                showEditSurvayMenu && <MenuEditSurvay survay={survay[index]} setSurvay={setSurvay} open={showEditSurvayMenu} setOpen={setShowEditSurvayMenu} />
            }
            <div className="w-full fixed bottom-0 py-4 px-3 bg-gray-100 shadow-md ">

            </div>
        </div>
    )
}
export default Admin