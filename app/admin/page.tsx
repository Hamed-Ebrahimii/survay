"use client"
import { useState } from "react"
import MenuCreateSurvey from "./components/menuCreateSurvey"

import MenuEditSurvay from "./components/menuEditSurvay"
import { Survay } from "@/types/survay"
import { TbBrush } from "react-icons/tb";
import { SiTestcafe } from "react-icons/si";
import SurvayBox from "./components/survayBox"
import Footer from "./components/footer"
import Header from "./components/header"
const Admin = () => {
    const [showEditSurvayMenu, setShowEditSurvayMenu] = useState(false)
    const [survay, setSurvay] = useState<Survay[]>([])
    const [index, setIndex] = useState(0)
    const onDelete = (value: Survay) => {
        setSurvay(survay.filter(item => item.QuestionID !== value.QuestionID))
    }
    const onEdit = (index: number) => {
        setIndex(index)
        setShowEditSurvayMenu(true)
    }
    return (
        <div className="w-full bg-white min-h-screen font-yekan">
            <Header/>
            <MenuCreateSurvey setSorvay={setSurvay} survay={survay} />
            {
                showEditSurvayMenu && <MenuEditSurvay survay={survay[index]} setSurvay={setSurvay} open={showEditSurvayMenu} setOpen={setShowEditSurvayMenu} />
            }
            <div className="w-full h-screen flex items-center justify-around flex-col">
            <SurvayBox survay={survay[0]} onDelete={onDelete} onEdit={onEdit}/>
            </div>
            <Footer/>
        </div>
    )
}
export default Admin