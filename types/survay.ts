export interface Survay {
    "QuestionAnwseredValue": any,
    "QuestionID": number,
    "QuestionText": string,
    "QuestionDesc": string,
    "QuestionType": number,
    "QuestionRequired": number,
    "QuestionRules": string
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

