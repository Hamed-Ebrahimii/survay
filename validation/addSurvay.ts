import { z } from "zod";

export const AddSurvayValidation = z.object({
    "QuestionText": z.string({required_error : 'لطفا متن سوال را وارد کنید '}).min(10 , 'سوال شما نباید کمتر از حرف باشد'),
    "QuestionRequired": z.boolean(),
    "QuestionRules": z.string().optional(),
    "attach" : z.instanceof(File).array().optional() ,
    "isAttach" : z.boolean(),
    "numberAttatchFile" : z.coerce.number().gte(0).optional(),
    "typeAttatchFile"  : z.string().optional(),
    "requierdAttach" : z.boolean().optional()
})

export type AddSurvayValidationType = z.infer<typeof AddSurvayValidation>