"use client"
import { Box } from "@mui/material"
import anime from 'animejs/lib/anime.es.js';
import BtnShowDrawer from "../btnShowDrawer"
import { useClickOutside, useDidUpdate } from "@mantine/hooks"
import { useState } from "react"
import ButtonMenu from "./components/btn"
import { Survay, SurvayList } from "@/types/survay"
import { converTypeToPersian } from "@/tools/convertTypeToPersian"
import random from 'random'
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
const MenuCreateSurvey = ({ setSorvay, survay }: { setSorvay: (value: Survay[]) => void, survay: Survay[] }) => {
    const [createSurvey, setCreateSurvey] = useState(false)
    const ref = useClickOutside(() => setCreateSurvey(false))
    const onSurvey = (item: number) => {

        const newSurvay: Survay = {
            isAttach: false,
            QuestionAnwseredValue: '',
            QuestionDesc: '',
            QuestionID: random.int(0, 1000),
            QuestionRequired: 0,
            QuestionRules: '',
            QuestionText: '',
            QuestionType: item,
            requierdAttach: false,
            attach: [],
            numberAttatchFile: 0,
            typeAttatchFile: 'all'
        }
        setCreateSurvey(false)
        setSorvay([...survay, newSurvay])
    }
    useDidUpdate(()=>{
        if(createSurvey){
                anime({
                    targets : '.menu',
                    translateX: 0,
                    duration : 800,
                    
                }).play()
        }
        else {

            anime({
                targets : '.menu',
                translateX: 250,
                duration : 800,
                
            }).play()
        }
    } , [createSurvey])
    return (
        <div className="fixed menu translate-x-[250px] transition-all max-h-screen  z-20">
            <BtnShowDrawer isOpen={createSurvey} onClick={() => setCreateSurvey(!createSurvey)} />
           
                <Box  sx={{ width: '250px', backgroundColor: '#7ABA78', paddingY: '30px', paddingX: '15px' , borderRadius : '20px' }}>
                    <div className="space-y-5 relative ">
                        {
                            listSurvey.map((item, index) => (
                                <div key={index}>
                                    <p className="text-white font-medium text-lg">
                                        {item.title}
                                    </p>
                                    <hr />
                                    <div className="space-y-4 mt-3">
                                        {
                                            item.value.map(item => (
                                                <ButtonMenu key={item} onClick={() => onSurvey(item)}>
                                                    {
                                                        converTypeToPersian(item)
                                                    }
                                                </ButtonMenu>
                                                ))
                                        }

                                    </div>
                                </div>
                            )
                            )
                        }

                    </div>
                </Box>
           
        </div>
    )
}
export default MenuCreateSurvey