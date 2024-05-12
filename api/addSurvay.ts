import { httpService } from "@/server/service/httpService";
import { Survay } from "@/types/survay";
export const addSurvay = async (data : Survay) =>{
        return await httpService({
            url : '/SurveyAnswerQuestion',
            method : 'post',
            data
        })
}