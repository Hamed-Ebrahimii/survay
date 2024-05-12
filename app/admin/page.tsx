"use client"
import { useState } from "react"
import MenuCreateSurvey from "./components/menuCreateSurvey"
import { converTypeToPersian } from "@/tools/convertTypeToPersian"
import { Button } from "@material-tailwind/react"
import { FaPencilAlt } from "react-icons/fa"
import { MdDeleteForever } from "react-icons/md"
import MenuEditSurvay from "./components/menuEditSurvay"
import { Survay } from "@/types/survay"
import { TbBrush } from "react-icons/tb";
import { SiTestcafe } from "react-icons/si";
const Admin = () => {
    const [showEditSurvayMenu, setShowEditSurvayMenu] = useState(false)
    const [survay, setSurvay] = useState<Survay[]>([])
    const [index, setIndex] = useState(0)
    const onRemove = (value : Survay) =>{
       setSurvay(survay.filter(item => item.QuestionID !== value.QuestionID))
        
    }
    return (
        <div className="w-full bg-white min-h-screen font-yekan">
            
            <MenuCreateSurvey setSorvay={setSurvay} survay={survay} />
            {
                showEditSurvayMenu && <MenuEditSurvay survay={survay[index]} setSurvay={setSurvay} open={showEditSurvayMenu} setOpen={setShowEditSurvayMenu} />
            }
            
        </div>
    )
}
export default Admin