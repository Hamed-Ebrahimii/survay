import { ReactNode } from "react";

export interface Answers {
    requierd: any;
    title: ReactNode;
    id: number;
    questionId : number,
    answer : string 
}