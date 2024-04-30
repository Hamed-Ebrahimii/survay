export interface Survay {
    "id" : number ,
    "title" : string ,
    "question" : string,
    "answers" : 
        {
            "id" : number ,
            "answer" : string
        }[]
        requierd : boolean
}