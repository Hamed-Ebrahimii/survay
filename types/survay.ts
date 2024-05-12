export interface Survay {
    "QuestionAnwseredValue": any,
    "QuestionID": number,
    "QuestionText": string,
    "QuestionDesc": string,
    "QuestionType": number,
    "QuestionRequired": number,
    "QuestionRules": string,
    "attach"? : File[] ,
    "isAttach" : boolean,
    "numberAttatchFile"? : number,
    "typeAttatchFile"? : "image" | "video" | "music" | "pdf" | "all",
    "requierdAttach" : boolean
}
export const questionTypesTexts: { [P: number]: string } = {
    0: 'پاسخ کوتاه',
    1: 'پاراگراف',
    2: 'چند انتخابی',
    3: 'تک انتخابی',
    4: 'مقیاس خطی',
    5: 'تاریخ',
    6: 'زمان',
    7: 'گزینشی'
}
export const questionTypes = ["short-answer", "paragraph", "multiple-choice", "single-choice", "linear-scale", "date", "time", "select-option"];

export interface SurvayList  {
        title : string
        value : Array<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 >
}
