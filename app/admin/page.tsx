"use client"
import { useState } from "react"
import MenuCreateSurvey from "./components/menuCreateSurvey"
import { Survay } from "@/types/survay"

const Admin = () =>{
    const [listSurvey , setListSurvey] = useState<number[]>([])
    return(
        <div className="w-full bg-blue-gray-100 min-h-screen">
                <MenuCreateSurvey setSorvay={setListSurvey} survay={listSurvey}/>
                <div className="w-1/2 mx-auto  px-3 py-4 rounded-lg border">
                    
                </div>
        </div>
    )
}
export default Admin