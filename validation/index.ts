import { z } from "zod";

export const SurveyValidation = z.object({
    answer : z.string({required_error : 'پر کردن این بخش اجباری است'}).optional(),
    attach : z.instanceof(File).refine((file : File) => !file , 'فایل اجباری است').optional()
})

export type SurveyValidationType = z.infer<typeof SurveyValidation>