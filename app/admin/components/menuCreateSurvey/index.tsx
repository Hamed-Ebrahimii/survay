"use client"
import { Box, Drawer } from "@mui/material"
import BtnShowDrawer from "../btnShowDrawer"
import { useClickOutside } from "@mantine/hooks"
import { useState } from "react"
import ButtonMenu from "./components/btn"

const MenuCreateSurvey = () =>{
    const [createSurvey , setCreateSurvey] = useState(false)
    const ref = useClickOutside(()=> setCreateSurvey(false))
    return(
        <div className="fixed ">
                <BtnShowDrawer onClick={()=> setCreateSurvey(true)}/>
                <Drawer open={createSurvey} anchor="right">
                    <Box ref={ref} sx={{width : '250px' , backgroundColor : 'white' , paddingY : '30px' , paddingX : '15px'}}>
                        <div className="space-y-5">
                        <div>
                        <p className="text-gray-600 font-medium text-lg">
                            توضیحات
                        </p> 
                        <hr />
                        <div className="space-y-4 mt-3">
                            <ButtonMenu>
                                توضیحات کوتاه
                            </ButtonMenu>
                            <ButtonMenu>
                                توضیحات کامل
                            </ButtonMenu>
                        </div>
                        </div>
                        <div>
                        <p className="text-gray-600 font-medium text-lg">
                            انتخابی
                        </p> 
                        <hr />
                        <div className="space-y-4 mt-3">
                            <ButtonMenu>
                               چند انتخابی
                            </ButtonMenu>
                            <ButtonMenu>
                               تک انتخابی
                            </ButtonMenu>
                        </div>
                        </div>
                        <div>
                        <p className="text-gray-600 font-medium text-lg">
                            تاریخ
                        </p> 
                        <hr />
                        <div className="space-y-4 mt-3">
                            <ButtonMenu>
                              تقویم
                            </ButtonMenu>
                            <ButtonMenu>
                              زمان
                            </ButtonMenu>
                        </div>
                        </div>
                        <div>
                        <p className="text-gray-600 font-medium text-lg">
                            لیست
                        </p> 
                        <hr />
                        <div className="space-y-4 mt-3">
                            <ButtonMenu>
                              لیست
                            </ButtonMenu>
                            
                        </div>
                        </div>
                        <div>
                        <p className="text-gray-600 font-medium text-lg">
                            مقیاس
                        </p> 
                        <hr />
                        <div className="space-y-4 mt-3">
                            <ButtonMenu>
                              مقیاس دکمه ای
                            </ButtonMenu>
                            
                        </div>
                        </div>
                        </div>
                    </Box>
                </Drawer>
                </div>
    )
}
export default MenuCreateSurvey