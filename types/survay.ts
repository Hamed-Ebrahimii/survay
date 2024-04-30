export interface Survay {
    "id" : number ,
    "title" : string ,
    "question" : string,
    "type" : "text" | "button" | "radio" | "checkbox" | "drowpDown"
    "answers"? : 
        {
            "id" : number ,
            "answer" : string
        }[]
        requierd : boolean
}