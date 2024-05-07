import { z } from "zod";

export const SurveyValidation = z.object({
    answer : z.string({required_error : 'پر کردن این بخش اجباری است'})
})

export type SurveyValidationType = z.infer<typeof SurveyValidation>