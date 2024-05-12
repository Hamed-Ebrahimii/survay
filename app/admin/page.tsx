"use server"
import { useState } from "react"
import MenuCreateSurvey from "./components/menuCreateSurvey"

const Admin = () =>{
    const [listSurvey , setListSurvey] = useState([])
    return(
        <div className="w-full bg-blue-gray-100 min-h-screen">
                <MenuCreateSurvey/>
                <div className="w-1/2 mx-auto  px-3 py-4 rounded-lg border">
                        
                </div>
        </div>
    )
}
export default Admin