import { httpService } from "@/server/service/httpService"
import { Survay } from "@/types/survay"

export const getAllSurvay = async () =>{
    return await httpService<Survay[]>({
        url : '/SurveyAnswerQuestion',
        method : 'get'
    })
}