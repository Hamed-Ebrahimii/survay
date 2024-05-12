import { questionTypesTexts } from "@/types/survay"

export const converTypeToPersian = (value : number) =>{
    return questionTypesTexts[value]
}