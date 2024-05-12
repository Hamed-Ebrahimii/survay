"use client"
import { Box, Drawer } from "@mui/material"
import BtnShowDrawer from "../btnShowDrawer"
import { useClickOutside } from "@mantine/hooks"
import { useState } from "react"
import ButtonMenu from "./components/btn"
import { Survay, SurvayList } from "@/types/survay"
import { convertType } from "@/tools/convertType"

const listSurvey: SurvayList[] = [{
    title: 'توضیحات',
    value: [0, 1]
},
{
    title: 'انتخابی',
    value: [2, 3]
},
{
    title: 'تاریخ',
    value: [6, 5]
},
{
    title: 'مقیاس',
    value: [4]
},
{
    title: 'لیست',
    value: [7]
}

]
const MenuCreateSurvey = ({ setSorvay , survay }: { setSorvay: (value: number[]) => void  , survay : number[]}) => {
    const [createSurvey, setCreateSurvey] = useState(false)
    const ref = useClickOutside(() => setCreateSurvey(false))
    const onSurvey = (item : number) => {
            setSorvay([...survay  , item])
            setCreateSurvey(false)
    }
    return (
        <div className="fixed ">
            <BtnShowDrawer onClick={() => setCreateSurvey(true)} />
            <Drawer open={createSurvey} anchor="right">
                <Box ref={ref} sx={{ width: '250px', backgroundColor: 'white', paddingY: '30px', paddingX: '15px' }}>
                    <div className="space-y-5">
                        {
                            listSurvey.map((item, index) => (
                                <div key={index}>
                                    <p className="text-gray-600 font-medium text-lg">
                                        {item.title}
                                    </p>
                                    <hr />
                                    <div className="space-y-4 mt-3">
                                        {
                                            item.value.map(item => (
                                            <ButtonMenu key={item} onClick={()=> onSurvey(item)}>
                                                {
                                                    convertType(item)
                                                }
                                            </ButtonMenu>))
                                        }

                                    </div>
                                </div>
                            )
                            )
                        }

                    </div>
                </Box>
            </Drawer>
        </div>
    )
}
export default MenuCreateSurvey