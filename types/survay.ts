export interface Survay {
    "id" : number ,
    "title" : string ,
    "question" : string,
    "type" : "text" | "button" | "dropDown" | "checkBox" | "radioButton"
    "answers"? : 
        {
            "id" : number ,
            "answer" : string
        }[]
        requierd : boolean
}