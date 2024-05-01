export interface Survay {
    "id" : number ,
    "title" : string ,
    "question" : string,
    "type" : "text" | "button" | "radio" | "checkbox" | "drowpDown" | "textarea"
    "answers"? : 
        {
            "id" : number ,
            "answer" : string
        }[]
        requierd : boolean,
        userAnswer : string
}